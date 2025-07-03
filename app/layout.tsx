import type React from "react";
import type { Metadata } from "next";
import "./globals.css";
import ClientLayout from "./clientlayout";
import { GoogleTagManager } from "@next/third-parties/google";

export const metadata: Metadata = {
  title: "Top Air Hostess Academy in Delhi | Cabin Crew & Hospitality Training",
  description:
    "Join the best air hostess training academy in Delhi. Get expert guidance, practical training, and 100% placement assistance for a successful aviation and hospitality career.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Meta Pixel Code */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
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
            `,
          }}
        />
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=702648975458466&ev=PageView&noscript=1"
          />
        </noscript>
      </head>
      <body>
        <GoogleTagManager gtmId="GTM-KDWXFFLN" />
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
