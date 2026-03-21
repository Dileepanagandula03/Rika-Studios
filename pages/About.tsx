
import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Linkedin, Twitter, Target, Heart, Zap, Shield, Sparkles } from 'lucide-react';

const About: React.FC = () => {
  const founders = [
    {
      name: 'Rika',
      role: 'Founder',
      description: 'She leads the vision and strategy of the company, focusing on identifying opportunities and shaping the direction of the products and services we create.',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=400&h=400',
    },
    {
      name: 'Dileep Kumar',
      role: 'Co-Founder & Technology Lead',
      description: 'He leads the technology and product development side of the company, building AI-powered tools, automation systems, and scalable platforms that power our solutions.',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=400&h=400',
    }
  ];

  const values = [
    { icon: <Target className="text-[#E91E63]" />, title: 'High Intent', desc: 'We focus on actions that drive real revenue, not just vanity metrics.' },
    { icon: <Heart className="text-[#E91E63]" />, title: 'Human First', desc: 'Technology should serve people, not replace the human touch.' },
    { icon: <Zap className="text-[#E91E63]" />, title: 'Radical Speed', desc: 'We build and iterate at the speed of modern digital evolution.' },
    { icon: <Shield className="text-[#E91E63]" />, title: 'Silent Authority', desc: 'Trust is built through consistent, high-quality execution.' },
  ];

  return (
    <div className="min-h-screen bg-white pt-40 pb-32">
      <div className="container mx-auto px-6 max-w-6xl">
        
        {/* Our Story Section */}
        <section className="text-center mb-32">
          <motion.span 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-[#E91E63] text-[10px] uppercase tracking-[12px] font-black block mb-8"
          >
            Our Story
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-bold text-[#2D3134] mb-10 tracking-tighter leading-tight"
          >
            Building the <span className="italic">Infrastructure</span> <br />
            of the Human Era.
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-gray-600 text-lg leading-relaxed max-w-3xl mx-auto font-light"
          >
            Rika Studios was born from a simple observation: the digital world is becoming increasingly robotic, yet people crave human connection more than ever. We build the systems that allow brands to scale their reach while deepening their trust.
          </motion.p>
        </section>

        {/* Values Section */}
        <section className="mb-40">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-10 rounded-[40px] bg-[#F9FAFB] border border-gray-100 hover:shadow-xl transition-all group"
              >
                <div className="mb-6 transform group-hover:scale-110 transition-transform">{value.icon}</div>
                <h3 className="text-xl font-bold mb-4">{value.title}</h3>
                <p className="text-sm text-gray-500 font-light leading-relaxed">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Meet the Founders Section */}
        <section>
          <div className="text-center mb-20">
            <span className="text-[#E91E63] text-[10px] uppercase tracking-[8px] font-black block mb-6">Leadership</span>
            <h2 className="text-4xl md:text-6xl font-bold text-[#2D3134] tracking-tight">Meet the <span className="italic">Founders</span></h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {founders.map((founder, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="bg-white rounded-[50px] p-12 shadow-2xl border border-gray-50 flex flex-col items-center text-center group relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#E91E63]/5 rounded-full blur-3xl -mr-16 -mt-16 group-hover:bg-[#E91E63]/10 transition-colors"></div>
                
                <div className="w-32 h-32 rounded-full flex items-center justify-center mb-8 ring-8 ring-gray-50 group-hover:ring-[#E91E63]/10 transition-all relative z-10 bg-gray-50">
                  <Sparkles size={40} className="text-[#E91E63] opacity-20 group-hover:opacity-100 transition-opacity" />
                </div>
                <h3 className="text-2xl font-bold text-[#2D3134] mb-1 relative z-10">{founder.name}</h3>
                <p className="text-[#E91E63] font-black text-[10px] uppercase tracking-[4px] mb-8 relative z-10">{founder.role}</p>
                <p className="text-gray-600 text-base leading-relaxed font-light mb-10 relative z-10">
                  {founder.description}
                </p>
                
                <div className="flex gap-6 relative z-10">
                  <a href="#" className="text-gray-400 hover:text-[#E91E63] transition-colors">
                    <Linkedin size={20} />
                  </a>
                  <a href="#" className="text-gray-400 hover:text-[#E91E63] transition-colors">
                    <Twitter size={20} />
                  </a>
                  <a href="#" className="text-gray-400 hover:text-[#E91E63] transition-colors">
                    <Mail size={20} />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

      </div>
    </div>
  );
};

export default About;
