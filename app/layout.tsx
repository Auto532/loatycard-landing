import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import ComingSoon from "./coming-soon";
import "./globals.css";

// Solange NEXT_PUBLIC_SITE_LIVE nicht auf "1" steht, sehen Besucher auf
// ALLEN Routen nur den Coming-Soon-Platzhalter. Zum Launch: Variable in
// Vercel setzen und neu deployen.
const SITE_LIVE = process.env.NEXT_PUBLIC_SITE_LIVE === "1";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Loatycard: Digitale Stempelkarte für deinen Shop",
  description:
    "Die digitale Kundenkarte für lokale Shops: Stempel sammeln per QR-Code, ganz ohne App. Eigenes Design, Bonus-Stufen und Statistiken, ab 20 € im Monat.",
  metadataBase: new URL("https://loatycard.de"),
  openGraph: {
    title: "Loatycard: Digitale Stempelkarte für deinen Shop",
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
      <body className="min-h-full flex flex-col">
        {SITE_LIVE ? children : <ComingSoon />}
      </body>
    </html>
  );
}
