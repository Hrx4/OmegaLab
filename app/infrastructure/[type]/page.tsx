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
      { name: 'Universal Testing Machine (UTM) - High Capacity', uses: 'UTM models with capacities of 600 KN, 1000 KN, 1200 KN etc., for tensile, compression, bending, and shear evaluations.' },
      { name: 'Universal Testing Machine - Low Capacity', uses: 'Precision testing machines (500 Kgf, 3000 Kgf, 5000 Kgf) with Extensometers for accurate elongation and strength measurement.' },
      { name: 'Charpy & Izod Impact Tester', uses: 'Determining the impact toughness and energy absorption behavior of materials under high strain rates.' },
      { name: 'Hardness Tester', uses: 'Rockwell, Brinell, and Vickers hardness measurements to evaluate material resistance.' },
      { name: 'Vicat Softening Temperature Machine', uses: 'Measuring the softening temperature point of polymers and plastic products (up to 300°C).' },
      { name: 'Melt Flow Index & Hydrostatic Pressure Apparatus', uses: 'Testing polymer melt flow rate and evaluating the internal hydrostatic pressure performance of plastic pipes.' },
      { name: 'Shore Hardness Tester', uses: 'Precise Shore A and Shore D hardness testing for rubber and elastomers.' },
      { name: 'Opacity & Bursting Strength Tester', uses: 'Measuring the light transmission (opacity) of plastics and testing the bursting resistance of sheets.' },
      { name: 'Coating Thickness Gauge', uses: 'Precise measurement of dry film thickness (DFT) on metallic and alloyed substrates.' },
    ]
  },
  chemical: {
    title: 'Chemical Lab Testing Instruments',
    subtitle: 'Advanced Analytical Diagnostics',
    description: 'The chemical laboratory is backed by advanced analytical instruments that provide precise quantification of chemical components. We maintain a high level of calibration to perform complex analysis for water, metals, alloys, environmental samples, and industrial compounds.',
    image: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=1200&q=80',
    icon: Beaker,
    instruments: [
      { name: 'Optical Emission Spectrometer (OES)', uses: 'High-speed composition analysis and alloy grade verification.' },
      { name: 'Spectrophotometer', uses: 'Quantitative chemical diagnostics and light absorption measurements.' },
      { name: 'Digital Nephelometer', uses: 'Measuring liquid sample turbidity and water quality from 0.1 to 199.9 NTU.' },
      { name: 'Conductivity / TDS Meter', uses: 'Evaluating water electrical conductivity and total dissolved solids (ranges from 0 to 200µS, 0 to 200mS, 0 to 200ppm, and 0 to 200ppt).' },
      { name: 'Muffle Furnace', uses: 'High-temperature sample ash determination and thermal testing (up to 1400 °C).' },
      { name: 'Flame Photometer', uses: 'Measuring concentrations of alkali and alkaline earth metals (1ppm to 100ppm).' },
      { name: 'Electronic Analytical Balance', uses: 'Ultra-high precision weighing with 0.0001 g (0.1 mg) resolution.' },
      { name: 'Micro-pipette', uses: 'High-precision liquid dispensing and micro-volume fluid handling (0.001 ml accuracy).' },
    ]
  },
  civil: {
    title: 'Civil Lab Testing Instruments',
    subtitle: 'Structural Material Verification',
    description: 'We offer robust testing infrastructure for construction and building materials. Our civil lab is dedicated to verifying the structural integrity, durability, and compliance of cement, concrete, steel, and soil for large-scale infrastructure and real estate projects.',
    image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&q=80',
    icon: Factory,
    instruments: [
      { name: 'CMOD Measuring Equipment', uses: 'Crack Mouth Opening Displacement instrumentation for fracture mechanics and concrete toughness testing.' },
      { name: 'Digital Compression Testing Machine (CTM)', uses: 'High-capacity compression testing (up to 2000 KN, 3000 KN) of concrete cubes and cylindrical specimens.' },
      { name: 'Digital Flexural Testing Machine', uses: 'Determining the flexural strength of concrete beams and structural specimens.' },
      { name: 'Abrasion & Softening Point Testing Apparatus', uses: 'Testing aggregate degradation and softening points of bituminous mixtures.' },
      { name: 'Integral Proving Ring & Pressure Gauges', uses: 'Load calibration and pressure monitoring for load frame setups.' },
      { name: 'Casagrande Apparatus & Autoclave', uses: 'Soil plasticity (liquid limit) testing and autoclave testing for cement soundness.' },
      { name: 'EV2 & SBC Setup', uses: 'Plate load test setups for safe bearing capacity (SBC) and soil compaction evaluations.' },
      { name: 'Precision Measuring instruments', uses: 'Digital Vernier calipers (0.01 mm accuracy), electronic balances up to 100 Kg capacity, and analytical balances (0.0001 g accuracy).' },
    ]
  },
  ndt: {
    title: 'Non-Destructive Testing (NDT)',
    subtitle: 'Non-Invasive Flaw Detection',
    description: 'Our Non-Destructive Testing (NDT) division utilizes advanced techniques to inspect and evaluate the properties of materials, components, and structures without causing any damage. We provide critical insights to guarantee long-term safety and reliability for critical industrial assets.',
    image: 'https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&w=1200&q=80',
    icon: ShieldCheck,
    instruments: [
      { name: 'Ultrasonic Pulse Velocity testing Apparatus', uses: 'Evaluating the quality and velocity of concrete (range 0.01 Km/sec to 10 Km/sec).' },
      { name: 'Rebound Hammer', uses: 'Non-destructive estimation of in-situ compressive strength of hardened concrete (10 MPa to 70 MPa).' },
      { name: 'Solid Moisture Meter', uses: 'Instantaneous moisture determination of solid materials from 0% to 100%.' },
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
              <Link href="/#enquiry" className="inline-flex items-center gap-2 bg-[#1E1B5C] text-white font-bold px-8 py-4 rounded uppercase text-sm tracking-wider hover:bg-slate-800 transition-colors shadow-lg group">
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
