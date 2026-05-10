"use client";

import Link from "next/link";
import { Phone, Mail, Menu, X, ChevronDown } from "lucide-react";
import Image from "next/image";
import { useState, useEffect } from "react";
import branchesData from "../data/branches.json";

const ICONS = {
  Facebook: (
    <img
      src="https://cdn-icons-png.flaticon.com/128/145/145802.png"
      alt="Facebook"
      className="w-full h-full object-contain hover:scale-110 transition-transform duration-300"
    />
  ),
  Instagram: (
    <img
      src="https://cdn-icons-png.flaticon.com/128/1409/1409946.png"
      alt="Instagram"
      className="w-full h-full object-contain hover:scale-110 transition-transform duration-300"
    />
  ),
  LinkedIn: (
    <img
      src="https://cdn-icons-png.flaticon.com/128/145/145807.png"
      alt="LinkedIn"
      className="w-full h-full object-contain hover:scale-110 transition-transform duration-300"
    />
  ),
  YouTube: (
    <img
      src="https://cdn-icons-png.flaticon.com/128/1384/1384060.png"
      alt="YouTube"
      className="w-full h-full object-contain hover:scale-110 transition-transform duration-300"
    />
  ),
};

const LOGO =
  "https://res.cloudinary.com/de4cnpfm1/image/upload/v1778247941/LOGO-_OCS_eamyrc.jpg";

