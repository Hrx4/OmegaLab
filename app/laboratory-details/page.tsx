"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "motion/react";
import { FlaskConical, Building2, ShieldCheck, CreditCard, BadgeCheck, MapPin, Award, Target, CheckCircle, Star, Crown } from "lucide-react";

const highlights = [
  {
    icon: Building2,
    label: "Incorporated",
    value: "20.06.2023",
    sub: "Under Companies Act 2013",
  },
  {
    icon: CreditCard,
    label: "CIN",
    value: "U71200WB2023PTC262957",
    sub: "Corporate Identity Number",
  },
  {
    icon: CreditCard,
    label: "PAN",
    value: "AAECO0911B",
    sub: "Permanent Account Number",
  },
  {
    icon: CreditCard,
    label: "TAN",
    value: "CALO06226D",
    sub: "Tax Deduction & Collection Account No.",
  },
  {
    icon: ShieldCheck,
    label: "MSME Registered",
    value: "E.S.I. Insured",
    sub: "Industrial Testing & Analytical Laboratory",
  },
  {
    icon: BadgeCheck,
    label: "Accredited Labs",
    value: "5 Locations",
    sub: "NABL Accredited Across Eastern India",
  },
];

const gstDetails = [
  { state: "West Bengal", gst: "19AAECO0911B1ZZ" },
  { state: "Jharkhand", gst: "20AAECO0911B1ZG" },
  { state: "Odisha", gst: "21AAECO0911B1ZE" },
];

const TEAM_IMAGES = [
  "https://res.cloudinary.com/de4cnpfm1/image/upload/v1778339110/T3_lly4po.jpg",
  "https://res.cloudinary.com/de4cnpfm1/image/upload/v1778339110/T4_jsaj7y.jpg",
  "https://res.cloudinary.com/de4cnpfm1/image/upload/v1778339109/T2_ptxc7g.jpg",
  "https://res.cloudinary.com/de4cnpfm1/image/upload/v1778339108/T1_pfcuu9.jpg",
];

const MILESTONES = [
  {
    year: "2011",
    title: "Foundation of Omegalab",
    description: "Established with a bold vision to provide accurate, unbiased, and reliable testing and calibration services to the industry.",
    icon: Target,
    color: "from-blue-500 to-[#1E1B5C]"
  },
  {
    year: "2013",
    title: "National Recognition by CSIR-NML",
    description: "Secured Position No. 18 globally in the CRM Preparation Programme. The only participating laboratory from West Bengal.",
    icon: Award,
    color: "from-orange-400 to-[#FF6700]"
  },
  {
    year: "2016",
    title: "NABL Accreditation",
    description: "Earned the prestigious NABL accreditation adhering strictly to the ISO/IEC 17025:2017 international testing standards.",
    icon: CheckCircle,
    color: "from-blue-500 to-[#1E1B5C]"
  },
  {
    year: "2019",
    title: "Eastern India Expansion",
    description: "Successfully expanded our state-of-the-art testing facilities across Eastern India, opening new branches in Siliguri and Ranchi.",
    icon: MapPin,
    color: "from-orange-400 to-[#FF6700]"
  },
  {
    year: "2023",
    title: "10 Million+ Samples Tested",
    description: "Crossed a remarkable milestone of over 10 million samples tested, delivering uncompromising accuracy to our clients.",
    icon: Star,
    color: "from-blue-500 to-[#1E1B5C]"
  },
  {
    year: "2025",
    title: "Industry Leadership",
    description: "Acknowledged as a premier testing laboratory trusted by over 1000+ top enterprises and government defense organizations.",
    icon: Crown,
    color: "from-orange-400 to-[#FF6700]"
  }
];

