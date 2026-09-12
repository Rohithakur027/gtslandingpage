import { NextResponse } from "next/server";
import {
  normalizeLeadPayload,
  LeadValidationError,
} from "@/lib/lead-validation";
import { sendEnquiryNotifications } from "@/lib/enquiry-notifications";

export const runtime = "nodejs";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    if (!body || typeof body !== "object" || Array.isArray(body)) {
      return NextResponse.json(
        { error: "Please submit valid form details" },
        { status: 400 }
      );
    }

    const payload = normalizeLeadPayload(body as Record<string, unknown>);

    const notifications = await sendEnquiryNotifications({
      name: payload.fullName,
      mobile: payload.phoneRaw,
      ageGroup: payload.ageGroup || "",
      source: "Website Form",
    });

    // The sheet is the system of record for leads, so a failed sync is a
    // failed submission — surface it instead of showing a false success.
    if (!notifications.sheetSynced) {
      return NextResponse.json(
        { error: "Failed to submit request. Please try again." },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      ...notifications,
    });
  } catch (error) {
    if (error instanceof LeadValidationError) {
      return NextResponse.json({ error: error.message }, { status: 400 });
    }

    console.error("Error capturing website lead:", error);
    return NextResponse.json(
      { error: "Failed to submit request. Please try again." },
      { status: 500 }
    );
  }
}
