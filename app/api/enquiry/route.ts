import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export const runtime = "nodejs";

type EnquiryPayload = {
  name?: string;
  mobile?: string;
  ageGroup?: string;
  source?: string;
};

type NormalizedEnquiryPayload = {
  name: string;
  mobile: string;
  ageGroup: string;
  source: string;
};

const GOOGLE_SCRIPT_URL =
  process.env.GOOGLE_SCRIPT_URL ||
  "https://script.google.com/macros/s/AKfycbyviVIE7-c_Es0gNz64Q-9PeIuXXJ9s6C7wddXySZYQFHGtz1mRCjsvsowxrRifs4IT/exec";

const escapeHtml = (value: string) =>
  value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");

const parseEmailList = (value = "") =>
  value
    .split(",")
    .map((email) => email.trim())
    .filter(Boolean);

const submitToGoogleSheets = async (payload: NormalizedEnquiryPayload) => {
  const formData = new FormData();
  formData.append("name", payload.name);
  formData.append("mobile", payload.mobile);
  formData.append("ageGroup", payload.ageGroup);
  formData.append("timestamp", new Date().toISOString());
  formData.append("source", payload.source);

  const response = await fetch(GOOGLE_SCRIPT_URL, {
    method: "POST",
    body: formData,
  });

  const result = await response.text();
  if (!result.includes("Success")) {
    throw new Error("Google Sheets submission failed");
  }
};

const sendLeadEmail = async (payload: NormalizedEnquiryPayload) => {
  const {
    SMTP_HOST,
    SMTP_PORT,
    SMTP_SECURE,
    SMTP_USER,
    SMTP_PASS,
    SMTP_FROM,
    MAIL_FROM,
    INTERNAL_NOTIFY_EMAILS,
  } = process.env;

  const notifyEmails = parseEmailList(INTERNAL_NOTIFY_EMAILS);
  const missingEnvVars = [
    ["SMTP_HOST", SMTP_HOST],
    ["SMTP_PORT", SMTP_PORT],
    ["SMTP_USER", SMTP_USER],
    ["SMTP_PASS", SMTP_PASS],
    ["INTERNAL_NOTIFY_EMAILS", notifyEmails.length > 0 ? "set" : ""],
  ]
    .filter(([, value]) => !value)
    .map(([key]) => key);

  if (missingEnvVars.length > 0) {
    console.warn(
      `Lead email skipped: missing env vars: ${missingEnvVars.join(", ")}`
    );
    return false;
  }

  const transporter = nodemailer.createTransport({
    host: SMTP_HOST,
    port: Number(SMTP_PORT),
    secure: SMTP_SECURE === "true",
    auth: {
      user: SMTP_USER,
      pass: SMTP_PASS,
    },
  });

  const fromEmail = SMTP_FROM || MAIL_FROM || SMTP_USER;
  const safePayload = {
    name: escapeHtml(payload.name),
    mobile: escapeHtml(payload.mobile),
    ageGroup: escapeHtml(payload.ageGroup),
    source: escapeHtml(payload.source),
  };

  await transporter.sendMail({
    from: fromEmail,
    to: notifyEmails,
    subject: `New enquiry from ${payload.name}`,
    replyTo: fromEmail,
    text: [
      "New Ground to Sky enquiry",
      "",
      `Name: ${payload.name}`,
      `Mobile: ${payload.mobile}`,
      `Age Group: ${payload.ageGroup}`,
      `Source: ${payload.source}`,
    ].join("\n"),
    html: `
      <h2>New Ground to Sky enquiry</h2>
      <table cellpadding="8" cellspacing="0" style="border-collapse:collapse">
        <tr><td><strong>Name</strong></td><td>${safePayload.name}</td></tr>
        <tr><td><strong>Mobile</strong></td><td>${safePayload.mobile}</td></tr>
        <tr><td><strong>Age Group</strong></td><td>${safePayload.ageGroup}</td></tr>
        <tr><td><strong>Source</strong></td><td>${safePayload.source}</td></tr>
      </table>
    `,
  });

  return true;
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

    await submitToGoogleSheets(payload);
    const emailSent = await sendLeadEmail(payload);

    return NextResponse.json({ success: true, emailSent });
  } catch (error) {
    console.error("Error submitting enquiry:", error);
    return NextResponse.json(
      { error: "Failed to submit application. Please try again." },
      { status: 500 }
    );
  }
}
