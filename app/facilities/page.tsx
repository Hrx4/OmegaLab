'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Microscope, FlaskConical, PenToolIcon as Tool, Factory, Beaker, ChevronLeft, ChevronRight, Search, X, HelpCircle } from 'lucide-react';
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
const TC11935_FILTERS = ["All", "Metals & Steel", "Geotextiles", "Plastic", "Building Material"];
const TC13401_FILTERS = ["All", "Cement & Concrete", "Water", "NDT Services"];
const TC17671_FILTERS = ["All", "Cement & Concrete", "Metals & Steel", "Water"];
const TC15509_FILTERS = ["All", "Cement & Concrete"];

// ── NABL Certificate segments ────────────────────────────────────────────────
const TC11935_CERT = "TC-11935";
const TC13401_CERT = "TC-13401";
const TC17671_CERT = "TC-17671";
const TC15509_CERT = "TC-15509";

// Split materials by cert (items with "/ " belong to both but we show them in each)
const tc11935Items = materials.filter((m) =>
  m.nablCert?.includes("TC-11935")
);
const tc13401Items = materials.filter((m) =>
  m.nablCert?.includes("TC-13401")
);
const tc17671Items = materials.filter((m) =>
  m.nablCert?.includes("TC-17671")
);
const tc15509Items = materials.filter((m) =>
  m.nablCert?.includes("TC-15509")
);

// ── Card Component ───────────────────────────────────────────────────────────
function MaterialCard({
  svc,
  isSelected,
  onOpenModal,
}: {
  svc: MaterialItem;
  isSelected: boolean;
  onOpenModal: () => void;
}) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.96 }}
      transition={{ duration: 0.22 }}
      onClick={onOpenModal}
      className={`bg-white rounded-xl p-4 flex items-center justify-between gap-3 border-2 hover:-translate-y-1 hover:shadow-[0_8px_20px_rgba(0,0,0,0.06)] transition-all cursor-pointer group relative ${
        isSelected ? "border-[#FF6700] shadow-[0_4px_12px_rgba(255,103,0,0.15)]" : "border-transparent hover:border-[#FF6700]/60"
      }`}
    >
      {/* Info: open modal */}
      <div className="flex items-center gap-3 flex-1 min-w-0">
        <div className={`w-11 h-11 rounded-lg flex items-center justify-center text-[20px] shrink-0 transition-colors ${
          isSelected ? "bg-[#FF6700]/10" : "bg-[#EFF6FF] group-hover:bg-[#FF6700]/10"
        }`}>
          {svc.icon}
        </div>
        <div className="flex-1 min-w-0 pr-1">
          <div className={`text-[13px] font-bold leading-snug ${
            isSelected ? "text-[#FF6700]" : "text-[#1E1B5C]"
          }`}>
            {svc.name.replace(/\s*\((Siliguri|Odisha|Odissa)\)\s*/gi, '')}
          </div>
          {svc.testType && (
            <div className="text-[10px] text-slate-400 font-semibold mt-0.5 truncate">{svc.testType}</div>
          )}
        </div>
      </div>

      {/* Arrow indicator at the right */}
      <div
        className={`w-7 h-7 rounded-full flex items-center justify-center border transition-all text-[14px] shrink-0 font-bold ${
          isSelected
            ? "bg-[#FF6700] border-[#FF6700] text-white"
            : "bg-slate-50 border-slate-100 text-[#1E1B5C]/30 group-hover:bg-[#FF6700] group-hover:text-white group-hover:border-[#FF6700]"
        }`}
      >
        ➔
      </div>
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
  facilityType = "Under Permanent Facility",
  labName,
  selectedServices,
  onToggleService,
}: {
  certNo: string;
  facilityLabel: string;
  description: string;
  filters: string[];
  items: MaterialItem[];
  color: string;
  onSelect: (m: MaterialItem) => void;
  facilityType?: string;
  labName: string;
  selectedServices: string[];
  onToggleService: (svcName: string) => void;
}) {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredItems =
    activeFilter === "All"
      ? items
      : items.filter((m) => {
          const categoryToMatch = activeFilter === "Building Material" ? "Cement & Concrete" : activeFilter;
          return m.category.includes(categoryToMatch);
        });

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
                {facilityType}
              </span>
            </div>
            <h2 className="text-white font-black text-[22px] md:text-[28px] font-oswald tracking-tight">
              {facilityLabel}
            </h2>
            <p className="text-white/70 text-[13px] mt-0.5">{description}</p>
          </div>

          <div className="shrink-0 bg-white/10 backdrop-blur-sm border border-white/25 rounded-2xl px-6 py-3.5 text-center flex items-center justify-center min-w-[120px] self-start sm:self-auto shadow-inner">
            <span className="text-white text-[20px] font-black font-oswald tracking-wide uppercase leading-none">
              {labName}
            </span>
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
            <MaterialCard
              key={svc.name}
              svc={svc}
              isSelected={selectedServices.includes(svc.name)}
              onOpenModal={() => onSelect(svc)}
            />
          ))}
        </AnimatePresence>
      </motion.div>
    </motion.section>
  );
}

