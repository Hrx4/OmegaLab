import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Company Profile | OmegaLab Testing Services Pvt. Ltd.",
  description:
    "Established in 1999, OmegaLab Testing Services Pvt. Ltd. is Eastern India's premier ISO/IEC 17025 NABL-accredited laboratory for mechanical, chemical, and NDT testing across Kolkata, Siliguri, Ranchi, and Odisha.",
  keywords: [
    "OmegaLab company profile",
    "testing lab Eastern India",
    "NABL accredited lab India",
    "ISO 17025 lab",
    "Kolkata testing laboratory",
    "material testing company India",
  ],
  alternates: {
    canonical: "https://omegalabtesting.com/profiles",
  },
  openGraph: {
    title: "Company Profile | OmegaLab Testing Services Pvt. Ltd.",
    description:
      "Eastern India's premier NABL-accredited material testing laboratory since 1999 — OmegaLab Testing Services Pvt. Ltd.",
    url: "https://omegalabtesting.com/profiles",
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
    title: "Company Profile | OmegaLab Testing Services Pvt. Ltd.",
    description:
      "Eastern India's premier NABL-accredited material testing laboratory since 1999 — OmegaLab Testing Services Pvt. Ltd.",
    images: [
      "https://res.cloudinary.com/de4cnpfm1/image/upload/v1778247941/LOGO-_OCS_eamyrc.jpg",
    ],
  },
};

export default function ProfilesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
