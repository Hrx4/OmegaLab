"use client";

import { motion } from "motion/react";
import { FlaskConical, Building2, ShieldCheck, CreditCard, BadgeCheck, MapPin } from "lucide-react";

const highlights = [
  {
    icon: Building2,
    label: "Incorporated",
    value: "20.06.2023",
    sub: "Under Companies Act 2013",
  },
  {
    icon: CreditCard,
    label: "CIN",
    value: "U71200WB2023PTC262957",
    sub: "Corporate Identity Number",
  },
  {
    icon: CreditCard,
    label: "PAN",
    value: "AAECO0911B",
    sub: "Permanent Account Number",
  },
  {
    icon: CreditCard,
    label: "TAN",
    value: "CALO06226D",
    sub: "Tax Deduction & Collection Account No.",
  },
  {
    icon: ShieldCheck,
    label: "MSME Registered",
    value: "E.S.I. Insured",
    sub: "Industrial Testing & Analytical Laboratory",
  },
  {
    icon: BadgeCheck,
    label: "Accredited Labs",
    value: "5 Locations",
    sub: "NABL Accredited Across Eastern India",
  },
];

const gstDetails = [
  { state: "West Bengal", gst: "19AAECO0911B1ZZ" },
  { state: "Jharkhand", gst: "20AAECO0911B1ZG" },
  { state: "Odisha", gst: "21AAECO0911B1ZE" },
];

export default function LaboratoryDetailsPage() {
  return (
    <div className="w-full bg-[#EFF6FF] min-h-screen pb-24 font-montserrat">
      {/* Hero */}
      <div className="bg-[#1E1B5C] w-full pt-16 pb-28 px-4 md:px-12 relative overflow-hidden">
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#EFF6FF] to-transparent z-10" />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#FF6700]/10 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute bottom-0 left-[-80px] w-64 h-64 bg-white/5 rounded-full blur-[60px] pointer-events-none" />

        <div className="max-w-[1300px] mx-auto flex flex-col items-center relative z-20 text-center">
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

      <div className="max-w-[1300px] mx-auto px-4 md:px-12 mt-[-60px] relative z-30">

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
              We always embrace transformation as a necessary weapon to turning challenges into opportunities for innovation. Using history to show that advancements in one generation build the foundation for the next. Focusing on building a strong, passionate team and well-built infrastructure to serve the nation.
            </p>
            <p>
              <strong className="text-[#1E1B5C]">OMEGALAB TESTING SERVICES PRIVATE LIMITED</strong> started its journey in the field of industrial testing and analysis in the year <strong className="text-[#FF6700]">1999</strong> as <em>Omega Consultant Services</em>. It was an ISO 9001 certified firm with its two laboratories in Kolkata and Haldia, mainly with expertise in fertilizer and soil analysis.
            </p>
            <p>
              OMEGALAB TESTING SERVICES PRIVATE LIMITED is incorporated on <strong className="text-[#1E1B5C]">20.06.2023</strong> under the Companies Act 2013 (18 of 2013). The company is a MSME registered, E.S.I. insured industrial testing and analytical laboratory with sophisticated instruments and competent manpower. Currently the laboratory is working in multiple locations, of which <strong className="text-[#FF6700]">5 are already NABL accredited</strong>.
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
          className="bg-white rounded-3xl border border-slate-100 shadow-xl p-8 md:p-10"
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
      </div>
    </div>
  );
}
