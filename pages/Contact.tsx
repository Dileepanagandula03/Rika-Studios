
import React from 'react';
import { Mail, Phone, Instagram, Linkedin, Sparkles, Send, Heart } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <div className="relative min-h-screen pt-40 pb-32 overflow-hidden bg-[#F9F9F9]">
      {/* FLORAL GEOMETRIC BACKGROUND - Reverted to previous version keeping visuals */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-white via-[#FFF5F8] to-[#F3F4F6]"></div>
        <div className="absolute top-[10%] left-[-5%] w-[300px] h-[300px] border-[12px] border-white rounded-full shadow-2xl opacity-60 animate-float" style={{ animationDuration: '10s' }}></div>
        <div className="absolute top-[40%] left-[20%] w-[150px] h-[150px] border-[8px] border-white rounded-full shadow-xl opacity-40 animate-float" style={{ animationDuration: '14s', animationDelay: '2s' }}></div>
        <div className="absolute bottom-[20%] left-[10%] w-[400px] h-[400px] border-[15px] border-white rounded-full shadow-inner opacity-30"></div>
        <div className="absolute top-[5%] right-[5%] w-[250px] h-[250px] border-[10px] border-white rounded-full shadow-2xl opacity-50 animate-float" style={{ animationDuration: '12s', animationDelay: '1s' }}></div>
        <div className="absolute bottom-[-10%] right-[15%] w-[350px] h-[350px] border-[20px] border-white rounded-full shadow-2xl opacity-40"></div>

        <div className="absolute top-[15%] left-[5%] w-64 h-64 opacity-60 blur-[1px] transform -rotate-12">
          <img src="https://images.unsplash.com/photo-1562690868-60bbe7293e94?auto=format&fit=crop&q=80&w=800" alt="Rose Accent" className="w-full h-full object-contain rounded-full shadow-2xl" />
        </div>
        <div className="absolute bottom-[10%] right-[5%] w-80 h-80 opacity-40 blur-[2px] transform rotate-45">
           <img src="https://images.unsplash.com/photo-1559563458-527698bf5295?auto=format&fit=crop&q=80&w=800" alt="Rose Accent" className="w-full h-full object-contain rounded-full" />
        </div>
      </div>

      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        <div className="flex flex-col lg:flex-row items-stretch gap-8 lg:gap-12">
          
          {/* Left Column: Context Card */}
          <div className="lg:w-1/3 bg-white/40 backdrop-blur-2xl rounded-[50px] p-10 md:p-12 border border-white/60 shadow-xl flex flex-col group">
            <div className="mb-8">
               <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-[#E91E63] mb-8 shadow-xl border border-rose-50 group-hover:scale-110 transition-transform duration-500">
                 <Heart size={28} fill="#E91E63" />
               </div>
               <h1 className="text-4xl md:text-5xl font-serif text-[#2D3134] leading-[1.1] mb-6">
                 Cultivating <span className="italic text-[#E91E63]">Growth</span> <br /> with Intent.
               </h1>
               <p className="text-gray-500 font-light leading-relaxed">
                 Like a garden, growth requires a high-trust environment. Let's design yours today.
               </p>
            </div>
            
            <div className="space-y-8 mt-auto pt-8 border-t border-gray-100">
              <div className="group/item cursor-pointer">
                <p className="text-[9px] uppercase tracking-[4px] text-[#E91E63] font-black mb-2">Electronic Mail</p>
                <a href="mailto:hello@rikagayar.studios" className="text-[#2D3134] text-sm font-medium hover:text-[#E91E63] transition-colors">hello@rikagayar.studios</a>
              </div>
              <div className="flex gap-6 pt-4">
                <a href="#" className="w-10 h-10 rounded-full bg-white border border-gray-100 flex items-center justify-center text-gray-400 hover:text-[#E91E63] transition-all">
                  <Instagram size={18} />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-white border border-gray-100 flex items-center justify-center text-gray-400 hover:text-[#E91E63] transition-all">
                  <Linkedin size={18} />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Clean Form */}
          <div className="lg:w-2/3 bg-white/80 backdrop-blur-md rounded-[50px] p-10 md:p-16 shadow-2xl border border-white">
            <div className="mb-10">
               <span className="text-[#E91E63] text-[10px] uppercase tracking-[10px] font-black mb-2 block">Connect</span>
               <h2 className="text-3xl font-serif text-gray-900">Start the Bloom.</h2>
            </div>
            
            <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="text-[9px] uppercase tracking-[3px] text-gray-400 font-black ml-1">Full Name</label>
                  <input 
                    type="text" 
                    placeholder="Julian Thorne"
                    className="w-full bg-white border border-gray-100 rounded-2xl px-6 py-4 text-gray-800 placeholder-gray-300 focus:ring-4 focus:ring-[#E91E63]/5 focus:border-[#E91E63]/20 outline-none transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[9px] uppercase tracking-[3px] text-gray-400 font-black ml-1">Business Name</label>
                  <input 
                    type="text" 
                    placeholder="Lumina Co."
                    className="w-full bg-white border border-gray-100 rounded-2xl px-6 py-4 text-gray-800 placeholder-gray-300 focus:ring-4 focus:ring-[#E91E63]/5 focus:border-[#E91E63]/20 outline-none transition-all"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[9px] uppercase tracking-[3px] text-gray-400 font-black ml-1">Email Address</label>
                <input 
                  type="email" 
                  placeholder="name@company.com"
                  className="w-full bg-white border border-gray-100 rounded-2xl px-6 py-4 text-gray-800 placeholder-gray-300 focus:ring-4 focus:ring-[#E91E63]/5 focus:border-[#E91E63]/20 outline-none transition-all"
                />
              </div>

              <div className="space-y-2">
                <label className="text-[9px] uppercase tracking-[3px] text-gray-400 font-black ml-1">Your Vision</label>
                <textarea 
                  rows={4} 
                  placeholder="Tell us about the systems you're dreaming of..."
                  className="w-full bg-white border border-gray-100 rounded-2xl px-6 py-4 text-gray-800 placeholder-gray-300 focus:ring-4 focus:ring-[#E91E63]/5 focus:border-[#E91E63]/20 outline-none transition-all resize-none"
                ></textarea>
              </div>

              <div className="flex items-center justify-between pt-4">
                <div className="hidden sm:flex items-center gap-2 text-gray-400">
                   <Sparkles size={14} className="text-[#E91E63]" />
                   <p className="text-[9px] font-medium italic">High-trust priority responses within 12h.</p>
                </div>
                <button 
                  type="submit" 
                  className="group relative flex items-center gap-3 bg-[#2D3134] text-white px-12 py-5 rounded-full text-[10px] uppercase font-black tracking-[4px] hover:bg-[#E91E63] transition-all shadow-xl hover:scale-105 active:scale-95"
                >
                  Initiate Growth <Send size={14} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </button>
              </div>
            </form>
          </div>
          
        </div>
        
        <div className="mt-24 text-center">
           <span className="font-signature text-4xl text-gray-900/10">Bespoke By Rika</span>
        </div>
      </div>
    </div>
  );
};

export default Contact;
