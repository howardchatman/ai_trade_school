import type { Metadata } from "next";
import { Geist, Geist_Mono, Playfair_Display } from "next/font/google";
import { Toaster } from "@/components/ui/sonner";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["600", "700"],
});

export const metadata: Metadata = {
  title: "AI Trade School | Master the AI Economy",
  description: "Learn to operate, build, and lead with AI. Professional training for the new economy.",
  keywords: ["AI training", "AI education", "machine learning", "professional development"],
  icons: {
    icon: "/logo-black.png",
    apple: "/logo-black.png",
  },
  openGraph: {
    title: "AI Trade School",
    description: "Master the AI Economy",
    type: "website",
    images: ["/logo-white.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${playfair.variable} font-sans antialiased min-h-screen`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
