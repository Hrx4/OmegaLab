"use client";

import Image from "next/image";
import Link from "next/link";

const RESOURCE_LINKS = [
  { name: "Home", path: "/" },
  { name: "About Us", path: "/about" },
  { name: "Accrediation", path: "/accrediation" },
  { name: "Facilities", path: "/facilities" },
  { name: "Profile", path: "/profile" },
  { name: "Infrastructure", path: "/infrastructure" },
  { name: "Our Branch", path: "/our-branch" },
  { name: "Lab Tour", path: "/lab-tour" },
  { name: "Our Client", path: "/our-client" },
  { name: "Contact Us", path: "/contact" },
];

const LOGO = "https://res.cloudinary.com/de4cnpfm1/image/upload/v1778247941/LOGO-_OCS_eamyrc.jpg";

const LABS_LEFT = [
  { name: "Kolkata\nLab-1", iframemaps: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d29497.216140629127!2d88.3171!3d22.460921!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a027af369b75e1f%3A0xbbe493a0716b324a!2sOmegalabTesting%20Services%20Pvt.%20Ltd.!5e0!3m2!1sen!2sus!4v1778321533839!5m2!1sen!2sus" 
    , maps:"https://maps.app.goo.gl/eMGgb9J1VZSSbaBK8"
  },
  { name: "Kolkata\nLab-2", iframemaps: "#", maps: "#" },
  { name: "Siliguri\nLab", iframemaps: "#", maps: "#" },
];

const LABS_RIGHT = [
  { name: "Ranchi\nLab", iframemaps: "#", maps: "#" },
  { name: "Odisha\nLab", iframemaps: "#", maps: "#" },
];

const SOCIAL = [
  { label: "Facebook", text: "f", bg: "bg-[#3B5998]" },
  { label: "LinkedIn", text: "in", bg: "bg-[#0077B5]" },
  { label: "Instagram", text: "ig", bg: "bg-gradient-to-br from-[#f09433] via-[#dc2743] to-[#833ab4]" },
  { label: "Google", text: "G", bg: "bg-[#F4B400]" },
  { label: "YouTube", text: "▶", bg: "bg-[#FF0000]" },
];

function MapCard({ name, maps , iframemaps }: { name: string; maps: string; iframemaps: string }) {
  const [line1, line2] = name.split("\n");

  return (
    <div className="flex w-full lg:w-[270px] max-w-full overflow-hidden rounded-sm border border-white/20 bg-white">
      <div className="w-[86px] shrink-0 border-r border-slate-200 bg-[#f5f7fb] px-3 py-4 text-center text-[12px] font-bold leading-tight text-[#1e1b5c]">
        {line1}
        <br />
        {line2}
      </div>

        <div className="relative min-h-[120px] w-full overflow-hidden rounded-lg">
  <iframe
    className="absolute inset-0 h-full w-full"
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
    src={iframemaps}
  />

  <a
    href={maps}
    target="_blank"
    rel="noopener noreferrer"
    className="absolute inset-0 z-10"
  >
    <div className="absolute left-2 top-2 rounded-sm bg-white px-2 py-1 text-[11px] font-semibold text-[#4285F4] shadow">
      Maps ↗
    </div>
  </a>
</div>
    </div>
  );
}

