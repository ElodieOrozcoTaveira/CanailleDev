"use client";

import { useEffect } from "react";
import { useAnimatedH2 } from "@/app/hooks/useANimatedH2";
export default function BodyContent({
  children,
}: {
  children: React.ReactNode;
}) {
  useAnimatedH2(); // ✅ ajout

  useEffect(() => {
    document.body.removeAttribute("cz-shortcut-listen");
  }, []);

  return <>{children}</>;
}