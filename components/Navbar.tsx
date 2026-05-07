"use client";

import { useState } from "react";
import Image from "next/image";

const NAV_LINKS = [
  { label: "Home", href: "/", hasDropdown: false },

  {
    label: "About Us",
    href: "/about",
    hasDropdown: true,
    dropdownItems: [
      { label: "Company Overview", href: "/about/company-overview" },
      { label: "Mission & Vision", href: "/about/mission-vision" },
      { label: "Management Team", href: "/about/management-team" },
    ],
  },

  { label: "Accrediation", href: "/accrediation", hasDropdown: false },
  { label: "Facilities", href: "/facilities", hasDropdown: false },
  { label: "Profile", href: "/profile", hasDropdown: false },

  {
    label: "Infrastructure",
    href: "/infrastructure",
    hasDropdown: true,
    dropdownItems: [
      { label: "Laboratory Setup", href: "/infrastructure/laboratory-setup" },
      { label: "Testing Equipment", href: "/infrastructure/testing-equipment" },
      { label: "Quality Systems", href: "/infrastructure/quality-systems" },
    ],
  },

  {
    label: "Our Branch",
    href: "/our-branch",
    hasDropdown: true,
    dropdownItems: [
      { label: "Kolkata", href: "/our-branch/kolkata" },
      { label: "Howrah", href: "/our-branch/howrah" },
      { label: "Durgapur", href: "/our-branch/durgapur" },
    ],
  },

  {
    label: "Lab Tour",
    href: "/lab-tour",
    hasDropdown: true,
    dropdownItems: [
      { label: "Photo Gallery", href: "/lab-tour/photo-gallery" },
      { label: "Video Tour", href: "/lab-tour/video-tour" },
      { label: "Virtual Walkthrough", href: "/lab-tour/virtual-walkthrough" },
    ],
  },

  { label: "Our Client", href: "/our-client", hasDropdown: false },
  { label: "Gallery", href: "/gallery", hasDropdown: false },
  { label: "Contact Us", href: "/contact", hasDropdown: false },
];
const SEALS = [
  { src: "/seal-tc-11935.png", alt: "Accreditation Seal TC-11935" },
  { src: "/seal-tc-13401.png", alt: "Accreditation Seal TC-13401" },
  { src: "/seal-tc-1645.png", alt: "Accreditation Seal TC-1645" },
  { src: "/seal-tc-17671.png", alt: "Accreditation Seal TC-17671" },
  { src: "/seal-nabl.png", alt: "NABL Accreditation Seal" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="w-full font-sans">
      {/* Top bar */}
      <div className="bg-[#1e2d78] flex items-center justify-between px-4 sm:px-6 md:px-10 py-4">
        <span className="text-white text-[12px] sm:text-[14px] md:text-[15px] font-bold tracking-wide">
          Working Hours: 9:30am To 6:00pm
        </span>

        <a
          href="/contact"
          className="bg-[#f7941d] hover:bg-[#d97c0a] text-white text-[12px] sm:text-[13px] font-bold px-4 sm:px-6 md:px-7 py-1.5 sm:py-2 rounded-full transition-colors duration-200 whitespace-nowrap"
        >
          Contact Us
        </a>
      </div>

      {/* Middle row */}
      <div className="bg-white border-b border-[#dde0ec] flex items-center justify-between px-4 sm:px-6 md:px-10 py-6 gap-4">
        {/* Left logo + name, both images */}
        <a href="/" className="flex items-center gap-3 shrink-0 min-w-0">
          <Image
            src="/LOGO-OCS.jpeg"
            alt="OmegaLab logo"
            width={70}
            height={70}
            priority
            className="h-[52px] sm:h-[60px] md:h-[70px] w-auto object-contain shrink-0"
          />

          <Image
            src="/omega-brand-name.png"
            alt="OmegaLab Testing Services Private Limited"
            width={220}
            height={52}
            priority
            className="hidden sm:block h-[34px] md:h-[52px] w-auto object-contain"
          />
        </a>

        {/* Right 5 images, no overlap */}
        <div className="flex items-center justify-end gap-2 sm:gap-3 flex-wrap">
          {SEALS.map((seal) => (
            <div
              key={seal.alt}
              className="shrink-0 rounded-full overflow-hidden border border-[#c8ccd8] bg-white"
            >
              <Image
                src={seal.src}
                alt={seal.alt}
                width={68}
                height={68}
                className="h-[42px] w-[42px] sm:h-[52px] sm:w-[52px] md:h-[68px] md:w-[68px] object-contain rounded-full"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Bottom nav */}
      <nav className="bg-[#1e2d78]" aria-label="Main navigation">
        {/* Desktop */}
        <div className="hidden lg:flex items-center justify-center flex-wrap px-5 py-5">
          {NAV_LINKS.map((link) => (
            <div key={link.label} className="relative group">
              <a
                href={link.href}
                className="flex items-center gap-1 text-white text-[13.5px] font-medium px-3 py-3.5 hover:text-[#ff6700] transition-colors duration-150 whitespace-nowrap"
              >
                {link.label}
                {link.hasDropdown && (
                  <svg
                    className="w-[9px] h-[9px] mt-[1px] transition-transform duration-200 group-hover:rotate-180"
                    viewBox="0 0 10 7"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d="M5 7L0 0h10z" />
                  </svg>
                )}
              </a>

              {link.hasDropdown && link.dropdownItems && (
                <div className="absolute left-0 top-full pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                  <div className="min-w-[220px] overflow-hidden rounded-md bg-white shadow-lg border border-gray-200">
                    {link.dropdownItems.map((item) => (
                      <a
                        key={item.label}
                        href={item.href}
                        className="block px-4 py-3 text-[13px] font-medium text-[#1e2d78] hover:bg-gray-50 hover:text-[#ff6700] transition-colors"
                      >
                        {item.label}
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Mobile */}
        <div className="lg:hidden flex items-center justify-between px-5 py-3">
          <span className="text-white text-sm font-semibold">Menu</span>

          <button
            onClick={() => setMenuOpen((v) => !v)}
            aria-expanded={menuOpen}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            className="p-1.5 rounded-md text-white hover:bg-white/10 transition-colors"
          >
            {menuOpen ? (
              <svg
                width="24"
                height="24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg
                width="24"
                height="24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {menuOpen && (
          <div className="lg:hidden flex flex-col border-t border-white/20 pb-2">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="flex items-center justify-between text-white text-sm font-medium px-5 py-3 hover:bg-white/10 hover:text-[#ff6700] transition-colors"
              >
                {link.label}
                {link.hasDropdown && (
                  <svg
                    className="w-2.5 h-2.5 opacity-70"
                    viewBox="0 0 10 10"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d="M3 1l5 4-5 4V1z" />
                  </svg>
                )}
              </a>
            ))}
          </div>
        )}
      </nav>
    </div>
  );
}
