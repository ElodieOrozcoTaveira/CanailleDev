
import Hero from "./components/layout/Hero";
import "./globals.css";


export default function RootLayout({

}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body>
        <Hero/>
      </body>
    </html>
  );
}
