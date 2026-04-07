// app/components/GoogleAnalytics.tsx
import Script from "next/script";

export default function GoogleAnalytics() {
  return (
    <>
      <Script
        strategy="lazyOnload"
        src="https://www.googletagmanager.com/gtag/js?id=G-42MYEPWQ07"
      />
      <Script
        id="google-analytics"
        strategy="lazyOnload"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-42MYEPWQ07');
          `,
        }}
      />
    </>
  );
}
