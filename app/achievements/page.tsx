'use client';

import Image from 'next/image';
import { motion, useScroll, useTransform } from 'motion/react';
import { useRef, useState, useEffect } from 'react';
import { Award, Target, Trophy, MapPin, CheckCircle, Crown, Star, ArrowRight } from 'lucide-react';

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

export default function AchievementsPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end end"]
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  const [currentSlide, setCurrentSlide] = useState(0);

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
      {/* Top section - matching the original image structure slightly inside a container */}
      <div className="bg-[#EFF6FF] pt-12 md:pt-20 pb-16 px-4 md:px-12 max-w-[1300px] mx-auto w-full">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center font-black text-[32px] md:text-[48px] text-[#1E1B5C] font-oswald tracking-tight mb-12 uppercase"
        >
          Our <span className="text-[#FF6700]">Achievements</span>
        </motion.h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start mb-16">

          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col gap-6"
          >
            <h2 className="text-[20px] md:text-[26px] font-extrabold text-[#1E1B5C] font-oswald tracking-tight mb-2 uppercase">
              Recognized for Precision. Trusted for Excellence.
            </h2>

            <p className="text-slate-700 text-[15px] md:text-[17px] leading-[1.7]">
              In 2013, OmegaLab Testing Services Private Limited achieved a significant milestone by participating in the <strong>Certified Reference Material (CRM)</strong> Preparation Programme conducted by the National Metallurgical Laboratory (CSIR-NML), Jamshedpur.
            </p>

            <p className="text-slate-700 text-[15px] md:text-[17px] leading-[1.7]">
              OmegaLab was proudly enlisted among <strong>21 selected laboratories across India,</strong> securing <strong>Position No. 18</strong> in this nationally recognized program. Notably, OmegaLab stands as the only laboratory from West Bengal to be included in the CRM certification list—an acknowledgment of our <strong>accuracy, consistency, and technical excellence in testing.</strong>
            </p>

            <p className="text-slate-700 text-[15px] md:text-[17px] leading-[1.7]">
              This achievement reinforces our commitment to maintaining the highest standards of <strong>quality and reliability</strong> in every service we deliver.
            </p>
          </motion.div>

          {/* Image Slider */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="relative rounded-2xl overflow-hidden shadow-2xl h-[300px] md:h-[450px] group border-4 border-white bg-slate-900"
          >
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

            {/* Caption and dots overlay */}
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#1E1B5C]/90 via-[#1E1B5C]/50 to-transparent pt-16 pb-6 text-center z-20">
              <p className="text-white font-bold mb-3 uppercase tracking-wider text-sm md:text-base font-oswald drop-shadow-md">Omegalab: where quality meets reliability</p>
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
          </motion.div>

        </div>
      </div>

      {/* Animated Timeline Section */}
      <div className="max-w-[1000px] mx-auto px-4 md:px-12 mt-12 mb-20 relative">
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
          <p className="text-slate-600 max-w-2xl mx-auto text-[16px]">Tracing the key milestones that shaped Omegalab into a leading name in testing and calibration services.</p>
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

      {/* Footer Call to Action block */}
      <div className="max-w-[1300px] mx-auto px-4 md:px-12 mt-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-[#1E1B5C] to-blue-900 rounded-3xl p-10 md:p-16 text-center shadow-2xl relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl"></div>
          <h2 className="text-white font-black text-3xl md:text-5xl font-oswald tracking-tight uppercase mb-6 relative z-10">
            Ready to experience superior testing?
          </h2>
          <p className="text-white/80 max-w-2xl mx-auto mb-10 text-[16px] md:text-[18px] relative z-10">
            Join our growing list of satisfied clients and ensure the highest standards for your materials and products.
          </p>
          <button className="bg-[#FF6700] hover:bg-orange-500 text-white font-bold py-4 px-10 rounded shadow-xl tracking-widest uppercase transition-all flex items-center gap-2 mx-auto relative z-10 group">
            Contact Us Today <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </motion.div>
      </div>

    </div>
  );
}
