import type React from "react";
import type { Metadata } from "next";
import "./globals.css";
import ClientLayout from "./clientlayout";
import { GoogleTagManager } from "@next/third-parties/google";
import { GoogleAnalytics } from "@next/third-parties/google";
import Script from "next/script";
import OrganizationSchema from "@/components/organization-schema";
import WebSiteSchema from "@/components/website-schema";

export const metadata: Metadata = {
  title: {
    default: "Best Air Hostess & Ground Staff Training Institute in Delhi | Ground to Sky Academy",
    template: "%s | Ground to Sky Academy",
  },
  description:
    "Join Delhi's top aviation training academy near Janakpuri Metro. Professional cabin crew, air hostess, ground staff & hospitality courses with 100% placement support. Enroll now!",
  keywords:
    "air hostess training Delhi, ground staff training Delhi, cabin crew training Delhi, aviation training courses Delhi India, best air hostess academy Delhi, cabin crew course Janakpuri, airport ground staff course Delhi, hotel management course Delhi, aviation hospitality training Delhi",
  metadataBase: new URL("https://groundtosky.in"),
  openGraph: {
    siteName: "Ground to Sky Academy",
    type: "website",
    locale: "en_IN",
    images: [
      {
        url: "https://groundtosky.in/images/GTS-Logo.png",
        width: 1200,
        height: 630,
        alt: "Ground to Sky Academy — Best Air Hostess & Aviation Training Institute in Delhi",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-IN">
      <head>
        <OrganizationSchema />
        <WebSiteSchema />

        {/* Google Ads conversion tracking */}
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=AW-17452776636"
          strategy="afterInteractive"
        />
        <Script id="google-ads-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-17452776636');
          `}
        </Script>

        {/* Meta Pixel Code */}
        <Script id="meta-pixel" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '702648975458466');
            fbq('track', 'PageView');
          `}
        </Script>

        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=702648975458466&ev=PageView&noscript=1"
            alt=""
          />
        </noscript>
      </head>
      <body>
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:bg-white focus:px-4 focus:py-2 focus:rounded focus:shadow-lg focus:text-[#032789] focus:font-medium"
        >
          Skip to main content
        </a>
        <GoogleTagManager gtmId="GTM-WX5DTG84" />
        <GoogleAnalytics gaId="G-PH97TZDLK0" />
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
