
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, BarChart3, Clock, Sparkles } from 'lucide-react';

const CASE_STUDIES = [
  {
    id: 'flora-legacy',
    title: 'The Flora Legacy',
    client: 'Heritage Florals & Bouquets',
    category: 'Full Digital Transformation',
    image: 'https://images.unsplash.com/photo-1596073413908-4352f0855ad1?auto=format&fit=crop&q=80&w=1200',
    stat: '420% Growth',
    summary: 'Revamping a 10-year stagnant florist into a global botanical authority using 2026 Semantic Systems.'
  }
];

const CaseStudies: React.FC = () => {
  return (
    <div className="pt-40 pb-32 bg-white min-h-screen">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mb-24">
          <span className="text-[#E91E63] text-[10px] uppercase tracking-[10px] font-black block mb-6">Case Studies</span>
          <h1 className="text-5xl md:text-7xl font-bold text-[#2D3134] leading-tight mb-8">
            Proof of <span className="italic">Evolution.</span>
          </h1>
          <p className="text-xl text-[#2D3134]/60 font-light leading-relaxed max-w-2xl">
            We don't just build websites; we architect outcomes. Explore how we transform legacy stagnation into modern demand.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-32">
          {CASE_STUDIES.map((study) => (
            <div key={study.id} className="group relative">
              <div className="flex flex-col lg:flex-row gap-16 items-center">
                <div className="lg:w-7/12 overflow-hidden rounded-[40px] shadow-2xl relative">
                   <img 
                    src={study.image} 
                    alt={study.title} 
                    className="w-full aspect-[16/10] object-cover transition-transform duration-[2s] group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                </div>
                
                <div className="lg:w-5/12">
                   <div className="flex items-center gap-3 mb-6">
                      <Clock size={16} className="text-[#E91E63]" />
                      <span className="text-[10px] uppercase tracking-[4px] font-black text-gray-400">Project: {study.category}</span>
                   </div>
                   <h2 className="text-4xl md:text-5xl font-bold text-[#2D3134] mb-6 leading-tight group-hover:text-[#E91E63] transition-colors">
                     {study.title}
                   </h2>
                   <p className="text-[#2D3134]/70 text-lg font-light leading-relaxed mb-10">
                     {study.summary}
                   </p>
                   
                   <div className="grid grid-cols-2 gap-8 mb-12">
                      <div className="border-l-2 border-[#E91E63]/20 pl-6">
                         <span className="text-[10px] uppercase tracking-[3px] font-black text-gray-400 block mb-1">Impact</span>
                         <span className="text-2xl font-bold text-[#2D3134]">{study.stat}</span>
                      </div>
                      <div className="border-l-2 border-[#E91E63]/20 pl-6">
                         <span className="text-[10px] uppercase tracking-[3px] font-black text-gray-400 block mb-1">Status</span>
                         <span className="text-2xl font-bold text-[#2D3134]">Live Scale</span>
                      </div>
                   </div>

                   <Link 
                     to={`/portfolio/case-studies/${study.id}`} 
                     className="inline-flex items-center gap-4 bg-[#2D3134] text-white px-10 py-5 rounded-full text-[10px] uppercase font-black tracking-[4px] hover:bg-[#E91E63] transition-all transform group-hover:translate-x-2"
                   >
                     View Narrative <ArrowRight size={14} />
                   </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CaseStudies;
