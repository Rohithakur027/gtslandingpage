export default function WebSiteSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Ground to Sky Academy",
    "alternateName": "GTS Academy",
    "url": "https://groundtosky.in",
    "description":
      "Leading aviation and hospitality training academy in Delhi offering air hostess, cabin crew, ground staff, and hotel management courses with 100% placement assistance.",
    "inLanguage": "en-IN",
    "potentialAction": {
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": "https://groundtosky.in/blog?q={search_term_string}",
      },
      "query-input": "required name=search_term_string",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
