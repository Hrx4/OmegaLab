"use client";

import { motion } from "motion/react";
import { Activity, FlaskConical, Microscope, Wrench, TestTube2, Award, ArrowRight } from "lucide-react";
import Link from "next/link";

const activities = [
  {
    icon: FlaskConical,
    title: "Chemical Testing",
    color: "#1E1B5C",
    description:
      "Comprehensive chemical analysis of raw materials, finished products, soils, water, and industrial samples using advanced spectrometric and wet chemical methods aligned with IS, ASTM, BS, and ISO standards.",
    tags: ["Elemental Analysis", "Soil & Water", "Industrial Materials", "Fertilizer Testing"],
  },
  {
    icon: Wrench,
    title: "Mechanical Testing",
    color: "#FF6700",
    description:
      "Complete mechanical property evaluation of ferrous and non-ferrous metals, polymers, and composites including tensile, impact, hardness, bend, and fatigue testing per national and international standards.",
    tags: ["Tensile Strength", "Impact Testing", "Hardness", "Fatigue & Bend"],
  },
  {
    icon: Microscope,
    title: "Non-Destructive Testing (NDT)",
    color: "#22c55e",
    description:
      "Advanced NDT services for in-service and pre-service inspection of components using Ultrasonic Testing (UT), Magnetic Particle Testing (MPT), Dye Penetrant Testing (DPT), and Radiographic Testing (RT).",
    tags: ["Ultrasonic (UT)", "Magnetic Particle (MPT)", "Dye Penetrant (DPT)", "Radiographic (RT)"],
  },
  {
    icon: TestTube2,
    title: "Civil & Construction Materials",
    color: "#a855f7",
    description:
      "Extensive testing of construction materials including cement, concrete, aggregates, bricks, bitumen, steel reinforcement bars, and geotextiles to ensure compliance with BIS and IRC specifications.",
    tags: ["Cement & Concrete", "Aggregate Tests", "Steel Rebar", "Bitumen & Geotextiles"],
  },
  {
    icon: Activity,
    title: "Proficiency Testing & IQC",
    color: "#0ea5e9",
    description:
      "Regular participation in NABL-approved Proficiency Testing Programmes (PTP) and Internal Quality Control (IQC) checks to validate the accuracy and consistency of our laboratory results.",
    tags: ["PTP Participation", "IQC Checks", "Measurement Audits", "Calibration Verification"],
  },
  {
    icon: Award,
    title: "NABL Accreditation Activities",
    color: "#FF6700",
    description:
      "Ongoing work to expand our NABL accreditation scope — adding more testing parameters, new materials, and new laboratory locations across the Eastern and North Eastern zones of India.",
    tags: ["Scope Expansion", "New Parameters", "Eastern Zone Labs", "ISO/IEC 17025"],
  },
];

export default function ActivityPage() {
  return (
    <div className="w-full bg-[#EFF6FF] min-h-screen pb-24 font-montserrat">
      {/* Hero */}
      <div className="bg-[#1E1B5C] w-full pt-16 pb-28 px-4 md:px-12 relative overflow-hidden">
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#EFF6FF] to-transparent z-10" />
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#FF6700]/10 rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-[1300px] mx-auto flex flex-col items-center relative z-20 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="w-16 h-16 rounded-2xl bg-[#FF6700]/20 border border-[#FF6700]/30 flex items-center justify-center mb-6"
          >
            <Activity size={32} className="text-[#FF6700]" />
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-white font-black text-[32px] md:text-[52px] font-oswald tracking-tight uppercase leading-[1.1] mb-4"
          >
            Our <span className="text-[#FF6700]">Activities</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-white/70 text-sm md:text-base max-w-2xl"
          >
            A comprehensive overview of our testing, quality, and accreditation activities across Eastern India.
          </motion.p>
        </div>
      </div>

      <div className="max-w-[1300px] mx-auto px-4 md:px-12 mt-[-60px] relative z-30 space-y-8">

        {/* Activities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {activities.map((act, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className="bg-white rounded-3xl border border-slate-100 shadow-lg hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-300 group overflow-hidden"
            >
              <div className="h-1.5 w-full" style={{ backgroundColor: act.color }} />
              <div className="p-7">
                <div
                  className="w-12 h-12 rounded-2xl flex items-center justify-center mb-5 transition-colors"
                  style={{ backgroundColor: act.color + "18" }}
                >
                  <act.icon size={24} style={{ color: act.color }} />
                </div>
                <h3 className="text-[#1E1B5C] font-oswald font-black text-xl uppercase tracking-tight mb-3 group-hover:text-[#FF6700] transition-colors duration-300">
                  {act.title}
                </h3>
                <p className="text-slate-500 text-[13px] leading-[1.8] mb-5">
                  {act.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {act.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full border"
                      style={{
                        color: act.color,
                        borderColor: act.color + "40",
                        backgroundColor: act.color + "0d",
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </div>
  );
}
