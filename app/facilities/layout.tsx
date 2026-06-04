import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Testing Facilities | 900+ Parameters | OmegaLab Kolkata",
  description:
    "OmegaLab's world-class testing facilities in Kolkata cover 900+ parameters across mechanical, chemical, construction, NDT, and geotextile testing. NABL accredited under TC-11935 and TC-13401.",
  keywords: [
    "material testing facility",
    "900 test parameters",
    "NABL lab Kolkata",
    "steel testing",
    "concrete testing",
    "geotextile testing",
    "NDT testing Kolkata",
    "chemical testing facility",
  ],
  alternates: {
    canonical: "https://omegalabtesting.com/facilities",
  },
  openGraph: {
    title: "Testing Facilities | 900+ Parameters | OmegaLab Kolkata",
    description:
      "Explore OmegaLab's world-class NABL-accredited testing facilities in Kolkata — 900+ test parameters.",
    url: "https://omegalabtesting.com/facilities",
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
    title: "Testing Facilities | 900+ Parameters | OmegaLab Kolkata",
    description:
      "Explore OmegaLab's world-class NABL-accredited testing facilities in Kolkata — 900+ test parameters.",
    images: [
      "https://res.cloudinary.com/de4cnpfm1/image/upload/v1778247941/LOGO-_OCS_eamyrc.jpg",
    ],
  },
};

export default function FacilitiesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