// (Removed FullServicesSection)

// ── Page ─────────────────────────────────────────────────────────────────────
export default function FacilitiesPage() {
  const router = useRouter();
  const [selectedMaterial, setSelectedMaterial] = useState<MaterialItem | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [selectedParameters, setSelectedParameters] = useState<Record<string, string[]>>({});
  const [selectionSaved, setSelectionSaved] = useState(false);

  useEffect(() => {
    const handleOutsideClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target.closest(".search-container-el")) {
        setShowDropdown(false);
      }
    };
    document.addEventListener("mousedown", handleOutsideClick);
    return () => document.removeEventListener("mousedown", handleOutsideClick);
  }, []);

  const searchResults = searchQuery.trim() === "" ? [] : materials.filter(m => {
    const query = searchQuery.toLowerCase();
    const nameMatch = m.name.toLowerCase().includes(query);
    const paramMatch = m.parameters?.some(p => p.toLowerCase().includes(query));
    return nameMatch || paramMatch;
  });

  return (
    <div className="w-full bg-[#EFF6FF] min-h-screen pt-12 pb-24">
      {/* Page Header */}
      <div className="max-w-[1300px] mx-auto px-4 md:px-12 mb-14">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center font-black text-[32px] md:text-[48px] text-[#1E1B5C] font-oswald tracking-tight mb-3 uppercase flex items-center justify-center gap-2 relative group"
        >
          <span>Our <span className="text-[#FF6700]">Facilities</span></span>
          <span className="relative inline-flex items-center">
            <HelpCircle size={20} className="text-[#1E1B5C]/30 cursor-pointer hover:text-[#FF6700] transition-colors" />
            {/* Tooltip */}
            <span className="absolute left-1/2 -translate-x-1/2 top-8 hidden group-hover:block z-[9999] bg-[#1E1B5C] text-white text-[11px] font-medium normal-case tracking-normal p-3 rounded-lg shadow-xl w-[260px] leading-normal border border-white/10 text-center font-sans">
              You can select multiple services and parameters, add them to your selection basket, and go to the form to enquire about all of them together.
            </span>
          </span>
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
          Equipped with world-class analytical instruments and a highly skilled technical team, OMEGALAB delivers precision testing across multiple disciplines to ensure your products meet national or international standards & product specification.
        </motion.p>

        {/* Interactive Search Bar */}
        <div className="search-container-el relative w-full max-w-xl mx-auto mt-8 mb-2 z-50">
          <div className="relative flex items-center">
            <Search className="absolute left-4 text-[#1E1B5C]/40" size={18} />
            <input
              type="text"
              placeholder="Search 900+ parameters or testing services (e.g. Concrete, Steel...)"
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                setShowDropdown(true);
              }}
              onFocus={() => setShowDropdown(true)}
              className="w-full pl-12 pr-12 py-3.5 bg-white border-2 border-[#1E1B5C]/10 rounded-full text-[14px] text-[#1E1B5C] placeholder-[#1E1B5C]/40 font-semibold focus:outline-none focus:border-[#FF6700] focus:shadow-[0_0_15px_rgba(255,103,0,0.15)] transition-all shadow-sm"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => {
                  setSearchQuery("");
                  setShowDropdown(false);
                }}
                className="absolute right-4 text-[#1E1B5C]/40 hover:text-[#FF6700] p-1 rounded-full hover:bg-slate-100 transition-colors"
              >
                <X size={16} />
              </button>
            )}
          </div>

          {/* Dropdown Results */}
          {showDropdown && searchQuery.trim() !== "" && (
            <div className="absolute left-0 right-0 top-full mt-2 bg-white rounded-2xl shadow-2xl border border-slate-100 z-[100] max-h-[320px] overflow-y-auto py-2 text-left">
              {searchResults.length > 0 ? (
                searchResults.map((m, idx) => {
                  const query = searchQuery.toLowerCase();
                  const matchedParams = m.parameters?.filter(p => p.toLowerCase().includes(query)) || [];
                  return (
                    <div
                      key={idx}
                      onClick={() => {
                        setSelectedMaterial(m);
                        setShowDropdown(false);
                      }}
                      className="px-5 py-3 hover:bg-[#EFF6FF] transition-colors cursor-pointer border-b border-slate-50 last:border-b-0 flex items-start gap-3.5 group"
                    >
                      <div className="w-9 h-9 rounded-lg bg-[#EFF6FF] group-hover:bg-[#FF6700]/10 flex items-center justify-center text-[18px] shrink-0 transition-colors">
                        {m.icon}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between gap-2">
                          <span className="font-bold text-[13px] text-[#1E1B5C] group-hover:text-[#FF6700] transition-colors truncate">
                            {m.name.replace(/\s*\((Siliguri|Odisha|Odissa)\)\s*/gi, '')}
                          </span>
                        </div>
                        {matchedParams.length > 0 ? (
                          <div className="text-[11px] text-[#FF6700] font-semibold mt-0.5">
                            Parameters: <span className="text-slate-500 font-medium">{matchedParams.slice(0, 3).join(", ")}{matchedParams.length > 3 ? "..." : ""}</span>
                          </div>
                        ) : (
                          <div className="text-[11px] text-slate-400 mt-0.5">
                            {m.testType || "Material"} Testing
                          </div>
                        )}
                      </div>
                    </div>
                  );
                })
              ) : (
                <div className="px-5 py-6 text-center text-slate-400 text-[13px] italic">
                  No parameters or services match &quot;{searchQuery}&quot;
                </div>
              )}
            </div>
          )}
        </div>

        {/* Quick links */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-wrap justify-center gap-3 mt-8"
        >
          {[
            { label: "Kolkata 1 - Metals & NDT Lab", href: "#tc11935" },
            { label: "Kolkata 2 - Construction & Water Lab", href: "#tc13401" },
            { label: "Siliguri - Building & Construction Lab", href: "#tc15509" },
            { label: "Odisha - Chemical, Mechanical & Water Lab", href: "#tc17671" },
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
            href="/#enquiry"
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
            facilityLabel="Building Material, Metal, Plastic & Textile Testing Services"
            description="Advanced mechanical & chemical testing for ferrous / non-ferrous metals, geosynthetics, plastic pipes and non-destructive evaluation."
            filters={TC11935_FILTERS}
            items={tc11935Items}
            color="from-[#1E1B5C] to-[#2d2890]"
            onSelect={setSelectedMaterial}
            facilityType="Under Permanent Facility"
            labName="Kolkata 1"
            selectedServices={selectedServices}
            onToggleService={(svcName) => {
              setSelectedServices(prev =>
                prev.includes(svcName) ? prev.filter(n => n !== svcName) : [...prev, svcName]
              );
              if (!selectedParameters[svcName]) {
                setSelectedParameters(prev => ({ ...prev, [svcName]: [] }));
              }
              setSelectionSaved(false);
            }}
          />
        </div>

        <div id="tc13401">
          <CertSection
            certNo={TC13401_CERT}
            facilityLabel="Water, NDT, Building & Construction Material testing services"
            description="Comprehensive testing for cement, concrete, aggregates, soil, bitumen, water, and other civil engineering materials."
            filters={TC13401_FILTERS}
            items={tc13401Items}
            color="from-[#b34500] to-[#FF6700]"
            onSelect={setSelectedMaterial}
            facilityType="Permanent & Site Facility"
            labName="Kolkata 2"
            selectedServices={selectedServices}
            onToggleService={(svcName) => {
              setSelectedServices(prev =>
                prev.includes(svcName) ? prev.filter(n => n !== svcName) : [...prev, svcName]
              );
              if (!selectedParameters[svcName]) {
                setSelectedParameters(prev => ({ ...prev, [svcName]: [] }));
              }
              setSelectionSaved(false);
            }}
          />
        </div>

        <div id="tc15509" className="mt-16">
          <CertSection
            certNo={TC15509_CERT}
            facilityLabel="Building & Construction Material Testing Services"
            description="Comprehensive testing for concrete, cement, bricks, tiles, putty, fly ash, and aggregate materials."
            filters={TC15509_FILTERS}
            items={tc15509Items}
            color="from-[#FF6700] via-[#ff8c3a] to-[#1E1B5C]"
            onSelect={setSelectedMaterial}
            facilityType="Permanent & Site Facility"
            labName="Siliguri"
            selectedServices={selectedServices}
            onToggleService={(svcName) => {
              setSelectedServices(prev =>
                prev.includes(svcName) ? prev.filter(n => n !== svcName) : [...prev, svcName]
              );
              if (!selectedParameters[svcName]) {
                setSelectedParameters(prev => ({ ...prev, [svcName]: [] }));
              }
              setSelectionSaved(false);
            }}
          />
        </div>

        <div id="tc17671" className="mt-16">
          <CertSection
            certNo={TC17671_CERT}
            facilityLabel="Chemical, Mechanical & Construction Material Testing Services"
            description="Comprehensive testing for metals, concrete, brick, tiles, soil, rock, bentonite, and water quality parameters."
            filters={TC17671_FILTERS}
            items={tc17671Items}
            color="from-[#1E1B5C] via-[#2d2890] to-[#FF6700]"
            onSelect={setSelectedMaterial}
            facilityType="Permanent & Site Facility"
            labName="Odisha"
            selectedServices={selectedServices}
            onToggleService={(svcName) => {
              setSelectedServices(prev =>
                prev.includes(svcName) ? prev.filter(n => n !== svcName) : [...prev, svcName]
              );
              if (!selectedParameters[svcName]) {
                setSelectedParameters(prev => ({ ...prev, [svcName]: [] }));
              }
              setSelectionSaved(false);
            }}
          />
        </div>


        {/* Selected Parameters Panel */}
        {selectedServices.length > 0 && (
          <div className="mt-8 rounded-2xl border-2 border-[#FF6700]/25 bg-[#FF6700]/[0.03] p-6 text-left">
            <div className="flex items-center justify-between mb-5 flex-wrap gap-3">
              <div>
                <h3 className="text-[16px] font-black text-[#1E1B5C]">Selected Services & Parameters</h3>
                <p className="text-[12px] text-[#1E1B5C]/50 mt-0.5">Select parameters for each service below — scroll up anytime to add more services</p>
              </div>
              <button
                type="button"
                onClick={() => { setSelectedServices([]); setSelectedParameters({}); setSelectionSaved(false); }}
                className="text-[11px] font-bold text-slate-400 hover:text-red-500 transition-colors cursor-pointer"
              >✕ Clear All</button>
            </div>

            <div className="flex flex-col gap-6">
              {selectedServices.map(svcName => {
                const svcData = materials.find(m => m.name === svcName);
                const params = svcData?.parameters ?? [];
                const chosenParams = selectedParameters[svcName] ?? [];
                return (
                  <div key={svcName} className="bg-white rounded-xl p-4 border border-slate-100 shadow-sm">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-2">
                        <span className="text-[18px]">{svcData?.icon}</span>
                        <span className="text-[13px] font-black text-[#1E1B5C]">{svcName.replace(/\s*\((Siliguri|Odisha|Odissa)\)\s*/gi, '')}</span>
                        {chosenParams.length > 0 && (
                          <span className="text-[10px] font-bold text-white bg-[#FF6700] px-2 py-0.5 rounded-full">{chosenParams.length} selected</span>
                        )}
                      </div>
                      <button
                        type="button"
                        onClick={() => {
                          setSelectedServices(prev => prev.filter(n => n !== svcName));
                          setSelectedParameters(prev => { const c = { ...prev }; delete c[svcName]; return c; });
                          setSelectionSaved(false);
                        }}
                        className="text-[11px] text-slate-400 hover:text-red-500 font-bold transition-colors cursor-pointer"
                      >✕ Remove</button>
                    </div>
                    {params.length > 0 ? (
                      <div className="flex flex-wrap gap-2">
                        {params.map(param => {
                          const isChosen = chosenParams.includes(param);
                          return (
                            <button
                              key={param}
                              type="button"
                              onClick={() => {
                                setSelectedParameters(prev => ({
                                  ...prev,
                                  [svcName]: isChosen
                                    ? (prev[svcName] ?? []).filter(p => p !== param)
                                    : [...(prev[svcName] ?? []), param]
                                }));
                                setSelectionSaved(false);
                              }}
                              className={`px-3 py-1.5 rounded-full text-[11px] font-semibold border transition-all cursor-pointer ${
                                isChosen
                                  ? "bg-[#FF6700] border-[#FF6700] text-white"
                                  : "bg-slate-50 border-slate-200 text-[#1E1B5C] hover:border-[#FF6700] hover:text-[#FF6700]"
                              }`}
                            >
                              {isChosen ? "✓ " : ""}{param}
                            </button>
                          );
                        })}
                      </div>
                    ) : (
                      <p className="text-[12px] text-slate-400 italic">No specific parameters listed — full service will be enquired.</p>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        )}
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
      <TestingModal
        material={selectedMaterial}
        onClose={() => setSelectedMaterial(null)}
        onAddToSelection={(serviceName, params) => {
          setSelectedServices(prev =>
            prev.includes(serviceName) ? prev : [...prev, serviceName]
          );
          setSelectedParameters(prev => ({
            ...prev,
            [serviceName]: params
          }));
          setSelectionSaved(false);
        }}
      />

      {/* ── Sticky Enquiry Floating Bar ─────────────────────────────────────── */}
      {selectedServices.length > 0 && (
        <div className="fixed bottom-0 left-0 right-0 z-[999] pointer-events-none">
          <div className="max-w-[1300px] mx-auto px-4 pb-4 md:pb-6 flex justify-center pointer-events-none">
            <div className="pointer-events-auto flex items-center justify-between gap-3 sm:gap-4 bg-[#1E1B5C] shadow-[0_-4px_30px_rgba(30,27,92,0.35)] rounded-xl sm:rounded-2xl px-3 py-2.5 sm:px-5 sm:py-3.5 border border-white/10 backdrop-blur-sm max-w-full">
              {/* Service count summary */}
              <div className="flex items-center gap-1.5 shrink-0 max-w-[200px] sm:max-w-[400px] overflow-hidden">
                <FlaskConical size={14} className="text-[#FF6700] shrink-0" />
                <span className="text-white text-[11px] sm:text-[12px] font-bold">
                  {selectedServices.length} service{selectedServices.length > 1 ? "s" : ""} selected
                </span>
                <div className="hidden lg:flex gap-1.5 flex-wrap ml-1">
                  {selectedServices.slice(0, 2).map(s => (
                    <span key={s} className="text-[10px] font-semibold bg-white/10 text-white/80 px-2 py-0.5 rounded-full truncate max-w-[100px]">{s}</span>
                  ))}
                  {selectedServices.length > 2 && (
                    <span className="text-[10px] font-bold text-[#FF6700]">+{selectedServices.length - 2} more</span>
                  )}
                </div>
              </div>
              <div className="hidden sm:block w-px h-6 bg-white/15 shrink-0" />
              {/* Clear */}
              <button
                type="button"
                onClick={() => { setSelectedServices([]); setSelectedParameters({}); setSelectionSaved(false); }}
                className="text-[10px] sm:text-[11px] text-white/50 hover:text-red-400 font-bold transition-colors shrink-0 cursor-pointer"
              >✕ Clear</button>

              <button
                type="button"
                onClick={() => {
                  const serviceNames = selectedServices.join(", ");
                  const allParams = Object.entries(selectedParameters)
                    .flatMap(([svc, params]) =>
                      params.length > 0 ? params.map(p => `[${svc}] ${p}`) : []
                    );
                  const query = new URLSearchParams();
                  query.set("service", serviceNames);
                  query.set("parameters", allParams.join("||"));
                  setSelectedServices([]);
                  setSelectedParameters({});
                  router.push(`/?${query.toString()}#enquiry`);
                }}
                className="px-4 py-2 sm:px-6 sm:py-2.5 bg-gradient-to-r from-[#FF6700] to-[#ff8c3a] hover:from-[#e65c00] hover:to-[#ff7a22] text-white font-black uppercase tracking-[1px] text-[11px] sm:text-[12px] rounded-lg sm:rounded-xl hover:shadow-[0_4px_20px_rgba(255,103,0,0.5)] transition-all shrink-0 cursor-pointer"
              >
                Go to Enquiry Form →
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
