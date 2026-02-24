
import React from 'react';
import { motion } from 'framer-motion';
import { FileText, Mail, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const TermsConditions: React.FC = () => {
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
                <FileText size={24} />
              </div>
              <span className="text-[#E91E63] text-[10px] uppercase tracking-[8px] font-black">Legal Framework</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-[#2D3134] leading-tight mb-6">
              Terms & <span className="italic text-[#E91E63]">Conditions.</span>
            </h1>
            <p className="text-gray-400 text-sm font-light tracking-widest uppercase">
              Effective Date: January 1, 2026
            </p>
          </header>

          <div className="prose prose-lg max-w-none text-gray-600 font-light leading-relaxed space-y-12">
            <section>
              <p className="text-xl text-[#2D3134] font-medium leading-relaxed italic border-l-4 border-[#E91E63]/20 pl-8 py-2">
                By accessing this website, you agree to the following terms.
              </p>
            </section>

            <section className="space-y-6">
              <h2 className="text-2xl font-bold text-[#2D3134] flex items-center gap-4">
                <span className="text-[#E91E63] text-sm font-black italic">01.</span> Use of Website
              </h2>
              <p>
                This website is intended for informational and partnership inquiry purposes only. You agree not to misuse the website or attempt to interfere with its functionality.
              </p>
            </section>

            <section className="space-y-6">
              <h2 className="text-2xl font-bold text-[#2D3134] flex items-center gap-4">
                <span className="text-[#E91E63] text-sm font-black italic">02.</span> Intellectual Property
              </h2>
              <p>
                All content on this site — including text, branding, frameworks, systems, graphics, and design — is the intellectual property of Rika Gayar Studios unless otherwise stated.
              </p>
              <p>
                Reproduction, distribution, or modification without written consent is prohibited.
              </p>
            </section>

            <section className="space-y-6">
              <h2 className="text-2xl font-bold text-[#2D3134] flex items-center gap-4">
                <span className="text-[#E91E63] text-sm font-black italic">03.</span> No Guarantees
              </h2>
              <p>
                While we design growth infrastructure systems based on strategic analysis and industry standards, results may vary based on market conditions, execution, and external factors.
              </p>
              <p>
                We do not guarantee specific revenue or performance outcomes.
              </p>
            </section>

            <section className="space-y-6">
              <h2 className="text-2xl font-bold text-[#2D3134] flex items-center gap-4">
                <span className="text-[#E91E63] text-sm font-black italic">04.</span> Third-Party Links
              </h2>
              <p>
                This website may contain links to third-party websites. We are not responsible for their content or practices.
              </p>
            </section>

            <section className="space-y-6">
              <h2 className="text-2xl font-bold text-[#2D3134] flex items-center gap-4">
                <span className="text-[#E91E63] text-sm font-black italic">05.</span> Limitation of Liability
              </h2>
              <p>
                Rika Gayar Studios shall not be liable for any indirect, incidental, or consequential damages arising from the use of this website.
              </p>
            </section>

            <section className="space-y-6 pt-12 border-t border-gray-100">
              <h2 className="text-2xl font-bold text-[#2D3134] flex items-center gap-4">
                <span className="text-[#E91E63] text-sm font-black italic">06.</span> Governing Law
              </h2>
              <p>
                These terms are governed by the laws of the State of Maryland, United States.
              </p>
            </section>

            <section className="mt-16">
              <div className="bg-[#2D3134] text-white p-8 rounded-3xl flex flex-col md:flex-row items-center justify-between gap-6">
                <div>
                  <h4 className="text-[10px] uppercase tracking-[3px] font-black text-[#E91E63] mb-2">Legal Inquiries</h4>
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

export default TermsConditions;
