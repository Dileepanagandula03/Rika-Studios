
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ArrowLeft, Sparkles, Share2, Instagram, Linkedin, Facebook, Zap, BarChart3, Target, Users, Layout } from 'lucide-react';
import { Link } from 'react-router-dom';

const SocialMediaSection: React.FC = () => {
  return (
    <div className="bg-[#FDFCFB] min-h-screen">
      {/* HERO SECTION */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        {/* Atmospheric Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#FDFCFB] via-[#F7F3F0] to-[#FDFCFB]"></div>
        <div className="absolute top-0 right-0 w-full h-full opacity-10 pointer-events-none">
          <div className="absolute top-[-10%] right-[-10%] w-[40%] h-[40%] bg-violet-400 blur-[150px] rounded-full"></div>
          <div className="absolute bottom-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-400 blur-[150px] rounded-full"></div>
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
              <div className="w-8 h-[1px] bg-violet-500"></div>
              <span className="text-violet-600 text-[10px] uppercase tracking-[8px] font-black">Strategic Presence</span>
              <div className="w-8 h-[1px] bg-violet-500"></div>
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-5xl md:text-7xl font-bold text-[#1A1A1A] mb-8 tracking-tighter leading-none"
            >
              Social Media <br />
              <span className="italic text-[#1A1A1A]">Marketing</span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-[#333333] text-lg md:text-xl font-medium max-w-2xl mx-auto mb-12"
            >
              Social Presence that builds authority — not noise. We design social ecosystems that align visibility, trust, and conversion — so your brand grows intentionally, not reactively.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <Link 
                to="/contact" 
                className="inline-flex items-center gap-4 bg-[#2D3134] text-white px-12 py-6 rounded-full text-[11px] uppercase font-black tracking-[4px] hover:bg-violet-600 transition-all duration-500 shadow-xl"
              >
                Build My Social System <ArrowRight size={16} />
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
              src="https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?q=80&w=1974&auto=format&fit=crop" 
              alt="Social Media Marketing" 
              className="w-full h-[500px] object-cover transition-transform duration-700 group-hover:scale-105"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
            <div className="absolute bottom-10 left-10">
              <div className="flex items-center gap-3 px-4 py-2 bg-white/20 backdrop-blur-md rounded-full border border-white/30 text-white text-[10px] font-black uppercase tracking-[3px]">
                <Share2 size={14} /> Strategic Social Presence
              </div>
            </div>
          </motion.div>

          {/* THE PROBLEM & PLATFORM FOCUS */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto mb-32">
            {/* The Problem */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white border border-gray-200 rounded-[40px] p-12 relative group shadow-sm"
            >
              <div className="absolute top-10 right-10 opacity-10 group-hover:opacity-20 transition-opacity">
                <Zap size={40} className="text-violet-500" />
              </div>
              <h3 className="text-violet-600 text-[10px] uppercase tracking-[5px] font-black mb-8">The Problem</h3>
              <p className="text-[#1A1A1A] text-2xl font-bold mb-6 leading-tight">Most brands are active. Few are positioned.</p>
              <p className="text-[#444444] text-lg font-medium mb-8 leading-relaxed">
                Posting without platform-specific strategy leads to fragmented audience perception, inconsistent engagement quality, and unpredictable growth outcomes.
              </p>
              <div className="p-6 bg-gray-50 rounded-3xl border border-gray-100">
                <p className="text-violet-600 font-bold italic text-lg">"Visibility without structure creates noise — not authority."</p>
              </div>
            </motion.div>

            {/* Platform Focus */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white border border-gray-200 rounded-[40px] p-12 relative group shadow-sm"
            >
              <div className="absolute top-10 right-10 opacity-10 group-hover:opacity-20 transition-opacity">
                <Share2 size={40} className="text-blue-500" />
              </div>
              <h3 className="text-blue-600 text-[10px] uppercase tracking-[5px] font-black mb-8">Our Platform Focus</h3>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <Instagram className="text-pink-500 shrink-0" size={24} />
                  <div>
                    <h4 className="text-[#1A1A1A] font-bold text-lg mb-1">Instagram</h4>
                    <p className="text-[#444444] text-sm font-medium">For visual storytelling, brand familiarity, and community-driven engagement.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <Linkedin className="text-blue-600 shrink-0" size={24} />
                  <div>
                    <h4 className="text-[#1A1A1A] font-bold text-lg mb-1">LinkedIn</h4>
                    <p className="text-[#444444] text-sm font-medium">For authority positioning, thought leadership, and high-intent B2B visibility.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <Facebook className="text-blue-800 shrink-0" size={24} />
                  <div>
                    <h4 className="text-[#1A1A1A] font-bold text-lg mb-1">Facebook</h4>
                    <p className="text-[#444444] text-sm font-medium">For audience depth, trust reinforcement, and performance-driven campaigns.</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* WHAT WE DO */}
          <div className="max-w-5xl mx-auto mb-32 text-center">
            <h3 className="text-violet-600 text-[10px] uppercase tracking-[5px] font-black mb-8">What We Do</h3>
            <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A1A] mb-12">We transform social media from a content task into a structured brand presence system.</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
              {[
                'Platform-specific positioning strategy',
                'Content & engagement architecture',
                'Conversion-aligned visibility planning',
                'Performance optimization & refinement'
              ].map((item, i) => (
                <div key={i} className="bg-white border border-gray-100 p-8 rounded-3xl flex items-center gap-4 shadow-sm">
                  <div className="w-10 h-10 rounded-full bg-violet-50 flex items-center justify-center text-violet-600">
                    <Sparkles size={20} />
                  </div>
                  <span className="text-[#1A1A1A] font-bold">{item}</span>
                </div>
              ))}
            </div>
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
                  title: 'Strategy & Direction', 
                  desc: 'We define how your brand should exist on each platform.',
                  icon: <Target size={24} />
                },
                { 
                  title: 'Structured Presence', 
                  desc: 'We design posting systems aligned with growth goals.',
                  icon: <Layout size={24} />
                },
                { 
                  title: 'Engagement Alignment', 
                  desc: 'We build interaction patterns that support conversion.',
                  icon: <Users size={24} />
                },
                { 
                  title: 'Performance Refinement', 
                  desc: 'We optimize based on real audience behavior.',
                  icon: <BarChart3 size={24} />
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
                  <div className="text-violet-600 mb-6">{item.icon}</div>
                  <h4 className="text-[#1A1A1A] font-bold text-xl mb-4">{item.title}</h4>
                  <p className="text-[#444444] text-sm leading-relaxed font-medium">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* WHO THIS IS FOR */}
          <div className="max-w-4xl mx-auto mb-32 bg-gradient-to-r from-violet-500/5 to-transparent p-12 rounded-[50px] border-l-4 border-violet-500">
            <h3 className="text-[#1A1A1A] text-3xl font-bold mb-10">Who This Is For</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                'Founders building visible authority',
                'Brands scaling digital presence',
                'Businesses investing in long-term recognition',
                'Teams tired of inconsistent social growth'
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-4 text-[#333333]">
                  <Sparkles size={16} className="text-violet-600" />
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
                Social media should <br /> <span className="text-violet-600">support your brand.</span>
              </h2>
              <p className="text-[#444444] text-lg mb-12 font-bold">Start the conversation.</p>
              <Link 
                to="/contact" 
                className="bg-violet-600 text-white px-12 py-6 rounded-full text-[11px] uppercase font-black tracking-[4px] hover:scale-105 transition-all duration-500 shadow-xl"
              >
                Start Your Social System
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Back Link */}
      <div className="container mx-auto px-6 py-12 text-center">
        <Link to="/services" className="inline-flex items-center gap-2 text-gray-500 hover:text-violet-600 transition-colors text-sm font-medium">
          <ArrowLeft size={16} /> Back to all systems
        </Link>
      </div>
    </div>
  );
};

export default SocialMediaSection;
