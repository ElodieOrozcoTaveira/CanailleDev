export {};

declare module "*.scss";
declare module "*.css";

declare global {
  interface Window {
    gtag: (
      command: "consent" | "config" | "event",
      targetId: string,
      params?: Record<string, unknown>,
    ) => void;
  }
}
