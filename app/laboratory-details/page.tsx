"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "motion/react";
import { FlaskConical, Building2, ShieldCheck, CreditCard, BadgeCheck, MapPin, Award, Target, CheckCircle, Star, Crown, LucideIcon } from "lucide-react";
import milestonesData from "@/data/milestones.json";

type MilestoneIcon = "Target" | "Award" | "CheckCircle" | "MapPin" | "Star" | "Crown";
type MilestoneTheme = "blue" | "orange";

interface MilestoneData {
  year: string;
  title: string;
  description: string;
  points: string[];
  icon: MilestoneIcon;
  theme: MilestoneTheme;
}

const ICON_MAP: Record<MilestoneIcon, LucideIcon> = {
  Target,
  Award,
  CheckCircle,
  MapPin,
  Star,
  Crown,
};

const MILESTONES: MilestoneData[] = milestonesData as MilestoneData[];

const highlights = [
  {
    icon: CreditCard,
    label: "CIN (CORPORATE IDENTITY NUMBER)",
    value: "U71200WB2023PTC262957",
    sub: "Incorporated on 20.06.2023 under Companies Act, 2013",
  },
  {
    icon: CreditCard,
    label: "PAN (PERMANENT ACCOUNT NUMBER)",
    value: "AAECO0911B",
    sub: "Permanent Account Number",
  },
  {
    icon: CreditCard,
    label: "TAN (TAX DEDUCTION AND COLLECTION ACCOUNT NUMBER)",
    value: "CALO06226D",
    sub: "Tax Deduction & Collection Account No.",
  },
  {
    icon: ShieldCheck,
    label: "UDYAM REG. NO.",
    value: "UDYAM-WB-100080645",
    sub: "MSME REGISTERED COMPANY",
  },
  {
    icon: Building2,
    label: "ESI CODE NO.",
    value: "41001080680000999",
    sub: "ESI insured company",
  },
  {
    icon: Building2,
    label: "EPF CODE NO.",
    value: "WBCAL2968088000",
    sub: "EPF insured company",
  },
];

const gstDetails = [
  { state: "West Bengal", gst: "19AAECO0911B1ZZ" },
  { state: "Jharkhand", gst: "20AAECO0911B1ZG" },
  { state: "Odisha", gst: "21AAECO0911B1ZE" },
];

const TEAM_IMAGES = [
  "https://res.cloudinary.com/de4cnpfm1/image/upload/v1778339110/T3_lly4po.jpg",
  "https://res.cloudinary.com/de4cnpfm1/image/upload/v1778339110/T4_jsaj7y.jpg",
  "https://res.cloudinary.com/de4cnpfm1/image/upload/v1778339109/T2_ptxc7g.jpg",
  "https://res.cloudinary.com/de4cnpfm1/image/upload/v1778339108/T1_pfcuu9.jpg",
];




