import type { MetadataRoute } from "next";

const baseUrl = "https://vteambath.com";
const routes = ["", "/about", "/projects", "/project-leader", "/interest", "/contact"];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    changeFrequency: "monthly",
    priority: route === "" ? 1 : route === "/projects" ? 0.9 : 0.7,
  }));
}
