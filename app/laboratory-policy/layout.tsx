import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Laboratory Policy & Objectives | ISO/IEC 17025 | OmegaLab",
  description:
    "OmegaLab's quality policy and laboratory objectives aligned with ISO/IEC 17025:2017 and NABL requirements. Committed to impartiality, accuracy, and continuous management system improvement.",
  keywords: [
    "ISO 17025 quality policy",
    "NABL laboratory policy",
    "testing quality objectives",
    "ISO/IEC 17025:2017",
    "laboratory management system",
  ],
  alternates: {
    canonical: "https://omegalabtesting.com/laboratory-policy",
  },
  openGraph: {
    title: "Laboratory Policy & Objectives | ISO/IEC 17025 | OmegaLab",
    description:
      "OmegaLab's quality policy aligned with ISO/IEC 17025:2017 — committed to impartiality, accuracy, and continuous improvement.",
    url: "https://omegalabtesting.com/laboratory-policy",
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
    title: "Laboratory Policy & Objectives | ISO/IEC 17025 | OmegaLab",
    description:
      "OmegaLab's quality policy aligned with ISO/IEC 17025:2017 — committed to impartiality, accuracy, and continuous improvement.",
    images: [
      "https://res.cloudinary.com/de4cnpfm1/image/upload/v1778247941/LOGO-_OCS_eamyrc.jpg",
    ],
  },
};

export default function LaboratoryPolicyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
