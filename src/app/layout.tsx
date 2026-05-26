import type { Metadata } from "next";
import { Baloo_2, Fredoka } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/shared/Navbar";
import { Footer } from "@/components/shared/Footer";

const baloo = Baloo_2({
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  display: "swap",
  variable: "--font-display",
});

const fredoka = Fredoka({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: {
    default:
      "Nabil's Açaí Station — Açaí, Crêpes & Dubai Chocolate in Perth",
    template: "%s · Nabil's Açaí Station",
  },
  description:
    "Açaí bowls, crêpes and Dubai chocolate in Perth. Made for sweet moments — open till late.",
  openGraph: {
    title: "Nabil's Açaí Station",
    description:
      "Açaí, crêpes and Dubai chocolate in Perth. Made for sweet moments.",
    type: "website",
    locale: "en_AU",
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
      className={`${baloo.variable} ${fredoka.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[var(--cream)] text-[var(--acai-deep)]">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
