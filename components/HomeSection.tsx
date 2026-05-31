'use client';
import Image from "next/image";
import Link from "next/link";
import HeroSlider from "./HeroSlider";
import IndiaBranchMap from "./IndiaBranchMap";
import CLIENT_DATA from "../data/clients.json";
import { useState, useEffect, useRef } from "react";
import { Search, X, FlaskConical, CheckCircle2 } from "lucide-react";
import { useSearchParams } from "next/navigation";
import { useInView } from "react-intersection-observer";
import CountUp from "react-countup";

const ABOUT_DATA = {
  ceoImage:
    "https://res.cloudinary.com/de4cnpfm1/image/upload/v1778426371/CEO_PIC_jdtmrp.jpg",
  ceoImageAlt:
    "Mr. A.K. Das - CEO and Founder of Omegalab Testing Services Pvt Ltd",
};

const INDIAN_STATES = [
  "Andhra Pradesh",
  "Arunachal Pradesh",
  "Assam",
  "Bihar",
  "Chhattisgarh",
  "Goa",
  "Gujarat",
  "Haryana",
  "Himachal Pradesh",
  "Jharkhand",
  "Karnataka",
  "Kerala",
  "Madhya Pradesh",
  "Maharashtra",
  "Manipur",
  "Meghalaya",
  "Mizoram",
  "Nagaland",
  "Odisha",
  "Punjab",
  "Rajasthan",
  "Sikkim",
  "Tamil Nadu",
  "Telangana",
  "Tripura",
  "Uttar Pradesh",
  "Uttarakhand",
  "West Bengal",
  "Andaman and Nicobar Islands",
  "Chandigarh",
  "Dadra and Nagar Haveli and Daman and Diu",
  "Delhi",
  "Jammu and Kashmir",
  "Ladakh",
  "Lakshadweep",
  "Puducherry"
];



import materials from "../data/materials.json";
import TestingModal, { type MaterialItem } from "./TestingModal";

const filters = [
  "All Materials",
  "Metal & Alloys",
  "Plastic",
  "Textile",
  "Building & Construction Material",
  "Soil & Rock",
  "NDT",
  "Water",
  "Others Materials",
];



