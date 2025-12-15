
import BodyContent from "./components/BodyContent/Body";
import "./styles/globals/globals.scss";


export default function RootLayout({
  children,
}
  : Readonly<{
  children: React.ReactNode;}>) {

  return (
    
    <html lang="fr">
      <head>
      
      <link rel="preconnect" href="https://fonts.googleapis.com"/>
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin= 'anonymous'/>
      <link href="https://fonts.googleapis.com/css2?family=M+PLUS+1+Code:wght@100..700&family=Outfit:wght@100..900&family=Patrick+Hand&family=Sacramento&family=Sora:wght@100..800&display=swap" rel="stylesheet"/>
      </head>
      <body>
        <BodyContent>{children}</BodyContent>
      </body>
    </html>
    
  );
}
