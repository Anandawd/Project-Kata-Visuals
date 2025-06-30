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
  title: "Kata Visual - Professional Photography Services in Bali",
  description:
    "Professional photography services in Bali. Specializing in wedding, portrait, family, and event photography. Based in Denpasar, Bali.",
  keywords:
    "photography bali, wedding photographer bali, kata visual, denpasar photographer",
  openGraph: {
    title: "Kata Visual - Professional Photography Services",
    description: "Capturing moments, creating memories in Bali",
    url: "https://kata-visual.com",
    siteName: "Kata Visual",
    // images: [
    //   {
    //     url: "https://kata-visual.com/images/og-image.jpg",
    //     width: 1200,
    //     height: 630,
    //   },
    // ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
