'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight, MapPin, FileDown, Eye, X, Award } from 'lucide-react';

const BIG_BADGES = [
  { id: 1, tc: "TC-11935", image: "https://res.cloudinary.com/de4cnpfm1/image/upload/v1778245989/TC11935_tsqh9z.webp" },
  { id: 2, tc: "TC-13401", image: "https://res.cloudinary.com/de4cnpfm1/image/upload/v1778245987/TC13401_axis5q.webp" },
  { id: 3, tc: "TC-15509", image: "https://res.cloudinary.com/de4cnpfm1/image/upload/v1780202025/ChatGPT_Image_May_31_2026_09_55_06_AM_ddjfjc.jpg" },
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
    certImage: "https://res.cloudinary.com/de4cnpfm1/image/upload/v1778247809/KOLKATA1_i1fhgi.jpg",
    qrImage: "https://res.cloudinary.com/de4cnpfm1/image/upload/v1779278317/KOLKATA1QR_bxgh6e.jpg",
    scopeText: "Access the complete scope of our NABL accreditation, including detailed parameters, testing methods, and applicable standards.",
    pdfLink: "https://nablwp.qci.org.in/CertificateScopenew?x=eOcz5t8vhPRBC9udGS4tiw==&src=P",
    directPdfLink: "https://nabl7t.s3.ap-south-1.amazonaws.com/NablCertificate/Scope-128039-TC-11935-1770380307.pdf"
  },
  {
    id: "kolkata-2",
    name: "KOLKATA LAB 2",
    cert: "TC-13401",
    address: "996, M. G. Road, Purbasan, Thakurpukur, Kolkata - 700 063",
    certText: "ISO/IEC 17025 Accredited Testing Laboratory by NABL vide Certificate number",
    certImage: "https://res.cloudinary.com/de4cnpfm1/image/upload/v1778247810/KOLKATA2_wsg4cn.jpg",
    qrImage: "https://res.cloudinary.com/de4cnpfm1/image/upload/v1779278316/KOLKATA2QR_sbz3l7.jpg",
    scopeText: "Access the complete scope of our NABL accreditation, including detailed parameters, testing methods, and applicable standards.",
    pdfLink: "https://nablwp.qci.org.in/CertificateScopenew?x=DeJ1LQUam/f8LCftuQrgsw==&src=P",
    directPdfLink: "https://nabl7t.s3.ap-south-1.amazonaws.com/NablCertificate/Scope-259631-TC-13401-1775295806.pdf"
  },
  {
    id: "siliguri",
    name: "SILIGURI LAB",
    cert: "TC-15509",
    address: "1052/A, Narmada Bagan, Ward No. 46, Siliguri, Darjeeling - 734003",
    certText: "ISO/IEC 17025 Accredited Testing Laboratory by NABL vide Certificate number",
    certImage: "https://res.cloudinary.com/de4cnpfm1/image/upload/v1778247807/SILIGURI_vqovah.jpg",
    qrImage: "https://res.cloudinary.com/de4cnpfm1/image/upload/v1779278316/SILIGURI_QR_qnoftz.jpg",
    scopeText: "Access the complete scope of our NABL accreditation, including detailed parameters, testing methods, and applicable standards.",
    pdfLink: "https://nablwp.qci.org.in/CertificateScopenew?x=j6k9iq1uw4Bg9VLeGZxZMg==&src=P",
    directPdfLink: "https://nabl7t.s3.ap-south-1.amazonaws.com/NablCertificate/Scope-109624-TC-15509-1739864381.pdf"
  },
  {
    id: "ranchi",
    name: "RANCHI LAB",
    cert: "TC-16480",
    address: "2085/B, Ward No. 19/4, Bariatu Basti Hill View Road, Bariatu, Ranchi, Jharkhand",
    certText: "ISO/IEC 17025 Accredited Testing Laboratory by NABL vide Certificate number",
    certImage: "https://res.cloudinary.com/de4cnpfm1/image/upload/v1778247807/RANCHI_za9xun.jpg",
    qrImage: "https://res.cloudinary.com/de4cnpfm1/image/upload/v1779278316/RANCHI_QR_bl6uea.jpg",
    scopeText: "Access the complete scope of our NABL accreditation, including detailed parameters, testing methods, and applicable standards.",
    pdfLink: "https://nablwp.qci.org.in/CertificateScopenew?x=wsIgkGUfG5PjBiZbOfxOtQ==&src=P",
    directPdfLink: "https://nabl7t.s3.ap-south-1.amazonaws.com/NablCertificate/Scope-119719-TC-16480-1753322384.pdf"
  },
  {
    id: "odhisha",
    name: "ODHISHA LAB",
    cert: "TC-17671",
    address: "Plot no. 891/1572 ,Uttarasasana, Kousalyaganga, Pubasasan , P.S. Pipli, Dist.-Puri, Odisha,PIN-751002.",
    certText: "ISO/IEC 17025 Accredited Testing Laboratory by NABL vide Certificate number",
    certImage: "https://res.cloudinary.com/de4cnpfm1/image/upload/v1778247807/ODISHA_x2opxm.jpg",
    qrImage: "https://res.cloudinary.com/de4cnpfm1/image/upload/v1779278316/ODISHA_QR_as8vyg.jpg",
    scopeText: "Access the complete scope of our NABL accreditation, including detailed parameters, testing methods, and applicable standards.",
    pdfLink: "https://nablwp.qci.org.in/CertificateScopenew?x=BLtvn2Aigjq6fokVy2tlWQ==&src=P",
    directPdfLink: "https://nabl7t.s3.ap-south-1.amazonaws.com/NablCertificate/Scope-119620-TC-17671-1773220269.pdf"
  }
];

