import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Lab Tour | Explore OmegaLab's Testing Facilities",
  description:
    "Take a virtual tour of OmegaLab's NABL-accredited testing labs. Discover our advanced equipment and infrastructure for mechanical, chemical, civil, and NDT testing across Eastern India.",
  keywords: [
    "OmegaLab lab tour",
    "testing lab virtual tour",
    "NABL lab facility",
    "mechanical testing equipment",
    "chemical lab tour",
  ],
  alternates: {
    canonical: "https://omegalabtesting.com/lab-tour",
  },
  openGraph: {
    title: "Lab Tour | Explore OmegaLab's Testing Facilities",
    description:
      "Explore OmegaLab's NABL-accredited labs — advanced equipment for mechanical, chemical, civil, and NDT testing.",
    url: "https://omegalabtesting.com/lab-tour",
    siteName: "OmegaLab Testing Services",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "https://res.cloudinary.com/de4cnpfm1/image/upload/v1778247941/LOGO-_OCS_eamyrc.jpg",
        width: 800,
        height: 800,
        alt: "OmegaLab Testing Services Logo",
      },
    ],
  },
  twitter: {
    card: "summary",
    title: "Lab Tour | Explore OmegaLab's Testing Facilities",
    description:
      "Explore OmegaLab's NABL-accredited labs — advanced equipment for mechanical, chemical, civil, and NDT testing.",
    images: [
      "https://res.cloudinary.com/de4cnpfm1/image/upload/v1778247941/LOGO-_OCS_eamyrc.jpg",
    ],
  },
};

export default function LabTourLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
