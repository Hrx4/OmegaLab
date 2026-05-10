"use client";

import { useState, useRef, useEffect } from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
} from "react-simple-maps";
import { motion, AnimatePresence } from "motion/react";

const geoUrl = "/maps/india-topo.json";

// =============================================================================
// BRANCH DATA — Easy to add, remove, or update locations
// Types: "accredited" (Green) | "lab" (Blue) | "collection" (Black)
// Coordinates: [longitude, latitude]
// =============================================================================

type BranchType = "accredited" | "lab" | "collection";

interface Branch {
  name: string;
  coordinates: [number, number];
  type: BranchType;
  state: string;
  details: string[];
  nablCode?: string;
}

const branches: Branch[] = [
  // ── GREEN: NABL Accredited Laboratories ──────────────────────────────
  {
    name: "Kolkata (HQ)",
    coordinates: [88.3639, 22.5726],
    type: "accredited",
    state: "West Bengal",
    details: [
      "Central Laboratory (Head Office)",
      "14,000 sq.ft. facility",
      "900+ NABL Parameters",
      "120+ Team Members",
    ],
    nablCode: "TC-11935",
  },
  {
    name: "Siliguri",
    coordinates: [88.4275, 26.7271],
    type: "accredited",
    state: "West Bengal · North Bengal",
    details: [
      "North Bengal Regional Lab",
      "Construction Materials Testing",
      "Civil Engineering Tests",
    ],
    nablCode: "TC-13401",
  },
  {
    name: "Ranchi",
    coordinates: [85.3096, 23.3441],
    type: "accredited",
    state: "Jharkhand",
    details: [
      "Industrial Materials Testing",
      "Ferrous & Non-Ferrous Metals",
      "Infrastructure Project Support",
    ],
    nablCode: "TC-15509",
  },
  {
    name: "Gandhidham",
    coordinates: [70.1337, 23.0753],
    type: "accredited",
    state: "Gujarat",
    details: [
      "Western India Operations",
      "Construction Material Testing",
      "NABL Accredited Facility",
    ],
    nablCode: "TC-16480",
  },
  {
    name: "Odisha",
    coordinates: [85.8245, 20.9517],
    type: "accredited",
    state: "Odisha",
    details: [
      "Eastern India Operations",
      "NABL Accredited Lab",
      "Full-scope Testing",
    ],
    nablCode: "TC-17671",
  },

  // ── BLUE: Other Laboratories ─────────────────────────────────────────
  {
    name: "Mumbai",
    coordinates: [72.8777, 19.076],
    type: "lab",
    state: "Maharashtra",
    details: [
      "Western India Lab",
      "Material Testing Services",
    ],
  },
  {
    name: "Pune Unit-1",
    coordinates: [73.7, 18.52],
    type: "lab",
    state: "Maharashtra",
    details: [
      "Pune Lab Facility Unit 1",
      "Construction & Industrial Testing",
    ],
  },
  {
    name: "Pune Unit-2",
    coordinates: [74.05, 18.62],
    type: "lab",
    state: "Maharashtra",
    details: [
      "Pune Lab Facility Unit 2",
      "Extended Testing Capabilities",
    ],
  },
  {
    name: "Prayas-1",
    coordinates: [87.85, 21.95],
    type: "lab",
    state: "Eastern India",
    details: [
      "Prayas Lab Unit",
      "Supporting Eastern Region",
    ],
  },

  // ── BLACK: Sample Collection Centres ─────────────────────────────────
  {
    name: "Baddi",
    coordinates: [76.7914, 30.9578],
    type: "collection",
    state: "Himachal Pradesh",
    details: [
      "North India Collection Center",
      "Sample pick-up point",
    ],
  },
  {
    name: "Lucknow",
    coordinates: [80.9462, 26.8467],
    type: "collection",
    state: "Uttar Pradesh",
    details: [
      "Central India Collection Hub",
      "UP region operations",
    ],
  },
  {
    name: "Hyderabad",
    coordinates: [78.4867, 17.385],
    type: "collection",
    state: "Telangana",
    details: [
      "South-Central Collection Center",
      "Telangana region operations",
    ],
  },
  {
    name: "Nellore",
    coordinates: [79.9865, 14.4426],
    type: "collection",
    state: "Andhra Pradesh",
    details: [
      "AP Collection Center",
      "Sample collection point",
    ],
  },
  {
    name: "Chennai",
    coordinates: [80.2707, 13.0827],
    type: "collection",
    state: "Tamil Nadu",
    details: [
      "South India Collection Hub",
      "Tamil Nadu operations",
    ],
  },
];

// =============================================================================

const typeConfig: Record<
  BranchType,
  { color: string; glow: string; label: string; icon: string }
