
import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, Instagram, Linkedin, Facebook, ArrowRight } from 'lucide-react';
import Logo from './Logo';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white pt-24 pb-12 border-t border-white/5 relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#E91E63]/5 rounded-full blur-[120px] pointer-events-none"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
          
          {/* Brand Column */}
          <div className="space-y-8 col-span-1 md:col-span-1">
            <Link to="/" className="inline-block group transition-transform hover:scale-105">
              <Logo className="w-14 h-14" light />
            </Link>
            <p className="text-gray-400 font-light text-sm leading-relaxed max-w-xs">
              We replace cold automation with human growth systems. 
              <span className="block mt-2 text-white/90 font-medium italic">Infrastructure for the human era.</span>
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-500 hover:text-[#E91E63] transition-all"><Instagram size={20} /></a>
              <a href="#" className="text-gray-500 hover:text-[#E91E63] transition-all"><Linkedin size={20} /></a>
            </div>
          </div>

          {/* Navigation Column */}
          <div className="space-y-6">
            <h4 className="text-[#E91E63] text-[10px] uppercase tracking-[6px] font-black">Explore</h4>
            <ul className="space-y-4">
              <li><Link to="/" className="text-gray-400 hover:text-white text-sm transition-all">Home Ecosystem</Link></li>
              <li><Link to="/about" className="text-gray-400 hover:text-white text-sm transition-all">The Methodology</Link></li>
              <li><Link to="/services" className="text-gray-400 hover:text-white text-sm transition-all">Six Core Systems</Link></li>
              <li><Link to="/portfolio" className="text-gray-400 hover:text-white text-sm transition-all">Success Stories</Link></li>
            </ul>
          </div>

          {/* Systems Column */}
          <div className="space-y-6">
            <h4 className="text-[#E91E63] text-[10px] uppercase tracking-[6px] font-black">Systems</h4>
            <ul className="space-y-4">
              <li><Link to="/services/lead-generation" className="text-gray-400 hover:text-white text-sm transition-all">Demand Architecture</Link></li>
              <li><Link to="/services/website-experiences" className="text-gray-400 hover:text-white text-sm transition-all">Conversion Environments</Link></li>
              <li><Link to="/services/ai-growth-agents" className="text-gray-400 hover:text-white text-sm transition-all">Human-AI Agents</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-white text-sm transition-all">Growth Evaluation</Link></li>
            </ul>
          </div>

          {/* Connect Column */}
          <div className="space-y-8">
            <h4 className="text-[#E91E63] text-[10px] uppercase tracking-[6px] font-black">Connect</h4>
            <div className="space-y-5">
              <div className="flex items-center gap-4 group">
                <Mail size={16} className="text-[#E91E63]" />
                <span className="text-gray-300 text-sm font-light">hello@rikagayar.studios</span>
              </div>
              <div className="flex items-center gap-4 group">
                <Phone size={16} className="text-[#E91E63]" />
                <span className="text-gray-300 text-sm font-light">+1 (301) 852-4988</span>
              </div>
            </div>
            
            <div className="pt-4">
              <Link to="/contact" className="inline-flex items-center gap-3 text-white font-black text-[11px] uppercase tracking-[3px] py-3 px-8 rounded-full border border-[#E91E63]/30 hover:bg-[#E91E63] transition-all group">
                Apply Now <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform" />
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Bar - Block 6 Integration */}
        <div className="border-t border-white/5 pt-10 flex flex-col md:flex-row justify-between items-center text-gray-500 text-[9px] uppercase tracking-[4px] font-black">
          <p className="order-2 md:order-1 mt-8 md:mt-0">© 2026 Rika Gayar Studios. All rights reserved.</p>
          <div className="flex flex-wrap justify-center gap-x-4 gap-y-2 order-1 md:order-2">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <span className="opacity-20 hidden md:inline">·</span>
            <a href="#" className="hover:text-white transition-colors">Terms & Conditions</a>
            <span className="opacity-20 hidden md:inline">·</span>
            <a href="#" className="hover:text-white transition-colors">Accessibility</a>
            <span className="opacity-20 hidden md:inline">·</span>
            <a href="#" className="hover:text-white transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
