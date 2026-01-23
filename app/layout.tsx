// app/layout.tsx
import { Fira_Code } from 'next/font/google';
import BodyContent from "./components/BodyContent/Body";
import "./styles/globals/globals.scss";
import GoogleAnalytics from './components/Analytics/analytics';
import CookieBanner from './components/cookie/cookieBanner';

/*const outfit = Outfit({
  subsets: ['latin'],
  weight: ['100', '300', '400', '500','600', '700', '800', '900'],
  display: 'swap',
});*/

const fira = Fira_Code({
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
    <html lang="fr" className={fira.className}>
      <body suppressHydrationWarning>
        <GoogleAnalytics/>
        <CookieBanner/>
        <BodyContent>{children}</BodyContent>
      </body>
    </html>
  );
}