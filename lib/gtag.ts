// Google Ads conversion labels for the "Submit lead form" action.
// The matching AW-* accounts are configured in app/layout.tsx.
export const LEAD_FORM_CONVERSIONS = [
  "AW-18154479899/grmHCl3ijaecBJvC3dRD",
  "AW-11499123226/jm8HCLWpxfocEJrkmusq",
];

export const trackLeadFormConversion = () => {
  if (typeof window === "undefined") return;

  const gtag = (window as any).gtag;
  if (typeof gtag !== "function") return;

  LEAD_FORM_CONVERSIONS.forEach((sendTo) => {
    gtag("event", "conversion", {
      send_to: sendTo,
      value: 1.0,
      currency: "INR",
    });
  });
};
