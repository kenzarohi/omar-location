import type { Metadata } from "next";
import { Cormorant_Garamond, Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const siteUrl = "https://omar-location.fr";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Omar — Location de voitures premium",
    template: "%s | Omar",
  },
  description:
    "Omar, agence de location de voitures premium. Citadines, berlines, SUV et véhicules de luxe. Réservation simple, flotte soignée, assistance 24/7.",
  keywords: [
    "location voiture",
    "Omar",
    "location premium",
    "SUV",
    "luxe",
    "Paris",
  ],
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: siteUrl,
    siteName: "Omar",
    title: "Omar — Location de voitures premium",
    description:
      "Louez le véhicule idéal : citadine, berline, SUV ou luxe. Expérience premium avec Omar.",
    images: [
      {
        url: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1200&q=80",
        width: 1200,
        height: 630,
        alt: "Véhicule premium Omar",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Omar — Location de voitures premium",
    description:
      "Flotte soignée, réservation fluide, assistance 24/7. Découvrez Omar.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="fr"
      className={`${outfit.variable} ${cormorant.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-background text-foreground font-sans">
        {children}
      </body>
    </html>
  );
}
