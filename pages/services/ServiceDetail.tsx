
import React, { useEffect } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { SERVICES } from '../../constants';
import { CheckCircle2, ArrowLeft, ArrowRight, Sparkles } from 'lucide-react';
import LeadGenSection from '../../components/LeadGenSection';

const ServiceDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const service = SERVICES.find(s => s.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!service) {
    return <Navigate to="/services" />;
  }

  if (service.id === 'lead-generation') {
    return <LeadGenSection />;
  }

  return (
    <div className="pt-40 pb-32 bg-[#FFFBF0] min-h-screen">
      <div className="container mx-auto px-6 max-w-4xl">
        <Link to="/services" className="inline-flex items-center gap-2 text-gray-500 hover:text-[#F3CF5F] transition-colors text-sm font-medium mb-12">
          <ArrowLeft size={16} /> Back to all systems
        </Link>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-[50px] p-12 md:p-20 shadow-2xl border border-white relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#F3CF5F]/10 rounded-full blur-3xl -mr-32 -mt-32"></div>
          
          <div className="relative z-10">
            <span className="text-[#F3CF5F] text-[10px] uppercase tracking-[8px] font-black block mb-6">Service Detail</span>
            <h1 className="text-4xl md:text-6xl font-bold text-[#2D3134] mb-8 tracking-tight">{service.title}</h1>
            <p className="text-xl text-gray-600 font-light leading-relaxed mb-12">
              {service.fullDescription}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
              {service.benefits.map((benefit, i) => (
                <div key={i} className="flex items-center gap-4 p-6 bg-[#FFFBF0] rounded-3xl border border-[#F3CF5F]/10">
                  <CheckCircle2 size={24} className="text-[#F3CF5F]" />
                  <span className="text-gray-700 font-medium">{benefit}</span>
                </div>
              ))}
            </div>

            <div className="pt-12 border-t border-gray-100 flex flex-col md:flex-row items-center justify-between gap-8">
              <p className="text-gray-500 font-light italic">Ready to scale your infrastructure?</p>
              <Link 
                to="/contact" 
                className="bg-[#F3CF5F] text-[#2D3134] px-10 py-5 rounded-full text-[11px] uppercase font-black tracking-[4px] shadow-xl hover:scale-105 transition-all duration-500"
              >
                Start Your Lab
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ServiceDetail;