> = {
  accredited: {
    color: "#22c55e",
    glow: "rgba(34, 197, 94, 0.45)",
    label: "NABL Accredited Lab",
    icon: "🔬",
  },
  lab: {
    color: "#3b82f6",
    glow: "rgba(59, 130, 246, 0.45)",
    label: "Other Laboratory",
    icon: "🧪",
  },
  collection: {
    color: "#1E1B5C",
    glow: "rgba(30, 27, 92, 0.35)",
    label: "Sample Collection Centre",
    icon: "📦",
  },
};

export default function IndiaBranchMap() {
  const [activeBranch, setActiveBranch] = useState<Branch | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // Close popup when clicking outside the container
  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (
        containerRef.current &&
        !containerRef.current.contains(e.target as Node)
      ) {
        setActiveBranch(null);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleMarkerClick = (branch: Branch) => {
    setActiveBranch((prev) =>
      prev?.name === branch.name ? null : branch
    );
  };

  return (
    <section className="bg-[#1E1B5C] relative py-16 md:py-24 px-4 md:px-12 overflow-hidden">
      {/* Subtle radial glow */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] rounded-full bg-[#FF6700]/[0.03] blur-[120px]" />
      </div>

      <div className="max-w-[1300px] mx-auto relative z-10" ref={containerRef}>
        {/* ── Section Header ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 md:mb-14"
        >
          <h2 className="text-[24px] md:text-[38px] font-black text-white mb-2 font-oswald tracking-tight">
            Our Presence Across India
          </h2>
          <p className="text-[13px] md:text-[16px] text-white/50 max-w-2xl mx-auto">
            NABL-accredited laboratories, testing facilities, and sample
            collection centres spanning the nation
          </p>
          <div className="w-[60px] h-[4px] bg-[#FF6700] mx-auto mt-3 rounded-full" />
        </motion.div>

        {/* ── Legend ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-5 md:gap-8 mb-8"
        >
          {(
            [
              ["accredited", "Accredited Laboratories"],
              ["lab", "Other Laboratories"],
              ["collection", "Sample Collection Centres"],
            ] as const
          ).map(([key, label]) => (
            <div key={key} className="flex items-center gap-2">
              <span
                className="w-3 h-3 rounded-full inline-block border-2 border-white/20 shadow-sm"
                style={{ backgroundColor: typeConfig[key].color }}
              />
              <span className="text-[11px] md:text-[13px] font-semibold text-white/60 uppercase tracking-[0.5px]">
                {label}
              </span>
            </div>
          ))}
        </motion.div>

        {/* ── Map + Detail Panel ── */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          <div className="flex flex-col lg:flex-row gap-6 items-stretch">
            {/* Map Card */}
            <div className="flex-1 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 overflow-hidden relative">
              <ComposableMap
                projection="geoMercator"
                projectionConfig={{
                  center: [82, 22.5],
                  scale: 1050,
                }}
                width={800}
                height={870}
                style={{ width: "100%", height: "auto" }}
              >
                <Geographies geography={geoUrl}>
                  {({ geographies }) =>
                    geographies.map((geo) => (
                      <Geography
                        key={geo.rsmKey}
                        geography={geo}
                        fill="rgba(255,255,255,0.08)"
                        stroke="rgba(255,255,255,0.15)"
                        strokeWidth={0.5}
                        style={{
                          default: { outline: "none" },
                          hover: {
                            fill: "rgba(255,255,255,0.12)",
                            outline: "none",
                            cursor: "default",
                          },
                          pressed: { outline: "none" },
                        }}
                      />
                    ))
                  }
                </Geographies>

                {/* Branch markers */}
                {branches.map((branch) => {
                  const config = typeConfig[branch.type];
                  const isActive = activeBranch?.name === branch.name;

                  return (
                    <Marker
                      key={branch.name}
                      coordinates={branch.coordinates}
                      onClick={() => handleMarkerClick(branch)}
                    >
                      {/* Invisible hit area for easier clicking */}
                      <circle r={20} fill="transparent" style={{ cursor: "pointer" }} />

                      {/* Pulse ring */}
                      <circle r={14} fill="none" stroke={config.color} strokeWidth={1} opacity={0.2}>
                        <animate attributeName="r" from="8" to="20" dur="2.5s" repeatCount="indefinite" />
                        <animate attributeName="opacity" from="0.4" to="0" dur="2.5s" repeatCount="indefinite" />
                      </circle>

                      {/* Active highlight ring */}
                      {isActive && (
                        <circle r={13} fill="none" stroke={config.color} strokeWidth={2.5} opacity={0.7} />
                      )}

                      {/* Main dot */}
                      <circle
                        r={isActive ? 7 : 5}
                        fill={config.color}
                        stroke="#fff"
                        strokeWidth={2}
                        style={{
                          cursor: "pointer",
                          filter: `drop-shadow(0 0 5px ${config.glow})`,
                          transition: "all 0.2s ease",
                        }}
                      />

                      {/* Label */}
                      <text
                        textAnchor="middle"
                        y={-14}
                        style={{
                          fontSize: 9,
                          fill: "rgba(255,255,255,0.85)",
                          fontWeight: 700,
                          fontFamily: "inherit",
                          pointerEvents: "none",
                          textShadow: "0 1px 4px rgba(0,0,0,0.6), 0 0 8px rgba(0,0,0,0.4)",
                        }}
                      >
                        {branch.name.replace(" (HQ)", "")}
                      </text>
                    </Marker>
                  );
                })}
              </ComposableMap>

              {/* Hint */}
              <div className="absolute bottom-3 left-0 right-0 text-center">
                <span className="text-[10px] text-white/25 font-medium bg-black/20 px-3 py-1 rounded-full backdrop-blur-sm">
                  Click on a marker to view details
                </span>
              </div>
            </div>

            {/* ── Detail Panel ── */}
            <AnimatePresence mode="wait">
              {activeBranch ? (
                <motion.div
                  key={activeBranch.name}
                  initial={{ opacity: 0, x: 20, scale: 0.97 }}
                  animate={{ opacity: 1, x: 0, scale: 1 }}
                  exit={{ opacity: 0, x: 20, scale: 0.97 }}
                  transition={{ duration: 0.25, ease: "easeOut" }}
                  className="w-full lg:w-[320px] shrink-0"
                >
                  <div className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 overflow-hidden h-full">
                    {/* Colored accent bar */}
                    <div
                      className="h-1 w-full"
                      style={{ backgroundColor: typeConfig[activeBranch.type].color }}
                    />

                    <div className="p-5 md:p-6">
                      {/* Close */}
                      <button
                        onClick={() => setActiveBranch(null)}
                        className="float-right w-7 h-7 rounded-full bg-white/5 flex items-center justify-center text-white/40 hover:bg-white/10 hover:text-white/70 transition-colors cursor-pointer text-[12px]"
                      >
                        ✕
                      </button>

                      {/* Icon + Name */}
                      <div className="flex items-start gap-3 mb-4">
                        <span className="text-[28px] mt-0.5">
                          {typeConfig[activeBranch.type].icon}
                        </span>
                        <div>
                          <h4 className="text-[18px] md:text-[20px] font-extrabold text-white leading-tight font-oswald">
                            {activeBranch.name}
                          </h4>
                          <p className="text-[12px] text-white/40 font-medium mt-0.5">
                            {activeBranch.state}
                          </p>
                        </div>
                      </div>

                      {/* Type badge */}
                      <span
                        className="inline-flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-[0.5px] px-3 py-1.5 rounded-full mb-4"
                        style={{
                          backgroundColor: typeConfig[activeBranch.type].color + "20",
                          color: typeConfig[activeBranch.type].color,
                        }}
                      >
                        ● {typeConfig[activeBranch.type].label}
                      </span>

                      {/* NABL code */}
                      {activeBranch.nablCode && (
                        <div className="flex items-center gap-2 mb-4 bg-[#FF6700]/10 rounded-lg px-3 py-2.5">
                          <span className="text-[14px]">🏛️</span>
                          <span className="text-[12px] font-bold text-[#FF6700]">
                            NABL: {activeBranch.nablCode}
                          </span>
                        </div>
                      )}

                      {/* Details */}
                      <div className="flex flex-col">
                        {activeBranch.details.map((detail, idx) => (
                          <div
                            key={idx}
                            className="flex items-center gap-3 text-[13px] text-white/60 py-2.5 border-b border-white/5 last:border-0"
                          >
                            <span
                              className="w-1.5 h-1.5 rounded-full shrink-0"
                              style={{ backgroundColor: typeConfig[activeBranch.type].color }}
                            />
                            {detail}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ) : (
                <motion.div
                  key="placeholder"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="hidden lg:flex w-[320px] shrink-0 items-center justify-center"
                >
                  <div className="border-2 border-dashed border-white/10 rounded-2xl p-8 text-center w-full">
                    <div className="text-[40px] mb-3 opacity-20">📍</div>
                    <p className="text-[13px] text-white/20 font-semibold leading-relaxed">
                      Click on any location marker
                      <br />
                      to view branch details
                    </p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* ── Bottom Stats ── */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-6"
          >
            {[
              { value: "5", label: "Accredited Labs", color: "#22c55e" },
              { value: "4", label: "Other Laboratories", color: "#3b82f6" },
              { value: "5", label: "Collection Centres", color: "#FF6700" },
              { value: "Pan India", label: "Nationwide Coverage", color: "#ffffff" },
            ].map((stat, idx) => (
              <div
                key={idx}
                className="bg-white/5 rounded-xl p-4 text-center border border-white/5 hover:-translate-y-0.5 transition-transform"
              >
                <div
                  className="text-[20px] md:text-[24px] font-black font-oswald"
                  style={{ color: stat.color }}
                >
                  {stat.value}
                </div>
                <div className="text-[10px] uppercase tracking-[1px] text-white/40 font-semibold mt-0.5">
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
