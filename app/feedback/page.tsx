"use client";

import { useState, useEffect } from "react";
import { motion } from "motion/react";
import {
  Star,
  User,
  MapPin,
  Phone,
  Mail,
  Hash,
  MessageSquare,
  CheckCircle2,
  Send,
  ClipboardList,
} from "lucide-react";

const RATING_SUBJECTS = [
  "Promptness Of Laboratory Response",
  "Technical Support",
  "Attitude Of Laboratory Employee",
  "Quality Of Test Report",
  "Delivery Of Test Report",
  "Response On Urgent Test",
];

const RATING_LABELS = [
  { value: 5, label: "Excellent" },
  { value: 4, label: "Very Good" },
  { value: 3, label: "Good" },
  { value: 2, label: "Average" },
  { value: 1, label: "Below Average" },
];

const RATING_COLORS: Record<number, string> = {
  5: "#22c55e",
  4: "#84cc16",
  3: "#eab308",
  2: "#f97316",
  1: "#ef4444",
};

type Ratings = Record<string, number | null>;

export default function FeedbackPage() {
  const [ratings, setRatings] = useState<Ratings>(() =>
    Object.fromEntries(RATING_SUBJECTS.map((s) => [s, null]))
  );
  const [form, setForm] = useState({
    name: "",
    address: "",
    pinCode: "",
    mobile: "",
    email: "",
    reasons: "",
    remarks: "",
    date: "",
    confirmed: false,
  });
  const [submitted, setSubmitted] = useState(false);

  // Auto-populate today's date
  useEffect(() => {
    const today = new Date().toISOString().split("T")[0];
    setForm((f) => ({ ...f, date: today }));
  }, []);

  const handleField = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;
    setForm((f) => ({ ...f, [name]: type === "checkbox" ? checked : value }));
  };

  const handleRating = (subject: string, value: number) =>
    setRatings((r) => ({ ...r, [subject]: value }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const selectedColor = (val: number | null) =>
    val ? RATING_COLORS[val] : "#1E1B5C";

  // ── Success Screen ──────────────────────────────────────────────────────────
  if (submitted) {
    return (
      <div className="w-full min-h-screen bg-[#EFF6FF] flex items-center justify-center px-4 font-montserrat">
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-3xl shadow-2xl border-t-4 border-[#22c55e] p-10 md:p-16 max-w-lg w-full text-center"
        >
          <div className="w-20 h-20 rounded-full bg-[#22c55e]/10 flex items-center justify-center mx-auto mb-6">
            <CheckCircle2 size={44} className="text-[#22c55e]" />
          </div>
          <h2 className="text-[#1E1B5C] font-oswald font-black text-3xl uppercase mb-3">
            Thank You!
          </h2>
          <p className="text-slate-500 text-[15px] leading-relaxed mb-8">
            Your feedback has been recorded. We sincerely appreciate your time
            and will use your input to continue improving our services.
          </p>
          <button
            onClick={() => {
              setSubmitted(false);
              setForm({
                name: "",
                address: "",
                pinCode: "",
                mobile: "",
                email: "",
                reasons: "",
                remarks: "",
                date: new Date().toISOString().split("T")[0],
                confirmed: false,
              });
              setRatings(
                Object.fromEntries(RATING_SUBJECTS.map((s) => [s, null]))
              );
            }}
            className="bg-[#FF6700] hover:bg-[#e65c00] text-white font-bold px-8 py-3 rounded-xl uppercase tracking-wider text-sm transition-colors"
          >
            Submit Another Response
          </button>
        </motion.div>
      </div>
    );
  }

  // ── Main Form ───────────────────────────────────────────────────────────────
  return (
    <div className="w-full bg-[#EFF6FF] min-h-screen pb-24 font-montserrat">
      {/* Hero */}
      <div className="bg-[#1E1B5C] w-full pt-16 pb-28 px-4 md:px-12 relative overflow-hidden">
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#EFF6FF] to-transparent z-10" />
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#FF6700]/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-white/5 rounded-full blur-[80px] pointer-events-none" />

        <div className="max-w-[900px] mx-auto flex flex-col items-center relative z-20 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="w-16 h-16 rounded-2xl bg-[#FF6700]/20 border border-[#FF6700]/30 flex items-center justify-center mb-6"
          >
            <ClipboardList size={32} className="text-[#FF6700]" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.05 }}
            className="inline-flex items-center gap-2 bg-white/10 border border-white/20 backdrop-blur-sm text-white text-[11px] font-black uppercase tracking-[2px] px-4 py-2 rounded-full mb-4"
          >
            <ClipboardList size={13} className="text-[#FF6700]" />
            Feedback Form
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-[10px] font-bold uppercase tracking-[3px] text-[#FF6700] mb-3"
          >
            Quality Records No: OTSP/QR/40
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-white font-black text-[28px] md:text-[46px] font-oswald tracking-tight uppercase leading-[1.1] mb-2"
          >
            OMEGALAB TESTING SERVICES
          </motion.h1>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="text-[#FF6700] font-oswald font-black text-[18px] md:text-[26px] uppercase tracking-wide mb-4"
          >
            Customer Feedback &amp; Laboratory Performance
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="text-white/60 italic text-base md:text-lg"
          >
            Please help us to improve
          </motion.p>
        </div>
      </div>

      {/* Form Card */}
      <div className="max-w-[900px] mx-auto px-4 md:px-8 mt-[-60px] relative z-30">
        <form onSubmit={handleSubmit}>

          {/* ── Section 1: Customer Information ──────────────────────────── */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-3xl shadow-xl border-t-4 border-[#1E1B5C] p-8 md:p-10 mb-6"
          >
            <div className="flex items-center gap-3 mb-7">
              <div className="w-9 h-9 rounded-xl bg-[#1E1B5C]/10 flex items-center justify-center shrink-0">
                <User size={18} className="text-[#1E1B5C]" />
              </div>
              <h3 className="text-[#1E1B5C] font-oswald font-black text-xl uppercase tracking-tight">
                Customer Information
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {/* Name */}
              <div className="md:col-span-2 flex flex-col gap-1.5">
                <label className="text-[11px] font-bold uppercase tracking-widest text-slate-400 flex items-center gap-1.5">
                  <User size={12} /> Name of Customer
                </label>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleField}
                  placeholder="Full name"
                  required
                  className="w-full border-2 border-slate-200 focus:border-[#1E1B5C] outline-none rounded-xl px-4 py-3 text-[14px] text-slate-700 placeholder:text-slate-300 transition-colors bg-[#f9fbff]"
                />
              </div>

              {/* Address */}
              <div className="md:col-span-2 flex flex-col gap-1.5">
                <label className="text-[11px] font-bold uppercase tracking-widest text-slate-400 flex items-center gap-1.5">
                  <MapPin size={12} /> Address
                </label>
                <input
                  type="text"
                  name="address"
                  value={form.address}
                  onChange={handleField}
                  placeholder="Full address"
                  required
                  className="w-full border-2 border-slate-200 focus:border-[#1E1B5C] outline-none rounded-xl px-4 py-3 text-[14px] text-slate-700 placeholder:text-slate-300 transition-colors bg-[#f9fbff]"
                />
              </div>

              {/* Pin Code */}
              <div className="flex flex-col gap-1.5">
                <label className="text-[11px] font-bold uppercase tracking-widest text-slate-400 flex items-center gap-1.5">
                  <Hash size={12} /> Pin Code
                </label>
                <input
                  type="text"
                  name="pinCode"
                  value={form.pinCode}
                  onChange={handleField}
                  placeholder="e.g. 700063"
                  maxLength={6}
                  required
                  className="w-full border-2 border-slate-200 focus:border-[#1E1B5C] outline-none rounded-xl px-4 py-3 text-[14px] text-slate-700 placeholder:text-slate-300 transition-colors bg-[#f9fbff]"
                />
              </div>

              {/* Mobile */}
              <div className="flex flex-col gap-1.5">
                <label className="text-[11px] font-bold uppercase tracking-widest text-slate-400 flex items-center gap-1.5">
                  <Phone size={12} /> Mobile Number
                </label>
                <input
                  type="tel"
                  name="mobile"
                  value={form.mobile}
                  onChange={handleField}
                  placeholder="10-digit number"
                  maxLength={10}
                  required
                  className="w-full border-2 border-slate-200 focus:border-[#1E1B5C] outline-none rounded-xl px-4 py-3 text-[14px] text-slate-700 placeholder:text-slate-300 transition-colors bg-[#f9fbff]"
                />
              </div>

              {/* Email */}
              <div className="md:col-span-2 flex flex-col gap-1.5">
                <label className="text-[11px] font-bold uppercase tracking-widest text-slate-400 flex items-center gap-1.5">
                  <Mail size={12} /> Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleField}
                  placeholder="email@example.com"
                  required
                  className="w-full border-2 border-slate-200 focus:border-[#1E1B5C] outline-none rounded-xl px-4 py-3 text-[14px] text-slate-700 placeholder:text-slate-300 transition-colors bg-[#f9fbff]"
                />
              </div>
            </div>
          </motion.div>

          {/* ── Section 2: Performance Rating Grid ───────────────────────── */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-3xl shadow-xl border-t-4 border-[#FF6700] p-8 md:p-10 mb-6"
          >
            <div className="flex items-center gap-3 mb-3">
              <div className="w-9 h-9 rounded-xl bg-[#FF6700]/10 flex items-center justify-center shrink-0">
                <Star size={18} className="text-[#FF6700]" />
              </div>
              <h3 className="text-[#1E1B5C] font-oswald font-black text-xl uppercase tracking-tight">
                Performance Rating
              </h3>
            </div>
            <p className="text-slate-400 text-[12px] uppercase tracking-widest mb-7">
              Please tick the appropriate box from 1 to 5
            </p>

            {/* Rating Header Row */}
            <div className="hidden md:grid grid-cols-[1fr_repeat(5,_80px)] gap-2 mb-4 px-1">
              <div className="text-[10px] font-black uppercase tracking-widest text-slate-400">Subject</div>
              {RATING_LABELS.map((r) => (
                <div
                  key={r.value}
                  className="text-center text-[10px] font-black uppercase tracking-wide"
                  style={{ color: RATING_COLORS[r.value] }}
                >
                  <div className="text-lg font-oswald">{r.value}</div>
                  {r.label}
                </div>
              ))}
            </div>

            {/* Rating Rows */}
            <div className="flex flex-col divide-y divide-slate-100">
              {RATING_SUBJECTS.map((subject, si) => (
                <div
                  key={subject}
                  className="py-4 flex flex-col md:grid md:grid-cols-[1fr_repeat(5,_80px)] md:items-center gap-3 md:gap-2"
                >
                  <span className="text-[13px] md:text-[14px] font-semibold text-[#1E1B5C]">
                    {subject}
                  </span>
                  <div className="flex gap-3 md:contents">
                    {RATING_LABELS.map((r) => {
                      const isSelected = ratings[subject] === r.value;
                      return (
                        <button
                          type="button"
                          key={r.value}
                          onClick={() => handleRating(subject, r.value)}
                          title={r.label}
                          className="flex flex-col items-center md:justify-center group"
                        >
                          {/* Mobile label */}
                          <span
                            className="md:hidden text-[9px] font-bold uppercase mb-1"
                            style={{ color: RATING_COLORS[r.value] }}
                          >
                            {r.value}
                          </span>
                          <div
                            className="w-8 h-8 md:w-9 md:h-9 rounded-full border-2 flex items-center justify-center transition-all duration-200"
                            style={{
                              borderColor: isSelected
                                ? RATING_COLORS[r.value]
                                : "#e2e8f0",
                              backgroundColor: isSelected
                                ? RATING_COLORS[r.value]
                                : "transparent",
                              boxShadow: isSelected
                                ? `0 0 0 3px ${RATING_COLORS[r.value]}30`
                                : "none",
                            }}
                          >
                            {isSelected && (
                              <motion.div
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                className="w-3 h-3 rounded-full bg-white"
                              />
                            )}
                          </div>
                        </button>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>

            {/* Rating Legend (mobile) */}
            <div className="md:hidden mt-5 flex flex-wrap gap-3">
              {RATING_LABELS.map((r) => (
                <span
                  key={r.value}
                  className="text-[10px] font-bold uppercase px-2.5 py-1 rounded-full"
                  style={{
                    color: RATING_COLORS[r.value],
                    backgroundColor: RATING_COLORS[r.value] + "15",
                    border: `1px solid ${RATING_COLORS[r.value]}40`,
                  }}
                >
                  {r.value} – {r.label}
                </span>
              ))}
            </div>
          </motion.div>

          {/* ── Section 3: Comments & Submission ─────────────────────────── */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-3xl shadow-xl border-t-4 border-[#1E1B5C] p-8 md:p-10 mb-6"
          >
            <div className="flex items-center gap-3 mb-7">
              <div className="w-9 h-9 rounded-xl bg-[#1E1B5C]/10 flex items-center justify-center shrink-0">
                <MessageSquare size={18} className="text-[#1E1B5C]" />
              </div>
              <h3 className="text-[#1E1B5C] font-oswald font-black text-xl uppercase tracking-tight">
                Comments &amp; Remarks
              </h3>
            </div>

            <div className="flex flex-col gap-6">
              {/* Reasons */}
              <div className="flex flex-col gap-1.5">
                <label className="text-[11px] font-bold uppercase tracking-widest text-slate-400">
                  Reasons for rating below 3 (if any)
                </label>
                <textarea
                  name="reasons"
                  value={form.reasons}
                  onChange={handleField}
                  rows={4}
                  placeholder="Please describe any issues or concerns..."
                  className="w-full border-2 border-slate-200 focus:border-[#1E1B5C] outline-none rounded-xl px-4 py-3 text-[14px] text-slate-700 placeholder:text-slate-300 transition-colors bg-[#f9fbff] resize-none"
                />
              </div>

              {/* Remarks */}
              <div className="flex flex-col gap-1.5">
                <label className="text-[11px] font-bold uppercase tracking-widest text-slate-400">
                  Remarks
                </label>
                <textarea
                  name="remarks"
                  value={form.remarks}
                  onChange={handleField}
                  rows={4}
                  placeholder="Any additional feedback, suggestions, or compliments..."
                  className="w-full border-2 border-slate-200 focus:border-[#1E1B5C] outline-none rounded-xl px-4 py-3 text-[14px] text-slate-700 placeholder:text-slate-300 transition-colors bg-[#f9fbff] resize-none"
                />
              </div>

              {/* Date */}
              <div className="flex flex-col gap-1.5">
                <label className="text-[11px] font-bold uppercase tracking-widest text-slate-400">
                  Date
                </label>
                <input
                  type="date"
                  name="date"
                  value={form.date}
                  onChange={handleField}
                  required
                  className="w-full md:w-56 border-2 border-slate-200 focus:border-[#1E1B5C] outline-none rounded-xl px-4 py-3 text-[14px] text-slate-700 transition-colors bg-[#f9fbff]"
                />
              </div>

              {/* Digital Acknowledgment */}
              <label className="flex items-start gap-4 p-5 rounded-2xl border-2 border-slate-200 hover:border-[#1E1B5C]/40 transition-colors cursor-pointer group">
                <input
                  type="checkbox"
                  name="confirmed"
                  checked={form.confirmed}
                  onChange={handleField}
                  required
                  className="sr-only peer"
                />
                <div
                  className={`w-6 h-6 rounded-md border-2 shrink-0 flex items-center justify-center transition-all duration-200 ${
                    form.confirmed
                      ? "bg-[#1E1B5C] border-[#1E1B5C]"
                      : "border-slate-300 bg-white"
                  }`}
                >
                  {form.confirmed && (
                    <motion.svg
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      viewBox="0 0 12 12"
                      fill="none"
                      className="w-3.5 h-3.5"
                    >
                      <path
                        d="M1.5 6L4.5 9L10.5 3"
                        stroke="white"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </motion.svg>
                  )}
                </div>
                <div>
                  <div className="text-[13px] font-bold text-[#1E1B5C] mb-0.5">
                    Digital Acknowledgment
                  </div>
                  <div className="text-[12px] text-slate-400">
                    I confirm that this feedback is accurate and reflects my genuine experience with OmegaLab Testing Services.
                  </div>
                </div>
              </label>
            </div>
          </motion.div>

          {/* Submit */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex justify-center"
          >
            <button
              type="submit"
              className="inline-flex items-center gap-3 bg-gradient-to-r from-[#FF6700] to-[#ff8c3a] hover:from-[#e65c00] hover:to-[#ff7a22] text-white font-black text-[14px] uppercase tracking-widest px-12 py-5 rounded-2xl shadow-xl hover:shadow-[#FF6700]/40 hover:shadow-2xl transition-all duration-300 hover:-translate-y-0.5"
            >
              <Send size={18} />
              Submit Feedback
            </button>
          </motion.div>

        </form>
      </div>
    </div>
  );
}
