// Google Ads conversion label for the "Submit lead form" action.
// The matching AW-* account is configured in app/layout.tsx.
export const LEAD_FORM_CONVERSION = "AW-11499123226/jm8HCLWpxfocEJrkmusq";

export const trackLeadFormConversion = () => {
  if (typeof window === "undefined") return;

  const gtag = (window as any).gtag;
  if (typeof gtag !== "function") return;

  gtag("event", "conversion", {
    send_to: LEAD_FORM_CONVERSION,
    value: 1.0,
    currency: "INR",
  });
};
