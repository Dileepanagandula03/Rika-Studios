
import React, { useEffect } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { SERVICES } from '../../constants';
import { CheckCircle2, ArrowLeft, ArrowRight } from 'lucide-react';

const ServiceDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const service = SERVICES.find(s => s.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!service) {
    return <Navigate to="/services" />;
  }

  return (
    <div className="pt-32 pb-24">
      <div className="container mx-auto px-6">
        <Link to="/services" className="inline-flex items-center gap-2 text-indigo-700 font-medium mb-12 hover:underline">
          <ArrowLeft size={18} /> Back to all services
        </Link>

        <div className="max-w-4xl">
          <h1 className="text-5xl md:text-7xl font-serif text-gray-900 mb-8">{service.title}</h1>
          <p className="text-2xl text-gray-600 leading-relaxed font-light mb-12">
            {service.fullDescription}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 mb-24">
          <div className="lg:col-span-2">
            <div className="rounded-[50px] overflow-hidden shadow-2xl mb-12">
              <img src={`https://picsum.photos/seed/${service.id}detail/1200/800`} alt={service.title} className="w-full h-auto" />
            </div>
            
            <h3 className="text-3xl font-serif mb-8">How We Implement It</h3>
            <div className="space-y-8">
              <div className="bg-white p-8 rounded-3xl border border-indigo-50 shadow-sm">
                <h4 className="text-xl font-bold mb-4">1. Strategy & Discovery</h4>
                <p className="text-gray-600">We analyze your current ecosystem and find the hidden friction points preventing your growth.</p>
              </div>
              <div className="bg-white p-8 rounded-3xl border border-indigo-50 shadow-sm">
                <h4 className="text-xl font-bold mb-4">2. Creative Execution</h4>
                <p className="text-gray-600">Our design and copy team build the assets required to communicate your value perfectly.</p>
              </div>
              <div className="bg-white p-8 rounded-3xl border border-indigo-50 shadow-sm">
                <h4 className="text-xl font-bold mb-4">3. Monitoring & Growth</h4>
                <p className="text-gray-600">We launch, track in real-time, and iterate based on performance data.</p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-1">
            <div className="sticky top-32 space-y-8">
              <div className="bg-indigo-700 text-white p-10 rounded-[40px] shadow-xl">
                <h3 className="text-2xl font-serif mb-6">Service Benefits</h3>
                <ul className="space-y-4">
                  {service.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <CheckCircle2 size={20} className="shrink-0 text-indigo-200" />
                      <span className="font-medium">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-white p-10 rounded-[40px] border border-indigo-100">
                <h3 className="text-xl font-bold mb-4">Ready to start?</h3>
                <p className="text-gray-500 mb-8">Schedule a free 30-minute growth audit with our specialists.</p>
                <Link to="/contact" className="w-full block text-center bg-gray-900 text-white py-4 rounded-2xl font-bold hover:bg-gray-800 transition-all">
                  Book a Call
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Other Services */}
        <div className="border-t border-indigo-100 pt-24">
          <h3 className="text-3xl font-serif text-gray-900 mb-12 text-center">Explore Other Systems</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {SERVICES.filter(s => s.id !== service.id).slice(0, 3).map(other => (
              <Link key={other.id} to={`/services/${other.id}`} className="group p-8 bg-white rounded-[30px] border border-indigo-50 shadow-sm hover:shadow-lg transition-all">
                <h4 className="text-xl font-bold mb-2 group-hover:text-indigo-700 transition-colors">{other.title}</h4>
                <p className="text-gray-500 text-sm mb-4 line-clamp-2">{other.description}</p>
                <div className="flex items-center gap-2 text-indigo-700 font-bold text-sm">
                  View Service <ArrowRight size={16} />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetail;
