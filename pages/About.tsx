import React, { useEffect } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import { Target, Zap, Shield, Sparkles, Cpu, Globe, ArrowRight, Layers, MessageSquare, BarChart3, Share2, PenTool } from 'lucide-react';

const About: React.FC = () => {
  // Mouse tracking for interactive visuals (same as Contact page)
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth mouse movement
  const smoothX = useSpring(mouseX, { stiffness: 50, damping: 20 });
  const smoothY = useSpring(mouseY, { stiffness: 50, damping: 20 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  const builds = [
    { icon: <Target />, title: 'Scalable Acquisition', desc: 'Systems that generate predictable leads.' },
    { icon: <Zap />, title: 'High-Conversion', desc: 'Digital experiences that turn attention into revenue.' },
    { icon: <MessageSquare />, title: 'AI-Supported', desc: 'Communication systems that improve engagement.' },
    { icon: <Shield />, title: 'Narrative Trust', desc: 'Content and brand narratives that build long-term trust.' },
  ];

  return (
    <div className="min-h-screen relative overflow-hidden pt-32 pb-24 bg-[#FFF5F7]">
      
      {/* Background Large Text (Editorial) */}
      <div className="absolute inset-0 flex items-center justify-center z-0 select-none pointer-events-none">
        <motion.h1 
          style={{ 
            x: useSpring(mouseX, { stiffness: 30, damping: 20 }), 
            y: useSpring(mouseY, { stiffness: 30, damping: 20 }),
            translateX: '-50%',
            translateY: '-50%'
          }}
          className="absolute top-1/2 left-1/2 text-[35vw] font-black text-pink-200 leading-none tracking-tighter opacity-40"
        >
          rika
        </motion.h1>
      </div>
      
      {/* --- ADVANCED VISUAL BACKGROUND LAYER (Matching Contact Page) --- */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div 
          className="absolute inset-0 opacity-[0.05]" 
          style={{ 
            backgroundImage: `linear-gradient(#E91E63 1px, transparent 1px), linear-gradient(90deg, #E91E63 1px, transparent 1px)`,
            backgroundSize: '60px 60px',
            transform: 'perspective(1000px) rotateX(60deg) translateY(-100px) scale(2)',
            transformOrigin: 'top'
          }}
        ></div>

        <motion.div
          style={{
            left: smoothX,
            top: smoothY,
            x: '-50%',
            y: '-50%',
          }}
          className="absolute w-[600px] h-[600px] bg-pink-500/10 rounded-full blur-[120px] z-0"
        />

        <motion.div
          animate={{ top: ['-10%', '110%'] }}
          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
          className="absolute left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-pink-500/30 to-transparent z-10"
        />

        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ 
              x: Math.random() * 100 + '%', 
              y: Math.random() * 100 + '%',
              opacity: Math.random() * 0.5
            }}
            animate={{ 
              y: [null, Math.random() * -100 - 50 + 'px'],
              opacity: [0, 0.5, 0]
            }}
            transition={{ 
              duration: Math.random() * 5 + 5, 
              repeat: Infinity, 
              ease: "linear",
              delay: Math.random() * 5
            }}
            className="absolute w-1 h-1 bg-pink-400 rounded-full"
          />
        ))}

        <motion.div 
          animate={{ scale: [1, 1.2, 1], rotate: [0, 90, 0], x: [0, 50, 0] }}
          transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-20 -left-20 w-[800px] h-[800px] rounded-full blur-[180px] opacity-10 bg-pink-600"
        ></motion.div>
        <motion.div 
          animate={{ scale: [1, 1.3, 1], rotate: [0, -90, 0], x: [0, -50, 0] }}
          transition={{ duration: 30, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -bottom-40 -right-40 w-[900px] h-[900px] rounded-full blur-[200px] opacity-10 bg-pink-600"
        ></motion.div>
      </div>

      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        
        {/* Hero Section */}
        <div className="text-center mb-32">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white shadow-xl border border-gray-100 mb-8"
          >
            <div className="w-2 h-2 rounded-full bg-[#E91E63] animate-pulse"></div>
            <span className="text-[10px] font-black uppercase tracking-[3px] text-gray-400">About Us</span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-[48px] md:text-[72px] font-bold text-[#1A1A1A] mb-8 tracking-tighter leading-[0.9] flex flex-col items-center"
          >
            <span className="relative">
              Growth Infrastructure
              <motion.div 
                initial={{ width: 0 }}
                animate={{ width: '100%' }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="absolute -bottom-2 left-0 h-1 bg-[#E91E63]/20"
              />
            </span>
            <span className="italic font-serif text-[#E91E63] mt-2">For The Modern Brand</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-gray-800 text-xl font-medium max-w-3xl mx-auto leading-relaxed"
          >
            We design structured growth systems for brands navigating today’s digital landscape. In a market shaped by automation and fragmented attention, businesses need more than marketing—they need systems that drive consistent and measurable growth.
          </motion.p>
        </div>

        {/* What We Build Section */}
        <section className="mb-40">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {builds.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -12, scale: 1.02 }}
                className="relative group h-full"
              >
                {/* Background Tech Visuals */}
                <div className="absolute inset-0 bg-gradient-to-br from-pink-500/10 to-rose-500/10 rounded-[32px] blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                
                <div className="relative p-8 rounded-[32px] bg-white/90 backdrop-blur-xl border border-white shadow-xl h-full flex flex-col items-center text-center overflow-hidden group-hover:shadow-pink-500/20 transition-all duration-500">
                  {/* Rotating Ring behind icon */}
                  <div className="absolute top-12 left-1/2 -translate-x-1/2 w-24 h-24 rounded-full border border-dashed border-pink-500/30 animate-spin-slow pointer-events-none"></div>
                  
                  {/* Scanning Line Effect */}
                  <motion.div 
                    animate={{ top: ['0%', '100%', '0%'] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                    className="absolute left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-pink-500/40 to-transparent z-0 pointer-events-none"
                  />
                  
                  <div className="relative w-16 h-16 rounded-2xl bg-gradient-to-br from-[#E91E63] to-pink-600 shadow-lg shadow-pink-500/30 flex items-center justify-center text-white mb-8 group-hover:rotate-[360deg] transition-transform duration-1000 z-10">
                    {React.cloneElement(item.icon as React.ReactElement, { size: 28 })}
                  </div>
                  
                  <h3 className="text-xl font-bold text-[#1A1A1A] mb-4 tracking-tight group-hover:text-[#E91E63] transition-colors z-10">{item.title}</h3>
                  <p className="text-gray-800 text-sm font-medium leading-relaxed z-10">{item.desc}</p>
                  
                  {/* Orbiting node inside card */}
                  <div className="absolute inset-0 animate-spin-slow pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity" style={{ animationDuration: '10s' }}>
                    <div className="w-2 h-2 rounded-full bg-[#E91E63] absolute top-4 left-1/2 -translate-x-1/2 shadow-[0_0_12px_#E91E63]"></div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="mt-20 text-center max-w-3xl mx-auto"
          >
            <p className="text-gray-800 text-lg font-medium leading-relaxed">
              <span className="block font-bold text-[#1A1A1A] text-2xl tracking-tight">
                Growth should be <span className="italic text-[#E91E63]">intentional</span>. Not accidental.
              </span>
            </p>
          </motion.div>
        </section>

        {/* Our Approach Section */}
        <section className="mb-40 relative">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-pink-500/5 rounded-full blur-[120px] pointer-events-none"></div>
          
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-pink-50 border border-pink-100 text-[9px] font-black uppercase tracking-[3px] text-[#E91E63] mb-8">
                🌿 Our Approach
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-[#1A1A1A] mb-8 tracking-tighter leading-tight">
                Growth comes from <span className="italic text-[#E91E63]">integration</span>.
              </h2>
              <div className="space-y-4 text-gray-800 text-lg font-medium">
                <p>Not isolated services. Not disconnected tools. Not short-term tactics.</p>
                <p>We build connected systems that drive visibility, trust, conversion, scalability, and measurable outcomes. This allows brands to grow with clarity and consistency.</p>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              {['Visibility', 'Trust', 'Conversion', 'Scalability'].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.1 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="relative p-8 rounded-3xl bg-white/90 backdrop-blur-md border border-white shadow-lg flex flex-col items-center justify-center text-center group overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-pink-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <div className="w-3 h-3 rounded-full bg-[#E91E63] mb-4 shadow-[0_0_10px_#E91E63] group-hover:scale-150 transition-transform animate-pulse"></div>
                  <span className="text-[11px] font-black uppercase tracking-[4px] text-gray-800 group-hover:text-[#E91E63] transition-colors relative z-10">{item}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

      </div>

      {/* Custom Styles for Animations (Matching Contact Page) */}
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }
      `}} />
    </div>
  );
};

// Re-importing Mail as it was used in coreSystems but not in the main imports list
import { Mail } from 'lucide-react';

export default About;
