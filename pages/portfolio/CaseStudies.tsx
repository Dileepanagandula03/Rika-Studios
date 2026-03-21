
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const CASE_STUDIES = [
  {
    id: 'dnk-glam-events',
    title: 'Luxury Weddings',
    subtitle: 'DNK Glam Events',
    tagline: 'Architecting Premium Positioning in a Regional Experiential Market',
    description: 'Elevating a regional wedding service into a recognized luxury experience brand through structured positioning and perception management.',
    image: 'https://images.unsplash.com/photo-1532712938310-34cb3982ef74?auto=format&fit=crop&q=80&w=800',
    color: 'bg-pink-50'
  },
  {
    id: 'dnk-corporate-events',
    title: 'Corporate & Brand Events',
    subtitle: 'DNK Glam Events',
    tagline: 'Structuring Experiential Authority for Business-Driven Event Ecosystems',
    description: 'Transitioning an experiential service brand into corporate ecosystems through structured positioning and operational credibility.',
    image: 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&q=80&w=800',
    color: 'bg-rose-50'
  },
  {
    id: 'dnk-event-rentals',
    title: 'Event Rentals & Styling',
    subtitle: 'DNK Glam Events',
    tagline: 'Designing a Scalable Infrastructure Model for the DMV Experiential Market',
    description: 'Transforming rentals from a supporting function into a strategically integrated revenue infrastructure for the DMV region.',
    image: 'https://images.unsplash.com/photo-1470753937643-efeb931202a9?auto=format&fit=crop&q=80&w=800',
    color: 'bg-pink-50'
  },
  {
    id: 'dnk-balloon-installations',
    title: 'Balloon Installations',
    subtitle: 'DNK Glam Events',
    tagline: 'Leveraging Visual Virality to Build Demand Acceleration Systems in the DMV Market',
    description: 'Transforming visually driven celebration formats into high-impact demand acceleration systems for the regional experiential ecosystem.',
    image: 'https://images.unsplash.com/photo-1530103043960-ef38714abb15?auto=format&fit=crop&q=80&w=800',
    color: 'bg-rose-50'
  },
  {
    id: 'dnk-social-celebrations',
    title: 'Social & Special Celebrations',
    subtitle: 'DNK Glam Events',
    tagline: 'Designing a Recurring Micro-Event Demand Engine within the DMV Experiential Market',
    description: 'Transforming micro-event demand into a recurring acquisition engine through structured experiential positioning.',
    image: 'https://images.unsplash.com/photo-1513151233558-d860c5398176?auto=format&fit=crop&q=80&w=800',
    color: 'bg-pink-50'
  },
  {
    id: 'dnk-floral-studio',
    title: 'Floral Studio',
    subtitle: 'DNK Glam Events',
    tagline: 'Designing a Seasonal Growth Infrastructure for a Local Event Brand',
    description: 'Designing a structured growth infrastructure capable of supporting long-term market positioning for a local event brand.',
    image: 'https://images.unsplash.com/photo-1526047932273-341f2a7631f9?auto=format&fit=crop&q=80&w=800',
    color: 'bg-rose-50'
  },
  {
    id: 'luxe-wellness',
    title: 'Growth Systems',
    subtitle: 'Luxe Wellness',
    tagline: 'Scaling brand trust through human-guided automation.',
    description: 'How we transitioned a robotic sequence into a human-first conversion environment.',
    image: 'https://picsum.photos/seed/wellness/800/600',
    color: 'bg-pink-50'
  },
  {
    id: 'aurora-fintech',
    title: 'Conversion Web',
    subtitle: 'Aurora FinTech',
    tagline: 'Designing authority for the future of finance.',
    description: 'Building a high-authority digital home that radiates trust in a volatile market.',
    image: 'https://picsum.photos/seed/finance/800/600',
    color: 'bg-rose-50'
  },
  {
    id: 'ethos-fashion',
    title: 'Brand Authority',
    subtitle: 'Ethos Fashion',
    tagline: 'Designing a high-authority digital home for sustainable fashion.',
    description: 'How we used strategic design to position a sustainable brand as a market leader.',
    image: 'https://picsum.photos/seed/fashion/800/600',
    color: 'bg-pink-50'
  },
  {
    id: 'nexa-ai',
    title: 'Product Narrative',
    subtitle: 'Nexa AI Platform',
    tagline: 'Translating complex AI capabilities into human-first value.',
    description: 'How we architected a product narrative that bridges the gap between tech and trust.',
    image: 'https://picsum.photos/seed/tech/800/600',
    color: 'bg-rose-50'
  }
];

const CaseStudies: React.FC = () => {
  return (
    <div className="pt-40 pb-32 bg-[#FFF5F7] min-h-screen relative overflow-hidden">
      {/* Background Large Text */}
      <div className="absolute inset-0 flex items-center justify-center z-0 select-none pointer-events-none">
        <h1 className="text-[30vw] font-black text-pink-100 leading-none tracking-tighter opacity-50">rika</h1>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mb-32">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-[#E91E63] text-[10px] uppercase tracking-[10px] font-black block mb-6"
          >
            Case Studies
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold text-[#2D3134] mb-8 leading-tight"
          >
            We don't just build websites; <br />
            we architect <span className="italic text-[#E91E63]">outcomes.</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-[#2D3134]/70 font-light leading-relaxed max-w-2xl"
          >
            Explore our curated narratives of transformation. Each case study represents a deep dive into how we replace robotic noise with human intent to drive measurable growth and authority.
          </motion.p>
        </div>

        <div className="space-y-12">
          {CASE_STUDIES.map((study, index) => (
            <motion.div 
              key={study.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className={`rounded-[40px] p-8 md:p-12 ${study.color} border border-pink-100/50 flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-12 group hover:shadow-2xl hover:shadow-pink-200/30 transition-all duration-500`}
            >
              {/* Image Side */}
              <div className="w-full md:w-1/2 aspect-video md:aspect-[4/3] rounded-[32px] overflow-hidden shadow-xl relative">
                <img 
                  src={study.image} 
                  alt={study.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>

              {/* Text Side */}
              <div className="w-full md:w-1/2 space-y-6">
                <div className="space-y-2">
                  <span className="text-[10px] uppercase tracking-[4px] font-black text-[#E91E63]/60">{study.subtitle}</span>
                  <h3 className="text-4xl md:text-5xl font-bold text-[#2D3134] tracking-tight">{study.title}</h3>
                </div>
                <p className="text-lg text-[#2D3134]/80 font-medium leading-tight italic">
                  {study.tagline}
                </p>
                <p className="text-gray-500 font-light leading-relaxed">
                  {study.description}
                </p>
                
                <div className="pt-4">
                  <Link 
                    to={`/portfolio/case-studies/${study.id}`} 
                    className="inline-flex items-center gap-3 bg-white text-[#2D3134] px-8 py-4 rounded-full text-[11px] uppercase font-black tracking-[3px] shadow-lg hover:bg-[#E91E63] hover:text-white transition-all group/btn"
                  >
                    Read Full Case Study
                    <div className="w-6 h-6 rounded-full bg-[#E91E63]/10 flex items-center justify-center group-hover/btn:bg-white/20 transition-colors">
                      <ArrowRight size={14} className="group-hover/btn:translate-x-1 transition-transform" />
                    </div>
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CaseStudies;
