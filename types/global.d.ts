/// <reference types="swiper/types" />

declare module "*.scss" {
  const content: Record<string, any>;
  export default content;
}

declare module "*.css" {
  const content: Record<string, any>;
  export default content;
}

declare module "swiper/css" {
  const content: Record<string, any>;
  export default content;
}

declare module "swiper/css/navigation" {
  const content: Record<string, any>;
  export default content;
}

declare module "swiper/css/pagination" {
  const content: Record<string, any>;
  export default content;
}

declare global {
  interface Window {
    gtag: (
      command: "consent" | "config" | "event",
      targetId: string,
      params?: Record<string, unknown>,
    ) => void;
  }
}

export {};
