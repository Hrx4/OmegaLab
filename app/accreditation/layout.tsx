import type { Metadata } from "next";
import JsonLd from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "NABL Accreditation | ISO/IEC 17025:2017 | OmegaLab",
  description:
    "OmegaLab holds NABL accreditation (ISO/IEC 17025:2017) for Chemical, Mechanical & NDT testing across 5 labs — TC-11935, TC-13401, TC-15509, TC-16480, TC-17671. View certificates and accreditation scope.",
  keywords: [
    "NABL accredited lab",
    "ISO 17025",
    "testing accreditation",
    "TC-11935",
    "TC-13401",
    "Kolkata NABL lab",
    "chemical testing accreditation",
    "NDT accreditation",
  ],
  alternates: {
    canonical: "https://omegalabtesting.com/accreditation",
  },
  openGraph: {
    title: "NABL Accreditation | ISO/IEC 17025:2017 | OmegaLab",
    description:
      "View OmegaLab's NABL ISO/IEC 17025:2017 accreditation certificates across 5 labs in Eastern India.",
    url: "https://omegalabtesting.com/accreditation",
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
    title: "NABL Accreditation | ISO/IEC 17025:2017 | OmegaLab",
    description:
      "View OmegaLab's NABL ISO/IEC 17025:2017 accreditation certificates across 5 labs in Eastern India.",
    images: [
      "https://res.cloudinary.com/de4cnpfm1/image/upload/v1778247941/LOGO-_OCS_eamyrc.jpg",
    ],
  },
};

const accreditationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "OmegaLab Testing Services Private Limited",
  url: "https://omegalabtesting.com",
  hasCredential: [
    {
      "@type": "EducationalOccupationalCredential",
      credentialCategory: "NABL Accreditation – ISO/IEC 17025:2017",
      name: "TC-11935 | Kolkata Lab 1",
      recognizedBy: {
        "@type": "Organization",
        name: "National Accreditation Board for Testing and Calibration Laboratories (NABL)",
        url: "https://nabl.gov.in",
      },
    },
    {
      "@type": "EducationalOccupationalCredential",
      credentialCategory: "NABL Accreditation – ISO/IEC 17025:2017",
      name: "TC-13401 | Kolkata Lab 2",
      recognizedBy: {
        "@type": "Organization",
        name: "National Accreditation Board for Testing and Calibration Laboratories (NABL)",
        url: "https://nabl.gov.in",
      },
    },
    {
      "@type": "EducationalOccupationalCredential",
      credentialCategory: "NABL Accreditation – ISO/IEC 17025:2017",
      name: "TC-15509 | Siliguri Lab",
      recognizedBy: {
        "@type": "Organization",
        name: "National Accreditation Board for Testing and Calibration Laboratories (NABL)",
        url: "https://nabl.gov.in",
      },
    },
    {
      "@type": "EducationalOccupationalCredential",
      credentialCategory: "NABL Accreditation – ISO/IEC 17025:2017",
      name: "TC-16480 | Ranchi Lab",
      recognizedBy: {
        "@type": "Organization",
        name: "National Accreditation Board for Testing and Calibration Laboratories (NABL)",
        url: "https://nabl.gov.in",
      },
    },
    {
      "@type": "EducationalOccupationalCredential",
      credentialCategory: "NABL Accreditation – ISO/IEC 17025:2017",
      name: "TC-17671 | Odisha Lab",
      recognizedBy: {
        "@type": "Organization",
        name: "National Accreditation Board for Testing and Calibration Laboratories (NABL)",
        url: "https://nabl.gov.in",
      },
    },
  ],
};

export default function AccreditationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <JsonLd schema={accreditationSchema} />
      {children}
    </>
  );
}

