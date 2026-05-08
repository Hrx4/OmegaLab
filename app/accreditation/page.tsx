'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronUp, ChevronDown, ChevronLeft, ChevronRight, FileImage } from 'lucide-react';

const BIG_BADGES = [
  { id: 1, tc: "TC-11935", image: "https://res.cloudinary.com/de4cnpfm1/image/upload/v1778245989/TC11935_tsqh9z.webp" },
  { id: 2, tc: "TC-13401", image: "https://res.cloudinary.com/de4cnpfm1/image/upload/v1778245987/TC13401_axis5q.webp" },
  { id: 3, tc: "TC-15509", image: "https://res.cloudinary.com/de4cnpfm1/image/upload/v1778245987/TC15509_dx2lua.webp" },
  { id: 4, tc: "TC-16480", image: "https://res.cloudinary.com/de4cnpfm1/image/upload/v1778245989/TC16480_kmsows.webp" },
  { id: 5, tc: "TC-17671", image: "https://res.cloudinary.com/de4cnpfm1/image/upload/v1778245989/TC17671_ghwfuo.webp" },
];

const LAB_DATA = [
  {
    id: "kolkata-1",
    name: "KOLKATA LAB 1",
    cert: "TC-11935",
    address: "256A, M. G. Road, Purbasan, Thakurpukur, Kolkata - 700 063",
    certText: "ISO/IEC 17025 Accredited Testing Laboratory by NABL vide Certificate number",
    certImage: "https://images.unsplash.com/photo-1606857521015-7f9fcf423740?auto=format&fit=crop&w=600&q=80",
    scopeText: "Access the complete scope of our NABL accreditation, including detailed parameters, testing methods, and applicable standards.",
    pdfLink: "#"
  },
  {
    id: "kolkata-2",
    name: "KOLKATA LAB 2",
    cert: "TC-13401",
    address: "996, M. G. Road, Purbasan, Thakurpukur, Kolkata - 700 063",
    certText: "ISO/IEC 17025 Accredited Testing Laboratory by NABL vide Certificate number",
    certImage: "https://images.unsplash.com/photo-1606857521015-7f9fcf423740?auto=format&fit=crop&w=600&q=80",
    scopeText: "Access the complete scope of our NABL accreditation, including detailed parameters, testing methods, and applicable standards.",
    pdfLink: "#"
  },
  {
    id: "siliguri",
    name: "SILIGURI LAB",
    cert: "TC-15509",
    address: "1052/A, Narmada Bagan, Ward No. 46, Siliguri, Darjeeling - 734003",
    certText: "ISO/IEC 17025 Accredited Testing Laboratory by NABL vide Certificate number",
    certImage: "https://images.unsplash.com/photo-1606857521015-7f9fcf423740?auto=format&fit=crop&w=600&q=80",
    scopeText: "Access the complete scope of our NABL accreditation, including detailed parameters, testing methods, and applicable standards.",
    pdfLink: "#"
  },
  {
    id: "ranchi",
    name: "RANCHI LAB",
    cert: "TC-16480",
    address: "2085/B, Ward No. 19/4, Bariatu Basti Hill View Road, Bariatu, Ranchi, Jharkhand",
    certText: "ISO/IEC 17025 Accredited Testing Laboratory by NABL vide Certificate number",
    certImage: "https://images.unsplash.com/photo-1606857521015-7f9fcf423740?auto=format&fit=crop&w=600&q=80",
    scopeText: "Access the complete scope of our NABL accreditation, including detailed parameters, testing methods, and applicable standards.",
    pdfLink: "#"
  },
  {
    id: "odhisha",
    name: "ODHISHA LAB",
    cert: "TC-17671",
    address: "Plot no. 891/1572 ,Uttarasasana, Kousalyaganga, Pubasasan , P.S. Pipli, Dist.-Puri, Odisha,PIN-751002.",
    certText: "ISO/IEC 17025 Accredited Testing Laboratory by NABL vide Certificate number",
    certImage: "https://images.unsplash.com/photo-1606857521015-7f9fcf423740?auto=format&fit=crop&w=600&q=80",
    scopeText: "Access the complete scope of our NABL accreditation, including detailed parameters, testing methods, and applicable standards.",
    pdfLink: "#"
  }
];

