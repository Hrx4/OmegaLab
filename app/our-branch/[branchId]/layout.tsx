import type { Metadata } from "next";
import JsonLd from "@/components/JsonLd";
import branchesData from "../../../data/branches.json";

const BRANCH_KEYWORDS: Record<string, string[]> = {
  "kolkata-1": [
    "material testing lab Kolkata",
    "NABL accredited lab Kolkata",
    "mechanical testing Kolkata",
    "chemical testing Kolkata",
    "TMT bar testing Kolkata",
    "steel testing West Bengal",
    "geotextile testing Kolkata",
    "NDT testing Kolkata",
    "testing services Thakurpukur",
    "testing lab West Bengal",
  ],
  "kolkata-2": [
    "cement testing Kolkata",
    "concrete testing lab Kolkata",
    "water quality testing Kolkata",
    "soil testing West Bengal",
    "construction material testing Kolkata",
    "NABL lab TC-13401 Kolkata",
    "ISO 17025 testing Kolkata",
    "testing services West Bengal",
  ],
  "siliguri": [
    "material testing Siliguri",
    "NABL lab Siliguri",
    "testing services North Bengal",
    "TMT bar testing Siliguri",
    "mechanical testing Siliguri",
    "steel testing Darjeeling",
    "construction testing Siliguri",
    "NABL lab Darjeeling",
    "testing lab Northeast India",
  ],
  "ranchi": [
    "material testing Ranchi",
    "NABL lab Ranchi",
    "testing services Jharkhand",
    "mechanical testing Jharkhand",
    "cement testing Ranchi",
    "TMT bar testing Jharkhand",
    "chemical testing Ranchi",
    "construction testing Bihar",
    "NDT testing Jharkhand",
  ],
  "odisha": [
    "material testing Odisha",
    "NABL lab Odisha",
    "testing services Bhubaneswar",
    "mechanical testing Puri",
    "TMT bar testing Odisha",
    "geotextile testing Odisha",
    "construction material testing Odisha",
    "NABL lab Puri",
    "steel testing Bhubaneswar",
  ],
  "sample-collection-center": [
    "sample collection center Kolkata",
    "material sample drop-off Kolkata",
    "NABL testing Kolkata",
    "quick material testing West Bengal",
  ],
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ branchId: string }>;
}): Promise<Metadata> {
  const resolvedParams = await params;
  const branchId = resolvedParams.branchId;
  const branch = branchesData.find((b) => b.id === branchId) || branchesData[0];

  return {
    title: branch.seoTitle,
    description: branch.seoDescription,
    keywords: BRANCH_KEYWORDS[branchId] || [],
    alternates: {
      canonical: `https://omegalabtesting.com/our-branch/${branchId}`,
    },
    openGraph: {
      title: branch.seoTitle,
      description: branch.seoDescription,
      url: `https://omegalabtesting.com/our-branch/${branchId}`,
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
      title: branch.seoTitle,
      description: branch.seoDescription,
      images: [
        "https://res.cloudinary.com/de4cnpfm1/image/upload/v1778247941/LOGO-_OCS_eamyrc.jpg",
      ],
    },
  };
}

type Props = {
  params: Promise<{ branchId: string }>;
  children: React.ReactNode;
};

export default async function BranchLayout({ params, children }: Props) {
  const { branchId } = await params;
  const branch = branchesData.find((b) => b.id === branchId) || branchesData[0];

  const branchSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: `OmegaLab – ${branch.name}`,
    image:
      "https://res.cloudinary.com/de4cnpfm1/image/upload/v1778247941/LOGO-_OCS_eamyrc.jpg",
    url: `https://omegalabtesting.com/our-branch/${branchId}`,
    telephone: branch.phone || "+91-9064732962",
    email: branch.email || "omegalabinfo98@gmail.com",
    ...(branch.address && {
      address: {
        "@type": "PostalAddress",
        streetAddress: branch.address,
        addressCountry: "IN",
      },
    }),
    parentOrganization: {
      "@type": "Organization",
      name: "OmegaLab Testing Services Private Limited",
      url: "https://omegalabtesting.com",
    },
    ...(branch.accreditation && {
      hasCredential: {
        "@type": "EducationalOccupationalCredential",
        credentialCategory: "NABL Accreditation – ISO/IEC 17025:2017",
        name: branch.accreditation,
      },
    }),
    serviceType: [
      "Mechanical Testing",
      "Chemical Testing",
      "Non-Destructive Testing",
    ],
  };

  return (
    <>
      <JsonLd schema={branchSchema} />
      {children}
    </>
  );
}
