import type { Metadata } from "next";
import { Playfair_Display, Poppins } from "next/font/google";
import CustomCursor from "@/components/CustomCursor";
import "./globals.css";

const heading = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-heading",
  weight: ["600", "700", "800"]
});

const body = Poppins({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["300", "400", "500", "600", "700"]
});

export const metadata: Metadata = {
  title: "Greenfield International School | Excellence in Education",
  description:
    "A premium, future-ready school offering academic excellence, world-class facilities, innovation, sports, and values-based education.",
  keywords: [
    "premium school",
    "cbse school",
    "school admissions 2026",
    "smart classrooms",
    "academic excellence"
  ]
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${heading.variable} ${body.variable} bg-cream text-slate-900`}>
        <CustomCursor />
        {children}
      </body>
    </html>
  );
}
