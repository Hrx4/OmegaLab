'use client';

import { motion } from 'motion/react';
import Image from 'next/image';
import { useParams } from 'next/navigation';
import { Wrench, Beaker, CheckCircle, Factory, ShieldCheck, Microscope } from 'lucide-react';
import Link from 'next/link';

type InfrastructureKey = 'mechanical' | 'chemical' | 'civil' | 'ndt';

const INFRASTRUCTURE_DATA = {
  mechanical: {
    title: 'Mechanical Lab Testing Instruments',
    subtitle: 'Precision Physical Characteristics Evaluation',
    description: 'Our mechanical testing laboratory is equipped with state-of-the-art instruments to determine the physical and mechanical properties of materials. From high-capacity universal testing machines to precision hardness testers, we ensure the highest accuracy in material characterization for manufacturing and construction components.',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1200&q=80',
    icon: Wrench,
    instruments: [
      { name: 'Universal Testing Machine (UTM)', uses: 'Tensile, Compression, Bending, and Shear tests on metals, polymers, and composites.' },
      { name: 'Impact Testing Machine', uses: 'Charpy and Izod impact strength evaluation for toughness measurement.' },
      { name: 'Hardness Testers', uses: 'Brinell, Rockwell, and Vickers microhardness measurements.' },
      { name: 'Fatigue Testing Machine', uses: 'High cycle and low cycle fatigue life determination.' },
      { name: 'Optical Emission Spectrometer', uses: 'Chemical composition analysis of metallic samples to verify grades.' },
    ]
  },
  chemical: {
    title: 'Chemical Lab Testing Instruments',
    subtitle: 'Advanced Analytical Diagnostics',
    description: 'The chemical laboratory is backed by advanced analytical instruments that provide precise quantification of chemical components. We maintain a high level of calibration to perform complex analysis for water, metals, alloys, environmental samples, and industrial compounds.',
    image: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=1200&q=80',
    icon: Beaker,
    instruments: [
      { name: 'Atomic Absorption Spectrophotometer (AAS)', uses: 'Trace metal analysis in water, wastewater, and solid samples.' },
      { name: 'UV-Visible Spectrophotometer', uses: 'Quantitative analysis of different analytes based on light absorption.' },
      { name: 'Gas Chromatograph (GC)', uses: 'Separation and analysis of volatile compounds.' },
      { name: 'Muffle Furnace & Hot Air Ovens', uses: 'Ash content determination, heating, and drying of samples.' },
      { name: 'pH & Conductivity Meters', uses: 'Precise measurement of acidity, alkalinity, and electrical conductivity.' }
    ]
  },
  civil: {
    title: 'Civil Lab Testing Instruments',
    subtitle: 'Structural Material Verification',
    description: 'We offer robust testing infrastructure for construction and building materials. Our civil lab is dedicated to verifying the structural integrity, durability, and compliance of cement, concrete, steel, and soil for large-scale infrastructure and real estate projects.',
    image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&q=80',
    icon: Factory,
    instruments: [
      { name: 'Compression Testing Machine (CTM)', uses: 'Compressive strength testing of concrete cubes, bricks, and cylinders.' },
      { name: 'Marshall Stability Test Apparatus', uses: 'Bituminous mix design and stability analysis for pavement construction.' },
      { name: 'CBR Test Apparatus', uses: 'California Bearing Ratio measurement to evaluate subgrade strength of roads.' },
      { name: 'Vicat Apparatus', uses: 'Initial and final setting time determination of cement.' },
      { name: 'Los Angeles Abrasion Machine', uses: 'Measuring the degradation of standard gradings of aggregates from abrasion.' }
    ]
  },
  ndt: {
    title: 'Non-Destructive Testing (NDT)',
    subtitle: 'Non-Invasive Flaw Detection',
    description: 'Our Non-Destructive Testing (NDT) division utilizes advanced techniques to inspect and evaluate the properties of materials, components, and structures without causing any damage. We provide critical insights to guarantee long-term safety and reliability for critical industrial assets.',
    image: 'https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&w=1200&q=80',
    icon: ShieldCheck,
    instruments: [
      { name: 'Ultrasonic Flaw Detector', uses: 'Volumetric inspection for internal defects in welds, castings, and forgings.' },
      { name: 'Magnetic Particle Testing (MPT) Yoke', uses: 'Detection of surface and near-surface discontinuities in ferromagnetic materials.' },
      { name: 'Liquid Penetrant Testing (LPT) Kits', uses: 'Detecting surface-breaking flaws in non-porous materials.' },
      { name: 'Radiography Testing (RT) Equipment', uses: 'X-ray and Gamma-ray inspection for internal structural flaws.' },
      { name: 'Coating Thickness Gauge', uses: 'Precise measurement of dry film thickness (DFT) on metallic substrates.' }
    ]
  }
};

