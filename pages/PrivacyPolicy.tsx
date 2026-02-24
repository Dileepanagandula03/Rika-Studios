
import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Mail, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const PrivacyPolicy: React.FC = () => {
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
                <Shield size={24} />
              </div>
              <span className="text-[#E91E63] text-[10px] uppercase tracking-[8px] font-black">Legal Framework</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-[#2D3134] leading-tight mb-6">
              Privacy <span className="italic text-[#E91E63]">Policy.</span>
            </h1>
            <p className="text-gray-400 text-sm font-light tracking-widest uppercase">
              Effective Date: January 1, 2026
            </p>
          </header>

          <div className="prose prose-lg max-w-none text-gray-600 font-light leading-relaxed space-y-12">
            <section>
              <p className="text-xl text-[#2D3134] font-medium leading-relaxed italic border-l-4 border-[#E91E63]/20 pl-8 py-2">
                Rika Gayar Studios (“RGS,” “we,” “our,” or “us”) respects your privacy and is committed to protecting your personal information. This Privacy Policy explains how we collect, use, and safeguard your information when you visit our website.
              </p>
            </section>

            <section className="space-y-6">
              <h2 className="text-2xl font-bold text-[#2D3134] flex items-center gap-4">
                <span className="text-[#E91E63] text-sm font-black italic">01.</span> Information We Collect
              </h2>
              <p>We may collect:</p>
              
              <div className="grid md:grid-cols-2 gap-8 mt-8">
                <div className="bg-[#F7F6F2] p-8 rounded-3xl border border-gray-100">
                  <h3 className="text-[#E91E63] text-[10px] uppercase tracking-[3px] font-black mb-4">Directly Provided</h3>
                  <ul className="space-y-2 text-sm">
                    <li>• Name & Email address</li>
                    <li>• Company name</li>
                    <li>• Project details</li>
                    <li>• Inquiry form submissions</li>
                  </ul>
                </div>
                <div className="bg-[#F7F6F2] p-8 rounded-3xl border border-gray-100">
                  <h3 className="text-[#E91E63] text-[10px] uppercase tracking-[3px] font-black mb-4">Automatically Collected</h3>
                  <ul className="space-y-2 text-sm">
                    <li>• IP address & Browser type</li>
                    <li>• Device information</li>
                    <li>• Pages visited & Time spent</li>
                    <li>• Performance optimization data</li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="space-y-6">
              <h2 className="text-2xl font-bold text-[#2D3134] flex items-center gap-4">
                <span className="text-[#E91E63] text-sm font-black italic">02.</span> How We Use Your Information
              </h2>
              <p>We use collected information to:</p>
              <ul className="grid md:grid-cols-2 gap-x-12 gap-y-4 list-none p-0">
                <li className="flex gap-3 items-start">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#E91E63] mt-2 shrink-0"></span>
                  <span>Respond to inquiries and evaluate partnership applications.</span>
                </li>
                <li className="flex gap-3 items-start">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#E91E63] mt-2 shrink-0"></span>
                  <span>Improve website functionality and analyze site performance.</span>
                </li>
                <li className="flex gap-3 items-start">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#E91E63] mt-2 shrink-0"></span>
                  <span>Maintain security and integrity of our digital ecosystem.</span>
                </li>
                <li className="flex gap-3 items-start">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#E91E63] mt-2 shrink-0"></span>
                  <span>We do not sell, rent, or trade your personal information.</span>
                </li>
              </ul>
            </section>

            <section className="space-y-6">
              <h2 className="text-2xl font-bold text-[#2D3134] flex items-center gap-4">
                <span className="text-[#E91E63] text-sm font-black italic">03.</span> Data Security
              </h2>
              <p>
                We implement appropriate technical and organizational safeguards to protect your information. However, no digital transmission is 100% secure. We continuously audit our systems to ensure the highest level of protection for our partners.
              </p>
            </section>

            <section className="space-y-6">
              <h2 className="text-2xl font-bold text-[#2D3134] flex items-center gap-4">
                <span className="text-[#E91E63] text-sm font-black italic">04.</span> Third-Party Services
              </h2>
              <p>
                We may use trusted third-party tools (analytics, hosting, form processors) to operate our website. These providers process data in accordance with their own privacy policies. We only partner with entities that share our commitment to data integrity.
              </p>
            </section>

            <section className="space-y-6">
              <h2 className="text-2xl font-bold text-[#2D3134] flex items-center gap-4">
                <span className="text-[#E91E63] text-sm font-black italic">05.</span> Your Rights
              </h2>
              <p>You may request to access your personal data, correct inaccuracies, or request deletion at any time.</p>
              <div className="bg-[#2D3134] text-white p-8 rounded-3xl flex flex-col md:flex-row items-center justify-between gap-6 mt-8">
                <div>
                  <h4 className="text-[10px] uppercase tracking-[3px] font-black text-[#E91E63] mb-2">Contact Our Privacy Team</h4>
                  <p className="text-lg font-bold">hello@rikagayar.studios</p>
                </div>
                <a href="mailto:hello@rikagayar.studios" className="px-8 py-4 rounded-full bg-[#E91E63] text-white text-[10px] uppercase font-black tracking-[3px] hover:scale-105 transition-all flex items-center gap-2">
                  <Mail size={14} /> Send Request
                </a>
              </div>
            </section>

            <section className="space-y-6 pt-12 border-t border-gray-100">
              <h2 className="text-2xl font-bold text-[#2D3134] flex items-center gap-4">
                <span className="text-[#E91E63] text-sm font-black italic">06.</span> Policy Updates
              </h2>
              <p>
                We may update this Privacy Policy periodically. Continued use of the site constitutes acceptance of any changes. We recommend reviewing this page occasionally to stay informed about how we protect your information.
              </p>
            </section>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
