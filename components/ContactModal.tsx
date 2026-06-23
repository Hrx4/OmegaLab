import { motion, AnimatePresence } from "framer-motion";
import { X, MapPin, Phone, Mail, Clock, Send } from "lucide-react";
import { useState } from "react";

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ContactModal({ isOpen, onClose }: ContactModalProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm"
          />

          {/* Modal Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="relative w-full max-w-4xl bg-white rounded-2xl shadow-2xl overflow-hidden flex flex-col md:flex-row"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 z-10 bg-white/10 md:bg-black/5 hover:bg-white/20 hover:md:bg-black/10 p-2 rounded-full backdrop-blur-md transition-colors"
            >
              <X className="w-5 h-5 text-white md:text-gray-800" />
            </button>

            {/* Left Side: Contact Info */}
            <div className="w-full md:w-2/5 bg-[#1E1B5C] text-white p-6 md:p-8 flex flex-col relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#FF6700] rounded-full blur-[100px] opacity-20 -mr-20 -mt-20"></div>
              
              <h3 className="text-3xl font-extrabold mb-2 relative z-10">Contact Us</h3>
              <p className="text-white/70 mb-8 relative z-10 text-sm">
                We are here to assist you with any questions or inquiries.
              </p>

              <div className="space-y-6 relative z-10 flex-1">
                <div className="flex gap-4">
                  <div className="bg-white/10 p-3 rounded-full h-fit shrink-0">
                    <MapPin className="w-5 h-5 text-[#FF6700]" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">Head Office — Kolkata</h4>
                    <p className="text-white/80 text-sm leading-relaxed">
                      Kolkata, West Bengal, India — 14,000 sq.ft. Central Lab
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="bg-white/10 p-3 rounded-full h-fit shrink-0">
                    <Phone className="w-5 h-5 text-[#FF6700]" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">Phone</h4>
                    <p className="text-white/80 text-sm flex flex-col gap-1">
                      <a href="tel:03324971903" className="hover:text-white transition-colors">+91-033 2497 1903</a>
                      <a href="tel:08062180808" className="hover:text-white transition-colors">+91 8062180808</a>
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="bg-white/10 p-3 rounded-full h-fit shrink-0">
                    <Mail className="w-5 h-5 text-[#FF6700]" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">Email</h4>
                    <p className="text-white/80 text-sm flex flex-col gap-1">
                      <a href="mailto:Omegalabinfo98@gmail.com" className="hover:text-white transition-colors break-all">Omegalabinfo98@gmail.com</a>
                      <a href="mailto:info@omegalabtesting.com" className="hover:text-white transition-colors break-all">info@omegalabtesting.com</a>
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="bg-white/10 p-3 rounded-full h-fit shrink-0">
                    <Clock className="w-5 h-5 text-[#FF6700]" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">Working Hours</h4>
                    <p className="text-white/80 text-sm flex flex-col gap-1">
                      <span>Mon – Fri: 9.30 AM to 6.30 PM</span>
                      <span>Sat: 9.30 AM to 2.00 PM</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side: Form */}
            <div className="w-full md:w-3/5 p-6 md:p-8 bg-gray-50 flex flex-col justify-center">
              <h3 className="text-2xl font-bold text-[#1E1B5C] mb-5 hidden md:block">Send us a Message</h3>
              
              <form 
                action="https://formsubmit.co/Omegalabinfo98@gmail.com" 
                method="POST"
                className="space-y-4"
              >
                {/* FormSubmit Configuration */}
                <input type="hidden" name="_subject" value="New Contact Us Modal Submission - OmegaLab" />
                <input type="hidden" name="_captcha" value="false" />
                <input type="hidden" name="_template" value="table" />
                <input type="hidden" name="_cc" value="info@omegalabtesting.com" />
                {/* Optional: Add a success redirect url if needed */}
                {/* <input type="hidden" name="_next" value="https://yourdomain.com/thanks" /> */}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label htmlFor="name" className="text-sm font-semibold text-gray-700">Full Name</label>
                    <input 
                      type="text" 
                      id="name" 
                      name="name" 
                      required 
                      placeholder="John Doe"
                      className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#FF6700] focus:border-[#FF6700] outline-none transition-all bg-white"
                    />
                  </div>
                  
                  <div className="space-y-1.5">
                    <label htmlFor="phone" className="text-sm font-semibold text-gray-700">Phone Number</label>
                    <input 
                      type="tel" 
                      id="phone" 
                      name="phone" 
                      required 
                      placeholder="+91 XXXXX XXXXX"
                      className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#FF6700] focus:border-[#FF6700] outline-none transition-all bg-white"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label htmlFor="email" className="text-sm font-semibold text-gray-700">Email Address</label>
                    <input 
                      type="email" 
                      id="email" 
                      name="email" 
                      required 
                      placeholder="john@company.com"
                      className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#FF6700] focus:border-[#FF6700] outline-none transition-all bg-white"
                    />
                  </div>
                  
                  <div className="space-y-1.5">
                    <label htmlFor="company" className="text-sm font-semibold text-gray-700">Company Name</label>
                    <input 
                      type="text" 
                      id="company" 
                      name="company" 
                      placeholder="Your Company Ltd."
                      className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#FF6700] focus:border-[#FF6700] outline-none transition-all bg-white"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="address" className="text-sm font-semibold text-gray-700">Address</label>
                  <input 
                    type="text" 
                    id="address" 
                    name="address" 
                    placeholder="City, State, Country"
                    className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#FF6700] focus:border-[#FF6700] outline-none transition-all bg-white"
                  />
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="message" className="text-sm font-semibold text-gray-700">Message</label>
                  <textarea 
                    id="message" 
                    name="message" 
                    required 
                    rows={3}
                    placeholder="How can we help you?"
                    className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#FF6700] focus:border-[#FF6700] outline-none transition-all resize-none bg-white"
                  ></textarea>
                </div>

                <button 
                  type="submit"
                  className="w-full bg-[#FF6700] hover:bg-[#e65c00] text-white font-bold py-3 px-6 rounded-lg transition-colors flex items-center justify-center gap-2 group mt-4"
                >
                  <span>Send Message</span>
                  <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