export default function InfrastructurePage() {
  const params = useParams();
  const typeParam = params?.type as string;

  // Validate path and fallback if necessary.
  const dataKey = INFRASTRUCTURE_DATA.hasOwnProperty(typeParam)
    ? (typeParam as InfrastructureKey)
    : 'mechanical';

  const data = INFRASTRUCTURE_DATA[dataKey];
  const Icon = data.icon;

  return (
    <div className="w-full bg-[#EFF6FF] min-h-screen pb-24">
      {/* Hero Banner Area */}
      <div className="bg-[#1E1B5C] w-full pt-16 pb-24 px-4 md:px-12 relative overflow-hidden">
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#EFF6FF] to-transparent z-10"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#FF6700]/10 rounded-full blur-[80px] pointer-events-none"></div>
        <div className="absolute bottom-0 left-[-100px] w-64 h-64 bg-white/5 rounded-full blur-[60px] pointer-events-none"></div>

        <div className="max-w-[1300px] mx-auto flex flex-col items-center relative z-20 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="w-20 h-20 md:w-24 md:h-24 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center mb-6 shadow-xl border border-white/20"
          >
            <Icon size={40} className="text-[#FF6700]" />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-white font-black text-[32px] md:text-[48px] lg:text-[56px] font-oswald tracking-tight uppercase leading-[1.1] mb-4 max-w-4xl"
          >
            {data.title.split(' ').map((word, idx) => (
              <span key={idx} className={idx === 0 || word === 'Testing' || word === 'Non-Destructive' ? 'text-[#FF6700]' : ''}>
                {word}{" "}
              </span>
            ))}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-white/80 font-medium tracking-widest uppercase text-sm md:text-base"
          >
            {data.subtitle}
          </motion.p>
        </div>
      </div>

      <div className="max-w-[1300px] mx-auto px-4 md:px-12 mt-[-40px] relative z-30">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden flex flex-col lg:flex-row border-t-4 border-[#FF6700]">
          {/* Left Content */}
          <div className="w-full lg:w-1/2 p-8 md:p-12 flex flex-col justify-center">
            <div className="w-16 h-1.5 bg-[#FF6700] mb-8"></div>
            <p className="text-slate-700 text-[16px] md:text-[18px] leading-[1.8] mb-10">
              {data.description}
            </p>

            <div className="mt-auto">
              <Link href="#contact" className="inline-flex items-center gap-2 bg-[#1E1B5C] text-white font-bold px-8 py-4 rounded uppercase text-sm tracking-wider hover:bg-slate-800 transition-colors shadow-lg group">
                Inquire About Testing <CheckCircle size={18} className="group-hover:text-[#FF6700] transition-colors" />
              </Link>
            </div>
          </div>

          {/* Right Image */}
          <div className="w-full lg:w-1/2 relative min-h-[300px] lg:min-h-full">
            <Image
              src={data.image}
              alt={data.title}
              fill
              className="object-cover"
              unoptimized
            />
            <div className="absolute inset-0 bg-gradient-to-r from-white via-white/20 to-transparent lg:w-32 hidden lg:block"></div>
          </div>
        </div>
      </div>

      {/* Instruments Grid Section */}
      <div className="max-w-[1300px] mx-auto px-4 md:px-12 mt-20 md:mt-32">
        <div className="flex flex-col items-center mb-16 text-center">
          <h2 className="text-[#1E1B5C] font-oswald font-black text-[28px] md:text-[40px] uppercase mb-4">Key <span className="text-[#FF6700]">Instruments & Equipment</span></h2>
          <div className="w-20 h-1 bg-[#1E1B5C] mb-6"></div>
          <p className="text-slate-600 max-w-2xl text-[16px]">Our laboratory is fitted with properly calibrated and regularly maintained equipment to provide world class diagnostic and quantitative accuracy.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {data.instruments.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-8 rounded-xl shadow-md border border-slate-100 hover:shadow-xl hover:border-[#FF6700]/30 transition-all group"
            >
              <div className="w-12 h-12 bg-[#EFF6FF] text-[#1E1B5C] rounded-lg flex items-center justify-center mb-6 group-hover:bg-[#1E1B5C] group-hover:text-white transition-colors">
                <Microscope size={24} />
              </div>
              <h3 className="font-bold text-[18px] text-[#1E1B5C] mb-3 leading-tight group-hover:text-[#FF6700] transition-colors">{item.name}</h3>
              <p className="text-slate-600 text-[14px] leading-relaxed">
                <strong className="text-slate-800">Application:</strong> {item.uses}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
