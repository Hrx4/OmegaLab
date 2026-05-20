"use client";

import { motion } from "motion/react";
import { Eye, Rocket, CheckCircle2, Star } from "lucide-react";

const missionPoints = [
  "Committed to promoting quality and safety by providing rigorous, independent, and ethical testing services.",
  "Serving across infrastructural and industrial sectors with uncompromising standards.",
  "Maintaining independence, impartiality, and integrity in every test and report.",
  "Continuously improving our management systems and technical capabilities.",
];

const futureGoals = [
  "More accredited laboratories in the Eastern Zone.",
  "Increase more scope under existing accreditation.",
  "Include more materials under NABL accreditation.",
  "Including uncommon and critical testing parameters under accreditation.",
];

export default function VisionMissionPage() {
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
            <Star size={32} className="text-[#FF6700]" fill="currentColor" />
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-white font-black text-[32px] md:text-[52px] font-oswald tracking-tight uppercase leading-[1.1] mb-4"
          >
            Our Vision &amp; <span className="text-[#FF6700]">Mission</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-white/70 text-sm md:text-base max-w-2xl"
          >
            Driving towards excellence in testing, quality, and global recognition.
          </motion.p>
        </div>
      </div>

      <div className="max-w-[1300px] mx-auto px-4 md:px-12 mt-[-60px] relative z-30 space-y-8">

        {/* Vision & Mission Cards side by side */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

          {/* Vision Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-3xl shadow-xl overflow-hidden border border-slate-100 group hover:shadow-2xl transition-all duration-300"
          >
            <div className="h-1.5 bg-gradient-to-r from-[#1E1B5C] to-[#3b4fce]" />
            <div className="p-8 md:p-10">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-2xl bg-[#1E1B5C]/10 flex items-center justify-center shrink-0 group-hover:bg-[#1E1B5C]/20 transition-colors">
                  <Eye size={26} className="text-[#1E1B5C]" />
                </div>
                <div>
                  <div className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-1">Where We're Headed</div>
                  <h2 className="text-[#1E1B5C] font-oswald font-black text-2xl md:text-3xl uppercase tracking-tight">
                    Our Vision
                  </h2>
                </div>
              </div>
              <div className="bg-[#EFF6FF] rounded-2xl p-6 border-l-4 border-[#1E1B5C]">
                <p className="text-[#1E1B5C] text-[15px] md:text-[17px] leading-[1.9] font-medium">
                  To be the most reliable and globally recognized testing laboratory offering unparalleled accuracy, cutting-edge technology, and exceptional customer service.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Mission Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-3xl shadow-xl overflow-hidden border border-slate-100 group hover:shadow-2xl transition-all duration-300"
          >
            <div className="h-1.5 bg-gradient-to-r from-[#FF6700] to-[#ff9a52]" />
            <div className="p-8 md:p-10">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-2xl bg-[#FF6700]/10 flex items-center justify-center shrink-0 group-hover:bg-[#FF6700]/20 transition-colors">
                  <Rocket size={26} className="text-[#FF6700]" />
                </div>
                <div>
                  <div className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-1">How We Get There</div>
                  <h2 className="text-[#1E1B5C] font-oswald font-black text-2xl md:text-3xl uppercase tracking-tight">
                    Our Mission
                  </h2>
                </div>
              </div>
              <div className="bg-[#fff5ee] rounded-2xl p-6 border-l-4 border-[#FF6700] mb-5">
                <p className="text-slate-700 text-[15px] md:text-[16px] leading-[1.9]">
                  Committed to promoting quality and safety by providing rigorous, independent, and ethical testing services across infrastructural and industrial sectors.
                </p>
              </div>
              <ul className="space-y-3">
                {missionPoints.map((point, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 size={16} className="text-[#FF6700] mt-0.5 shrink-0" fill="currentColor" />
                    <span className="text-slate-600 text-[13px] md:text-[14px] leading-[1.7]">{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>

        {/* Future Goals */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-[#1E1B5C] rounded-3xl shadow-xl p-8 md:p-12 relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#FF6700]/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 rounded-xl bg-[#FF6700]/20 flex items-center justify-center shrink-0">
                <Rocket size={20} className="text-[#FF6700]" />
              </div>
              <h2 className="text-white font-oswald font-black text-2xl md:text-3xl uppercase tracking-tight">
                Future <span className="text-[#FF6700]">Goals</span>
              </h2>
            </div>
            <p className="text-white/60 text-[14px] mb-8 max-w-2xl">
              Keeping in view the interest of consumers as well as the industry and market, Omegalab is involved in various activities:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {futureGoals.map((goal, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className="flex items-start gap-4 bg-white/5 border border-white/10 rounded-2xl p-5 hover:bg-white/10 hover:border-[#FF6700]/30 transition-all duration-300"
                >
                  <div className="w-8 h-8 rounded-full bg-[#FF6700] flex items-center justify-center shrink-0 text-white font-black text-[12px]">
                    {i + 1}
                  </div>
                  <p className="text-white/80 text-[14px] leading-[1.7]">{goal}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
