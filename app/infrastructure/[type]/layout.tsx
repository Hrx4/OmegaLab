import type { Metadata } from "next";

const LOGO_URL =
  "https://res.cloudinary.com/de4cnpfm1/image/upload/v1778247941/LOGO-_OCS_eamyrc.jpg";

const TYPE_META: Record<
  string,
  { title: string; description: string; keywords: string[] }
> = {
  mechanical: {
    title: "Mechanical Testing Instruments | OmegaLab Infrastructure",
    description:
      "OmegaLab's mechanical lab is equipped with UTM, impact testers, hardness machines, Vicat softening apparatus, and more for precise evaluation of ferrous & non-ferrous materials.",
    keywords: [
      "mechanical testing instruments",
      "UTM machine",
      "impact tester",
      "hardness tester",
      "Kolkata mechanical lab",
    ],
  },
  chemical: {
    title: "Chemical Testing Instruments | OmegaLab Infrastructure",
    description:
      "Advanced analytical equipment at OmegaLab's chemical lab — OES spectrometer, spectrophotometer, muffle furnace, flame photometer, and more for chemical analysis of metals, alloys, and water.",
    keywords: [
      "chemical testing instruments",
      "OES spectrometer",
      "spectrophotometer",
      "muffle furnace",
      "water quality testing",
    ],
  },
  civil: {
    title: "Civil & Construction Testing Instruments | OmegaLab Infrastructure",
    description:
      "OmegaLab's civil lab covers compression testing machines, flexural testing, bitumen apparatus, and soil testing equipment ensuring compliance with BIS and IRC specifications.",
    keywords: [
      "civil testing instruments",
      "concrete compression testing",
      "bitumen testing",
      "soil testing equipment",
      "CTM machine",
    ],
  },
  ndt: {
    title: "Non-Destructive Testing (NDT) Instruments | OmegaLab",
    description:
      "OmegaLab's NDT division uses ultrasonic pulse velocity apparatus, rebound hammers, and moisture meters for non-invasive flaw detection and quality assurance of structures and components.",
    keywords: [
      "NDT testing instruments",
      "ultrasonic pulse velocity",
      "rebound hammer",
      "non-destructive testing India",
      "NABL NDT lab",
    ],
  },
};

type Props = {
  params: Promise<{ type: string }>;
  children: React.ReactNode;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { type } = await params;
  const meta =
    TYPE_META[type] || TYPE_META["mechanical"];

  return {
    title: meta.title,
    description: meta.description,
    keywords: meta.keywords,
    alternates: {
      canonical: `https://omegalabtesting.com/infrastructure/${type}`,
    },
    openGraph: {
      title: meta.title,
      description: meta.description,
      url: `https://omegalabtesting.com/infrastructure/${type}`,
      siteName: "OmegaLab Testing Services",
      locale: "en_IN",
      type: "website",
      images: [
        {
          url: LOGO_URL,
          width: 800,
          height: 800,
          alt: "OmegaLab Testing Services Logo",
        },
      ],
    },
    twitter: {
      card: "summary",
      title: meta.title,
      description: meta.description,
      images: [LOGO_URL],
    },
  };
}

export default function InfrastructureTypeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
