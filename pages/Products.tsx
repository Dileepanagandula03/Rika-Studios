
import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link, useParams, Navigate } from 'react-router-dom';
import { ArrowLeft, ArrowRight, Sparkles, Mail, Zap, Bot, Target, Settings2, BarChart3, Layout, MousePointer2, Gauge, Globe, Shield, Video, Play, Youtube, Users } from 'lucide-react';

const Products: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  const products = {
    'email-automation': {
      id: 'email-automation',
      title: 'Email Automation',
      subtitle: 'Automation Labs',
      heroTitle: 'Email Overload Is',
      heroTitleItalic: 'Killing Your Productivity',
      description: 'We automate your outreach from hours to minutes. You spend hours typing the same emails, attaching the same files, and following up manually. Opportunities slip away. What should take minutes takes hours.',
      accentColor: 'blue',
      accentClass: 'text-blue-600',
      bgAccentClass: 'bg-blue-600',
      glowColor: 'bg-blue-400',
      problemTitle: 'The Problem',
      problemLead: 'Manual outreach is a bottleneck for growth.',
      problemDesc: 'You spend hours typing the same emails, attaching the same files, and following up manually. Opportunities slip away. What should take minutes takes hours.',
      problemQuote: 'Manual outreach is a bottleneck — automation is the bridge to scale.',
      whatWeDoTitle: 'What We Do',
      whatWeDoLead: 'We build intelligent outreach systems.',
      whatWeDoItems: [
        'Manual, Bulk, Schedule & Auto Modes',
        'Smart Excel Import & Column Mapping',
        'Universal Attachments (PDF, Word, Images)',
        'Auto Lead Gen (Hunter.io Integration)',
        'Custom Personalization Templates'
      ],
      frameworkTitle: 'The Framework',
      frameworkItems: [
        { title: 'Manual Mode', desc: 'Send single, perfectly crafted emails now.', icon: <Target size={24} /> },
        { title: 'Bulk Mode', desc: 'Upload Excel, email everyone in one click.', icon: <Zap size={24} /> },
        { title: 'Schedule Mode', desc: 'Set time, we deliver daily.', icon: <Settings2 size={24} /> },
        { title: 'Full Auto Mode', desc: 'Auto-find leads and send on autopilot.', icon: <Bot size={24} /> }
      ],
      whoThisIsFor: [
        'Sales teams scaling outreach',
        'Founders managing high email volume',
        'Agencies automating lead nurture',
        'Teams tired of manual follow-ups'
      ],
      softCloseTitle: 'Ready to evolve your',
      softCloseAccent: 'outreach?',
      softCloseDesc: 'Start Automating Today — Free Trial, No Credit Card',
      ctaText: 'Start Your Automation Journey'
    },
    'clawdbot': {
      id: 'clawdbot',
      title: 'AI Agent (Clawdbot)',
      subtitle: 'Intelligent Interaction',
      heroTitle: 'AI Automation That',
      heroTitleItalic: 'Works While You Sleep',
      description: 'A high-intelligence autonomous agent designed for complex task execution and brand amplification. We build intelligent bots that handle your leads, emails, and follow-ups 24/7.',
      accentColor: 'amber',
      accentClass: 'text-amber-600',
      bgAccentClass: 'bg-amber-600',
      glowColor: 'bg-amber-400',
      problemTitle: 'The Reality',
      problemLead: 'Most brands fail because of lack of structure.',
      problemDesc: 'Posting without strategy leads to inconsistent growth, unclear positioning, and burnout. Visibility without structure creates noise — not authority.',
      problemQuote: 'Visibility without structure creates noise — not authority.',
      whatWeDoTitle: 'What We Do',
      whatWeDoLead: 'We transform lead management into a growth engine.',
      whatWeDoItems: [
        'Instant auto-replies to every lead',
        'Scheduled emails sent automatically',
        'Weekly reports with clear insights',
        'Every lead nurtured until booking',
        'Multi-platform interaction systems'
      ],
      frameworkTitle: 'The Ecosystem',
      frameworkItems: [
        { title: 'WhatsApp Bot', desc: 'Instant lead replies and automated conversations.', icon: <Bot size={24} /> },
        { title: 'Email Campaigns', desc: 'Automated outreach to keep your brand top-of-mind.', icon: <Mail size={24} /> },
        { title: 'LinkedIn Outreach', desc: 'Reach 1000+ targeted professional contacts per month.', icon: <Users size={24} /> },
        { title: 'Weekly Reports', desc: 'Detailed analytics on open rates and bookings.', icon: <BarChart3 size={24} /> }
      ],
      whoThisIsFor: [
        'Emerging influencers & creators',
        'Personal brands building authority',
        'Creative entrepreneurs scaling presence',
        'Businesses investing in long-term recognition'
      ],
      softCloseTitle: 'Growth shouldn’t come',
      softCloseAccent: 'from randomness.',
      softCloseDesc: 'Let’s build your intelligent growth engine.',
      ctaText: 'Start Your AI Journey'
    }
  };

  const currentProduct = id ? products[id as keyof typeof products] : null;

  if (id && !currentProduct) {
    return <Navigate to="/products" />;
  }

  if (currentProduct) {
    const p = currentProduct;
    return (
      <div className="bg-[#FDFCFB] min-h-screen">
        {/* HERO SECTION */}
        <section className="relative py-24 md:py-32 overflow-hidden">
          {/* Atmospheric Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#FDFCFB] via-[#F7F3F0] to-[#FDFCFB]"></div>
          <div className="absolute top-0 right-0 w-full h-full opacity-10 pointer-events-none">
            <div className={`absolute top-[-10%] right-[-10%] w-[40%] h-[40%] ${p.glowColor} blur-[150px] rounded-full`}></div>
            <div className="absolute bottom-[-10%] left-[-10%] w-[40%] h-[40%] bg-gray-200 blur-[150px] rounded-full"></div>
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
                <div className={`w-8 h-[1px] ${p.bgAccentClass}`}></div>
                <span className={`${p.accentClass} text-[10px] uppercase tracking-[8px] font-black`}>{p.subtitle}</span>
                <div className={`w-8 h-[1px] ${p.bgAccentClass}`}></div>
              </motion.div>
              
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-5xl md:text-7xl font-bold text-[#1A1A1A] mb-8 tracking-tighter leading-none"
              >
                {p.heroTitle} <br />
                <span className="italic text-[#1A1A1A]">{p.heroTitleItalic}</span>
              </motion.h1>
              
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-[#333333] text-lg md:text-xl font-medium max-w-2xl mx-auto mb-12"
              >
                {p.description}
              </motion.p>

              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
              >
                <Link 
                  to="/contact" 
                  className={`inline-flex items-center gap-4 bg-[#2D3134] text-white px-12 py-6 rounded-full text-[11px] uppercase font-black tracking-[4px] hover:${p.bgAccentClass} transition-all duration-500 shadow-xl`}
                >
                  {p.ctaText} <ArrowRight size={16} />
                </Link>
              </motion.div>
            </div>

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
                  <Zap size={40} className={p.accentClass} />
                </div>
                <h3 className={`${p.accentClass} text-[10px] uppercase tracking-[5px] font-black mb-8`}>{p.problemTitle}</h3>
                <p className="text-[#1A1A1A] text-2xl font-bold mb-6 leading-tight">{p.problemLead}</p>
                <p className="text-[#444444] text-lg font-medium mb-8 leading-relaxed">
                  {p.problemDesc}
                </p>
                <div className="p-6 bg-gray-50 rounded-3xl border border-gray-100">
                  <p className={`${p.accentClass} font-bold italic text-lg`}>"{p.problemQuote}"</p>
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
                  <Layout size={40} className="text-gray-400" />
                </div>
                <h3 className="text-gray-400 text-[10px] uppercase tracking-[5px] font-black mb-8">{p.whatWeDoTitle}</h3>
                <p className="text-[#1A1A1A] text-2xl font-bold mb-8 leading-tight">{p.whatWeDoLead}</p>
                <ul className="space-y-4">
                  {p.whatWeDoItems.map((item, i) => (
                    <li key={i} className="flex items-center gap-4 text-[#333333] text-base font-bold">
                      <div className={`w-2 h-2 rounded-full ${p.bgAccentClass}`}></div>
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
                <h2 className="text-4xl md:text-5xl font-bold text-[#1A1A1A] mt-4">{p.frameworkTitle}</h2>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
                {p.frameworkItems.map((item, i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="bg-white border border-gray-200 p-10 rounded-[32px] hover:shadow-xl transition-all duration-500"
                  >
                    <div className={`${p.accentClass} mb-6`}>{item.icon}</div>
                    <h4 className="text-[#1A1A1A] font-bold text-xl mb-4">{item.title}</h4>
                    <p className="text-[#444444] text-sm leading-relaxed font-medium">{item.desc}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* WHO THIS IS FOR */}
            <div className={`max-w-4xl mx-auto mb-32 bg-gradient-to-r from-${p.accentColor}-500/5 to-transparent p-12 rounded-[50px] border-l-4 border-${p.accentColor}-500`}>
              <h3 className="text-[#1A1A1A] text-3xl font-bold mb-10">Who This Is For</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {p.whoThisIsFor.map((item, i) => (
                  <div key={i} className="flex items-center gap-4 text-[#333333]">
                    <Sparkles size={16} className={p.accentClass} />
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
                  {p.softCloseTitle} <br /> <span className={p.accentClass}>{p.softCloseAccent}</span>
                </h2>
                <p className="text-[#444444] text-lg mb-12 font-bold">{p.softCloseDesc}</p>
                <Link 
                  to="/contact" 
                  className={`${p.bgAccentClass} text-white px-12 py-6 rounded-full text-[11px] uppercase font-black tracking-[4px] hover:scale-105 transition-all duration-500 shadow-xl`}
                >
                  {p.ctaText}
                </Link>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Back Link */}
        <div className="container mx-auto px-6 py-12 text-center">
          <Link to="/products" className={`inline-flex items-center gap-2 text-gray-500 hover:${p.accentClass} transition-colors text-sm font-medium`}>
            <ArrowLeft size={16} /> Back to all products
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-[#FDFCFB] min-h-screen pt-40 pb-32">
      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        <div className="space-y-20">
          <div className="text-center max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex items-center justify-center gap-3 mb-6"
            >
              <div className="w-8 h-[1px] bg-gray-300"></div>
              <span className="text-gray-500 text-[10px] uppercase tracking-[8px] font-black">The Product Lab</span>
              <div className="w-8 h-[1px] bg-gray-300"></div>
            </motion.div>
            <h1 className="text-5xl md:text-7xl font-bold text-[#1A1A1A] mb-8 tracking-tighter">
              Proprietary <br />
              <span className="italic text-[#1A1A1A]">Growth Tools</span>
            </h1>
            <p className="text-xl text-gray-600 font-medium leading-relaxed">
              We build proprietary tools that solve the most complex bottlenecks in growth and career acceleration.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {Object.entries(products).map(([key, product]) => (
              <Link key={key} to={`/products/${key}`} className="group">
                <div className="bg-white rounded-[40px] p-12 border border-gray-200 shadow-sm transition-all duration-500 group-hover:shadow-2xl group-hover:-translate-y-2 relative overflow-hidden h-full">
                  <div className={`absolute top-0 right-0 w-32 h-32 ${product.accentColor === 'blue' ? 'bg-blue-500/5' : 'bg-amber-500/5'} rounded-full blur-2xl -mr-16 -mt-16 group-hover:opacity-100 transition-opacity`}></div>
                  <div className="w-16 h-16 bg-gray-50 rounded-2xl flex items-center justify-center mb-8 shadow-lg border border-gray-100 group-hover:scale-110 transition-transform">
                    {key === 'email-automation' ? <Mail className="text-blue-600" size={32} /> : <Bot className="text-amber-600" size={32} />}
                  </div>
                  <h3 className="text-3xl font-bold text-[#1A1A1A] mb-4">{product.title}</h3>
                  <p className="text-gray-500 font-medium leading-relaxed mb-8">
                    {product.description.split('.')[0]}.
                  </p>
                  <div className={`flex items-center gap-2 ${product.accentClass} text-[10px] uppercase font-black tracking-[3px]`}>
                    View Product <ArrowRight size={14} />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;

