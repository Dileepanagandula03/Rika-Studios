
import { ServiceItem, PortfolioItem } from './types';

export const SERVICES: ServiceItem[] = [
  {
    id: 'cold-email',
    title: 'Cold Email Marketing',
    description: 'Direct, high-intent outreach that actually gets replies.',
    icon: 'mail',
    fullDescription: 'We design and execute cold email campaigns that bypass the noise. Our systems focus on deliverability, personalization, and high-quality lead conversion.',
    benefits: ['Deliverability Optimization', 'Personalized Copywriting', 'Automated Follow-ups', 'Lead Qualification']
  },
  {
    id: 'lead-generation',
    title: 'Lead Generation',
    description: 'Predictable demand engines built for scale.',
    icon: 'target',
    fullDescription: 'Multi-channel acquisition built on buyer psychology. We architect high-intent pipelines that prioritize revenue over vanity metrics.',
    benefits: ['High-Intent Funnel Mapping', 'Strategic Partnerships', 'Data Feedback Loops', 'Conversion Optimization']
  },
  {
    id: 'ai-agents',
    title: 'AI Agents / Chatbots',
    description: 'Intelligent automation that speaks your brand voice.',
    icon: 'cpu',
    fullDescription: 'We build private AI systems that nurture, qualify, and convert—while sounding unmistakably like you. 24/7 engagement without the overhead.',
    benefits: ['Custom Voice Training', '24/7 Nurture Infrastructure', 'Automated Qualification', 'Seamless CRM Integration']
  },
  {
    id: 'website-experience',
    title: 'Website Experience',
    description: 'Your digital home, engineered for authority and conversion.',
    icon: 'layout',
    fullDescription: 'We build trust-first digital environments designed to convert at every scroll depth. High-performance websites that handle modern buyer complexity.',
    benefits: ['UX Infrastructure Strategy', 'Behavioral Design', 'Messaging Clarity', 'Authority Positioning']
  }
];

export const PORTFOLIO: PortfolioItem[] = [
  { id: 1, title: 'Luxe Wellness App', category: 'Growth Systems', image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&q=80&w=800' },
  { id: 2, title: 'Aurora FinTech', category: 'Conversion Web', image: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&q=80&w=800' },
  { id: 3, title: 'Ethos Fashion', category: 'Content Engine', image: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&q=80&w=800' },
  { id: 4, title: 'The Modern Agency', category: 'AI Integration', image: 'https://images.unsplash.com/photo-1445205170230-053b830c6039?auto=format&fit=crop&q=80&w=800' },
  { id: 5, title: 'BioHeal Systems', category: 'Lead Gen', image: 'https://images.unsplash.com/photo-1539109132314-3477524c8d95?auto=format&fit=crop&q=80&w=800' },
  { id: 6, title: 'Nexa AI Platform', category: 'Full Ecosystem', image: 'https://images.unsplash.com/photo-1529139513055-07f9127e692f?auto=format&fit=crop&q=80&w=800' },
];
