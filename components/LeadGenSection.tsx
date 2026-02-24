
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ArrowLeft, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

const LeadGenSection: React.FC = () => {
  return (
    <div className="bg-[#0F172A] min-h-screen">
      {/* LEAD GEN CUSTOM SECTION */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        {/* Subtle Gradient Background & Glowing Edges */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0F172A] via-[#1E293B] to-[#0F172A]"></div>
        <div className="absolute top-0 left-0 w-full h-full opacity-20 pointer-events-none">
          <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-[#F3CF5F] blur-[150px] rounded-full"></div>
          <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-[#E91E63] blur-[150px] rounded-full"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          {/* Header */}
          <div className="text-center mb-20">
            <motion.span 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-[#F3CF5F] text-[10px] uppercase tracking-[8px] font-black block mb-4"
            >
              SERVICE 01
            </motion.span>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight"
            >
              Lead Generation & Paid Growth
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-gray-400 text-lg md:text-xl font-light"
            >
              Predictable demand. Without chaos.
            </motion.p>
          </div>

          {/* Grid of 4 Elevated Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-24">
            {/* Card 1 */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="bg-white/5 backdrop-blur-xl border-t-2 border-[#F3CF5F] rounded-[32px] p-10 shadow-2xl transition-all duration-500 group"
            >
              <h3 className="text-[#F3CF5F] text-2xl font-bold mb-6">The Problem</h3>
              <p className="text-white text-lg font-medium mb-4">Ads alone don’t solve growth.</p>
              <p className="text-gray-400 text-sm leading-relaxed">
                Without clear landing pages, proper tracking, and follow-up systems, you get clicks — not conversations.
              </p>
            </motion.div>

            {/* Card 2 */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="bg-white/5 backdrop-blur-xl border-t-2 border-[#F3CF5F] rounded-[32px] p-10 shadow-2xl transition-all duration-500 group"
            >
              <h3 className="text-[#F3CF5F] text-2xl font-bold mb-6">What We Do</h3>
              <p className="text-white text-lg font-medium mb-4">We build structured lead systems that connect:</p>
              <div className="flex flex-wrap items-center gap-2 text-gray-400 text-[10px] font-bold uppercase tracking-widest">
                <span>Ads</span>
                <ArrowRight size={12} className="text-[#F3CF5F]" />
                <span>Website</span>
                <ArrowRight size={12} className="text-[#F3CF5F]" />
                <span>Follow-up</span>
                <ArrowRight size={12} className="text-[#F3CF5F]" />
                <span>Conversion</span>
              </div>
            </motion.div>

            {/* Card 3 */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="bg-white/5 backdrop-blur-xl border-t-2 border-[#F3CF5F] rounded-[32px] p-10 shadow-2xl transition-all duration-500 group"
            >
              <h3 className="text-[#F3CF5F] text-2xl font-bold mb-6">What This Looks Like</h3>
              <ul className="space-y-4">
                {[
                  'Google & Meta ads',
                  'Funnel & landing page optimization',
                  'CRM / email / WhatsApp integration',
                  'Conversion tracking & reporting'
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-gray-300 text-sm">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#F3CF5F]"></div>
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Card 4 */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="bg-white/5 backdrop-blur-xl border-t-2 border-[#F3CF5F] rounded-[32px] p-10 shadow-2xl transition-all duration-500 group"
            >
              <h3 className="text-[#F3CF5F] text-2xl font-bold mb-6">Who It’s For</h3>
              <p className="text-white text-lg font-medium leading-relaxed">
                Businesses ready for consistent, measurable revenue growth.
              </p>
              <div className="mt-8 pt-8 border-t border-white/10">
                <div className="flex items-center gap-2 text-[#F3CF5F] text-[10px] font-black uppercase tracking-[3px]">
                  <Sparkles size={14} />
                  <span>High-Intent Priority</span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* CTA Bar */}
          <div className="max-w-5xl mx-auto">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white/5 backdrop-blur-2xl border border-white/10 rounded-[40px] p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-8 shadow-2xl"
            >
              <div className="text-center md:text-left">
                <p className="text-white text-xl md:text-2xl font-bold">Let’s turn traffic into real conversations.</p>
              </div>
              <Link 
                to="/contact" 
                className="bg-[#F3CF5F] text-[#0F172A] px-10 py-5 rounded-full text-[11px] uppercase font-black tracking-[4px] shadow-[0_0_30px_rgba(243,207,95,0.3)] hover:shadow-[0_0_50px_rgba(243,207,95,0.5)] hover:scale-105 transition-all duration-500"
              >
                Book a Strategy Call
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Back Link */}
      <div className="container mx-auto px-6 py-12 text-center">
        <Link to="/services" className="inline-flex items-center gap-2 text-gray-500 hover:text-[#F3CF5F] transition-colors text-sm font-medium">
          <ArrowLeft size={16} /> Back to all systems
        </Link>
      </div>
    </div>
  );
};

export default LeadGenSection;
