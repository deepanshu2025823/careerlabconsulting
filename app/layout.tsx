import type { Metadata, Viewport } from "next"; 
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { SpeedInsights } from "@vercel/speed-insights/next";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap", 
});

export const viewport: Viewport = {
  themeColor: "#000000", 
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL('https://careerlabconsulting.com'), 
  title: {
    default: "Career Lab Consulting | AI Solution Ecosystem",
    template: "%s | Career Lab Consulting",
  },
  description: "Bridging the gap between talent and industry through professional career coaching and AI-driven business consulting.",
  keywords: ["Career Consulting", "B2B Solutions", "AI Business Consulting", "Job Placement"],
  robots: "index, follow",
  openGraph: {
    title: "Career Lab Consulting",
    description: "Expert B2B and B2C Career & Business Solutions.",
    url: 'https://careerlabconsulting.com',
    siteName: 'Career Lab Consulting',
    locale: 'en_US',
    type: 'website',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ProfessionalService",
              "name": "Career Lab Consulting",
              "description": "Expert B2B and B2C solutions.",
              "url": "https://careerlabconsulting.com"
            }),
          }}
        />
      </head>
      <body className={`${geistSans.variable} antialiased font-sans bg-black text-white`}>
        {children}
        <SpeedInsights />
      </body>
    </html>
  );
}