"use client";

import Link from "next/link";
import {
  Facebook,
  Linkedin,
  Instagram,
  Youtube,
  MapPin,
  Mail,
  Phone,
  ChevronRight,
  Send,
  ArrowRight,
} from "lucide-react";
import Image from "next/image";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";

const WhatsApp = ({ size = 20 }: { size?: number }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 32 32"
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
  >
    <path d="M16.01 3C8.83 3 3 8.75 3 15.84c0 2.27.61 4.49 1.77 6.43L3 29l6.92-1.77A13.16 13.16 0 0 0 16.01 28C23.18 28 29 22.25 29 15.84S23.18 3 16.01 3Zm0 22.78c-1.9 0-3.77-.5-5.41-1.45l-.39-.23-4.1 1.05 1.1-3.96-.26-.41a10.7 10.7 0 0 1-1.63-5.67c0-5.95 4.89-10.8 10.89-10.8 2.9 0 5.63 1.12 7.68 3.15a10.67 10.67 0 0 1 3.2 7.65c-.01 5.95-4.89 10.67-11.08 10.67Z" />
    <path d="M21.95 18.4c-.32-.16-1.9-.93-2.2-1.04-.29-.11-.51-.16-.72.16-.21.32-.83 1.04-1.02 1.25-.19.21-.38.24-.7.08-.32-.16-1.36-.5-2.59-1.6-.96-.85-1.6-1.91-1.79-2.23-.19-.32-.02-.5.14-.66.15-.15.32-.38.48-.56.16-.19.21-.32.32-.53.11-.21.05-.4-.03-.56-.08-.16-.72-1.72-.99-2.36-.26-.62-.53-.54-.72-.55h-.62c-.21 0-.56.08-.85.4-.29.32-1.12 1.09-1.12 2.66s1.15 3.08 1.31 3.29c.16.21 2.26 3.44 5.48 4.82.77.33 1.37.53 1.84.68.77.25 1.47.21 2.02.13.62-.09 1.9-.77 2.17-1.52.27-.75.27-1.39.19-1.52-.08-.13-.29-.21-.61-.37Z" />
  </svg>
);

const LOCATIONS = [
  {
    name: "Kolkata Lab-1",
    type: "HO & Central Lab",
    link: "https://maps.app.goo.gl/eMGgb9J1VZSSbaBK8",
  },
  {
    name: "Kolkata Lab-2",
    type: "Accredited Lab",
    link: "https://maps.app.goo.gl/eMGgb9J1VZSSbaBK8",
  },
  {
    name: "Siliguri Lab",
    type: "Accredited Lab",
    link: "http://google.com/maps/place/OMEGALAB+TESTING+SERVICES+PRIVATE+limited/@26.7504515,88.417294,17z/data=!3m1!4b1!4m6!3m5!1s0x39e44132283a6a41:0xfef4e2e3d4224f5d!8m2!3d26.7504515!4d88.417294!16s%2Fg%2F11vcw99x0r!18m1!1e1?entry=ttu&g_ep=EgoyMDI2MDUwNi4wIKXMDSoASAFQAw%3D%3D",
  },
  {
    name: "Ranchi Lab",
    type: "Accredited Lab",
    link: "https://www.google.com/maps/place/Omegalab+Testing+Services+Pvt.+Ltd/@23.3979966,85.3516901,17z/data=!3m1!4b1!4m6!3m5!1s0x39f4e100695836a9:0xbdb80bb1c90a4526!8m2!3d23.3979966!4d85.3516901!16s%2Fg%2F11w3fffslk!18m1!1e1?entry=ttu&g_ep=EgoyMDI2MDUwNi4wIKXMDSoASAFQAw%3D%3D",
  },
  {
    name: "Odisha Lab",
    type: "Accredited Lab",
    link: "https://www.google.com/maps/place/OMEGALAB+TESTING+SERVICES+PVT.LTD./@20.1967379,85.8539767,17z/data=!3m1!4b1!4m6!3m5!1s0x3a19a1006376e599:0x20539cbf7a5c464d!8m2!3d20.1967379!4d85.8539767!16s%2Fg%2F11yhjkbrl9!18m1!1e1?entry=ttu&g_ep=EgoyMDI2MDUwNi4wIKXMDSoASAFQAw%3D%3D",
  },
];

