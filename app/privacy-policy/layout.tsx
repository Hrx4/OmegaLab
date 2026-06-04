import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | OmegaLab Testing Services",
  description: "Read the Privacy Policy of OmegaLab Testing Services to understand how we collect, use, and protect your data.",
};

export default function PrivacyPolicyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
