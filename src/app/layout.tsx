import type { Metadata } from "next";
import Navbar from "@/components/common/Navbar";
import Footer from "@/components/common/Footer";
import { ThemeProvider } from "@/components/ThemeProvider";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ghanchi Samaj Pali Rajasthan | घांची समाज पाली राजस्थान",
  description: "Ghanchi Samaj Pali Rajasthan - Official website of Ghanchi Samaj community in Pali, Rajasthan, India. Get information about community events, committee members, matrimonial services, blood donors, and community funds. घांची समाज पाली राजस्थान की आधिकारिक वेबसाइट।",
  keywords: [
    "ghanchi",
    "ghanchi samaj",
    "samaj",
    "ghanchi samaj pali",
    "pali",
    "pali rajasthan",
    "ghanchisamajpalirajasthan",
    "ghanchi samaj pali rajasthan",
    "ghanchi samaj india",
    "घांची समाज",
    "घांची समाज पाली",
    "पाली राजस्थान",
    "ghanchi community",
    "pali community",
    "rajasthan samaj",
    "ghanchi community pali",
    "ghanchi matrimonial",
    "ghanchi blood donor",
    "ghanchi events",
  ],
  authors: [{ name: "Ghanchi Samaj Pali" }],
  creator: "Ghanchi Samaj Pali Rajasthan",
  publisher: "Ghanchi Samaj Pali",
  metadataBase: new URL("https://ketandevra.github.io"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "hi_IN",
    alternateLocale: ["en_IN"],
    url: "https://ketandevra.github.io/ketandevra.github.io/",
    title: "Ghanchi Samaj Pali Rajasthan | घांची समाज पाली राजस्थान",
    description: "Official website of Ghanchi Samaj Pali Rajasthan. Community services, events, matrimonial, blood donors, and more. घांची समाज पाली राजस्थान की आधिकारिक वेबसाइट।",
    siteName: "Ghanchi Samaj Pali Rajasthan",
    images: [
      {
        url: "/ketandevra.github.io/images/banner.png",
        width: 1200,
        height: 630,
        alt: "Ghanchi Samaj Pali Rajasthan",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ghanchi Samaj Pali Rajasthan",
    description: "Official website of Ghanchi Samaj Pali Rajasthan. Community services, events, matrimonial, blood donors.",
    images: ["/ketandevra.github.io/images/banner.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    // Add your verification codes here when you get them
    // google: "your-google-verification-code",
    // yandex: "your-yandex-verification-code",
    // bing: "your-bing-verification-code",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="hi" suppressHydrationWarning>
      <head>
        <meta name="geo.region" content="IN-RJ" />
        <meta name="geo.placename" content="Pali" />
        <meta name="geo.position" content="25.7711;73.3234" />
        <meta name="ICBM" content="25.7711, 73.3234" />
      </head>
      <body className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
        <ThemeProvider>
          <div className="grid grid-rows-[auto_1fr_auto] min-h-screen">
            <Navbar />
            {children}
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
