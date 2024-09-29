import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import "./globals.css";
import { Navbar } from "@/components/nav";
import { Footer } from "@/components/footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://mithrilai.xyz"),
  title: {
    default: "Mithril AI",
    template: `%s | Mithril AI`,
  },
  description: "Open Science AI Research Lab",
  openGraph: {
    images: "/opengraph.png",
    title: "Mithril AI",
    description: "Open Science AI Research Lab",
    url: "https://mithrilai.xyz",
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
          <div className="absolute right-0 bottom-0 -z-10">
            <svg
              width="800"
              height="550"
              viewBox="0 0 902 703"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M255.687 497.711L179.181 702H1L263.098 2.12392L525.372 702H347.211L270.654 497.709L263.169 477.731L255.687 497.711ZM550.422 240.857L638.674 2L901 702H722.93L550.422 240.857Z"
                stroke="#2B2B2B"
              />
            </svg>
          </div>
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
