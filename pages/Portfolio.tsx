
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { PORTFOLIO } from '../constants';
import { motion } from 'framer-motion';

const Portfolio: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="min-h-screen bg-[#F0E6E6] text-[#1a1a1a] pt-32 pb-24 overflow-hidden relative">
      {/* Background Large Text (Editorial) */}
      <div className="absolute inset-0 flex items-center justify-center z-0 select-none pointer-events-none">
        <h1 
          className="text-[35vw] font-black text-white leading-none tracking-tighter transition-transform duration-300 ease-out opacity-50"
          style={{ transform: `translate(${mousePosition.x * -0.5}px, ${mousePosition.y * -0.5}px)` }}
        >
          rika
        </h1>
      </div>

      {/* Atmospheric Smoke Effects (Pink Clouds) */}
      <div className="absolute inset-0 z-10 pointer-events-none overflow-hidden">
        <div 
          className="absolute top-1/4 left-1/4 w-[80vw] h-[80vh] opacity-30 blur-[80px] bg-gradient-to-br from-[#FFB7C5] via-[#E91E63] to-transparent rounded-full animate-float"
          style={{ transform: `translate(${mousePosition.x * 0.8}px, ${mousePosition.y * 0.8}px)` }}
        ></div>
        <div 
          className="absolute bottom-1/4 right-1/4 w-[60vw] h-[60vh] opacity-20 blur-[100px] bg-gradient-to-tl from-[#F48FB1] via-[#AD1457] to-transparent rounded-full animate-bloom"
          style={{ transform: `translate(${mousePosition.x * 1.2}px, ${mousePosition.y * 1.2}px)` }}
        ></div>
      </div>

      {/* Content Container */}
      <div className="container mx-auto px-6 relative z-20">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-start mb-24 gap-12">
          <div className="space-y-4 max-w-2xl">
            <span className="text-[10px] font-black uppercase tracking-[8px] text-[#E91E63] block">Portfolio</span>
            <p className="text-lg text-gray-600 font-light leading-relaxed max-w-md pt-8">
              A curated showcase of digital evolution. We design for motion, growth, and the silent authority of trust.
            </p>
          </div>
          
          <div className="flex gap-12 text-[9px] font-black uppercase tracking-[4px] text-right md:pt-12">
            <div className="space-y-1">
              <p className="text-[#E91E63]">High Intent</p>
              <p className="text-gray-400">Strategy</p>
            </div>
            <div className="space-y-1">
              <p className="text-[#E91E63]">Human First</p>
              <p className="text-gray-400">Architecture</p>
            </div>
          </div>
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {PORTFOLIO.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative"
            >
              <div className="relative z-10 py-12 border-b border-black/5 group-hover:border-[#E91E63]/30 transition-colors">
                <span className="text-[#E91E63] text-[10px] font-black uppercase tracking-[4px] mb-2 block">{item.category}</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-32 flex flex-col items-center text-center">
          <div className="flex items-center gap-4 mb-8">
             <div className="w-12 h-[1px] bg-[#E91E63]"></div>
             <span className="text-[10px] font-black uppercase tracking-[5px] text-[#E91E63]">Next Evolution</span>
             <div className="w-12 h-[1px] bg-[#E91E63]"></div>
          </div>
          <Link 
            to="/contact" 
            className="group flex items-center gap-6 bg-black text-white pl-10 pr-4 py-4 rounded-full text-[11px] uppercase font-black tracking-[4px] hover:bg-[#E91E63] transition-all shadow-2xl"
          >
            Collaborate 
            <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-black group-hover:scale-90 transition-transform">
              <ArrowRight size={18} />
            </div>
          </Link>
        </div>
      </div>

      {/* Floating Sparkle Particles */}
      {[...Array(12)].map((_, i) => (
        <div 
          key={i}
          className="absolute w-1 h-1 bg-white rounded-full blur-[1px] animate-float opacity-30"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            animationDelay: `${i * 1.5}s`,
            animationDuration: `${5 + Math.random() * 5}s`
          }}
        ></div>
      ))}
    </div>
  );
};

export default Portfolio;
