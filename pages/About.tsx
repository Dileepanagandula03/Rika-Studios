
import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Linkedin, Twitter } from 'lucide-react';

const About: React.FC = () => {
  const founders = [
    {
      name: 'Rika Gayar',
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

  return (
    <div className="min-h-screen bg-[#F7F9FC] pt-32 pb-24">
      <div className="container mx-auto px-6 max-w-6xl">
        
        {/* Our Story Section */}
        <section className="text-center mb-24">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-[36px] font-bold text-[#2D3134] mb-6 tracking-tight"
          >
            Our Story
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-gray-500 text-[14px] leading-relaxed max-w-2xl mx-auto font-light"
          >
            We build simple automation tools that help businesses and professionals work faster using AI and modern technology. Our focus is to create practical products that solve real-world problems in areas like communication, automation, and productivity.
          </motion.p>
        </section>

        {/* Meet the Founders Section */}
        <section>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[20px] font-bold text-[#2D3134] text-center mb-16 tracking-tight"
          >
            Meet the Founders
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-4xl mx-auto">
            {founders.map((founder, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                whileHover={{ y: -5 }}
                className="bg-white rounded-3xl p-8 shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 flex flex-col items-center text-center group"
              >
                <div className="w-24 h-24 rounded-full overflow-hidden mb-6 ring-4 ring-gray-50 group-hover:ring-[#F3CF5F]/20 transition-all">
                  <img 
                    src={founder.image} 
                    alt={founder.name} 
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <h3 className="text-[18px] font-bold text-[#2D3134] mb-1">{founder.name}</h3>
                <p className="text-[#F3CF5F] font-bold text-[11px] uppercase tracking-[2px] mb-6">{founder.role}</p>
                <p className="text-gray-500 text-[14px] leading-relaxed font-light mb-8">
                  {founder.description}
                </p>
                
                <div className="flex gap-4 mt-auto">
                  <a href="#" className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-gray-400 hover:bg-[#F3CF5F] hover:text-white transition-all">
                    <Linkedin size={18} />
                  </a>
                  <a href="#" className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-gray-400 hover:bg-[#F3CF5F] hover:text-white transition-all">
                    <Twitter size={18} />
                  </a>
                  <a href="#" className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-gray-400 hover:bg-[#F3CF5F] hover:text-white transition-all">
                    <Mail size={18} />
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