export default function Footer() {
  return (
    <footer className="mt-16 sm:mt-20 lg:mt-24 bg-[#1E1B5C] border-t-[3px] border-[#FF6700] overflow-x-hidden">
      <div className="mx-auto max-w-[1120px] px-4 sm:px-6 lg:px-6">
        {/* Newsletter */}
        <div className="pt-6 sm:pt-8 lg:pt-10">
          <div className="w-full rounded-[14px] sm:rounded-[16px] border-2 border-white bg-[#EEF4FF] px-4 py-5 shadow-[0_12px_30px_rgba(0,0,0,0.18)] sm:px-6 sm:py-7 md:px-8 lg:px-16 lg:py-10">
            <div className="flex flex-col gap-6 md:gap-8 lg:flex-row lg:items-center lg:justify-between">
              <div className="w-full max-w-[560px] min-w-0">
                <h3 className="mb-3 sm:mb-4 text-[22px] sm:text-[24px] font-extrabold leading-tight text-[#1E1B5C] break-words">
                  Stay Updated with OmegaLab
                </h3>
                <p className="mb-4 sm:mb-5 text-[14px] sm:text-[15px] leading-7 sm:leading-8 text-[#1E1B5C]/80 break-words">
                  Subscribe to receive the latest updates on testing standards, industry insights,
                  and service innovations.
                </p>
                <p className="text-[13px] sm:text-[14px] font-medium text-[#FF6700] break-words">
                  We respect your privacy. No spam—only relevant updates.
                </p>
              </div>

              <div className="w-full max-w-full sm:max-w-[360px] lg:max-w-[310px] min-w-0 shrink-0 rounded-[14px] sm:rounded-[16px] border-[3px] border-[#3b3e77] p-3 bg-[#EEF4FF]">
                <form className="flex flex-col gap-3 sm:gap-4">
                  <input
                    type="text"
                    placeholder="First Name"
                    className="w-full min-w-0 h-[44px] rounded-[12px] sm:rounded-[14px] border border-slate-400 bg-white px-4 text-[14px] text-[#1E1B5C] outline-none"
                  />
                  <input
                    type="email"
                    placeholder="Email ID"
                    className="w-full min-w-0 h-[44px] rounded-[12px] sm:rounded-[14px] border border-slate-400 bg-white px-4 text-[14px] text-[#1E1B5C] outline-none"
                  />
                  <button
                    type="submit"
                    className="w-full h-[42px] sm:h-[40px] rounded-[12px] sm:rounded-[14px] bg-[#1E1B5C] text-[13px] sm:text-[14px] font-bold tracking-wide text-white transition-colors hover:bg-[#FF6700]"
                  >
                    SUBSCRIBE
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>

        {/* Main footer */}
        <div className="pb-8 pt-10 sm:pt-12 lg:pt-14">
          <div className="grid grid-cols-1 gap-10 sm:gap-12 md:grid-cols-2 lg:grid-cols-[260px_160px_270px_270px] lg:gap-8">
            {/* Column 1 */}
            <div className="min-w-0">
              <div className="mb-5 flex items-center gap-3 min-w-0">
                <div className="w-[40px] h-[40px] md:w-[55px] md:h-[55px] xl:w-[68px] xl:h-[68px] bg-white rounded-2xl shadow-lg shrink-0 overflow-hidden flex items-center justify-center">
                  <Image
                    src={LOGO}
                    alt="Omega Lab Logo"
                    width={30}
                    height={30}
                    className="object-contain md:w-[44px] md:h-[44px] xl:w-[56px] xl:h-[56px]"
                  />
                </div>
                <div className="min-w-0 leading-tight overflow-hidden">
                  <div className="text-[20px] sm:text-[24px] font-extrabold tracking-tight text-white break-words sm:truncate">
                    OMEGA<span className="text-[#63B7F6]">LAB</span>
                  </div>
                  <div className="text-[9px] sm:text-[10px] uppercase tracking-wide text-white/75 leading-tight break-words">
                    Testing Services Private Limited
                  </div>
                </div>
              </div>

              <div className="mb-6 flex flex-wrap gap-2">
                {[1, 2, 3, 4].map((item) => (
                  <div
                    key={item}
                    className="flex h-[28px] w-[28px] items-center justify-center rounded-full border border-white/20 bg-white/10 text-[10px] text-white/50 shrink-0"
                  >
                    ★
                  </div>
                ))}
              </div>

              <div className="mb-5 border-b border-white/20" />

              <h4 className="mb-4 text-[18px] font-bold text-white">Follow Us</h4>

              <div className="mb-8 flex flex-wrap gap-3">
                {SOCIAL.map((item) => (
                  <a
                    key={item.label}
                    href="#"
                    className={`flex h-[36px] w-[36px] shrink-0 items-center justify-center rounded-full text-[14px] font-bold text-white ${item.bg}`}
                  >
                    {item.text}
                  </a>
                ))}
              </div>

              <div className="h-[120px] w-full max-w-[260px] overflow-hidden rounded-sm bg-slate-500/40">
                <div className="flex h-full items-center justify-center px-3 text-center text-[11px] text-white/60">
                  Team Photo
                </div>
              </div>
            </div>

            {/* Column 2 */}
            <div className="min-w-0">
              <h4 className="mb-5 inline-block border-b-2 border-[#FF6700] pb-2 text-[16px] font-bold text-white">
                Resource Links
              </h4>

              <ul className="space-y-3 sm:space-y-4">
                {RESOURCE_LINKS.map((link) => (
                  <li key={link.name} className="min-w-0">
                    <Link
                      href={link.path}
                      className="flex min-w-0 items-start gap-3 text-[14px] text-white/75 transition-colors hover:text-[#FF6700]"
                    >
                      <span className="shrink-0 text-[#d9d9d9]">→</span>
                      <span className="break-words">{link.name}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3 */}
            <div className="min-w-0">
              <h4 className="mb-5 text-[16px] font-bold text-white">Our Presence</h4>
              <div className="space-y-5">
                {LABS_LEFT.map((lab) => (
                  <div key={lab.name} className="min-w-0">
                    <MapCard name={lab.name} iframemaps={lab.iframemaps} maps={lab.maps} />
                    <div className="mt-4 border-b border-white/20" />
                  </div>
                ))}
              </div>
            </div>

            {/* Column 4 */}
            <div className="min-w-0">
              <h4 className="mb-5 text-[16px] font-bold text-white">Our Presence</h4>
              <div className="space-y-5">
                {LABS_RIGHT.map((lab) => (
                  <div key={lab.name} className="min-w-0">
                    <MapCard name={lab.name} iframemaps={lab.iframemaps} maps={lab.maps} />
                    <div className="mt-4 border-b border-white/20" />
                  </div>
                ))}
              </div>

              <div className="mt-8 min-w-0">
                <h4 className="mb-4 text-[16px] font-bold text-white">Contact Info</h4>
                <div className="flex min-w-0 items-start gap-3 sm:items-center">
                  <div className="flex h-[42px] w-[42px] shrink-0 items-center justify-center rounded-full bg-[#FF4B4B] text-white">
                    ✉
                  </div>
                  <div className="min-w-0">
                    <div className="text-[15px] font-semibold text-white">Email Us</div>
                    <div className="break-all text-[13px] text-white/60">omegalabinfo98@gmail.com</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="mt-10 flex flex-col items-center justify-between gap-3 border-t border-white/10 pt-5 text-center text-[11px] text-white/40 md:flex-row md:text-left">
            <p className="break-words">© 2026 Omegalab Testing Services Private Limited. All Rights Reserved.</p>
            <p>Design By addwins.in</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
