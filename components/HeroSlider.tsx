'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

import slides from '../data/slides.json';

export default function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 7000); // 5 seconds

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
          <div className="absolute inset-0 opacity-80 mix-blend-overlay">
            <Image
              src={slide.image}
              alt={slide.title}
              fill
              className="object-cover"
              unoptimized
              referrerPolicy="no-referrer"
            />
          </div>
          {/* Dark Overlay for Text Contrast */}
          <div className="absolute inset-0 bg-black/40 md:bg-black/30 bg-gradient-to-b from-black/60 via-transparent to-black/60"></div>

          <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-12 md:px-20 z-10">
            <span className="inline-block bg-[#FF6700]/15 border border-[#FF6700] text-[#FF6700] text-[10px] md:text-[13px] font-bold px-5 py-1.5 rounded-full mb-4 uppercase tracking-[0.5px] drop-shadow-md">
              {slide.badge}
            </span>
            <h1 className="text-[22px] md:text-[52px] font-black text-white leading-[1.15] mb-3 max-w-[800px] font-oswald tracking-tight drop-shadow-xl">
              {slide.title}
            </h1>
            <p className="text-[13px] md:text-[18px] text-white/90 font-normal mb-6 max-w-[600px] drop-shadow-lg">
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