const NAV_ITEMS = [
  { name: "HOME", path: "/" },
  {
    name: "ABOUT US",
    path: "#",
    dropdown: [
      { name: "Achievement", path: "/achievements" },
      { name: "External Visit", path: "/external-visit" },
      { name: "Organizational Chart", path: "/organizational-chart" },
    ],
  },
  { name: "ACCREDIATION", path: "/accreditation" },
  { name: "FACILITIES", path: "/facilities" },
  { name: "PROFILES", path: "/profiles" },
  {
    name: "INFRASTRUCTURE",
    path: "#",
    dropdown: [
      {
        name: "Mechanical Lab Testing Instrument",
        path: "/infrastructure/mechanical",
      },
      {
        name: "Chemical Lab Testing Instrument",
        path: "/infrastructure/chemical",
      },
      { name: "Civil Lab Testing Instrument", path: "/infrastructure/civil" },
      { name: "Non-Destructive Testing", path: "/infrastructure/ndt" },
    ],
  },
  {
    name: "OUR BRANCH",
    path: "#",
    dropdown: branchesData.map((branch) => ({
      name: branch.name,
      path: branch.pathOverride || `/our-branch/${branch.id}`,
    })),
  },
  { name: "LAB TOUR", path: "/lab-tour" },
  { name: "OUR CLIENTS", path: "/our-clients" },
  { name: "CONTACT US", path: "/#contact" },
  { name: "CAREER", path: "/career" },
];
const NABL_BADGES = [
  {
    id: "TC-11935",
    url: "https://res.cloudinary.com/de4cnpfm1/image/upload/v1778245989/TC11935_tsqh9z.webp",
    link: "https://nablwp.qci.org.in/CertificateScopenew?x=eOcz5t8vhPRBC9udGS4tiw==&src=P",
  },
  {
    id: "TC-13401",
    url: "https://res.cloudinary.com/de4cnpfm1/image/upload/v1778245987/TC13401_axis5q.webp",
    link: "https://nablwp.qci.org.in/CertificateScopenew?x=eOcz5t8vhPRBC9udGS4tiw==&src=P",
  },
  {
    id: "TC-15509",
    url: "https://res.cloudinary.com/de4cnpfm1/image/upload/v1778245987/TC15509_dx2lua.webp",
    link: "https://nablwp.qci.org.in/CertificateScopenew?x=j6k9iq1uw4Bg9VLeGZxZMg==&src=P",
  },
  {
    id: "TC-16480",
    url: "https://res.cloudinary.com/de4cnpfm1/image/upload/v1778245989/TC16480_kmsows.webp",
    link: "https://nablwp.qci.org.in/CertificateScopenew?x=wsIgkGUfG5PjBiZbOfxOtQ==&src=P",
  },
  {
    id: "TC-17671",
    url: "https://res.cloudinary.com/de4cnpfm1/image/upload/v1778245989/TC17671_ghwfuo.webp",
    link: "https://nablwp.qci.org.in/CertificateScopenew?x=BLtvn2Aigjq6fokVy2tlWQ==&src=P",
  },
];
export default function Navbar() {
  const [openMobileMenu, setOpenMobileMenu] = useState<string | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Close mobile menu when screen resizes to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsMobileMenuOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <header className="w-full font-sans flex flex-col relative z-[1000] bg-[#1E1B5C] transition-all">
        {/* Top Utility Bar */}
        <div className="w-full bg-[#0e0b30] text-white pt-2 pb-1.5 md:py-1.5 px-4 md:px-8 flex flex-col md:flex-row justify-between items-center text-[10px] md:text-xs relative z-[1001]">
          <div className="flex items-center gap-3 mb-2 md:mb-0">
            <span className="text-white/80 font-bold uppercase tracking-wider">
              Follow Us:
            </span>
            <div className="flex gap-2">
              <Link
                href="#"
                className="w-6 h-6 flex items-center justify-center hover:opacity-80 transition-opacity"
              >
                {ICONS.Facebook}
              </Link>
              <Link
                href="#"
                className="w-6 h-6 flex items-center justify-center hover:opacity-80 transition-opacity"
              >
                {ICONS.Instagram}
              </Link>
              <Link
                href="#"
                className="w-6 h-6 flex items-center justify-center hover:opacity-80 transition-opacity"
              >
                {ICONS.LinkedIn}
              </Link>
              <Link
                href="#"
                className="w-6 h-6 flex items-center justify-center hover:opacity-80 transition-opacity"
              >
                {ICONS.YouTube}
              </Link>
            </div>
          </div>
          <div className="flex flex-wrap justify-center items-center gap-4 md:gap-6">
            <div className="flex items-center gap-1.5 text-[#c14d9b] font-medium">
              <Phone size={14} className="text-[#c14d9b]" fill="currentColor" />
              <span className="text-[#e0e0e0]">033 2497 1903</span>
            </div>
            <div className="flex items-center gap-1.5 font-medium">
              <img
                src="https://cdn-icons-png.flaticon.com/128/9068/9068642.png"
                alt="Email"
                className="w-4 h-4 object-contain"
              />
              <span className="text-[#e0e0e0]">omegalabinfo98@gmail.com</span>
            </div>
            <Link
              href="/#contact"
              className="bg-[#FF6700] hover:bg-orange-600 text-white font-black h-7 px-5 rounded-full flex items-center justify-center uppercase text-[10px] md:text-[11px] tracking-wider transition-colors shadow-sm ml-2"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </header>

      {/* Main Header Section */}
      <div className="w-full sticky top-0 z-[1000] shadow-2xl bg-[#1E1B5C] transition-all font-sans">
        {/* Main Logo & Info Bar */}
        <div className="bg-[#1E1B5C] py-4 md:py-6 px-4 md:px-8 flex items-center relative">
          <div className="flex flex-1 items-center gap-4 lg:gap-6 mr-4 lg:mr-10">
            <div className="mb-5 flex items-center gap-3 min-w-0">
              <div className="w-[40px] h-[40px] md:w-[55px] md:h-[55px] xl:w-[88px] xl:h-[88px] bg-white rounded-2xl shadow-lg shrink-0 overflow-hidden flex items-center justify-center">
                <Image
                  src={LOGO}
                  alt="Omega Lab Logo"
                  width={56}
                  height={56}
                  className="object-contain w-[30px] h-[30px] md:w-[44px] md:h-[44px] xl:w-[56px] xl:h-[56px]"
                />
              </div>
              <div className="min-w-0 leading-tight overflow-hidden">
                <div className="text-[20px] sm:text-[40px] font-extrabold tracking-tight text-white break-words sm:truncate">
                  OMEGA<span className="text-[#63B7F6]">LAB</span>
                </div>
                <div className="text-[12px] sm:text-[20px] uppercase tracking-wide text-white/75 leading-tight break-words">
                  Testing Services Private Limited
                </div>
              </div>
            </div>
          </div>

          <div className="hidden lg:flex gap-2 xl:gap-4 items-center shrink-0">
            {NABL_BADGES.map((badge) => (
              <a
                href={badge.link}
                target="_blank"
                rel="noopener noreferrer"
                key={badge.id}
                className="w-[60px] h-[80px] lg:w-[70px] lg:h-[90px] xl:w-[90px] xl:h-[110px] shrink-0 bg-white rounded-full flex flex-col items-center justify-center border-[3px] border-[#FF6700] shadow-md relative overflow-hidden"
              >
                <div className="text-[5px] xl:text-[7px] font-bold text-black uppercase text-center flex flex-col items-center mt-[2px] xl:mt-[3px]">
                  <div className="flex items-center justify-center mb-0.5 relative">
                    <Image
                      src={badge.url}
                      alt={`NABL ${badge.id}`}
                      width={40}
                      height={40}
                      className="object-contain  lg:w-[80px] lg:h-[80px]"
                    />
                  </div>
                </div>
                {/* <span className="text-black text-[7px] lg:text-[8px] xl:text-[9px] font-bold font-sans tracking-tight mb-1">
                    {badge.id}
                  </span> */}
              </a>
            ))}
          </div>

          {/* Mobile Menu Button  */}
          <button
            className="lg:hidden text-white p-2 hover:bg-white/10 rounded-md transition-colors shrink-0 ml-auto"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle Navigation"
          >
            {isMobileMenuOpen ? <X size={32} /> : <Menu size={32} />}
          </button>
        </div>

        {/* Navigation Links Bar (Desktop) */}
        <nav className="bg-[#1E1B5C] border-t-[3px] border-[#FF6700] hidden lg:block shadow-[0_4px_6px_-1px_rgba(0,0,0,0.3)]">
          <div className="px-2 md:px-4 lg:px-6 xl:px-8 flex justify-center lg:justify-between items-center max-w-[1920px] mx-auto w-full">
            <ul className="flex justify-center w-full text-[10px] lg:text-[11px] xl:text-[12px] 2xl:text-[13px] font-bold text-white/80 font-sans min-h-[50px] gap-0">
              {NAV_ITEMS.map((item) => (
                <li
                  key={item.name}
                  className="h-[50px] relative group shrink-0"
                >
                  {item.dropdown ? (
                    <>
                      <button
                        type="button"
                        className="px-2 lg:px-2.5 xl:px-3 2xl:px-4 h-full flex items-center hover:text-white transition-colors uppercase gap-0.5 xl:gap-1 whitespace-nowrap cursor-pointer"
                      >
                        {item.name}
                        <ChevronDown
                          size={14}
                          className="opacity-70 group-hover:opacity-100 transition-opacity"
                          strokeWidth={3}
                        />
                      </button>

                      <div className="absolute top-full left-0 bg-[#1E1B5C] shadow-xl border-t-[3px] border-[#FF6700] min-w-[250px] opacity-0 invisible group-hover:opacity-100 group-hover:visible group-focus-within:opacity-100 group-focus-within:visible transition-all duration-200 py-3 rounded-b-md z-50">
                        {item.dropdown.map((subItem) => (
                          <Link
                            key={subItem.name}
                            href={subItem.path}
                            className="block px-5 py-2.5 text-white/70 hover:text-white hover:bg-white/5 uppercase text-[12px] font-bold tracking-wide transition-all border-b border-white/5 last:border-0"
                          >
                            {subItem.name}
                          </Link>
                        ))}
                      </div>
                    </>
                  ) : (
                    <Link
                      href={item.path}
                      className="px-2 lg:px-2.5 xl:px-3 2xl:px-4 h-full flex items-center hover:text-white transition-colors uppercase whitespace-nowrap"
                    >
                      {item.name}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </nav>

        {/* Mobile Navigation Drawer */}
        <div
          className={`lg:hidden absolute top-full left-0 w-full bg-[#1E1B5C] shadow-2xl flex flex-col transition-all duration-300 ease-in-out origin-top z-[998] overflow-hidden ${
            isMobileMenuOpen
              ? "max-h-[85vh] border-t-[3px] border-[#FF6700]"
              : "max-h-0 border-t-0"
          }`}
        >
          <div className="h-auto max-h-[85vh] overflow-y-auto">
            <ul className="flex flex-col text-white font-sans p-2">
              {NAV_ITEMS.map((item) => (
                <li
                  key={item.name}
                  className="border-b border-white/10 last:border-0 relative"
                >
                  {item.dropdown ? (
                    <div className="flex flex-col">
                      <button
                        className="py-4 px-4 text-left font-bold uppercase text-[12px] flex items-center justify-between w-full hover:bg-white/5 transition-colors"
                        onClick={() =>
                          setOpenMobileMenu(
                            openMobileMenu === item.name ? null : item.name,
                          )
                        }
                      >
                        {item.name}
                        <ChevronDown
                          size={18}
                          className={`transition-transform duration-300 ${openMobileMenu === item.name ? "rotate-180 text-[#FF6700]" : "text-white/60"}`}
                        />
                      </button>

                      <div
                        className={`overflow-hidden transition-all duration-300 ease-in-out bg-[#110f3c] ${openMobileMenu === item.name ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"}`}
                      >
                        <div className="p-2 py-3 flex flex-col">
                          {item.dropdown.map((subItem) => (
                            <Link
                              key={subItem.name}
                              href={subItem.path}
                              className="text-white/70 hover:text-white hover:bg-white/10 pl-8 pr-4 py-3 text-[11px] uppercase font-semibold block transition-colors border-b border-white/5 last:border-0"
                              onClick={() => setIsMobileMenuOpen(false)}
                            >
                              {subItem.name}
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                  ) : (
                    <Link
                      href={item.path}
                      className="block py-4 px-4 hover:bg-white/5 hover:text-white transition-colors font-bold text-white/90 uppercase text-[12px]"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
