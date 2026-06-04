import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Laboratory Details | Testing Parameters & Standards | OmegaLab",
  description:
    "Detailed information on OmegaLab's laboratory capabilities, testing parameters, applicable national and international standards, and NABL accreditation scope for mechanical, chemical, and NDT testing.",
  keywords: [
    "laboratory details",
    "testing parameters",
    "IS standards testing",
    "ASTM testing India",
    "NABL scope",
    "mechanical chemical NDT parameters",
  ],
  alternates: {
    canonical: "https://omegalabtesting.com/laboratory-details",
  },
  openGraph: {
    title: "Laboratory Details | Testing Parameters & Standards | OmegaLab",
    description:
      "OmegaLab's laboratory capabilities — testing parameters, national & international standards, NABL scope.",
    url: "https://omegalabtesting.com/laboratory-details",
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
    title: "Laboratory Details | Testing Parameters & Standards | OmegaLab",
    description:
      "OmegaLab's laboratory capabilities — testing parameters, national & international standards, NABL scope.",
    images: [
      "https://res.cloudinary.com/de4cnpfm1/image/upload/v1778247941/LOGO-_OCS_eamyrc.jpg",
    ],
  },
};

export default function LaboratoryDetailsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
