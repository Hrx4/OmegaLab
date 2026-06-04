import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms & Conditions | OmegaLab Testing Services",
  description: "Read the Terms and Conditions of OmegaLab Testing Services regarding our testing procedures and services.",
};

export default function TermsAndConditionsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
