import { Prisma, type leads } from "@prisma/client";
import { prisma } from "@/lib/prisma";

type LeadRequestPayload = Record<string, unknown>;

type NormalizedLeadPayload = {
  fullName: string;
  phoneRaw: string;
  normalizedPhone: string;
  ageGroup: string | null;
};

const WEBSITE_FORM = "WEBSITE_FORM";
const WEBSITE = "WEBSITE";

const getString = (value: unknown) =>
  typeof value === "string" ? value.trim() : "";

const toNullableString = (value: string) => (value ? value : null);

const normalizeEmail = (value: unknown) => {
  const email = getString(value).toLowerCase();
  return email || null;
};

export const normalizeIndianPhone = (phone: string) => {
  const digits = phone.replace(/\D/g, "");
  let nationalNumber = digits;

  if (nationalNumber.length === 11 && nationalNumber.startsWith("0")) {
    nationalNumber = nationalNumber.slice(1);
  }

  if (nationalNumber.length === 12 && nationalNumber.startsWith("91")) {
    nationalNumber = nationalNumber.slice(2);
  }

  if (nationalNumber.length !== 10) {
    return null;
  }

  return `+91${nationalNumber}`;
};

export const normalizeLeadPayload = (
  body: LeadRequestPayload
): NormalizedLeadPayload => {
  const fullName = getString(body.full_name) || getString(body.name);
  const phoneRaw =
    getString(body.phone) ||
    getString(body.mobile_number) ||
    getString(body.mobile);
  const ageGroup = toNullableString(
    getString(body.age_group) || getString(body.ageGroup)
  );
  const normalizedPhone = normalizeIndianPhone(phoneRaw);

  if (!fullName) {
    throw new LeadValidationError("Full name is required");
  }

  if (!phoneRaw) {
    throw new LeadValidationError("Phone number is required");
  }

  if (!normalizedPhone) {
    throw new LeadValidationError("Enter a valid Indian phone number");
  }

  normalizeEmail(body.email);

  return {
    fullName,
    phoneRaw,
    normalizedPhone,
    ageGroup,
  };
};

export class LeadValidationError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "LeadValidationError";
  }
}

const jsonObject = (value: unknown): Prisma.InputJsonObject =>
  value && typeof value === "object" && !Array.isArray(value)
    ? (value as Prisma.InputJsonObject)
    : {};

const withAgeGroupMetadata = (ageGroup: string | null) => ({
  age_group: ageGroup,
});

const mergeProfileMetadata = (
  existingMetadata: Prisma.JsonValue,
  ageGroup: string | null
): Prisma.InputJsonObject => {
  const metadata = jsonObject(existingMetadata);

  if (ageGroup) {
    return {
      ...metadata,
      age_group: ageGroup,
    };
  }

  return metadata;
};

const buildExistingLeadUpdate = (
  existingLead: leads,
  payload: NormalizedLeadPayload,
  now: Date
): Prisma.leadsUpdateInput => ({
  full_name: payload.fullName || existingLead.full_name,
  phone_raw: payload.phoneRaw || existingLead.phone_raw,
  last_enquiry_at: now,
  updated_at: now,
  profile_metadata: mergeProfileMetadata(
    existingLead.profile_metadata,
    payload.ageGroup
  ),
});

export const headersToJson = (headers: Headers): Prisma.InputJsonObject => {
  const rawHeaders: Record<string, string> = {};
  headers.forEach((value, key) => {
    rawHeaders[key] = value;
  });
  return rawHeaders as Prisma.InputJsonObject;
};

export const ingestWebsiteLead = async ({
  body,
  headers,
}: {
  body: LeadRequestPayload;
  headers: Headers;
}) => {
  const payload = normalizeLeadPayload(body);
  const rawHeaders = headersToJson(headers);
  const now = new Date();
  const referer = headers.get("referer") || headers.get("referrer");

  return prisma.$transaction(async (tx) => {
    await tx.$executeRaw`
      SELECT pg_advisory_xact_lock(hashtext(${payload.normalizedPhone})::bigint)
    `;

    const existingLead = await tx.leads.findFirst({
      where: {
        normalized_phone: payload.normalizedPhone,
      },
      orderBy: {
        created_at: "asc",
      },
    });

    const lead = existingLead
      ? await tx.leads.update({
          where: {
            id: existingLead.id,
          },
          data: buildExistingLeadUpdate(existingLead, payload, now),
        })
      : await tx.leads.create({
          data: {
            full_name: payload.fullName,
            phone_raw: payload.phoneRaw,
            normalized_phone: payload.normalizedPhone,
            email: null,
            city: null,
            education_qualification: null,
            preferred_language: null,
            lifecycle_stage: "NEW",
            contact_status: "NOT_ATTEMPTED",
            admission_outcome: "NOT_APPLICABLE",
            priority: "NORMAL",
            lead_score: 0,
            contact_attempt_count: 0,
            first_received_at: now,
            last_enquiry_at: now,
            profile_metadata: withAgeGroupMetadata(payload.ageGroup),
          },
        });

    const ingestionEvent = await tx.lead_ingestion_events.create({
      data: {
        lead_id: lead.id,
        ingestion_source: WEBSITE_FORM,
        external_event_id: null,
        raw_payload: body as Prisma.InputJsonValue,
        raw_headers: rawHeaders,
        processing_status: "SUCCESS",
        processing_error: null,
        processed_at: now,
      },
    });

    await tx.lead_attributions.create({
      data: {
        lead_id: lead.id,
        ingestion_event_id: ingestionEvent.id,
        submission_channel: WEBSITE_FORM,
        acquisition_source: WEBSITE,
        acquisition_medium: null,
        touch_type: "CONVERSION_TOUCH",
        utm_source: null,
        utm_medium: null,
        utm_campaign: null,
        utm_content: null,
        utm_term: null,
        campaign_id: null,
        campaign_name: null,
        ad_set_id: null,
        ad_set_name: null,
        ad_id: null,
        ad_name: null,
        form_id: null,
        form_name: "Free Counseling Form",
        fbclid: null,
        gclid: null,
        msclkid: null,
        landing_page_url: null,
        form_page_url: referer,
        referrer_url: referer,
        source_created_at: null,
        captured_at: now,
        metadata: withAgeGroupMetadata(payload.ageGroup),
      },
    });

    await tx.lead_stage_history.create({
      data: {
        lead_id: lead.id,
        from_stage: existingLead ? existingLead.lifecycle_stage : null,
        to_stage: lead.lifecycle_stage,
        changed_by_type: "SYSTEM",
        reason_code: existingLead
          ? "WEBSITE_RE_ENQUIRY"
          : "WEBSITE_LEAD_CREATED",
        notes: existingLead
          ? "Lead re-enquiry from website form"
          : "Lead created from website form",
        metadata: {
          ingestionSource: WEBSITE_FORM,
          age_group: payload.ageGroup,
        },
      },
    });

    return {
      lead,
      ingestionEvent,
      created: !existingLead,
      notificationPayload: {
        name: payload.fullName,
        mobile: payload.phoneRaw,
        ageGroup: payload.ageGroup || "",
        source: "Website Form",
      },
    };
  });
};
