
import React from 'react';
import { Link } from 'react-router-dom';
import { SERVICES } from '../../constants';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

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
                  <div className="w-full aspect-video bg-white rounded-[50px] shadow-xl overflow-hidden p-2">
                    <img 
                      src={`https://picsum.photos/seed/${service.id}/800/450`} 
                      alt={service.title} 
                      className="w-full h-full object-cover rounded-[40px]"
                    />
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
      </div>
    </div>
  );
};

export default ServicesOverview;
