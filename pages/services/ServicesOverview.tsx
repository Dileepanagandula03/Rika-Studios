
import React from 'react';
import { Link } from 'react-router-dom';
import { SERVICES } from '../../constants';
import { ArrowRight, CheckCircle2, Sparkles } from 'lucide-react';

const ServicesOverview: React.FC = () => {
  return (
    <div className="pt-32 pb-24">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mb-20">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-8">Scalable <span className="text-indigo-700 italic">Systems</span> for Ambitious Brands.</h1>
          <p className="text-xl text-gray-600 leading-relaxed font-light">
            We don't do "one-off" tasks. We build interconnected growth frameworks that ensure your brand is seen, trusted, and chosen.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-24">
          {SERVICES.map((service, index) => (
            <div key={service.id} className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-16 items-center`}>
              <div className="lg:w-1/2">
                <div className="relative">
                  <div className="w-full aspect-video bg-white rounded-[50px] shadow-xl overflow-hidden p-2 flex items-center justify-center">
                    <Sparkles size={64} className="text-indigo-700 opacity-10" />
                  </div>
                  <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-indigo-700 rounded-full flex items-center justify-center text-white text-4xl font-bold italic shadow-xl">
                    0{index + 1}
                  </div>
                </div>
              </div>
              <div className="lg:w-1/2">
                <h2 className="text-4xl font-bold text-gray-900 mb-6">{service.title}</h2>
                <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                  {service.fullDescription}
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
                  {service.benefits.map((benefit, bIdx) => (
                    <div key={bIdx} className="flex items-center gap-3 text-gray-700">
                      <CheckCircle2 size={20} className="text-indigo-700" />
                      <span className="font-medium">{benefit}</span>
                    </div>
                  ))}
                </div>
                <Link 
                  to={`/services/${service.id}`} 
                  className="inline-flex items-center gap-2 text-indigo-700 font-bold text-lg hover:translate-x-2 transition-transform"
                >
                  Learn more about {service.id.replace('-', ' ')} <ArrowRight size={20} />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* PRICING SECTION */}
        <div className="mt-40">
          <div className="text-center mb-20">
            <span className="text-indigo-700 text-[10px] uppercase tracking-[8px] font-black block mb-6">Investment</span>
            <h2 className="text-5xl md:text-7xl font-bold text-gray-900 tracking-tighter">Choose Your <span className="italic">Growth</span> Speed.</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Starter */}
            <div className="bg-white p-10 rounded-[40px] border border-gray-100 shadow-xl hover:shadow-2xl transition-all group">
              <h3 className="text-2xl font-bold mb-4">The Authority Build</h3>
              <p className="text-gray-500 mb-8 font-light">Perfect for founders looking to establish their digital home and voice.</p>
              <ul className="space-y-4 mb-10">
                <li className="flex items-center gap-3 text-sm text-gray-600"><CheckCircle2 size={16} className="text-indigo-700" /> Authority Website</li>
                <li className="flex items-center gap-3 text-sm text-gray-600"><CheckCircle2 size={16} className="text-indigo-700" /> Content Strategy</li>
                <li className="flex items-center gap-3 text-sm text-gray-600"><CheckCircle2 size={16} className="text-indigo-700" /> Basic AI Integration</li>
              </ul>
              <Link to="/contact" className="block text-center py-4 rounded-full bg-gray-900 text-white text-[10px] uppercase font-black tracking-[3px] group-hover:bg-indigo-700 transition-colors">Start Building</Link>
            </div>

            {/* Scale */}
            <div className="bg-indigo-700 p-10 rounded-[40px] shadow-2xl scale-105 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl -mr-16 -mt-16"></div>
              <h3 className="text-2xl font-bold mb-4 text-white">The Scale Engine</h3>
              <p className="text-indigo-100 mb-8 font-light">Our most popular system for brands ready to dominate their niche.</p>
              <ul className="space-y-4 mb-10">
                <li className="flex items-center gap-3 text-sm text-indigo-50"><CheckCircle2 size={16} className="text-white" /> Full Growth Infrastructure</li>
                <li className="flex items-center gap-3 text-sm text-indigo-50"><CheckCircle2 size={16} className="text-white" /> Advanced AI Agents</li>
                <li className="flex items-center gap-3 text-sm text-indigo-50"><CheckCircle2 size={16} className="text-white" /> Multi-Channel Lead Gen</li>
                <li className="flex items-center gap-3 text-sm text-indigo-50"><CheckCircle2 size={16} className="text-white" /> Weekly Strategy Sprints</li>
              </ul>
              <Link to="/contact" className="block text-center py-4 rounded-full bg-white text-indigo-700 text-[10px] uppercase font-black tracking-[3px] hover:bg-indigo-50 transition-colors">Apply to Scale</Link>
            </div>

            {/* Custom */}
            <div className="bg-white p-10 rounded-[40px] border border-gray-100 shadow-xl hover:shadow-2xl transition-all group">
              <h3 className="text-2xl font-bold mb-4">The Lab Partner</h3>
              <p className="text-gray-500 mb-8 font-light">Custom-engineered solutions for enterprise-level complexity.</p>
              <ul className="space-y-4 mb-10">
                <li className="flex items-center gap-3 text-sm text-gray-600"><CheckCircle2 size={16} className="text-indigo-700" /> Dedicated Growth Team</li>
                <li className="flex items-center gap-3 text-sm text-gray-600"><CheckCircle2 size={16} className="text-indigo-700" /> Custom AI Development</li>
                <li className="flex items-center gap-3 text-sm text-gray-600"><CheckCircle2 size={16} className="text-indigo-700" /> Full Tech Stack Audit</li>
              </ul>
              <Link to="/contact" className="block text-center py-4 rounded-full bg-gray-900 text-white text-[10px] uppercase font-black tracking-[3px] group-hover:bg-indigo-700 transition-colors">Inquire for Custom</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesOverview;