const LOGO =
  "https://res.cloudinary.com/de4cnpfm1/image/upload/v1778247941/LOGO-_OCS_eamyrc.jpg";
const NABL_BADGES = [
  {
    id: "TC-11935",
    url: "https://res.cloudinary.com/de4cnpfm1/image/upload/v1778245989/TC11935_tsqh9z.webp",
    link: "https://nablwp.qci.org.in/CertificateScopenew?x=eOcz5t8vhPRBC9udGS4tiw==&src=P",
  },
  {
    id: "TC-13401",
    url: "https://res.cloudinary.com/de4cnpfm1/image/upload/v1778245987/TC13401_axis5q.webp",
    link: "https://nablwp.qci.org.in/CertificateScopenew?x=eOcz5t8vhPRBC9udGS4tiw==&src=P",
  },
  {
    id: "TC-15509",
    url: "https://res.cloudinary.com/de4cnpfm1/image/upload/v1780202025/ChatGPT_Image_May_31_2026_09_55_06_AM_ddjfjc.jpg",
    link: "https://nablwp.qci.org.in/CertificateScopenew?x=j6k9iq1uw4Bg9VLeGZxZMg==&src=P",
  },
  {
    id: "TC-16480",
    url: "https://res.cloudinary.com/de4cnpfm1/image/upload/v1778245989/TC16480_kmsows.webp",
    link: "https://nablwp.qci.org.in/CertificateScopenew?x=wsIgkGUfG5PjBiZbOfxOtQ==&src=P",
  },
  {
    id: "TC-17671",
    url: "https://res.cloudinary.com/de4cnpfm1/image/upload/v1778245989/TC17671_ghwfuo.webp",
    link: "https://nablwp.qci.org.in/CertificateScopenew?x=BLtvn2Aigjq6fokVy2tlWQ==&src=P",
  },
];

const TEAM_IMAGES = [
  "https://res.cloudinary.com/de4cnpfm1/image/upload/v1778429502/L1_k8dmuy.jpg",
  "https://res.cloudinary.com/de4cnpfm1/image/upload/v1778429502/L2_ldt8um.jpg",
  "https://res.cloudinary.com/de4cnpfm1/image/upload/v1778429500/L3_ubsvjm.jpg",
  "https://res.cloudinary.com/de4cnpfm1/image/upload/v1778429501/L4_iodkki.jpg",
];

