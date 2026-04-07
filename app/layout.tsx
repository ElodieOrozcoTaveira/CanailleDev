// app/layout.tsx
import { Metadata } from 'next'; // Importez le type Metadata
import { Manrope } from 'next/font/google';
import BodyContent from "./components/BodyContent/Body";
import "./styles/globals/globals.scss";
import GoogleAnalytics from './components/Analytics/analytics';
import CookieBanner from './components/cookie/cookieBanner';
import Hamburger from './components/layout/Hamburger/Hamburger';
import WhatsAppButton from './components/WhatsappButton/WhatsappBtn';

export const metadata: Metadata = {
  title: "CanailleDev by Elodie Orozco Taveira - Conceptrice Développeur d'Applications Web",
  description: "CanailleDev par Elodie Orozco Taveira : création de sites web sur mesure, performants et intuitifs. Boostez votre visibilité avec une experte passionnée.",
};

const manrope = Manrope({
  subsets: ['latin'],
  weight: ['200','300', '400', '500','600', '700','800'],
  display: 'swap',
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={manrope.className}>
      <body suppressHydrationWarning>
        <GoogleAnalytics/>
        <CookieBanner/>
        <Hamburger />
        
        {/* 2. AJOUT DE LA BALISE <main> (C'est ici que vous réglez l'accessibilité) */}
        <main>
          <BodyContent>{children}</BodyContent>
        </main>

        <WhatsAppButton/>
      </body>
    </html>
  );
}