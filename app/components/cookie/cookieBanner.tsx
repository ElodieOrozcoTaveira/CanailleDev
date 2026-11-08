"use client";

import Link from "next/link";
import CookieConsent from "react-cookie-consent";
import "./cookieBanner.scss";

export default function CookieBanner() {
  const handleAccept = () => {
    // Active Google Analytics seulement après acceptation
    if (typeof window !== "undefined" && window.gtag) {
      window.gtag("consent", "update", {
        analytics_storage: "granted",
      });
    }
  };

  const handleDecline = () => {
    // Désactive Google Analytics
    if (typeof window !== "undefined" && window.gtag) {
      window.gtag("consent", "update", {
        analytics_storage: "denied",
      });
    }
  };

  return (
    <CookieConsent
      location="none"
      disableStyles
      buttonText="Accepter"
      declineButtonText="Refuser"
      enableDeclineButton
      onAccept={handleAccept}
      onDecline={handleDecline}
      cookieName="canaille-dev-cookie-consent"
      expires={365}
      containerClasses="cookie-banner"
      contentClasses="cookie-banner__content"
      buttonWrapperClasses="cookie-banner__actions"
      buttonClasses="cookie-banner__btn cookie-banner__btn--accept"
      declineButtonClasses="cookie-banner__btn cookie-banner__btn--decline"
      ariaAcceptLabel="Accepter les cookies"
      ariaDeclineLabel="Refuser les cookies"
    >
      <p className="cookie-banner__title">Un petit cookie&nbsp;?</p>
      <p className="cookie-banner__text">
        Ce site utilise des cookies pour mesurer son audience et améliorer
        votre expérience.{" "}
        <Link href="/Confidentialite" className="cookie-banner__link">
          En savoir plus
        </Link>
      </p>
    </CookieConsent>
  );
}
