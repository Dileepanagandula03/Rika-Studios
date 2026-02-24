
import React, { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles, Heart, Search, Cpu, BarChart3, Waves, ChevronRight, Quote } from 'lucide-react';
import { SERVICES } from '../constants';

const TESTIMONIALS = [
  {
    quote: "The transition from robotic sequences to human-guided systems changed everything for our brand trust. We finally feel seen.",
    author: "Sarah J.",
    role: "Founder, Lumina Wellness",
    signature: "Sarah Jenkins"
  },
  {
    quote: "Finally, an agency that understands that metrics aren't the only thing that matters. The clarity audit was eye-opening.",
    author: "Mark T.",
    role: "CEO, Nexa Dynamics",
    signature: "M. Thompson"
  },
  {
    quote: "Rika's team built an ecosystem that feels like an extension of our own soul. Truly bespoke work in a world of clones.",
    author: "Elena R.",
    role: "Creative Director, Ethos",
    signature: "Elena Rossi"
  },
  {
    quote: "Precision meeting empathy. That is the Rika Gayar standard. Our lead quality has never been higher or more intentional.",
    author: "David L.",
    role: "Partner, Velo Venture",
    signature: "David Laurent"
  }
];

const INSIGHTS: Record<string, string> = {
  'lead-generation': 'Engineered for high-intent traffic.',
  'website-experiences': 'Your living authority asset.',
  'content-systems': 'Turning attention into loyalty.',
  'seo-authority': 'Owning buyer conversations.',
  'ai-growth-agents': 'Amplifying brand voice.',
  'project-tracking': 'Clarity through feedback loops.'
};

const ProcessStep: React.FC<{ 
  step: string; 
  title: string; 
  desc: string; 
  icon: React.ReactNode; 
  index: number;
  isVisible: boolean;
}> = ({ step, title, desc, icon, index, isVisible }) => {
  return (
    <div 
      className={`relative flex flex-col items-start transition-all duration-[1000ms] transform ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
      }`}
      style={{ transitionDelay: `${(index + 1) * 150}ms` }}
    >
      <div className="mb-6 relative group">
        <div className="w-16 h-16 rounded-2xl bg-white flex items-center justify-center text-[#E91E63] shadow-sm border border-gray-100 transition-all group-hover:shadow-md group-hover:-translate-y-1">
          {icon}
        </div>
        <span className="absolute -top-3 -left-3 text-[10px] font-black tracking-widest text-gray-300 uppercase italic">
          {step}
        </span>
      </div>
      <h4 className="text-2xl font-bold text-[#2D3134] mb-3 tracking-tight">{title}</h4>
      <p className="text-gray-500 text-[14px] font-light leading-relaxed max-w-[260px]">
        {desc}
      </p>
    </div>
  );
};

const MagneticServiceItem: React.FC<{ service: typeof SERVICES[0]; index: number }> = ({ service, index }) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const itemRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!itemRef.current) return;
    const { left, top, width, height } = itemRef.current.getBoundingClientRect();
    const x = (e.clientX - (left + width / 2)) * 0.15; 
    const y = (e.clientY - (top + height / 2)) * 0.15;
    setPosition({ x, y });
  };

  return (
    <div 
      ref={itemRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => { setIsHovered(false); setPosition({ x: 0, y: 0 }); }}
      className="flex flex-col items-center group transition-all duration-700 ease-out cursor-pointer"
      style={{ 
        transform: `translate(${position.x}px, ${position.y}px) ${isHovered ? 'translateY(-15px)' : 'translateY(0)'}` 
      }}
    >
      <div className="relative mb-8">
        <div className="absolute inset-[-60px] rounded-full blur-[80px] opacity-0 group-hover:opacity-70 transition-all duration-1000 animate-pulse bg-gradient-to-tr from-[#E91E63]/25 via-[#FFB347]/15 to-transparent pointer-events-none"></div>
        <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-white shadow-xl relative z-10 transition-all duration-700 group-hover:scale-105 group-hover:shadow-[0_30px_60px_-12px_rgba(233,30,99,0.3)] group-hover:brightness-105">
          <img 
            src={`https://picsum.photos/seed/${service.id}/400/400`} 
            alt={service.title} 
            className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-110" 
          />
          <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-15 transition-opacity duration-700 pointer-events-none"></div>
        </div>
      </div>
      <div className="text-center transition-all duration-700 transform group-hover:-translate-y-2 px-2">
        <h3 className="text-center text-[10px] md:text-[11px] font-black text-[#2D3134] mb-2 leading-tight tracking-[0.2em] h-10 flex items-center justify-center max-w-[160px] uppercase transition-colors group-hover:text-[#E91E63]">
          {service.title}
        </h3>
        <p className="text-[9px] text-[#FFB347] font-medium italic opacity-0 group-hover:opacity-100 transition-all duration-700 translate-y-2 group-hover:translate-y-0 h-4 mb-4">
          {INSIGHTS[service.id] || 'Optimized for sustainable growth.'}
        </p>
        <Link to={`/services/${service.id}`} className="inline-flex items-center justify-center px-7 py-2.5 rounded-full text-[9px] uppercase font-black tracking-[3px] text-white bg-[#2D3134] hover:bg-[#E91E63] transition-all shadow-lg group/btn active:scale-95">
          Explore
          <ArrowRight size={12} className="ml-0 w-0 opacity-0 group-hover/btn:ml-2 group-hover/btn:w-3 group-hover/btn:opacity-100 transition-all duration-500" />
        </Link>
      </div>
    </div>
  );
};

