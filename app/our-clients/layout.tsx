import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Clients | 1000+ Enterprises Trust OmegaLab",
  description:
    "OmegaLab serves 1000+ enterprise clients across construction, manufacturing, and government sectors. Trusted for 25+ years for precision material testing across Eastern India.",
  keywords: [
    "OmegaLab clients",
    "material testing clients",
    "NABL lab clients",
    "construction testing",
    "government testing lab",
    "Eastern India testing lab",
  ],
  alternates: {
    canonical: "https://omegalabtesting.com/our-clients",
  },
  openGraph: {
    title: "Our Clients | 1000+ Enterprises Trust OmegaLab",
    description:
      "OmegaLab is trusted by 1000+ enterprise clients for precision material testing across Eastern India since 1999.",
    url: "https://omegalabtesting.com/our-clients",
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
    title: "Our Clients | 1000+ Enterprises Trust OmegaLab",
    description:
      "OmegaLab is trusted by 1000+ enterprise clients for precision material testing across Eastern India since 1999.",
    images: [
      "https://res.cloudinary.com/de4cnpfm1/image/upload/v1778247941/LOGO-_OCS_eamyrc.jpg",
    ],
  },
};

export default function OurClientsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
