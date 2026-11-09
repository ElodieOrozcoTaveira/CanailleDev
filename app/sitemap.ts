import type { MetadataRoute } from "next";
import { SITE_URL } from "./site-url";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const page = (
    path: string,
    changeFrequency: "weekly" | "monthly" | "yearly",
    priority: number,
  ) => ({ url: `${SITE_URL}${path}`, lastModified: now, changeFrequency, priority });

  return [
    page("/", "weekly", 1),
    page("/66Partners", "monthly", 0.7),
    page("/BBB", "monthly", 0.6),
    page("/Braap", "monthly", 0.6),
    page("/NanasCoffee", "monthly", 0.6),
    page("/MentionsLegales", "yearly", 0.3),
    page("/Confidentialite", "yearly", 0.3),
  ];
}
