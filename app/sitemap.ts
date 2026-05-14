import type { MetadataRoute } from "next";

const siteUrl = "https://ryuinan.vercel.app";
const lastModified = new Date("2026-05-15");

const routes = [
  { path: "/", priority: 1 },
  { path: "/history", priority: 0.8 },
  { path: "/about", priority: 0.8 },
  { path: "/access", priority: 0.7 },
  { path: "/contact", priority: 0.7 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map(({ path, priority }) => ({
    url: siteUrl + path,
    lastModified,
    changeFrequency: "monthly",
    priority,
  }));
}
