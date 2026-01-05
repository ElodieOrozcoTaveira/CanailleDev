// app/layout.tsx
import { Outfit } from 'next/font/google';
import BodyContent from "./components/BodyContent/Body";
import "./styles/globals/globals.scss";
import GoogleAnalytics from './components/Analytics/analytics';
import CookieBanner from './components/cookie/cookieBanner';

const outfit = Outfit({
  subsets: ['latin'],
  weight: ['100', '300', '400', '500','600', '700', '800', '900'],
  display: 'swap',
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={outfit.className}>
      <body suppressHydrationWarning>
        <GoogleAnalytics/>
        <CookieBanner/>
        <BodyContent>{children}</BodyContent>
      </body>
    </html>
  );
}