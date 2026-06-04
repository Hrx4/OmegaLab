import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://omegalabtesting.com"),
  title: "OmegaLab Testing Services | NABL Accredited",
  description:
    "Pioneer in material testing with NABL accredited laboratories across Eastern India. Delivering accuracy, quality, and guaranteed satisfaction since 1999.",
  keywords: [
    // Service types
    "NABL accredited laboratory",
    "material testing services",
    "mechanical testing",
    "chemical testing",
    "NDT testing",
    "ISO 17025",
    "non-destructive testing",
    "construction material testing",
    "geotextile testing",
    "water quality testing",
    // Specific materials
    "TMT bar testing",
    "steel testing",
    "cement testing",
    "concrete testing",
    "soil testing",
    "rebar testing",
    "structural steel testing",
    // Geo: Kolkata
    "testing lab Kolkata",
    "material testing Kolkata",
    "NABL lab Kolkata",
    "testing services Kolkata",
    "testing laboratory West Bengal",
    // Geo: Siliguri
    "material testing Siliguri",
    "testing lab Siliguri",
    "NABL lab North Bengal",
    // Geo: Ranchi
    "material testing Ranchi",
    "testing lab Jharkhand",
    "NABL lab Ranchi",
    // Geo: Odisha
    "material testing Odisha",
    "testing lab Bhubaneswar",
    "NABL lab Odisha",
    // Eastern India
    "material testing Eastern India",
    "NABL accredited lab India",
  ],
  icons: {
    icon: "/LOGO-OCS.jpeg",
  },
  openGraph: {
    title: "OmegaLab Testing Services | NABL Accredited",
    description:
      "Pioneer in material testing with NABL accredited laboratories across Eastern India. Delivering accuracy, quality, and guaranteed satisfaction since 1999.",
    url: "https://omegalabtesting.com",
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
    title: "OmegaLab Testing Services | NABL Accredited",
    description:
      "Pioneer in material testing with NABL accredited laboratories across Eastern India.",
    images: [
      "https://res.cloudinary.com/de4cnpfm1/image/upload/v1778247941/LOGO-_OCS_eamyrc.jpg",
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Navbar></Navbar>
        {children}
        <Footer></Footer>
        <ScrollToTop />
      </body>
    </html>
  );
}
