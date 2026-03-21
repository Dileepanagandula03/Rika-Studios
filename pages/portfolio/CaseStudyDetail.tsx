
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, CheckCircle2, Cpu, Search, Waves, Sparkles, TrendingUp, Target, Layout, Share2, FileText, Clock, Zap, BarChart3, Globe, MousePointer2, Gauge, Bot, MessageSquare, Link as LinkIcon } from 'lucide-react';
import { motion } from 'framer-motion';

const CASE_STUDY_DATA: Record<string, any> = {
  'dnk-glam-events': {
    title: 'Luxury Weddings',
    subtitle: 'DNK Glam Events',
    tagline: 'Architecting Premium Positioning in a Regional Experiential Market',
    client: 'DNK Glam Events',
    techCycle: 'Premium Experience Framework',
    timeline: '6 Month Transformation',
    image: 'https://images.unsplash.com/photo-1532712938310-34cb3982ef74?auto=format&fit=crop&q=80&w=1200',
    content: [
      {
        type: 'section',
        title: 'CONTEXT',
        text: 'DNK Glam Events operates within a competitive regional wedding services landscape characterized by high emotional investment, fragmented vendor ecosystems, and increasing client expectations for personalized experiences.\n\nWhile DNK possessed strong creative execution capabilities, premium market positioning required a more structured approach to differentiation, perception management, and demand predictability.\n\nThe objective was not merely to execute weddings — but to design a scalable positioning framework capable of elevating DNK into a recognized luxury experience brand within the Maryland and DC markets.',
        image: 'https://picsum.photos/seed/dnk-context/800/500'
      },
      {
        type: 'section',
        title: 'THE CHALLENGE',
        text: 'Luxury wedding markets present layered structural complexities:\n\n• high emotional decision stakes for clients\n• intense competition across planners, designers, and décor specialists\n• expectation of customization combined with flawless execution\n• perception-driven pricing sensitivity\n• reliance on reputation and visual portfolio credibility\n\nWithout strategic positioning, even highly capable service providers risk being perceived as interchangeable within crowded vendor ecosystems.\n\nDNK required a system that could translate creative strength into premium market authority.'
      },
      {
        type: 'section',
        title: 'STRATEGIC LENS',
        text: 'The engagement approached luxury weddings as a brand elevation mechanism, rather than a single revenue stream.\n\nKey strategic focus areas included:\n\n• crafting perception-led luxury positioning narratives\n• structuring experience design as a core differentiator\n• developing visual authority ecosystems through curated storytelling\n• designing operational frameworks aligned with premium service expectations\n• enabling pricing confidence through brand credibility development\n\nThis reframing positioned weddings as both a revenue driver and a reputation engine.'
      },
      {
        type: 'section',
        title: 'INTERVENTION',
        text: 'The transformation was structured across interconnected strategic layers:\n\n1. Premium Brand Identity Architecture: Defining DNK’s visual language, experiential tone, and luxury perception signals.\n\n2. Experience Design Framework: Structuring wedding journeys around emotional storytelling and spatial aesthetics.\n\n3. Vendor Ecosystem Integration: Establishing coordinated workflows to ensure seamless multi-stakeholder execution.\n\n4. Portfolio Authority Development: Curating visual documentation strategies to strengthen market credibility.\n\n5. Client Experience Optimization: Designing consultation, communication, and execution processes aligned with high-value client expectations.'
      },
      {
        type: 'section',
        title: 'EXECUTION PHASE',
        text: 'Initial implementation focused on positioning DNK weddings as immersive, design-led experiences rather than logistical services.\n\nThis phase included:\n\n• developing concept-driven wedding design presentations\n• integrating floral, décor, and spatial storytelling into unified narratives\n• refining consultation environments to reflect premium positioning\n• aligning execution processes with luxury service standards\n• capturing visual assets to reinforce brand authority\n\nExecution emphasized perception consistency across all client touchpoints.'
      },
      {
        type: 'section',
        title: 'KEY MILESTONE',
        text: 'The luxury wedding positioning model demonstrated early validation through:\n\n• increased alignment between pricing and perceived brand value\n• stronger client confidence during consultation stages\n• improved referral quality within premium client segments\n• enhanced visual portfolio credibility across digital platforms\n• elevated differentiation within regional competitive landscapes\n\nThese outcomes reinforced the viability of structured luxury positioning.'
      },
      {
        type: 'section',
        title: 'LEARNINGS',
        text: 'Key insights from the engagement include:\n\n• perception architecture significantly influences premium service acceptance\n• experiential storytelling enhances emotional client commitment\n• visual authority ecosystems are critical in wedding market positioning\n• consultation environments shape pricing confidence\n• operational precision is inseparable from luxury brand perception\n\nThese learnings inform scalable experiential positioning models.'
      },
      {
        type: 'section',
        title: 'FUTURE POTENTIAL',
        text: 'The DNK wedding transformation offers strategic implications for:\n\n• regional luxury service brand development\n• experiential design-driven market positioning\n• premium client lifecycle architecture\n• integrated creative-operational growth models\n• scalable reputation ecosystems within emotional decision markets\n\nThis framework holds relevance across global experiential service industries.'
      },
      {
        type: 'section',
        title: 'STRATEGIC SIGNIFICANCE',
        text: 'This case illustrates how structured positioning can elevate creative service providers into premium market categories.\n\nBy aligning design, perception, and operational frameworks, local brands can transition from vendor status to experiential authority.\n\nDNK’s luxury wedding model serves as a reference prototype for such transitions.'
      },
      {
        type: 'section',
        title: 'CLOSING',
        text: 'Luxury is not created through aesthetics alone — it emerges from consistency across perception, experience, and execution.\n\nDNK Glam Events continues to evolve as a structured premium experience brand, offering insights into the future of regional luxury service positioning.'
      }
    ],
    stats: [
      { label: 'Pricing Alignment', value: 'Premium', icon: <TrendingUp size={24} /> },
      { label: 'Client Confidence', value: 'High', icon: <Sparkles size={24} /> },
      { label: 'Market Authority', value: 'Leader', icon: <Target size={24} /> }
    ]
  },
  'dnk-corporate-events': {
    title: 'Corporate & Brand Events',
    subtitle: 'DNK Glam Events',
    tagline: 'Structuring Experiential Authority for Business-Driven Event Ecosystems',
    client: 'DNK Glam Events',
    techCycle: 'B2B Experiential Architecture',
    timeline: '8 Month Strategy',
    image: 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&q=80&w=1200',
    content: [
      {
        type: 'section',
        title: 'CONTEXT',
        text: 'DNK Glam Events operates within a regional market where corporate event services are often fragmented between planners, decorators, venues, and production vendors.\n\nWhile the brand had established recognition in social and wedding segments, the corporate events category required a different strategic orientation — one centered around reliability, brand alignment, and operational precision.\n\nThe objective was to position DNK not merely as an event stylist, but as an experiential partner capable of supporting business-driven event objectives.'
      },
      {
        type: 'section',
        title: 'THE CHALLENGE',
        text: 'Corporate experiential markets present unique structural constraints:\n\n• decision-making processes involve multiple stakeholders\n• expectations are aligned with brand identity rather than personal aesthetics\n• timelines are often compressed with high execution accountability\n• service providers must balance creativity with operational predictability\n• long-term partnerships require trust-building beyond single-event delivery\n\nWithout a structured positioning model, entry into corporate ecosystems can remain limited and opportunistic.\n\nDNK required a framework capable of translating creative strengths into business-aligned experiential solutions.'
      },
      {
        type: 'section',
        title: 'STRATEGIC LENS',
        text: 'The engagement reframed corporate events as a brand infrastructure opportunity, rather than isolated execution engagements.\n\nKey strategic considerations included:\n\n• aligning event design with organizational brand narratives\n• positioning experiential services as extensions of business communication strategies\n• structuring operational workflows to support predictable delivery standards\n• developing visual storytelling systems suited to professional environments\n• enabling repeat engagement models through partnership-based positioning\n\nThis allowed DNK to evolve from vendor perception to strategic collaborator.'
      },
      {
        type: 'section',
        title: 'INTERVENTION',
        text: 'Transformation was structured across integrated strategic layers:\n\n1. Corporate Brand Alignment Framework: Ensuring event aesthetics and spatial design reflected client brand identities.\n\n2. Operational Reliability Systems: Designing workflows that support consistency, accountability, and timeline precision.\n\n3. Experiential Communication Design: Positioning events as environments that reinforce organizational messaging.\n\n4. Partnership Development Model: Structuring engagement pathways that encourage repeat collaboration.\n\n5. Portfolio Diversification Strategy: Expanding DNK’s visual authority beyond social celebrations into professional ecosystems.'
      },
      {
        type: 'section',
        title: 'EXECUTION PHASE',
        text: 'Initial implementation focused on activating high-impact corporate event formats:\n\n• brand launches and activation events\n• networking and professional engagement gatherings\n• corporate celebration and recognition programs\n• conference styling and experiential environments\n• seasonal organizational events\n\nExecution emphasized structured planning, aesthetic consistency, and stakeholder communication clarity.\n\nThis phase validated DNK’s ability to operate within business-driven experiential environments.'
      },
      {
        type: 'section',
        title: 'KEY MILESTONE',
        text: 'The corporate positioning initiative demonstrated early validation through:\n\n• increased inquiries from business-oriented client segments\n• improved repeat engagement potential within organizational networks\n• enhanced perception of operational credibility\n• diversification of revenue streams beyond seasonal consumer demand\n• stronger positioning within regional professional ecosystems\n\nThese indicators confirmed corporate events as a strategic growth vertical.'
      },
      {
        type: 'section',
        title: 'LEARNINGS',
        text: 'Early observations highlight:\n\n• corporate clients prioritize reliability over aesthetic experimentation\n• brand alignment significantly influences partnership continuity\n• experiential environments enhance business communication effectiveness\n• structured workflows improve stakeholder confidence\n• portfolio diversification strengthens long-term brand resilience\n\nThese learnings contribute to refining experiential growth system models.'
      },
      {
        type: 'section',
        title: 'FUTURE POTENTIAL',
        text: 'The corporate events initiative provides a blueprint for:\n\n• service brand integration within B2B experiential markets\n• partnership-led growth architectures\n• experiential branding ecosystems\n• regional authority positioning frameworks\n• scalable operational design methodologies\n\nThe model holds relevance for service providers seeking to expand beyond consumer-focused markets.'
      },
      {
        type: 'section',
        title: 'STRATEGIC SIGNIFICANCE',
        text: 'This engagement demonstrates how experiential service brands can transition into business ecosystems through structured positioning and operational credibility.\n\nBy aligning creativity with reliability, local brands can achieve:\n\n• predictable engagement cycles\n• stronger partnership networks\n• diversified revenue structures\n• sustainable market positioning\n\nDNK’s corporate events initiative reflects this transformation pathway.'
      },
      {
        type: 'section',
        title: 'CLOSING',
        text: 'In professional ecosystems, experience design becomes a form of business communication.\n\nDNK Glam Events continues to evolve as an experiential partner capable of supporting both emotional and organizational event objectives.'
      }
    ],
    stats: [
      { label: 'Reliability', value: 'High', icon: <CheckCircle2 size={24} /> },
      { label: 'Brand Alignment', value: '100%', icon: <Target size={24} /> },
      { label: 'Growth Vertical', value: 'B2B', icon: <TrendingUp size={24} /> }
    ]
  },
  'dnk-event-rentals': {
    title: 'Event Rentals & Styling',
    subtitle: 'DNK Glam Events',
    tagline: 'Designing a Scalable Infrastructure Model for the DMV Experiential Market',
    client: 'DNK Glam Events',
    techCycle: 'Infrastructure Growth Model',
    timeline: '12 Month Optimization',
    image: 'https://images.unsplash.com/photo-1470753937643-efeb931202a9?auto=format&fit=crop&q=80&w=1200',
    content: [
      {
        type: 'section',
        title: 'CONTEXT',
        text: 'The DMV region presents a uniquely complex experiential services landscape, characterized by diverse venue typologies, multicultural celebration formats, and fluctuating demand patterns across seasonal cycles.\n\nWithin this environment, event rentals serve as a foundational operational layer supporting both social and corporate experiential ecosystems.\n\nDNK Glam Events possessed a curated inventory and styling capability, yet lacked a structured framework to position rentals as a scalable growth engine.\n\nThe objective was to transform rentals from a supporting function into a strategically integrated revenue infrastructure.'
      },
      {
        type: 'section',
        title: 'THE CHALLENGE',
        text: 'Rental-based service models in the DMV face multiple structural constraints:\n\n• venue diversity requiring adaptable styling solutions\n• logistical complexity across multiple regional jurisdictions\n• fluctuating inventory utilization driven by seasonal demand cycles\n• fragmented vendor ecosystems affecting operational efficiency\n• pricing competition within mid-market rental providers\n\nWithout a structured positioning approach, rental services risk being perceived as commodity offerings rather than experience-enhancing assets.\n\nDNK required a framework capable of aligning rental operations with broader experiential positioning strategies.'
      },
      {
        type: 'section',
        title: 'STRATEGIC LENS',
        text: 'The engagement reframed rentals as a scalable experiential infrastructure system rather than a transactional service layer.\n\nKey strategic considerations included:\n\n• designing modular styling ecosystems adaptable to varied DMV venues\n• integrating rentals into experience-led event narratives\n• optimizing inventory utilization across multiple event categories\n• positioning rentals as visual authority assets within digital ecosystems\n• enabling predictable revenue cycles through structured demand planning\n\nThis allowed rentals to evolve into a central operational growth pillar.'
      },
      {
        type: 'section',
        title: 'INTERVENTION',
        text: 'Transformation was structured across interconnected strategic components:\n\n1. Modular Styling Architecture: Developing adaptable design modules suitable for diverse venue environments across Maryland, DC, and Northern Virginia.\n\n2. Inventory Utilization Optimization: Structuring inventory deployment strategies to reduce idle capacity and improve operational efficiency.\n\n3. Visual Authority Integration: Positioning rental installations as key visual storytelling assets within brand content ecosystems.\n\n4. Logistics Coordination Framework: Designing processes to manage regional transportation, setup variability, and venue-specific constraints.\n\n5. Revenue Predictability Model: Aligning rental demand patterns with broader seasonal experiential planning.'
      },
      {
        type: 'section',
        title: 'EXECUTION PHASE',
        text: 'Initial implementation focused on integrating rental assets across multiple experiential formats:\n\n• weddings and luxury celebrations\n• corporate event environments\n• social milestone celebrations\n• cultural and community gatherings\n• seasonal installations\n\nExecution emphasized consistency in visual styling, operational adaptability, and content capture integration.\n\nThis phase validated the potential of rental infrastructure as a scalable revenue component.'
      },
      {
        type: 'section',
        title: 'KEY MILESTONE',
        text: 'The rental positioning initiative demonstrated early validation through:\n\n• improved inventory utilization rates across event categories\n• enhanced perception of design authority through curated installations\n• increased cross-service integration opportunities\n• strengthened operational presence within regional venue networks\n• diversification of revenue streams beyond event-specific engagements\n\nThese outcomes reinforced rentals as a strategic growth infrastructure.'
      },
      {
        type: 'section',
        title: 'LEARNINGS',
        text: 'Early insights from the engagement indicate:\n\n• modular design frameworks enhance operational scalability\n• inventory visibility supports stronger brand positioning\n• regional logistics planning significantly impacts service efficiency\n• visual installations drive organic demand awareness\n• rental ecosystems benefit from integration with broader experiential narratives\n\nThese learnings inform scalable infrastructure development models.'
      },
      {
        type: 'section',
        title: 'FUTURE POTENTIAL',
        text: 'The DMV rental infrastructure model provides strategic implications for:\n\n• experiential service scalability within multi-venue regional markets\n• inventory-driven growth architectures\n• hybrid event environment design frameworks\n• integrated content-commerce ecosystems\n• regional authority positioning industries\n\nThe model holds relevance for service providers operating within complex metropolitan ecosystems.'
      },
      {
        type: 'section',
        title: 'STRATEGIC SIGNIFICANCE',
        text: 'This engagement demonstrates how rental services can evolve from operational support functions into core growth infrastructure components.\n\nBy aligning design, logistics, and demand planning, local experiential brands can achieve:\n\n• predictable utilization cycles\n• stronger venue ecosystem integration\n• scalable operational models\n• enhanced regional market authority\n\nDNK’s rental initiative reflects this transformation pathway.'
      },
      {
        type: 'section',
        title: 'CLOSING',
        text: 'In multi-venue metropolitan markets, infrastructure defines scalability.\n\nDNK Glam Events continues to evolve its rental ecosystem as a foundational pillar within its broader experiential growth strategy.'
      }
    ],
    stats: [
      { label: 'Utilization', value: '85%', icon: <Gauge size={24} /> },
      { label: 'Market Reach', value: 'DMV', icon: <Globe size={24} /> },
      { label: 'Scalability', value: 'High', icon: <Zap size={24} /> }
    ]
  },
  'dnk-balloon-installations': {
    title: 'Balloon Installations',
    subtitle: 'DNK Glam Events',
    tagline: 'Leveraging Visual Virality to Build Demand Acceleration Systems in the DMV Market',
    client: 'DNK Glam Events',
    techCycle: 'Visual Demand Engine',
    timeline: '4 Month Launch',
    image: 'https://images.unsplash.com/photo-1530103043960-ef38714abb15?auto=format&fit=crop&q=80&w=1200',
    content: [
      {
        type: 'section',
        title: 'CONTEXT',
        text: 'Within the DMV experiential services landscape, visually driven celebration formats play a significant role in shaping brand discoverability and consumer decision-making.\n\nBalloon installations have evolved from decorative elements into high-impact visual experiences that influence event aesthetics, social media engagement, and brand perception.\n\nWhile DNK Glam Events possessed strong design capabilities in balloon styling, the segment had not been structured as a strategic growth lever.\n\nThe objective was to position balloon installations as a demand acceleration mechanism within the regional experiential ecosystem.'
      },
      {
        type: 'section',
        title: 'THE CHALLENGE',
        text: 'Balloon-based experiential services face structural limitations when approached purely as decorative offerings:\n\n• high competition within entry-level event styling markets\n• perception of balloon installations as low-value services\n• limited differentiation across local providers\n• dependence on short decision cycles\n• inconsistent integration with broader brand positioning strategies\n\nWithout strategic positioning, balloon services risk becoming operationally intensive with limited long-term brand impact.\n\nDNK required a framework that would transform balloon installations into a visual authority driver.'
      },
      {
        type: 'section',
        title: 'STRATEGIC LENS',
        text: 'The engagement reframed balloon installations as a visual demand generation infrastructure, rather than a standalone styling service.\n\nKey strategic considerations included:\n\n• designing installations optimized for digital shareability and visual recall\n• positioning balloon experiences as entry points into the DNK service ecosystem\n• integrating balloon aesthetics with floral and spatial design narratives\n• enabling high-frequency content production aligned with local event culture\n• structuring balloon services as community-driven brand visibility assets\n\nThis allowed the segment to evolve into a scalable brand awareness engine.'
      },
      {
        type: 'section',
        title: 'INTERVENTION',
        text: 'Transformation was structured across multiple strategic layers:\n\n1. Visual Differentiation Framework: Developing signature balloon styling approaches that align with DNK’s broader design language.\n\n2. Content Amplification System: Structuring installations to function as high-shareability visual environments.\n\n3. Service Integration Model: Positioning balloon offerings as gateways to higher-value experiential services.\n\n4. Rapid Deployment Capability: Designing operational workflows suited to short decision timelines common in social celebrations.\n\n5. Community Visibility Strategy: Embedding installations within local event ecosystems to enhance organic discovery.'
      },
      {
        type: 'section',
        title: 'EXECUTION PHASE',
        text: 'Initial implementation focused on activating high-frequency celebration formats across the DMV region:\n\n• milestone birthdays\n• bridal and baby celebrations\n• proposal environments\n• cultural social gatherings\n• brand and influencer events\n\nExecution emphasized aesthetic consistency, rapid setup adaptability, and visual documentation for digital amplification.\n\nThis phase validated the role of balloon installations in accelerating demand awareness.'
      },
      {
        type: 'section',
        title: 'KEY MILESTONE',
        text: 'The balloon installations initiative demonstrated early validation through:\n\n• increased social media engagement driven by visually distinctive setups\n• improved inquiry flow from digitally discovered event environments\n• enhanced cross-service conversion into floral and rental offerings\n• stronger brand familiarity within local community networks\n• portfolio diversification across celebration categories\n\nThese indicators confirmed balloon services as a strategic visibility lever.'
      },
      {
        type: 'section',
        title: 'LEARNINGS',
        text: 'Early insights highlight:\n\n• visually optimized installations significantly enhance organic brand discovery\n• entry-level services influence long-term client relationship pathways\n• modular styling systems improve operational scalability\n• community-driven celebration formats accelerate referral velocity\n• content ecosystems amplify experiential brand authority\n\nThese learnings inform future demand generation frameworks.'
      },
      {
        type: 'section',
        title: 'FUTURE POTENTIAL',
        text: 'The balloon installations initiative provides a blueprint for:\n\n• visual-first experiential growth models\n• content-driven service market expansion strategies\n• community-centric brand awareness architectures\n• creator + experiential industry convergence frameworks\n• scalable entry-point service design methodologies\n\nThe model holds relevance for service providers operating within digitally influenced markets.'
      },
      {
        type: 'section',
        title: 'STRATEGIC SIGNIFICANCE',
        text: 'This engagement demonstrates how visually driven service categories can evolve into foundational demand generation systems.\n\nBy aligning aesthetics with content ecosystems, experiential brands can achieve:\n\n• accelerated discovery\n• stronger brand recall\n• increased client acquisition velocity\n• integrated service ecosystem growth\n\nDNK’s balloon initiative reflects this transformation pathway.'
      },
      {
        type: 'section',
        title: 'CLOSING',
        text: 'In digitally influenced celebration markets, visibility drives opportunity.\n\nDNK Glam Events continues to leverage balloon installations as a strategic catalyst within its broader experiential growth architecture.'
      }
    ],
    stats: [
      { label: 'Virality', value: 'High', icon: <Share2 size={24} /> },
      { label: 'Discovery', value: 'Organic', icon: <Search size={24} /> },
      { label: 'Conversion', value: '2.5x', icon: <TrendingUp size={24} /> }
    ]
  },
  'dnk-social-celebrations': {
    title: 'Social & Special Celebrations',
    subtitle: 'DNK Glam Events',
    tagline: 'Designing a Recurring Micro-Event Demand Engine within the DMV Experiential Market',
    client: 'DNK Glam Events',
    techCycle: 'Recurring Demand Engine',
    timeline: 'Ongoing Optimization',
    image: 'https://images.unsplash.com/photo-1513151233558-d860c5398176?auto=format&fit=crop&q=80&w=1200',
    content: [
      {
        type: 'section',
        title: 'CONTEXT',
        text: 'The DMV region presents a uniquely dynamic celebration landscape characterized by frequent small-scale social gatherings, multicultural milestone traditions, and a strong preference for home-hosted experiential events.\n\nUnlike large-format weddings or corporate events, social celebrations occur with greater frequency and lower planning lead times, creating an opportunity for experiential service brands to build recurring revenue cycles.\n\nWhile DNK Glam Events possessed creative execution capabilities in styling social celebrations, the segment lacked a structured framework to support predictable demand generation.\n\nThe objective was to transform special events into a strategic growth funnel capable of sustaining continuous brand visibility and client acquisition.'
      },
      {
        type: 'section',
        title: 'THE CHALLENGE',
        text: 'Social celebration markets within the DMV exhibit several structural characteristics:\n\n• high frequency of small-scale events across diverse cultural communities\n• shorter decision timelines driven by emotional and family-centered planning\n• pricing sensitivity balanced with aesthetic expectations\n• fragmented discovery patterns across digital and referral networks\n• limited lifecycle structuring between small events and premium services\n\nWithout strategic alignment, social celebrations risk remaining transactional engagements rather than long-term brand relationship drivers.\n\nDNK required a model that could convert micro-event demand into structured growth momentum.'
      },
      {
        type: 'section',
        title: 'STRATEGIC LENS',
        text: 'The engagement reframed social celebrations as a recurring demand infrastructure, rather than an operational service category.\n\nKey strategic considerations included:\n\n• positioning special events as entry-point experiences into the DNK ecosystem\n• designing visually distinctive celebration formats optimized for digital shareability\n• structuring modular styling systems suited to high-frequency bookings\n• enabling community-based brand discovery through experiential visibility\n• mapping client lifecycle transitions from social celebrations to premium services\n\nThis approach positioned small events as a foundational acquisition engine.'
      },
      {
        type: 'section',
        title: 'INTERVENTION',
        text: 'Transformation was structured across integrated strategic layers:\n\n1. Micro-Celebration Experience Framework: Designing adaptable celebration environments suitable for homes, private venues, and community spaces.\n\n2. Visual Virality Integration: Aligning balloon, floral, and styling installations with content-driven brand visibility strategies.\n\n3. Modular Operational Systems: Developing scalable design modules to support rapid deployment across varied event formats.\n\n4. Community Engagement Architecture: Embedding DNK within local celebration ecosystems to strengthen referral-driven demand.\n\n5. Client Lifecycle Structuring: Creating pathways that transition social celebration clients into higher-value experiential services.'
      },
      {
        type: 'section',
        title: 'EXECUTION PHASE',
        text: 'Initial implementation focused on activating high-frequency celebration categories across Maryland, DC, and Northern Virginia:\n\n• milestone birthday celebrations\n• bridal showers and engagement gatherings\n• baby showers and naming ceremonies\n• cultural family celebrations\n• proposal environments\n• graduation and achievement events\n• holiday and seasonal gatherings\n\nExecution emphasized visual consistency, rapid response capabilities, and integrated content capture.\n\nThis phase validated the viability of micro-events as a recurring demand mechanism.'
      },
      {
        type: 'section',
        title: 'KEY MILESTONE',
        text: 'The social celebrations initiative demonstrated early validation through:\n\n• increased booking frequency across smaller event formats\n• stronger brand visibility within localized community networks\n• improved referral velocity driven by visually shareable experiences\n• enhanced cross-service conversion into weddings and premium celebrations\n• more balanced revenue cycles outside traditional event seasons\n\nThese outcomes confirmed micro-events as a strategic growth pillar.'
      },
      {
        type: 'section',
        title: 'LEARNINGS',
        text: 'Early insights from the engagement indicate:\n\n• high-frequency social celebrations create sustainable demand momentum\n• visually distinctive environments significantly enhance organic discovery\n• modular design systems improve operational scalability\n• community trust accelerates repeat engagement patterns\n• lifecycle structuring increases long-term client value\n\nThese learnings inform scalable experiential demand frameworks.'
      },
      {
        type: 'section',
        title: 'FUTURE POTENTIAL',
        text: 'The DMV micro-event model offers strategic implications for:\n\n• recurring revenue architectures within experiential service industries\n• community-driven brand growth ecosystems\n• visual content-led demand generation strategies\n• celebration lifecycle marketing frameworks\n• scalable service design for high-frequency event categories\n\nThe model holds relevance for metropolitan experiential markets globally.'
      },
      {
        type: 'section',
        title: 'STRATEGIC SIGNIFICANCE',
        text: 'This engagement demonstrates how small-scale celebrations can evolve into foundational growth engines for experiential brands.\n\nBy aligning visual storytelling, operational scalability, and community positioning, local service providers can achieve:\n\n• predictable demand cycles\n• stronger client relationship networks\n• enhanced digital discoverability\n• sustainable revenue diversification\n\nDNK’s social celebrations initiative reflects this transformation pathway.'
      },
      {
        type: 'section',
        title: 'CLOSING',
        text: 'In dense metropolitan celebration cultures, growth emerges through frequency rather than scale.\n\nDNK Glam Events continues to evolve its social celebrations segment as a recurring demand engine within its broader experiential growth ecosystem.'
      }
    ],
    stats: [
      { label: 'Booking Frequency', value: 'High', icon: <Clock size={24} /> },
      { label: 'Referral Velocity', value: '3x', icon: <Zap size={24} /> },
      { label: 'Client Lifecycle', value: 'Integrated', icon: <Target size={24} /> }
    ]
  },
  'dnk-floral-studio': {
    title: 'Floral Studio',
    subtitle: 'DNK Glam Events',
    tagline: 'Designing a Seasonal Growth Infrastructure for a Local Event Brand',
    client: 'DNK Glam Events',
    techCycle: 'Growth Infrastructure',
    timeline: '12 Month Strategy',
    image: 'https://images.unsplash.com/photo-1526047932273-341f2a7631f9?auto=format&fit=crop&q=80&w=1200',
    content: [
      {
        type: 'section',
        title: 'CONTEXT',
        text: 'DNK Glam Events is an established event and décor brand operating within the Maryland regional market.\n\nWhile the brand possessed strong creative capabilities and local recognition, growth remained largely dependent on referrals and seasonal spikes in demand.\n\nThis limited scalability and made revenue cycles unpredictable.\n\nThe objective was not simply to increase visibility — but to design a structured growth infrastructure capable of supporting long-term market positioning.'
      },
      {
        type: 'section',
        title: 'THE CHALLENGE',
        text: 'Local experiential brands often face structural growth barriers:\n\n• demand fluctuations tied to event seasons\n• low digital positioning clarity\n• limited lead generation systems\n• absence of performance visibility\n• reliance on organic word-of-mouth acquisition\n\nWithout strategic intervention, scaling beyond local networks becomes difficult.'
      },
      {
        type: 'section',
        title: 'STRATEGIC LENS',
        text: 'The engagement reframed the floral studio as a seasonal growth engine rather than a reactive service.\n\nKey strategic focus areas included:\n\n• structuring seasonal product ecosystems\n• developing digital authority through visual storytelling\n• implementing performance-based lead generation systems\n• designing operational workflows for high-demand cycles\n• establishing data-driven visibility into revenue performance'
      },
      {
        type: 'section',
        title: 'INTERVENTION',
        text: 'The transformation was structured across four strategic pillars:\n\n1. Digital Positioning Architecture: Redefining the brand’s online presence to reflect premium authority.\n\n2. Demand Generation Infrastructure: Implementing systems to capture and nurture leads across seasonal peaks.\n\n3. Operational Scalability Framework: Designing workflows that allow for rapid scaling during high-demand periods.\n\n4. Performance Visibility Systems: Establishing dashboards to track growth, acquisition costs, and revenue predictability.'
      },
      {
        type: 'section',
        title: 'EXECUTION PHASE',
        text: 'Initial implementation focused on stabilizing revenue cycles through:\n\n• launching seasonal floral collections with structured marketing support\n• optimizing digital touchpoints for conversion and brand trust\n• integrating automated lead management workflows\n• capturing high-quality visual assets to reinforce market positioning\n\nExecution emphasized the transition from organic word-of-mouth to systematic acquisition.'
      },
      {
        type: 'section',
        title: 'KEY MILESTONE',
        text: 'The growth infrastructure demonstrated early validation through:\n\n• 45% increase in seasonal revenue compared to previous cycles\n• 3x growth in qualified lead generation\n• improved brand visibility within target regional segments\n• enhanced operational efficiency during peak demand periods\n• stronger data-driven decision-making capabilities'
      },
      {
        type: 'section',
        title: 'LEARNINGS',
        text: 'Key insights from the engagement include:\n\n• structural growth requires moving beyond referral dependence\n• digital authority is a prerequisite for scaling local brands\n• performance visibility reduces the risk of seasonal demand fluctuations\n• systematic acquisition models provide long-term revenue predictability'
      },
      {
        type: 'section',
        title: 'FUTURE POTENTIAL',
        text: 'The DNK growth model offers a blueprint for local experiential brands seeking to scale.\n\nFuture phases will focus on:\n\n• expanding the product ecosystem into new regional markets\n• deepening automation within the lead generation funnel\n• leveraging data to optimize seasonal inventory and staffing'
      }
    ],
    stats: [
      { label: 'Growth', value: '45%', icon: <TrendingUp size={24} /> },
      { label: 'Visibility', value: 'High', icon: <Globe size={24} /> },
      { label: 'Leads', value: '3x', icon: <Target size={24} /> }
    ]
  },
  'luxe-wellness': {
    title: 'Growth Systems',
    subtitle: 'Luxe Wellness',
    tagline: 'Scaling brand trust through human-guided automation.',
    client: 'Luxe Wellness',
    techCycle: 'Conversion Optimization',
    timeline: '4 Month Project',
    image: 'https://picsum.photos/seed/wellness/1200/800',
    content: [
      {
        type: 'section',
        title: 'CONTEXT',
        text: 'Luxe Wellness was struggling with a robotic, impersonal digital presence that failed to convert high-value leads. Their existing automation felt cold and disconnected from their premium brand promise.'
      },
      {
        type: 'section',
        title: 'THE CHALLENGE',
        text: 'The primary challenge was to maintain operational efficiency while injecting human warmth and trust into the digital journey. We needed to bridge the gap between automated scale and personal connection.'
      }
    ],
    stats: [
      { label: 'Conversion', value: '24%', icon: <TrendingUp size={24} /> },
      { label: 'Trust Score', value: 'High', icon: <Sparkles size={24} /> },
      { label: 'Automation', value: 'Optimized', icon: <Cpu size={24} /> }
    ]
  },
  'aurora-fintech': {
    title: 'Conversion Web',
    subtitle: 'Aurora FinTech',
    tagline: 'Designing authority for the future of finance.',
    client: 'Aurora FinTech',
    techCycle: 'Authority Architecture',
    timeline: '6 Month Project',
    image: 'https://picsum.photos/seed/finance/1200/800',
    content: [
      {
        type: 'section',
        title: 'CONTEXT',
        text: 'In the volatile world of fintech, trust is the ultimate currency. Aurora FinTech needed a digital home that radiated stability, authority, and innovation.'
      },
      {
        type: 'section',
        title: 'THE CHALLENGE',
        text: 'The challenge was to translate complex financial products into an accessible, high-authority narrative that would resonate with both institutional and retail investors.'
      }
    ],
    stats: [
      { label: 'Authority', value: 'Leader', icon: <Target size={24} /> },
      { label: 'Engagement', value: '3.5x', icon: <MousePointer2 size={24} /> },
      { label: 'Trust Index', value: '98%', icon: <CheckCircle2 size={24} /> }
    ]
  },
  'ethos-fashion': {
    title: 'Brand Authority',
    subtitle: 'Ethos Fashion',
    tagline: 'Designing a high-authority digital home for sustainable fashion.',
    client: 'Ethos Fashion',
    techCycle: 'Sustainable Growth',
    timeline: '5 Month Project',
    image: 'https://picsum.photos/seed/fashion/1200/800',
    content: [
      {
        type: 'section',
        title: 'CONTEXT',
        text: 'Ethos Fashion is a sustainable brand that needed to move beyond its niche and establish itself as a mainstream authority in the luxury fashion market.'
      },
      {
        type: 'section',
        title: 'THE CHALLENGE',
        text: 'The challenge was to communicate sustainability without sacrificing the luxury aesthetic, creating a digital experience that felt both ethical and exclusive.'
      }
    ],
    stats: [
      { label: 'Market Share', value: '+12%', icon: <TrendingUp size={24} /> },
      { label: 'Brand Recall', value: 'High', icon: <Sparkles size={24} /> },
      { label: 'Sustainability', value: 'Verified', icon: <CheckCircle2 size={24} /> }
    ]
  },
  'nexa-ai': {
    title: 'Product Narrative',
    subtitle: 'Nexa AI Platform',
    tagline: 'Translating complex AI capabilities into human-first value.',
    client: 'Nexa AI',
    techCycle: 'AI Narrative Design',
    timeline: '7 Month Project',
    image: 'https://picsum.photos/seed/tech/1200/800',
    content: [
      {
        type: 'section',
        title: 'CONTEXT',
        text: 'Nexa AI had a powerful platform but struggled to explain its value to non-technical decision-makers. They needed a narrative that focused on outcomes rather than algorithms.'
      },
      {
        type: 'section',
        title: 'THE CHALLENGE',
        text: 'The challenge was to humanize the AI experience, making complex technology feel like a supportive partner rather than a black box.'
      }
    ],
    stats: [
      { label: 'Clarity', value: '95%', icon: <Search size={24} /> },
      { label: 'Adoption', value: '2x', icon: <TrendingUp size={24} /> },
      { label: 'Trust', value: 'High', icon: <Bot size={24} /> }
    ]
  }
};

const CaseStudyDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const study = id ? CASE_STUDY_DATA[id] : null;

  if (!study) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#FFF5F7]">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-[#2D3134] mb-4">Case Study Not Found</h2>
          <Link to="/portfolio/case-studies" className="text-[#E91E63] font-black uppercase tracking-[3px]">Back to Case Studies</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-[#FFF5F7] min-h-screen pt-40 pb-24 relative overflow-hidden">
      {/* Background Large Text */}
      <div className="absolute inset-0 flex items-center justify-center z-0 select-none pointer-events-none">
        <h1 className="text-[30vw] font-black text-pink-100 leading-none tracking-tighter opacity-30">rika</h1>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
        >
          <Link to="/portfolio/case-studies" className="inline-flex items-center gap-2 text-[#E91E63] text-[10px] uppercase font-black tracking-[3px] mb-12 hover:-translate-x-2 transition-transform">
            <ArrowLeft size={14} /> All Case Studies
          </Link>
        </motion.div>

        {/* Hero Section */}
        <div className="max-w-5xl mb-24">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-4 mb-12"
          >
            <span className="text-[#E91E63] text-[10px] uppercase tracking-[10px] font-black block">{study.subtitle}</span>
            <h1 className="text-5xl md:text-7xl font-bold text-[#2D3134] tracking-tighter leading-none">{study.title}</h1>
            <p className="text-2xl text-[#2D3134]/60 font-light italic">{study.tagline}</p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="flex flex-wrap gap-12 border-y border-pink-100 py-10"
          >
             <div>
                <span className="text-[9px] uppercase tracking-[4px] font-black text-gray-400 block mb-2">Client</span>
                <span className="text-lg text-[#2D3134] font-medium">{study.client}</span>
             </div>
             <div>
                <span className="text-[9px] uppercase tracking-[4px] font-black text-gray-400 block mb-2">Tech Cycle</span>
                <span className="text-lg text-[#2D3134] font-medium">{study.techCycle}</span>
             </div>
             <div>
                <span className="text-[9px] uppercase tracking-[4px] font-black text-gray-400 block mb-2">Timeline</span>
                <span className="text-lg text-[#2D3134] font-medium">{study.timeline}</span>
             </div>
          </motion.div>
        </div>

        {/* Main Content Sections */}
        <div className="max-w-4xl space-y-32 mb-40">
          {study.content.map((section: any, idx: number) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div className="flex items-center gap-4">
                <div className="w-8 h-[1px] bg-[#E91E63]"></div>
                <h2 className="text-[#E91E63] text-[10px] uppercase tracking-[8px] font-black">{section.title}</h2>
              </div>
              
              <div className="space-y-6">
                {section.text.split('\n\n').map((paragraph: string, pIdx: number) => (
                  <p key={pIdx} className="text-gray-600 font-light leading-relaxed text-xl whitespace-pre-line">
                    {paragraph}
                  </p>
                ))}
              </div>

              {section.image && (
                <div className="rounded-[40px] overflow-hidden shadow-2xl border border-pink-100">
                  <img 
                    src={section.image} 
                    alt={section.title} 
                    className="w-full h-auto object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Results / Stats */}
        <div className="mb-40">
           <div className="text-center mb-20">
              <span className="text-[#E91E63] text-[10px] uppercase tracking-[10px] font-black block mb-6">Outcome</span>
           </div>
           
           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {study.stats.map((stat: any, i: number) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-white p-12 rounded-[40px] text-center border border-rose-100 shadow-sm transition-transform hover:-translate-y-2"
                >
                   <div className="w-16 h-16 bg-[#FFF5F8] rounded-2xl flex items-center justify-center text-[#E91E63] mx-auto mb-8 shadow-md">
                      {stat.icon}
                   </div>
                   <span className="text-5xl font-bold text-[#2D3134] block mb-4">{stat.value}</span>
                   <span className="text-[10px] uppercase tracking-[4px] font-black text-gray-400">{stat.label}</span>
                </motion.div>
              ))}
           </div>
        </div>

        {/* CTA */}
        <div className="bg-[#2D3134] text-white rounded-[60px] p-12 md:p-24 text-center relative overflow-hidden">
           <div className="absolute inset-0 bg-gradient-to-tr from-[#E91E63]/10 to-transparent"></div>
           <div className="relative z-10">
              <h2 className="text-3xl md:text-5xl font-bold mb-12 italic">Ready to architect your <br /> <span className="text-[#E91E63]">next transformation?</span></h2>
              <Link to="/contact" className="inline-flex items-center gap-4 bg-white text-[#2D3134] px-16 py-6 rounded-full text-[11px] uppercase font-black tracking-[5px] hover:bg-[#E91E63] hover:text-white transition-all shadow-xl">
                Start Your Evolution <Sparkles size={16} />
              </Link>
           </div>
        </div>
      </div>
    </div>
  );
};

export default CaseStudyDetail;
