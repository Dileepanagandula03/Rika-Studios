
import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Linkedin, Twitter, Send as Telegram, Sparkles } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <div className="min-h-screen relative overflow-hidden pt-32 pb-24 bg-[#F7F9FC]">
      {/* 2026 FUTURISTIC BACKGROUND ELEMENTS */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        {/* Mesh/Grid Texture */}
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(#4F46E5 0.5px, transparent 0.5px)', backgroundSize: '24px 24px' }}></div>
        
        {/* Floating Gradient Orbs */}
        <motion.div 
          animate={{ x: [0, 50, 0], y: [0, 30, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[10%] left-[10%] w-[400px] h-[400px] rounded-full blur-[120px] opacity-20 bg-blue-400"
        ></motion.div>
        <motion.div 
          animate={{ x: [0, -40, 0], y: [0, 60, 0] }}
          transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-[10%] right-[10%] w-[500px] h-[500px] rounded-full blur-[150px] opacity-20 bg-purple-400"
        ></motion.div>
        <motion.div 
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[40%] left-[40%] w-[300px] h-[300px] rounded-full blur-[100px] opacity-10 bg-silver-400 bg-gray-300"
        ></motion.div>
      </div>

      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        
        {/* Hero Section */}
        <div className="text-center mb-20">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-[36px] font-bold text-[#111827] mb-6 tracking-tight"
            style={{ textShadow: '0 0 20px rgba(79, 70, 229, 0.1)' }}
          >
            Contact Us
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-gray-500 text-[14px] font-light max-w-2xl mx-auto"
          >
            Let’s build something smart, scalable, and meaningful together.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch max-w-6xl mx-auto">
          
          {/* Left Column: Get in Touch (Glassmorphism) */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            whileHover={{ y: -5 }}
            className="lg:col-span-5 rounded-[20px] p-10 relative overflow-hidden transition-all duration-500"
            style={{ 
              background: 'rgba(255, 255, 255, 0.65)',
              backdropFilter: 'blur(18px)',
              border: '1px solid rgba(255, 255, 255, 0.4)',
              boxShadow: '0 20px 40px rgba(0, 0, 0, 0.05), inset 0 0 0 1px rgba(255, 255, 255, 0.5)'
            }}
          >
            <h3 className="text-[18px] font-bold text-[#111827] mb-8 tracking-tight">Get in Touch</h3>
            
            <div className="space-y-8">
              <div className="flex items-center gap-5 group">
                <div className="w-12 h-12 rounded-2xl flex items-center justify-center text-[#111827] shrink-0 shadow-sm transition-transform group-hover:scale-110" style={{ background: 'linear-gradient(135deg, #F0F4FF 0%, #E0E7FF 100%)' }}>
                  <Mail size={20} />
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-[3px] text-[#111827] font-black mb-1 opacity-80">Electronic Mail</p>
                  <a href="mailto:hello@rikagayar.studios" className="text-[#111827] text-base font-medium hover:text-blue-600 transition-colors">
                    hello@rikagayar.studios
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-5 group">
                <div className="w-12 h-12 rounded-2xl flex items-center justify-center text-[#111827] shrink-0 shadow-sm transition-transform group-hover:scale-110" style={{ background: 'linear-gradient(135deg, #F0F4FF 0%, #E0E7FF 100%)' }}>
                  <Phone size={20} />
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-[3px] text-[#111827] font-black mb-1 opacity-80">Voice Line</p>
                  <a href="tel:+13018524988" className="text-[#111827] text-base font-medium hover:text-blue-600 transition-colors">
                    +1 (301) 852-4988
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-5 group">
                <div className="w-12 h-12 rounded-2xl flex items-center justify-center text-[#111827] shrink-0 shadow-sm transition-transform group-hover:scale-110" style={{ background: 'linear-gradient(135deg, #F0F4FF 0%, #E0E7FF 100%)' }}>
                  <MapPin size={20} />
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-[3px] text-[#111827] font-black mb-1 opacity-80">HQ Location</p>
                  <p className="text-[#111827] text-base font-medium">Maryland, USA</p>
                </div>
              </div>
            </div>

            <div className="mt-16 pt-10 border-t border-white/40">
              <div className="flex items-center gap-3 text-gray-400">
                <Sparkles size={16} className="text-[#111827] animate-pulse" />
                <span className="text-xs font-medium tracking-wider uppercase opacity-60">Future Ready Infrastructure</span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Contact Form (Glassmorphism) */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="lg:col-span-7 rounded-[20px] p-10 relative overflow-hidden"
            style={{ 
              background: 'rgba(255, 255, 255, 0.65)',
              backdropFilter: 'blur(18px)',
              border: '1px solid rgba(255, 255, 255, 0.4)',
              boxShadow: '0 20px 40px rgba(0, 0, 0, 0.05), inset 0 0 0 1px rgba(255, 255, 255, 0.5)'
            }}
          >
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[11px] font-bold text-gray-400 ml-1 uppercase tracking-widest">Full Name</label>
                  <input 
                    type="text" 
                    placeholder="Julian Thorne"
                    className="w-full bg-white/40 border border-white/60 rounded-xl px-6 py-4 text-[#111827] text-[14px] placeholder-gray-400 focus:bg-white/80 focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500/30 outline-none transition-all shadow-inner"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[11px] font-bold text-gray-400 ml-1 uppercase tracking-widest">Email Address</label>
                  <input 
                    type="email" 
                    placeholder="name@company.com"
                    className="w-full bg-white/40 border border-white/60 rounded-xl px-6 py-4 text-[#111827] text-[14px] placeholder-gray-400 focus:bg-white/80 focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500/30 outline-none transition-all shadow-inner"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[11px] font-bold text-gray-400 ml-1 uppercase tracking-widest">Your Message</label>
                <textarea 
                  rows={6} 
                  placeholder="Tell us about your next big idea..."
                  className="w-full bg-white/40 border border-white/60 rounded-xl px-6 py-4 text-[#111827] text-[14px] placeholder-gray-400 focus:bg-white/80 focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500/30 outline-none transition-all resize-none shadow-inner"
                ></textarea>
              </div>

              <motion.button 
                whileHover={{ scale: 1.02, boxShadow: '0 0 20px rgba(37, 99, 235, 0.3)' }}
                whileTap={{ scale: 0.98 }}
                type="submit" 
                className="w-full md:w-auto bg-gradient-to-r from-[#111827] to-[#1F2937] text-white px-12 py-5 rounded-full text-xs font-black uppercase tracking-[4px] shadow-xl flex items-center justify-center gap-4 group"
              >
                Send Message <Send size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </motion.button>
            </form>
          </motion.div>
        </div>

        {/* Follow Us Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-24 text-center"
        >
          <h4 className="text-[11px] uppercase tracking-[6px] text-gray-400 font-black mb-10 opacity-60">Digital Presence</h4>
          <div className="flex justify-center gap-8">
            {[
              { icon: <Linkedin size={22} />, label: 'LinkedIn' },
              { icon: <Twitter size={22} />, label: 'Twitter' },
              { icon: <Telegram size={22} />, label: 'Telegram' }
            ].map((social, i) => (
              <motion.a 
                key={i}
                href="#" 
                whileHover={{ y: -5, scale: 1.1 }}
                className="w-16 h-16 rounded-2xl bg-white/50 backdrop-blur-md shadow-sm border border-white/60 flex items-center justify-center text-gray-400 hover:text-blue-600 hover:shadow-lg transition-all"
              >
                {social.icon}
              </motion.a>
            ))}
          </div>
        </motion.div>

      </div>
    </div>
  );
};

export default Contact;
