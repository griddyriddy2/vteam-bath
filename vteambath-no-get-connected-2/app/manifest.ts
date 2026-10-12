import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "V Team Bath",
    short_name: "V Team",
    description: "Student-led volunteering at the University of Bath.",
    start_url: "/",
    display: "standalone",
    background_color: "#FFFDFB",
    theme_color: "#E45656",
  };
}