export default function Footer() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % TEAM_IMAGES.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <footer id="footer" className="relative mt-0 bg-[#0e0b30] font-montserrat overflow-hidden">
      {/* Abstract Animated Ambient Light Background */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-[-1]">
        <motion.div
          animate={{ x: [-50, 50, -50], y: [-20, 20, -20] }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
          className="absolute -top-[20%] -right-[10%] w-[50%] h-[50%] rounded-full bg-[#1E1B5C]/80 blur-[120px]"
        ></motion.div>
        <motion.div
          animate={{ x: [30, -30, 30], y: [30, -30, 30] }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="absolute top-[50%] -left-[10%] w-[40%] h-[40%] rounded-full bg-[#FF6700]/10 blur-[100px]"
        ></motion.div>
        <motion.div
          animate={{ opacity: [0.1, 0.3, 0.1] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-[20%] right-[20%] w-[20%] h-[20%] rounded-full bg-[#1E1B5C]/60 blur-[80px]"
        ></motion.div>
      </div>

      {/* Main Footer Content */}
      <div className="pt-20 lg:pt-24 pb-12 px-6 lg:px-8 relative z-10 border-t-4 border-[#FF6700]">
        {/* Subtle SVG Pattern Overlay */}
        <div
          className="absolute inset-0 opacity-[0.03] pointer-events-none mix-blend-screen"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
          }}
        ></div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Column 1: Brand & About */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="flex flex-col gap-6 lg:gap-8 lg:col-span-2 xl:col-span-1 border-b lg:border-b-0 border-white/10 pb-8 lg:pb-0"
          >
            <div className="flex flex-col border-b border-white/20 pb-4 relative group">
              <div>
                <Link href="/" className="flex items-center gap-3 min-w-0 font-sans cursor-pointer">
                  <div className="w-[40px] h-[40px] md:w-[55px] md:h-[55px] xl:w-[68px] xl:h-[68px] bg-white rounded-2xl shadow-lg shrink-0 overflow-hidden flex items-center justify-center">
                    <Image
                      src={LOGO}
                      alt="Omega Lab Logo"
                      width={56}
                      height={56}
                      className="object-contain w-[30px] h-[30px] md:w-[44px] md:h-[44px] xl:w-[56px] xl:h-[56px]"
                    />
                  </div>
                  <div className="min-w-0 leading-tight overflow-hidden font-sans">
                    <div className="text-[20px] sm:text-[24px] font-extrabold tracking-tight text-white break-words sm:truncate">
                      OMEGA<span className="text-[#63B7F6]">LAB</span>
                    </div>
                    <div className="text-[9px] sm:text-[10px] uppercase tracking-wide text-white/75 leading-tight break-words">
                      Testing Services Private Limited
                    </div>
                  </div>
                </Link>
              </div>
            </div>

            <div className="flex flex-col gap-4 mt-2 mb-4">
              <h4 className="text-white font-oswald text-xl lg:text-2xl font-bold tracking-wide">
                Follow Us
              </h4>
              <div className="flex gap-3">
                {[
                  { icon: Facebook, href: "https://www.facebook.com/p/Omegalab-Testing-Services-PVt-Ltd-61579482957218/" },
                  { icon: Instagram, href: "https://www.instagram.com/omegalabtesting/?hl=en" },
                  { icon: Linkedin, href: "https://www.linkedin.com/company/omegalab-testing-services-pvt-ltd?originalSubdomain=in" },
                  { icon: Youtube, href: "https://www.youtube.com/@omegalabtestingservices" },
                  { icon: WhatsApp, href: "#" },
                ].map((social, i) => {
                  const Icon = social.icon;
                  return (
                    <motion.a
                      whileHover={{ scale: 1.1, translateY: -2 }}
                      whileTap={{ scale: 0.9 }}
                      key={i}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-11 h-11 rounded-full bg-gradient-to-br from-white/10 to-white/5 border border-white/10 flex items-center justify-center text-white/70 hover:from-[#FF6700] hover:to-orange-600 hover:text-white hover:border-[#FF6700] transition-all duration-300 shadow-lg"
                    >
                      <Icon size={20} />
                    </motion.a>
                  );
                })}
              </div>
            </div>

            {/* Newsletter Mini Block */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="mt-auto bg-white/[0.03] rounded-2xl p-5 border border-white/[0.08] relative overflow-hidden group shadow-lg"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#FF6700]/10 rounded-full blur-2xl -translate-y-1/2 translate-x-1/4 group-hover:bg-[#FF6700]/20 transition-colors duration-500"></div>
              <h4 className="text-white text-sm font-bold mb-2 flex items-center gap-2 relative z-10">
                <Mail size={14} className="text-[#FF6700]" /> Stay updated
              </h4>
              <p className="text-white/50 text-xs mb-3 leading-relaxed relative z-10">
                Get the latest testing standards and industry insights.
              </p>
              <form
                className="flex gap-2 relative z-10"
                onSubmit={(e) => e.preventDefault()}
              >
                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-xs text-white placeholder:text-white/30 focus:outline-none focus:border-[#FF6700] transition-colors"
                  required
                />
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  type="submit"
                  className="bg-[#FF6700] hover:bg-orange-600 text-white px-3 rounded-lg transition-colors flex items-center justify-center"
                >
                  <Send size={14} />
                </motion.button>
              </form>
            </motion.div>
          </motion.div>

          {/* Column 2: Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
            className="flex flex-col sm:ml-3"
          >
            <h4 className="text-white font-oswald text-xl font-bold mb-6 relative inline-block pb-3 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-10 after:h-1 after:bg-[#FF6700] after:rounded-full">
              Resource Links
            </h4>
            <div className="grid grid-cols-2 gap-x-4 gap-y-3">
              {[
                { name: "Home", path: "/" },
                { name: "About Us", path: "/laboratory-details" },
                { name: "Accreditation", path: "/accreditation" },
                { name: "Facilities", path: "/facilities" },
                { name: "Projects & Approvals", path: "/projects-approvals" },
                { name: "Infrastructure", path: "/infrastructure/mechanical" },
                { name: "Our Branch", path: "/our-branch/kolkata-1" },
                { name: "Lab Tour", path: "/lab-tour" },
                { name: "Clients", path: "/our-clients" },
                { name: "Career", path: "/career" },
                { name: "Feedback Form", path: "/feedback" },
              ].map((link, idx) => (
                <Link
                  key={link.name}
                  href={link.path}
                  className="text-white/60 hover:text-white hover:bg-white/[0.04] px-3.5 py-2.5 rounded-xl text-[13px] font-semibold transition-all duration-300 flex items-center justify-between w-full group -mx-3.5 border border-transparent hover:border-white/5"
                >
                  <span className="group-hover:translate-x-0.5 transition-transform duration-300">{link.name}</span>
                  <span className="opacity-0 scale-75 group-hover:opacity-100 group-hover:scale-100 translate-x-[-4px] group-hover:translate-x-0 transition-all duration-300 text-[#FF6700] font-bold text-[15px] shrink-0 leading-none">
                    →
                  </span>
                </Link>
              ))}
            </div>
          </motion.div>

          {/* Column 3: Our Presence */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            className="flex flex-col"
          >
            <h4 className="text-white font-oswald text-xl font-bold mb-6 relative inline-block pb-3 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-10 after:h-1 after:bg-[#FF6700] after:rounded-full">
              Our Presence
            </h4>
            <ul className="flex flex-col gap-4">
              {LOCATIONS.map((loc, idx) => (
                <li key={idx} className="flex flex-col group cursor-pointer">
                  <a
                    href={loc.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between"
                  >
                    <span className="text-[#eff6ff] font-semibold text-[14px] group-hover:text-[#FF6700] transition-colors flex items-center gap-2">
                      {loc.name}
                      <ArrowRight
                        size={12}
                        className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-[#FF6700]"
                      />
                    </span>
                    <div className="w-6 h-6 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-[#FF6700] transition-colors shadow-sm">
                      <MapPin
                        size={12}
                        className="text-white/60 group-hover:text-white transition-colors"
                      />
                    </div>
                  </a>
                  <span className="text-white/40 text-[11px] uppercase tracking-wider">
                    {loc.type}
                  </span>
                  {idx !== LOCATIONS.length - 1 && (
                    <div className="w-full h-px bg-gradient-to-r from-white/10 to-transparent mt-3"></div>
                  )}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Column 4: Contact & Gallery */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
            className="flex flex-col gap-8"
          >
            {/* Contact Info */}
            <div className="flex flex-col gap-5">
              <h4 className="text-white font-oswald text-xl font-bold mb-1 relative inline-block pb-3 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-10 after:h-1 after:bg-[#FF6700] after:rounded-full">
                Contact Us
              </h4>

              <a
                href="mailto:info@omegalabtesting.com"
                className="flex items-start gap-4 group"
              >
                <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0 group-hover:bg-gradient-to-br group-hover:from-[#FF6700] group-hover:to-orange-500 group-hover:border-transparent transition-all duration-300 shadow-sm relative overflow-hidden">
                  <Mail
                    size={18}
                    className="text-[#FF6700] group-hover:text-white transition-colors relative z-10"
                  />
                  <div className="absolute inset-0 bg-[#FF6700] scale-0 group-hover:scale-150 rounded-xl transition-transform duration-500 ease-out z-0"></div>
                </div>
                <div className="flex flex-col pt-0.5">
                  <span className="text-white/40 text-[10px] font-bold uppercase tracking-widest mb-1">
                    Official Email
                  </span>
                  <span className="text-white/90 text-[13px] font-medium group-hover:text-[#FF6700] transition-colors">
                    info@omegalabtesting.com
                  </span>
                </div>
              </a>

              <a
                href="mailto:omegalabinfo98@gmail.com"
                className="flex items-start gap-4 group"
              >
                <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0 group-hover:bg-gradient-to-br group-hover:from-[#FF6700] group-hover:to-orange-500 group-hover:border-transparent transition-all duration-300 shadow-sm relative overflow-hidden">
                  <Mail
                    size={18}
                    className="text-[#FF6700] group-hover:text-white transition-colors relative z-10"
                  />
                  <div className="absolute inset-0 bg-[#FF6700] scale-0 group-hover:scale-150 rounded-xl transition-transform duration-500 ease-out z-0"></div>
                </div>
                <div className="flex flex-col pt-0.5">
                  <span className="text-white/40 text-[10px] font-bold uppercase tracking-widest mb-1">
                    General Inquiries
                  </span>
                  <span className="text-white/90 text-[13px] font-medium group-hover:text-[#FF6700] transition-colors">
                    omegalabinfo98@gmail.com
                  </span>
                </div>
              </a>

              <a
                href="tel:08062180808"
                className="flex items-start gap-4 group"
              >
                <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0 group-hover:bg-gradient-to-br group-hover:from-[#FF6700] group-hover:to-orange-500 group-hover:border-transparent transition-all duration-300 shadow-sm relative overflow-hidden">
                  <Phone
                    size={18}
                    className="text-[#FF6700] group-hover:text-white transition-colors relative z-10"
                  />
                  <div className="absolute inset-0 bg-[#FF6700] scale-0 group-hover:scale-150 rounded-xl transition-transform duration-500 ease-out z-0"></div>
                </div>
                <div className="flex flex-col pt-0.5">
                  <span className="text-white/40 text-[10px] font-bold uppercase tracking-widest mb-1">
                    Corporate Office
                  </span>
                  <span className="text-white/90 text-[13px] font-medium group-hover:text-[#FF6700] transition-colors">
                    08062180808
                  </span>
                </div>
              </a>
            </div>

            {/* Dynamic Team Slider */}
            <div className="flex flex-col mt-2">
              <span className="text-white font-oswald text-xs font-bold mb-3 tracking-widest uppercase flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#FF6700] animate-pulse"></span>
                Inside The Lab
              </span>

              <div className="relative w-full aspect-[16/10] rounded-xl overflow-hidden group shadow-lg border border-white/5">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentSlide}
                    initial={{ opacity: 0, scale: 1.1 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.6 }}
                    className="absolute inset-0"
                  >
                    <Image
                      src={TEAM_IMAGES[currentSlide]}
                      alt={`Team Slide ${currentSlide + 1}`}
                      fill
                      className="object-cover"
                      unoptimized
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0e0b30]/90 via-[#0e0b30]/30 to-transparent"></div>
                  </motion.div>
                </AnimatePresence>

                {/* Slider Dots */}
                <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex items-center gap-2 z-20">
                  {TEAM_IMAGES.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setCurrentSlide(idx)}
                      className={`h-1.5 rounded-full transition-all duration-300 ${
                        idx === currentSlide
                          ? "w-6 bg-[#FF6700]"
                          : "w-1.5 bg-white/40 hover:bg-white/80"
                      }`}
                      aria-label={`Go to slide ${idx + 1}`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.5 }}
          className="max-w-7xl mx-auto mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 relative"
        >
          <p className="text-white/40 text-[12px] font-medium tracking-wide">
            © {new Date().getFullYear()} Omegalab Testing Services. All Rights
            Reserved.
          </p>
          <div className="flex items-center gap-4 text-white/40 text-[12px] font-medium tracking-wide">
            <Link href="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <span className="w-1 h-1 bg-white/20 rounded-full"></span>
            <Link href="/terms-and-conditions" className="hover:text-white transition-colors">Terms & Conditions</Link>
          </div>
          <div className="flex items-center gap-1.5 text-white/40 text-[12px] font-medium tracking-wider">
            <span>CRAFTED BY</span>
            <a
              href="https://addwins.in"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-[#FF6700] font-bold transition-colors"
            >
              ADDWINS
            </a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
