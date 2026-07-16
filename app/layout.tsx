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
  title: "Loatycard – Digitale Stempelkarte für deinen Shop",
  description:
    "Die digitale Kundenkarte für lokale Shops: Stempel sammeln per QR-Code, ganz ohne App. Eigenes Design, Bonus-Stufen und Statistiken – ab 39 € im Monat.",
  metadataBase: new URL("https://loatycard.de"),
  openGraph: {
    title: "Loatycard – Digitale Stempelkarte für deinen Shop",
    description:
      "Stempel sammeln per QR-Code, ganz ohne App. Die digitale Kundenkarte für lokale Shops.",
    locale: "de_DE",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="de"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