const Home: React.FC = () => {
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [block2Visible, setBlock2Visible] = useState(false);
  const [underlineProgress, setUnderlineProgress] = useState(0);
  const [testimonialIndex, setTestimonialIndex] = useState(0);
  const [fade, setFade] = useState(true);
  const block2Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setBlock2Visible(true);
        }
      },
      { threshold: 0.2 }
    );
    if (block2Ref.current) observer.observe(block2Ref.current);

    const handleScroll = () => {
      if (!block2Ref.current) return;
      const rect = block2Ref.current.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      const startTrigger = rect.top - viewportHeight;
      const distance = rect.height + viewportHeight;
      const rawProgress = Math.min(Math.max((Math.abs(startTrigger) / distance), 0), 1);
      const mappedProgress = Math.min(Math.max((rawProgress - 0.2) * 1.5, 0), 1);
      setUnderlineProgress(mappedProgress);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleNextTestimonial = () => {
    setFade(false);
    setTimeout(() => {
      setTestimonialIndex((prev) => (prev + 1) % TESTIMONIALS.length);
      setFade(true);
    }, 400);
  };

  return (
    <div className="bg-white">
      {/* HERO */}
      <section className="relative h-[100vh] flex items-center justify-center overflow-hidden bg-white">
        <div className="absolute inset-0 z-0">
          <video autoPlay loop muted playsInline onLoadedData={() => setVideoLoaded(true)}
            className={`w-full h-full object-cover transition-opacity duration-[2000ms] ${videoLoaded ? 'opacity-80' : 'opacity-0'}`}>
            <source src="https://www.pexels.com/download/video/35570103/" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-b from-white/40 via-white/20 to-white"></div>
        </div>
        
        <div className="container mx-auto px-6 relative z-10 text-center flex flex-col items-center">
          <div className="max-w-5xl">
            <span className="block text-gray-500 text-[10px] uppercase tracking-[10px] font-black mb-6">2026 Edition</span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#2D3134] leading-[1.1] mb-8 tracking-tighter">
              Growth Infrastructure <br /> for the <span className="italic text-[#E91E63]">Human Era.</span>
            </h1>
            <p className="text-base md:text-lg text-[#2D3134] font-medium leading-relaxed mb-12 max-w-2xl mx-auto drop-shadow-sm">
              We design authority systems, AI-assisted pipelines, and conversion environments that scale brands without stripping their soul.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <Link to="/contact" className="px-12 py-5 rounded-full bg-[#E91E63] text-white text-[11px] uppercase font-black tracking-[4px] shadow-2xl shadow-[#E91E63]/20 hover:scale-105 transition-all">
                Build My Growth System
              </Link>
              <Link to="/contact" className="px-12 py-5 rounded-full border border-gray-100 text-[#2D3134] text-[11px] uppercase font-black tracking-[4px] bg-white/60 backdrop-blur-md hover:bg-white transition-all">
                Apply for Partnership
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* BLOCK 2: METHODOLOGY - CLEAN AESTHETIC */}
      <section ref={block2Ref} className="py-24 md:py-40 bg-[#F2F4E8] relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col lg:flex-row items-start gap-16 lg:gap-32">
            <div className={`lg:w-5/12 transition-all duration-[1000ms] transform ${block2Visible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'}`}>
              <span className="text-[#E91E63] text-[10px] uppercase tracking-[12px] font-black block mb-8">Our Methodology</span>
              <div className="relative inline-block mb-10">
                <h2 className="text-4xl md:text-6xl font-bold text-[#2D3134] leading-[1.05] relative z-10">
                  How we replace <br />
                  <span className="italic text-[#E91E63]">robotic noise</span> <br />
                  with human intent.
                </h2>
                <svg className="absolute -bottom-4 left-0 w-full h-6 z-0 pointer-events-none" preserveAspectRatio="none">
                  <path 
                    d="M 0 10 Q 200 15 450 10" 
                    fill="none" 
                    stroke="#E91E63" 
                    strokeWidth="4" 
                    strokeLinecap="round"
                    style={{ 
                      strokeDasharray: '450', 
                      strokeDashoffset: `${450 * (1 - underlineProgress)}`,
                      transition: 'stroke-dashoffset 0.15s linear'
                    }}
                  />
                </svg>
              </div>
              <p className="text-gray-700/80 text-lg font-light leading-relaxed mb-12 max-w-sm">
                Growth without visibility is chaos. We design predictable demand engines built on buyer psychology, not platform tricks.
              </p>
              
              <Link to="/about" className="text-[11px] font-black uppercase tracking-[4px] hover:text-[#E91E63] transition-colors inline-flex items-center gap-2 group">
                Discover Our Ethos <ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            <div className="lg:w-7/12 grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-20 pt-12">
              <ProcessStep isVisible={block2Visible} index={0} step="01" title="Semantic Audit" icon={<Search size={28} />} desc="Finding high-intent language your customers use when they're ready to buy." />
              <ProcessStep isVisible={block2Visible} index={1} step="02" title="Authored Trust" icon={<Waves size={28} />} desc="Digital homes that radiate high-authority trust in every pixel." />
              <ProcessStep isVisible={block2Visible} index={2} step="03" title="Guided Nurture" icon={<Cpu size={28} />} desc="AI agents that speak with your unique brand soul to bridge the gap to sales." />
              <ProcessStep isVisible={block2Visible} index={3} step="04" title="Live Scale" icon={<BarChart3 size={28} />} desc="Expand what works through real-time, transparent growth analytics." />
            </div>
          </div>
        </div>
      </section>

      {/* NEW: FOUNDER'S VISION SECTION */}
      <section className="py-32 bg-white relative overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center gap-16 lg:gap-32">
            <div className="md:w-1/2 relative">
               <div className="aspect-[4/5] md:aspect-square bg-gray-50 rounded-[80px] overflow-hidden shadow-2xl relative">
                  <img 
                    src="https://images.pexels.com/photos/35267956/pexels-photo-35267956.jpeg" 
                    alt="Nyhavn - Strategic Environments" 
                    className="w-full h-full object-cover transition-transform duration-[3s] hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60"></div>
               </div>
               <div className="absolute -top-10 -left-10 w-40 h-40 bg-[#E91E63] rounded-full flex items-center justify-center p-8 text-white shadow-xl rotate-12">
                  <Sparkles size={40} className="animate-pulse" />
               </div>
            </div>
            <div className="md:w-1/2">
               <span className="text-[#E91E63] text-[10px] uppercase tracking-[10px] font-black block mb-8">From the Director</span>
               <h2 className="text-4xl md:text-6xl font-bold text-[#2D3134] mb-10 leading-tight">
                 "In a world of <br /> automation, <br /> <span className="italic text-[#E91E63]">Human Intent</span> <br /> is the ultimate moat."
               </h2>
               <p className="text-gray-600 text-lg font-light leading-relaxed mb-10 max-w-lg">
                 My vision for Rika Gayar Studios was simple: build digital environments where brands don't just exist—they lead. We focus on the silent authority of trust and the precise intelligence of growth.
               </p>
               <div className="flex flex-col gap-2">
                  <span className="italic font-medium text-4xl text-[#2D3134]">Dileep</span>
                  <span className="text-[10px] uppercase tracking-[5px] font-black text-gray-400">Founder & Strategic Director</span>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* BLOCK 3: SERVICES */}
      <section className="py-32 relative overflow-hidden bg-[#FFFBF0]">
        <div className="absolute inset-0 z-0 opacity-40 pointer-events-none">
          <div className="absolute top-[-10%] left-[-5%] w-[60%] h-[70%] bg-sky-200/50 rounded-full blur-[120px]"></div>
          <div className="absolute bottom-[-20%] right-[-10%] w-[70%] h-[80%] bg-rose-200/50 rounded-full blur-[140px]"></div>
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-24">
            <span className="inline-block text-[#E91E63] text-[10px] uppercase tracking-[20px] font-black mb-6">Expertise</span>
            <h2 className="text-4xl md:text-6xl font-bold text-[#2D3134]">Six Core Systems.</h2>
            <div className="w-12 h-1 bg-[#E91E63]/20 mx-auto mt-6"></div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-x-4 md:gap-x-8 gap-y-20">
            {SERVICES.map((service, index) => <MagneticServiceItem key={service.id} service={service} index={index} />)}
          </div>
        </div>
      </section>

      {/* BLOCK 4: TESTIMONIALS */}
      <section className="py-32 relative overflow-hidden border-t border-white/20 bg-[#FFF5E1]">
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-5xl mx-auto">
             <div className="flex flex-col md:flex-row items-center gap-16 md:gap-24">
                <div className="md:w-1/2">
                   <span className="text-[#E91E63] text-[9px] uppercase tracking-[10px] font-black block mb-8 drop-shadow-sm">Voices of Growth</span>
                   <div className="relative">
                      <Quote size={80} className="text-[#E91E63]/10 absolute -top-12 -left-8" />
                      <div className={`transition-all duration-700 ease-out transform ${fade ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'}`}>
                        <p className="text-2xl md:text-4xl font-bold text-[#2D3134] leading-snug italic mb-10">
                          "{TESTIMONIALS[testimonialIndex].quote}"
                        </p>
                        <div className="flex flex-col">
                           <span className="italic font-medium text-3xl text-[#E91E63] mb-1 drop-shadow-sm">{TESTIMONIALS[testimonialIndex].signature}</span>
                           <span className="text-[10px] uppercase tracking-[4px] font-black text-[#2D3134]/60">
                             {TESTIMONIALS[testimonialIndex].author} — {TESTIMONIALS[testimonialIndex].role}
                           </span>
                        </div>
                      </div>
                   </div>
                </div>
                
                <div className="md:w-1/2 flex justify-center md:justify-end items-center">
                   <button 
                     onClick={handleNextTestimonial}
                     className="w-24 h-24 md:w-32 md:h-32 rounded-full bg-white/90 backdrop-blur-md border border-white/50 flex flex-col items-center justify-center text-[#2D3134] hover:bg-[#2D3134] hover:text-white transition-all duration-500 shadow-2xl active:scale-90"
                   >
                      <ChevronRight size={24} />
                   </button>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* BLOCK 5: CTA */}
      <section className="py-32 relative overflow-hidden bg-[#F7F6F2] border-t border-gray-100">
        <div className="container mx-auto px-6 text-center max-w-2xl relative z-10">
           <div className="flex justify-center mb-10">
              <Heart size={32} fill="#E91E63" className="text-[#E91E63] animate-float" />
           </div>
           <h2 className="text-3xl md:text-5xl font-bold text-[#2D3134] mb-10 italic leading-tight">
             Ready to start your <br /> <span className="text-[#E91E63]">Authority Build?</span>
           </h2>
           <p className="text-gray-500 mb-12 max-w-md mx-auto font-light leading-relaxed">
             Our next growth cycle is opening soon. Join the brands that choose intentional infrastructure over robotic noise.
           </p>
           <Link to="/contact" className="group relative inline-flex items-center gap-4 bg-[#2D3134] text-white px-16 py-6 rounded-full text-[11px] uppercase font-black tracking-[5px] hover:bg-[#E91E63] transition-all shadow-xl hover:scale-105 active:scale-95">
             Start Evaluation <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform" />
           </Link>
           <div className="mt-20 flex flex-col items-center">
              <span className="italic font-medium text-5xl text-[#2D3134]/20">Rika Gayar</span>
           </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
