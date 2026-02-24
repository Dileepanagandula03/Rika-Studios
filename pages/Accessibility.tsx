
import React from 'react';
import { motion } from 'framer-motion';
import { Accessibility as AccessibilityIcon, Mail, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const Accessibility: React.FC = () => {
  return (
    <div className="bg-white min-h-screen pt-32 pb-24">
      <div className="container mx-auto px-6 max-w-4xl">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Link to="/" className="inline-flex items-center gap-2 text-[#E91E63] text-[10px] uppercase tracking-[3px] font-black mb-12 hover:gap-3 transition-all">
            <ArrowLeft size={14} /> Back to Ecosystem
          </Link>

          <header className="mb-16">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-2xl bg-[#E91E63]/10 flex items-center justify-center text-[#E91E63]">
                <AccessibilityIcon size={24} />
              </div>
              <span className="text-[#E91E63] text-[10px] uppercase tracking-[8px] font-black">Inclusion Framework</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-[#2D3134] leading-tight mb-6">
              Accessibility <span className="italic text-[#E91E63]">Commitment.</span>
            </h1>
          </header>

          <div className="prose prose-lg max-w-none text-gray-600 font-light leading-relaxed space-y-12">
            <section>
              <p className="text-xl text-[#2D3134] font-medium leading-relaxed italic border-l-4 border-[#E91E63]/20 pl-8 py-2">
                Rika Gayar Studios is committed to ensuring digital accessibility for all visitors.
              </p>
            </section>

            <section className="space-y-6">
              <p>
                We strive to provide a website experience that is inclusive, user-friendly, and accessible across devices and assistive technologies.
              </p>
              <p>
                If you experience difficulty accessing any content, please contact us. We will make reasonable efforts to address accessibility concerns promptly.
              </p>
            </section>

            <section className="mt-16">
              <div className="bg-[#2D3134] text-white p-8 rounded-3xl flex flex-col md:flex-row items-center justify-between gap-6">
                <div>
                  <h4 className="text-[10px] uppercase tracking-[3px] font-black text-[#E91E63] mb-2">Accessibility Support</h4>
                  <p className="text-lg font-bold">hello@rikagayar.studios</p>
                </div>
                <a href="mailto:hello@rikagayar.studios" className="px-8 py-4 rounded-full bg-[#E91E63] text-white text-[10px] uppercase font-black tracking-[3px] hover:scale-105 transition-all flex items-center gap-2">
                  <Mail size={14} /> Contact Us
                </a>
              </div>
            </section>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Accessibility;
