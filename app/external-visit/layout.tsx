import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "External Visits & Industry Events | OmegaLab",
  description:
    "Highlights from OmegaLab's external visits — international conferences, NABL inspections, educational tours, and industry networking events across India.",
  keywords: [
    "OmegaLab events",
    "testing lab conference",
    "NABL inspection visit",
    "material testing industry events",
    "laboratory educational tour",
  ],
  alternates: {
    canonical: "https://omegalabtesting.com/external-visit",
  },
  openGraph: {
    title: "External Visits & Industry Events | OmegaLab",
    description:
      "OmegaLab's highlights from international conferences, facility tours, and industry events.",
    url: "https://omegalabtesting.com/external-visit",
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
    title: "External Visits & Industry Events | OmegaLab",
    description:
      "OmegaLab's highlights from international conferences, facility tours, and industry events.",
    images: [
      "https://res.cloudinary.com/de4cnpfm1/image/upload/v1778247941/LOGO-_OCS_eamyrc.jpg",
    ],
  },
};

export default function ExternalVisitLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
