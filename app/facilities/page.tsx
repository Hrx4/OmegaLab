'use client';

import { motion } from 'motion/react';
import Image from 'next/image';
import { Microscope, FlaskConical, PenToolIcon as Tool, Factory, Beaker } from 'lucide-react';

const FACILITIES_DATA = [
  {
    id: 'mechanical',
    title: 'Mechanical Testing',
    icon: Tool,
    image: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=800&q=80',
    description: 'State-of-the-art mechanical testing ensuring the highest reliability in structural components. We test for tensile strength, impact, hardness, and metallurgical properties.',
    features: ['Tensile & Yield Strength', 'Impact Testing (Charpy/Izod)', 'Hardness Testing (Brinell, Rockwell, Vickers)', 'Microstructure Analysis']
  },
  {
    id: 'chemical',
    title: 'Chemical Analysis',
    icon: FlaskConical,
    image: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=800&q=80',
    description: 'Precision chemical testing for raw materials, alloys, water, and environmental samples using advanced spectroscopy and chromatography.',
    features: ['Optical Emission Spectroscopy (OES)', 'Wet Chemical Analysis', 'Water & Wastewater Testing', 'Polymer & Rubber Analysis']
  },
  {
    id: 'civil',
    title: 'Civil & Construction Materials Testing',
    icon: Factory,
    image: 'https://images.unsplash.com/photo-1541888087405-b31c4f553f19?auto=format&fit=crop&w=800&q=80',
    description: 'Comprehensive testing for construction materials ensuring compliance with building codes and infrastructure safety standards.',
    features: ['Cement & Concrete Testing', 'Soil & Aggregate Analysis', 'Bitumen Testing', 'Steel Rebar Testing']
  },
  {
    id: 'ndt',
    title: 'Non-Destructive Testing (NDT)',
    icon: Microscope,
    image: 'https://images.unsplash.com/photo-1581093458791-9d42e3c2fd45?auto=format&fit=crop&w=800&q=80',
    description: 'Advanced NDT services to evaluate the properties of a material, component, or system without causing damage.',
    features: ['Ultrasonic Testing (UT)', 'Radiography Testing (RT)', 'Magnetic Particle Testing (MPT)', 'Liquid Penetrant Testing (LPT)']
  }
];

export default function FacilitiesPage() {
  return (
    <div className="w-full bg-[#EFF6FF] min-h-screen pt-12 pb-24">
      {/* Header Section */}
      <div className="max-w-[1300px] mx-auto px-4 md:px-12 mb-16">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center font-black text-[32px] md:text-[48px] text-[#1E1B5C] font-oswald tracking-tight mb-4 uppercase"
        >
          Our <span className="text-[#FF6700]">Facilities</span>
        </motion.h1>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="w-24 h-1.5 bg-[#FF6700] mx-auto mb-8"
        ></motion.div>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center text-[16px] md:text-[18px] text-slate-700 max-w-3xl mx-auto leading-relaxed"
        >
          Equipped with world-class analytical instruments and a highly skilled technical team, OMEGALAB delivers precision testing across multiple disciplines to ensure your products meet global standards.
        </motion.p>
      </div>

      {/* Facilities List */}
      <div className="max-w-[1300px] mx-auto px-4 md:px-12 flex flex-col gap-12 md:gap-20">
        {FACILITIES_DATA.map((facility, index) => (
          <motion.div
            key={facility.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className={`flex flex-col ${index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-8 lg:gap-16 items-center`}
          >
            {/* Image Side */}
            <div className="w-full lg:w-1/2 relative">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl relative group">
                <div className="absolute inset-0 bg-[#1E1B5C]/10 group-hover:bg-transparent transition-colors z-10 duration-500"></div>
                <Image
                  src={facility.image}
                  alt={facility.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  unoptimized
                />
              </div>
              {/* Decorative elements */}
              <div className={`absolute -z-10 w-full h-full border-4 border-[#FF6700]/30 rounded-2xl top-4 ${index % 2 === 1 ? '-left-4' : '-right-4'}`}></div>
            </div>

            {/* Content Side */}
            <div className="w-full lg:w-1/2 flex flex-col">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-16 h-16 rounded-full bg-[#1E1B5C] flex items-center justify-center text-white shadow-lg shrink-0">
                  <facility.icon size={28} />
                </div>
                <h2 className="text-[24px] md:text-[32px] font-bold text-[#1E1B5C] font-oswald uppercase tracking-wide leading-tight">
                  {facility.title}
                </h2>
              </div>
              <p className="text-slate-700 text-[16px] leading-[1.7] mb-6">
                {facility.description}
              </p>

              <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-100">
                <h3 className="font-bold text-[#1E1B5C] mb-4 uppercase tracking-wider text-sm border-b pb-2">Key Capabilities</h3>
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
                      <Beaker size={16} className="text-[#FF6700] shrink-0 mt-0.5" />
                      <span className="text-[14px] text-slate-800 font-medium">{feature}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
