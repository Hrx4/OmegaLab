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

const COUNTRY_LIST = [
  { name: "India", code: "in", dial: "+91" },
  { name: "Afghanistan", code: "af", dial: "+93" },
  { name: "Albania", code: "al", dial: "+355" },
  { name: "Algeria", code: "dz", dial: "+213" },
  { name: "Andorra", code: "ad", dial: "+376" },
  { name: "Angola", code: "ao", dial: "+244" },
  { name: "Argentina", code: "ar", dial: "+54" },
  { name: "Armenia", code: "am", dial: "+374" },
  { name: "Australia", code: "au", dial: "+61" },
  { name: "Austria", code: "at", dial: "+43" },
  { name: "Azerbaijan", code: "az", dial: "+994" },
  { name: "Bahrain", code: "bh", dial: "+973" },
  { name: "Bangladesh", code: "bd", dial: "+880" },
  { name: "Belarus", code: "by", dial: "+375" },
  { name: "Belgium", code: "be", dial: "+32" },
  { name: "Bhutan", code: "bt", dial: "+975" },
  { name: "Bolivia", code: "bo", dial: "+591" },
  { name: "Brazil", code: "br", dial: "+55" },
  { name: "Brunei", code: "bn", dial: "+673" },
  { name: "Bulgaria", code: "bg", dial: "+359" },
  { name: "Cambodia", code: "kh", dial: "+855" },
  { name: "Cameroon", code: "cm", dial: "+237" },
  { name: "Canada", code: "ca", dial: "+1" },
  { name: "Chile", code: "cl", dial: "+56" },
  { name: "China", code: "cn", dial: "+86" },
  { name: "Colombia", code: "co", dial: "+57" },
  { name: "Croatia", code: "hr", dial: "+385" },
  { name: "Cyprus", code: "cy", dial: "+357" },
  { name: "Czech Republic", code: "cz", dial: "+420" },
  { name: "Denmark", code: "dk", dial: "+45" },
  { name: "Egypt", code: "eg", dial: "+20" },
  { name: "Estonia", code: "ee", dial: "+372" },
  { name: "Ethiopia", code: "et", dial: "+251" },
  { name: "Fiji", code: "fj", dial: "+679" },
  { name: "Finland", code: "fi", dial: "+358" },
  { name: "France", code: "fr", dial: "+33" },
  { name: "Georgia", code: "ge", dial: "+995" },
  { name: "Germany", code: "de", dial: "+49" },
  { name: "Ghana", code: "gh", dial: "+233" },
  { name: "Greece", code: "gr", dial: "+30" },
  { name: "Hong Kong", code: "hk", dial: "+852" },
  { name: "Hungary", code: "hu", dial: "+36" },
  { name: "Iceland", code: "is", dial: "+354" },
  { name: "Indonesia", code: "id", dial: "+62" },
  { name: "Iran", code: "ir", dial: "+98" },
  { name: "Iraq", code: "iq", dial: "+964" },
  { name: "Ireland", code: "ie", dial: "+353" },
  { name: "Israel", code: "il", dial: "+972" },
  { name: "Italy", code: "it", dial: "+39" },
  { name: "Jamaica", code: "jm", dial: "+1" },
  { name: "Japan", code: "jp", dial: "+81" },
  { name: "Jordan", code: "jo", dial: "+962" },
  { name: "Kazakhstan", code: "kz", dial: "+7" },
  { name: "Kenya", code: "ke", dial: "+254" },
  { name: "Kuwait", code: "kw", dial: "+965" },
  { name: "Kyrgyzstan", code: "kg", dial: "+996" },
  { name: "Laos", code: "la", dial: "+856" },
  { name: "Latvia", code: "lv", dial: "+371" },
  { name: "Lebanon", code: "lb", dial: "+961" },
  { name: "Libya", code: "ly", dial: "+218" },
  { name: "Liechtenstein", code: "li", dial: "+423" },
  { name: "Lithuania", code: "lt", dial: "+370" },
  { name: "Luxembourg", code: "lu", dial: "+352" },
  { name: "Macao", code: "mo", dial: "+853" },
  { name: "Macedonia", code: "mk", dial: "+389" },
  { name: "Madagascar", code: "mg", dial: "+261" },
  { name: "Malawi", code: "mw", dial: "+265" },
  { name: "Malaysia", code: "my", dial: "+60" },
  { name: "Maldives", code: "mv", dial: "+960" },
  { name: "Malta", code: "mt", dial: "+356" },
  { name: "Mauritius", code: "mu", dial: "+230" },
  { name: "Mexico", code: "mx", dial: "+52" },
  { name: "Moldova", code: "md", dial: "+373" },
  { name: "Monaco", code: "mc", dial: "+377" },
  { name: "Mongolia", code: "mn", dial: "+976" },
  { name: "Montenegro", code: "me", dial: "+382" },
  { name: "Morocco", code: "ma", dial: "+212" },
  { name: "Myanmar", code: "mm", dial: "+95" },
  { name: "Namibia", code: "na", dial: "+264" },
  { name: "Nepal", code: "np", dial: "+977" },
  { name: "Netherlands", code: "nl", dial: "+31" },
  { name: "New Zealand", code: "nz", dial: "+64" },
  { name: "Nigeria", code: "ng", dial: "+234" },
  { name: "North Korea", code: "kp", dial: "+850" },
  { name: "Norway", code: "no", dial: "+47" },
  { name: "Oman", code: "om", dial: "+968" },
  { name: "Pakistan", code: "pk", dial: "+92" },
  { name: "Panama", code: "pa", dial: "+507" },
  { name: "Papua New Guinea", code: "pg", dial: "+675" },
  { name: "Paraguay", code: "py", dial: "+595" },
  { name: "Peru", code: "pe", dial: "+51" },
  { name: "Philippines", code: "ph", dial: "+63" },
  { name: "Poland", code: "pl", dial: "+48" },
  { name: "Portugal", code: "pt", dial: "+351" },
  { name: "Qatar", code: "qa", dial: "+974" },
  { name: "Romania", code: "ro", dial: "+40" },
  { name: "Russia", code: "ru", dial: "+7" },
  { name: "Rwanda", code: "rw", dial: "+250" },
  { name: "Saudi Arabia", code: "sa", dial: "+966" },
  { name: "Senegal", code: "sn", dial: "+221" },
  { name: "Serbia", code: "rs", dial: "+381" },
  { name: "Seychelles", code: "sc", dial: "+248" },
  { name: "Singapore", code: "sg", dial: "+65" },
  { name: "Slovakia", code: "sk", dial: "+421" },
  { name: "Slovenia", code: "si", dial: "+386" },
  { name: "South Africa", code: "za", dial: "+27" },
  { name: "South Korea", code: "kr", dial: "+82" },
  { name: "Spain", code: "es", dial: "+34" },
  { name: "Sri Lanka", code: "lk", dial: "+94" },
  { name: "Sweden", code: "se", dial: "+46" },
  { name: "Switzerland", code: "ch", dial: "+41" },
  { name: "Taiwan", code: "tw", dial: "+886" },
  { name: "Tajikistan", code: "tj", dial: "+992" },
  { name: "Tanzania", code: "tz", dial: "+255" },
  { name: "Thailand", code: "th", dial: "+66" },
  { name: "Tunisia", code: "tn", dial: "+216" },
  { name: "Turkey", code: "tr", dial: "+90" },
  { name: "Turkmenistan", code: "tm", dial: "+993" },
  { name: "Uganda", code: "ug", dial: "+256" },
  { name: "Ukraine", code: "ua", dial: "+380" },
  { name: "United Arab Emirates", code: "ae", dial: "+971" },
  { name: "United Kingdom", code: "gb", dial: "+44" },
  { name: "United States", code: "us", dial: "+1" },
  { name: "Uruguay", code: "uy", dial: "+598" },
  { name: "Uzbekistan", code: "uz", dial: "+998" },
  { name: "Venezuela", code: "ve", dial: "+58" },
  { name: "Vietnam", code: "vn", dial: "+84" },
  { name: "Yemen", code: "ye", dial: "+967" },
  { name: "Zambia", code: "zm", dial: "+260" },
  { name: "Zimbabwe", code: "zw", dial: "+263" },
];

