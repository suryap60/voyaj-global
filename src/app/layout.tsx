import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

export const metadata: Metadata = {
  title: "Voyaj - The Intelligent Travel Marketplace",
  description: "The world's first Agentic Travel Marketplace. We've built a system that doesn't just list flights and hotels—it understands your intent. Effortless, personalized, and memorable travel planning powered by AI.",
  keywords: "travel, AI, agentic AI, travel planning, flights, hotels, luxury travel, intelligent travel",
  authors: [{ name: "Voyaj" }],
  creator: "Voyaj",
  publisher: "Voyaj",
  openGraph: {
    title: "Voyaj - The Intelligent Travel Marketplace",
    description: "Redefining travel discovery with agentic AI. The intelligent travel marketplace that understands you better than you understand your own travel desires.",
    url: "https://voyaj.com",
    siteName: "Voyaj",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Voyaj - The Intelligent Travel Marketplace",
    description: "Redefining travel discovery with agentic AI. Effortless, personalized, and memorable.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${playfair.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