export default function LaboratoryDetailsPage() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end end"]
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % TEAM_IMAGES.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % TEAM_IMAGES.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + TEAM_IMAGES.length) % TEAM_IMAGES.length);

  return (
    <div className="w-full bg-[#EFF6FF] min-h-screen pb-24 font-montserrat">
      {/* Hero */}
      <div className="bg-[#1E1B5C] w-full pt-16 pb-28 px-4 md:px-12 relative overflow-hidden">
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#EFF6FF] to-transparent z-10" />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#FF6700]/10 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute bottom-0 left-[-80px] w-64 h-64 bg-white/5 rounded-full blur-[60px] pointer-events-none" />

        <div className="max-w-[1300px] mx-auto flex flex-col items-center relative z-20 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="w-16 h-16 rounded-2xl bg-[#FF6700]/20 border border-[#FF6700]/30 flex items-center justify-center mb-6"
          >
            <FlaskConical size={32} className="text-[#FF6700]" />
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-white font-black text-[32px] md:text-[52px] font-oswald tracking-tight uppercase leading-[1.1] mb-4"
          >
            Laboratory <span className="text-[#FF6700]">Details</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-white/70 text-sm md:text-base max-w-2xl leading-relaxed italic"
          >
            Where Accuracy is our goal, Quality is in our soul, Safety is our priority and Satisfaction is our guarantee.
          </motion.p>
        </div>
      </div>

      <div className="max-w-[1300px] mx-auto px-4 md:px-12 mt-[-60px] relative z-30">

        {/* Intro Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-3xl shadow-xl border-t-4 border-[#FF6700] p-8 md:p-12 mb-10"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-xl bg-[#FF6700]/10 flex items-center justify-center shrink-0">
              <FlaskConical size={20} className="text-[#FF6700]" />
            </div>
            <h2 className="text-[#1E1B5C] font-oswald font-black text-2xl md:text-3xl uppercase tracking-tight">
              Welcome to OMEGALAB
            </h2>
          </div>
          <div className="space-y-5 text-slate-600 leading-[1.9] text-[15px] md:text-[16px]">
            <p>
              <strong className="text-[#1E1B5C]">OMEGALAB TESTING SERVICES PRIVATE LIMITED</strong> started its journey in the field of industrial testing and analysis in the year <strong className="text-[#FF6700]">1999</strong> as <em>Omega Consultant Services</em>. It was an ISO 9001 certified firm with its two laboratories in Kolkata and Haldia, mainly with expertise in fertilizer and soil analysis.
            </p>
            <p>
              OMEGALAB TESTING SERVICES PRIVATE LIMITED is incorporated on <strong className="text-[#1E1B5C]">20.06.2023</strong> under the Companies Act 2013 (18 of 2013). The company is a MSME registered, E.S.I. insured industrial testing and analytical laboratory with sophisticated instruments and competent manpower. Currently the laboratory is working in multiple locations, of which <strong className="text-[#FF6700]">5 are already NABL accredited</strong>.
            </p>
          </div>
        </motion.div>

        {/* Key Info Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-10">
          {highlights.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.07 }}
              className="bg-white rounded-2xl border border-slate-100 shadow-md p-6 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group"
            >
              <div className="w-10 h-10 rounded-xl bg-[#EFF6FF] group-hover:bg-[#FF6700]/10 flex items-center justify-center mb-4 transition-colors">
                <item.icon size={20} className="text-[#1E1B5C] group-hover:text-[#FF6700] transition-colors" />
              </div>
              <div className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-1">{item.label}</div>
              <div className="text-[#1E1B5C] font-black text-[15px] md:text-[17px] font-oswald mb-1 break-all">{item.value}</div>
              <div className="text-[12px] text-slate-400">{item.sub}</div>
            </motion.div>
          ))}
        </div>

        {/* GST Details */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-3xl border border-slate-100 shadow-xl p-8 md:p-10 mb-10"
        >
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 rounded-xl bg-[#1E1B5C]/10 flex items-center justify-center shrink-0">
              <MapPin size={20} className="text-[#1E1B5C]" />
            </div>
            <h2 className="text-[#1E1B5C] font-oswald font-black text-2xl uppercase tracking-tight">
              GST Registrations
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {gstDetails.map((g, i) => (
              <div
                key={i}
                className="rounded-2xl border-2 border-[#1E1B5C]/10 bg-[#EFF6FF] p-5 hover:border-[#FF6700] hover:shadow-md transition-all duration-300"
              >
                <div className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-2">{g.state}</div>
                <div className="text-[#1E1B5C] font-black text-[15px] font-mono tracking-wider">{g.gst}</div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Achievements Section */}
        <motion.div
          id="achievements"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-3xl shadow-xl border-t-4 border-[#FF6700] p-8 md:p-12"
        >
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 rounded-xl bg-[#FF6700]/10 flex items-center justify-center shrink-0">
              <Award size={20} className="text-[#FF6700]" />
            </div>
            <h2 className="text-[#1E1B5C] font-oswald font-black text-2xl md:text-3xl uppercase tracking-tight">
              Our Achievements
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
            {/* Text Content */}
            <div className="flex flex-col gap-5 text-slate-600 leading-[1.8] text-[15px] md:text-[16px]">
              <p className="font-semibold text-[#1E1B5C]">
                We always embrace transformation as a necessary weapon to turning challenges into opportunities for innovation. Using history to show that advancements in one generation build the foundation for the next. Focusing on build a strong, passionate team and well build infrastructure to serve the nation.
              </p>
              <p>
                In 2013, OmegaLab Testing Services Private Limited achieved a significant milestone by participating in the <strong>Certified Reference Material (CRM)</strong> Preparation Programme conducted by the National Metallurgical Laboratory (CSIR-NML), Jamshedpur.
              </p>
              <p>
                OmegaLab was proudly enlisted among <strong>21 selected laboratories across India,</strong> securing <strong>Position No. 18</strong> in this nationally recognized program. Notably, OmegaLab stands as the only laboratory from West Bengal to be included in the CRM certification list—an acknowledgment of our <strong>accuracy, consistency, and technical excellence in testing.</strong>
              </p>
              <p>
                This achievement reinforces our commitment to maintaining the highest standards of <strong>quality and reliability</strong> in every service we deliver.
              </p>
            </div>

            {/* Image Slider */}
            <div className="relative rounded-2xl overflow-hidden shadow-2xl h-[300px] md:h-[400px] group border-4 border-white bg-slate-900 w-full">
              {TEAM_IMAGES.map((img, idx) => (
                <div 
                  key={idx} 
                  className={`absolute inset-0 transition-opacity duration-1000 ${idx === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
                >
                  <Image
                    src={img}
                    alt={`Team Achievement ${idx + 1}`}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                    unoptimized
                  />
                </div>
              ))}

              {/* Slider Controls */}
              <button 
                onClick={prevSlide}
                className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-black/40 text-white rounded-full flex items-center justify-center hover:bg-[#FF6700] transition-colors z-20 backdrop-blur-sm"
              >
                ❮
              </button>
              <button 
                onClick={nextSlide}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-black/40 text-white rounded-full flex items-center justify-center hover:bg-[#FF6700] transition-colors z-20 backdrop-blur-sm"
              >
                ❯
              </button>

              {/* Caption overlay */}
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#1E1B5C]/90 via-[#1E1B5C]/50 to-transparent pt-16 pb-6 text-center z-20">
                <p className="text-white font-bold mb-3 uppercase tracking-wider text-sm font-oswald drop-shadow-md">
                  Omegalab: where quality meets reliability
                </p>
                <div className="flex justify-center gap-2">
                  {TEAM_IMAGES.map((_, idx) => (
                    <div 
                      key={idx}
                      onClick={() => setCurrentSlide(idx)}
                      className={`w-2.5 h-2.5 rounded-full cursor-pointer transition-colors ${idx === currentSlide ? 'bg-[#FF6700]' : 'border-2 border-white/70 hover:bg-white/50'}`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Animated Timeline Section */}
        <div className="max-w-[1000px] mx-auto mt-20 mb-10 relative">
          <div className="text-center mb-16 relative z-10">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-black text-[32px] md:text-[40px] text-[#1E1B5C] font-oswald tracking-tight uppercase"
            >
              Journey of <span className="text-[#FF6700]">Excellence</span>
            </motion.h2>
            <div className="w-24 h-1.5 bg-[#FF6700] mx-auto mt-6 mb-4"></div>
            <p className="text-slate-600 max-w-2xl mx-auto text-[16px]">
              Tracing the key milestones that shaped Omegalab into a leading name in testing and calibration services.
            </p>
          </div>

          <div className="relative" ref={containerRef}>
            {/* Animated Line connecting milestones */}
            <div className="absolute left-[20px] md:left-1/2 md:-translate-x-1/2 top-0 bottom-0 w-1 bg-slate-200 rounded-full">
              <motion.div
                className="w-full bg-[#FF6700] rounded-full origin-top"
                style={{ height: lineHeight }}
              />
            </div>

            <div className="flex flex-col gap-12 md:gap-24 relative z-10 py-10">
              {MILESTONES.map((milestone, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  className={`flex flex-col md:flex-row items-center gap-8 ${idx % 2 === 0 ? 'md:flex-row-reverse' : ''
                    }`}
                >
                  <div className="w-full md:w-1/2 pl-16 md:pl-0 flex justify-start md:justify-center">
                    <div className={`
                             bg-white p-8 rounded-2xl shadow-lg border border-slate-100 hover:shadow-2xl transition-all duration-300 w-full max-w-[400px] group
                             ${idx % 2 === 0 ? 'md:mr-auto' : 'md:ml-auto'}
                          `}>
                      <div className="text-[#FF6700] font-black text-4xl mb-4 font-oswald">{milestone.year}</div>
                      <h3 className="font-bold text-[#1E1B5C] text-xl mb-3 leading-tight font-oswald uppercase tracking-wide">{milestone.title}</h3>
                      <p className="text-slate-600 text-[15px] leading-relaxed relative z-10">{milestone.description}</p>
                    </div>
                  </div>

                  <div className="absolute left-[20px] md:left-1/2 -translate-x-1/2 w-10 h-10 md:w-14 md:h-14 rounded-full bg-white border-4 border-[#EFF6FF] shadow-lg flex items-center justify-center z-20">
                    <div className={`w-full h-full rounded-full bg-gradient-to-br ${milestone.color} flex items-center justify-center text-white scale-90`}>
                      <milestone.icon size={20} className="md:w-6 md:h-6" />
                    </div>
                  </div>

                  <div className="hidden md:block w-1/2"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