export default function AccreditationPage() {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Accordion states
  const [openLabs, setOpenLabs] = useState<Record<string, boolean>>(
    LAB_DATA.reduce((acc, lab) => ({ ...acc, [lab.id]: false }), {}) // Default to close
  );

  const [openScopes, setOpenScopes] = useState<Record<string, boolean>>(
    LAB_DATA.reduce((acc, lab) => ({ ...acc, [lab.id]: false }), {}) // Default to close
  );

  // Auto-slide effect
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % BIG_BADGES.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % BIG_BADGES.length);
  };

  const getBadgeUrl = (tc: string) =>
    BIG_BADGES.find((b) => b.tc === tc)?.image ?? '';

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + BIG_BADGES.length) % BIG_BADGES.length);
  };

  const toggleLab = (id: string) => {
    setOpenLabs(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const toggleScope = (id: string) => {
    setOpenScopes(prev => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <div className="w-full bg-white font-montserrat flex flex-col min-h-screen">

      {/* Top Description Section */}
      <div className="max-w-[1400px] mx-auto w-full px-4 md:px-12 py-12 md:py-20 flex flex-col overflow-hidden">
        <h1 className="text-center md:text-left font-black text-[28px] md:text-[36px] text-[#1E1B5C] font-oswald tracking-tight mb-8 md:mb-12">
          Quality Accreditation & Assurance
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-10 lg:gap-20 items-center w-full">

          {/* Text Content */}
          <div className="flex flex-col gap-6 text-[14px] md:text-[15px] leading-[1.6] text-black">
            <p>
              <strong>National Accreditation Board for Testing and Calibration Laboratories (NABL)</strong> is an autonomous body under the Department of Science & Technology, Government of India, and the sole accreditation authority for testing and calibration laboratories. It certifies laboratories that comply with internationally recognised standards such as <strong>ISO/IEC 17025</strong>, ensuring technical competence and reliable results.
            </p>
            <p>
              Accreditation provides formal recognition of a laboratory&apos;s capability, enhancing trust and global acceptance of its test reports through international affiliations like ILAC and APLAC.
            </p>
            <p>
              OmegaLab Testing Services Private Limited is accredited by NABL in <strong>Chemical and Mechanical testing</strong>, reflecting our commitment to accuracy, reliability, and compliance with global standards. Our management system is aligned with ISO/IEC 17025, ensuring that all tests are conducted using validated methods and in accordance with client and regulatory requirements.
            </p>
            <p>
              We are dedicated to delivering <strong>precise, timely, and high-quality analytical</strong> services, supported by a strong quality framework and continuous improvement in our processes.
            </p>
          </div>

          {/* Big NABL Logo Slider */}
          <div className="flex flex-col items-center justify-center w-full max-w-[400px] mx-auto">
            <div className="relative w-full aspect-square rounded-full border border-slate-200 p-2 shadow-lg group">
              <div className="w-full h-full rounded-full overflow-hidden relative">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentSlide}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                    className="w-full h-full relative"
                  >
                    <Image
                      src={BIG_BADGES[currentSlide].image}
                      alt={`NABL Accreditation ${BIG_BADGES[currentSlide].tc}`}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute bottom-[10%] inset-x-0 text-center">
                      <span className="bg-white/80 backdrop-blur px-4 py-1.5 rounded-full font-bold text-lg text-[#1E1B5C] uppercase tracking-wider inline-block">
                        {BIG_BADGES[currentSlide].tc}
                      </span>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Slider Controls */}
              <button onClick={prevSlide} className="absolute left-[-20px] top-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center text-[#1E1B5C] hover:bg-[#FF6700] hover:text-white transition-colors z-10 border border-slate-200">
                <ChevronLeft size={24} />
              </button>
              <button onClick={nextSlide} className="absolute right-[-20px] top-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center text-[#1E1B5C] hover:bg-[#FF6700] hover:text-white transition-colors z-10 border border-slate-200">
                <ChevronRight size={24} />
              </button>
            </div>

            {/* Slider Dots */}
            <div className="flex justify-center gap-2 mt-6">
              {BIG_BADGES.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentSlide(idx)}
                  className={`w-3 h-3 rounded-full transition-all ${idx === currentSlide ? 'bg-[#FF6700] w-8' : 'bg-slate-300 hover:bg-slate-400'
                    }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Accordion Labs Section */}
      <div className="bg-[#EFF6FF] w-full py-12 md:py-20 px-4 md:px-8 border-t border-slate-200 flex-grow">
        <div className="max-w-[1500px] mx-auto w-full">
          <div className="flex flex-col lg:grid lg:grid-cols-5 gap-8 lg:gap-6 w-full pb-8">
            {LAB_DATA.map((lab) => (
              <div key={lab.id} className="w-full flex flex-col shrink-0">

                {/* Main Lab Accordion Toggle */}
                <button
                  onClick={() => toggleLab(lab.id)}
                  className="w-full flex items-center justify-start gap-2 text-[#1E1B5C] font-bold text-lg md:text-xl font-oswald tracking-wide uppercase mb-4 hover:text-[#FF6700] transition-colors"
                >
                  {openLabs[lab.id] ? <ChevronUp className="text-[#1E1B5C] shrink-0" /> : <ChevronDown className="text-[#1E1B5C] shrink-0" />}
                  <span className="text-left">{lab.name}</span>
                </button>

                <AnimatePresence>
                  {openLabs[lab.id] && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="flex flex-col gap-6 overflow-hidden mb-6"
                    >
                      {/* Top Badges */}
                      <div className="flex gap-4 items-center">
                        <div className="w-24 h-24 rounded-full border border-slate-200 overflow-hidden relative bg-white flex items-center justify-center shadow-sm shrink-0">
                          <Image
                            src={getBadgeUrl(lab.cert)}
                            alt={`NABL Logo ${lab.cert}`}
                            width={64}
                            height={64}
                            className="object-contain p-6 h-12 w-12"
                          />
                          <span className="absolute bottom-1 text-[#1E1B5C] font-black text-[9px] bg-white/90 px-1 rounded uppercase tracking-tighter shadow-sm">
                            {lab.cert}
                          </span>
                        </div>
                        <div className="w-24 h-24 rounded bg-slate-800 flex items-center justify-center text-slate-400 border border-slate-700 shadow-sm shrink-0 relative overflow-hidden">
                          <FileImage size={24} className="opacity-50" />
                          <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent pointer-events-none"></div>
                        </div>
                      </div>

                      {/* Address & Cert Text */}
                      <div className="flex flex-col gap-4 text-sm text-black leading-relaxed mt-2 pr-4">
                        <p><strong>Address:</strong> {lab.address}</p>
                        <p>{lab.certText} <strong>{lab.cert}</strong></p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Certificate Document (Always visible) */}
                <div className="bg-white p-2 border border-slate-300 shadow-sm flex flex-col relative w-full h-auto aspect-[1/1.4] overflow-hidden group">
                  <Image
                    src={lab.certImage}
                    alt={`${lab.name} Certificate`}
                    fill
                    className="object-cover group-hover:scale-[1.02] transition-transform duration-500"
                    unoptimized
                  />
                </div>

                {/* Scope Accordion Toggle (Always visible) */}
                <div className="mt-6 flex flex-col">
                  <button
                    onClick={() => toggleScope(lab.id)}
                    className="flex items-start gap-2 text-sm md:text-[15px] font-bold text-[#1E1B5C] hover:text-[#FF6700] transition-colors text-left"
                  >
                    <div className="shrink-0 mt-0.5">
                      {openScopes[lab.id] ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                    </div>
                    <span>View NABL Scope of Accreditation</span>
                  </button>

                  <AnimatePresence>
                    {openScopes[lab.id] && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="pt-3 pb-2 text-[14px] text-slate-700 leading-relaxed pr-4 flex flex-col gap-3">
                          <p>{lab.scopeText}</p>
                          <a href={lab.pdfLink} className="text-[#1E1B5C] font-bold border-b border-[#1E1B5C] hover:text-[#FF6700] hover:border-[#FF6700] transition-colors inline-block w-fit pb-0.5">
                            [Download Scope PDF]
                          </a>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

    </div>
  );
}

