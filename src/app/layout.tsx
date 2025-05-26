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
  title: "Alyssa Palmares",
  description: "Alyssa's Personal Website and Portfolio",
  openGraph: {
    type: "website",
    images: '/ograph.png',
    title: "Alyssa Palmares",
    description: "Alyssa's Personal Website and Portfolio",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${atkinsonHyperlegible.className} antialiased px-6 flex flex-col min-h-screen`}
      >
        <Header />
        {children}
        <Footer />
        <Analytics />
        <SpeedInsights />
        {/* Google tag (gtag.js) */}
        <Script id="next" async src='https://www.googletagmanager.com/gtag/js?id=G-66GNBE41L3' />
        <Script id="next">
          {
            `window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-66GNBE41L3');`
          }
        </Script>
      </body>
    </html>
  );
}
