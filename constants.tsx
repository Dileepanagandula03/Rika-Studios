
import { ServiceItem, PortfolioItem } from './types';

export const SERVICES: ServiceItem[] = [
  {
    id: 'cold-email',
    title: 'Cold Email Marketing',
    description: 'Direct, high-intent outreach that actually gets replies.',
    icon: 'mail',
    imageUrl: 'https://images.unsplash.com/photo-1557200134-90327ee9fafa?q=80&w=2070&auto=format&fit=crop',
    fullDescription: 'We design and execute cold email campaigns that bypass the noise. Our systems focus on deliverability, personalization, and high-quality lead conversion.',
    benefits: ['ICP Definition & Strategy', 'Personalized Architecture', 'Sequence Design & Testing', 'Deliverability Optimization', 'Performance Monitoring']
  },
  {
    id: 'lead-generation',
    title: 'Lead Generation',
    description: 'Predictable Demand & Conversion Systems.',
    icon: 'target',
    imageUrl: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop',
    fullDescription: 'We build acquisition systems that transform visibility into measurable lead flow through structured demand and conversion-aligned frameworks.',
    benefits: ['Paid Acquisition Strategy', 'Funnel & Landing Page Optimization', 'Lead Nurturing Architecture', 'Conversion Tracking & Analytics', 'Campaign Performance Optimization']
  },
  {
    id: 'ai-agents',
    title: 'AI Agents / Chatbots',
    description: 'Intelligent Interaction & Automation Systems.',
    icon: 'cpu',
    imageUrl: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=2070&auto=format&fit=crop',
    fullDescription: 'We design AI-assisted communication systems that support scale without losing brand identity through intelligent interaction and automation.',
    benefits: ['AI Chatbot Architecture', 'Lead Qualification Automation', 'Customer Support Workflows', 'CRM & Messaging Integrations', 'Performance Learning & Refinement']
  },
  {
    id: 'website-experience',
    title: 'Website Experience',
    description: 'Conversion-Focused Digital Environments.',
    icon: 'layout',
    imageUrl: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=2055&auto=format&fit=crop',
    fullDescription: 'We design high-authority websites and portfolios that transform attention into measurable business outcomes through conversion-aligned digital experiences.',
    benefits: ['Brand Messaging & Positioning', 'UX & Conversion Psychology', 'Mobile-First Development', 'SEO-Ready Technical Structure', 'Lead Capture Systems']
  },
  {
    id: 'social-media-marketing',
    title: 'Social Media Marketing',
    description: 'Strategic Social Presence Systems.',
    icon: 'share-2',
    imageUrl: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?q=80&w=1974&auto=format&fit=crop',
    fullDescription: 'We design social ecosystems that align visibility, trust, and conversion through structured brand presence systems across Instagram, LinkedIn, and Facebook.',
    benefits: ['Platform Positioning Strategy', 'Content & Engagement Architecture', 'Conversion-Aligned Visibility', 'Performance Optimization']
  },
  {
    id: 'content-marketing',
    title: 'Content & Creator Growth Systems',
    description: 'Narrative + Visibility Infrastructure for the Short-Form Era.',
    icon: 'file-text',
    imageUrl: 'https://images.unsplash.com/photo-1492724441997-5dc865305da7?q=80&w=2070&auto=format&fit=crop',
    fullDescription: 'We design short-form content ecosystems that help emerging voices grow with clarity, consistency, and platform intelligence across Instagram, TikTok, and YouTube Shorts.',
    benefits: ['Creator Positioning & Niche Clarity', 'Short-Form Content Strategy', 'Viral Pattern Analysis', 'Personal Brand Storytelling', 'Growth Analytics & Refinement']
  }
];

export const PORTFOLIO: PortfolioItem[] = [
  { id: 1, title: 'Luxe Wellness App', category: 'Growth Systems', image: 'https://picsum.photos/seed/wellness/800/1000' },
  { id: 2, title: 'Aurora FinTech', category: 'Conversion Web', image: 'https://picsum.photos/seed/finance/800/1000' },
  { id: 3, title: 'Ethos Fashion', category: 'Content Engine', image: 'https://picsum.photos/seed/fashion/800/1000' },
  { id: 4, title: 'The Modern Agency', category: 'AI Integration', image: 'https://picsum.photos/seed/agency/800/1000' },
  { id: 5, title: 'BioHeal Systems', category: 'Lead Gen', image: 'https://picsum.photos/seed/health/800/1000' },
  { id: 6, title: 'Nexa AI Platform', category: 'Full Ecosystem', image: 'https://picsum.photos/seed/tech/800/1000' },
];
