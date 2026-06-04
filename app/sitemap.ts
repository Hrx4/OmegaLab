import { MetadataRoute } from "next";
import branchesData from "../data/branches.json";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://omegalabtesting.com";
  
  const staticRoutes = [
    { route: "", priority: 1.0, changeFrequency: "monthly" as const },

    // About Us section
    { route: "/laboratory-details", priority: 0.8, changeFrequency: "monthly" as const },
    { route: "/laboratory-policy", priority: 0.8, changeFrequency: "monthly" as const },
    { route: "/vision-mission", priority: 0.8, changeFrequency: "monthly" as const },
    { route: "/organizational-chart", priority: 0.8, changeFrequency: "monthly" as const },
    { route: "/activity", priority: 0.8, changeFrequency: "monthly" as const },

    // Core pages
    { route: "/accreditation", priority: 0.9, changeFrequency: "monthly" as const },
    { route: "/facilities", priority: 0.9, changeFrequency: "monthly" as const },
    { route: "/profiles", priority: 0.8, changeFrequency: "monthly" as const },

    // Infrastructure
    { route: "/infrastructure/mechanical", priority: 0.8, changeFrequency: "monthly" as const },
    { route: "/infrastructure/chemical", priority: 0.8, changeFrequency: "monthly" as const },
    { route: "/infrastructure/civil", priority: 0.8, changeFrequency: "monthly" as const },
    { route: "/infrastructure/ndt", priority: 0.8, changeFrequency: "monthly" as const },

    // Other
    { route: "/lab-tour", priority: 0.8, changeFrequency: "monthly" as const },
    { route: "/our-clients", priority: 0.9, changeFrequency: "monthly" as const },
    { route: "/external-visit", priority: 0.7, changeFrequency: "monthly" as const },
    { route: "/career", priority: 0.7, changeFrequency: "monthly" as const },
    { route: "/feedback", priority: 0.5, changeFrequency: "monthly" as const },
    { route: "/our-branch/sample-collection-center", priority: 0.8, changeFrequency: "monthly" as const },
    { route: "/privacy-policy", priority: 0.3, changeFrequency: "monthly" as const },
    { route: "/terms-and-conditions", priority: 0.3, changeFrequency: "monthly" as const },
  ].map(({ route, priority, changeFrequency }) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency,
    priority,
  }));

  const branchRoutes = branchesData.map((branch) => ({
    url: `${baseUrl}${branch.pathOverride || `/our-branch/${branch.id}`}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.85,
  }));

  return [...staticRoutes, ...branchRoutes];
}
