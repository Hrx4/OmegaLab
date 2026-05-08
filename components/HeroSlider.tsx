'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

const LOGO = "https://res.cloudinary.com/de4cnpfm1/image/upload/v1778247941/LOGO-_OCS_eamyrc.jpg";

// const NABL_BADGES = [
//   "https://res.cloudinary.com/de4cnpfm1/image/upload/v1778245989/TC11935_tsqh9z.webp",
//   "https://res.cloudinary.com/de4cnpfm1/image/upload/v1778245989/TC16480_kmsows.webp",
//   "https://res.cloudinary.com/de4cnpfm1/image/upload/v1778245989/TC17671_ghwfuo.webp",
//   "https://res.cloudinary.com/de4cnpfm1/image/upload/v1778245987/TC13401_axis5q.webp",
//   "https://res.cloudinary.com/de4cnpfm1/image/upload/v1778245987/TC15509_dx2lua.webp",
// ];

const slides = [
  {
    image: "https://res.cloudinary.com/de4cnpfm1/image/upload/v1778247809/KOLKATA1_i1fhg.jpg",
    badge: "NABL Accredited Since 2012",
    title: "25+ Years of Testing Excellence",
    description: "Eastern & North Eastern India's most trusted material testing laboratory...",
  },
  {
    image: "https://res.cloudinary.com/de4cnpfm1/image/upload/v1778247807/SILIGURI_vqovh.jpg",
    badge: "Advanced Analytics",
    title: "Precision & Quality Assurance",
    description: "Equipped with state-of-the-art analytical instruments providing accurate testing services.",
  },
  {
    image: "https://res.cloudinary.com/de4cnpfm1/image/upload/v1778247807/RANCHI_za9xn.jpg",
    badge: "NABL Accredited",
    title: "Trusted Material Testing Partners",
    description: "Serving diverse industries with reliable building material testing since 1999.",
  },
];

export default function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000); // 5 seconds

    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section className="relative w-full h-[320px] md:h-[620px] overflow-hidden flex items-center justify-center bg-slate-900">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'
            }`}
        >
          <div className="absolute inset-0 opacity-40 mix-blend-overlay">
            <Image
              src={slide.image}
              alt={slide.title}
              fill
              className="object-cover"
              unoptimized
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-12 md:px-20">
            <span className="inline-block bg-[#FF6700]/15 border border-[#FF6700] text-[#FF6700] text-[10px] md:text-[13px] font-bold px-5 py-1.5 rounded-full mb-4 uppercase tracking-[0.5px]">
              {slide.badge}
            </span>
            <h1 className="text-[22px] md:text-[52px] font-black text-white leading-[1.15] mb-3 max-w-[800px] font-oswald tracking-tight">
              {slide.title}
            </h1>
            <p className="text-[13px] md:text-[18px] text-white/75 font-normal mb-6 max-w-[600px]">
              {slide.description}
            </p>
          </div>
        </div>
      ))}

      {/* Slider Controls */}
      <button
        onClick={prevSlide}
        className="absolute left-2 md:left-8 top-1/2 -translate-y-1/2 w-8 h-8 md:w-12 md:h-12 rounded-full bg-[#1E1B5C] border-2 border-white/20 text-white flex items-center justify-center hover:bg-[#FF6700] hover:border-[#FF6700] transition-colors z-20"
      >
        ❮
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-2 md:right-8 top-1/2 -translate-y-1/2 w-8 h-8 md:w-12 md:h-12 rounded-full bg-[#1E1B5C] border-2 border-white/20 text-white flex items-center justify-center hover:bg-[#FF6700] hover:border-[#FF6700] transition-colors z-20"
      >
        ❯
      </button>

      {/* Dots */}
      <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex gap-2 z-20">
        {slides.map((_, i) => (
          <div
            key={i}
            onClick={() => setCurrentSlide(i)}
            className={`h-3 rounded-full transition-all cursor-pointer ${i === currentSlide ? 'w-8 bg-[#FF6700]' : 'w-3 bg-white/35'}`}
          />
        ))}
      </div>
    </section>
  );
}
