
import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { 
  Zap, 
  Brain, 
  Shield, 
  Maximize, 
  User, 
  ArrowRight, 
  TrendingUp, 
  Activity,
  Layers,
  FlaskConical
} from 'lucide-react';
import { 
  AreaChart, 
  Area, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer 
} from 'recharts';

const DATA = [
  { year: '2024', robotic: 40, humanAI: 45 },
  { year: '2025', robotic: 35, humanAI: 65 },
  { year: '2026', robotic: 25, humanAI: 85 },
  { year: '2027', robotic: 15, humanAI: 110 },
  { year: '2028', robotic: 10, humanAI: 140 },
];

const About: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const rotateX = useTransform(scrollYProgress, [0, 1], [0, 10]);

  return (
    <div className="bg-[#F9F9F7] min-h-screen pt-32 pb-24 selection:bg-[#E91E63]/10 selection:text-[#E91E63]">
      <div className="container mx-auto px-6 max-w-7xl">
        
        {/* HERO SECTION */}
        <motion.section 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="mb-32 text-center"
        >
          <span className="text-[#E91E63] text-[10px] uppercase tracking-[12px] font-black block mb-8">About Us</span>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-[#2D3134] leading-[0.9] tracking-tighter mb-12">
            Rika Gayar Studios is building the future of <span className="italic text-[#E91E63]">human-led</span> digital growth.
          </h1>
          <div className="flex flex-col items-center gap-4">
            <p className="text-xl md:text-2xl text-gray-500 font-light max-w-3xl mx-auto">
              A Founder-Led Growth Infrastructure Studio blending Human Intelligence, AI Systems, and Authority Design.
            </p>
            <div className="w-px h-24 bg-gradient-to-b from-[#E91E63] to-transparent mt-8"></div>
          </div>
        </motion.section>

        {/* 3D STRUCTURE CARDS */}
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-40 perspective-[2000px]">
          {[
            { title: 'Premium', icon: <Shield size={24} />, desc: 'It keeps you premium.', color: '#E91E63' },
            { title: 'Modern', icon: <Zap size={24} />, desc: 'It keeps you modern.', color: '#2D3134' },
            { title: 'Scalable', icon: <Maximize size={24} />, desc: 'It keeps you scalable.', color: '#E91E63' },
            { title: 'Bespoke', icon: <User size={24} />, desc: 'It keeps you you.', color: '#2D3134' },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, rotateY: -20, translateZ: -100 }}
              whileInView={{ opacity: 1, rotateY: 0, translateZ: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: i * 0.1 }}
              whileHover={{ rotateX: 5, rotateY: 5, translateZ: 20 }}
              className="bg-white p-10 rounded-[40px] shadow-[0_20px_50px_rgba(0,0,0,0.03)] border border-gray-100 flex flex-col items-center text-center group cursor-default"
            >
              <div className="w-16 h-16 rounded-2xl flex items-center justify-center mb-8 transition-all duration-500 group-hover:scale-110" style={{ backgroundColor: `${item.color}10`, color: item.color }}>
                {item.icon}
              </div>
              <h3 className="text-2xl font-bold text-[#2D3134] mb-4">{item.title}</h3>
              <p className="text-gray-400 font-light uppercase text-[10px] tracking-[3px]">{item.desc}</p>
            </motion.div>
          ))}
        </section>

        {/* PHILOSOPHY SECTION */}
        <section className="mb-40">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="aspect-square bg-white rounded-[60px] overflow-hidden shadow-2xl relative z-10">
                <img 
                  src="https://images.unsplash.com/photo-1557426325-a8829ec8a9d8?auto=format&fit=crop&q=80&w=1200" 
                  alt="Philosophy" 
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000"
                />
              </div>
              <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-[#E91E63] rounded-full blur-[120px] opacity-20"></div>
            </motion.div>
            <div>
              <span className="text-[#E91E63] text-[10px] uppercase tracking-[10px] font-black block mb-8">Our Philosophy</span>
              <h2 className="text-4xl md:text-6xl font-bold text-[#2D3134] mb-8 leading-tight">
                Growth is a <span className="italic">Science</span>, <br /> Trust is an <span className="italic text-[#E91E63]">Art.</span>
              </h2>
              <div className="space-y-6 text-gray-600 font-light leading-relaxed text-lg">
                <p>
                  We believe that the most powerful growth moats are built on human connection, amplified by intelligent systems. We don't just generate leads; we engineer authority.
                </p>
                <p>
                  Our lab approach means every client ecosystem is a unique experiment in conversion, optimized through real-time feedback loops and semantic precision.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ARTICLES SECTION */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-40">
          {/* ARTICLE 1 */}
          <motion.article 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white p-12 md:p-16 rounded-[60px] shadow-sm border border-gray-100 flex flex-col"
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="w-10 h-10 rounded-full bg-red-50 flex items-center justify-center text-red-500">
                <Activity size={20} />
              </div>
              <span className="text-[10px] uppercase tracking-[5px] font-black text-gray-400">Article / Analysis</span>
            </div>
            <h3 className="text-3xl md:text-4xl font-bold text-[#2D3134] mb-8 leading-tight">
              Why Robotic Marketing <br /> <span className="text-[#E91E63]">Fails</span> in 2026.
            </h3>
            <div className="prose prose-sm text-gray-500 font-light leading-relaxed space-y-4 mb-12">
              <p>
                The era of cold, high-volume automation is dead. Buyers have developed a "robotic immunity"—a psychological filter that instantly discards generic, AI-generated noise.
              </p>
              <p>
                When every brand uses the same prompts, the only way to win is to break the pattern. Robotic marketing fails because it ignores the silent authority of trust and the nuance of human intent.
              </p>
            </div>
            <div className="mt-auto pt-8 border-t border-gray-50 flex items-center justify-between">
              <span className="text-[10px] font-black uppercase tracking-widest text-[#E91E63]">Read Full Analysis</span>
              <ArrowRight size={16} className="text-[#E91E63]" />
            </div>
          </motion.article>

          {/* ARTICLE 2 + GRAPH */}
          <motion.article 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-[#2D3134] p-12 md:p-16 rounded-[60px] shadow-2xl text-white flex flex-col"
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-[#E91E63]">
                <Brain size={20} />
              </div>
              <span className="text-[10px] uppercase tracking-[5px] font-black text-white/40">Future Projections</span>
            </div>
            <h3 className="text-3xl md:text-4xl font-bold mb-8 leading-tight">
              Emotional Intelligence + AI <br /> is the <span className="italic text-[#E91E63]">Future.</span>
            </h3>
            
            {/* DATA STORYTELLING GRAPH */}
            <div className="h-64 w-full mb-12 bg-white/5 rounded-3xl p-6 border border-white/10">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={DATA}>
                  <defs>
                    <linearGradient id="colorHuman" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#E91E63" stopOpacity={0.3}/>
                      <stop offset="95%" stopColor="#E91E63" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" vertical={false} />
                  <XAxis 
                    dataKey="year" 
                    axisLine={false} 
                    tickLine={false} 
                    tick={{ fill: 'rgba(255,255,255,0.3)', fontSize: 10 }} 
                  />
                  <YAxis hide />
                  <Tooltip 
                    contentStyle={{ backgroundColor: '#1a1a1a', border: 'none', borderRadius: '12px', fontSize: '10px' }}
                    itemStyle={{ color: '#fff' }}
                  />
                  <Area 
                    type="monotone" 
                    dataKey="humanAI" 
                    stroke="#E91E63" 
                    strokeWidth={3}
                    fillOpacity={1} 
                    fill="url(#colorHuman)" 
                    name="Human-AI Synergy"
                  />
                  <Area 
                    type="monotone" 
                    dataKey="robotic" 
                    stroke="rgba(255,255,255,0.2)" 
                    strokeWidth={2}
                    fill="transparent"
                    name="Pure Automation"
                  />
                </AreaChart>
              </ResponsiveContainer>
              <div className="flex justify-center gap-6 mt-4">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-[#E91E63]"></div>
                  <span className="text-[8px] uppercase tracking-widest text-white/40">Human-AI Synergy</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-white/20"></div>
                  <span className="text-[8px] uppercase tracking-widest text-white/40">Pure Automation</span>
                </div>
              </div>
            </div>

            <p className="text-white/60 font-light leading-relaxed text-sm">
              The future belongs to those who use AI to amplify their humanity, not replace it. Our projections show a 400% increase in conversion for brands that prioritize "High-EQ AI" interactions.
            </p>
          </motion.article>
        </section>

        {/* VISION SECTION */}
        <section className="mb-40 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-white p-20 rounded-[80px] shadow-sm border border-gray-100 relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
              <div className="absolute top-[-20%] left-[-10%] w-full h-full bg-[#E91E63] blur-[150px] rounded-full"></div>
            </div>
            
            <div className="relative z-10 max-w-4xl mx-auto">
              <div className="w-20 h-20 bg-[#E91E63]/10 rounded-3xl flex items-center justify-center text-[#E91E63] mx-auto mb-12">
                <Layers size={32} />
              </div>
              <span className="text-[#E91E63] text-[10px] uppercase tracking-[10px] font-black block mb-8">Long-Term Vision</span>
              <h2 className="text-4xl md:text-6xl font-bold text-[#2D3134] mb-12 leading-tight">
                Building a <span className="italic">Self-Evolving</span> <br /> Growth Ecosystem.
              </h2>
              <p className="text-gray-500 text-xl font-light leading-relaxed mb-12">
                Our vision is to create a network of "Growth Labs"—interconnected systems that learn from each other to provide our partners with an unfair advantage in their respective markets.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
                {[
                  { title: 'Intelligence', desc: 'Real-time market sentiment analysis.' },
                  { title: 'Authority', desc: 'Dominating the semantic landscape.' },
                  { title: 'Scale', desc: 'Predictable, sustainable expansion.' },
                ].map((v, i) => (
                  <div key={i} className="p-8 bg-[#F9F9F7] rounded-3xl border border-gray-100">
                    <h4 className="font-black text-[10px] uppercase tracking-[3px] text-[#E91E63] mb-4">{v.title}</h4>
                    <p className="text-gray-600 text-sm font-light">{v.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </section>

        {/* CLOSING SECTION */}
        <section className="text-center pb-20">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex flex-col items-center"
          >
            <div className="w-24 h-24 bg-[#2D3134] rounded-full flex items-center justify-center text-white mb-12 shadow-2xl">
              <FlaskConical size={32} />
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-[#2D3134] mb-8 leading-tight">
              You are not just a freelancer. <br /> 
              <span className="text-[#E91E63]">You are building a growth lab.</span>
            </h2>
            <div className="w-16 h-[2px] bg-[#E91E63] mb-12"></div>
            <p className="text-gray-400 text-[10px] uppercase tracking-[8px] font-black">Rika Gayar Studios © 2026</p>
          </motion.div>
        </section>

      </div>
    </div>
  );
};

export default About;