export default function AccreditationPage() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [selectedImage, setSelectedImage] = useState<{ src: string; title: string } | null>(null);

  // Auto-slide effect for the hero slider
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % BIG_BADGES.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  // Listen for Escape key to close image modal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setSelectedImage(null);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % BIG_BADGES.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + BIG_BADGES.length) % BIG_BADGES.length);
  };

  const getBadgeUrl = (tc: string) =>
    BIG_BADGES.find((b) => b.tc === tc)?.image ?? '';

  return (
    <div className="w-full bg-white font-montserrat flex flex-col min-h-screen">

      {/* Top Description Section */}
      <div className="max-w-[1400px] mx-auto w-full px-4 sm:px-6 md:px-12 py-12 md:py-20 flex flex-col overflow-hidden">
        <h1 className="text-center md:text-left font-black text-[28px] md:text-[36px] text-[#1E1B5C] font-oswald tracking-tight mb-8 md:mb-12">
          Quality Accreditation & Assurance
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-10 lg:gap-20 items-center w-full">

          {/* Text Content */}
          <div className="flex flex-col gap-6 text-[14px] md:text-[15px] leading-[1.6] text-black">
            <p>
              <strong>OmegaLab Testing Services Private Limited</strong> is accredited as per <strong>ISO/IEC 17025: 2017</strong> by NABL in Chemical, Mechanical & Non-destructive testing, reflecting our commitment to accuracy, reliability, and compliance with global standards.
            </p>
            <p>
              Our management system is aligned with ISO/IEC 17025, ensuring that all tests are conducted using validated methods (national or international Test methods or standards) and in accordance with client and regulatory requirements.
            </p>
            <p className="font-semibold text-[#FF6700]">
              Under Accreditation we have total 5 accredited lab, Details are given below:
            </p>
          </div>

          {/* Big NABL Logo Slider */}
          <div className="flex flex-col items-center justify-center w-full max-w-[400px] mx-auto px-4">
            <div className="relative w-full aspect-square border border-slate-200 p-2 shadow-lg group rounded-full max-w-[340px] sm:max-w-full">
              <div className="w-full h-full overflow-hidden relative rounded-full">
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
                      sizes="(max-width: 768px) 100vw, 400px"
                      className="object-contain scale-90"
                    />
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Slider Controls */}
              <button onClick={prevSlide} className="absolute left-2 sm:left-[-20px] top-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center text-[#1E1B5C] hover:bg-[#FF6700] hover:text-white transition-colors z-10 border border-slate-200 cursor-pointer">
                <ChevronLeft size={24} />
              </button>
              <button onClick={nextSlide} className="absolute right-2 sm:right-[-20px] top-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center text-[#1E1B5C] hover:bg-[#FF6700] hover:text-white transition-colors z-10 border border-slate-200 cursor-pointer">
                <ChevronRight size={24} />
              </button>
            </div>

            {/* Slider Dots */}
            <div className="flex justify-center gap-2 mt-6">
              {BIG_BADGES.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentSlide(idx)}
                  className={`w-3 h-3 rounded-full transition-all cursor-pointer ${idx === currentSlide ? 'bg-[#FF6700] w-8' : 'bg-slate-300 hover:bg-slate-400'
                    }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Accredited Labs Grid Section */}
      <div className="bg-slate-50 w-full py-12 md:py-24 px-4 sm:px-6 md:px-8 border-t border-slate-200 flex-grow">
        <div className="max-w-[1400px] mx-auto w-full">
          <div className="text-center mb-10 md:mb-16">
            <h2 className="text-[24px] md:text-[36px] font-black text-[#1E1B5C] font-oswald tracking-tight mb-2 uppercase">
              Accredited Laboratory Facilities
            </h2>
            <p className="text-[13px] md:text-[15px] text-slate-500 max-w-xl mx-auto px-4">
              Explore our NABL ISO/IEC 17025 accredited labs across Eastern India
            </p>
            <div className="w-[60px] h-[4px] bg-[#FF6700] mx-auto mt-4 rounded-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 w-full pb-8">
            {LAB_DATA.map((lab) => (
              <div 
                key={lab.id} 
                className="bg-white rounded-3xl border border-slate-100 shadow-[0_10px_30px_rgba(30,27,92,0.02)] hover:shadow-[0_20px_50px_rgba(30,27,92,0.06)] transition-all duration-300 p-5 sm:p-6 md:p-8 flex flex-col justify-between relative overflow-hidden group"
              >
                {/* Accent Top Bar */}
                <div className="absolute top-0 left-0 w-full h-[4px] bg-gradient-to-r from-[#1E1B5C] to-[#FF6700]" />
                
                <div>
                  {/* Card Title & NABL Details */}
                  <div className="flex justify-between items-start gap-4 mb-5">
                    <div>
                      <h3 className="text-lg sm:text-xl md:text-2xl font-black text-[#1E1B5C] font-oswald tracking-tight uppercase group-hover:text-[#FF6700] transition-colors duration-300">
                        {lab.name}
                      </h3>
                      <div className="flex items-center gap-1.5 mt-1.5">
                        <Award size={14} className="text-[#FF6700]" />
                        <span className="text-[10px] sm:text-[11px] font-bold text-slate-400 uppercase tracking-widest font-mono">
                          NABL {lab.cert}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* NABL Badge and Scan QR Code Row (Enlarged for easy scanning) */}
                  <div className="flex items-center gap-4 mb-6">
                    {/* Badge */}
                    <div className="w-[96px] h-[96px] sm:w-[110px] sm:h-[110px] rounded-2xl border border-slate-100 bg-white shadow-sm flex items-center justify-center shrink-0 p-2">
                      <Image
                        src={getBadgeUrl(lab.cert)}
                        alt={`NABL Logo ${lab.cert}`}
                        width={90}
                        height={90}
                        className="object-contain w-auto h-auto max-h-full"
                      />
                    </div>

                    {/* QR Code */}
                    <div className="w-[96px] h-[96px] sm:w-[110px] sm:h-[110px] rounded-2xl border border-slate-100 bg-white shadow-sm flex items-center justify-center shrink-0 p-1.5 overflow-hidden">
                      <Image
                        src={lab.qrImage}
                        alt={`QR Code ${lab.name}`}
                        width={90}
                        height={90}
                        className="object-contain rounded-xl w-auto h-auto max-h-full"
                      />
                    </div>
                  </div>

                  {/* Address Section */}
                  <div className="flex items-start gap-3 mb-5">
                    <MapPin size={16} className="text-[#FF6700] shrink-0 mt-0.5" />
                    <p className="text-[13px] md:text-[14px] text-slate-500 leading-relaxed">
                      {lab.address}
                    </p>
                  </div>

                  {/* NABL Certification Text box */}
                  <div className="bg-slate-50 border border-slate-100 rounded-2xl p-4 mb-6">
                    <p className="text-[12px] md:text-[13px] text-[#1E1B5C] font-semibold leading-relaxed">
                      {lab.certText} <strong className="text-[#FF6700]">{lab.cert}</strong>
                    </p>
                  </div>

                  {/* Certificate Image Frame with Hover Effect */}
                  <div 
                    onClick={() => setSelectedImage({ src: lab.certImage, title: lab.name })}
                    className="relative aspect-[1/1.4] w-full rounded-2xl border border-slate-200 overflow-hidden bg-slate-50/50 shadow-sm group/image cursor-pointer p-4 flex items-center justify-center"
                  >
                    <Image
                      src={lab.certImage}
                      alt={`${lab.name} Certificate`}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-contain p-2 transition-transform duration-700 ease-out group-hover/image:scale-[1.03]"
                      unoptimized
                    />
                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-[#1E1B5C]/60 opacity-0 group-hover/image:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center gap-2">
                      <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur border border-white/30 flex items-center justify-center text-white shadow-lg transform translate-y-4 group-hover/image:translate-y-0 transition-transform duration-500">
                        <Eye size={20} />
                      </div>
                      <span className="text-white text-xs font-bold uppercase tracking-wider">
                        View Certificate
                      </span>
                    </div>
                  </div>
                </div>

                {/* Scope Actions Section */}
                <div className="mt-6 md:mt-8 pt-6 border-t border-slate-100 flex flex-col gap-4">
                  <p className="text-[11px] md:text-[12px] text-slate-400 leading-relaxed">
                    {lab.scopeText}
                  </p>
                  <div className="flex flex-col gap-2.5 w-full">
                    <a 
                      href={lab.pdfLink} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="w-full bg-[#1E1B5C] hover:bg-[#FF6700] text-white text-center py-3 sm:py-3.5 px-4 rounded-2xl font-bold text-[11px] md:text-xs tracking-wide uppercase transition-all duration-300 flex items-center justify-center gap-2.5 shadow-[0_4px_15px_rgba(30,27,92,0.08)] hover:shadow-[0_4px_15px_rgba(255,103,0,0.25)] hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
                    >
                      <FileDown size={15} className="shrink-0" />
                      <span className="text-center">Accredited Certificate & Scope through NABL portal</span>
                    </a>
                    <a 
                      href={lab.directPdfLink} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="w-full bg-[#FF6700] hover:bg-[#1E1B5C] text-white text-center py-3 sm:py-3.5 px-4 rounded-2xl font-bold text-[11px] md:text-xs tracking-wide uppercase transition-all duration-300 flex items-center justify-center gap-2.5 shadow-[0_4px_15px_rgba(255,103,0,0.08)] hover:shadow-[0_4px_15px_rgba(30,27,92,0.25)] hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
                    >
                      <FileDown size={15} className="shrink-0" />
                      <span className="text-center">Download & View Scope</span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Lightbox / Modal for Certificate Zoom */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[99999] bg-black/85 backdrop-blur-sm flex items-center justify-center p-4 md:p-6 cursor-pointer"
            onClick={() => setSelectedImage(null)}
          >
            {/* Close Button */}
            <button 
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 md:top-6 md:right-6 z-[100000] w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/15 hover:bg-white/30 text-white flex items-center justify-center transition-colors border border-white/20 cursor-pointer shadow-lg"
              aria-label="Close modal"
            >
              <X size={20} className="md:w-6 md:h-6" />
            </button>

            {/* Modal Content Box */}
            <motion.div
              initial={{ scale: 0.95, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 20 }}
              transition={{ type: "spring", duration: 0.4 }}
              className="relative max-w-3xl w-full h-[80vh] md:h-[85vh] bg-slate-950/10 rounded-3xl overflow-hidden flex flex-col items-center p-4 pt-16 md:pt-20"
              onClick={(e) => e.stopPropagation()} // Prevent close on modal content click
            >
              <div className="absolute top-4 left-4 right-16 z-10 text-white text-xs md:text-sm font-bold bg-[#FF6700]/95 backdrop-blur px-4 py-2 rounded-full uppercase tracking-wider shadow-md w-fit truncate">
                {selectedImage.title}
              </div>
              <div className="w-full h-full flex items-center justify-center">
                <img
                  src={selectedImage.src}
                  alt={`${selectedImage.title} Certificate Large`}
                  className="max-w-full max-h-full object-contain rounded-xl shadow-2xl"
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}
