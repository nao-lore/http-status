import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  verification: {
    google: "uRTAz7j8N8jDW5BzJaGn-wzrFY5C7KNStVLMKlGzo_4",
  },
  title: "HTTP Status Codes - Complete Reference Guide | http-status",
  description:
    "Complete HTTP status code reference. Look up any HTTP response code with descriptions, examples, and when you encounter them. Covers 1xx, 2xx, 3xx, 4xx, and 5xx codes.",
  keywords: [
    "http status codes",
    "http response codes",
    "status code list",
    "404 meaning",
    "500 error",
    "http codes reference",
  ],
  authors: [{ name: "http-status" }],
  openGraph: {
    title: "HTTP Status Codes - Complete Reference Guide",
    description:
      "Complete HTTP status code reference with descriptions, examples, and explanations for every code from 100 to 599.",
    url: "https://http-status.vercel.app",
    siteName: "http-status",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "HTTP Status Codes - Complete Reference Guide",
    description:
      "Complete HTTP status code reference with descriptions, examples, and explanations for every code from 100 to 599.",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://http-status.vercel.app",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebApplication",
              name: "HTTP Status Codes Reference",
              description:
                "Complete HTTP status code reference guide with descriptions, examples, and explanations for every HTTP response code.",
              url: "https://http-status.vercel.app",
              applicationCategory: "DeveloperApplication",
              operatingSystem: "Any",
              browserRequirements: "Requires JavaScript",
              offers: {
                "@type": "Offer",
                price: "0",
                priceCurrency: "USD",
              },
              featureList: [
                "Complete HTTP status code reference",
                "Search and filter by code or keyword",
                "Color-coded categories",
                "Detailed explanations with examples",
                "One-click copy to clipboard",
              ],
            }),
          }}
        />
      </head>
      <body className="min-h-screen bg-white text-gray-900">
        {children}
      </body>
    </html>
  );
}
