'use client';

import { motion } from 'motion/react';

export default function LabTourPage() {
  return (
    <div className="w-full bg-white min-h-[calc(100vh-200px)] pt-16 pb-24 font-montserrat">
      {/* Header Section */}
      <div className="max-w-[1000px] mx-auto px-4 md:px-12 mb-16 text-center">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="font-oswald font-black text-[32px] md:text-[56px] text-[#1E1B5C] mb-4 uppercase tracking-tight"
        >
          Inside <span className="text-[#FF6700]">OmegaLab</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-slate-500 text-[15px] md:text-[17px] leading-relaxed max-w-2xl mx-auto"
        >
          Explore OmegaLab&apos;s infrastructure through guided video tours of our laboratories. From advanced equipment to specialized testing divisions, our facilities are designed to deliver accuracy, efficiency, and compliance across all operations.
        </motion.p>
      </div>

      <div className="relative max-w-[800px] mx-auto px-4">
        {/* Divider line */}
        <div className="w-full h-[2px] bg-[#FF6700] mb-12"></div>

        {/* Sub Header */}
        <div className="text-center mb-12">
          <h2 className="text-[#1E1B5C] font-oswald font-black text-[28px] md:text-[40px] uppercase mb-3 tracking-tight">
            Kolkata Lab-1 & Lab-2 Tour
          </h2>
          <p className="text-slate-500 text-[15px] md:text-[17px] leading-relaxed max-w-2xl mx-auto">
            Inside our Kolkata laboratories—built for precision and performance.
          </p>
        </div>

        {/* Video Container */}
        <div className="w-full aspect-video rounded shadow-xl overflow-hidden mb-12 bg-black">
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/FoE_wLUoZOE"
            title="OmegaLab Tour"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>

        {/* Addresses */}
        <div className="text-center flex flex-col gap-2 mx-auto justify-center">
          <p className="text-[14px] md:text-[15px] font-bold text-[#222222]">
            <span className="text-black">Kolkata Lab 1</span> :- <span className="font-normal">256A, M. G. Road, Purbasan, Thakurpukur, Kolkata - 700 063</span>
          </p>
          <p className="text-[14px] md:text-[15px] font-bold text-[#222222]">
            <span className="text-black">Kolkata Lab 2</span> :- <span className="font-normal">996, M. G. Road, Purbasan, Thakurpukur, Kolkata - 700 063</span>
          </p>
        </div>
      </div>
    </div>
  );
}
