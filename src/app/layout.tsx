import { SpeedInsights } from '@vercel/speed-insights/next';
import { Analytics } from '@vercel/analytics/next';
import { Atkinson_Hyperlegible } from "next/font/google";
import type { Metadata } from "next";
import Script from 'next/script';
import Header from "@/components/Header";
import Footer from '@/components/Footer';
import "./globals.css";

const atkinsonHyperlegible = Atkinson_Hyperlegible({
  weight: ['400', '700'], // Regular (400) and Bold (700)
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://zobhhz.github.io'),
  title: "Alyssa Palmares",
  description: "Alyssa's Personal Website and Portfolio",
  openGraph: {
    type: "website",
    images: '/opengraph-image.png',
    title: "Alyssa Palmares",
    description: "Alyssa's Personal Website and Portfolio",
    url: 'https://zobhhz.github.io',
  }
};

export default function RootLayout({ children, }: Readonly<{ children: React.ReactNode; }>) {
  const gtagId = process.env.NEXT_PUBLIC_GTAG_ID;
  return (
    <html lang="en">
      <body
        className={`${atkinsonHyperlegible.className} antialiased flex flex-col min-h-screen`}
      >
        <Header />
        {children}
        <Footer />
        <Analytics />
        <SpeedInsights />
        {/* Google tag (gtag.js) */}
        <Script id="gtag-src" async src={`https://www.googletagmanager.com/gtag/js?id=${gtagId}`} />
        <Script id="gtag-config">
          {
            `window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', '${gtagId}');`
          }
        </Script>
      </body>
    </html>
  );
}
