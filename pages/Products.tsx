
import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link, useParams } from 'react-router-dom';
import { ArrowLeft, Sparkles, Mail, FileText, Zap, Shield, Target, Bot, Settings2, Briefcase, X } from 'lucide-react';

const Products: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  useEffect(() => {
    // Standard page scroll to top
    window.scrollTo(0, 0);
  }, [id]);

  const products = {
    'email-automation': {
      title: 'Email Automation Tool',
      description: 'The ultimate engine for high-deliverability, personalized outreach at scale.',
      icon: <Mail className="text-[#F3CF5F]" size={40} />,
      features: [
        'Advanced Warm-up Infrastructure',
        'AI-Powered Personalization',
        'Real-time Deliverability Tracking',
        'Automated Follow-up Sequences'
      ],
      details: 'Our Email Automation Tool is designed for teams that need to reach high-value prospects without landing in spam. It combines behavioral triggers with semantic analysis to ensure every email feels hand-written.'
    },
    'ai-resume-tailoring': {
      title: 'AI Resume Tailoring Tool',
      description: 'Instantly align your professional narrative with any job description using advanced AI.',
      icon: <FileText className="text-[#F3CF5F]" size={40} />,
      features: [
        'Semantic Keyword Matching',
        'Tone & Voice Alignment',
        'ATS Optimization Engine',
        'Instant Formatting'
      ],
      details: 'The AI Resume Tailoring Tool analyzes job descriptions in real-time and suggests precise modifications to your resume to maximize your match score while preserving your authentic professional voice.'
    },
    'clawdbot': {
      title: 'AI Agent (Clawdbot)',
      description: 'A high-intelligence autonomous agent designed for complex task execution and brand amplification.',
      icon: <Bot className="text-[#F3CF5F]" size={40} />,
      features: [
        'Autonomous Task Execution',
        'Deep Brand Voice Integration',
        'Multi-platform Deployment',
        'Real-time Learning Loops'
      ],
      details: 'Clawdbot is not just a chatbot; it is a strategic growth partner. It handles complex workflows, from lead qualification to content distribution, ensuring your brand remains active and authoritative 24/7.'
    }
  };

  const currentProduct = id ? products[id as keyof typeof products] : null;

  if (id && !currentProduct) {
    return (
      <div className="pt-40 pb-32 bg-[#FFFBF0] min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Product Not Found</h1>
          <Link to="/" className="text-[#F3CF5F] hover:underline">Back to Home</Link>
        </div>
      </div>
    );
  }

  return (
    <div className={`min-h-screen w-full relative overflow-x-hidden ${
      id === 'email-automation' || id === 'ai-resume-tailoring' || id === 'clawdbot'
        ? 'bg-[#F7F9FC]' 
        : 'bg-[#FFFBF0] pt-40 pb-32'
    }`} style={
      id === 'ai-resume-tailoring' || id === 'email-automation'
        ? { background: 'linear-gradient(135deg, #F7F9FC 0%, #EEF2FF 100%)' }
        : id === 'clawdbot'
        ? { background: 'linear-gradient(135deg, #f7f6f2 0%, #ede6d6 100%)' }
        : {}
    }>
      {id === 'email-automation' ? (
        <div className="email-automation-neutral pt-40 pb-32">
          <style>{`
            @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700&display=swap');

            .email-automation-neutral {
              font-family: 'Outfit', sans-serif;
              position: relative;
              color: #1a1a1a;
              width: 100%;
            }

            .blob {
              position: fixed;
              border-radius: 50%;
              filter: blur(120px);
              z-index: 0;
              pointer-events: none;
            }

            .blob-1 {
              width: 500px;
              height: 500px;
              background: rgba(220, 220, 210, 0.35);
              top: -100px;
              left: -100px;
            }

            .blob-2 {
              width: 420px;
              height: 420px;
              background: rgba(210, 215, 205, 0.28);
              bottom: -100px;
              right: -100px;
            }

            .blob-3 {
              width: 320px;
              height: 320px;
              background: rgba(225, 220, 210, 0.22);
              top: 50%;
              right: -50px;
              transform: translateY(-50%);
            }

            .grid-container {
              display: grid;
              grid-template-columns: repeat(2, 1fr);
              gap: 16px;
              max-width: 820px;
              margin: 0 auto;
              position: relative;
              z-index: 1;
            }

            .glass-card {
              background: rgba(255, 255, 255, 0.58);
              backdrop-filter: blur(28px);
              -webkit-backdrop-filter: blur(28px);
              border: 1px solid rgba(255, 255, 255, 0.95);
              border-radius: 24px;
              padding: 36px 32px;
              position: relative;
              overflow: hidden;
              transition: transform 0.35s cubic-bezier(0.22, 1, 0.36, 1), 
                          background 0.35s cubic-bezier(0.22, 1, 0.36, 1), 
                          box-shadow 0.35s cubic-bezier(0.22, 1, 0.36, 1);
            }

            .glass-card::before {
              content: '';
              position: absolute;
              top: 0;
              left: 0;
              right: 0;
              height: 1px;
              background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.98), transparent);
              z-index: 2;
            }

            .glass-card::after {
              content: '';
              position: absolute;
              top: -70px;
              right: -70px;
              width: 200px;
              height: 200px;
              border-radius: 50%;
              background: rgba(180, 175, 165, 0.5);
              opacity: 0.08;
              transition: opacity 0.35s ease, transform 0.35s ease;
              z-index: -1;
            }

            .glass-card:hover {
              transform: translateY(-7px) scale(1.015);
              background: rgba(255, 255, 255, 0.78);
              box-shadow: 0 24px 60px rgba(0, 0, 0, 0.07);
            }

            .glass-card:hover::after {
              opacity: 0.16;
              transform: scale(1.25);
            }

            .badge {
              width: 30px;
              height: 30px;
              display: flex;
              align-items: center;
              justify-content: center;
              border-radius: 9px;
              background: rgba(0, 0, 0, 0.05);
              border: 1px solid rgba(0, 0, 0, 0.07);
              color: #888;
              font-size: 0.75rem;
              font-weight: 700;
              margin-bottom: 20px;
            }

            .headline {
              font-size: 1.05rem;
              font-weight: 700;
              color: #1a1a1a;
              line-height: 1.4;
              margin-bottom: 11px;
            }

            .body-text {
              font-size: 0.875rem;
              color: #777;
              line-height: 1.82;
              font-weight: 400;
              margin-bottom: 20px;
            }

            .tags-row {
              display: flex;
              flex-wrap: wrap;
              gap: 7px;
            }

            .tag {
              font-size: 0.72rem;
              font-weight: 500;
              padding: 5px 13px;
              border-radius: 999px;
              background: rgba(0, 0, 0, 0.04);
              border: 1px solid rgba(0, 0, 0, 0.08);
              color: #666;
            }

            .cta-button {
              width: 100%;
              padding: 13px;
              border-radius: 14px;
              background: #1a1a1a;
              color: #fff;
              font-weight: 600;
              font-size: 0.875rem;
              border: none;
              cursor: pointer;
              margin-top: 4px;
              transition: background 0.3s ease, transform 0.3s ease, box-shadow 0.3s ease;
              text-align: center;
              display: block;
              text-decoration: none;
            }

            .cta-button:hover {
              background: #333;
              transform: scale(1.02);
              box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
            }

            @media (max-width: 560px) {
              .grid-container {
                grid-template-columns: 1fr;
              }
            }
          `}</style>

          <div className="blob blob-1"></div>
          <div className="blob blob-2"></div>
          <div className="blob blob-3"></div>

          <div className="w-full px-6 relative z-10">
            <div className="max-w-6xl mx-auto">
              <Link to="/" className="inline-flex items-center gap-2 text-gray-500 hover:text-[#F3CF5F] transition-colors text-sm font-medium mb-12">
                <ArrowLeft size={16} /> Back to Home
              </Link>
            </div>

            <div className="grid-container">
              {/* CARD 1 */}
              <div className="glass-card">
                <div className="badge">01</div>
                <h3 className="headline">Email Overload Is Killing Your Productivity</h3>
                <p className="body-text">
                  You spend hours typing the same emails, attaching the same files, and following up manually. Opportunities slip away. What should take minutes takes hours.
                </p>
                <div className="tags-row">
                  <span className="tag">Repetitive tasks</span>
                  <span className="tag">Manual follow-ups</span>
                  <span className="tag">Lost leads</span>
                </div>
              </div>

              {/* CARD 2 */}
              <div className="glass-card">
                <div className="badge">02</div>
                <h3 className="headline">Four Ways. One Platform. Total Control.</h3>
                <p className="body-text">
                  Upload your contacts once. Choose how you want to send. Manual for single emails. Bulk for lists. Schedule to set and forget. Full Auto to find leads and send on autopilot.
                </p>
                <div className="tags-row">
                  <span className="tag">Manual</span>
                  <span className="tag">Bulk</span>
                  <span className="tag">Scheduled</span>
                  <span className="tag">Full Auto</span>
                </div>
              </div>

              {/* CARD 3 */}
              <div className="glass-card">
                <div className="badge">03</div>
                <h3 className="headline">Built for Real Workflows</h3>
                <p className="body-text">
                  No rigid templates. No complicated setup. Upload any list, attach PDFs or Word docs, personalise with &#123;name&#125;, and let Hunter.io find new contacts while you sleep.
                </p>
                <div className="tags-row">
                  <span className="tag">Excel import</span>
                  <span className="tag">Any attachment</span>
                  <span className="tag">Templates</span>
                  <span className="tag">Lead gen</span>
                </div>
              </div>

              {/* CARD 4 */}
              <div className="glass-card">
                <div className="badge">04</div>
                <h3 className="headline">From Hours to Minutes</h3>
                <p className="body-text">
                  What used to take 2 hours now takes 12 minutes. More emails sent. More responses received. Less stress. More impact from your very first send.
                </p>
                <div className="tags-row">
                  <span className="tag">Time saving</span>
                  <span className="tag">More replies</span>
                  <span className="tag">Zero grind</span>
                </div>
                <Link to="/contact" className="cta-button">
                  Start Automating Today — Free Trial, No Credit Card
                </Link>
              </div>
            </div>
          </div>
        </div>
      ) : id === 'ai-resume-tailoring' ? (
        <div className="resume-tailoring-engine pt-40 pb-32">
          <style>{`
            @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap');

            .resume-tailoring-engine {
              font-family: 'Inter', sans-serif;
              position: relative;
              color: #111827;
              width: 100%;
            }

            .glow {
              position: absolute;
              border-radius: 50%;
              filter: blur(100px);
              opacity: 0.15;
              z-index: 0;
              pointer-events: none;
            }

            .glow-blue {
              width: 400px;
              height: 400px;
              background: #6366F1;
              top: 10%;
              left: 5%;
            }

            .glow-violet {
              width: 400px;
              height: 400px;
              background: #8B5CF6;
              bottom: 10%;
              right: 5%;
            }

            .resume-container {
              max-width: 1000px;
              margin: 0 auto;
              position: relative;
              z-index: 1;
            }

            .resume-heading {
              font-size: 32px;
              font-weight: 700;
              text-align: center;
              margin-bottom: 60px;
              color: #111827;
            }

            .resume-grid {
              display: grid;
              grid-template-columns: repeat(2, 1fr);
              gap: 24px;
            }

            .resume-card {
              background: rgba(255, 255, 255, 0.8);
              backdrop-filter: blur(12px);
              -webkit-backdrop-filter: blur(12px);
              border-radius: 16px;
              padding: 24px;
              border: 1px solid rgba(255, 255, 255, 0.3);
              box-shadow: 0 4px 20px rgba(0, 0, 0, 0.03);
              transition: all 0.3s ease;
              display: flex;
              flex-direction: column;
            }

            .resume-card:hover {
              transform: translateY(-8px);
              box-shadow: 0 12px 30px rgba(0, 0, 0, 0.08);
            }

            .card-icon {
              width: 40px;
              height: 40px;
              background: #EEF2FF;
              border-radius: 10px;
              display: flex;
              align-items: center;
              justify-content: center;
              margin-bottom: 20px;
              color: #6366F1;
            }

            .card-title {
              font-size: 18px;
              font-weight: 700;
              margin-bottom: 12px;
              color: #111827;
            }

            .card-divider {
              height: 1px;
              background: rgba(0, 0, 0, 0.05);
              margin-bottom: 16px;
            }

            .card-body {
              font-size: 14px;
              line-height: 1.6;
              color: #4B5563;
            }

            .bullet-list {
              margin-top: 12px;
              list-style: none;
              padding: 0;
            }

            .bullet-list li {
              position: relative;
              padding-left: 18px;
              margin-bottom: 8px;
            }

            .bullet-list li::before {
              content: '•';
              position: absolute;
              left: 0;
              color: #6366F1;
              font-weight: bold;
            }

            .cta-card {
              justify-content: center;
              align-items: center;
              text-align: center;
            }

            .resume-cta-button {
              background: #111827;
              color: #fff;
              padding: 14px 32px;
              border-radius: 9999px;
              font-weight: 600;
              font-size: 16px;
              border: none;
              cursor: pointer;
              transition: all 0.3s ease;
              text-decoration: none;
              display: inline-block;
            }

            .resume-cta-button:hover {
              background: #1f2937;
              transform: scale(1.02);
              box-shadow: 0 0 20px rgba(99, 102, 241, 0.3);
            }

            .resume-footer {
              margin-top: 24px;
              font-size: 12px;
              color: #9CA3AF;
            }

            @media (max-width: 768px) {
              .resume-grid {
                grid-template-columns: 1fr;
              }
              .resume-heading {
                font-size: 28px;
              }
            }
          `}</style>

          <div className="glow glow-blue"></div>
          <div className="glow glow-violet"></div>

          <div className="w-full px-6 relative z-10">
            <div className="max-w-6xl mx-auto">
              <Link to="/" className="inline-flex items-center gap-2 text-gray-500 hover:text-[#F3CF5F] transition-colors text-sm font-medium mb-12">
                <ArrowLeft size={16} /> Back to Home
              </Link>
            </div>

            <div className="resume-container">
              <h2 className="resume-heading">Resume Tailoring Engine</h2>
              
              <div className="resume-grid">
                {/* BLOCK 1 */}
                <div className="resume-card">
                  <div className="card-icon"><Target size={20} /></div>
                  <h3 className="card-title">One Resume Fits All? That's The Problem.</h3>
                  <div className="card-divider"></div>
                  <div className="card-body">
                    You spend hours tweaking your resume for each job. Change a bullet here. Add a keyword there. But the ATS still rejects you. Recruiters can't see why you're perfect. And you're left wondering—what did I miss?
                    <br /><br />
                    You're not unqualified. You're just not speaking their language.
                  </div>
                </div>

                {/* BLOCK 2 */}
                <div className="resume-card">
                  <div className="card-icon"><Zap size={20} /></div>
                  <h3 className="card-title">We Speak JD. Your Resume Translates.</h3>
                  <div className="card-divider"></div>
                  <div className="card-body">
                    Paste any job description. Our engine does the rest.
                    <ul className="bullet-list">
                      <li>Step 1: You paste the job description</li>
                      <li>Step 2: We analyze every tool, skill, and requirement</li>
                      <li>Step 3: Your resume rewrites itself to match—naturally</li>
                    </ul>
                    No hardcoding. No templates. Just intelligent tailoring.
                  </div>
                </div>

                {/* BLOCK 3 */}
                <div className="resume-card">
                  <div className="card-icon"><Sparkles size={20} /></div>
                  <h3 className="card-title">Smart Matching. Not Buzzword Stuffing.</h3>
                  <div className="card-divider"></div>
                  <div className="card-body">
                    Most tools just dump keywords. We build stories. Our engine understands the context of your experience and rephrases your achievements to highlight the exact impact the recruiter is looking for.
                  </div>
                </div>

                {/* BLOCK 4 */}
                <div className="resume-card">
                  <div className="card-icon"><Briefcase size={20} /></div>
                  <h3 className="card-title">Built for Every Role. Any Industry.</h3>
                  <div className="card-divider"></div>
                  <div className="card-body">
                    Whether you're a Software Engineer, a Marketing Director, or a Creative Lead, our AI adapts its vocabulary to your specific field. We've trained our models on millions of successful resumes across 50+ industries.
                  </div>
                </div>

                {/* BLOCK 5 */}
                <div className="resume-card">
                  <div className="card-icon"><Target size={20} /></div>
                  <h3 className="card-title">From Generic to Shortlisted.</h3>
                  <div className="card-divider"></div>
                  <div className="card-body">
                    Stop being another name in the pile. By tailoring your resume to the specific nuances of the role, you increase your interview callback rate by up to 3x. We help you show up as the perfect candidate, every single time.
                  </div>
                </div>

                {/* BLOCK 6 */}
                <div className="resume-card cta-card">
                  <div className="card-icon"><Sparkles size={20} /></div>
                  <h3 className="card-title">Stop Applying. Start Matching.</h3>
                  <div className="card-divider"></div>
                  <Link to="/contact" className="resume-cta-button">
                    Try It Free – No Credit Card
                  </Link>
                  <div className="resume-footer">
                    Your data stays private. We never store your resume or API key.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : id === 'clawdbot' ? (
        <div className="autoiq-labs pt-40 pb-32">
          <style>{`
            @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&display=swap');

            .autoiq-labs {
              font-family: 'Plus Jakarta Sans', sans-serif;
              position: relative;
              color: #111827;
              width: 100%;
            }

            .autoiq-container {
              max-width: 1100px;
              margin: 0 auto;
              position: relative;
              z-index: 10;
            }

            /* Hero Section */
            .autoiq-hero {
              text-align: center;
              margin-bottom: 100px;
            }

            .autoiq-hero h1 {
              font-size: clamp(28px, 4.5vw, 48px);
              font-weight: 800;
              line-height: 1.1;
              margin-bottom: 24px;
              background: linear-gradient(135deg, #111827 0%, #A3947F 100%);
              -webkit-background-clip: text;
              -webkit-text-fill-color: transparent;
            }

            .autoiq-hero p {
              font-size: 16px;
              color: #4B5563;
              max-width: 600px;
              margin: 0 auto 40px;
              line-height: 1.6;
            }

            .autoiq-cta {
              background: #111827;
              color: white;
              padding: 16px 40px;
              border-radius: 9999px;
              font-weight: 700;
              font-size: 18px;
              transition: all 0.3s ease;
              display: inline-block;
              box-shadow: 0 10px 25px rgba(0,0,0,0.1);
            }

            .autoiq-cta:hover {
              transform: translateY(-3px);
              box-shadow: 0 15px 30px rgba(163, 148, 127, 0.2);
              background: #1f2937;
            }

            /* Big Numbers */
            .autoiq-numbers {
              display: grid;
              grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
              gap: 30px;
              margin-bottom: 120px;
            }

            .number-card {
              background: white;
              padding: 40px 30px;
              border-radius: 24px;
              text-align: center;
              box-shadow: 0 4px 20px rgba(0,0,0,0.03);
              border: 1px solid rgba(0,0,0,0.05);
              transition: transform 0.3s ease;
            }

            .number-card:hover {
              transform: translateY(-5px);
            }

            .number-val {
              font-size: 36px;
              font-weight: 800;
              color: #A3947F;
              display: block;
              margin-bottom: 8px;
            }

            .number-label {
              font-size: 14px;
              font-weight: 600;
              color: #6B7280;
              text-transform: uppercase;
              letter-spacing: 1px;
            }

            /* Before vs After */
            .autoiq-comparison {
              margin-bottom: 120px;
            }

            .comparison-grid {
              display: grid;
              grid-template-columns: 1fr 1fr;
              gap: 40px;
              background: white;
              border-radius: 32px;
              padding: 40px;
              box-shadow: 0 20px 50px rgba(0,0,0,0.05);
              border: 1px solid rgba(0,0,0,0.05);
            }

            .comp-side h3 {
              font-size: 20px;
              font-weight: 700;
              margin-bottom: 24px;
              display: flex;
              align-items: center;
              gap: 12px;
            }

            .comp-before h3 { color: #EF4444; }
            .comp-after h3 { color: #10B981; }

            .comp-list {
              list-style: none;
              padding: 0;
            }

            .comp-list li {
              padding: 16px;
              border-radius: 12px;
              margin-bottom: 12px;
              font-size: 15px;
              display: flex;
              align-items: center;
              gap: 12px;
            }

            .comp-before li { background: #FEF2F2; color: #991B1B; }
            .comp-after li { background: #ECFDF5; color: #065F46; }

            /* What We Do */
            .autoiq-services {
              margin-bottom: 120px;
            }

            .services-grid {
              display: grid;
              grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
              gap: 24px;
            }

            .service-card {
              background: rgba(255,255,255,0.7);
              backdrop-filter: blur(10px);
              padding: 32px;
              border-radius: 24px;
              border: 1px solid rgba(255,255,255,0.5);
              transition: all 0.3s ease;
            }

            .service-card:hover {
              background: white;
              box-shadow: 0 15px 40px rgba(0,0,0,0.06);
              transform: translateY(-5px);
            }

            .service-icon {
              width: 48px;
              height: 48px;
              background: #f7f6f2;
              border-radius: 14px;
              display: flex;
              align-items: center;
              justify-content: center;
              color: #A3947F;
              margin-bottom: 20px;
            }

            .service-card h4 {
              font-size: 16px;
              font-weight: 700;
              margin-bottom: 12px;
            }

            .service-card p {
              font-size: 14px;
              color: #6B7280;
              line-height: 1.5;
            }

            /* How It Works */
            .autoiq-steps {
              text-align: center;
            }

            .steps-grid {
              display: grid;
              grid-template-columns: repeat(3, 1fr);
              gap: 40px;
              margin-top: 60px;
            }

            .step-item {
              position: relative;
            }

            .step-num {
              width: 40px;
              height: 40px;
              background: #A3947F;
              color: white;
              border-radius: 50%;
              display: flex;
              align-items: center;
              justify-content: center;
              font-weight: 800;
              margin: 0 auto 24px;
              font-size: 18px;
              box-shadow: 0 5px 15px rgba(163, 148, 127, 0.3);
            }

            .step-item h5 {
              font-size: 16px;
              font-weight: 700;
              margin-bottom: 12px;
            }

            .step-item p {
              font-size: 14px;
              color: #6B7280;
            }

            @media (max-width: 768px) {
              .comparison-grid, .steps-grid {
                grid-template-columns: 1fr;
              }
              .autoiq-hero h1 { font-size: 36px; }
            }
          `}</style>

          <div className="autoiq-container">
            <div className="max-w-6xl mx-auto mb-12">
              <Link to="/" className="inline-flex items-center gap-2 text-gray-500 hover:text-[#A3947F] transition-colors text-sm font-medium">
                <ArrowLeft size={16} /> Back to Home
              </Link>
            </div>

            {/* 1. HERO SECTION */}
            <section className="autoiq-hero">
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
              >
                AI Automation That Works While You Sleep
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
              >
                We build intelligent bots and automation systems that handle your leads, emails, and follow-ups 24/7.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 }}
              >
                <Link to="/contact" className="autoiq-cta">Get Started Today</Link>
              </motion.div>
            </section>

            {/* 2. BIG NUMBERS SECTION */}
            <section className="autoiq-numbers">
              <div className="number-card">
                <span className="number-val">2 min</span>
                <span className="number-label">Avg Response Time</span>
              </div>
              <div className="number-card">
                <span className="number-val">1000+</span>
                <span className="number-label">Monthly Contacts</span>
              </div>
              <div className="number-card">
                <span className="number-val">0</span>
                <span className="number-label">Manual Follow-ups</span>
              </div>
              <div className="number-card">
                <span className="number-val">24/7</span>
                <span className="number-label">Bot Uptime</span>
              </div>
            </section>

            {/* 3. BEFORE vs AFTER SECTION */}
            <section className="autoiq-comparison">
              <div className="comparison-grid">
                <div className="comp-side comp-before">
                  <h3><X size={24} /> Before AutoIQ</h3>
                  <ul className="comp-list">
                    <li>Manual follow-ups consuming hours</li>
                    <li>Important emails forgotten in inbox</li>
                    <li>No data on campaign performance</li>
                    <li>Leads go cold before you reply</li>
                  </ul>
                </div>
                <div className="comp-side comp-after">
                  <h3><Sparkles size={24} /> After AutoIQ</h3>
                  <ul className="comp-list">
                    <li>Instant auto-replies to every lead</li>
                    <li>Scheduled emails sent automatically</li>
                    <li>Weekly reports with clear insights</li>
                    <li>Every lead nurtured until booking</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* 4. WHAT WE DO SECTION */}
            <section className="autoiq-services">
              <h2 className="text-3xl font-bold text-center mb-12">What We Do</h2>
              <div className="services-grid">
                <div className="service-card">
                  <div className="service-icon"><Mail size={24} /></div>
                  <h4>WhatsApp Bot</h4>
                  <p>Instant lead replies and automated conversations on the world's most popular messaging app.</p>
                </div>
                <div className="service-card">
                  <div className="service-icon"><Zap size={24} /></div>
                  <h4>Email Campaigns</h4>
                  <p>Automated outreach sent 2x/month to keep your brand top-of-mind and drive consistent traffic.</p>
                </div>
                <div className="service-card">
                  <div className="service-icon"><Target size={24} /></div>
                  <h4>LinkedIn Outreach</h4>
                  <p>Reach 1000+ targeted professional contacts per month with personalized, automated sequences.</p>
                </div>
                <div className="service-card">
                  <div className="service-icon"><Shield size={24} /></div>
                  <h4>Weekly Reports</h4>
                  <p>Detailed analytics on open rates, click rates, and bookings so you always know your ROI.</p>
                </div>
              </div>
            </section>

            {/* 5. HOW IT WORKS SECTION */}
            <section className="autoiq-steps">
              <h2 className="text-3xl font-bold mb-4">How It Works</h2>
              <p className="text-gray-500 mb-12">Three simple steps to total business automation.</p>
              <div className="steps-grid">
                <div className="step-item">
                  <div className="step-num">1</div>
                  <h5>Discovery</h5>
                  <p>We analyze your business workflows to find the perfect automation opportunities.</p>
                </div>
                <div className="step-item">
                  <div className="step-num">2</div>
                  <h5>Build</h5>
                  <p>Our engineers build and deploy your custom intelligent automation system.</p>
                </div>
                <div className="step-item">
                  <div className="step-num">3</div>
                  <h5>Scale</h5>
                  <p>You watch leads come in automatically while you focus on high-level strategy.</p>
                </div>
              </div>
            </section>
          </div>
        </div>
      ) : (
        <div className="container mx-auto px-6 max-w-6xl relative z-10">
          <Link to="/" className="inline-flex items-center gap-2 text-gray-500 hover:text-[#F3CF5F] transition-colors text-sm font-medium mb-12">
            <ArrowLeft size={16} /> Back to Home
          </Link>

          <div className="space-y-20">
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="text-5xl md:text-7xl font-bold text-[#2D3134] mb-8">The <span className="text-[#F3CF5F] italic">Product</span> Lab.</h1>
              <p className="text-xl text-gray-600 font-light leading-relaxed">
                We build proprietary tools that solve the most complex bottlenecks in growth and career acceleration.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              {Object.entries(products).map(([key, product]) => (
                <Link key={key} to={`/products/${key}`} className="group">
                  <div className="bg-white rounded-[40px] p-12 border border-gray-100 shadow-xl transition-all duration-500 group-hover:shadow-2xl group-hover:-translate-y-2 relative overflow-hidden h-full">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-[#F3CF5F]/5 rounded-full blur-2xl -mr-16 -mt-16 group-hover:bg-[#F3CF5F]/10 transition-colors"></div>
                    <div className="w-16 h-16 bg-[#FFFBF0] rounded-2xl flex items-center justify-center mb-8 shadow-lg border border-[#F3CF5F]/10 group-hover:scale-110 transition-transform">
                      {product.icon}
                    </div>
                    <h3 className="text-3xl font-bold text-[#2D3134] mb-4">{product.title}</h3>
                    <p className="text-gray-500 font-light leading-relaxed mb-8">
                      {product.description}
                    </p>
                    <div className="flex items-center gap-2 text-[#F3CF5F] text-[10px] uppercase font-black tracking-[3px]">
                      View Product <ArrowLeft className="rotate-180" size={14} />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Products;
