'use client';
import Image from "next/image";
import Link from "next/link";
import HeroSlider from "./HeroSlider";
import IndiaBranchMap from "./IndiaBranchMap";
import CLIENT_DATA from "../data/clients.json";
import { useState } from "react";
import { useInView } from "react-intersection-observer";
import CountUp from "react-countup";

const ABOUT_DATA = {
  ceoImage:
    "https://res.cloudinary.com/de4cnpfm1/image/upload/v1778390956/Untitleddesign10_9jl5t_485_g1ogkl.jpg",
  ceoImageAlt:
    "Mr. A.K. Das - CEO and Founder of Omegalab Testing Services Pvt Ltd",
};



const filters = [
    "All Materials",
    "Metals & Steel",
    "Cement & Concrete",
    "Geotextiles",
    "NDT Services",
    "Plastic",
    "Water",
  ];

  const materials = [
    {
      icon: "🔩",
      name: "Reinforcement Steel (TMT/HSD)",
      category: ["Metals & Steel"],
    },
    {
      icon: "🏗️",
      name: "Structural Steel",
      category: ["Metals & Steel"],
    },
    {
      icon: "🔧",
      name: "Fasteners/Nuts/Bolts/Washers",
      category: ["Metals & Steel"],
    },
    {
      icon: "🪢",
      name: "HT Strand & Wire",
      category: ["Metals & Steel"],
    },
    {
      icon: "⚙️",
      name: "Welded Coupons & Joints",
      category: ["Metals & Steel"],
    },
    {
      icon: "🥇",
      name: "Non-Ferrous Metals",
      category: ["Metals & Steel"],
    },
    {
      icon: "🧱",
      name: "Cement (OPC/PPC/PSC)",
      category: ["Cement & Concrete"],
    },
    {
      icon: "💨",
      name: "Fly Ash & Micro Silica",
      category: ["Cement & Concrete"],
    },
    {
      icon: "🪨",
      name: "Aggregates & Sand",
      category: ["Cement & Concrete"],
    },
    {
      icon: "🏛️",
      name: "Concrete & Design Mix",
      category: ["Cement & Concrete"],
    },
    {
      icon: "🧱",
      name: "All Kinds of Bricks",
      category: ["Cement & Concrete"],
    },
    {
      icon: "⛰️",
      name: "Natural Building Stones",
      category: ["Cement & Concrete"],
    },
    {
      icon: "🧊",
      name: "AAC Blocks",
      category: ["Cement & Concrete"],
    },
    {
      icon: "🔲",
      name: "Ceramic & Vitrified Tiles",
      category: ["Cement & Concrete"],
    },
    {
      icon: "🧵",
      name: "Geotextile",
      category: ["Geotextiles"],
    },
    {
      icon: "🔳",
      name: "Geogrid",
      category: ["Geotextiles"],
    },
    {
      icon: "🟫",
      name: "Geocell",
      category: ["Geotextiles"],
    },
    {
      icon: "🛡️",
      name: "Geomembrane",
      category: ["Geotextiles"],
    },
    {
      icon: "🌍",
      name: "Soil Testing",
      category: ["NDT Services"],
    },
    {
      icon: "🔨",
      name: "Rebound Hammer Test",
      category: ["NDT Services"],
    },
    {
      icon: "📡",
      name: "Ultrasonic Pulse Velocity (USPV)",
      category: ["NDT Services"],
    },
    {
      icon: "🔊",
      name: "Ultrasonic for Metals & Welds",
      category: ["NDT Services", "Metals & Steel"],
    },
    {
      icon: "💧",
      name: "Dye Penetrant (DP) Test",
      category: ["NDT Services"],
    },
    {
      icon: "🔵",
      name: "PVC/UPVC/HDPE/CPVC Pipes",
      category: ["Plastic", "Water"],
    },
  ];

  

