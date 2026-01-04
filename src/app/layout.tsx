import * as React from "react";
import type { Metadata } from "next";
import ThemeRegistry from "./ThemeRegistry";
// import Navigation from "../component/Navigation";

export const metadata: Metadata = {
  // ✅ Viewport (keep this)
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
    userScalable: false,
  },

  // ✅ SEO basics
  title: "Prathamesh Barge | Software Developer",
  description:
    "Software Developer specializing in MERN stack, React, Next.js, and NestJS. Explore my projects and experience.",

  // ✅ Open Graph (LinkedIn reads THIS)
  openGraph: {
    title: "Prathamesh Barge | Software Developer",
    description:
      "Software Developer specializing in MERN stack, React, Next.js, and NestJS.",
    url: "https://prathamesh-barge.netlify.app/",
    siteName: "Prathamesh Portfolio",
    images: [
      {
        url: "https://prathamesh-barge.netlify.app/og-image.png",
        width: 1200,
        height: 630,
        alt: "Prathamesh Barge Portfolio",
      },
    ],
    type: "website",
  },

  // ✅ Twitter (optional but good)
  twitter: {
    card: "summary_large_image",
    title: "Prathamesh Barge | Software Developer",
    description:
      "Software Developer specializing in MERN stack, React, Next.js, and NestJS.",
    images: ["https://prathamesh-barge.netlify.app/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <ThemeRegistry options={{ key: "mui" }}>
          {/* <Navigation /> */}
          {children}
        </ThemeRegistry>
      </body>
    </html>
  );
}

