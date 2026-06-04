import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Customer Feedback | OmegaLab Testing Services",
  description:
    "Share your feedback on OmegaLab's testing services — rate our promptness, technical support, report quality, and overall laboratory performance. Your input helps us improve continuously.",
  keywords: [
    "OmegaLab feedback",
    "laboratory customer feedback",
    "testing lab review",
  ],
  alternates: {
    canonical: "https://omegalabtesting.com/feedback",
  },
  openGraph: {
    title: "Customer Feedback | OmegaLab Testing Services",
    description:
      "Rate OmegaLab's testing services and help us improve our quality and performance.",
    url: "https://omegalabtesting.com/feedback",
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
    title: "Customer Feedback | OmegaLab Testing Services",
    description:
      "Rate OmegaLab's testing services and help us improve our quality and performance.",
    images: [
      "https://res.cloudinary.com/de4cnpfm1/image/upload/v1778247941/LOGO-_OCS_eamyrc.jpg",
    ],
  },
};

export default function FeedbackLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