export default function HomeSections() {

const [activeFilter, setActiveFilter] = useState("All Materials");

const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  const stats = [
    {
      value: 25,
      suffix: "+",
      label: "Years of Service",
    },
    {
      value: 900,
      suffix: "+",
      label: "NABL Test Parameters",
    },
    {
      value: 5,
      suffix: "",
      label: "Accredited Labs",
    },
    {
      value: 120,
      suffix: "+",
      label: "Team Members",
    },
  ];

  const filteredMaterials =
    activeFilter === "All Materials"
      ? materials
      : materials.filter((item) =>
          item.category.includes(activeFilter)
        );


  return (
    <div className="flex flex-col w-full">
      {/* 1. Hero Section */}
      <HeroSlider />

      {/* 2. Stats Section */}
      <section className="bg-[#1E1B5C] py-8 md:py-14 px-4"       ref={ref}
>
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
           {stats.map((item, index) => (
          <div key={index}>
            <div className="text-[28px] md:text-[42px] font-black text-[#FF6700] mb-1 font-oswald">
              
              {inView && (
                <CountUp
                  end={item.value}
                  duration={2.5}
                  suffix={item.suffix}
                />
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
            Where every material is tested, and every result is trusted.
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
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 bg-[#FF6700] text-white p-4 md:p-6 rounded-xl font-black text-[24px] md:text-[36px] leading-none shadow-[0_8px_24px_rgba(255,103,0,0.3)]">
              1999
              <span className="block text-[11px] font-semibold uppercase tracking-[1px] opacity-80 mt-1 font-montserrat">
                Est. Year
              </span>
            </div>
          </div>

          <div>
            <blockquote className="border-l-4 border-[#FF6700] p-5 mb-6 bg-[#FF6700]/5 rounded-r-xl italic text-[14px] md:text-[16px] leading-[1.7] text-[#1E1B5C]">
              &quot; WELCOME TO OMEGALAB—where accuracy is our goal, quality is
              our soul, safety is our priority, satisfaction is our
              guarantee.&quot;
              <cite className="block not-italic font-bold mt-3 text-[#FF6700] text-[13px] font-montserrat">
                — A.K. Das, CEO & Founder
              </cite>
            </blockquote>

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
                { icon: "🎯", text: "1000+ Testing Parameters Target 2026" },
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

      {/* 4. Accreditation Strip */}
      <section className="bg-white py-12 md:py-16 px-4 md:px-12">
        <div className="max-w-[1200px] mx-auto flex flex-wrap justify-center gap-6">
          {[
            {
              icon: "🏛️",
              title: "NABL Accredited",
              sub: "National Accreditation Board",
            },
            {
              icon: "📋",
              title: "ISO/IEC 17025:2017",
              sub: "MAINTAINED MANAGEMENT PROCESS AS PER ISO/IEC 17025",
            },
            {
              icon: "🏗️",
              title: "Construction Testing",
              sub: "CONSTRUCTION AND OTHERS MATERIAL TESTING FACILITY",
            },
            {
              icon: "🔬",
              title: "900+ Testing Parameters",
              sub: "850+ ACCREDITED PARAMETERS, Under NABL SCOPE",
            },
            {
              icon: "🌏",
              title: "Pan Eastern India",
              sub: "9 Offices & Centers",
            },
          ].map((item, idx) => (
            <div key={idx} className="text-center p-5 min-w-[180px] flex-1">
              <div className="text-[32px] mb-2">{item.icon}</div>
              <div className="text-[13px] font-extrabold text-[#1E1B5C] uppercase">
                {item.title}
              </div>
              <div className="text-[11px] text-[#1E1B5C]/50 mt-1 max-w-[200px] mx-auto">
                {item.sub}
              </div>
            </div>
          ))}
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
        </div>

        <div className="flex flex-wrap justify-center gap-2 mb-8">
        {filters.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveFilter(tab)}
            className={`px-5 py-2.5 rounded-full border-2 text-[12px] font-bold cursor-pointer transition-all ${
              activeFilter === tab
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
            className="bg-white rounded-xl p-4 flex items-center gap-3 border-2 border-transparent hover:border-[#FF6700] hover:-translate-y-1 hover:shadow-[0_8px_20px_rgba(0,0,0,0.06)] transition-all cursor-pointer"
          >
            <div className="w-11 h-11 bg-[#EFF6FF] rounded-lg flex items-center justify-center text-[20px] shrink-0">
              {svc.icon}
            </div>

            <div className="text-[13px] font-bold text-[#1E1B5C]">
              {svc.name}
            </div>
          </div>
        ))}
      </div>

      </section>

      {/* 7. Centers Section */}
      <section className="bg-white py-12 md:py-20 px-4 md:px-12">
        <div className="text-center mb-10 md:mb-16">
          <h2 className="text-[24px] md:text-[38px] font-black text-[#1E1B5C] mb-2 font-oswald tracking-tight">
            Sample Collection Centers
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
             animation: marquee 50s linear infinite;
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
            Providing reliable testing and calibration to 500+ top enterprises
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
            <form className="flex flex-col gap-4 font-montserrat">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <input
                  type="text"
                  placeholder="Full Name *"
                  className="w-full px-4 py-3 rounded-lg border-2 border-[#1E1B5C]/10 bg-[#EFF6FF] text-[13px] focus:outline-none focus:border-[#FF6700] transition-colors text-[#1E1B5C]"
                />
                <input
                  type="text"
                  placeholder="Organization"
                  className="w-full px-4 py-3 rounded-lg border-2 border-[#1E1B5C]/10 bg-[#EFF6FF] text-[13px] focus:outline-none focus:border-[#FF6700] transition-colors text-[#1E1B5C]"
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <div className="flex gap-2 w-full">
                  <select className="w-20 px-2 py-3 rounded-lg border-2 border-[#1E1B5C]/10 bg-[#EFF6FF] text-[13px] focus:outline-none focus:border-[#FF6700] text-[#1E1B5C]">
                    <option>🇮🇳</option>
                  </select>
                  <input
                    type="tel"
                    placeholder="Phone Number *"
                    className="flex-1 px-4 py-3 rounded-lg border-2 border-[#1E1B5C]/10 bg-[#EFF6FF] text-[13px] focus:outline-none focus:border-[#FF6700] transition-colors text-[#1E1B5C]"
                  />
                </div>
                <input
                  type="email"
                  placeholder="Email ID *"
                  className="w-full px-4 py-3 rounded-lg border-2 border-[#1E1B5C]/10 bg-[#EFF6FF] text-[13px] focus:outline-none focus:border-[#FF6700] transition-colors text-[#1E1B5C]"
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <input
                  type="text"
                  placeholder="City"
                  className="w-full px-4 py-3 rounded-lg border-2 border-[#1E1B5C]/10 bg-[#EFF6FF] text-[13px] focus:outline-none focus:border-[#FF6700] transition-colors text-[#1E1B5C]"
                />
                <input
                  type="text"
                  placeholder="State"
                  className="w-full px-4 py-3 rounded-lg border-2 border-[#1E1B5C]/10 bg-[#EFF6FF] text-[13px] focus:outline-none focus:border-[#FF6700] transition-colors text-[#1E1B5C]"
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <select className="w-full px-4 py-3 rounded-lg border-2 border-[#1E1B5C]/10 bg-[#EFF6FF] text-[13px] focus:outline-none focus:border-[#FF6700] text-[#1E1B5C]">
                  <option>Select Country</option>
                </select>
                <input
                  type="text"
                  placeholder="Pin Code / Zip"
                  className="w-full px-4 py-3 rounded-lg border-2 border-[#1E1B5C]/10 bg-[#EFF6FF] text-[13px] focus:outline-none focus:border-[#FF6700] transition-colors text-[#1E1B5C]"
                />
              </div>
              <textarea
                placeholder="Address"
                rows={3}
                className="w-full px-4 py-3 rounded-lg border-2 border-[#1E1B5C]/10 bg-[#EFF6FF] text-[13px] focus:outline-none focus:border-[#FF6700] transition-colors text-[#1E1B5C] resize-y min-h-[80px]"
              />

              <select className="w-full px-4 py-3 rounded-lg border-2 border-[#1E1B5C]/10 bg-[#EFF6FF] text-[13px] focus:outline-none focus:border-[#FF6700] text-[#1E1B5C]">
                <option>Select Service Required</option>
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
                className="w-full px-4 py-3 rounded-lg border-2 border-[#1E1B5C]/10 bg-[#EFF6FF] text-[13px] focus:outline-none focus:border-[#FF6700] transition-colors text-[#1E1B5C]"
              />

              <textarea
                placeholder="Message / Requirements"
                rows={3}
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
                type="button"
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