export default function HomeSections() {

  const [activeFilter, setActiveFilter] = useState("All Materials");
  const [selectedMaterial, setSelectedMaterial] = useState<MaterialItem | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);
  const [enquiryService, setEnquiryService] = useState("");
  const [enquiryParams, setEnquiryParams] = useState<string[]>([]);
  const [showOtherService, setShowOtherService] = useState(false);
  const [showAll, setShowAll] = useState(false);
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [selectedParameters, setSelectedParameters] = useState<Record<string, string[]>>({});
  const [selectionSaved, setSelectionSaved] = useState(false);
  const searchParams = useSearchParams();

  // Safety limits to prevent oversized URL payloads causing UI issues
  const MAX_SERVICE_LEN = 300;
  const MAX_PARAM_LEN = 200;
  const MAX_PARAM_COUNT = 50;

  // Read URL query params set by TestingModal and pre-fill the contact form.
  // Values are sanitized: trimmed, length-capped, and non-printable chars stripped.
  useEffect(() => {
    const sanitize = (s: string, max: number) =>
      s.replace(/[\x00-\x1F\x7F]/g, '').trim().slice(0, max);

    const rawService = searchParams.get("service") ?? "";
    const rawParams = searchParams.get("parameters") ?? "";

    if (rawService) {
      const service = sanitize(rawService, MAX_SERVICE_LEN);
      const params = rawParams
        ? rawParams
            .split("||") 
            .slice(0, MAX_PARAM_COUNT)
            .map(p => sanitize(p, MAX_PARAM_LEN))
            .filter(Boolean)
        : [];
      setEnquiryService(service);
      setEnquiryParams(params);

      // Clean query parameters from URL so that refreshing the page does not re-add them
      if (typeof window !== "undefined") {
        window.history.replaceState(null, "", window.location.pathname + window.location.hash);
      }

      setTimeout(() => {
        document.getElementById("contact")?.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 300);
    }
  }, [searchParams, MAX_SERVICE_LEN, MAX_PARAM_LEN, MAX_PARAM_COUNT]);

  useEffect(() => {
    const handleOutsideClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target.closest(".search-container-el")) {
        setShowDropdown(false);
      }
    };
    document.addEventListener("mousedown", handleOutsideClick);
    return () => document.removeEventListener("mousedown", handleOutsideClick);
  }, []);

  const searchResults = searchQuery.trim() === "" ? [] : (materials as MaterialItem[]).filter(m => {
    const query = searchQuery.toLowerCase();
    const nameMatch = m.name.toLowerCase().includes(query);
    const paramMatch = m.parameters?.some(p => p.toLowerCase().includes(query));
    return nameMatch || paramMatch;
  });

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  const stats = [
    {
      value: 25,
      suffix: "+",
      label: "Years of Service",
      isText: false,
      textValue: "",
    },
    {
      value: 900,
      suffix: "+",
      label: "Accredited Test Parameters",
      isText: false,
      textValue: "",
    },
    {
      value: 5,
      suffix: "",
      label: "Accredited Labs",
      isText: false,
      textValue: "",
    },
    {
      value: 120,
      suffix: "+",
      label: "Team Members",
      isText: false,
      textValue: "",
    },
    {
      value: 0,
      suffix: "",
      label: "Supported System",
      isText: true,
      textValue: "LIMS",
    },
  ];

  const filteredMaterials = (
    activeFilter === "All Materials"
      ? materials
      : materials.filter((item) => {
          const nameLower = item.name.toLowerCase();
          const categories = item.category || [];
          
          if (activeFilter === "Metal & Alloys") {
            return categories.includes("Metals & Steel");
          }
          if (activeFilter === "Plastic") {
            return categories.includes("Plastic");
          }
          if (activeFilter === "Textile") {
            return categories.includes("Geotextiles");
          }
          if (activeFilter === "Building & Construction Material") {
            // Include Cement & Concrete but exclude Soil/Rock/Clay items
            const isSoilOrRock = nameLower.includes("soil") || nameLower.includes("rock") || nameLower.includes("stone") || nameLower.includes("clay") || nameLower.includes("blanketing");
            return categories.includes("Cement & Concrete") && !isSoilOrRock;
          }
          if (activeFilter === "Soil & Rock") {
            return nameLower.includes("soil") || nameLower.includes("rock") || nameLower.includes("stone") || nameLower.includes("clay") || nameLower.includes("blanketing");
          }
          if (activeFilter === "NDT") {
            return categories.includes("NDT Services");
          }
          if (activeFilter === "Water") {
            return categories.includes("Water");
          }
          if (activeFilter === "Others Materials") {
            const hasKnownCategory = categories.includes("Metals & Steel") || 
                                     categories.includes("Plastic") || 
                                     categories.includes("Geotextiles") || 
                                     categories.includes("Cement & Concrete") || 
                                     categories.includes("NDT Services") || 
                                     categories.includes("Water");
            return !hasKnownCategory;
          }
          return false;
        })
  ).slice(0, showAll ? undefined : 24);




  return (
    <div className="flex flex-col w-full">
      {/* 1. Hero Section */}
      <HeroSlider />

      {/* 2. Stats Section */}
      <section className="relative bg-[#0e0b30] overflow-hidden" ref={ref}>
        {/* Ambient animated glow blobs — same as footer */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
          <div className="absolute -top-[30%] -right-[10%] w-[45%] h-[150%] rounded-full bg-[#1E1B5C]/70 blur-[120px]" />
          <div className="absolute top-[50%] -left-[10%] w-[35%] h-[200%] rounded-full bg-[#FF6700]/8 blur-[100px]" />
          <div className="absolute bottom-[10%] right-[25%] w-[18%] h-[200%] rounded-full bg-[#1E1B5C]/50 blur-[80px]" />
        </div>

        {/* SVG cross/dot pattern — identical to footer */}
        <div
          className="absolute inset-0 opacity-[0.035] pointer-events-none mix-blend-screen z-0"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
          }}
        />

        {/* Top orange border — same as footer */}
        <div className="absolute top-0 left-0 right-0 h-[4px] bg-[#FF6700] z-10" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-12 md:py-16">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-px bg-white/[0.06] rounded-2xl overflow-hidden border border-white/[0.08] shadow-[0_0_60px_rgba(0,0,0,0.4)]">
            {stats.map((item, index) => (
              <div
                key={index}
                className="relative flex flex-col items-center justify-center py-10 px-6 bg-[#0e0b30] hover:bg-white/[0.04] transition-all duration-300 group cursor-default"
              >
                {/* Subtle orange glow on hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-sm"
                  style={{ background: "radial-gradient(ellipse at center, rgba(255,103,0,0.07) 0%, transparent 70%)" }}
                />

                {/* Orange accent dot top */}
                <div className="absolute top-5 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-[#FF6700]/40 group-hover:bg-[#FF6700] transition-colors duration-300" />

                {/* Number / Text */}
                <div className="text-[42px] md:text-[54px] font-black text-[#FF6700] font-oswald leading-none tabular-nums tracking-tight mb-1 group-hover:scale-105 transition-transform duration-300 origin-bottom">
                  {item.isText ? (
                    <span className="text-[30px] md:text-[40px]">{item.textValue}</span>
                  ) : (
                    inView ? (
                      <CountUp
                        end={item.value}
                        duration={2.2}
                        suffix={item.suffix}
                        useEasing
                        easingFn={(t, b, c, d) => {
                          t /= d / 2;
                          if (t < 1) return (c / 2) * t * t + b;
                          t--;
                          return (-c / 2) * (t * (t - 2) - 1) + b;
                        }}
                      />
                    ) : (
                      <span>0{item.suffix}</span>
                    )
                  )}
                </div>

                {/* Thin divider line */}
                <div className="w-8 h-[2px] bg-[#FF6700]/30 group-hover:bg-[#FF6700]/70 group-hover:w-12 transition-all duration-300 rounded-full mb-3" />

                {/* Label */}
                <div className="text-[10px] md:text-[11px] uppercase tracking-[2px] text-white/45 group-hover:text-white/70 font-bold text-center leading-snug transition-colors duration-300">
                  {item.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#FF6700]/30 to-transparent" />
      </section>

      {/* 3. About Section */}
      <section className="py-12 md:py-20 px-4 md:px-12 max-w-[1300px] mx-auto w-full">
        <div className="text-center mb-10 md:mb-16">
          <h2 className="text-[24px] md:text-[38px] font-black text-[#1E1B5C] mb-2 font-oswald tracking-tight">
            About Us
          </h2>
          <div className="w-[60px] h-[4px] bg-[#FF6700] mx-auto mt-3 rounded-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.3fr] gap-10 md:gap-16 items-start">
          <div className="relative">
            <div className="w-full aspect-[4/4.5] md:aspect-square rounded-2xl bg-slate-300 overflow-hidden relative shadow-lg">
              <Image
                src={ABOUT_DATA.ceoImage}
                alt={ABOUT_DATA.ceoImageAlt}
                fill
                sizes="(min-width: 1300px) 522px, (min-width: 1024px) 43vw, (min-width: 768px) calc(100vw - 96px), calc(100vw - 32px)"
                className="object-cover"
              />
            </div>
          </div>

          <div>
            <blockquote className="border-l-4 border-[#FF6700] p-5 mb-6 bg-[#FF6700]/5 rounded-r-xl italic text-[14px] md:text-[16px] leading-[1.7] text-[#1E1B5C]">
              &quot;Welcome to Omegalab, where Quality meets Reliability, accuracy is our goal, quality is our soul, safety is our priority, and satisfaction is our guarantee.&quot;
              <cite className="block not-italic font-bold mt-3 text-[#FF6700] text-[13px] font-montserrat">
                — A.K. Das, CEO & Founder
              </cite>
            </blockquote>

            <p className="text-[13px] md:text-[15px] leading-[1.75] text-[#1E1B5C]/75 mb-6">
              We always embrace transformation as a necessary weapon to turning challenges into opportunities for innovation. Using history to show that advancements in one generation build the foundation for the next. Focusing on build a strong, passionate team and well build infrastructure to serve the nation.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {[
                { icon: "🏆", text: "NABL Accredited since 2012" },
                { icon: "📐", text: "14,000 sq.ft. Central Lab kolkata" },
                { icon: "👥", text: "100+ Technical Experts" },
                { icon: "🔬", text: "ISO/IEC 17025:2017 Compliant" },
                { icon: "📍", text: "Eastern & NE India Coverage" },
                { icon: "🎯", text: "LIMS supported System" },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-lg p-3 flex items-start gap-2.5 text-[12px] font-semibold leading-[1.4] shadow-[0_2px_8px_rgba(0,0,0,0.04)] text-[#1E1B5C]"
                >
                  <span className="text-[20px] shrink-0">{item.icon}</span>
                  <span>{item.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>


      {/* 5. Laboratory Network Section */}
      <section className="bg-[#1E1B5C] py-12 md:py-20 px-4 md:px-12">
        <div className="text-center mb-10 md:mb-16">
          <h2 className="text-[24px] md:text-[38px] font-black text-white mb-2 font-oswald tracking-tight">
            Laboratory Network
          </h2>
          <p className="text-[13px] md:text-[16px] text-white/50 max-w-2xl mx-auto">
            Our accredited labs across Eastern India
          </p>
          <div className="w-[60px] h-[4px] bg-[#FF6700] mx-auto mt-3 rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 max-w-[1300px] mx-auto">
          {[
            {
              tag: "NABL Accredited",
              tagColor: "text-[#FF6700] bg-[#FF6700]/15",
              city: "Kolkata - 1",
              state: "WEST BENGAL · HEAD OFFICE",
              details: [
                "🏢 Central Laboratory",
                "🏗️ Metal & Building Material Testing Facility",
                "🧪 Reared test facility (Plastic, Textile etc.)",
              ],
            },
            {
              tag: "NABL Accredited",
              tagColor: "text-[#FF6700] bg-[#FF6700]/15",
              city: "Kolkata - 2",
              state: "WEST BENGAL",
              details: [
                "🌉 Infrastructure Projects",
                "🔩 Building Material & NDT Testing facility",
                "💧 Reared test facility (Water, soil, oil, Paint, putty, etc.)",
              ],
            },
            {
              tag: "NABL Accredited",
              tagColor: "text-[#FF6700] bg-[#FF6700]/15",
              city: "Siliguri",
              state: "WEST BENGAL · NORTH BENGAL",
              details: [
                "🌄 North Bengal Region",
                "🧱 Construction Material testing facility",
                "⚡ Reared test facility (CMOD, Energy Absorption etc.)",
              ],
            },
            {
              tag: "NABL Accredited",
              tagColor: "text-[#FF6700] bg-[#FF6700]/15",
              city: "Ranchi",
              state: "JHARKHAND",
              details: [
                "🏭 Industrial Projects",
                "🌱 Soil & Construction Material testing facility",
                "📏 Reared test facility (EV2, SBC, soil site test etc.)",
              ],
            },
            {
              tag: "NABL Accredited",
              tagColor: "text-[#FF6700] bg-[#FF6700]/15",
              city: "Odisha",
              state: "EASTERN INDIA",
              details: [
                "🔬 High-tech Equipment",
                "⚙️ Metal & Building Material Testing Facility",
                "🛡️ Reared test facility (Coating thickness, MS conduit etc.)",
              ],
            },
          ].map((lab, idx) => (
            <div
              key={idx}
              className="bg-white/5 border border-white/10 rounded-2xl p-6 relative overflow-hidden group hover:-translate-y-2 hover:border-[#FF6700]/40 hover:bg-white/[0.08] hover:shadow-[0_20px_40px_rgba(255,103,0,0.12)] transition-all duration-500 ease-out"
            >
              {/* Ambient backdrop glow in top-right corner */}
              <div className="absolute -right-10 -top-10 w-28 h-28 bg-[#FF6700]/0 rounded-full blur-2xl group-hover:bg-[#FF6700]/15 transition-all duration-500 pointer-events-none" />
              <span
                className={`inline-flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-[0.5px] px-3 py-1 rounded-full mb-4 ${lab.tagColor} transition-transform duration-300 group-hover:scale-105`}
              >
                ● {lab.tag}
              </span>
              <div className="text-[20px] md:text-[26px] font-black text-white font-oswald mb-0 leading-tight">
                <Link
                  href={`/our-branch/${lab.city.toLowerCase().replace(/\s*–\s*|\s+/g, "-")}`}
                  className="hover:text-[#FF6700] transition-colors"
                >
                  {lab.city}
                </Link>
              </div>
              <div className="text-[11px] text-white/40 uppercase tracking-[1px] mb-4 font-semibold">
                {lab.state}
              </div>
              <div className="flex flex-col">
                {lab.details.map((detail, dIdx) => (
                  <div
                    key={dIdx}
                    className="flex items-center gap-2 text-[12px] text-white/60 py-1.5 border-t border-white/5"
                  >
                    {detail}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5.5 Interactive India Branch Map */}
      <IndiaBranchMap />

      {/* 6. Testing Services */}
      <section className="py-12 md:py-20 px-4 md:px-12 max-w-[1300px] mx-auto w-full">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-[24px] md:text-[38px] font-black text-[#1E1B5C] mb-2 font-oswald tracking-tight">
            Testing Services
          </h2>
          <p className="text-[13px] md:text-[16px] text-[#1E1B5C]/50 max-w-2xl mx-auto">
            Comprehensive material testing across all major construction and
            industrial categories
          </p>
          <div className="w-[60px] h-[4px] bg-[#FF6700] mx-auto mt-3 rounded-full" />

          {/* Interactive Search Bar */}
          <div className="search-container-el relative w-full max-w-xl mx-auto mt-7 mb-2 z-50">
            <div className="relative flex items-center">
              <Search className="absolute left-4 text-[#1E1B5C]/40" size={18} />
              <input
                type="text"
                placeholder="Search 900+ parameters or testing services (e.g. Silica, Tensile...)"
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  setShowDropdown(true);
                }}
                onFocus={() => setShowDropdown(true)}
                className="w-full pl-12 pr-12 py-3.5 bg-white border-2 border-[#1E1B5C]/10 rounded-full text-[14px] text-[#1E1B5C] placeholder-[#1E1B5C]/40 font-semibold focus:outline-none focus:border-[#FF6700] focus:shadow-[0_0_15px_rgba(255,103,0,0.15)] transition-all shadow-sm"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => {
                    setSearchQuery("");
                    setShowDropdown(false);
                  }}
                  className="absolute right-4 text-[#1E1B5C]/40 hover:text-[#FF6700] p-1 rounded-full hover:bg-slate-100 transition-colors"
                >
                  <X size={16} />
                </button>
              )}
            </div>

            {/* Dropdown Results */}
            {showDropdown && searchQuery.trim() !== "" && (
              <div className="absolute left-0 right-0 top-full mt-2 bg-white rounded-2xl shadow-2xl border border-slate-100 z-[100] max-h-[320px] overflow-y-auto py-2 text-left">
                {searchResults.length > 0 ? (
                  searchResults.map((m, idx) => {
                    const query = searchQuery.toLowerCase();
                    const matchedParams = m.parameters?.filter(p => p.toLowerCase().includes(query)) || [];
                    return (
                      <div
                        key={idx}
                        onClick={() => {
                          setSelectedMaterial(m);
                          setShowDropdown(false);
                        }}
                        className="px-5 py-3 hover:bg-[#EFF6FF] transition-colors cursor-pointer border-b border-slate-50 last:border-b-0 flex items-start gap-3.5 group"
                      >
                        <div className="w-9 h-9 rounded-lg bg-[#EFF6FF] group-hover:bg-[#FF6700]/10 flex items-center justify-center text-[18px] shrink-0 transition-colors">
                          {m.icon}
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center justify-between gap-2">
                            <span className="font-bold text-[13px] text-[#1E1B5C] group-hover:text-[#FF6700] transition-colors truncate">
                              {m.name}
                            </span>
                            {m.nablCert && (
                              <span className="text-[9px] font-bold text-[#FF6700] bg-[#FF6700]/10 px-2 py-0.5 rounded-full shrink-0">
                                {m.nablCert}
                              </span>
                            )}
                          </div>
                          {matchedParams.length > 0 ? (
                            <div className="text-[11px] text-[#FF6700] font-semibold mt-0.5">
                              Parameters: <span className="text-slate-500 font-medium">{matchedParams.slice(0, 3).join(", ")}{matchedParams.length > 3 ? "..." : ""}</span>
                            </div>
                          ) : (
                            <div className="text-[11px] text-slate-400 mt-0.5">
                              {m.testType || "Material"} Testing
                            </div>
                          )}
                        </div>
                      </div>
                    );
                  })
                ) : (
                  <div className="px-5 py-6 text-center text-slate-400 text-[13px] italic">
                    No parameters or services match &quot;{searchQuery}&quot;
                  </div>
                )}
              </div>
            )}
          </div>
        </div>

        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {filters.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveFilter(tab)}
              className={`px-5 py-2.5 rounded-full border-2 text-[12px] font-bold cursor-pointer transition-all ${activeFilter === tab
                ? "bg-[#FF6700] border-[#FF6700] text-white"
                : "bg-transparent border-[#1E1B5C]/15 text-[#1E1B5C] hover:bg-[#FF6700] hover:text-white hover:border-[#FF6700]"
                }`}
            >
              {tab}
            </button>
          ))}
        </div>



        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {filteredMaterials.map((svc, idx) => {
            const isSelected = selectedServices.includes(svc.name);
            return (
              <div
                key={idx}
                className={`bg-white rounded-xl p-4 flex items-center gap-3 border-2 hover:-translate-y-1 hover:shadow-[0_8px_20px_rgba(0,0,0,0.06)] transition-all cursor-pointer group relative ${
                  isSelected ? "border-[#FF6700] shadow-[0_4px_12px_rgba(255,103,0,0.15)]" : "border-transparent hover:border-[#FF6700]/60"
                }`}
              >
                {/* Checkbox toggle */}
                <button
                  type="button"
                  onClick={() => {
                    setSelectedServices(prev =>
                      prev.includes(svc.name)
                        ? prev.filter(n => n !== svc.name)
                        : [...prev, svc.name]
                    );
                    if (!selectedParameters[svc.name]) {
                      setSelectedParameters(prev => ({ ...prev, [svc.name]: [] }));
                    }
                  }}
                  className={`absolute top-2.5 right-2.5 w-5 h-5 rounded-full border-2 flex items-center justify-center transition-all z-10 ${
                    isSelected
                      ? "bg-[#FF6700] border-[#FF6700] text-white"
                      : "border-[#1E1B5C]/20 bg-white hover:border-[#FF6700]"
                  }`}
                  aria-label={isSelected ? "Deselect service" : "Select service"}
                >
                  {isSelected && <span className="text-white text-[10px] font-black leading-none">✓</span>}
                </button>
                {/* Info: open modal */}
                <div
                  className="flex items-center gap-3 flex-1 min-w-0"
                  onClick={() => setSelectedMaterial(svc as MaterialItem)}
                >
                  <div className={`w-11 h-11 rounded-lg flex items-center justify-center text-[20px] shrink-0 transition-colors ${
                    isSelected ? "bg-[#FF6700]/10" : "bg-[#EFF6FF] group-hover:bg-[#FF6700]/10"
                  }`}>
                    {svc.icon}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className={`text-[13px] font-bold leading-snug ${
                      isSelected ? "text-[#FF6700]" : "text-[#1E1B5C]"
                    }`}>
                      {svc.name}
                    </div>
                    {svc.nablCert && (
                      <div className="text-[10px] text-[#FF6700] font-semibold mt-0.5 truncate">{svc.nablCert}</div>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <TestingModal
          material={selectedMaterial}
          onClose={() => setSelectedMaterial(null)}
          onAddToSelection={(serviceName, params) => {
            // Add service to selected list if not already there
            setSelectedServices(prev =>
              prev.includes(serviceName) ? prev : [...prev, serviceName]
            );
            // Merge parameters (union with existing selection for this service)
            setSelectedParameters(prev => {
              const existing = prev[serviceName] ?? [];
              const merged = Array.from(new Set([...existing, ...params]));
              return { ...prev, [serviceName]: merged };
            });
            setSelectionSaved(false); // reset saved state so bar shows Save button again
          }}
        />

        {/* Show More / Less Toggle */}
        <div className="mt-6 flex justify-center">
          <button
            type="button"
            onClick={() => setShowAll(prev => !prev)}
            className="px-8 py-3.5 bg-[#1E1B5C] hover:bg-[#FF6700] text-white font-extrabold uppercase tracking-[1px] text-[13px] rounded-full hover:-translate-y-[2px] hover:shadow-[0_8px_24px_rgba(255,103,0,0.35)] transition-all flex items-center gap-2 group cursor-pointer"
          >
            {showAll ? (
              <><span>Show Less</span><span className="group-hover:-translate-y-0.5 transition-transform">↑</span></>
            ) : (
              <><span>Show More</span><span className="group-hover:translate-y-0.5 transition-transform">↓</span></>
            )}
          </button>
        </div>

        {/* Selected Parameters Panel */}
        {selectedServices.length > 0 && (
          <div className="mt-8 rounded-2xl border-2 border-[#FF6700]/25 bg-[#FF6700]/[0.03] p-6">
            <div className="flex items-center justify-between mb-5 flex-wrap gap-3">
              <div>
                <h3 className="text-[16px] font-black text-[#1E1B5C]">Selected Services & Parameters</h3>
                <p className="text-[12px] text-[#1E1B5C]/50 mt-0.5">Select parameters for each service below — scroll up anytime to add more services</p>
              </div>
              <button
                type="button"
                onClick={() => { setSelectedServices([]); setSelectedParameters({}); }}
                className="text-[11px] font-bold text-slate-400 hover:text-red-500 transition-colors"
              >✕ Clear All</button>
            </div>

            <div className="flex flex-col gap-6">
              {selectedServices.map(svcName => {
                const svcData = (materials as MaterialItem[]).find(m => m.name === svcName);
                const params = svcData?.parameters ?? [];
                const chosenParams = selectedParameters[svcName] ?? [];
                return (
                  <div key={svcName} className="bg-white rounded-xl p-4 border border-slate-100 shadow-sm">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-2">
                        <span className="text-[18px]">{svcData?.icon}</span>
                        <span className="text-[13px] font-black text-[#1E1B5C]">{svcName}</span>
                        {chosenParams.length > 0 && (
                          <span className="text-[10px] font-bold text-white bg-[#FF6700] px-2 py-0.5 rounded-full">{chosenParams.length} selected</span>
                        )}
                      </div>
                      <button
                        type="button"
                        onClick={() => {
                          setSelectedServices(prev => prev.filter(n => n !== svcName));
                          setSelectedParameters(prev => { const c = { ...prev }; delete c[svcName]; return c; });
                        }}
                        className="text-[11px] text-slate-400 hover:text-red-500 font-bold transition-colors"
                      >✕ Remove</button>
                    </div>
                    {params.length > 0 ? (
                      <div className="flex flex-wrap gap-2">
                        {params.map(param => {
                          const isChosen = chosenParams.includes(param);
                          return (
                            <button
                              key={param}
                              type="button"
                              onClick={() => {
                                setSelectedParameters(prev => ({
                                  ...prev,
                                  [svcName]: isChosen
                                    ? (prev[svcName] ?? []).filter(p => p !== param)
                                    : [...(prev[svcName] ?? []), param]
                                }));
                              }}
                              className={`px-3 py-1.5 rounded-full text-[11px] font-semibold border transition-all ${
                                isChosen
                                  ? "bg-[#FF6700] border-[#FF6700] text-white"
                                  : "bg-slate-50 border-slate-200 text-[#1E1B5C] hover:border-[#FF6700] hover:text-[#FF6700]"
                              }`}
                            >
                              {isChosen ? "✓ " : ""}{param}
                            </button>
                          );
                        })}
                      </div>
                    ) : (
                      <p className="text-[12px] text-slate-400 italic">No specific parameters listed — full service will be enquired.</p>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        )}


      </section>

      {/* 7. Centers Section */}
      <section className="bg-white py-12 md:py-20 px-4 md:px-12">
        <div className="text-center mb-10 md:mb-16">
          <h2 className="text-[24px] md:text-[38px] font-black text-[#1E1B5C] mb-2 font-oswald tracking-tight">
            Widest Sample Collection Centers
          </h2>
          <p className="text-[13px] md:text-[16px] text-[#1E1B5C]/50 max-w-2xl mx-auto">
            Convenient drop-off points across Eastern & North-Eastern India
          </p>
          <div className="w-[60px] h-[4px] bg-[#FF6700] mx-auto mt-3 rounded-full" />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5 max-w-[1200px] mx-auto">
          {[
            { region: "West Bengal", city: "Haldia", state: "West Bengal" },
            {
              region: "West Bengal",
              city: "Paschim Medinipur",
              state: "West Bengal",
            },
            {
              region: "North-East",
              city: "Agartala",
              state: "Tripura (North-East)",
            },
            {
              region: "North-East",
              city: "Guwahati",
              state: "Assam (North-East)",
            },
            {
              region: "North-East",
              city: "Shillong",
              state: "Meghalaya (North-East)",
            },
          ].map((center, idx) => (
            <div
              key={idx}
              className="bg-[#EFF6FF] rounded-xl p-6 hover:-translate-y-1 transition-transform cursor-pointer"
            >
              <div className="text-[10px] font-bold uppercase tracking-[1px] text-[#FF6700] mb-1.5">
                {center.region}
              </div>
              <div className="text-[18px] md:text-[22px] font-extrabold text-[#1E1B5C] leading-tight font-oswald">
                {center.city}
              </div>
              <div className="text-[12px] text-[#1E1B5C]/50 mb-2.5 mt-0.5">
                {center.state}
              </div>
              <span className="inline-block text-[10px] font-bold px-3 py-1 rounded-full bg-[#FF6700]/10 text-[#FF6700]">
                Office + Collection Center
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* 8. Why Choose Omegalab */}
      <section className="bg-gradient-to-br from-[#1E1B5C] to-[#131040] py-12 md:py-20 px-4 md:px-12">
        <div className="text-center mb-10 md:mb-16">
          <h2 className="text-[24px] md:text-[38px] font-black text-white mb-2 font-oswald tracking-tight">
            Why Choose Omegalab
          </h2>
          <p className="text-[13px] md:text-[16px] text-white/50 max-w-2xl mx-auto">
            The trusted choice for material testing excellence in Eastern India
          </p>
          <div className="w-[60px] h-[4px] bg-[#FF6700] mx-auto mt-3 rounded-full" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-[1300px] mx-auto">
          {[
            {
              icon: "🏆",
              title: "NABL Accredited Excellence",
              desc: "5 accredited lab as per ISO/IEC 17025: 2017 under NABL.",
            },
            {
              icon: "⏱️",
              title: "Fast Turnaround Time",
              desc: "Quick report delivery, 120+ team member with LIMS software & Hi-tech equipment.",
            },
            {
              icon: "🌐",
              title: "Pan India Coverage",
              desc: "Eastern & North-Eastern India coverage",
            },
            {
              icon: "🔬",
              title: "900+ accredited Test Parameters",
              desc: "One of the most comprehensive NABL scopes in the region.",
            },
            {
              icon: "👨‍🔬",
              title: "Expert Technical Team",
              desc: "Driven by 100+ highly Qualified Technical Experts",
            },
            {
              icon: "📈",
              title: "LIMS supported System",
              desc: "First Report Delivery",
            },
          ].map((reason, idx) => (
            <div
              key={idx}
              className="bg-white/5 border border-white/10 rounded-xl p-8 hover:-translate-y-1.5 hover:bg-white/10 transition-all"
            >
              <div className="text-[36px] mb-3.5">{reason.icon}</div>
              <div className="text-[16px] font-extrabold text-white mb-2">
                {reason.title}
              </div>
              <div className="text-[13px] text-white/60 leading-[1.7]">
                {reason.desc}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 8.5 Our Clients Marquee */}
      <section className="bg-white py-12 md:py-20 border-t border-slate-100 overflow-hidden">
        <style>{`
           @keyframes marquee {
             0% { transform: translateX(0%); }
             100% { transform: translateX(-50%); }
           }
           .animate-marquee {
             animation: marquee 120s linear infinite;
             display: flex;
             width: max-content;
           }
           .animate-marquee:hover {
             animation-play-state: paused;
           }
         `}</style>

        <div className="text-center mb-10 md:mb-16 px-4">
          <h2 className="text-[24px] md:text-[38px] font-black text-[#1E1B5C] mb-2 font-oswald tracking-tight">
            Trusted By Industry Leaders
          </h2>
          <p className="text-[13px] md:text-[16px] text-[#1E1B5C]/50 max-w-2xl mx-auto">
            Providing reliable testing and calibration to 1000+ top enterprises
          </p>
          <div className="w-[60px] h-[4px] bg-[#FF6700] mx-auto mt-3 rounded-full" />
        </div>

        <div className="w-full overflow-hidden relative">
          {/* Gradient overlays for smooth fading edges */}
          <div className="absolute left-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
          <div className="absolute right-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>

          <div className="animate-marquee flex gap-6 md:gap-12 px-6">
            {[...CLIENT_DATA, ...CLIENT_DATA].map((client, index) => (
              <div
                key={index}
                className="w-[210px] md:w-[270px] aspect-[3/2] border border-slate-100 bg-slate-50 flex items-center justify-center rounded-xl p-4 md:p-6 hover:shadow-lg transition-all group overflow-hidden relative cursor-pointer shrink-0"
              >
                <div className="absolute inset-0 bg-[#FF6700]/0 group-hover:bg-[#FF6700]/5 transition-colors z-0"></div>
                <div className="flex flex-col items-center justify-center gap-3 relative z-10 transition-all duration-300 group-hover:-translate-y-2 w-full h-full">
                  <div className="relative w-full h-16 md:h-20 flex items-center justify-center shrink-0">
                    <Image
                      src={client.logo}
                      alt={client.alt}
                      fill
                      className="object-contain transition-transform duration-300 group-hover:scale-105"
                      sizes="(max-width: 768px) 50vw, (max-width: 1200px) 25vw, 20vw"
                    />
                  </div>
                  <span className="font-bold text-[11px] md:text-[13px] tracking-wider text-[#1E1B5C] uppercase text-center break-words">
                    {" "}
                    {client.name}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="text-center mt-8">
          <Link
            href="/our-clients"
            className="inline-block text-[#FF6700] font-bold text-[13px] tracking-widest uppercase hover:underline"
          >
            View All Clients →
          </Link>
        </div>
      </section>

      {/* 9. Contact form section */}
      <section
        id="contact"
        className="py-12 md:py-20 px-4 md:px-12 max-w-[1300px] mx-auto w-full"
      >
        <div className="text-center mb-10 md:mb-16">
          <h2 className="text-[24px] md:text-[38px] font-black text-[#1E1B5C] mb-2 font-oswald tracking-tight">
            Contact & Enquiry
          </h2>
          <p className="text-[13px] md:text-[16px] text-[#1E1B5C]/50 max-w-2xl mx-auto">
            Get in touch for testing requirements, quotes, or lab visits
          </p>
          <div className="w-[60px] h-[4px] bg-[#FF6700] mx-auto mt-3 rounded-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.5fr] gap-8 md:gap-12 items-start">
          <div className="flex flex-col gap-4">
            {[
              {
                icon: "📍",
                title: "Head Office — Kolkata",
                lines: [
                  "Kolkata, West Bengal, India — 14,000 sq.ft. Central Lab",
                ],
              },
              { icon: "📞", title: "Phone", lines: ["+91-033 2497 1903"] },
              {
                icon: "✉️",
                title: "Email",
                lines: ["omegalabinfo98@gmail.com"],
              },
              {
                icon: "🕐",
                title: "Working Hours",
                lines: ["Mon–Sat: 9:00 AM – 6:00 PM"],
              },
              {
                icon: "🏛️",
                title: "Accreditation",
                lines: ["NABL Accredited · ISO/IEC 17025:2017"],
              },
            ].map((info, idx) => (
              <div
                key={idx}
                className="flex items-start gap-3.5 py-3 border-b border-[#1E1B5C]/5 last:border-0"
              >
                <div className="w-10 h-10 rounded-lg bg-[#FF6700]/10 flex items-center justify-center text-[22px] shrink-0 text-[#FF6700]">
                  {info.icon}
                </div>
                <div className="flex flex-col">
                  <span className="font-bold text-[13px] text-[#1E1B5C]">
                    {info.title}
                  </span>
                  {info.lines.map((l, i) => (
                    <span
                      key={i}
                      className="text-[14px] leading-[1.6] text-[#1E1B5C]"
                    >
                      {l}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="bg-white rounded-2xl p-6 md:p-10 shadow-[0_8px_32px_rgba(0,0,0,0.06)]">
            <h3 className="text-[16px] md:text-[20px] font-extrabold text-[#1E1B5C] mb-5 text-center">
              Submit Your Enquiry
            </h3>
            {/* formsubmit.co / Resend ready — all fields have name attributes */}
            <form className="flex flex-col gap-4 font-montserrat">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <input
                  type="text"
                  name="full_name"
                  placeholder="Full Name *"
                  required
                  maxLength={100}
                  autoComplete="name"
                  className="w-full px-4 py-3 rounded-lg border-2 border-[#1E1B5C]/10 bg-[#EFF6FF] text-[13px] focus:outline-none focus:border-[#FF6700] transition-colors text-[#1E1B5C]"
                />
                <input
                  type="text"
                  name="organization"
                  placeholder="Organization"
                  maxLength={150}
                  autoComplete="organization"
                  className="w-full px-4 py-3 rounded-lg border-2 border-[#1E1B5C]/10 bg-[#EFF6FF] text-[13px] focus:outline-none focus:border-[#FF6700] transition-colors text-[#1E1B5C]"
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <div className="flex gap-2 w-full min-w-0">
                  <div className="flex items-center gap-2 px-3 py-3 rounded-lg border-2 border-[#1E1B5C]/10 bg-[#EFF6FF] text-[13px] text-[#1E1B5C] font-semibold select-none shrink-0">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src="https://flagcdn.com/w20/in.png" alt="IN" className="w-[18px] rounded-sm shadow-sm" />
                    <span>+91</span>
                  </div>
                  <input type="hidden" name="dial_code" value="+91" />
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone Number *"
                    required
                    maxLength={20}
                    autoComplete="tel"
                    className="flex-1 min-w-0 px-4 py-3 rounded-lg border-2 border-[#1E1B5C]/10 bg-[#EFF6FF] text-[13px] focus:outline-none focus:border-[#FF6700] transition-colors text-[#1E1B5C]"
                  />
                </div>
                <input
                  type="email"
                  name="email"
                  placeholder="Email ID *"
                  required
                  maxLength={150}
                  autoComplete="email"
                  className="w-full px-4 py-3 rounded-lg border-2 border-[#1E1B5C]/10 bg-[#EFF6FF] text-[13px] focus:outline-none focus:border-[#FF6700] transition-colors text-[#1E1B5C]"
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <select 
                  name="country" 
                  autoComplete="country-name" 
                  className="w-full px-4 py-3 rounded-lg border-2 border-[#1E1B5C]/10 bg-[#EFF6FF] text-[13px] focus:outline-none focus:border-[#FF6700] text-[#1E1B5C]"
                  defaultValue=""
                  required
                >
                  <option value="">Select Country *</option>
                  <option value="India">India</option>
                </select>
                <select 
                  name="state" 
                  autoComplete="address-level1" 
                  className="w-full px-4 py-3 rounded-lg border-2 border-[#1E1B5C]/10 bg-[#EFF6FF] text-[13px] focus:outline-none focus:border-[#FF6700] text-[#1E1B5C]"
                  required
                >
                  <option value="">Select State *</option>
                  {INDIAN_STATES.map((state) => (
                    <option key={state} value={state}>{state}</option>
                  ))}
                </select>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <input
                  type="text"
                  name="city"
                  placeholder="City"
                  maxLength={80}
                  autoComplete="address-level2"
                  className="w-full px-4 py-3 rounded-lg border-2 border-[#1E1B5C]/10 bg-[#EFF6FF] text-[13px] focus:outline-none focus:border-[#FF6700] transition-colors text-[#1E1B5C]"
                />
                <input
                  type="text"
                  name="pincode"
                  placeholder="Pin Code / Zip"
                  maxLength={12}
                  autoComplete="postal-code"
                  className="w-full px-4 py-3 rounded-lg border-2 border-[#1E1B5C]/10 bg-[#EFF6FF] text-[13px] focus:outline-none focus:border-[#FF6700] transition-colors text-[#1E1B5C]"
                />
              </div>
              <textarea
                name="address"
                placeholder="Address"
                rows={3}
                maxLength={500}
                autoComplete="street-address"
                className="w-full px-4 py-3 rounded-lg border-2 border-[#1E1B5C]/10 bg-[#EFF6FF] text-[13px] focus:outline-none focus:border-[#FF6700] transition-colors text-[#1E1B5C] resize-y min-h-[80px]"
              />

              {/* ── Pre-filled Selected Tests from Modal ── */}
              {(enquiryService || enquiryParams.length > 0) && (
                <div className="rounded-xl border-2 border-[#FF6700]/30 bg-[#FF6700]/5 p-4 flex flex-col gap-2">
                  <div className="flex items-center justify-between gap-2">
                    <div className="flex items-center gap-2">
                      <FlaskConical size={15} className="text-[#FF6700] shrink-0" />
                      <span className="text-[12px] font-black uppercase tracking-wider text-[#FF6700]">Selected from Testing Services</span>
                    </div>
                    <button
                      type="button"
                      onClick={() => {
                        setEnquiryService("");
                        setEnquiryParams([]);
                        if (typeof window !== "undefined") {
                          window.history.replaceState(null, "", window.location.pathname + window.location.hash);
                        }
                      }}
                      className="text-[11px] font-bold text-slate-400 hover:text-red-500 transition-colors"
                    >
                      ✕ Clear
                    </button>
                  </div>
                  {enquiryService && (
                    <div className="flex items-start gap-2">
                      <CheckCircle2 size={14} className="text-[#FF6700] shrink-0 mt-0.5" />
                      <span className="text-[13px] font-bold text-[#1E1B5C] leading-snug">{enquiryService}</span>
                    </div>
                  )}
                  {enquiryParams.length > 0 && (
                    <div className="flex flex-wrap gap-1.5 mt-1">
                      {enquiryParams.map((p, i) => (
                        <span key={i} className="inline-flex items-center gap-1 text-[11px] font-semibold px-2.5 py-1 rounded-full bg-white border border-[#FF6700]/25 text-[#1E1B5C]">
                          {p}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              )}

              {/* Hidden input carries service + params for formsubmit.co / Resend — not shown to user, visual card above handles display */}
              <input
                type="hidden"
                name="selected_service"
                value={enquiryService}
              />
              <input
                type="hidden"
                name="selected_parameters"
                value={enquiryParams.join(', ')}
              />

              {/* Manual / Additional Parameters Field */}
              <div className="flex flex-col gap-1.5">
                <label className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.8px] text-[#1E1B5C]/60">
                  <span className="w-3 h-[2px] bg-[#FF6700] rounded-full inline-block" />
                  Additional / Custom Test Parameters
                  <span className="normal-case tracking-normal font-medium text-[#1E1B5C]/40">(optional — type manually)</span>
                </label>
                <textarea
                  name="custom_parameters"
                  rows={3}
                  maxLength={2000}
                  placeholder={`e.g. Tensile Strength, Compressive Strength, pH Value\nList any specific parameters or tests you require that are not in the selection above.`}
                  className="w-full px-4 py-3 rounded-lg border-2 border-[#1E1B5C]/10 bg-[#EFF6FF] text-[13px] focus:outline-none focus:border-[#FF6700] transition-colors text-[#1E1B5C] resize-y min-h-[80px] placeholder-[#1E1B5C]/30"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-[11px] font-bold text-[#1E1B5C]/50 uppercase tracking-[0.5px]">
                  Services / Materials Required (Select multiple if needed)
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2 bg-[#EFF6FF] p-4 rounded-lg border-2 border-[#1E1B5C]/10">
                  {[
                    "Mechanical Testing",
                    "Chemical Testing",
                    "NDT Services",
                    "Cement & Concrete Testing",
                    "Steel & Metal Testing",
                    "Geotextile Testing",
                    "Water Testing",
                    "Coal Testing",
                    "Pipe Testing"
                  ].map((service) => (
                    <label key={service} className="flex items-center gap-2 text-[12px] text-[#1E1B5C] font-semibold cursor-pointer select-none">
                      <input
                        type="checkbox"
                        name="services_required[]"
                        value={service}
                        className="accent-[#FF6700] rounded"
                      />
                      {service}
                    </label>
                  ))}
                  <label className="flex items-center gap-2 text-[12px] text-[#1E1B5C] font-semibold cursor-pointer select-none">
                    <input
                      type="checkbox"
                      name="services_required[]"
                      value="Other"
                      onChange={(e) => setShowOtherService(e.target.checked)}
                      className="accent-[#FF6700] rounded"
                    />
                    Other / Custom Testing
                  </label>
                </div>
              </div>

              {showOtherService && (
                <div className="flex flex-col gap-1.5 animate-fadeIn">
                  <input
                    type="text"
                    name="custom_service_details"
                    placeholder="Specify other service / material required *"
                    required={showOtherService}
                    className="w-full px-4 py-3 rounded-lg border-2 border-[#1E1B5C]/10 bg-[#EFF6FF] text-[13px] focus:outline-none focus:border-[#FF6700] transition-colors text-[#1E1B5C]"
                  />
                </div>
              )}

              <div className="text-[11px] font-bold text-[#1E1B5C]/50 uppercase tracking-[0.5px]">
                Preferred Testing Type (Select all that apply)
              </div>
              <div className="flex gap-4">
                <label className="flex items-center gap-1.5 text-[12px] text-[#1E1B5C] font-semibold cursor-pointer">
                  <input
                    type="checkbox"
                    name="testingType[]"
                    value="Mechanical"
                    className="accent-[#FF6700] rounded"
                  />{" "}
                  Mechanical
                </label>
                <label className="flex items-center gap-1.5 text-[12px] text-[#1E1B5C] font-semibold cursor-pointer">
                  <input
                    type="checkbox"
                    name="testingType[]"
                    value="Chemical"
                    className="accent-[#FF6700] rounded"
                  />{" "}
                  Chemical
                </label>
                <label className="flex items-center gap-1.5 text-[12px] text-[#1E1B5C] font-semibold cursor-pointer">
                  <input
                    type="checkbox"
                    name="testingType[]"
                    value="NDT"
                    className="accent-[#FF6700] rounded"
                  />{" "}
                  NDT
                </label>
              </div>

              <div className="text-[12px] text-[#1E1B5C]/60 font-semibold px-4 py-3 rounded-lg border-2 border-[#1E1B5C]/10 bg-[#EFF6FF] select-none flex items-center justify-between">
                <span>Enquiry Date:</span>
                <span className="text-[#1E1B5C] font-bold">{new Date().toLocaleDateString('en-IN', { day: '2-digit', month: 'long', year: 'numeric' })}</span>
              </div>
              <input
                type="hidden"
                name="preferred_date"
                value={new Date().toISOString().split('T')[0]}
              />

              <textarea
                name="message"
                placeholder="Message / Requirements"
                rows={3}
                maxLength={2000}
                className="w-full px-4 py-3 rounded-lg border-2 border-[#1E1B5C]/10 bg-[#EFF6FF] text-[13px] focus:outline-none focus:border-[#FF6700] transition-colors text-[#1E1B5C] resize-y min-h-[80px]"
              />

              <div className="text-[11px] font-bold text-[#1E1B5C]/50 uppercase tracking-[0.5px]">
                Preferences
              </div>
              <div className="flex gap-4 mb-2">
                <label className="flex items-center gap-1 text-[12px] text-[#1E1B5C] font-semibold cursor-pointer">
                  <input type="checkbox" className="accent-[#FF6700]" /> Urgent
                  Testing
                </label>
                <label className="flex items-center gap-1 text-[12px] text-[#1E1B5C] font-semibold cursor-pointer">
                  <input type="checkbox" className="accent-[#FF6700]" /> Sample
                  Pickup
                </label>
              </div>

              <button
                type="submit"
                className="w-full py-4 bg-[#FF6700] text-white font-extrabold uppercase tracking-[1px] text-[14px] rounded-lg hover:bg-[#e65c00] hover:-translate-y-[2px] hover:shadow-[0_8px_24px_rgba(255,103,0,0.35)] transition-all"
              >
                SUBMIT ENQUIRY →
              </button>
            </form>
          </div>
        </div>
      </section>
      {/* ── Sticky Enquiry Floating Bar ─────────────────────────────────────── */}
      {selectedServices.length > 0 && (
        <div className="fixed bottom-0 left-0 right-0 z-[999] pointer-events-none">
          <div className="max-w-[1300px] mx-auto px-4 pb-4 md:pb-6 flex justify-center pointer-events-none">
            <div className="pointer-events-auto flex items-center gap-4 bg-[#1E1B5C] shadow-[0_-4px_30px_rgba(30,27,92,0.35)] rounded-2xl px-5 py-3.5 border border-white/10 backdrop-blur-sm">
              {/* Service count summary */}
              <div className="flex items-center gap-2 flex-wrap max-w-[220px] md:max-w-[420px] overflow-hidden">
                <FlaskConical size={15} className="text-[#FF6700] shrink-0" />
                <span className="text-white text-[12px] font-bold">
                  {selectedServices.length} service{selectedServices.length > 1 ? "s" : ""} selected
                </span>
                <div className="hidden md:flex gap-1.5 flex-wrap">
                  {selectedServices.slice(0, 3).map(s => (
                    <span key={s} className="text-[10px] font-semibold bg-white/10 text-white/80 px-2 py-0.5 rounded-full truncate max-w-[110px]">{s}</span>
                  ))}
                  {selectedServices.length > 3 && (
                    <span className="text-[10px] font-bold text-[#FF6700]">+{selectedServices.length - 3} more</span>
                  )}
                </div>
              </div>
              <div className="w-px h-8 bg-white/15 shrink-0" />
              {/* Clear */}
              <button
                type="button"
                onClick={() => { setSelectedServices([]); setSelectedParameters({}); setSelectionSaved(false); }}
                className="text-[11px] text-white/50 hover:text-red-400 font-bold transition-colors shrink-0"
              >✕ Clear</button>

              {selectionSaved ? (
                /* — Saved state: show confirmation + Go to Form */
                <>
                  <span className="text-[11px] font-bold text-emerald-400 flex items-center gap-1 shrink-0">
                    <span>✓</span> Saved to form
                  </span>
                  <button
                    type="button"
                    onClick={() => {
                      document.getElementById("contact")?.scrollIntoView({ behavior: "smooth", block: "start" });
                    }}
                    className="px-5 py-2.5 bg-emerald-500 hover:bg-emerald-600 text-white font-black uppercase tracking-[1px] text-[12px] rounded-xl hover:shadow-[0_4px_20px_rgba(16,185,129,0.4)] transition-all shrink-0 cursor-pointer"
                  >
                    Go to Form →
                  </button>
                  <button
                    type="button"
                    onClick={() => setSelectionSaved(false)}
                    className="text-[11px] text-white/40 hover:text-white/70 font-semibold transition-colors shrink-0"
                  >+ Add more</button>
                </>
              ) : (
                /* — Normal state: Save to Form button */
                <button
                  type="button"
                  onClick={() => {
                    const serviceNames = selectedServices.join(", ");
                    const allParams = Object.entries(selectedParameters)
                      .flatMap(([svc, params]) =>
                        params.length > 0 ? params.map(p => `[${svc}] ${p}`) : [`[${svc}] All parameters`]
                      );
                    setEnquiryService(serviceNames);
                    setEnquiryParams(allParams);
                    setSelectionSaved(true);
                    // No auto-scroll — user stays here to select more if needed
                  }}
                  className="px-6 py-2.5 bg-gradient-to-r from-[#FF6700] to-[#ff8c3a] hover:from-[#e65c00] hover:to-[#ff7a22] text-white font-black uppercase tracking-[1px] text-[12px] rounded-xl hover:shadow-[0_4px_20px_rgba(255,103,0,0.5)] transition-all shrink-0 cursor-pointer"
                >
                  Save to Enquiry Form →
                </button>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
