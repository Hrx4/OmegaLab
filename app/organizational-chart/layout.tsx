import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Organizational Chart | OmegaLab Lab Network",
  description:
    "View the organizational structure of OmegaLab Testing Services — 5 NABL-accredited labs in Kolkata, Siliguri, Ranchi, and Odisha, each with dedicated management and technical teams.",
  keywords: [
    "OmegaLab organizational chart",
    "NABL lab management",
    "testing lab structure",
    "Kolkata lab",
    "Siliguri lab",
    "Ranchi lab",
    "Odisha lab",
  ],
  alternates: {
    canonical: "https://omegalabtesting.com/organizational-chart",
  },
  openGraph: {
    title: "Organizational Chart | OmegaLab Lab Network",
    description:
      "OmegaLab's organizational structure across 5 NABL-accredited labs in Eastern India.",
    url: "https://omegalabtesting.com/organizational-chart",
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
    title: "Organizational Chart | OmegaLab Lab Network",
    description:
      "OmegaLab's organizational structure across 5 NABL-accredited labs in Eastern India.",
    images: [
      "https://res.cloudinary.com/de4cnpfm1/image/upload/v1778247941/LOGO-_OCS_eamyrc.jpg",
    ],
  },
};

export default function OrganizationalChartLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
