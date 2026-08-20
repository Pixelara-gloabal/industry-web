import localFont from "next/font/local";

import type { Metadata } from "next";

import { Footer } from "@/components/blocks/footer";
import { Navbar } from "@/components/blocks/navbar";
import { StyleGlideProvider } from "@/components/styleglide-provider";
import { ThemeProvider } from "@/components/theme-provider";
import "@/styles/globals.css";

const dmSans = localFont({
  src: [
    {
      path: "../../fonts/dm-sans/DMSans-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../fonts/dm-sans/DMSans-Italic.ttf",
      weight: "400",
      style: "italic",
    },
    {
      path: "../../fonts/dm-sans/DMSans-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../fonts/dm-sans/DMSans-MediumItalic.ttf",
      weight: "500",
      style: "italic",
    },
    {
      path: "../../fonts/dm-sans/DMSans-SemiBold.ttf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../../fonts/dm-sans/DMSans-SemiBoldItalic.ttf",
      weight: "600",
      style: "italic",
    },
    {
      path: "../../fonts/dm-sans/DMSans-Bold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../../fonts/dm-sans/DMSans-BoldItalic.ttf",
      weight: "700",
      style: "italic",
    },
  ],
  variable: "--font-dm-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Pixelara Industrial | Power Transmission & Conveyor Engineering",
    template: "%s | Pixelara Industrial",
  },
  description:
    "Manufacturer of high-torque SMSR gearboxes, shaft mounted speed reducers, heavy conveyor drive components, and magnetic separation systems.",
  keywords: [
    "Pixelara Industrial",
    "SMSR gearbox",
    "shaft mounted speed reducer",
    "conveyor drives",
    "taper lock pulleys",
    "magnetic drum pulleys",
    "industrial power transmission",
    "ISO 9001 certified gearboxes",
  ],
  authors: [{ name: "Pixelara Industrial Engineering Team" }],
  creator: "Pixelara Industrial Solutions",
  publisher: "Pixelara Industrial Solutions",
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: [
      { url: "/favicon/favicon.ico", sizes: "48x48" },
      { url: "/favicon/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon/favicon-96x96.png", sizes: "96x96", type: "image/png" },
    ],
    apple: [{ url: "/favicon/apple-touch-icon.png", sizes: "180x180" }],
    shortcut: [{ url: "/favicon/favicon.ico" }],
  },
  openGraph: {
    title: "Pixelara Industrial | Power Transmission & Conveyor Engineering",
    description:
      "Precision power transmission units, SMSR gearboxes, conveyor components, and magnetic separation equipment engineered for extreme heavy-duty performance.",
    siteName: "Pixelara Industrial",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pixelara Industrial | Heavy Power Transmission",
    description:
      "Precision gearboxes, speed reducers, and bulk material handling systems engineered for mining, cement, and steel operations.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Pixelara Industrial",
    url: "https://pixelara-industrial.com",
    logo: "https://pixelara-industrial.com/favicon/favicon-96x96.png",
    description:
      "Manufacturer of high-performance power transmission gearboxes, conveyor components, and magnetic separators.",
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+1-800-555-7493",
      contactType: "customer service",
      areaServed: "Worldwide",
      availableLanguage: "English",
    },
  };

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${dmSans.variable} antialiased font-sans bg-[#0b0d0e] text-[#f5f5f2]`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          <StyleGlideProvider />
          <Navbar />
          <main className="min-h-screen">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
