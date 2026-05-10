'use client';

import { MapPin } from 'lucide-react';
import centers from '../data/collectionCenters.json';

export default function CollectionAccordion() {
  return (
    <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-5 items-stretch">
      {centers.map((center, index) => (
        <div key={center.id} className="group relative bg-white rounded-2xl p-5 md:p-6 border border-slate-100 shadow-[0_6px_20px_rgba(30,27,92,0.05)] hover:shadow-[0_15px_35px_rgba(255,103,0,0.12)] transition-all duration-300 hover:-translate-y-1.5 overflow-hidden flex flex-col h-full z-10">
          
          {/* Top Accent Line */}
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#1E1B5C] to-[#FF6700] origin-left scale-x-50 group-hover:scale-x-100 transition-transform duration-500"></div>
          
          {/* Decorative Number */}
          <div className="absolute top-2 right-3 text-[56px] font-black font-oswald text-slate-100/50 group-hover:text-[#FF6700]/10 transition-colors duration-500 pointer-events-none select-none leading-none">
            0{index + 1}
          </div>

          {/* Icon */}
          <div className="w-11 h-11 bg-[#EFF6FF] text-[#1E1B5C] rounded-xl flex items-center justify-center mb-4 shadow-sm group-hover:bg-[#1E1B5C] group-hover:text-white transition-colors duration-300">
            <MapPin size={20} strokeWidth={2.5} />
          </div>

          {/* Center Name */}
          <h3 className="text-[#1E1B5C] font-black text-[20px] font-oswald tracking-wide mb-3">
            {center.name}
          </h3>

          {/* Address */}
          <div className="mt-auto bg-slate-50 p-3.5 rounded-xl border border-slate-100 group-hover:bg-white group-hover:border-[#FF6700]/20 transition-colors duration-300">
            <p className="text-slate-600 text-[13px] leading-relaxed font-semibold">
              {center.address}
            </p>
          </div>

        </div>
      ))}
    </div>
  );
}
