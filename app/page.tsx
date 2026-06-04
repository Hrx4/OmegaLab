import HomeSections from "@/components/HomeSection";
import JsonLd from "@/components/JsonLd";
import { Suspense } from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "OmegaLab Testing Services | NABL Accredited Lab – Eastern India",
  description:
    "OmegaLab Testing Services Pvt. Ltd. — NABL ISO/IEC 17025 accredited material testing laboratory since 1999. Chemical, Mechanical & NDT testing across Kolkata, Siliguri, Ranchi, and Odisha.",
  alternates: {
    canonical: "https://omegalabtesting.com",
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "OmegaLab Testing Services Private Limited",
  alternateName: "OmegaLab",
  url: "https://omegalabtesting.com",
  logo: "https://res.cloudinary.com/de4cnpfm1/image/upload/v1778247941/LOGO-_OCS_eamyrc.jpg",
  foundingDate: "1999",
  description:
    "NABL ISO/IEC 17025:2017 accredited material testing laboratory offering Chemical, Mechanical, and Non-Destructive Testing across Eastern India.",
  email: "omegalabinfo98@gmail.com",
  telephone: "+91-9064732962",
  address: {
    "@type": "PostalAddress",
    streetAddress: "256A, M. G. Road, Purbasan, Thakurpukur",
    addressLocality: "Kolkata",
    addressRegion: "West Bengal",
    postalCode: "700063",
    addressCountry: "IN",
  },
  sameAs: [
    "https://www.facebook.com/p/Omegalab-Testing-Services-PVt-Ltd-61579482957218/",
    "https://www.instagram.com/omegalabtesting/",
    "https://www.linkedin.com/company/omegalab-testing-services-pvt-ltd",
    "https://www.youtube.com/@omegalabtestingservices",
  ],
  hasCredential: [
    {
      "@type": "EducationalOccupationalCredential",
      credentialCategory: "NABL Accreditation",
      name: "ISO/IEC 17025:2017 – TC-11935 (Kolkata Lab 1)",
    },
    {
      "@type": "EducationalOccupationalCredential",
      credentialCategory: "NABL Accreditation",
      name: "ISO/IEC 17025:2017 – TC-13401 (Kolkata Lab 2)",
    },
    {
      "@type": "EducationalOccupationalCredential",
      credentialCategory: "NABL Accreditation",
      name: "ISO/IEC 17025:2017 – TC-15509 (Siliguri Lab)",
    },
    {
      "@type": "EducationalOccupationalCredential",
      credentialCategory: "NABL Accreditation",
      name: "ISO/IEC 17025:2017 – TC-16480 (Ranchi Lab)",
    },
    {
      "@type": "EducationalOccupationalCredential",
      credentialCategory: "NABL Accreditation",
      name: "ISO/IEC 17025:2017 – TC-17671 (Odisha Lab)",
    },
  ],
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://omegalabtesting.com/#business",
  name: "OmegaLab Testing Services Private Limited",
  image:
    "https://res.cloudinary.com/de4cnpfm1/image/upload/v1778247941/LOGO-_OCS_eamyrc.jpg",
  url: "https://omegalabtesting.com",
  telephone: "+91-9064732962",
  email: "omegalabinfo98@gmail.com",
  priceRange: "$$",
  currenciesAccepted: "INR",
  paymentAccepted: "Cash, Bank Transfer, Cheque",
  address: {
    "@type": "PostalAddress",
    streetAddress: "256A, M. G. Road, Purbasan, Thakurpukur",
    addressLocality: "Kolkata",
    addressRegion: "West Bengal",
    postalCode: "700063",
    addressCountry: "IN",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 22.4657,
    longitude: 88.3136,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "18:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Saturday"],
      opens: "09:00",
      closes: "14:00",
    },
  ],
  department: [
    {
      "@type": "LocalBusiness",
      name: "OmegaLab Kolkata Lab 1",
      telephone: "+91-9064732962",
      address: {
        "@type": "PostalAddress",
        streetAddress: "256A, M. G. Road, Purbasan, Thakurpukur",
        addressLocality: "Kolkata",
        addressRegion: "West Bengal",
        postalCode: "700063",
        addressCountry: "IN",
      },
    },
    {
      "@type": "LocalBusiness",
      name: "OmegaLab Siliguri Lab",
      telephone: "+91-8837368798",
      address: {
        "@type": "PostalAddress",
        streetAddress: "1052/A, Narmada Bagan, Ward No. 46",
        addressLocality: "Siliguri",
        addressRegion: "West Bengal",
        postalCode: "734003",
        addressCountry: "IN",
      },
    },
    {
      "@type": "LocalBusiness",
      name: "OmegaLab Ranchi Lab",
      telephone: "+91-8837368798",
      address: {
        "@type": "PostalAddress",
        streetAddress: "2085/B, Ward No. 19/4, Bariatu Basti Hill View Road, Bariatu",
        addressLocality: "Ranchi",
        addressRegion: "Jharkhand",
        addressCountry: "IN",
      },
    },
    {
      "@type": "LocalBusiness",
      name: "OmegaLab Odisha Lab",
      telephone: "+91-9064732962",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Plot no. 891/1572, Uttarasasana, Kousalyaganga, Pubasasan, P.S. Pipli, Dist.-Puri",
        addressLocality: "Odisha",
        postalCode: "751002",
        addressCountry: "IN",
      },
    },
  ],
  areaServed: [
    { "@type": "State", name: "West Bengal" },
    { "@type": "State", name: "Jharkhand" },
    { "@type": "State", name: "Odisha" },
    { "@type": "State", name: "Bihar" },
  ],
  serviceType: [
    "Mechanical Testing",
    "Chemical Testing",
    "Non-Destructive Testing",
    "Civil & Construction Material Testing",
    "Geotextile Testing",
    "Water Quality Testing",
  ],
};

export default function Home() {
  return (
    <div className="">
      <JsonLd schema={organizationSchema} />
      <JsonLd schema={localBusinessSchema} />
      <Suspense
        fallback={
          <div className="min-h-screen flex items-center justify-center bg-slate-50 text-[#1E1B5C] font-semibold">
            Loading Omegalab...
          </div>
        }
      >
        <HomeSections />
      </Suspense>
    </div>
  );
}

