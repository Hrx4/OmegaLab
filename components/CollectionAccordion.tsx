'use client';

import { useState } from 'react';
import Image from 'next/image';
import { MapPin } from 'lucide-react';
import centers from '../data/collectionCenters.json';

const DEFAULT_IMAGE = "https://res.cloudinary.com/de4cnpfm1/image/upload/v1778433786/sampleoffc_ywjffi.jpg";

export default function CollectionAccordion() {
  const [clickedImage, setClickedImage] = useState<string | null>(null);
  const [hoveredImage, setHoveredImage] = useState<string | null>(null);

  const currentImage = hoveredImage || clickedImage || DEFAULT_IMAGE;

  return (
    <div className="w-full max-w-[1400px] grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch mb-14">
      {/* Left: Office Image */}
      <div className="relative w-full min-h-[400px] lg:min-h-0 rounded-3xl overflow-hidden shadow-[0_15px_40px_rgba(30,27,92,0.1)] border border-slate-100">
        <div className="absolute top-0 left-0 w-1.5 h-full bg-gradient-to-b from-[#1E1B5C] to-[#FF6700] z-20"></div>
        <Image
          src={currentImage}
          alt="OmegaLab Sample Collection Office"
          fill
          className="object-cover transition-opacity duration-500"
          unoptimized
          priority
        />
      </div>

      {/* Right: 2x2 Cards Grid */}
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-5 items-stretch">
        {centers.map((center, index) => (
          <div 
            key={center.id} 
            className={`group relative bg-white rounded-2xl p-5 md:p-6 border shadow-[0_6px_20px_rgba(30,27,92,0.05)] hover:shadow-[0_15px_35px_rgba(255,103,0,0.12)] transition-all duration-300 hover:-translate-y-1.5 overflow-hidden flex flex-col h-full z-10 cursor-pointer ${clickedImage === center.image ? 'border-[#FF6700]/50' : 'border-slate-100'}`}
            onMouseEnter={() => setHoveredImage(center.image)}
            onMouseLeave={() => setHoveredImage(null)}
            onClick={() => setClickedImage(center.image)}
          >
            
            {/* Top Accent Line */}
            <div className={`absolute top-0 left-0 w-full h-1 origin-left transition-transform duration-500 ${clickedImage === center.image ? 'bg-gradient-to-r from-[#1E1B5C] to-[#FF6700] scale-x-100' : 'bg-gradient-to-r from-[#1E1B5C] to-[#FF6700] scale-x-50 group-hover:scale-x-100'}`}></div>
            
            {/* Decorative Number */}
            <div className={`absolute top-2 right-3 text-[56px] font-black font-oswald transition-colors duration-500 pointer-events-none select-none leading-none ${clickedImage === center.image ? 'text-[#FF6700]/10' : 'text-slate-100/50 group-hover:text-[#FF6700]/10'}`}>
              0{index + 1}
            </div>

            {/* Icon */}
            <div className={`w-11 h-11 rounded-xl flex items-center justify-center mb-4 shadow-sm transition-colors duration-300 ${clickedImage === center.image ? 'bg-[#1E1B5C] text-white' : 'bg-[#EFF6FF] text-[#1E1B5C] group-hover:bg-[#1E1B5C] group-hover:text-white'}`}>
              <MapPin size={20} strokeWidth={2.5} />
            </div>

            {/* Center Name */}
            <h3 className="text-[#1E1B5C] font-black text-[20px] font-oswald tracking-wide mb-3">
              {center.name}
            </h3>

            {/* Address */}
            <div className={`mt-auto p-3.5 rounded-xl border transition-colors duration-300 ${clickedImage === center.image ? 'bg-white border-[#FF6700]/20' : 'bg-slate-50 border-slate-100 group-hover:bg-white group-hover:border-[#FF6700]/20'}`}>
              <p className="text-slate-600 text-[13px] leading-relaxed font-semibold">
                {center.address}
              </p>
            </div>

          </div>
        ))}
      </div>
    </div>
  );
}