function DialCodeDropdown() {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState(COUNTRY_LIST[0]);

  return (
    <div className="relative w-[130px] shrink-0">
      <div
        onClick={() => setOpen(!open)}
        className="w-full h-full min-h-[44px] px-3 py-3 rounded-lg border-2 border-[#1E1B5C]/10 bg-[#EFF6FF] text-[13px] text-[#1E1B5C] cursor-pointer flex items-center justify-between"
      >
        <div className="flex items-center gap-2">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={`https://flagcdn.com/w20/${selected.code}.png`} alt={selected.code} className="w-[18px] rounded-sm shadow-sm" />
          <span className="font-medium">{selected.code.toUpperCase()} {selected.dial}</span>
        </div>
        <span className="text-[9px] text-[#1E1B5C]/60 ml-1">▼</span>
      </div>
      {open && (
        <>
          <div className="fixed inset-0 z-40" onClick={() => setOpen(false)} />
          <div className="absolute top-full left-0 mt-1 w-56 max-h-56 overflow-y-auto bg-white border border-slate-200 shadow-2xl rounded-xl z-50 py-1">
            {COUNTRY_LIST.map((c, i) => (
              <div
                key={i}
                onClick={() => { setSelected(c); setOpen(false); }}
                className="px-3 py-2.5 hover:bg-[#EFF6FF] cursor-pointer flex items-center gap-3 text-[13px] transition-colors"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={`https://flagcdn.com/w20/${c.code}.png`} alt={c.code} className="w-[18px] rounded-sm shadow-sm shrink-0" />
                <span className="font-semibold text-[#1E1B5C] w-14 shrink-0">{c.code.toUpperCase()} {c.dial}</span>
                <span className="text-slate-500 text-[12px] truncate">{c.name}</span>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
}

import materials from "../data/materials.json";
import TestingModal, { type MaterialItem } from "./TestingModal";

const filters = [
  "All Materials",
  "Metals & Steel",
  "Cement & Concrete",
  "Geotextiles",
  "NDT Services",
  "Plastic",
  "Water",
];



export default function HomeSections() {

  const [activeFilter, setActiveFilter] = useState("All Materials");
  const [selectedMaterial, setSelectedMaterial] = useState<MaterialItem | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);
  const [enquiryService, setEnquiryService] = useState("");
  const [enquiryParams, setEnquiryParams] = useState<string[]>([]);
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
      label: "NABL Test Parameters",
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
      : materials.filter((item) =>
        item.category.includes(activeFilter)
      )
  ).slice(0, 24);




  return (
    <div className="flex flex-col w-full">
      {/* 1. Hero Section */}
      <HeroSlider />

      {/* 2. Stats Section */}
      <section className="bg-[#1E1B5C] py-8 md:py-14 px-4" ref={ref}
      >
        <div className="max-w-6xl mx-auto grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 text-center">
          {stats.map((item, index) => (
            <div key={index}>
              <div className="text-[28px] md:text-[42px] font-black text-[#FF6700] mb-1 font-oswald">
                {item.isText ? (
                  item.textValue
                ) : (
                  inView && (
                    <CountUp
                      end={item.value}
                      duration={2.5}
                      suffix={item.suffix}
                    />
                  )
                )}
              </div>

              <div className="text-[10px] uppercase tracking-[1.5px] text-white/60 font-semibold">
                {item.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. About Section */}
      <section className="py-12 md:py-20 px-4 md:px-12 max-w-[1300px] mx-auto w-full">
        <div className="text-center mb-10 md:mb-16">
          <h2 className="text-[24px] md:text-[38px] font-black text-[#1E1B5C] mb-2 font-oswald tracking-tight">
            About Us
          </h2>
          <p className="text-[13px] md:text-[16px] text-slate-500 max-w-2xl mx-auto">
            Quality meets Reliability
          </p>
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
              &quot; Where accuracy is our goal, quality is
              our soul, safety is our priority, satisfaction is our
              guarantee.&quot;
              <cite className="block not-italic font-bold mt-3 text-[#FF6700] text-[13px] font-montserrat">
                — A.K. Das, CEO & Founder
              </cite>
            </blockquote>

            <p className="text-[13px] md:text-[15px] leading-[1.75] text-[#1E1B5C]/75 mb-4">
              We always embrace transformation as a necessary weapon to turning challenges into opportunities for innovation. Using history to show that advancements in one generation build the foundation for the next. Focusing on build a strong, passionate team and well build infrastructure to serve the nation.
            </p>
            <p className="text-[13px] md:text-[15px] leading-[1.75] text-[#1E1B5C]/75 mb-4">
              Short history: OMEGALAB TESTING SERVICES PVT LTD was established
              on the year 1999 by our CEO, Mr.A.K.Das, ex faculty of Jadavpur
              University on the year 1999. Initially it was a proprietorship
              firm named as Omega Consultant Services. It was an ISO 9001
              certified firm with its two laboratories in Kolkata and Haldia,
              mainly was expertise on some fertilizer and soil analysis.
            </p>
            <p className="text-[13px] md:text-[15px] leading-[1.75] text-[#1E1B5C]/75 mb-6">
              Gradually increased the scope of work and in the year 2012 we got
              our first NABL accreditation for Physical and Chemical testing of
              ferrous metals. At that time lab had only 5000 square feet area
              and total 15 staff strength. OMEGALAB has walked a long journey of
              25 years and now in the year 2026 it became a pioneer of
              construction material testing field in eastern India, with five
              NABL accredited laboratories, above 120 manpower, above 900 NABL
              accredited test parameters.
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
              city: "Kolkata – 1",
              state: "West Bengal · Head Office",
              details: [
                "🏗️ Central Laboratory (HQ)",
                "📐 14,000 sq. ft.",
                "👥 120+ Team",
                "🔬 900+ Parameters",
              ],
            },
            {
              tag: "NABL Accredited",
              tagColor: "text-[#FF6700] bg-[#FF6700]/15",
              city: "Kolkata – 2",
              state: "West Bengal",
              details: [
                "🧪 Mechanical & Chemical",
                "🔩 Metals & Construction",
                "⚡ NDT Services",
              ],
            },
            {
              tag: "NABL Accredited",
              tagColor: "text-[#FF6700] bg-[#FF6700]/15",
              city: "Siliguri",
              state: "West Bengal · North Bengal",
              details: [
                "🌄 North Bengal Region",
                "🧱 Construction Materials",
                "🏗️ Civil Engineering Tests",
              ],
            },
            {
              tag: "NABL Accredited",
              tagColor: "text-[#FF6700] bg-[#FF6700]/15",
              city: "Ranchi",
              state: "Jharkhand",
              details: [
                "⚙️ Industrial Materials",
                "🔬 Ferrous & Non-Ferrous",
                "🏭 Infrastructure Projects",
              ],
            },
            {
              tag: "NABL ACCREDITED",
              tagColor: "text-[#FF6700] bg-[#FF6700]/15",
              city: "Odisha",
              state: "Eastern India",
              details: [
                "🔄 Under NABL Process",
                "🌐 Odisha Operations",
                "📅 Accreditation Targeted 2026",
              ],
            },
          ].map((lab, idx) => (
            <div
              key={idx}
              className="bg-white/5 border border-white/10 rounded-xl p-6 relative overflow-hidden group hover:-translate-y-1 hover:shadow-[0_12px_32px_rgba(0,0,0,0.3)] transition-all"
            >
              <div className="absolute top-0 left-0 w-full h-[3px] bg-[#FF6700] scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100" />
              <span
                className={`inline-flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-[0.5px] px-3 py-1 rounded-full mb-4 ${lab.tagColor}`}
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
          {filteredMaterials.map((svc, idx) => (
            <div
              key={idx}
              onClick={() => setSelectedMaterial(svc as MaterialItem)}
              className="bg-white rounded-xl p-4 flex items-center gap-3 border-2 border-transparent hover:border-[#FF6700] hover:-translate-y-1 hover:shadow-[0_8px_20px_rgba(0,0,0,0.06)] transition-all cursor-pointer group relative"
            >
              <div className="w-11 h-11 bg-[#EFF6FF] group-hover:bg-[#FF6700]/10 rounded-lg flex items-center justify-center text-[20px] shrink-0 transition-colors">
                {svc.icon}
              </div>
              <div className="flex-1 min-w-0">
                <div className="text-[13px] font-bold text-[#1E1B5C] leading-snug">
                  {svc.name}
                </div>
                {svc.nablCert && (
                  <div className="text-[10px] text-[#FF6700] font-semibold mt-0.5 truncate">{svc.nablCert}</div>
                )}
              </div>
              <span className="text-[10px] text-[#1E1B5C]/30 group-hover:text-[#FF6700] transition-colors shrink-0 font-bold">›</span>
            </div>
          ))}
        </div>

        <TestingModal material={selectedMaterial} onClose={() => setSelectedMaterial(null)} />

        <div className="mt-10 flex justify-center">
          <Link
            href="/facilities"
            className="px-8 py-3.5 bg-[#FF6700] text-white font-extrabold uppercase tracking-[1px] text-[13px] rounded-full hover:bg-[#e65c00] hover:-translate-y-[2px] hover:shadow-[0_8px_24px_rgba(255,103,0,0.35)] transition-all flex items-center gap-2 group cursor-pointer"
          >
            Show More
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </Link>
        </div>


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
              desc: "5 labs under ISO/IEC 17025:2017, accepted by govt bodies",
            },
            {
              icon: "⏱️",
              title: "Fast Turnaround Time",
              desc: "120+ team members, rapid delivery, minimal project delays",
            },
            {
              icon: "🌐",
              title: "Widest Regional Coverage",
              desc: "Kolkata to Shillong, Haldia to Guwahati",
            },
            {
              icon: "🔬",
              title: "900+ Test Parameters",
              desc: "One of the most comprehensive NABL scopes in the region",
            },
            {
              icon: "👨‍🔬",
              title: "Expert Technical Team",
              desc: "100+ qualified professionals, M.Sc / B.Tech / Diploma",
            },
            {
              icon: "📈",
              title: "Continuous Growth",
              desc: "Targeting 1000+ parameters by 2030",
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
                  <DialCodeDropdown />
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
                  name="state"
                  placeholder="State"
                  maxLength={80}
                  autoComplete="address-level1"
                  className="w-full px-4 py-3 rounded-lg border-2 border-[#1E1B5C]/10 bg-[#EFF6FF] text-[13px] focus:outline-none focus:border-[#FF6700] transition-colors text-[#1E1B5C]"
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <select name="country" autoComplete="country-name" className="w-full px-4 py-3 rounded-lg border-2 border-[#1E1B5C]/10 bg-[#EFF6FF] text-[13px] focus:outline-none focus:border-[#FF6700] text-[#1E1B5C]">
                  <option value="">Select Country</option>
                  {COUNTRY_LIST.map((c, i) => (
                    <option key={i} value={c.name}>{c.name}</option>
                  ))}
                  <option value="Other">Other</option>
                </select>
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

              <select name="service_required" className="w-full px-4 py-3 rounded-lg border-2 border-[#1E1B5C]/10 bg-[#EFF6FF] text-[13px] focus:outline-none focus:border-[#FF6700] text-[#1E1B5C]">
                <option value="">Select Service Required</option>
                <option value="Mechanical Testing">Mechanical Testing</option>
                <option value="Chemical Testing">Chemical Testing</option>
                <option value="NDT Services">NDT Services</option>
                <option value="Cement & Concrete Testing">Cement & Concrete Testing</option>
                <option value="Steel & Metal Testing">Steel & Metal Testing</option>
                <option value="Geotextile Testing">Geotextile Testing</option>
                <option value="Water Testing">Water Testing</option>
                <option value="Coal Testing">Coal Testing</option>
                <option value="Pipe Testing">Pipe Testing</option>
                <option value="Other">Other</option>
              </select>

              <div className="text-[11px] font-bold text-[#1E1B5C]/50 uppercase tracking-[0.5px]">
                Preferred Testing Type
              </div>
              <div className="flex gap-4">
                <label className="flex items-center gap-1 text-[12px] text-[#1E1B5C] font-semibold cursor-pointer">
                  <input
                    type="radio"
                    name="testingType"
                    className="accent-[#FF6700]"
                  />{" "}
                  Mechanical
                </label>
                <label className="flex items-center gap-1 text-[12px] text-[#1E1B5C] font-semibold cursor-pointer">
                  <input
                    type="radio"
                    name="testingType"
                    className="accent-[#FF6700]"
                  />{" "}
                  Chemical
                </label>
                <label className="flex items-center gap-1 text-[12px] text-[#1E1B5C] font-semibold cursor-pointer">
                  <input
                    type="radio"
                    name="testingType"
                    className="accent-[#FF6700]"
                  />{" "}
                  NDT
                </label>
              </div>

              <input
                type="date"
                name="preferred_date"
                className="w-full px-4 py-3 rounded-lg border-2 border-[#1E1B5C]/10 bg-[#EFF6FF] text-[13px] focus:outline-none focus:border-[#FF6700] transition-colors text-[#1E1B5C]"
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
    </div>
  );
}
