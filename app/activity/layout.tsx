import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Activities | Chemical, Mechanical & NDT Testing | OmegaLab",
  description:
    "Explore OmegaLab's core activities — chemical analysis, mechanical property evaluation, non-destructive testing, civil material testing, proficiency programmes, and NABL accreditation expansion across Eastern India.",
  keywords: [
    "chemical testing",
    "mechanical testing",
    "NDT",
    "NABL",
    "Eastern India",
    "proficiency testing",
    "IQC",
  ],
  alternates: {
    canonical: "https://omegalabtesting.com/activity",
  },
  openGraph: {
    title: "Our Activities | Chemical, Mechanical & NDT Testing | OmegaLab",
    description:
      "Explore OmegaLab's core testing and accreditation activities across Eastern India.",
    url: "https://omegalabtesting.com/activity",
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
    title: "Our Activities | Chemical, Mechanical & NDT Testing | OmegaLab",
    description:
      "Explore OmegaLab's core testing and accreditation activities across Eastern India.",
    images: [
      "https://res.cloudinary.com/de4cnpfm1/image/upload/v1778247941/LOGO-_OCS_eamyrc.jpg",
    ],
  },
};

export default function ActivityLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
