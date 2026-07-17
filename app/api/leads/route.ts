import { NextResponse } from "next/server";
import {
  ingestWebsiteLead,
  LeadValidationError,
} from "@/lib/lead-ingestion";
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

    const result = await ingestWebsiteLead({
      body: body as Record<string, unknown>,
      headers: request.headers,
    });
    let notifications = {
      sheetSynced: false,
      emailSent: false,
    };

    try {
      notifications = await sendEnquiryNotifications(result.notificationPayload);
    } catch (notificationError) {
      console.error(
        "Lead saved but enquiry notifications failed:",
        notificationError
      );
    }

    return NextResponse.json({
      success: true,
      leadId: result.lead.id,
      created: result.created,
      ...notifications,
    });
  } catch (error) {
    if (error instanceof LeadValidationError) {
      return NextResponse.json({ error: error.message }, { status: 400 });
    }

    console.error("Error ingesting website lead:", error);
    return NextResponse.json(
      { error: "Failed to submit request. Please try again." },
      { status: 500 }
    );
  }
}
