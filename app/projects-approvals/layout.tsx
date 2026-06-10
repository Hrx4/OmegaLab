import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects & Approvals | OmegaLab Testing Services Pvt. Ltd.",
  description:
    "Explore major projects and credential approvals of OmegaLab Testing Services Pvt. Ltd. (NABL-accredited ISO/IEC 17025 laboratory). Showing Rail, Metro, Airport, Tunnel, Bridge, and Highway testing footprint.",
  keywords: [
    "OmegaLab projects",
    "OmegaLab approvals",
    "rail metro testing",
    "airport construction testing",
    "bridge NDT testing",
    "highway soil compaction testing",
  ],
  alternates: {
    canonical: "https://omegalabtesting.com/projects-approvals",
  },
  openGraph: {
    title: "Projects & Approvals | OmegaLab Testing Services Pvt. Ltd.",
    description:
      "Explore major infrastructure projects and credential approvals of OmegaLab Testing Services Pvt. Ltd. across Eastern India.",
    url: "https://omegalabtesting.com/projects-approvals",
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
    title: "Projects & Approvals | OmegaLab Testing Services Pvt. Ltd.",
    description:
      "Explore major infrastructure projects and credential approvals of OmegaLab Testing Services Pvt. Ltd. across Eastern India.",
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
