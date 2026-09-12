export type LeadRequestPayload = Record<string, unknown>;

export type NormalizedLeadPayload = {
  fullName: string;
  phoneRaw: string;
  normalizedPhone: string;
  ageGroup: string | null;
};

export class LeadValidationError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "LeadValidationError";
  }
}

const getString = (value: unknown) =>
  typeof value === "string" ? value.trim() : "";

const toNullableString = (value: string) => (value ? value : null);

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

  return {
    fullName,
    phoneRaw,
    normalizedPhone,
    ageGroup,
  };
};
