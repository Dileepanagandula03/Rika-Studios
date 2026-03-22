
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ArrowLeft, Sparkles, Target, Layout, BarChart3, Zap, TrendingUp } from 'lucide-react';
import { Link } from 'react-router-dom';

const LeadGenSection: React.FC = () => {
  return (
    <div className="bg-[#FDFCFB] min-h-screen">
      {/* LEAD GEN CUSTOM SECTION */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        {/* Atmospheric Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#FDFCFB] via-[#F7F3F0] to-[#FDFCFB]"></div>
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
          <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-[#F3CF5F] blur-[150px] rounded-full"></div>
          <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-[#E91E63] blur-[150px] rounded-full"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          {/* Header */}
          <div className="text-center mb-24">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-center justify-center gap-3 mb-6"
            >
              <div className="w-8 h-[1px] bg-[#F3CF5F]"></div>
              <span className="text-[#F3CF5F] text-[10px] uppercase tracking-[8px] font-black">Predictable Demand</span>
              <div className="w-8 h-[1px] bg-[#F3CF5F]"></div>
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-5xl md:text-7xl font-bold text-[#1A1A1A] mb-8 tracking-tighter leading-none"
            >
              Lead <br />
              <span className="italic text-[#1A1A1A]">Generation</span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-[#333333] text-lg md:text-xl font-medium max-w-2xl mx-auto mb-12"
            >
              Structured demand that supports scalable growth. We build acquisition systems that transform visibility into measurable lead flow.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <Link 
                to="/contact" 
                className="inline-flex items-center gap-4 bg-[#2D3134] text-white px-12 py-6 rounded-full text-[11px] uppercase font-black tracking-[4px] hover:bg-[#F3CF5F] hover:text-[#2D3134] transition-all duration-500 shadow-xl"
              >
                Build My Lead System <ArrowRight size={16} />
              </Link>
            </motion.div>
          </div>

          {/* SERVICE IMAGE */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="max-w-5xl mx-auto mb-32 rounded-[60px] overflow-hidden shadow-2xl border-8 border-white relative group"
          >
            <img 
              src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop" 
              alt="Lead Generation" 
              className="w-full h-[500px] object-cover transition-transform duration-700 group-hover:scale-105"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
            <div className="absolute bottom-10 left-10">
              <div className="flex items-center gap-3 px-4 py-2 bg-white/20 backdrop-blur-md rounded-full border border-white/30 text-white text-[10px] font-black uppercase tracking-[3px]">
                <Target size={14} /> Predictable Lead Flow
              </div>
            </div>
          </motion.div>

          {/* THE PROBLEM & WHAT WE DO */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto mb-32">
            {/* The Problem */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white border border-gray-200 rounded-[40px] p-12 relative group shadow-sm"
            >
              <div className="absolute top-10 right-10 opacity-10 group-hover:opacity-20 transition-opacity">
                <Zap size={40} className="text-[#F3CF5F]" />
              </div>
              <h3 className="text-[#F3CF5F] text-[10px] uppercase tracking-[5px] font-black mb-8">The Problem</h3>
              <p className="text-[#1A1A1A] text-2xl font-bold mb-6 leading-tight">Traffic without structure rarely converts.</p>
              <p className="text-[#444444] text-lg font-medium mb-8 leading-relaxed">
                Without strategic demand systems, marketing efforts become fragmented, lead quality fluctuates, and growth becomes unpredictable.
              </p>
              <div className="p-6 bg-gray-50 rounded-3xl border border-gray-100">
                <p className="text-[#F3CF5F] font-bold italic text-lg">"Demand should be engineered — not assumed."</p>
              </div>
            </motion.div>

            {/* What We Do */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white border border-gray-200 rounded-[40px] p-12 relative group shadow-sm"
            >
              <div className="absolute top-10 right-10 opacity-10 group-hover:opacity-20 transition-opacity">
                <TrendingUp size={40} className="text-[#E91E63]" />
              </div>
              <h3 className="text-[#E91E63] text-[10px] uppercase tracking-[5px] font-black mb-8">What We Do</h3>
              <p className="text-[#1A1A1A] text-2xl font-bold mb-8 leading-tight">We design conversion-aligned acquisition frameworks.</p>
              <ul className="space-y-4">
                {[
                  'Paid acquisition strategy (Meta / Google)',
                  'Funnel & landing page optimization',
                  'Lead nurturing architecture',
                  'Conversion tracking & analytics',
                  'Campaign performance optimization'
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-4 text-[#333333] text-base font-bold">
                    <div className="w-2 h-2 rounded-full bg-[#E91E63]"></div>
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* WHAT THIS LOOKS LIKE */}
          <div className="mb-32">
            <div className="text-center mb-16">
              <span className="text-gray-500 text-[10px] uppercase tracking-[10px] font-black">The Framework</span>
              <h2 className="text-4xl md:text-5xl font-bold text-[#1A1A1A] mt-4">What This Looks Like</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
              {[
                { 
                  title: 'Acquisition Strategy', 
                  desc: 'We align targeting with revenue goals.',
                  icon: <Target size={24} />
                },
                { 
                  title: 'Conversion Design', 
                  desc: 'We structure funnels that guide decision-making.',
                  icon: <Layout size={24} />
                },
                { 
                  title: 'Performance Intelligence', 
                  desc: 'We track and refine based on real outcomes.',
                  icon: <BarChart3 size={24} />
                },
                { 
                  title: 'Scaling Systems', 
                  desc: 'We expand what works sustainably.',
                  icon: <Sparkles size={24} />
                }
              ].map((item, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-white border border-gray-200 p-10 rounded-[32px] hover:shadow-xl transition-all duration-500"
                >
                  <div className="text-[#F3CF5F] mb-6">{item.icon}</div>
                  <h4 className="text-[#1A1A1A] font-bold text-xl mb-4">{item.title}</h4>
                  <p className="text-[#444444] text-sm leading-relaxed font-medium">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* WHO THIS IS FOR */}
          <div className="max-w-4xl mx-auto mb-32 bg-gradient-to-r from-[#F3CF5F]/5 to-transparent p-12 rounded-[50px] border-l-4 border-[#F3CF5F]">
            <h3 className="text-[#1A1A1A] text-3xl font-bold mb-10">Who This Is For</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                'Growth-stage businesses',
                'Service brands scaling revenue',
                'Founders investing in structured marketing',
                'Companies needing predictable pipelines'
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-4 text-[#333333]">
                  <Sparkles size={16} className="text-[#F3CF5F]" />
                  <span className="text-lg font-bold">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* SOFT CLOSE */}
          <div className="text-center max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="bg-white border border-gray-200 p-16 rounded-[60px] shadow-2xl"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-[#1A1A1A] mb-8 leading-tight">
                Growth becomes <br /> <span className="text-[#F3CF5F]">sustainable.</span>
              </h2>
              <p className="text-[#444444] text-lg mb-12 font-bold">Let’s build your acquisition system.</p>
              <Link 
                to="/contact" 
                className="bg-[#F3CF5F] text-[#2D3134] px-12 py-6 rounded-full text-[11px] uppercase font-black tracking-[4px] hover:scale-105 transition-all duration-500 shadow-xl"
              >
                Start Your System
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
