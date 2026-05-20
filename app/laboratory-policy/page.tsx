"use client";

import { motion } from "motion/react";
import { ClipboardList, Target, TrendingUp, Users, DollarSign, ShieldCheck } from "lucide-react";

const policies = [
  "Committed to meet customer requirements as well as the international standard ISO/IEC 17025:2017 by following good professional practices in the field of Mechanical, Chemical & NDT testing of different materials.",
  "Ensure that our laboratory staff are familiarizing themselves with the quality documentation and implement the policies and procedures in their work and continually improve the effectiveness of the management system.",
  "Committed to produce reliable test results/services in accordance with applicable national and international standards and promote efficiency with appropriate technology operated by trained and competent staff.",
  "Ensure customer satisfaction by maintaining competence as per requirement, independence, impartiality, confidentiality, and integrity in its operations and improving the management system continuously.",
];

const objectives = [
  {
    icon: Target,
    title: "Operational",
    color: "#1E1B5C",
    points: [
      "Implementation of Quality Management system as per ISO/IEC 17025:2017 including NABL Requirements.",
      "Maintaining safeguard against impartiality and confidentiality.",
      "Time to time verification of implemented system by internal audit and IQC checks.",
      "Participation in Proficiency Testing Programs.",
      "Identification of risks and opportunities and address them respectively.",
      "Providing honest and unbiased test reports to customers.",
    ],
  },
  {
    icon: TrendingUp,
    title: "Growth & Environment",
    color: "#FF6700",
    points: [
      "Recruitment of educated, trained and skilled manpower.",
      "Use of modern test equipment and methodologies.",
      "Investment in safety equipment to encounter accidents.",
      "Healthy laboratory environment and professional inter-relationship between employees and management.",
    ],
  },
  {
    icon: Users,
    title: "Customer & Financial",
    color: "#22c55e",
    points: [
      "Regular collection of customer feedback and suggestions and upgrade the system accordingly.",
      "Resolve customer complaints within stipulated time period and take required corrective action.",
      "Increase net profit margins by 15–20% in the next financial year.",
      "Choosing smart marketing strategy to grab more testing works from projects.",
      "Providing honest and unbiased reports to customers within stipulated time frames.",
    ],
  },
];

export default function LaboratoryPolicyPage() {
  return (
    <div className="w-full bg-[#EFF6FF] min-h-screen pb-24 font-montserrat">
      {/* Hero */}
      <div className="bg-[#1E1B5C] w-full pt-16 pb-28 px-4 md:px-12 relative overflow-hidden">
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#EFF6FF] to-transparent z-10" />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#FF6700]/10 rounded-full blur-[100px] pointer-events-none" />

        <div className="max-w-[1300px] mx-auto flex flex-col items-center relative z-20 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="w-16 h-16 rounded-2xl bg-[#FF6700]/20 border border-[#FF6700]/30 flex items-center justify-center mb-6"
          >
            <ClipboardList size={32} className="text-[#FF6700]" />
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-white font-black text-[32px] md:text-[52px] font-oswald tracking-tight uppercase leading-[1.1] mb-4"
          >
            Laboratory Policy &amp; <span className="text-[#FF6700]">Objective</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-white/70 text-sm md:text-base max-w-2xl"
          >
            Our commitment to quality, accuracy, and customer satisfaction — defined.
          </motion.p>
        </div>
      </div>

      <div className="max-w-[1300px] mx-auto px-4 md:px-12 mt-[-60px] relative z-30 space-y-10">

        {/* Policy Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-3xl shadow-xl border-t-4 border-[#FF6700] p-8 md:p-12"
        >
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 rounded-xl bg-[#FF6700]/10 flex items-center justify-center shrink-0">
              <ShieldCheck size={20} className="text-[#FF6700]" />
            </div>
            <h2 className="text-[#1E1B5C] font-oswald font-black text-2xl md:text-3xl uppercase tracking-tight">
              Laboratory Policy
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {policies.map((policy, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="flex gap-4 p-5 rounded-2xl bg-[#EFF6FF] border border-[#1E1B5C]/10 hover:border-[#FF6700]/40 hover:shadow-md transition-all duration-300"
              >
                <div className="w-7 h-7 rounded-full bg-[#FF6700] flex items-center justify-center shrink-0 mt-0.5 text-white font-black text-[12px]">
                  {idx + 1}
                </div>
                <p className="text-slate-600 text-[14px] md:text-[15px] leading-[1.8]">{policy}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Objectives Section */}
        <div>
          <div className="flex items-center gap-3 mb-6 px-1">
            <div className="w-10 h-10 rounded-xl bg-[#1E1B5C]/10 flex items-center justify-center shrink-0">
              <DollarSign size={20} className="text-[#1E1B5C]" />
            </div>
            <h2 className="text-[#1E1B5C] font-oswald font-black text-2xl md:text-3xl uppercase tracking-tight">
              Laboratory Objective
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {objectives.map((obj, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-white rounded-3xl shadow-lg border border-slate-100 overflow-hidden hover:shadow-xl transition-all duration-300 group"
              >
                <div className="h-1.5 w-full" style={{ backgroundColor: obj.color }} />
                <div className="p-7">
                  <div
                    className="w-12 h-12 rounded-2xl flex items-center justify-center mb-5"
                    style={{ backgroundColor: obj.color + "15" }}
                  >
                    <obj.icon size={22} style={{ color: obj.color }} />
                  </div>
                  <h3 className="font-oswald font-black text-[#1E1B5C] text-xl uppercase tracking-tight mb-5">
                    {obj.title}
                  </h3>
                  <ul className="space-y-3">
                    {obj.points.map((point, i) => (
                      <li key={i} className="flex items-start gap-3 text-[13px] text-slate-600 leading-[1.7]">
                        <span
                          className="w-1.5 h-1.5 rounded-full mt-2 shrink-0"
                          style={{ backgroundColor: obj.color }}
                        />
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
