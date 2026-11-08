// app/layout.tsx
import { Metadata } from "next";
import { Bricolage_Grotesque, Inter } from "next/font/google";
import BodyContent from "./components/BodyContent/Body";
import "./styles/globals/globals.scss";
import GoogleAnalytics from "./components/Analytics/analytics";
import CookieBanner from "./components/cookie/cookieBanner";
import Hamburger from "./components/layout/Hamburger/Hamburger";
import WhatsAppButton from "./components/WhatsappButton/WhatsappBtn";

export const metadata: Metadata = {
  title:
    "Elodie Orozco Taveira - Conceptrice Développeuse d'Applications Web",
  description:
    "Elodie Orozco Taveira, développeuse web freelance dans les Pyrénées-Orientales : création de sites web et d'applications sur mesure, performants et intuitifs.",
};

// Police des titres
const display = Bricolage_Grotesque({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-display",
});

// Police du texte courant
const body = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-body",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={`${display.variable} ${body.variable}`}>
      <body suppressHydrationWarning>
        <GoogleAnalytics />
        <CookieBanner />
        <Hamburger />

        <main>
          <BodyContent>{children}</BodyContent>
        </main>

        <WhatsAppButton />
      </body>
    </html>
  );
}
