"use client";

import Link from "next/link";
import { Phone, Mail, Menu, X, ChevronDown } from "lucide-react";
import Image from "next/image";
import { useState, useEffect } from "react";
import branchesData from "../data/branches.json";
import ContactModal from "./ContactModal";

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
  WhatsApp: (
    <img
      src="https://cdn-icons-png.flaticon.com/128/733/733585.png"
      alt="WhatsApp"
      className="w-full h-full object-contain hover:scale-110 transition-transform duration-300"
    />
  ),
};

const LOGO =
  "https://res.cloudinary.com/de4cnpfm1/image/upload/v1781108347/TM_-_LOGO_eooaf9.jpg";

const NAV_ITEMS = [
  { name: "HOME", path: "/" },
  {
    name: "ABOUT US",
    path: "#",
    dropdown: [
      { name: "Laboratory Details", path: "/laboratory-details" },
      { name: "Laboratory Policy & Objective", path: "/laboratory-policy" },
      { name: "Our Vision & Mission", path: "/vision-mission" },
      { name: "Organizational Chart", path: "/organizational-chart" },
      { name: "Activity", path: "/activity" },
    ],
  },
  { name: "ACCREDIATION", path: "/accreditation" },
  { name: "FACILITIES", path: "/facilities" },
  { name: "PROJECTS & APPROVAL", path: "/projects-approvals" },
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
  {
    name: "GET IN TOUCH",
    path: "#",
    dropdown: [
      { name: "Enquiry", path: "/#enquiry" },
      { name: "Contact Us", path: "/#footer" },
    ],
  },
  { name: "CAREER", path: "/career" },
];
const NABL_BADGES = [
  {
    id: "TC-11935",
    branch: "Kolkata-1",
    url: "https://res.cloudinary.com/de4cnpfm1/image/upload/v1778245989/TC11935_tsqh9z.webp",
    link: "https://nablwp.qci.org.in/CertificateScopenew?x=eOcz5t8vhPRBC9udGS4tiw==&src=P",
  },
  {
    id: "TC-13401",
    branch: "Kolkata-2",
    url: "https://res.cloudinary.com/de4cnpfm1/image/upload/v1778245987/TC13401_axis5q.webp",
    link: "https://nablwp.qci.org.in/CertificateScopenew?x=DeJ1LQUam/f8LCftuQrgsw==&src=P",
  },
  {
    id: "TC-15509",
    branch: "Siliguri",
    url: "https://res.cloudinary.com/de4cnpfm1/image/upload/v1780202025/ChatGPT_Image_May_31_2026_09_55_06_AM_ddjfjc.jpg",
    link: "https://nablwp.qci.org.in/CertificateScopenew?x=j6k9iq1uw4Bg9VLeGZxZMg==&src=P",
  },
  {
    id: "TC-16480",
    branch: "Ranchi",
    url: "https://res.cloudinary.com/de4cnpfm1/image/upload/v1778245989/TC16480_kmsows.webp",
    link: "https://nablwp.qci.org.in/CertificateScopenew?x=wsIgkGUfG5PjBiZbOfxOtQ==&src=P",
  },
  {
    id: "TC-17671",
    branch: "Odisha",
    url: "https://res.cloudinary.com/de4cnpfm1/image/upload/v1778245989/TC17671_ghwfuo.webp",
    link: "https://nablwp.qci.org.in/CertificateScopenew?x=BLtvn2Aigjq6fokVy2tlWQ==&src=P",
  },
];
export default function Navbar() {
  const [openMobileMenu, setOpenMobileMenu] = useState<string | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

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
        <div className="w-full bg-[#0a0823] text-white/90 border-b border-white/[0.08] relative z-[1001] font-sans">
          <div className="max-w-[1920px] mx-auto px-4 md:px-8">
            {/* Desktop and Tablet Landscape Layout (>= 1024px) */}
            <div className="hidden lg:flex justify-between items-center py-2 text-xs">
              {/* Left: Socials */}
              <div className="flex items-center gap-3">
                <span className="text-white/50 text-[10px] uppercase font-bold tracking-widest">Follow Us:</span>
                <div className="flex gap-3.5">
                  <a href="https://www.facebook.com/p/Omegalab-Testing-Services-PVt-Ltd-61579482957218/" target="_blank" rel="noopener noreferrer" className="w-5 h-5 flex items-center justify-center transition-all duration-300 hover:scale-110">
                    {ICONS.Facebook}
                  </a>
                  <a href="https://www.instagram.com/omegalabtesting/?hl=en" target="_blank" rel="noopener noreferrer" className="w-5 h-5 flex items-center justify-center transition-all duration-300 hover:scale-110">
                    {ICONS.Instagram}
                  </a>
                  <a href="https://www.linkedin.com/company/omegalab-testing-services-pvt-ltd?originalSubdomain=in" target="_blank" rel="noopener noreferrer" className="w-5 h-5 flex items-center justify-center transition-all duration-300 hover:scale-110">
                    {ICONS.LinkedIn}
                  </a>
                  <a href="https://www.youtube.com/@omegalabtestingservices" target="_blank" rel="noopener noreferrer" className="w-5 h-5 flex items-center justify-center transition-all duration-300 hover:scale-110">
                    {ICONS.YouTube}
                  </a>
                  <a href="#" target="_blank" rel="noopener noreferrer" className="w-5 h-5 flex items-center justify-center transition-all duration-300 hover:scale-110">
                    {ICONS.WhatsApp}
                  </a>
                </div>
              </div>

              {/* Right: Contact & Button */}
              <div className="flex items-center gap-6">
                <a href="tel:08062180808" className="flex items-center gap-2 group transition-all">
                  <div className="bg-white/5 p-1.5 rounded-full group-hover:bg-[#FF6700]/10 transition-all">
                    <Phone size={13} className="text-[#FF6700]" fill="currentColor" />
                  </div>
                  <span className="text-white/80 group-hover:text-white font-medium transition-colors">08062180808</span>
                </a>

                <div className="w-[1px] h-3 bg-white/10"></div>

                <a href="mailto:omegalabinfo98@gmail.com" className="flex items-center gap-2 group transition-all">
                  <div className="bg-white/5 p-1.5 rounded-full group-hover:bg-[#FF6700]/10 transition-all">
                    <Mail size={13} className="text-[#FF6700]" />
                  </div>
                  <span className="text-white/80 group-hover:text-white font-medium transition-colors">omegalabinfo98@gmail.com</span>
                </a>

                <button
                  onClick={() => setIsContactModalOpen(true)}
                  className="cursor-pointer bg-gradient-to-r from-[#FF6700] to-[#ff8c3a] hover:from-[#e65c00] hover:to-[#ff7a22] text-white font-bold h-8 px-5 rounded-full flex items-center justify-center uppercase text-[10px] tracking-wider transition-all duration-300 hover:shadow-[0_0_12px_rgba(255,103,0,0.4)]"
                >
                  Contact Us
                </button>
              </div>
            </div>

            {/* Mobile and Tablet Portrait Layout (< 1024px) */}
            <div className="lg:hidden flex justify-between items-center py-2.5 text-xs">
              {/* Left: Click-to-Call Phone Action */}
              <a href="tel:03324971903" className="flex items-center gap-1.5 text-white/90 active:scale-95 transition-transform">
                <Phone size={12} className="text-[#FF6700]" fill="currentColor" />
                <span className="font-bold tracking-wide">033 2497 1903</span>
              </a>

              {/* Right: Clean Social Icons */}
              <div className="flex items-center gap-3">
                <a href="https://www.facebook.com/p/Omegalab-Testing-Services-PVt-Ltd-61579482957218/" target="_blank" rel="noopener noreferrer" className="w-4 h-4 flex items-center justify-center">
                  {ICONS.Facebook}
                </a>
                <a href="https://www.instagram.com/omegalabtesting/?hl=en" target="_blank" rel="noopener noreferrer" className="w-4 h-4 flex items-center justify-center">
                  {ICONS.Instagram}
                </a>
                <a href="https://www.linkedin.com/company/omegalab-testing-services-pvt-ltd?originalSubdomain=in" target="_blank" rel="noopener noreferrer" className="w-4 h-4 flex items-center justify-center">
                  {ICONS.LinkedIn}
                </a>
                <a href="https://www.youtube.com/@omegalabtestingservices" target="_blank" rel="noopener noreferrer" className="w-4 h-4 flex items-center justify-center">
                  {ICONS.YouTube}
                </a>
                <a href="#" target="_blank" rel="noopener noreferrer" className="w-4 h-4 flex items-center justify-center">
                  {ICONS.WhatsApp}
                </a>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Header Section */}
      <div className="w-full sticky top-0 z-[1000] shadow-2xl bg-[#1E1B5C] transition-all font-sans">
        {/* Main Logo & Info Bar */}
        <div className="bg-white py-4 md:py-6 px-4 md:px-8 flex items-center relative">
          <div className="flex flex-1 items-center gap-4 lg:gap-6 mr-4 lg:mr-10">
            <Link href="/" className="mb-5 flex items-center gap-4 min-w-0 cursor-pointer">
              <div className="w-[50px] h-[50px] md:w-[70px] md:h-[70px] xl:w-[100px] xl:h-[100px] bg-white rounded-2xl shadow-lg shrink-0 overflow-hidden flex items-center justify-center">
                <Image
                  src={LOGO}
                  alt="Omega Lab Logo"
                  width={80}
                  height={80}
                  className="object-contain w-[36px] h-[36px] md:w-[50px] md:h-[50px] xl:w-[72px] xl:h-[72px]"
                />
              </div>
              <div className="min-w-0 leading-tight overflow-hidden">
                <div className="text-[24px] sm:text-[46px] font-extrabold tracking-tight text-[#2E1271] break-words sm:truncate">
                  OMEGA<span className="text-[#63B7F6]">LAB</span>
                </div>
                <div className="text-[14px] sm:text-[25px] uppercase tracking-wide text-[#2E1271] break-words font-extrabold font-century-gothic">
                  Testing Services Private Limited
                </div>
              </div>
            </Link>
          </div>

          <div className="hidden lg:flex gap-2 xl:gap-4 items-center shrink-0">
            {NABL_BADGES.map((badge) => (
              <div key={badge.id} className="flex flex-col items-center gap-1 lg:gap-1.5 shrink-0">
                <a
                  href={badge.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-[60px] h-[80px] lg:w-[70px] lg:h-[90px] xl:w-[90px] xl:h-[110px] bg-white rounded-full flex flex-col items-center justify-center shadow-md relative overflow-hidden"
                >
                  <div className="text-[5px] xl:text-[7px] font-bold text-black uppercase text-center flex flex-col items-center mt-[2px] xl:mt-[3px]">
                    <div className="flex items-center justify-center mb-0.5 relative">
                      <Image
                        src={badge.url}
                        alt={`NABL ${badge.id}`}
                        width={40}
                        height={40}
                        className="object-contain lg:w-[80px] lg:h-[80px]"
                      />
                    </div>
                  </div>
                </a>
                <span className="text-black text-[8px] lg:text-[10px] xl:text-[12px] font-extrabold font-sans tracking-wide uppercase text-center">
                  {badge.branch}
                </span>
              </div>
            ))}
          </div>

          {/* Mobile Menu Button  */}
          <button
            className="lg:hidden text-[#1E1B5C] p-2 hover:bg-[#1E1B5C]/10 rounded-md transition-colors shrink-0 ml-auto"
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
                          subItem.name === "Contact Us" ? (
                            <button
                              key={subItem.name}
                              onClick={() => setIsContactModalOpen(true)}
                              className="w-full text-left block px-5 py-2.5 text-white/70 hover:text-white hover:bg-white/5 uppercase text-[12px] font-bold tracking-wide transition-all border-b border-white/5 last:border-0"
                            >
                              {subItem.name}
                            </button>
                          ) : (
                            <Link
                              key={subItem.name}
                              href={subItem.path}
                              className="block px-5 py-2.5 text-white/70 hover:text-white hover:bg-white/5 uppercase text-[12px] font-bold tracking-wide transition-all border-b border-white/5 last:border-0"
                            >
                              {subItem.name}
                            </Link>
                          )
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
          className={`lg:hidden absolute top-full left-0 w-full bg-[#1E1B5C] shadow-2xl flex flex-col transition-all duration-300 ease-in-out origin-top z-[998] overflow-hidden ${isMobileMenuOpen
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
                            subItem.name === "Contact Us" ? (
                              <button
                                key={subItem.name}
                                onClick={() => {
                                  setIsMobileMenuOpen(false);
                                  setIsContactModalOpen(true);
                                }}
                                className="w-full text-left text-white/70 hover:text-white hover:bg-white/10 pl-8 pr-4 py-3 text-[11px] uppercase font-semibold block transition-colors border-b border-white/5 last:border-0"
                              >
                                {subItem.name}
                              </button>
                            ) : (
                              <Link
                                key={subItem.name}
                                href={subItem.path}
                                className="text-white/70 hover:text-white hover:bg-white/10 pl-8 pr-4 py-3 text-[11px] uppercase font-semibold block transition-colors border-b border-white/5 last:border-0"
                                onClick={() => setIsMobileMenuOpen(false)}
                              >
                                {subItem.name}
                              </Link>
                            )
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
      
      {/* Contact Modal */}
      <ContactModal 
        isOpen={isContactModalOpen} 
        onClose={() => setIsContactModalOpen(false)} 
      />
    </>
  );
}
