
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, CheckCircle2, Cpu, Search, Waves, Sparkles, TrendingUp } from 'lucide-react';

const CaseStudyDetail: React.FC = () => {
  return (
    <div className="bg-white min-h-screen pt-40 pb-24">
      <div className="container mx-auto px-6">
        <Link to="/portfolio/case-studies" className="inline-flex items-center gap-2 text-[#E91E63] text-[10px] uppercase font-black tracking-[3px] mb-12 hover:-translate-x-2 transition-transform">
          <ArrowLeft size={14} /> All Case Studies
        </Link>

        {/* Hero Section */}
        <div className="max-w-5xl mb-24">
          <h1 className="text-5xl md:text-8xl font-bold text-[#2D3134] leading-[0.9] mb-10">
            The Flora <br />
            <span className="italic text-[#E91E63]">Legacy.</span>
          </h1>
          <div className="flex flex-wrap gap-12 border-y border-gray-100 py-10">
             <div>
                <span className="text-[9px] uppercase tracking-[4px] font-black text-gray-400 block mb-2">Client</span>
                <span className="text-lg text-[#2D3134] font-medium">Bespoke Heritage Florals</span>
             </div>
             <div>
                <span className="text-[9px] uppercase tracking-[4px] font-black text-gray-400 block mb-2">Tech Cycle</span>
                <span className="text-lg text-[#2D3134] font-medium">2026 Semantic Series</span>
             </div>
             <div>
                <span className="text-[9px] uppercase tracking-[4px] font-black text-gray-400 block mb-2">Timeline</span>
                <span className="text-lg text-[#2D3134] font-medium">4 Month Revamp</span>
             </div>
          </div>
        </div>

        {/* The Challenge */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-40">
           <div className="lg:col-span-5">
              <span className="text-[#E91E63] text-[10px] uppercase tracking-[8px] font-black block mb-6">The Stagnation</span>
              <h2 className="text-3xl md:text-4xl font-bold text-[#2D3134] leading-tight mb-8">
                A decade of silence <br /> in a digital-first world.
              </h2>
              <p className="text-gray-600 font-light leading-relaxed text-lg">
                For 10 years, Flora Legacy operated strictly via word-of-mouth. Their digital presence was a 2014 placeholder. While their artistry was world-class, their visibility was zero. They were losing 80% of their local market share to "factory florists" because they lacked the infrastructure to be found and trusted online.
              </p>
           </div>
           <div className="lg:col-span-7">
              <div className="rounded-[50px] overflow-hidden shadow-2xl h-full">
                 <img 
                  src="https://images.unsplash.com/photo-1526047932273-341f2a7631f9?auto=format&fit=crop&q=80&w=1200" 
                  alt="Floral Workspace" 
                  className="w-full h-full object-cover"
                />
              </div>
           </div>
        </div>

        {/* The 2026 Solution */}
        <div className="bg-[#2D3134] text-white rounded-[60px] p-12 md:p-32 mb-40 relative overflow-hidden">
           <div className="absolute top-0 right-0 w-1/2 h-full opacity-10 pointer-events-none">
              <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                 <path d="M0,50 Q25,0 50,50 T100,50" fill="none" stroke="white" strokeWidth="0.5" />
              </svg>
           </div>
           
           <div className="relative z-10 max-w-4xl">
              <span className="text-[#E91E63] text-[10px] uppercase tracking-[10px] font-black block mb-8">RGS Ecosystem Implementation</span>
              <h2 className="text-4xl md:text-6xl font-bold mb-16 leading-tight">
                Architecting <span className="italic text-[#E91E63]">Human-Led</span> <br /> Automation.
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                 <div className="space-y-6">
                    <Search className="text-[#E91E63]" size={32} />
                    <h3 className="text-xl font-bold">Semantic Authority</h3>
                    <p className="text-white/50 text-sm font-light leading-relaxed">
                      We mapped 5,000+ intent-driven botanical keywords, ensuring Flora Legacy became the undisputed answer for "Luxury Botanical Artistry."
                    </p>
                 </div>
                 <div className="space-y-6">
                    <Waves className="text-[#E91E63]" size={32} />
                    <h3 className="text-xl font-bold">Authored Trust</h3>
                    <p className="text-white/50 text-sm font-light leading-relaxed">
                      A cinematic conversion environment was built to mirror the physical scent and feel of the studio, inducing immediate buyer trust.
                    </p>
                 </div>
                 <div className="space-y-6">
                    <Cpu className="text-[#E91E63]" size={32} />
                    <h3 className="text-xl font-bold">Human-AI Nurture</h3>
                    <p className="text-white/50 text-sm font-light leading-relaxed">
                      Custom AI Growth Agents were trained on the founder’s 30 years of expertise to provide 24/7 bespoke consultation to high-net-worth clients.
                    </p>
                 </div>
              </div>
           </div>
        </div>

        {/* Results */}
        <div className="mb-40">
           <div className="text-center mb-20">
              <span className="text-[#E91E63] text-[10px] uppercase tracking-[10px] font-black block mb-6">Outcome</span>
              <h2 className="text-4xl md:text-6xl font-bold text-[#2D3134]">Quantifiable Evolution.</h2>
           </div>
           
           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { label: 'Revenue Increase', value: '+420%', icon: <TrendingUp size={24} /> },
                { label: 'Search Visibility', value: '1st Page (Top 3)', icon: <Search size={24} /> },
                { label: 'Automated Lead Qual', value: '92%', icon: <Sparkles size={24} /> }
              ].map((stat, i) => (
                <div key={i} className="bg-[#FFF5F8] p-12 rounded-[40px] text-center border border-rose-100 shadow-sm transition-transform hover:-translate-y-2">
                   <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-[#E91E63] mx-auto mb-8 shadow-md">
                      {stat.icon}
                   </div>
                   <span className="text-5xl font-bold text-[#2D3134] block mb-4">{stat.value}</span>
                   <span className="text-[10px] uppercase tracking-[4px] font-black text-gray-400">{stat.label}</span>
                </div>
              ))}
           </div>
        </div>

        {/* CTA */}
        <div className="bg-[#F7F6F2] rounded-[60px] p-12 md:p-24 text-center">
           <h3 className="text-3xl md:text-5xl font-bold text-[#2D3134] mb-10 leading-tight">
             Want a similar <br /> <span className="text-[#E91E63]">Revamp?</span>
           </h3>
           <Link to="/contact" className="inline-flex items-center gap-4 bg-[#2D3134] text-white px-16 py-6 rounded-full text-[11px] uppercase font-black tracking-[5px] hover:bg-[#E91E63] transition-all shadow-xl">
             Start Your Evolution <Sparkles size={16} />
           </Link>
        </div>
      </div>
    </div>
  );
};

export default CaseStudyDetail;
