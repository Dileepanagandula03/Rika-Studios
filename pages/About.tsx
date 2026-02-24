
import React from 'react';
import { motion } from 'framer-motion';
import { 
  Zap, 
  Brain, 
  Shield, 
  Maximize, 
  User, 
  ArrowRight, 
  Activity,
  Layers,
  FlaskConical,
  Sparkles,
  Heart
} from 'lucide-react';
import { 
  AreaChart, 
  Area, 
  XAxis, 
  YAxis, 
  Tooltip, 
  ResponsiveContainer 
} from 'recharts';

const DATA = [
  { year: '24', robotic: 40, humanAI: 45 },
  { year: '25', robotic: 35, humanAI: 65 },
  { year: '26', robotic: 25, humanAI: 95 },
  { year: '27', robotic: 15, humanAI: 120 },
  { year: '28', robotic: 10, humanAI: 150 },
];

const About: React.FC = () => {
  return (
    <div className="relative min-h-screen pt-40 pb-32 overflow-hidden bg-[#FFFBF0]">
      {/* VIBRANT GOLDEN GEOMETRIC BACKGROUND */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-[#FFFBF0] via-[#FFF8E1] to-[#FFF0F5]"></div>
        <div className="absolute top-[10%] left-[-5%] w-[300px] h-[300px] border-[12px] border-white rounded-full shadow-2xl opacity-60 animate-float" style={{ animationDuration: '10s' }}></div>
        <div className="absolute bottom-[20%] left-[10%] w-[400px] h-[400px] border-[15px] border-white rounded-full shadow-inner opacity-30"></div>
        <div className="absolute top-[5%] right-[5%] w-[250px] h-[250px] border-[10px] border-white rounded-full shadow-2xl opacity-50 animate-float" style={{ animationDuration: '12s', animationDelay: '1s' }}></div>
        
        {/* Colorful Blobs with Gold */}
        <div className="absolute top-[20%] right-[10%] w-96 h-96 bg-[#F3CF5F]/20 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-[10%] left-[5%] w-80 h-80 bg-[#E91E63]/10 rounded-full blur-[80px]"></div>
        <div className="absolute top-[40%] left-[30%] w-64 h-64 bg-[#F3CF5F]/15 rounded-full blur-[120px]"></div>

        {/* Abstract Images */}
        <div className="absolute top-[15%] left-[5%] w-64 h-64 opacity-60 blur-[1px] transform -rotate-12">
          <img src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=800" alt="Studio Accent" className="w-full h-full object-cover rounded-full shadow-2xl" />
        </div>
        <div className="absolute bottom-[10%] right-[5%] w-80 h-80 opacity-40 blur-[2px] transform rotate-45">
           <img src="https://images.unsplash.com/photo-1557426325-a8829ec8a9d8?auto=format&fit=crop&q=80&w=800" alt="Lab Accent" className="w-full h-full object-cover rounded-full" />
        </div>
      </div>

      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        <div className="flex flex-col lg:flex-row items-stretch gap-8 lg:gap-12">
          
          {/* Left Column: Context Card */}
          <div className="lg:w-1/3 bg-white/40 backdrop-blur-2xl rounded-[50px] p-10 md:p-12 border border-white/60 shadow-xl flex flex-col group">
            <div className="mb-8">
               <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-[#2D3134] mb-8 shadow-xl border border-gray-50 group-hover:scale-110 transition-transform duration-500">
                 <FlaskConical size={28} className="text-[#F3CF5F]" />
               </div>
               <span className="text-[#F3CF5F] text-[9px] uppercase tracking-[6px] font-black mb-4 block">About Us</span>
               <h1 className="text-3xl md:text-4xl font-bold text-[#2D3134] leading-[1.2] mb-6">
                 “Rika Gayar Studios is building the future of <span className="italic text-[#F3CF5F]">human-led</span> digital growth.”
               </h1>
               <p className="text-gray-500 text-sm font-light leading-relaxed mb-8">
                 A Founder-Led Growth Infrastructure Studio blending Human Intelligence, AI Systems, and Authority Design.
               </p>
            </div>
            
            <div className="space-y-4 mt-auto pt-8 border-t border-gray-100">
              {[
                { text: 'It keeps you premium.', icon: <Shield size={14} /> },
                { text: 'It keeps you modern.', icon: <Zap size={14} /> },
                { text: 'It keeps you scalable.', icon: <Maximize size={14} /> },
                { text: 'It keeps you you.', icon: <User size={14} /> },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-lg bg-[#F3CF5F]/10 flex items-center justify-center text-[#F3CF5F]">
                    {item.icon}
                  </div>
                  <span className="text-[10px] uppercase tracking-[2px] font-black text-gray-400">{item.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Content Blocks */}
          <div className="lg:w-2/3 bg-white/90 backdrop-blur-md rounded-[50px] p-10 md:p-16 shadow-2xl border border-white overflow-hidden relative">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#F3CF5F]/10 rounded-full blur-3xl -mr-32 -mt-32"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#E91E63]/5 rounded-full blur-3xl -ml-32 -mb-32"></div>
            
            <div className="relative z-10 space-y-16">
              
              {/* Philosophy */}
              <section>
                <div className="flex items-center gap-3 mb-6">
                  <Sparkles size={16} className="text-[#F3CF5F]" />
                  <h3 className="text-[10px] uppercase tracking-[6px] font-black text-gray-400">Our Philosophy</h3>
                </div>
                <p className="text-gray-600 text-sm font-light leading-relaxed">
                  We believe that the most powerful growth moats are built on human connection, amplified by intelligent systems. We don't just generate leads; we engineer authority. Our lab approach means every client ecosystem is a unique experiment in conversion.
                </p>
              </section>

              {/* Robotic Marketing Article */}
              <section className="p-8 bg-gradient-to-br from-[#FFF8E1] to-[#FFFBF0] rounded-3xl border border-[#F3CF5F]/20 shadow-sm">
                <h4 className="text-lg font-bold text-[#2D3134] mb-4 flex items-center gap-3">
                  <Activity size={18} className="text-[#F3CF5F]" />
                  Why Robotic Marketing Fails
                </h4>
                <p className="text-gray-500 text-xs font-light leading-relaxed">
                  The era of cold, high-volume automation is dead. Buyers have developed a "robotic immunity"—a psychological filter that instantly discards generic, AI-generated noise. When every brand uses the same prompts, the only way to win is to break the pattern.
                </p>
              </section>

              {/* Future Projections */}
              <section>
                <div className="flex flex-col md:flex-row gap-8 items-center">
                  <div className="md:w-1/2">
                    <h4 className="text-lg font-bold text-[#2D3134] mb-4 flex items-center gap-3">
                      <Brain size={18} className="text-[#F3CF5F]" />
                      EQ + AI is the Future
                    </h4>
                    <p className="text-gray-500 text-xs font-light leading-relaxed">
                      The future belongs to those who use AI to amplify their humanity, not replace it. Projections show a 400% increase in conversion for brands that prioritize "High-EQ AI" interactions.
                    </p>
                  </div>
                  <div className="md:w-1/2 w-full h-32 bg-white rounded-2xl p-4 border border-[#F3CF5F]/10 shadow-md">
                    <ResponsiveContainer width="100%" height="100%">
                      <AreaChart data={DATA}>
                        <defs>
                          <linearGradient id="colorSynergy" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#F3CF5F" stopOpacity={0.4}/>
                            <stop offset="95%" stopColor="#F3CF5F" stopOpacity={0}/>
                          </linearGradient>
                        </defs>
                        <XAxis dataKey="year" hide />
                        <YAxis hide />
                        <Area 
                          type="monotone" 
                          dataKey="humanAI" 
                          stroke="#F3CF5F" 
                          strokeWidth={2}
                          fillOpacity={1} 
                          fill="url(#colorSynergy)" 
                        />
                      </AreaChart>
                    </ResponsiveContainer>
                  </div>
                </div>
              </section>

              {/* Ecosystem Vision */}
              <section>
                <div className="flex items-center gap-3 mb-6">
                  <Layers size={16} className="text-[#F3CF5F]" />
                  <h3 className="text-[10px] uppercase tracking-[6px] font-black text-gray-400">Long-Term Vision</h3>
                </div>
                <p className="text-gray-600 text-sm font-light leading-relaxed">
                  Our vision is to create a network of "Growth Labs"—interconnected systems that learn from each other to provide our partners with an unfair advantage in their respective markets.
                </p>
              </section>

              {/* Closing */}
              <div className="pt-12 border-t border-gray-100 text-center">
                <h2 className="text-xl md:text-2xl font-bold text-[#2D3134] mb-4">
                  You are not just a freelancer. <br /> 
                  <span className="text-[#F3CF5F]">You are building a growth lab.</span>
                </h2>
                <div className="flex justify-center gap-2">
                  <Heart size={12} fill="#F3CF5F" className="text-[#F3CF5F]" />
                  <Heart size={12} fill="#F3CF5F" className="text-[#F3CF5F]" />
                  <Heart size={12} fill="#F3CF5F" className="text-[#F3CF5F]" />
                </div>
              </div>

            </div>
          </div>
          
        </div>
        
        <div className="mt-24 text-center">
           <span className="italic font-medium text-4xl text-gray-900/10">Growth Lab Ecosystem</span>
        </div>
      </div>
    </div>
  );
};

export default About;
