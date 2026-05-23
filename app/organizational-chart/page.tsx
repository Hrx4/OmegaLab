"use client";

import { motion } from "motion/react";
import { GitBranch, MapPin, FileText, ExternalLink, Building2 } from "lucide-react";

const BRANCHES = [
  {
    name: "Kolkata Lab 1",
    state: "West Bengal",
    color: "#1E1B5C",
    glowColor: "rgba(30,27,92,0.25)",
    pdfUrl:
      "https://res.cloudinary.com/de4cnpfm1/image/upload/v1779280923/ORGANIZATION_CHART_-_Kolkata_fwdduw.pdf",
    nablCode: "TC-11935",
    details: ["Head Office & Central Laboratory", "14,000 sq.ft. Facility"],
  },
  {
    name: "Kolkata Lab 2",
    state: "West Bengal",
    color: "#1E1B5C",
    glowColor: "rgba(30,27,92,0.25)",
    pdfUrl:
      "https://res.cloudinary.com/de4cnpfm1/image/upload/v1779280923/ORGANIZATION_CHART_-_Kolkata_fwdduw.pdf",
    nablCode: "TC-13401",
    details: ["Haridevpur Facility", "Advanced Testing Setup"],
  },
  {
    name: "Siliguri",
    state: "West Bengal",
    color: "#FF6700",
    glowColor: "rgba(255,103,0,0.25)",
    pdfUrl:
      "https://res.cloudinary.com/de4cnpfm1/image/upload/v1779280993/ORGANIZATION_CHART_-_Siliguri_mr0laz.pdf",
    nablCode: "TC-15509",
    details: ["North Bengal Regional Lab", "Construction Materials Testing"],
  },
  {
    name: "Ranchi",
    state: "Jharkhand",
    color: "#0ea5e9",
    glowColor: "rgba(14,165,233,0.25)",
    pdfUrl:
      "https://res.cloudinary.com/de4cnpfm1/image/upload/v1779280993/ORGANIZATION_CHART_-_Ranchi_mgnfgm.pdf",
    nablCode: "TC-16480",
    details: ["Industrial Materials Testing", "Ferrous & Non-Ferrous Metals"],
  },
  {
    name: "Odisha",
    state: "Odisha",
    color: "#22c55e",
    glowColor: "rgba(34,197,94,0.25)",
    pdfUrl:
      "https://res.cloudinary.com/de4cnpfm1/image/upload/v1779280996/ORGANIZATION_CHART_-_ODISHA_kqnepv.pdf",
    nablCode: "TC-17671",
    details: ["Eastern India Operations", "NABL Accredited Full-scope Lab"],
  },
];

