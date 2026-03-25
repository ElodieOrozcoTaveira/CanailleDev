// app/layout.tsx
import { Inter } from 'next/font/google';
import BodyContent from "./components/BodyContent/Body";
import "./styles/globals/globals.scss";
import GoogleAnalytics from './components/Analytics/analytics';
import CookieBanner from './components/cookie/cookieBanner';
import Hamburger from './components/layout/Hamburger/Hamburger';

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500','600', '700'],
  display: 'swap',
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={inter.className}>
      <body suppressHydrationWarning>
        <GoogleAnalytics/>
        <CookieBanner/>
        <Hamburger /> {/* ✅ au niveau racine, rien ne peut le couvrir */}
        <BodyContent>{children}</BodyContent>
      </body>
    </html>
  );
}