import * as React from "react";
import type { Metadata, Viewport } from "next";
import ThemeRegistry from "./ThemeRegistry";

// ✅ Viewport MUST be a separate export
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

// ✅ Metadata ONLY for SEO / OG
export const metadata: Metadata = {
  title: "Prathamesh Barge | Software Developer",
  description:
    "Software Developer specializing in MERN stack, React, Next.js, and NestJS. Explore my projects and experience.",

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
          {children}
        </ThemeRegistry>
      </body>
    </html>
  );
}
