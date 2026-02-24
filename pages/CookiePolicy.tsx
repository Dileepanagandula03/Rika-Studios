
import React from 'react';
import { motion } from 'framer-motion';
import { Cookie, Mail, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const CookiePolicy: React.FC = () => {
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
                <Cookie size={24} />
              </div>
              <span className="text-[#E91E63] text-[10px] uppercase tracking-[8px] font-black">Data Framework</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-[#2D3134] leading-tight mb-6">
              Cookie <span className="italic text-[#E91E63]">Policy.</span>
            </h1>
          </header>

          <div className="prose prose-lg max-w-none text-gray-600 font-light leading-relaxed space-y-12">
            <section>
              <p className="text-xl text-[#2D3134] font-medium leading-relaxed italic border-l-4 border-[#E91E63]/20 pl-8 py-2">
                This website uses cookies to enhance user experience and analyze performance.
              </p>
            </section>

            <section className="space-y-6">
              <h2 className="text-2xl font-bold text-[#2D3134] flex items-center gap-4">
                <span className="text-[#E91E63] text-sm font-black italic">01.</span> What Are Cookies?
              </h2>
              <p>
                Cookies are small data files stored on your device that help improve website functionality and analytics.
              </p>
            </section>

            <section className="space-y-6">
              <h2 className="text-2xl font-bold text-[#2D3134] flex items-center gap-4">
                <span className="text-[#E91E63] text-sm font-black italic">02.</span> How We Use Cookies
              </h2>
              <p>We use cookies to:</p>
              <ul className="grid md:grid-cols-2 gap-x-12 gap-y-4 list-none p-0">
                <li className="flex gap-3 items-start">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#E91E63] mt-2 shrink-0"></span>
                  <span>Analyze traffic patterns</span>
                </li>
                <li className="flex gap-3 items-start">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#E91E63] mt-2 shrink-0"></span>
                  <span>Improve website performance</span>
                </li>
                <li className="flex gap-3 items-start">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#E91E63] mt-2 shrink-0"></span>
                  <span>Understand user behavior</span>
                </li>
              </ul>
              <p className="mt-4">
                We do not use cookies to collect sensitive personal data.
              </p>
            </section>

            <section className="space-y-6">
              <h2 className="text-2xl font-bold text-[#2D3134] flex items-center gap-4">
                <span className="text-[#E91E63] text-sm font-black italic">03.</span> Managing Cookies
              </h2>
              <p>
                You may disable cookies through your browser settings. However, this may affect certain website features.
              </p>
            </section>

            <section className="mt-16">
              <div className="bg-[#2D3134] text-white p-8 rounded-3xl flex flex-col md:flex-row items-center justify-between gap-6">
                <div>
                  <h4 className="text-[10px] uppercase tracking-[3px] font-black text-[#E91E63] mb-2">Questions?</h4>
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

export default CookiePolicy;
