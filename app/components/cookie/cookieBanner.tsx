// app/components/CookieConsent.tsx
'use client';

import CookieConsent from "react-cookie-consent";

export default function CookieBanner() {
  const handleAccept = () => {
    // Activez Google Analytics seulement après acceptation
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('consent', 'update', {
        'analytics_storage': 'granted'
      });
    }
  };

  const handleDecline = () => {
    // Désactivez Google Analytics
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('consent', 'update', {
        'analytics_storage': 'denied'
      });
    }
  };

  return (
    <CookieConsent
      location="bottom"
      buttonText="Accepter"
      declineButtonText="Refuser"
      enableDeclineButton
      onAccept={handleAccept}
      onDecline={handleDecline}
      cookieName="canaille-dev-cookie-consent"
      style={{ 
        background: "#5f8f6d",
        padding: "20px",
        alignItems: "center"
      }}
      buttonStyle={{ 
        background: "#fff",
        color: "#000",
        fontSize: "14px",
        padding: "10px 30px",
        borderRadius: "5px",
        fontWeight: "600"
      }}
      declineButtonStyle={{
        background: "transparent",
        color: "#fff",
        border: "1px solid #fff",
        fontSize: "14px",
        padding: "10px 30px",
        borderRadius: "5px"
      }}
      expires={365}
    >
      🍪 Ce site utilise des cookies pour améliorer votre expérience et analyser le trafic 🍪{" "}
    </CookieConsent>
  );
}