import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, X, Send, Sparkles, Bot, User, Loader2 } from 'lucide-react';
import { GoogleGenAI } from "@google/genai";

const AIChat: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showTooltip, setShowTooltip] = useState(true);
  const [messages, setMessages] = useState<{ role: 'user' | 'bot'; text: string }[]>([
    { role: 'bot', text: "Hi! I'm Rika's AI assistant. I can help you understand our growth systems and how we scale your brand. How can I help you today?" }
  ]);

  useEffect(() => {
    const timer = setTimeout(() => setShowTooltip(false), 8000);
    return () => clearTimeout(timer);
  }, []);

  const toggleChat = () => {
    setIsOpen(!isOpen);
    setShowTooltip(false);
  };
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMessage }]);
    setIsLoading(true);

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY || '' });
      const model = "gemini-3-flash-preview";
      
      const systemInstruction = `
        You are the high-authority AI assistant for Rika Studios. 
        Your goal is to help potential clients understand our growth infrastructure and eventually guide them to the Contact page.

        CORE KNOWLEDGE:
        Rika Studios builds Growth Infrastructure for the Human Era. We replace generic marketing with high-intent systems focusing on brand authority and conversion.
        Pillars:
        - Cold Email & Lead Gen: Targeted outreach that lands in the inbox.
        - AI Agents: Custom automation and intelligent chatbots.
        - Content & Social: Establishing you as a market authority.
        - Website Experience: High-performance hubs designed for high intent.
        
        PRICING (ONLY for non-website queries):
        - The Authority Build: $2,500/mo (Foundation & Authority).
        - The Scale Engine: $5,000/mo (Advanced Growth & Automation).

        STRICT RESPONSE RULES:
        1. VARIETY: Do NOT repeat the same phrases in every message. Avoid starting every response with "Welcome" or ending every response with "Visit our Contact page" unless it's a natural conclusion to a detailed query.
        2. BREVITY: Keep responses under 2-3 sentences. Be concise but natural.
        3. WEBSITE QUERIES: If asked about websites, web design, or website experience:
           - DO NOT MENTION PRICING. 
           - Focus on "High Intent" and "Authority".
        4. SMALL TALK: For "hi", "hello", "sure", or "ok", respond with a short, high-authority greeting or acknowledgement without forcing a sales pitch immediately.
        5. CALL TO ACTION: Only mention the Contact page when the user asks how to start, asks for more info, or shows high interest.
        6. TONE: Confident, high-authority, futuristic.
      `;

      // We send the whole history for context
      const history = messages.map(m => ({
        role: m.role === 'user' ? 'user' : 'model',
        parts: [{ text: m.text }]
      }));

      const response = await ai.models.generateContent({
        model: model,
        contents: [
          ...history,
          { role: 'user', parts: [{ text: userMessage }] }
        ],
        config: {
          systemInstruction: systemInstruction,
        }
      });

      const botText = response.text || "I'm sorry, I'm having trouble connecting. Please try again or use our contact form.";
      setMessages(prev => [...prev, { role: 'bot', text: botText }]);
    } catch (error) {
      console.error("AI Chat Error:", error);
      setMessages(prev => [...prev, { role: 'bot', text: "I'm sorry, I'm having trouble connecting. Please try again or use our contact form." }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-8 right-8 z-[100]">
      <AnimatePresence>
        {!isOpen && showTooltip && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="absolute bottom-20 right-0 w-56 bg-white p-5 rounded-[24px] shadow-2xl border border-gray-100 mb-2 cursor-pointer"
            onClick={toggleChat}
          >
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-full bg-[#E91E63] flex items-center justify-center text-white flex-shrink-0">
                <motion.div
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <Bot size={16} />
                </motion.div>
              </div>
              <div className="flex flex-col">
                <p className="text-[11px] font-bold text-gray-800 leading-tight">
                  Need help scaling?
                </p>
                <motion.p 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  className="text-[10px] text-[#E91E63] font-black uppercase tracking-wider mt-1"
                >
                  Chat with Rika AI
                </motion.p>
              </div>
            </div>
            <div className="absolute bottom-[-6px] right-6 w-3 h-3 bg-white border-r border-b border-gray-100 rotate-45"></div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="absolute bottom-20 right-0 w-[350px] md:w-[400px] h-[500px] bg-white rounded-[32px] shadow-2xl border border-gray-100 flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="p-6 bg-[#2D3134] text-white flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#E91E63] flex items-center justify-center">
                  <Bot size={20} />
                </div>
                <div>
                  <h3 className="font-bold text-sm">Rika Assistant</h3>
                  <div className="flex items-center gap-1.5">
                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></div>
                    <span className="text-[10px] text-gray-400 uppercase tracking-widest">Online</span>
                  </div>
                </div>
              </div>
              <button 
                onClick={() => setIsOpen(false)}
                className="w-8 h-8 rounded-full hover:bg-white/10 flex items-center justify-center transition-colors"
              >
                <X size={18} />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-6 space-y-6 bg-[#F9FAFB]">
              {messages.map((m, i) => (
                <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`flex gap-3 max-w-[85%] ${m.role === 'user' ? 'flex-row-reverse' : ''}`}>
                    <div className={`w-8 h-8 rounded-full flex-shrink-0 flex items-center justify-center ${m.role === 'user' ? 'bg-gray-200' : 'bg-[#E91E63] text-white'}`}>
                      {m.role === 'user' ? <User size={14} /> : <Bot size={14} />}
                    </div>
                    <div className={`p-4 rounded-2xl text-sm leading-relaxed ${m.role === 'user' ? 'bg-[#2D3134] text-white rounded-tr-none' : 'bg-white text-gray-700 shadow-sm rounded-tl-none border border-gray-100'}`}>
                      {m.text}
                    </div>
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex justify-start">
                  <div className="flex gap-3 max-w-[85%]">
                    <div className="w-8 h-8 rounded-full bg-[#E91E63] text-white flex items-center justify-center">
                      <Bot size={14} />
                    </div>
                    <div className="p-4 bg-white text-gray-700 shadow-sm rounded-2xl rounded-tl-none border border-gray-100">
                      <Loader2 size={16} className="animate-spin" />
                    </div>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div className="p-4 bg-white border-t border-gray-100">
              <div className="relative">
                <input 
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                  placeholder="Ask about our services..."
                  className="w-full pl-6 pr-12 py-4 bg-gray-50 rounded-full text-sm border-none focus:ring-2 focus:ring-[#E91E63] transition-all"
                />
                <button 
                  onClick={handleSend}
                  disabled={isLoading}
                  className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-[#E91E63] text-white flex items-center justify-center hover:scale-105 transition-transform disabled:opacity-50"
                >
                  <Send size={16} />
                </button>
              </div>
              <p className="text-[9px] text-center text-gray-400 mt-3 uppercase tracking-widest font-medium">Powered by Gemini 3.1</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <button 
        onClick={toggleChat}
        className={`w-16 h-16 rounded-full shadow-2xl flex items-center justify-center transition-all duration-500 hover:scale-110 active:scale-95 relative group ${isOpen ? 'bg-[#2D3134] text-white' : 'bg-[#E91E63] text-white'}`}
      >
        {/* Fancy Pulsing Glow */}
        {!isOpen && (
          <div className="absolute inset-0 rounded-full bg-[#E91E63] animate-ping opacity-20 group-hover:opacity-40 transition-opacity"></div>
        )}
        
        {/* Floating & Breathing Animation Wrapper */}
        <motion.div
          animate={!isOpen ? {
            y: [0, -8, 0],
            scale: [1, 1.05, 1],
            rotate: [0, 5, -5, 0]
          } : {}}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="relative z-10 flex items-center justify-center"
        >
          {isOpen ? <X size={24} /> : <Bot size={24} />}
        </motion.div>

        {!isOpen && (
          <div className="absolute -top-1 -right-1 w-5 h-5 bg-emerald-400 rounded-full border-4 border-white animate-pulse z-20"></div>
        )}
        
        {/* Sparkle Accents */}
        {!isOpen && (
          <div className="absolute inset-0 pointer-events-none">
            <Sparkles className="absolute -top-2 -left-2 text-yellow-400 opacity-0 group-hover:opacity-100 transition-opacity" size={16} />
            <Sparkles className="absolute -bottom-2 -right-2 text-yellow-400 opacity-0 group-hover:opacity-100 transition-opacity" size={16} />
          </div>
        )}
      </button>
    </div>
  );
};

export default AIChat;
