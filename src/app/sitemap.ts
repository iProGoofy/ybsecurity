import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base =
    (process.env.NEXT_PUBLIC_SITE_URL || "https://ybsecurity.nl").replace(/\/$/, "");

  const routes = [
    "",
    "/diensten",
    "/contact",
    "/over-ons",
    "/privacybeleid",
    "/vacatures",
    "/zzper",

  ];

  return routes.map((path) => ({
    url: `${base}${path}`,
    lastModified: new Date(),
  }));
}