export default function OrganizationalChartPage() {
  return (
    <div className="w-full bg-[#EFF6FF] min-h-screen pb-24 font-montserrat">
      {/* Hero */}
      <div className="bg-[#1E1B5C] w-full pt-16 pb-28 px-4 md:px-12 relative overflow-hidden">
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#EFF6FF] to-transparent z-10" />
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#FF6700]/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-white/5 rounded-full blur-[80px] pointer-events-none" />

        <div className="max-w-[1300px] mx-auto flex flex-col items-center relative z-20 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="w-16 h-16 rounded-2xl bg-[#FF6700]/20 border border-[#FF6700]/30 flex items-center justify-center mb-6"
          >
            <GitBranch size={32} className="text-[#FF6700]" />
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-white font-black text-[32px] md:text-[52px] font-oswald tracking-tight uppercase leading-[1.1] mb-4"
          >
            Organizational <span className="text-[#FF6700]">Chart</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-white/70 text-sm md:text-base max-w-2xl"
          >
            Our structured leadership and operations across all accredited laboratory branches.
          </motion.p>
        </div>
      </div>

      {/* Tree Structure */}
      <div className="max-w-[1300px] mx-auto px-4 md:px-12 mt-[-60px] relative z-30">

        {/* Root Node */}
        <div className="flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-3xl border-2 border-[#1E1B5C] shadow-2xl px-10 py-7 flex items-center gap-5 relative z-10"
            style={{ boxShadow: "0 20px 60px rgba(30,27,92,0.15)" }}
          >
            <div className="w-14 h-14 rounded-2xl bg-[#1E1B5C] flex items-center justify-center shrink-0">
              <Building2 size={28} className="text-white" />
            </div>
            <div>
              <div className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-1">Head Office</div>
              <div className="text-[#1E1B5C] font-oswald font-black text-2xl md:text-3xl uppercase tracking-tight">
                OMEGALAB
              </div>
              <div className="text-[#FF6700] text-[12px] font-bold uppercase tracking-wider">
                Testing Services Private Limited
              </div>
              <div className="text-slate-500 text-[10px] font-semibold mt-2 uppercase max-w-[280px] leading-tight">
                (Registered Office - 256A M.G. Road, Thakurpukur, Kolkata-700063)
              </div>
            </div>
          </motion.div>

          {/* Vertical stem down from root */}
          <motion.div
            initial={{ scaleY: 0 }}
            animate={{ scaleY: 1 }}
            transition={{ duration: 0.4, delay: 0.5 }}
            style={{ transformOrigin: "top" }}
            className="w-0.5 h-12 bg-gradient-to-b from-[#1E1B5C] to-[#1E1B5C]/40"
          />

          {/* Horizontal bar spanning all 5 branches */}
          <div className="relative w-full flex justify-center">
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.5, delay: 0.7 }}
              style={{ transformOrigin: "center" }}
              className="absolute top-0 left-[12.5%] right-[12.5%] md:left-[10%] md:right-[10%] h-0.5 bg-gradient-to-r from-[#1E1B5C]/20 via-[#1E1B5C] to-[#1E1B5C]/20"
            />

            {/* 5 vertical stems down to each branch card */}
            <div className="w-full grid grid-cols-2 md:grid-cols-5 gap-0">
              {BRANCHES.map((branch, idx) => (
                <div key={branch.name} className="flex flex-col items-center">
                  <motion.div
                    initial={{ scaleY: 0 }}
                    animate={{ scaleY: 1 }}
                    transition={{ duration: 0.4, delay: 0.9 + idx * 0.1 }}
                    style={{ transformOrigin: "top", backgroundColor: branch.color }}
                    className="w-0.5 h-10 rounded-full"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Branch Cards */}
          <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5 mt-0">
            {BRANCHES.map((branch, idx) => (
              <motion.div
                key={branch.name}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: 1.0 + idx * 0.12, ease: "easeOut" }}
                className="bg-white rounded-3xl border border-slate-100 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 overflow-hidden group"
                style={{ boxShadow: `0 8px 30px ${branch.glowColor}` }}
              >
                {/* Accent bar */}
                <div className="h-1.5 w-full" style={{ backgroundColor: branch.color }} />

                <div className="p-6 flex flex-col h-full">
                  {/* Icon + Name */}
                  <div className="flex items-start gap-3 mb-4">
                    <div
                      className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0"
                      style={{ backgroundColor: branch.color + "18" }}
                    >
                      <MapPin size={20} style={{ color: branch.color }} />
                    </div>
                    <div>
                      <h3
                        className="font-oswald font-black text-xl uppercase tracking-tight leading-tight"
                        style={{ color: branch.color }}
                      >
                        {branch.name}
                      </h3>
                      <span className="text-[11px] text-slate-400 font-semibold uppercase tracking-wider">
                        {branch.state}
                      </span>
                    </div>
                  </div>

                  {/* NABL code */}
                  <div
                    className="text-[10px] font-bold uppercase tracking-wider px-3 py-1.5 rounded-full inline-flex items-center gap-1.5 mb-4 w-fit"
                    style={{
                      backgroundColor: branch.color + "12",
                      color: branch.color,
                      border: `1px solid ${branch.color}30`,
                    }}
                  >
                    ● NABL {branch.nablCode}
                  </div>

                  {/* Details */}
                  <ul className="space-y-2 mb-6 flex-1">
                    {branch.details.map((d, i) => (
                      <li key={i} className="flex items-start gap-2 text-[13px] text-slate-500">
                        <span
                          className="w-1.5 h-1.5 rounded-full mt-1.5 shrink-0"
                          style={{ backgroundColor: branch.color }}
                        />
                        {d}
                      </li>
                    ))}
                  </ul>

                  {/* CTA */}
                  <a
                    href={branch.pdfUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-auto flex items-center justify-center gap-2 w-full py-3 rounded-xl font-bold text-[12px] uppercase tracking-wider transition-all duration-300 group-hover:brightness-110"
                    style={{
                      backgroundColor: branch.color,
                      color: "#fff",
                      boxShadow: `0 6px 20px ${branch.glowColor}`,
                    }}
                  >
                    <FileText size={15} />
                    View Org Chart
                    <ExternalLink size={12} className="opacity-70" />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Footer note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center text-slate-400 text-[12px] mt-12 uppercase tracking-widest"
        >
          Click "View Org Chart" to open the full PDF in a new tab
        </motion.p>
      </div>
    </div>
  );
}
