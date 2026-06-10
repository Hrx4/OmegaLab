"use client";

import { motion } from "motion/react";
import { Activity } from "lucide-react";
import Image from "next/image";

const GALLERY_ITEMS = [
  {
    title: "Technical Training Session",
    category: "Training",
    image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=800&q=80",
    gridClass: "md:col-span-2 md:row-span-2 h-[320px] md:h-[460px]"
  },
  {
    title: "Internal Quality Audit",
    category: "Internal Audit",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80",
    gridClass: "col-span-1 h-[220px]"
  },
  {
    title: "Modern Chemical Laboratory",
    category: "Laboratory Analysis",
    image: "https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=800&q=80",
    gridClass: "col-span-1 md:row-span-2 h-[320px] md:h-[460px]"
  },
  {
    title: "Accreditation Compliance Review",
    category: "Audit & Documentation",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80",
    gridClass: "md:col-span-2 h-[220px]"
  },
  {
    title: "Precision Equipment Calibration",
    category: "Calibration",
    image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80",
    gridClass: "col-span-1 h-[220px]"
  },
  {
    title: "On-site Field Sample Collection",
    category: "Field Testing",
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=800&q=80",
    gridClass: "md:col-span-2 h-[220px]"
  }
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
            A visual overview of our continuous training, rigorous audits, laboratory testing, and compliance activities.
          </motion.p>
        </div>
      </div>

      <div className="max-w-[1300px] mx-auto px-4 md:px-12 mt-[-60px] relative z-30">
        
        {/* Bento Grid Gallery */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {GALLERY_ITEMS.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.08 }}
              className={`relative rounded-3xl overflow-hidden shadow-lg border border-slate-100 hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-500 group ${item.gridClass}`}
            >
              {/* Image background */}
              <div className="absolute inset-0 z-0">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  unoptimized
                />
              </div>

              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/45 to-transparent z-10" />

              {/* Text / Category pill content */}
              <div className="absolute inset-0 z-20 flex flex-col justify-end p-6">
                <div>
                  <span className="inline-block text-[10px] font-bold uppercase tracking-wider text-white bg-[#FF6700] px-3 py-1 rounded-full mb-3 shadow-[0_2px_10px_rgba(255,103,0,0.3)]">
                    {item.category}
                  </span>
                  <h3 className="text-white font-oswald font-black text-lg md:text-xl uppercase tracking-tight leading-snug drop-shadow-md">
                    {item.title}
                  </h3>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </div>
  );
}
