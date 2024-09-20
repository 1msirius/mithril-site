import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import "./globals.css";
import { Navbar } from "@/components/nav";
import { Footer } from "@/components/footer";
import { Animation } from "@/components/animation";

export const metadata: Metadata = {
  metadataBase: new URL("https://mithrilai.vercel.app/"),
  title: {
    default: "Mithril AI",
    template: `%s | Mithril AI`,
  },
  description: "Open Science AI Research Lab",
  openGraph: {
    images: "/opengraph.png",
    title: "Mithril AI",
    description: "Open Science AI Research Lab",
    url: "https://mithrilai.vercel.app/",
    siteName: "Mithril AI",
    locale: "en_US",
    type: "website",
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
  twitter: {
    title: "MithrilAI",
    card: "summary_large_image",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${GeistSans.variable} ${GeistMono.variable}`}>
      <body className="relative">
        <div className="px-8 py-4 md:px-16 md:py-10">
          <Navbar />
          <div className="absolute inset-0 -z-10">
            <Animation />
          </div>
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
