'use client';

import { useState } from 'react';
import Image from 'next/image';
import { ChevronUp, ChevronDown } from 'lucide-react';
import centers from '../data/collectionCenters.json';

export default function CollectionAccordion() {
  // Start with all accordions closed
  const [openIds, setOpenIds] = useState<string[]>([]);

  const toggle = (id: string) => {
    setOpenIds(prev => prev.includes(id) ? prev.filter(x => x !== id) : [...prev, id]);
  };

  return (
    <div className="w-full max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-start">
      {centers.map(center => {
        const isOpen = openIds.includes(center.id);
        return (
          <div key={center.id} className="flex flex-col bg-white shadow-md hover:shadow-xl transition-shadow rounded-sm overflow-hidden border border-[#1E1B5C]/10 h-max">
            <button 
              onClick={() => toggle(center.id)}
              className="w-full flex items-center justify-between gap-3 bg-[#1E1B5C] text-white px-5 py-4 font-bold text-[16px] font-oswald tracking-wide hover:bg-[#FF6700] transition-colors"
            >
              {center.name}
              <div className="flex items-center justify-center w-6 h-6 rounded-full bg-white/10 shrink-0">
                {isOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
              </div>
            </button>
            
            <div 
              className={`grid transition-all duration-300 ease-in-out ${isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}
            >
              <div className="overflow-hidden flex flex-col">
                <div className="p-5 text-[14px] text-gray-800 font-medium leading-relaxed bg-white">
                  {center.address}
                </div>
                <div className="relative w-full aspect-[4/5] bg-gray-100 border-t border-slate-100 shrink-0">
                  <Image 
                    src={center.image}
                    alt={`${center.name} location`}
                    fill
                    className="object-cover"
                    unoptimized
                  />
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
