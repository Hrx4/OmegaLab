'use client';

import { motion } from 'motion/react';
import Image from 'next/image';
import { ExternalLink, MapPin, Calendar, Users } from 'lucide-react';

const EXTERNAL_VISITS = [
  {
    title: "National Quality Assurance Board Visit",
    date: "12 Oct 2024",
    location: "Kolkata Lab-1",
    description: "A profound interactive session and facility tour with the National Quality Assurance Board delegates to discuss next-gen calibration techniques.",
    category: "Inspection",
    imageUrl: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "International Symposium on Material Testing",
    date: "05 Nov 2024",
    location: "New Delhi Convention Centre",
    description: "Omegalab's senior scientists presented paper on advanced non-destructive testing methodologies.",
    category: "Conference",
    imageUrl: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "CSIR-NML Annual Training Summit",
    date: "22 Jan 2025",
    location: "Jamshedpur",
    description: "Our quality control team actively participated in the training summit hosted by CSIR-NML, gaining insights into emerging reference materials.",
    category: "Training",
    imageUrl: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "Siliguri Industrial Federation Meet",
    date: "14 Feb 2025",
    location: "Siliguri Lab Area",
    description: "Hosted the local industrial federation to showcase our newly acquired heavy machinery testing equipment.",
    category: "Facility Tour",
    imageUrl: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "Global standardisation Conference 2025",
    date: "18 Mar 2025",
    location: "Mumbai",
    description: "Represented Eastern India's testing capabilities on a global platform, networking with worldwide industry leaders.",
    category: "Conference",
    imageUrl: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "Engineering College Technical Tour",
    date: "02 Apr 2025",
    location: "Kolkata Lab-2",
    description: "Welcomed over 50 engineering students for a live demonstration of chemical and mechanical testing processes.",
    category: "Educational",
    imageUrl: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=800&q=80"
  }
];

export default function ExternalVisitPage() {
  return (
    <div className="w-full bg-[#EFF6FF] min-h-screen pb-24 font-montserrat">
      {/* Hero Header Area */}
      <div className="bg-[#1E1B5C] w-full pt-16 pb-24 px-4 md:px-12 relative overflow-hidden">
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#EFF6FF] to-transparent z-10"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#FF6700]/10 rounded-full blur-[80px] pointer-events-none"></div>
        <div className="absolute bottom-0 left-[-100px] w-64 h-64 bg-white/5 rounded-full blur-[60px] pointer-events-none"></div>

        <div className="max-w-[1300px] mx-auto flex flex-col items-center relative z-20 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-white font-black text-[32px] md:text-[48px] lg:text-[56px] font-oswald tracking-tight uppercase leading-[1.1] mb-6"
          >
            External <span className="text-[#FF6700]">Visits</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-white/80 font-medium tracking-widest uppercase text-sm md:text-base max-w-2xl"
          >
            Highlights from our interactions with global organizations, facility tours, educational summits, and networking events.
          </motion.p>
        </div>
      </div>

      <div className="max-w-[1300px] mx-auto px-4 md:px-12 mt-[-40px] relative z-30 mb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {EXTERNAL_VISITS.map((visit, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 group border border-slate-100 flex flex-col h-full"
            >
              <div className="relative h-[240px] w-full overflow-hidden">
                <div className="absolute top-4 left-4 z-20 bg-[#FF6700] text-white text-xs font-bold px-3 py-1.5 rounded uppercase tracking-wider shadow-lg">
                  {visit.category}
                </div>
                <Image
                  src={visit.imageUrl}
                  alt={visit.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out"
                  unoptimized
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1E1B5C]/90 to-transparent opacity-80 mix-blend-multiply"></div>
              </div>

              <div className="p-6 md:p-8 flex flex-col flex-grow relative">
                {/* Date badge overlapping the image */}
                <div className="absolute -top-7 right-6 bg-white border border-slate-200 shadow-lg rounded-xl p-3 flex flex-col items-center justify-center min-w-[70px] z-10">
                  <Calendar size={18} className="text-[#FF6700] mb-1" />
                  <span className="text-[10px] uppercase font-bold text-slate-500">{visit.date.split(' ')[1]}</span>
                  <span className="text-xl font-black text-[#1E1B5C] font-oswald leading-none">{visit.date.split(' ')[0]}</span>
                </div>

                <h3 className="font-bold text-[#1E1B5C] text-xl font-oswald uppercase tracking-wide leading-tight mb-3 pr-16">
                  {visit.title}
                </h3>

                <div className="flex items-center gap-2 text-slate-500 text-sm mb-4 font-medium">
                  <MapPin size={16} className="text-[#FF6700]" /> {visit.location}
                </div>

                <p className="text-slate-600 text-sm leading-relaxed mb-6 flex-grow">
                  {visit.description}
                </p>

                <div className="mt-auto border-t border-slate-100 pt-4 flex justify-between items-center">
                  <span className="text-[#1E1B5C] text-xs font-bold uppercase tracking-wider flex items-center gap-2 cursor-pointer group/link hover:text-[#FF6700] transition-colors">
                    View Gallery <ExternalLink size={14} className="group-hover/link:translate-x-1 transition-transform" />
                  </span>
                  <Users size={18} className="text-slate-400" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
