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
  title: "Yoezer Wood Integrated | Mobile Sawmill & Timber Services",
  description:
    "Yoezer Wood Integrated provides timber cutting, wood processing, and mobile sawmill services for customers who need reliable on-site log cutting and custom timber solutions.",
  keywords: [
    "Yoezer Wood Integrated",
    "mobile sawmill Bhutan",
    "timber cutting",
    "sawmill service",
    "wood processing",
    "custom planks",
    "construction timber",
  ],
  icons: {
    icon: "/yoezer-logo-mark.png",
    apple: "/yoezer-logo-mark.png",
  },
  openGraph: {
    title: "Yoezer Wood Integrated | Mobile Sawmill & Timber Services",
    description:
      "Yoezer Wood Integrated provides timber cutting, wood processing, and mobile sawmill services for customers who need reliable on-site log cutting and custom timber solutions.",
    siteName: "Yoezer Wood Integrated",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full scroll-smooth antialiased`}
    >
      <body className="flex min-h-full flex-col">{children}</body>
    </html>
  );
}
