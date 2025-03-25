import { SpeedInsights } from '@vercel/speed-insights/next';
import { Analytics } from '@vercel/analytics/next';
import Header from "@/components/Header";
import type { Metadata } from "next";
import {Atkinson_Hyperlegible } from "next/font/google";
import "./globals.css";
import Footer from '@/components/Footer';

const atkinsonHyperlegible = Atkinson_Hyperlegible({
  weight: ['400', '700'], // Regular (400) and Bold (700)
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Alyssa Palmares",
  description: "Alyssa's Personal Website and Portfolio",
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
        <Header/>
        {children}
        <Footer/>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
