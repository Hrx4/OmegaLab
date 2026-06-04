import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Vision & Mission | OmegaLab Testing Services",
  description:
    "OmegaLab's vision is to be the most reliable and globally recognized testing laboratory. Our mission: rigorous, independent, and ethical testing services across Eastern India's infrastructure and industrial sectors.",
  keywords: [
    "OmegaLab vision",
    "OmegaLab mission",
    "testing lab goals",
    "NABL laboratory mission",
    "Eastern India testing",
  ],
  alternates: {
    canonical: "https://omegalabtesting.com/vision-mission",
  },
  openGraph: {
    title: "Vision & Mission | OmegaLab Testing Services",
    description:
      "OmegaLab's vision and mission — driving excellence in testing, quality, and global recognition since 1999.",
    url: "https://omegalabtesting.com/vision-mission",
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
    title: "Vision & Mission | OmegaLab Testing Services",
    description:
      "OmegaLab's vision and mission — driving excellence in testing, quality, and global recognition since 1999.",
    images: [
      "https://res.cloudinary.com/de4cnpfm1/image/upload/v1778247941/LOGO-_OCS_eamyrc.jpg",
    ],
  },
};

export default function VisionMissionLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
