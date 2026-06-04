import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Careers at OmegaLab | Join Our NABL Accredited Lab Team",
  description:
    "Build your career with OmegaLab Testing Services. We seek passionate engineers, scientists, and QA professionals for our NABL-accredited laboratories in Kolkata, Siliguri, Ranchi, and Odisha.",
  keywords: [
    "jobs in testing lab",
    "NABL lab career",
    "material testing jobs",
    "Kolkata",
    "QA engineer",
    "chemical engineer jobs",
  ],
  alternates: {
    canonical: "https://omegalabtesting.com/career",
  },
  openGraph: {
    title: "Careers at OmegaLab | Join Our NABL Accredited Lab Team",
    description:
      "Build your career with OmegaLab Testing Services — NABL-accredited labs across Eastern India.",
    url: "https://omegalabtesting.com/career",
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
    title: "Careers at OmegaLab | Join Our NABL Accredited Lab Team",
    description:
      "Build your career with OmegaLab Testing Services — NABL-accredited labs across Eastern India.",
    images: [
      "https://res.cloudinary.com/de4cnpfm1/image/upload/v1778247941/LOGO-_OCS_eamyrc.jpg",
    ],
  },
};

export default function CareerLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
