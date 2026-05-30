'use client';

import { MapPin, Phone } from 'lucide-react';

const COLLECTION_CENTRES = [
  { name: "Guwahati", state: "Assam", phone: "8837368798" },
  { name: "Shillong", state: "Meghalaya", phone: "8837368798" },
  { name: "Agartala", state: "Tripura", phone: "9862561693" },
  { name: "Haldia", state: "West Bengal", phone: "8768446680" },
  { name: "Medinipur", state: "West Bengal", phone: "9064732962" }
];

export default function CollectionAccordion() {
  return (
    <div className="w-full max-w-[1200px] grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-14">
      {/* Left: Summary Panel */}
      <div className="lg:col-span-4 bg-white rounded-3xl p-6 md:p-8 border border-slate-100 shadow-[0_6px_20px_rgba(30,27,92,0.05)] relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-[4px] bg-gradient-to-r from-[#1E1B5C] to-[#FF6700]"></div>
        <div className="w-12 h-12 rounded-2xl bg-[#EFF6FF] text-[#1E1B5C] flex items-center justify-center mb-6">
          <MapPin size={24} className="text-[#FF6700]" />
        </div>
        <h2 className="text-[#1E1B5C] font-black text-2xl font-oswald uppercase tracking-wide mb-4">
          National Network
        </h2>
        <p className="text-slate-500 text-[13.5px] leading-relaxed mb-6">
          We have established strategically located Sample Collection Centres to ensure prompt pick-ups and hassle-free submission of materials.
        </p>
        <div className="bg-[#EFF6FF] rounded-2xl p-5 border border-[#1E1B5C]/5">
          <div className="text-[11px] font-extrabold uppercase tracking-widest text-[#FF6700] mb-2">Central Support</div>
          <div className="text-[#1E1B5C] font-black text-[18px] font-oswald mb-1">CONTACT FOR DETAILS</div>
          <div className="text-slate-400 text-[11px] font-medium leading-relaxed">
            For collections, logistics, or general testing support, reach out to our nearest location.
          </div>
        </div>
      </div>

      {/* Right: Clean Cards list of collection centres */}
      <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
        {COLLECTION_CENTRES.map((center, index) => (
          <div 
            key={center.name} 
            className="group relative bg-white rounded-2xl p-6 border border-slate-100 shadow-[0_6px_20px_rgba(30,27,92,0.04)] hover:shadow-[0_12px_28px_rgba(255,103,0,0.1)] transition-all duration-300 hover:-translate-y-1 overflow-hidden flex flex-col justify-between"
          >
            {/* Top Accent line */}
            <div className="absolute top-0 left-0 w-full h-1 bg-[#1E1B5C] scale-x-50 origin-left transition-transform duration-500 group-hover:scale-x-100 group-hover:bg-[#FF6700]"></div>

            <div>
              <div className="flex items-center justify-between gap-2 mb-3">
                <span className="text-[10px] font-black tracking-widest uppercase text-[#FF6700] bg-[#FF6700]/10 px-2.5 py-1 rounded-full">
                  SAMPLE COLLECTION CENTRE
                </span>
                <span className="text-slate-200 group-hover:text-[#FF6700]/20 font-black text-[36px] font-oswald leading-none select-none transition-colors duration-300">
                  0{index + 1}
                </span>
              </div>
              <h3 className="text-[#1E1B5C] font-black text-[22px] font-oswald tracking-wide uppercase leading-tight mb-1">
                {center.name}
              </h3>
              <div className="text-[12px] text-slate-400 uppercase tracking-wider font-bold mb-5">
                {center.state}
              </div>
            </div>

            <div className="mt-auto border-t border-slate-100 pt-4">
              <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1">
                Contact Details for more info:
              </div>
              <a 
                href={`tel:${center.phone}`}
                className="inline-flex items-center gap-2 text-[#1E1B5C] hover:text-[#FF6700] font-black text-[16px] font-montserrat transition-colors"
              >
                <Phone size={14} className="text-[#FF6700]" />
                <span>+91 {center.phone}</span>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
