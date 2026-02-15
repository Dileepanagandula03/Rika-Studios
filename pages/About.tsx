
import React from 'react';
import { Target, Heart, Sparkles, Coffee, ArrowRight, Quote } from 'lucide-react';
import { Link } from 'react-router-dom';

const About: React.FC = () => {
  return (
    <div className="pt-32 pb-24 bg-white">
      <div className="container mx-auto px-6">
        
        {/* ARTISTIC GRID HERO */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 mb-32 overflow-hidden rounded-[40px] shadow-2xl">
          <div className="lg:col-span-4 bg-[#f3cf5f] aspect-[3/4] lg:aspect-auto overflow-hidden relative group">
            <img 
              src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&q=80&w=1000" 
              alt="Yellow Hero" 
              className="w-full h-full object-cover mix-blend-multiply opacity-90 group-hover:scale-105 transition-transform duration-1000"
            />
          </div>
          <div className="lg:col-span-5 flex flex-col">
            <div className="bg-white p-16 md:p-24 flex flex-col justify-center">
              <div className="w-16 h-[2px] bg-[#f3cf5f] mb-12"></div>
              <h1 className="text-6xl md:text-8xl font-black text-[#003049] leading-[0.8] tracking-tighter mb-4">
                Vision & <br />
                <span className="text-[#f3cf5f]">Values</span>
              </h1>
            </div>
            <div className="bg-[#003049] p-16 md:p-20 flex flex-col justify-center grow">
              <p className="text-white/80 text-lg font-light leading-relaxed mb-0">
                We remain forerunners of sustainable growth systems, developing brands that accommodate businesses of all sizes who value trust over noise.
              </p>
            </div>
          </div>
          <div className="lg:col-span-3 flex flex-col">
            <div className="aspect-square lg:aspect-auto h-1/2 overflow-hidden relative">
               <img 
                src="https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&q=80&w=800" 
                alt="Studio Visual" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="bg-[#f77f00] aspect-square flex items-center justify-center p-12 text-white italic font-serif text-2xl text-center">
               "Clarity first. Growth later."
            </div>
          </div>
        </div>

        {/* CORE VALUES */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 mb-40">
          <div className="text-center group">
            <div className="w-20 h-20 bg-[#fdf2d1] rounded-[30px] flex items-center justify-center text-[#f3cf5f] mx-auto mb-8 transform group-hover:rotate-6 transition-transform">
              <Target size={32} />
            </div>
            <h3 className="text-2xl font-serif text-gray-900 mb-4">High Intent</h3>
            <p className="text-gray-500 font-light leading-relaxed uppercase text-[10px] tracking-widest">Designing systems that prioritize depth over volume.</p>
          </div>
          <div className="text-center group">
            <div className="w-20 h-20 bg-rose-50 rounded-[30px] flex items-center justify-center text-[#E91E63] mx-auto mb-8 transform group-hover:rotate-6 transition-transform">
              <Heart size={32} />
            </div>
            <h3 className="text-2xl font-serif text-gray-900 mb-4">Human First</h3>
            <p className="text-gray-500 font-light leading-relaxed uppercase text-[10px] tracking-widest">Automation that amplifies relationships instead of replacing them.</p>
          </div>
          <div className="text-center group">
            <div className="w-20 h-20 bg-indigo-50 rounded-[30px] flex items-center justify-center text-indigo-700 mx-auto mb-8 transform group-hover:rotate-6 transition-transform">
              <Sparkles size={32} />
            </div>
            <h3 className="text-2xl font-serif text-gray-900 mb-4">Radical Clarity</h3>
            <p className="text-gray-500 font-light leading-relaxed uppercase text-[10px] tracking-widest">Real-time tracking that ensures trust is built on hard facts.</p>
          </div>
        </div>

        {/* OUR WAY OF WORKING */}
        <div className="bg-[#003049] text-white rounded-[60px] p-20 md:p-32 mb-40 relative overflow-hidden">
          <div className="relative z-10">
            <div className="max-w-3xl">
              <span className="text-[#f3cf5f] text-[10px] uppercase tracking-[8px] font-black block mb-8">Our Way of Working</span>
              <h2 className="text-4xl md:text-6xl font-serif mb-12 leading-tight">We don't rush. <br /> We build <span className="italic text-[#f3cf5f]">Moats.</span></h2>
              <p className="text-white/60 text-lg font-light leading-relaxed mb-12">
                Most agencies move fast and break things. We move intentionally and build things that stay built. Our methodology is rooted in 4 key pillars of sustainable growth.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                {[
                  { title: 'The Semantic Audit', desc: 'Understanding the intent behind every interaction.' },
                  { title: 'Authored Presence', desc: 'Websites that speak with authority and soul.' },
                  { title: 'Guided Nurture', desc: 'Systems that bridge the gap to sales via AI.' },
                  { title: 'Live Evolution', desc: 'Real-time scaling based on live tracking.' }
                ].map((item, i) => (
                  <div key={i} className="flex gap-6">
                    <div className="text-4xl font-serif text-[#f3cf5f]/20">{i + 1}</div>
                    <div>
                      <h4 className="font-black text-[11px] uppercase tracking-[3px] text-[#f3cf5f] mb-2">{item.title}</h4>
                      <p className="text-white/40 text-[10px] uppercase tracking-wider">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* TEAM / LEADERSHIP AREA */}
        <div className="flex flex-col md:flex-row items-center gap-24 mb-40">
           <div className="md:w-1/2 relative">
              <div className="aspect-square bg-gray-100 rounded-[50px] overflow-hidden">
                <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800" alt="Lead Strategist" className="w-full h-full object-cover" />
              </div>
              <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-[#fdf2d1] rounded-full p-8 flex items-center justify-center text-center shadow-xl">
                 <p className="font-signature text-3xl text-gray-800">Bespoke <br /> Growth</p>
              </div>
           </div>
           <div className="md:w-1/2">
              <h2 className="text-4xl md:text-5xl font-serif text-gray-900 mb-8">Led by Strategy, <br /> Built by <span className="italic">Vision</span>.</h2>
              <p className="text-gray-500 font-light leading-relaxed mb-10">
                Founded on the principle that digital growth doesn't have to be cold, Rika Gayar Studios has evolved into a powerhouse for brands that demand both performance and personality.
              </p>
              <div className="space-y-6">
                 <div className="flex items-center gap-4">
                    <div className="w-12 h-[1px] bg-[#f3cf5f]"></div>
                    <span className="text-[10px] uppercase tracking-[5px] font-black">2024 Expansion</span>
                 </div>
                 <Link to="/contact" className="inline-flex items-center gap-3 text-gray-900 font-black text-[11px] uppercase tracking-[3px] py-4 px-10 rounded-full border border-gray-100 hover:bg-gray-50 transition-all">
                    Meet our Strategists <ArrowRight size={16} />
                 </Link>
              </div>
           </div>
        </div>

      </div>
    </div>
  );
};

export default About;
