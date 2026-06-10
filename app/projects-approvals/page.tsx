'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import Image from 'next/image';
import { 
  Train, 
  Plane, 
  HelpCircle, 
  Columns, 
  Milestone, 
  Zap, 
  Home, 
  Building2, 
  FlaskConical, 
  Briefcase, 
  X, 
  ChevronLeft, 
  ChevronRight,
  ShieldCheck,
  CheckCircle2,
  FolderKanban
} from 'lucide-react';

import projectsData from '@/data/projects.json';

interface ProjectCategory {
  id: number;
  name: string;
  icon: any;
  description: string;
  images: string[];
}

const ICON_MAP: Record<string, any> = {
  Train,
  Plane,
  FolderKanban,
  Columns,
  Milestone,
  Zap,
  Home,
  Building2,
  FlaskConical,
  Briefcase
};

const CATEGORIES: ProjectCategory[] = projectsData.map((project: any) => ({
  id: project.id,
  name: project.name,
  icon: ICON_MAP[project.iconName] || FolderKanban,
  description: project.description,
  images: project.images || []
}));

export default function ProjectsApprovalPage() {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory | null>(null);
  const [currentImgIndex, setCurrentImgIndex] = useState(0);

  const openGallery = (category: ProjectCategory) => {
    setActiveCategory(category);
    setCurrentImgIndex(0);
  };

  const nextImg = (e: any) => {
    e.stopPropagation();
    if (!activeCategory) return;
    setCurrentImgIndex((prev) => (prev + 1) % activeCategory.images.length);
  };

  const prevImg = (e: any) => {
    e.stopPropagation();
    if (!activeCategory) return;
    setCurrentImgIndex((prev) => (prev - 1 + activeCategory.images.length) % activeCategory.images.length);
  };

  return (
    <div className="w-full bg-[#EFF6FF] min-h-screen pb-24 font-sans">
      {/* Hero Header */}
      <div className="bg-[#1E1B5C] text-white py-20 relative overflow-hidden">
        {/* Abstract Background pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute w-[500px] h-[500px] border-[50px] border-white rounded-full -top-32 -right-32"></div>
          <div className="absolute w-96 h-96 border-[40px] border-[#FF6700] rounded-full bottom-[-100px] left-[-100px]"></div>
        </div>

        <div className="max-w-[1300px] mx-auto px-4 md:px-8 relative z-10 flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="w-16 h-16 rounded-2xl bg-[#FF6700]/20 border border-[#FF6700]/30 flex items-center justify-center mb-6"
          >
            <FolderKanban size={32} className="text-[#FF6700]" />
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="font-black text-[32px] md:text-[52px] font-oswald tracking-tight uppercase leading-[1.1] mb-4"
          >
            Projects & <span className="text-[#FF6700]">Approvals</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-white/70 text-sm md:text-base max-w-2xl leading-relaxed italic"
          >
            Showcasing our concrete testing footprint, structural engineering audits, and government/private sector project credentials.
          </motion.p>
        </div>
      </div>

      <div className="max-w-[1300px] mx-auto px-4 md:px-8 py-16">
        


        {/* Categories Grid */}
        <div className="text-center mb-10">
          <h2 className="text-[#1E1B5C] font-black font-oswald text-3xl uppercase tracking-tight">
            Browse Projects by Category
          </h2>
          <p className="text-slate-500 text-sm mt-2">
            Click on any category to view project approval documents and capability details
          </p>
          <div className="w-12 h-1 bg-[#FF6700] mx-auto mt-4 rounded-full" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {CATEGORIES.map((cat, idx) => {
            const IconComponent = cat.icon;
            return (
              <motion.div
                key={cat.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: (idx % 4) * 0.1 }}
                onClick={() => openGallery(cat)}
                className="bg-white rounded-2xl border border-slate-100 shadow-md p-6 group hover:shadow-xl hover:border-[#FF6700]/30 hover:-translate-y-1 transition-all duration-300 cursor-pointer flex flex-col"
              >
                <div className="flex-1 flex flex-col justify-between">
                  <div>
                    <div className="w-12 h-12 rounded-xl bg-[#EFF6FF] text-[#1E1B5C] group-hover:bg-[#FF6700] group-hover:text-white flex items-center justify-center mb-5 transition-all duration-300 shadow-sm">
                      <IconComponent size={24} />
                    </div>
                    <h3 className="text-[#1E1B5C] font-black text-[18px] font-oswald tracking-wide leading-snug group-hover:text-[#FF6700] transition-colors mb-3">
                      {cat.name}
                    </h3>
                    <p className="text-slate-500 text-[13px] leading-relaxed">
                      {cat.description}
                    </p>
                  </div>
                  <div className="flex items-center justify-between border-t border-slate-100 pt-4 mt-6 text-[12px] font-bold">
                    <span className="text-[#FF6700]">{cat.images.length} Approval Documents</span>
                    <span className="text-[#1E1B5C] group-hover:translate-x-1.5 transition-transform flex items-center gap-1">
                      {cat.images.length > 0 ? 'View Docs ➔' : 'Coming Soon ➔'}
                    </span>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>

      {/* Gallery Lightbox Modal */}
      <AnimatePresence>
        {activeCategory && (
          <div className="fixed inset-0 bg-black/95 z-[9999] flex items-center justify-center p-4 backdrop-blur-sm">
            <div className="max-w-6xl w-full bg-[#0d0a31] border border-white/10 rounded-3xl overflow-hidden shadow-2xl lg:grid lg:grid-cols-12 lg:h-[80vh] relative flex flex-col h-[90vh]">
              {/* Close button inside modal (positioned absolute at top right of text panel on desktop, or top right of screen on mobile) */}
              <button
                onClick={() => setActiveCategory(null)}
                className="absolute top-4 right-4 text-white/70 hover:text-white bg-white/10 hover:bg-white/20 p-2 rounded-full transition-all duration-300 cursor-pointer z-50"
              >
                <X size={20} />
              </button>

              {/* Left Side: Image Slider (7 cols) */}
              <div className="lg:col-span-7 relative bg-black flex items-center justify-center h-[50%] lg:h-full group border-r border-white/5 flex-1 min-h-0">
                {activeCategory.images.length > 0 ? (
                  <>
                    <Image
                      src={activeCategory.images[currentImgIndex]}
                      alt={`${activeCategory.name} image ${currentImgIndex + 1}`}
                      fill
                      className="object-contain"
                      unoptimized
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/25 pointer-events-none" />

                    {/* Navigation arrows */}
                    {activeCategory.images.length > 1 && (
                      <>
                        <button
                          onClick={prevImg}
                          className="absolute left-4 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-black/40 hover:bg-[#FF6700] text-white flex items-center justify-center transition-all cursor-pointer backdrop-blur-sm border border-white/10 active:scale-95 z-20"
                        >
                          <ChevronLeft size={22} />
                        </button>
                        <button
                          onClick={nextImg}
                          className="absolute right-4 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-black/40 hover:bg-[#FF6700] text-white flex items-center justify-center transition-all cursor-pointer backdrop-blur-sm border border-white/10 active:scale-95 z-20"
                        >
                          <ChevronRight size={22} />
                        </button>
                      </>
                    )}

                    {/* Counter */}
                    <div className="absolute bottom-4 left-4 bg-black/60 px-3.5 py-1 rounded-full text-white/95 text-[11px] font-bold font-mono tracking-wider backdrop-blur-sm border border-white/5 z-20">
                      {currentImgIndex + 1} / {activeCategory.images.length}
                    </div>
                  </>
                ) : (
                  <div className="flex flex-col items-center justify-center text-white/40 h-full p-8 text-center gap-4">
                    <HelpCircle size={64} className="opacity-50" />
                    <h3 className="text-2xl font-black font-oswald uppercase tracking-wider text-white/70">Documents Coming Soon</h3>
                    <p className="text-sm max-w-sm">We are currently curating the best project approval documents for this category. Please check back later!</p>
                  </div>
                )}
              </div>

              {/* Right Side: Text & Metadata Panel (5 cols) */}
              <div className="lg:col-span-5 p-6 md:p-8 flex flex-col justify-between bg-[#0b082b] text-white shrink-0 overflow-y-auto lg:h-full">
                <div className="pr-4">
                  {/* Category Indicator */}
                  <span className="inline-block text-[#FF6700] text-[10px] font-black uppercase tracking-[2.5px] mb-3 px-3 py-1 bg-[#FF6700]/10 border border-[#FF6700]/20 rounded-full">
                    Category {activeCategory.id}
                  </span>
                  
                  {/* Title */}
                  <h2 className="font-oswald font-black text-2xl md:text-3xl uppercase tracking-wide text-white leading-tight mb-3">
                    {activeCategory.name} Gallery
                  </h2>
                  
                  {/* Divider */}
                  <div className="w-12 h-1 bg-[#FF6700] mb-5 rounded-full" />
                  

                  {/* Description */}
                  <p className="text-white/70 text-[13px] md:text-[14px] leading-relaxed mb-6">
                    {activeCategory.description}
                  </p>
                </div>

                {activeCategory.images.length > 0 && (
                  <div>
                    {/* Thumbnail Bar */}
                    <h4 className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-3">Approval Documents</h4>
                    <div className="flex gap-2.5 overflow-x-auto pb-2">
                      {activeCategory.images.map((img, idx) => (
                        <div
                          key={idx}
                          onClick={() => setCurrentImgIndex(idx)}
                          className={`relative w-16 h-16 rounded-xl overflow-hidden border-2 cursor-pointer transition-all shrink-0 ${
                            idx === currentImgIndex ? "border-[#FF6700] scale-105" : "border-transparent opacity-50 hover:opacity-100"
                          }`}
                        >
                          <Image
                            src={img}
                            alt="thumbnail"
                            fill
                            className="object-cover"
                            unoptimized
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
