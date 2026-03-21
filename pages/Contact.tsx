import React, { useState, useEffect } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Linkedin, Twitter, Send as Telegram, CheckCircle2, AlertCircle, Globe, Zap, Cpu } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    countryCode: '+1',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  // Mouse tracking for interactive visuals
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth mouse movement
  const smoothX = useSpring(mouseX, { stiffness: 50, damping: 20 });
  const smoothY = useSpring(mouseY, { stiffness: 50, damping: 20 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  const countryCodes = [
    { code: '+1', country: 'USA/Canada' },
    { code: '+44', country: 'UK' },
    { code: '+91', country: 'India' },
    { code: '+61', country: 'Australia' },
    { code: '+49', country: 'Germany' },
    { code: '+33', country: 'France' },
    { code: '+81', country: 'Japan' },
    { code: '+86', country: 'China' },
    { code: '+971', country: 'UAE' },
    { code: '+65', country: 'Singapore' },
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMessage('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          phone: `${formData.countryCode} ${formData.phone}`
        }),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', phone: '', countryCode: '+1', message: '' });
      } else {
        setStatus('error');
        setErrorMessage(data.error?.message || 'Failed to send message. Please try again.');
      }
    } catch (error) {
      setStatus('error');
      setErrorMessage('A network error occurred. Please check your connection.');
    }
  };

  return (
    <div className="min-h-screen relative overflow-hidden pt-44 pb-8 bg-[#FFF5F7]">
      
      {/* Background Large Text (Editorial) */}
      <div className="absolute inset-0 flex items-center justify-center z-0 select-none pointer-events-none">
        <motion.h1 
          style={{ 
            x: useSpring(mouseX, { stiffness: 30, damping: 20 }), 
            y: useSpring(mouseY, { stiffness: 30, damping: 20 }),
            translateX: '-50%',
            translateY: '-50%'
          }}
          className="absolute top-1/2 left-1/2 text-[35vw] font-black text-pink-200 leading-none tracking-tighter opacity-40"
        >
          rika
        </motion.h1>
      </div>
      
      {/* --- ADVANCED VISUAL BACKGROUND LAYER --- */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        
        {/* 1. Perspective Grid */}
        <div 
          className="absolute inset-0 opacity-[0.05]" 
          style={{ 
            backgroundImage: `linear-gradient(#E91E63 1px, transparent 1px), linear-gradient(90deg, #E91E63 1px, transparent 1px)`,
            backgroundSize: '60px 60px',
            transform: 'perspective(1000px) rotateX(60deg) translateY(-100px) scale(2)',
            transformOrigin: 'top'
          }}
        ></div>

        {/* 2. Interactive Mouse Glow */}
        <motion.div
          style={{
            left: smoothX,
            top: smoothY,
            x: '-50%',
            y: '-50%',
          }}
          className="absolute w-[600px] h-[600px] bg-pink-500/10 rounded-full blur-[120px] z-0"
        />

        {/* 3. Scanning Laser Line */}
        <motion.div
          animate={{ top: ['-10%', '110%'] }}
          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
          className="absolute left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-pink-500/30 to-transparent z-10"
        />

        {/* 4. Floating Tech Particles */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ 
              x: Math.random() * 100 + '%', 
              y: Math.random() * 100 + '%',
              opacity: Math.random() * 0.5
            }}
            animate={{ 
              y: [null, Math.random() * -100 - 50 + 'px'],
              opacity: [0, 0.5, 0]
            }}
            transition={{ 
              duration: Math.random() * 5 + 5, 
              repeat: Infinity, 
              ease: "linear",
              delay: Math.random() * 5
            }}
            className="absolute w-1 h-1 bg-pink-400 rounded-full"
          />
        ))}

        {/* 5. Large Atmospheric Orbs */}
        <motion.div 
          animate={{ 
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
            x: [0, 50, 0]
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-20 -left-20 w-[800px] h-[800px] rounded-full blur-[180px] opacity-10 bg-pink-600"
        ></motion.div>
        <motion.div 
          animate={{ 
            scale: [1, 1.3, 1],
            rotate: [0, -90, 0],
            x: [0, -50, 0]
          }}
          transition={{ duration: 30, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -bottom-40 -right-40 w-[900px] h-[900px] rounded-full blur-[200px] opacity-10 bg-pink-500"
        ></motion.div>
      </div>

      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        
        {/* Hero Section with Visual Motion */}
        <div className="text-center mb-10">
          
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-[42px] md:text-[64px] font-bold text-[#1A1A1A] mb-2 tracking-tighter leading-[0.9] flex flex-col items-center"
          >
            <span className="relative">
              Let's Build
              <motion.div 
                initial={{ width: 0 }}
                animate={{ width: '100%' }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="absolute -bottom-2 left-0 h-1 bg-pink-600/20"
              />
            </span>
            <span className="italic font-serif text-[#E91E63] mt-2">The Future</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-gray-500 text-base font-light max-w-2xl mx-auto leading-relaxed"
          >
            Our systems are ready to scale your vision. Reach out through any channel below to initiate the growth protocol.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          
          {/* Left Column: Contact Info Cards (Modern Glass) */}
          <div className="lg:col-span-5 space-y-3">
            {[
              { icon: <Mail />, label: 'Mail', value: 'rikagarstudios@gmail.com', href: 'mailto:rikagarstudios@gmail.com' },
              { icon: <Phone />, label: 'Voice', value: '+1 618-448-1540', href: 'tel:+16184481540' },
              { icon: <MapPin />, label: 'Current', value: 'Maryland, USA', href: null }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 * i }}
                whileHover={{ x: 8, y: -2 }}
                className="group relative p-[1px] rounded-[24px] overflow-hidden"
              >
                {/* Animated Border Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-r from-transparent via-pink-400/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out`}></div>
                
                <div className="relative p-4 rounded-[23px] bg-white/40 backdrop-blur-xl border border-white/60 shadow-[0_4px_24px_rgba(0,0,0,0.03)] overflow-hidden h-full">
                  {/* Background Glow */}
                  <div className={`absolute top-0 right-0 w-32 h-32 bg-pink-500/5 rounded-full blur-2xl -mr-16 -mt-16 transition-all group-hover:bg-pink-500/10`}></div>
                  
                  {/* Rotating Rings (Tech Effect) */}
                  <div className="absolute top-1/2 left-6 -translate-y-1/2 w-16 h-16 pointer-events-none">
                    <motion.div 
                      animate={{ rotate: 360 }}
                      transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                      className="absolute inset-0 border border-pink-500/10 rounded-full"
                    />
                    <motion.div 
                      animate={{ rotate: -360 }}
                      transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                      className="absolute inset-2 border border-dashed border-pink-500/20 rounded-full"
                    />
                    {/* Orbiting Node */}
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                      className="absolute inset-0"
                    >
                      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1 h-1 bg-pink-500 rounded-full shadow-[0_0_8px_#E91E63]" />
                    </motion.div>
                  </div>

                  <div className="flex items-center gap-6 relative z-10">
                    <div className="relative">
                      <div className={`absolute inset-0 bg-pink-500 blur-md opacity-0 group-hover:opacity-20 transition-opacity`}></div>
                      <div className={`w-10 h-10 rounded-xl flex items-center justify-center bg-white shadow-md text-gray-400 group-hover:text-[#E91E63] transition-all duration-500`}>
                        {React.cloneElement(item.icon as React.ReactElement, { size: 20 })}
                      </div>
                    </div>
                    <div>
                      <p className="text-[7px] font-black uppercase tracking-[4px] text-gray-400 mb-0.5">{item.label}</p>
                      {item.href ? (
                        <a href={item.href} className="text-sm font-bold text-[#1A1A1A] hover:text-[#E91E63] transition-colors tracking-tight">
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-sm font-bold text-[#1A1A1A] tracking-tight">{item.value}</p>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Right Column: Interactive Form (Refined & Compact) */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="lg:col-span-7 relative"
          >
            {/* Multi-layered Glass Container (Reduced Padding) */}
            <div className="relative p-[1px] rounded-[32px] bg-gradient-to-br from-pink-50/80 via-pink-50/40 to-pink-50/10 shadow-xl overflow-hidden">
              <div className="absolute inset-0 bg-pink-50/40 backdrop-blur-2xl"></div>
              
              <div className="relative bg-white/30 rounded-[31px] p-5 md:p-8 overflow-hidden">
                
                {/* Decorative Corner Accents */}
                <div className="absolute top-0 left-0 w-12 h-12 border-t-2 border-l-2 border-pink-500/20 rounded-tl-[31px]"></div>
                <div className="absolute bottom-0 right-0 w-12 h-12 border-b-2 border-r-2 border-pink-500/20 rounded-br-[31px]"></div>

                {/* Form Scanning Effect */}
                <motion.div 
                  animate={{ top: ['-20%', '120%'] }}
                  transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
                  className="absolute left-0 right-0 h-[100px] bg-gradient-to-b from-transparent via-pink-500/[0.02] to-transparent pointer-events-none"
                />

                {/* Floating Tech Elements for Form */}
                <div className="absolute top-10 right-10 w-32 h-32 pointer-events-none opacity-20">
                  <motion.div 
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    className="absolute inset-0 border border-pink-500/30 rounded-full"
                  />
                  <motion.div 
                    animate={{ rotate: -360 }}
                    transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                    className="absolute inset-4 border border-dashed border-pink-500/40 rounded-full"
                  />
                </div>

                {status === 'loading' && (
                  <div className="absolute inset-0 z-50 bg-white/60 backdrop-blur-md flex flex-col items-center justify-center">
                    <div className="relative">
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                        className="w-16 h-16 border-[2px] border-pink-600/10 border-t-pink-600 rounded-full"
                      />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <Cpu className="text-pink-600 animate-pulse" size={24} />
                      </div>
                    </div>
                    <p className="mt-8 text-[9px] font-black uppercase tracking-[6px] text-pink-600 animate-pulse">Syncing Data</p>
                  </div>
                )}

                {status === 'success' ? (
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-6"
                  >
                    <div className="relative inline-block mb-6">
                      <motion.div 
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        className="w-20 h-20 rounded-full bg-emerald-500 flex items-center justify-center text-white shadow-[0_0_40px_rgba(16,185,129,0.3)] relative z-10"
                      >
                        <CheckCircle2 size={40} />
                      </motion.div>
                    </div>
                    <h3 className="text-xl font-bold text-[#1A1A1A] mb-2 tracking-tight">Transmission Success</h3>
                    <p className="text-gray-500 text-sm mb-8 max-w-xs mx-auto leading-relaxed">Your data packet has been successfully integrated. We'll be in touch shortly.</p>
                    <button 
                      onClick={() => setStatus('idle')}
                      className="px-8 py-3 rounded-xl bg-[#1A1A1A] text-white font-black uppercase tracking-[3px] text-[9px] hover:bg-pink-600 transition-all shadow-lg"
                    >
                      New Transmission
                    </button>
                  </motion.div>
                ) : (
                  <form className="space-y-5 relative z-10" onSubmit={handleSubmit}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      <div className="space-y-1 group">
                        <label className="text-[7px] font-black uppercase tracking-[4px] text-gray-600 ml-1 group-focus-within:text-pink-500 transition-colors">Identity</label>
                        <div className="relative">
                          <input 
                            required
                            type="text" 
                            placeholder="Enter your name"
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            className="w-full bg-transparent border-b border-gray-300 rounded-none px-1 py-1.5 text-[#1A1A1A] text-sm placeholder-gray-400 focus:border-pink-500 transition-all outline-none"
                          />
                        </div>
                      </div>
                      <div className="space-y-1 group">
                        <label className="text-[7px] font-black uppercase tracking-[4px] text-gray-600 ml-1 group-focus-within:text-pink-500 transition-colors">Email Address</label>
                        <div className="relative">
                          <input 
                            required
                            type="email" 
                            placeholder="Enter your email"
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            className="w-full bg-transparent border-b border-gray-300 rounded-none px-1 py-1.5 text-[#1A1A1A] text-sm placeholder-gray-400 focus:border-pink-500 transition-all outline-none"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="space-y-1 group">
                      <label className="text-[7px] font-black uppercase tracking-[4px] text-gray-600 ml-1 group-focus-within:text-pink-500 transition-colors">Voice</label>
                      <div className="flex gap-4">
                        <div className="relative">
                          <select 
                            value={formData.countryCode}
                            onChange={(e) => setFormData({ ...formData, countryCode: e.target.value })}
                            className="bg-transparent border-b border-gray-300 rounded-none px-1 py-1.5 text-[#1A1A1A] text-sm focus:border-pink-500 transition-all outline-none appearance-none cursor-pointer min-w-[50px]"
                          >
                            {countryCodes.map((c) => (
                              <option key={c.code} value={c.code}>{c.code}</option>
                            ))}
                          </select>
                        </div>
                        <input 
                          required
                          type="tel" 
                          placeholder="Enter phone number"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className="flex-1 bg-transparent border-b border-gray-300 rounded-none px-1 py-1.5 text-[#1A1A1A] text-sm placeholder-gray-400 focus:border-pink-500 transition-all outline-none"
                        />
                      </div>
                    </div>

                    <div className="space-y-1 group">
                      <label className="text-[7px] font-black uppercase tracking-[4px] text-gray-600 ml-1 group-focus-within:text-pink-500 transition-colors">Say Something</label>
                      <textarea 
                        required
                        rows={2} 
                        placeholder="Describe your vision..."
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="w-full bg-transparent border-b border-gray-300 rounded-none px-1 py-1.5 text-[#1A1A1A] text-sm placeholder-gray-400 focus:border-pink-500 transition-all outline-none resize-none"
                      ></textarea>
                    </div>

                    {status === 'error' && (
                      <motion.div 
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="p-2 rounded-xl bg-red-50 border border-red-100 text-red-600 text-[9px] font-medium flex items-center gap-2"
                      >
                        <AlertCircle size={12} />
                        {errorMessage}
                      </motion.div>
                    )}

                    <div className="flex justify-center pt-2">
                      <motion.button 
                        whileHover={{ scale: 1.05, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                        disabled={status === 'loading'}
                        type="submit" 
                        className="w-full max-w-[240px] bg-pink-600 text-white py-3 rounded-[18px] text-[9px] font-black uppercase tracking-[6px] shadow-[0_8px_24px_rgba(233,30,99,0.25)] flex items-center justify-center gap-4 group overflow-hidden relative"
                      >
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                        <span className="relative z-10">Initiate Connection</span>
                        <Send size={16} className="relative z-10 group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform" />
                      </motion.button>
                    </div>
                  </form>
                )}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Neural Presence / Social Section */}
        <div className="mt-12 text-center">
          <motion.h4 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-[9px] font-black uppercase tracking-[10px] text-gray-300 mb-6"
          >
            Connect Globally
          </motion.h4>
          <div className="flex justify-center gap-6">
            {[
              { icon: <Linkedin />, label: 'LinkedIn' },
              { icon: <Twitter />, label: 'Twitter' },
              { icon: <Telegram />, label: 'Telegram' }
            ].map((social, i) => (
              <motion.a 
                key={i}
                href="#" 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -6, scale: 1.1 }}
                className="w-14 h-14 rounded-[20px] bg-white border border-gray-100 shadow-xl flex items-center justify-center text-gray-400 hover:text-pink-600 hover:border-pink-100 transition-all duration-500"
              >
                {React.cloneElement(social.icon as React.ReactElement, { size: 20 })}
              </motion.a>
            ))}
          </div>
        </div>
      </div>

      {/* Custom Styles for Animations */}
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }
      `}} />
    </div>
  );
};

export default Contact;
