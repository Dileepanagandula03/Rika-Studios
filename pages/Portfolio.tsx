
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Maximize2, Share2, Info, Sparkles } from 'lucide-react';

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
    <div className="min-h-screen bg-[#F0E6E6] text-[#1a1a1a] pt-24 overflow-hidden relative">
      {/* Background Large Text (Editorial) */}
      <div className="absolute inset-0 flex items-center justify-center z-0 select-none pointer-events-none">
        <h1 
          className="text-[35vw] font-black text-white leading-none tracking-tighter transition-transform duration-300 ease-out"
          style={{ transform: `translate(${mousePosition.x * -0.5}px, ${mousePosition.y * -0.5}px)` }}
        >
          rika
        </h1>
      </div>

      {/* Atmospheric Smoke Effects (Pink Clouds) */}
      <div className="absolute inset-0 z-10 pointer-events-none overflow-hidden">
        {/* Layer 1: Back Smoke */}
        <div 
          className="absolute top-1/4 left-1/4 w-[80vw] h-[80vh] opacity-40 blur-[80px] bg-gradient-to-br from-[#FFB7C5] via-[#E91E63] to-transparent rounded-full animate-float"
          style={{ transform: `translate(${mousePosition.x * 0.8}px, ${mousePosition.y * 0.8}px)` }}
        ></div>
        {/* Layer 2: Mid Smoke */}
        <div 
          className="absolute bottom-1/4 right-1/4 w-[60vw] h-[60vh] opacity-30 blur-[100px] bg-gradient-to-tl from-[#F48FB1] via-[#AD1457] to-transparent rounded-full animate-bloom"
          style={{ transform: `translate(${mousePosition.x * 1.2}px, ${mousePosition.y * 1.2}px)` }}
        ></div>
      </div>

      {/* Content Container */}
      <div className="container mx-auto px-6 h-[calc(100vh-6rem)] relative z-20 flex flex-col justify-between">
        
        {/* Top Editorial Bar */}
        <div className="flex justify-between items-start pt-8">
          <div className="space-y-1">
            <p className="text-[10px] font-black uppercase tracking-[6px] text-gray-500">Portfolio</p>
            <h2 className="text-xl font-black uppercase tracking-[2px]">Systems Collection</h2>
          </div>
          <div className="flex gap-12 text-[9px] font-black uppercase tracking-[4px] text-right">
            <div className="space-y-1">
              <p className="text-[#E91E63]">High Intent</p>
              <p className="text-gray-400">Strategy</p>
            </div>
            <div className="space-y-1">
              <p className="text-[#E91E63]">Human First</p>
              <p className="text-gray-400">Architecture</p>
            </div>
            <div className="bg-[#FF5722] w-6 h-6 flex items-center justify-center text-white">
               <Info size={12} />
            </div>
          </div>
        </div>

        {/* Central Dynamic Figure (Main Subject) */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-full flex items-center justify-center pointer-events-none">
          <div 
            className="relative w-full aspect-[3/4] md:aspect-square group transition-transform duration-500"
            style={{ transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)` }}
          >
            {/* Subject Image Updated to your provided portrait */}
            <img 
              src="https://storage.googleapis.com/static.aistudio.google.com/content/file-1.png" 
              alt="Strategic Vision" 
              className="w-full h-full object-contain mix-blend-multiply drop-shadow-[0_35px_35px_rgba(233,30,99,0.3)]"
            />
            
            {/* AI Modified / Human Guided Badge */}
            <div className="absolute bottom-10 left-10 bg-black/80 backdrop-blur-md px-6 py-3 rounded-xl border border-white/20 pointer-events-auto">
               <p className="text-[10px] font-black uppercase tracking-[4px] text-white">Human Guided</p>
               <p className="text-[8px] text-gray-400 uppercase tracking-widest mt-1">Refined by AI Precision</p>
            </div>
          </div>
        </div>

        {/* Bottom Editorial Content */}
        <div className="pb-12 flex flex-col md:flex-row justify-between items-end gap-8">
          <div className="max-w-xs space-y-6">
            <p className="text-[10px] font-medium leading-relaxed text-gray-600 uppercase tracking-widest">
              A curated showcase of digital evolution. We design for motion, growth, and the silent authority of trust.
            </p>
            <div className="flex gap-4">
              <button className="w-12 h-12 rounded-full bg-white shadow-xl flex items-center justify-center hover:bg-[#E91E63] hover:text-white transition-all transform hover:scale-110">
                <Share2 size={18} />
              </button>
              <button className="w-12 h-12 rounded-full bg-white shadow-xl flex items-center justify-center hover:bg-[#E91E63] hover:text-white transition-all transform hover:scale-110">
                <Maximize2 size={18} />
              </button>
            </div>
          </div>

          <div className="flex flex-col items-end">
            <div className="flex items-center gap-4 mb-4">
               <div className="w-12 h-[1px] bg-[#E91E63]"></div>
               <span className="text-[10px] font-black uppercase tracking-[5px] text-[#E91E63]">Next Evolution</span>
            </div>
            <Link 
              to="/contact" 
              className="group flex items-center gap-6 bg-black text-white pl-10 pr-4 py-4 rounded-full text-[11px] uppercase font-black tracking-[4px] hover:bg-[#E91E63] transition-all"
            >
              Collaborate 
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-black group-hover:scale-90 transition-transform">
                <ArrowRight size={18} />
              </div>
            </Link>
          </div>
        </div>
      </div>

      {/* Floating Sparkle Particles */}
      {[...Array(6)].map((_, i) => (
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
