// Shared by every enquiry form (counselling popup, /contact page) so the
// dropdown options and location detection can't drift apart.

export const AGE_OPTIONS = ["Below 18", "18-29", "30 and above"];

export const QUALIFICATION_OPTIONS = [
  "12th Pass",
  "Pursuing Graduation",
  "Graduated",
];

export const COURSE_OPTIONS = [
  "Cabin Crew",
  "Ground Staff",
  "Hospitality & Retail",
  "Interview Preparation",
];

/**
 * Asks the browser for location permission, then turns the coordinates into a
 * city name. Coordinates are only used for this lookup and are never stored.
 * Rejects with a user-friendly message that is safe to show in the form.
 */
export const detectCityFromBrowser = (): Promise<string> =>
  new Promise((resolve, reject) => {
    if (typeof navigator === "undefined" || !("geolocation" in navigator)) {
      reject(new Error("Location is not supported here. Please type your city."));
      return;
    }

    navigator.geolocation.getCurrentPosition(
      async ({ coords }) => {
        try {
          const res = await fetch(
            `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${coords.latitude}&longitude=${coords.longitude}&localityLanguage=en`
          );
          const geo = await res.json();
          const place = geo.city || geo.locality || geo.principalSubdivision;
          if (!place) throw new Error("No place found");
          resolve(place);
        } catch {
          reject(new Error("Couldn't detect your city. Please type it in."));
        }
      },
      (err) =>
        reject(
          new Error(
            err.code === err.PERMISSION_DENIED
              ? "Location permission denied. Please type your city."
              : "Couldn't get your location. Please type your city."
          )
        ),
      { enableHighAccuracy: false, timeout: 10000, maximumAge: 300000 }
    );
  });
