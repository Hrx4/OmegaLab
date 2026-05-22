'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import Image from 'next/image';
import Link from 'next/link';
import { Microscope, FlaskConical, PenToolIcon as Tool, Factory, Beaker, ChevronLeft, ChevronRight } from 'lucide-react';
import materialsRaw from '../../data/materials.json';
import facilitiesData from '../../data/facilities.json';
import TestingModal, { type MaterialItem } from '../../components/TestingModal';

const materials = materialsRaw as MaterialItem[];

const ICON_MAP = {
  Tool,
  FlaskConical,
  Factory,
  Microscope,
};

// ── Facility Image Slider Component ──────────────────────────────────────────
function FacilityImageSlider({ images, title }: { images: string[]; title: string }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (images.length <= 1) return;
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 4500); // Auto-slide every 4.5 seconds

    return () => clearInterval(timer);
  }, [currentIndex, images.length]);

  const nextSlide = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevSlide = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  if (!images || images.length === 0) return null;

  return (
    <div className="relative w-full h-full group overflow-hidden">
      {/* Top & Bottom Shading Gradients for UI Contrast */}
      <div className="absolute inset-x-0 top-0 h-14 bg-gradient-to-b from-black/25 to-transparent pointer-events-none z-10" />
      <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-black/45 to-transparent pointer-events-none z-10" />
      
      {/* Ambient Overlay */}
      <div className="absolute inset-0 bg-[#1E1B5C]/5 pointer-events-none z-10 transition-colors duration-500 group-hover:bg-transparent" />
      
      {/* Images container */}
      <div className="absolute inset-0">
        <AnimatePresence initial={false} mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            className="absolute inset-0"
          >
            <Image
              src={images[currentIndex]}
              alt={`${title} - Image ${currentIndex + 1}`}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-700"
              unoptimized
            />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation Arrows */}
      {images.length > 1 && (
        <>
          <button
            onClick={prevSlide}
            className="absolute left-3 top-1/2 -translate-y-1/2 z-20 w-9 h-9 rounded-full bg-black/35 hover:bg-[#FF6700] text-white flex items-center justify-center transition-all opacity-0 group-hover:opacity-100 cursor-pointer backdrop-blur-sm border border-white/10 hover:scale-105 active:scale-95"
            aria-label="Previous slide"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-3 top-1/2 -translate-y-1/2 z-20 w-9 h-9 rounded-full bg-black/35 hover:bg-[#FF6700] text-white flex items-center justify-center transition-all opacity-0 group-hover:opacity-100 cursor-pointer backdrop-blur-sm border border-white/10 hover:scale-105 active:scale-95"
            aria-label="Next slide"
          >
            <ChevronRight size={20} />
          </button>
        </>
      )}

      {/* Dots Indicator */}
      {images.length > 1 && (
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex gap-1.5 bg-black/25 px-3 py-1.5 rounded-full backdrop-blur-sm border border-white/5">
          {images.map((_, idx) => (
            <button
              key={idx}
              onClick={(e) => {
                e.stopPropagation();
                setCurrentIndex(idx);
              }}
              className={`h-1.5 rounded-full transition-all cursor-pointer ${
                idx === currentIndex ? 'w-4 bg-[#FF6700]' : 'w-1.5 bg-white/50 hover:bg-white'
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}

// ── Filter definitions ──────────────────────────────────────────────────────
const TC11935_FILTERS = ["All", "Metals & Steel", "Geotextiles", "Plastic", "NDT Services"];
const TC13401_FILTERS = ["All", "Cement & Concrete", "Water", "NDT Services"];

// ── NABL Certificate segments ────────────────────────────────────────────────
const TC11935_CERT = "TC-11935";
const TC13401_CERT = "TC-13401";

// Split materials by cert (items with "/ " belong to both but we show them in each)
const tc11935Items = materials.filter((m) =>
  m.nablCert?.includes("TC-11935")
);
const tc13401Items = materials.filter((m) =>
  m.nablCert?.includes("TC-13401")
);

// ── Card Component ───────────────────────────────────────────────────────────
function MaterialCard({ svc, onClick }: { svc: MaterialItem; onClick: () => void }) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.96 }}
      transition={{ duration: 0.22 }}
      onClick={onClick}
      className="bg-white rounded-xl p-4 flex items-center gap-3 border-2 border-transparent hover:border-[#FF6700] hover:-translate-y-1 hover:shadow-[0_8px_20px_rgba(0,0,0,0.06)] transition-all cursor-pointer group"
    >
      <div className="w-11 h-11 bg-[#EFF6FF] group-hover:bg-[#FF6700]/10 rounded-lg flex items-center justify-center text-[20px] shrink-0 transition-colors">
        {svc.icon}
      </div>
      <div className="flex-1 min-w-0">
        <div className="text-[13px] font-bold text-[#1E1B5C] leading-snug">{svc.name}</div>
        {svc.testType && (
          <div className="text-[10px] text-slate-400 font-semibold mt-0.5 truncate">{svc.testType}</div>
        )}
      </div>
      <span className="text-[10px] text-[#1E1B5C]/30 group-hover:text-[#FF6700] transition-colors shrink-0 font-bold">›</span>
    </motion.div>
  );
}

// ── Filterable Grid Section ──────────────────────────────────────────────────
function CertSection({
  certNo,
  facilityLabel,
  description,
  filters,
  items,
  color,
  onSelect,
}: {
  certNo: string;
  facilityLabel: string;
  description: string;
  filters: string[];
  items: MaterialItem[];
  color: string;
  onSelect: (m: MaterialItem) => void;
}) {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredItems =
    activeFilter === "All"
      ? items
      : items.filter((m) => m.category.includes(activeFilter));

  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6 }}
      className="mb-20"
    >
      {/* Segment Header */}
      <div className="rounded-2xl overflow-hidden mb-8 shadow-sm">
        <div className={`bg-gradient-to-r ${color} px-6 py-5 flex flex-col sm:flex-row sm:items-center gap-4`}>
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-1">
              <span className="inline-block text-[11px] font-black uppercase tracking-[1.5px] px-3 py-0.5 rounded-full bg-white/20 text-white border border-white/25">
                Under Permanent Facility
              </span>
            </div>
            <h2 className="text-white font-black text-[22px] md:text-[28px] font-oswald tracking-tight">
              {facilityLabel}
            </h2>
            <p className="text-white/70 text-[13px] mt-0.5">{description}</p>
          </div>
          <div className="shrink-0 text-right">
            <div className="text-white/60 text-[10px] uppercase tracking-widest font-bold mb-0.5">NABL Certificate No.</div>
            <div className="text-white font-black text-[22px] font-oswald tracking-wider">{certNo}</div>
          </div>
        </div>
      </div>

      {/* Filter Pills */}
      <div className="flex flex-wrap gap-2 mb-6">
        {filters.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveFilter(tab)}
            className={`px-4 py-2 rounded-full border-2 text-[12px] font-bold cursor-pointer transition-all ${
              activeFilter === tab
                ? "bg-[#FF6700] border-[#FF6700] text-white shadow-md shadow-[#FF6700]/20"
                : "bg-white border-slate-200 text-[#1E1B5C] hover:bg-[#FF6700] hover:text-white hover:border-[#FF6700]"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Count badge */}
      <div className="text-[11px] font-semibold text-slate-400 mb-4">
        Showing <span className="text-[#1E1B5C] font-bold">{filteredItems.length}</span> test service{filteredItems.length !== 1 ? 's' : ''}
      </div>

      {/* Cards Grid */}
      <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        <AnimatePresence mode="popLayout">
          {filteredItems.map((svc) => (
            <MaterialCard key={svc.name} svc={svc} onClick={() => onSelect(svc)} />
          ))}
        </AnimatePresence>
      </motion.div>
    </motion.section>
  );
}

// (Removed FullServicesSection)

// ── Page ─────────────────────────────────────────────────────────────────────
export default function FacilitiesPage() {
  const [selectedMaterial, setSelectedMaterial] = useState<MaterialItem | null>(null);

  return (
    <div className="w-full bg-[#EFF6FF] min-h-screen pt-12 pb-24">
      {/* Page Header */}
      <div className="max-w-[1300px] mx-auto px-4 md:px-12 mb-14">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center font-black text-[32px] md:text-[48px] text-[#1E1B5C] font-oswald tracking-tight mb-3 uppercase"
        >
          Our <span className="text-[#FF6700]">Facilities</span>
        </motion.h1>
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="w-20 h-1.5 bg-[#FF6700] mx-auto mb-6 rounded-full"
        />
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center text-[15px] md:text-[17px] text-slate-600 max-w-3xl mx-auto leading-relaxed"
        >
          Equipped with world-class analytical instruments and a highly skilled technical team, OMEGALAB delivers precision testing across multiple disciplines to ensure your products meet global standards.
        </motion.p>

        {/* Quick links */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-wrap justify-center gap-3 mt-8"
        >
          {[
            { label: "Jump to TC-11935", href: "#tc11935" },
            { label: "Jump to TC-13401", href: "#tc13401" },
          ].map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="px-5 py-2 rounded-full border-2 border-[#1E1B5C]/15 bg-white text-[12px] font-bold text-[#1E1B5C] hover:border-[#FF6700] hover:text-[#FF6700] transition-colors"
            >
              {link.label} ↓
            </a>
          ))}
          <Link
            href="/#contact"
            className="px-5 py-2 rounded-full bg-[#FF6700] border-2 border-[#FF6700] text-[12px] font-bold text-white hover:bg-[#e65c00] transition-colors"
          >
            Enquire Now →
          </Link>
        </motion.div>
      </div>

      {/* NABL Certificate Segments */}
      <div className="max-w-[1300px] mx-auto px-4 md:px-12">
        <div id="tc11935">
          <CertSection
            certNo={TC11935_CERT}
            facilityLabel="Metals, Geosynthetics & NDT Laboratory"
            description="Advanced mechanical & chemical testing for ferrous / non-ferrous metals, geosynthetics, plastic pipes and non-destructive evaluation."
            filters={TC11935_FILTERS}
            items={tc11935Items}
            color="from-[#1E1B5C] to-[#2d2890]"
            onSelect={setSelectedMaterial}
          />
        </div>

        <div id="tc13401">
          <CertSection
            certNo={TC13401_CERT}
            facilityLabel="Construction Materials, Water & Civil Laboratory"
            description="Comprehensive testing for cement, concrete, aggregates, soil, bitumen, water, and other civil engineering materials."
            filters={TC13401_FILTERS}
            items={tc13401Items}
            color="from-[#b34500] to-[#FF6700]"
            onSelect={setSelectedMaterial}
          />
        </div>
      </div>



      {/* ── Detailed Laboratory Facility Sections ──────────────────────────── */}
      <div className="max-w-[1300px] mx-auto px-4 md:px-12 mt-8 mb-12">
        <div className="text-center mb-10 md:mb-16">
          <h2 className="text-[24px] md:text-[34px] font-black text-[#1E1B5C] mb-2 font-oswald tracking-tight uppercase">
            Accredited Laboratory Infrastructure
          </h2>
          <p className="text-[13px] md:text-[15px] text-slate-500 max-w-2xl mx-auto">
            Explore the detailed capabilities and key features of our specialized testing divisions
          </p>
          <div className="w-[60px] h-[3.5px] bg-[#FF6700] mx-auto mt-3 rounded-full" />
        </div>

        <div className="flex flex-col gap-16 md:gap-24">
          {facilitiesData.map((facility, index) => {
            const IconComponent = ICON_MAP[facility.icon as keyof typeof ICON_MAP] || Tool;
            return (
              <motion.div
                key={facility.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.7 }}
                className={`flex flex-col ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'
                } gap-8 lg:gap-16 items-center`}
              >
                {/* Image Side */}
                <div className="w-full lg:w-1/2 relative">
                  <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl relative">
                    <FacilityImageSlider images={facility.images} title={facility.title} />
                  </div>
                  <div
                    className={`absolute -z-10 w-full h-full border-4 border-[#FF6700]/30 rounded-2xl top-4 ${
                      index % 2 === 1 ? '-left-4' : '-right-4'
                    }`}
                  />
                </div>

                {/* Content Side */}
                <div className="w-full lg:w-1/2 flex flex-col">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-16 h-16 rounded-full bg-[#1E1B5C] flex items-center justify-center text-white shadow-lg shrink-0">
                      <IconComponent size={28} />
                    </div>
                    <h3 className="text-[22px] md:text-[30px] font-bold text-[#1E1B5C] font-oswald uppercase tracking-wide leading-tight">
                      {facility.title}
                    </h3>
                  </div>
                  <p className="text-slate-600 text-[15px] leading-[1.75] mb-6">
                    {facility.description}
                  </p>
                  <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-100">
                    <h4 className="font-bold text-[#1E1B5C] mb-4 uppercase tracking-wider text-[12px] border-b pb-2">
                      Key Capabilities
                    </h4>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {facility.features.map((feature, idx) => (
                        <motion.li
                          key={idx}
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.4, delay: 0.1 * idx }}
                          className="flex items-start gap-2"
                        >
                          <Beaker size={15} className="text-[#FF6700] shrink-0 mt-0.5" />
                          <span className="text-[13px] text-slate-700 font-medium">{feature}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Shared Modal */}
      <TestingModal material={selectedMaterial} onClose={() => setSelectedMaterial(null)} />
    </div>
  );

}
