import { NextResponse } from "next/server";
import { sendEnquiryNotifications } from "@/lib/enquiry-notifications";

export const runtime = "nodejs";

type EnquiryPayload = {
  name?: string;
  mobile?: string;
  ageGroup?: string;
  source?: string;
};

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as EnquiryPayload;
    const payload = {
      name: body.name?.trim() || "",
      mobile: body.mobile?.trim() || "",
      ageGroup: body.ageGroup?.trim() || "",
      source: body.source?.trim() || "Website Enquiry",
    };

    if (!payload.name || !payload.mobile || !payload.ageGroup) {
      return NextResponse.json(
        { error: "Please fill in all required fields" },
        { status: 400 }
      );
    }

    if (!/^\d{10}$/.test(payload.mobile)) {
      return NextResponse.json(
        { error: "Mobile number must be exactly 10 digits" },
        { status: 400 }
      );
    }

    const notifications = await sendEnquiryNotifications(payload);

    return NextResponse.json({ success: true, ...notifications });
  } catch (error) {
    console.error("Error submitting enquiry:", error);
    return NextResponse.json(
      { error: "Failed to submit application. Please try again." },
      { status: 500 }
    );
  }
}