export default function LaboratoryDetailsPage() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end end"]
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % TEAM_IMAGES.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % TEAM_IMAGES.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + TEAM_IMAGES.length) % TEAM_IMAGES.length);

  return (
    <div className="w-full bg-[#EFF6FF] min-h-screen pb-24 font-montserrat">
      {/* Hero */}
      <div className="bg-[#1E1B5C] w-full pt-16 pb-28 px-4 md:px-12 relative overflow-hidden">
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#EFF6FF] to-transparent z-10" />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#FF6700]/10 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute bottom-0 left-[-80px] w-64 h-64 bg-white/5 rounded-full blur-[60px] pointer-events-none" />

        <div className="max-w-[1450px] mx-auto flex flex-col items-center relative z-20 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="w-16 h-16 rounded-2xl bg-[#FF6700]/20 border border-[#FF6700]/30 flex items-center justify-center mb-6"
          >
            <FlaskConical size={32} className="text-[#FF6700]" />
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-white font-black text-[32px] md:text-[52px] font-oswald tracking-tight uppercase leading-[1.1] mb-4"
          >
            Laboratory <span className="text-[#FF6700]">Details</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-white/70 text-sm md:text-base max-w-2xl leading-relaxed italic"
          >
            Where Accuracy is our goal, Quality is in our soul, Safety is our priority and Satisfaction is our guarantee.
          </motion.p>
        </div>
      </div>

      <div className="max-w-[1450px] mx-auto px-4 md:px-12 mt-[-60px] relative z-30">

        {/* Intro Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-3xl shadow-xl border-t-4 border-[#FF6700] p-8 md:p-12 mb-10"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-xl bg-[#FF6700]/10 flex items-center justify-center shrink-0">
              <FlaskConical size={20} className="text-[#FF6700]" />
            </div>
            <h2 className="text-[#1E1B5C] font-oswald font-black text-2xl md:text-3xl uppercase tracking-tight">
              Welcome to OMEGALAB
            </h2>
          </div>
          <div className="space-y-5 text-slate-600 leading-[1.9] text-[15px] md:text-[16px]">
            <p>
              <strong className="text-[#1E1B5C]">OMEGALAB TESTING SERVICES PVT LTD</strong> was established in the year <strong className="text-[#FF6700]">1999</strong> by our CEO, <strong className="text-[#1E1B5C]">Mr. A.K. Das</strong> (ex-faculty of Jadavpur University). Initially, it was named as <em>Omega Consultant Services</em>, an ISO 9001 certified company. In the year <strong className="text-[#FF6700]">2012</strong>, we got our first NABL accreditation for Physical and Chemical testing. OMEGALAB has covered a long journey of <strong className="text-[#FF6700]">25 years</strong>, and in the year 2026 we became a pioneer in the construction material testing field in Eastern India, with <strong className="text-[#1E1B5C]">five NABL accredited laboratories</strong>, above <strong className="text-[#1E1B5C]">120 team members</strong>, and above <strong className="text-[#1E1B5C]">900 NABL accredited test parameters</strong>.
            </p>
            <p>
              <strong className="text-[#1E1B5C]">OMEGALAB TESTING SERVICES PRIVATE LIMITED</strong> is incorporated on <strong className="text-[#1E1B5C]">20.06.2023</strong> under the Companies Act 2013 (18 of 2013). Currently, the laboratory is working in multiple locations, of which <strong className="text-[#FF6700]">5 are already NABL accredited</strong>.
            </p>
          </div>
        </motion.div>

        {/* Key Info Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-10">
          {highlights.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.07 }}
              className="bg-white rounded-2xl border border-slate-100 shadow-md p-6 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group"
            >
              <div className="w-10 h-10 rounded-xl bg-[#EFF6FF] group-hover:bg-[#FF6700]/10 flex items-center justify-center mb-4 transition-colors">
                <item.icon size={20} className="text-[#1E1B5C] group-hover:text-[#FF6700] transition-colors" />
              </div>
              <div className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-1">{item.label}</div>
              <div className="text-[#1E1B5C] font-black text-[15px] md:text-[17px] font-oswald mb-1 break-all">{item.value}</div>
              <div className="text-[12px] text-slate-400">{item.sub}</div>
            </motion.div>
          ))}
        </div>

        {/* GST Details */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-3xl border border-slate-100 shadow-xl p-8 md:p-10 mb-10"
        >
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 rounded-xl bg-[#1E1B5C]/10 flex items-center justify-center shrink-0">
              <MapPin size={20} className="text-[#1E1B5C]" />
            </div>
            <h2 className="text-[#1E1B5C] font-oswald font-black text-2xl uppercase tracking-tight">
              GST Registrations
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {gstDetails.map((g, i) => (
              <div
                key={i}
                className="rounded-2xl border-2 border-[#1E1B5C]/10 bg-[#EFF6FF] p-5 hover:border-[#FF6700] hover:shadow-md transition-all duration-300"
              >
                <div className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-2">{g.state}</div>
                <div className="text-[#1E1B5C] font-black text-[15px] font-mono tracking-wider">{g.gst}</div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Achievements Section */}
        <motion.div
          id="achievements"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-3xl shadow-xl border-t-4 border-[#FF6700] p-8 md:p-12"
        >
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 rounded-xl bg-[#FF6700]/10 flex items-center justify-center shrink-0">
              <Award size={20} className="text-[#FF6700]" />
            </div>
            <h2 className="text-[#1E1B5C] font-oswald font-black text-2xl md:text-3xl uppercase tracking-tight">
              Our Achievements
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
            {/* Text Content */}
            <div className="flex flex-col gap-5 text-slate-600 leading-[1.8] text-[15px] md:text-[16px]">
              <p className="font-semibold text-[#1E1B5C]">
                We always embrace transformation as a necessary weapon to turning challenges into opportunities for innovation. Using history to show that advancements in one generation build the foundation for the next. Focusing on build a strong, passionate team and well build infrastructure to serve the nation.
              </p>
              <p>
                In 2013, OmegaLab Testing Services Private Limited achieved a significant milestone by participating in the <strong>Certified Reference Material (CRM)</strong> Preparation Programme conducted by the National Metallurgical Laboratory (CSIR-NML), Jamshedpur.
              </p>
              <p>
                OmegaLab was proudly enlisted among <strong>21 selected laboratories across India,</strong> securing <strong>Position No. 18</strong> in this nationally recognized program. Notably, OmegaLab stands as the only laboratory from West Bengal to be included in the CRM certification list—an acknowledgment of our <strong>accuracy, consistency, and technical excellence in testing.</strong>
              </p>
              <p>
                This achievement reinforces our commitment to maintaining the highest standards of <strong>quality and reliability</strong> in every service we deliver.
              </p>
            </div>

            {/* Image Slider */}
            <div className="relative rounded-2xl overflow-hidden shadow-2xl h-[300px] md:h-[400px] group border-4 border-white bg-slate-900 w-full">
              {TEAM_IMAGES.map((img, idx) => (
                <div 
                  key={idx} 
                  className={`absolute inset-0 transition-opacity duration-1000 ${idx === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
                >
                  <Image
                    src={img}
                    alt={`Team Achievement ${idx + 1}`}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                    unoptimized
                  />
                </div>
              ))}

              {/* Slider Controls */}
              <button 
                onClick={prevSlide}
                className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-black/40 text-white rounded-full flex items-center justify-center hover:bg-[#FF6700] transition-colors z-20 backdrop-blur-sm"
              >
                ❮
              </button>
              <button 
                onClick={nextSlide}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-black/40 text-white rounded-full flex items-center justify-center hover:bg-[#FF6700] transition-colors z-20 backdrop-blur-sm"
              >
                ❯
              </button>

              {/* Caption overlay */}
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#1E1B5C]/90 via-[#1E1B5C]/50 to-transparent pt-16 pb-6 text-center z-20">
                <p className="text-white font-bold mb-3 uppercase tracking-wider text-sm font-oswald drop-shadow-md">
                  Omegalab: where quality meets reliability
                </p>
                <div className="flex justify-center gap-2">
                  {TEAM_IMAGES.map((_, idx) => (
                    <div 
                      key={idx}
                      onClick={() => setCurrentSlide(idx)}
                      className={`w-2.5 h-2.5 rounded-full cursor-pointer transition-colors ${idx === currentSlide ? 'bg-[#FF6700]' : 'border-2 border-white/70 hover:bg-white/50'}`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Animated Timeline Section */}
        <div className="max-w-full mx-auto mt-20 mb-10 relative">
          <div className="text-center mb-14 relative z-10">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-black text-[32px] md:text-[40px] text-[#1E1B5C] font-oswald tracking-tight uppercase"
            >
              Journey of <span className="text-[#FF6700]">Excellence</span>
            </motion.h2>
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="w-24 h-1.5 bg-[#FF6700] mx-auto mt-6 mb-4 origin-left"
            />
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.35 }}
              className="text-slate-500 max-w-xl mx-auto text-[15px]"
            >
              Tracing the key milestones that shaped Omegalab into a leading name in testing and calibration.
            </motion.p>
          </div>

          {/* ─── DESKTOP TIMELINE ─── */}
          <div className="hidden lg:block">

            {/* Top row — even cards (0, 2, 4) */}
            <div className="grid grid-cols-8 gap-0">
              {MILESTONES.map((milestone, idx) => {
                const IconComp = ICON_MAP[milestone.icon];
                const isBlue = milestone.theme === "blue";
                if (idx % 2 !== 0) return <div key={idx} />;
                return (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: -40, scale: 0.92 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    viewport={{ once: true, margin: "-60px" }}
                    transition={{ duration: 0.55, delay: idx * 0.1, ease: [0.22, 1, 0.36, 1] }}
                    className="relative mx-1 rounded-xl border border-slate-100 bg-white shadow-sm p-3 pt-6 pb-4 text-left group hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
                  >
                    {/* Header pill */}
                    <div className="absolute -top-3.5 left-2 px-2.5 py-0.5 rounded-full flex items-center gap-1 text-white shadow-sm text-[8px] font-bold uppercase tracking-wider font-oswald bg-gradient-to-r from-sky-400 to-[#1E1B5C] max-w-[95%]">
                      <div className="w-4 h-4 rounded-full bg-white text-[#1E1B5C] flex items-center justify-center shrink-0">
                        <IconComp size={9} />
                      </div>
                      <span>{milestone.title}</span>
                    </div>
                    <div className="font-black text-xl font-oswald text-sky-500 mb-1">{milestone.year}</div>
                    <ul className="space-y-1 text-[10px] text-slate-500 list-disc pl-3">
                      {milestone.points.map((p, i) => (
                        <motion.li
                          key={i}
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.35, delay: idx * 0.1 + i * 0.08 + 0.25 }}
                          className="leading-snug"
                        >{p}</motion.li>
                      ))}
                    </ul>
                    {/* Bottom accent bar */}
                    <motion.div
                      initial={{ scaleX: 0 }}
                      whileInView={{ scaleX: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: idx * 0.1 + 0.4 }}
                      className="absolute bottom-0 left-3 right-3 h-[2px] bg-gradient-to-r from-sky-400 to-[#1E1B5C] rounded-full origin-left"
                    />
                  </motion.div>
                );
              })}
            </div>

            {/* Spine row */}
            <div className="relative grid grid-cols-8 gap-0 h-16 my-1">
              {/* Animated horizontal line */}
              <div className="absolute top-1/2 left-8 right-8 h-[4px] bg-slate-200 -translate-y-1/2 rounded-full overflow-hidden z-0">
                <motion.div
                  initial={{ width: "0%" }}
                  whileInView={{ width: "100%" }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 1.5, ease: "easeInOut", delay: 0.2 }}
                  className="absolute inset-y-0 left-0 bg-gradient-to-r from-sky-400 via-slate-300 to-orange-400 rounded-full"
                />
              </div>
              {MILESTONES.map((milestone, idx) => {
                const isBlue = milestone.theme === "blue";
                const stepNumber = String(idx + 1).padStart(2, '0');
                return (
                  <div key={idx} className="relative flex flex-col items-center justify-center h-full z-10">
                    {/* Vertical tick up (even) */}
                    {idx % 2 === 0 && (
                      <motion.div
                        initial={{ scaleY: 0 }}
                        whileInView={{ scaleY: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.35, delay: idx * 0.1 + 0.5 }}
                        className="absolute bottom-1/2 w-[2px] h-[calc(50%-16px)] bg-slate-300 origin-bottom"
                      />
                    )}
                    {/* Vertical tick down (odd) */}
                    {idx % 2 !== 0 && (
                      <motion.div
                        initial={{ scaleY: 0 }}
                        whileInView={{ scaleY: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.35, delay: idx * 0.1 + 0.5 }}
                        className="absolute top-1/2 w-[2px] h-[calc(50%-16px)] bg-slate-300 origin-top"
                      />
                    )}
                    {/* Step node */}
                    <motion.div
                      initial={{ scale: 0, opacity: 0 }}
                      whileInView={{ scale: 1, opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: idx * 0.12 + 0.3, type: "spring", stiffness: 200 }}
                      className={`relative w-10 h-10 rounded-full border-4 border-white text-white font-bold text-xs shadow-lg z-10 flex items-center justify-center
                        ${ isBlue ? "bg-sky-400" : "bg-[#FF6700]" }
                      `}
                    >
                      {stepNumber}
                      {/* Ripple ring */}
                      <motion.span
                        initial={{ scale: 1, opacity: 0.5 }}
                        whileInView={{ scale: 2.2, opacity: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.9, delay: idx * 0.12 + 0.6, ease: "easeOut" }}
                        className={`absolute inset-0 rounded-full ${ isBlue ? "bg-sky-400" : "bg-[#FF6700]" }`}
                      />
                    </motion.div>
                  </div>
                );
              })}
            </div>

            {/* Bottom row — odd cards (1, 3, 5) */}
            <div className="grid grid-cols-8 gap-0">
              {MILESTONES.map((milestone, idx) => {
                const IconComp = ICON_MAP[milestone.icon];
                if (idx % 2 !== 1) return <div key={idx} />;
                return (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 40, scale: 0.92 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    viewport={{ once: true, margin: "-60px" }}
                    transition={{ duration: 0.55, delay: idx * 0.1, ease: [0.22, 1, 0.36, 1] }}
                    className="relative mx-1 rounded-xl border border-slate-100 bg-white shadow-sm p-3 pb-6 pt-4 text-left group hover:shadow-lg hover:translate-y-1 transition-all duration-300"
                  >
                    {/* Top accent bar */}
                    <motion.div
                      initial={{ scaleX: 0 }}
                      whileInView={{ scaleX: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: idx * 0.1 + 0.4 }}
                      className="absolute top-0 left-3 right-3 h-[2px] bg-gradient-to-r from-[#FF6700] to-red-500 rounded-full origin-left"
                    />
                    <div className="font-black text-xl font-oswald text-[#FF6700] mb-1">{milestone.year}</div>
                    <ul className="space-y-1 text-[10px] text-slate-500 list-disc pl-3">
                      {milestone.points.map((p, i) => (
                        <motion.li
                          key={i}
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.35, delay: idx * 0.1 + i * 0.08 + 0.25 }}
                          className="leading-snug"
                        >{p}</motion.li>
                      ))}
                    </ul>
                    {/* Bottom pill */}
                    <div className="absolute -bottom-3.5 left-2 px-2.5 py-0.5 rounded-full flex items-center gap-1 text-white shadow-md text-[8px] font-bold uppercase tracking-wider font-oswald bg-gradient-to-r from-[#FF6700] to-red-500 max-w-[95%]">
                      <div className="w-4 h-4 rounded-full bg-white text-[#FF6700] flex items-center justify-center shrink-0">
                        <IconComp size={9} />
                      </div>
                      <span>{milestone.title}</span>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* ─── MOBILE / TABLET VERTICAL TIMELINE ─── */}
          <div className="lg:hidden relative" ref={containerRef}>
            {/* Animated vertical line */}
            <div className="absolute left-[20px] md:left-1/2 md:-translate-x-1/2 top-0 bottom-0 w-1 bg-slate-200 rounded-full">
              <motion.div
                className="w-full bg-gradient-to-b from-sky-400 via-[#FF6700] to-red-500 rounded-full origin-top"
                style={{ height: lineHeight }}
              />
            </div>

            <div className="flex flex-col gap-10 relative z-10 py-10">
              {MILESTONES.map((milestone, idx) => {
                const IconComp = ICON_MAP[milestone.icon];
                const isBlue = milestone.theme === "blue";
                const stepNumber = String(idx + 1).padStart(2, '0');
                const isLeft = idx % 2 === 0;

                return (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: isLeft ? -40 : 40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                    className="pl-14 md:pl-0 md:flex md:items-start md:gap-8"
                  >
                    <div className="md:w-1/2 md:flex md:justify-end">
                      <div className="w-full max-w-sm rounded-2xl border border-slate-100 bg-white shadow-md p-5 pt-8 relative group hover:shadow-xl transition-all duration-300">
                        {/* Pill */}
                        <div className={`absolute -top-4 left-5 px-3 py-1 rounded-full flex items-center gap-1.5 text-white text-[10px] font-bold uppercase tracking-wider font-oswald shadow-md
                          ${ isBlue ? "bg-gradient-to-r from-sky-400 to-[#1E1B5C]" : "bg-gradient-to-r from-[#FF6700] to-red-500" }
                        `}>
                          <div className="w-5 h-5 rounded-full bg-white flex items-center justify-center shrink-0">
                            <IconComp size={10} className={isBlue ? "text-[#1E1B5C]" : "text-[#FF6700]"} />
                          </div>
                          {milestone.title}
                        </div>
                        <div className={`font-black text-3xl font-oswald mb-1 ${ isBlue ? "text-sky-500" : "text-[#FF6700]" }`}>
                          {milestone.year}
                        </div>
                        <p className="text-[13px] text-slate-600 leading-relaxed mb-3">{milestone.description}</p>
                        <ul className="space-y-1.5 text-xs text-slate-500 list-disc pl-4">
                          {milestone.points.map((p, i) => (
                            <motion.li
                              key={i}
                              initial={{ opacity: 0, x: -8 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              viewport={{ once: true }}
                              transition={{ duration: 0.3, delay: i * 0.07 + 0.2 }}
                            >{p}</motion.li>
                          ))}
                        </ul>
                        {/* Animated accent bar */}
                        <motion.div
                          initial={{ scaleX: 0 }}
                          whileInView={{ scaleX: 1 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.5, delay: 0.3 }}
                          className={`absolute bottom-0 left-4 right-4 h-[3px] rounded-full origin-left ${ isBlue ? "bg-gradient-to-r from-sky-400 to-[#1E1B5C]" : "bg-gradient-to-r from-[#FF6700] to-red-500" }`}
                        />
                      </div>
                    </div>

                    {/* Step node */}
                    <motion.div
                      initial={{ scale: 0, opacity: 0 }}
                      whileInView={{ scale: 1, opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: 0.1, type: "spring", stiffness: 220 }}
                      className="absolute left-[8px] md:left-1/2 md:-translate-x-1/2 w-10 h-10 rounded-full bg-white border-4 border-[#EFF6FF] shadow-lg flex items-center justify-center z-20"
                    >
                      <div className={`w-full h-full rounded-full flex items-center justify-center text-white text-[10px] font-bold ${ isBlue ? "bg-sky-400" : "bg-[#FF6700]" }`}>
                        {stepNumber}
                      </div>
                    </motion.div>

                    <div className="hidden md:block md:w-1/2" />
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
