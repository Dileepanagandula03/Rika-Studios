
import React from 'react';

interface LogoProps {
  className?: string;
  color?: string;
  light?: boolean;
  layout?: 'stacked' | 'horizontal';
}

const Logo: React.FC<LogoProps> = ({ 
  className = "w-16 h-16", 
  color = "#E91E63", 
  light = false,
  layout = 'stacked'
}) => {
  const textColor = light ? 'text-white' : 'text-gray-900';
  const displayColor = light ? '#E91E63' : color;

  const Icon = (
    <svg viewBox="0 0 200 200" className="w-full h-full drop-shadow-sm" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Ornate Mandala Filigree - Inspired by user image */}
      <g stroke={displayColor} strokeWidth="2" strokeLinecap="round">
        {/* Top & Bottom Main Swirls */}
        <path d="M100 40C120 20 150 20 150 50C150 80 120 100 100 100" />
        <path d="M100 40C80 20 50 20 50 50C50 80 80 100 100 100" />
        <path d="M100 160C120 180 150 180 150 150C150 120 120 100 100 100" />
        <path d="M100 160C80 180 50 180 50 150C50 120 80 100 100 100" />
        
        {/* Side Swirls (The "logo part at side") */}
        <path d="M40 100Q20 100 20 80Q20 50 50 50Q80 50 80 80Q80 100 60 100" />
        <path d="M160 100Q180 100 180 80Q180 50 150 50Q120 50 120 80Q120 100 140 100" />
        
        {/* Inner Floral Accents */}
        <circle cx="100" cy="100" r="30" strokeOpacity="0.2" strokeDasharray="4 4" />
      </g>

      {/* Central Butterfly Icon */}
      <g transform="translate(85, 85) scale(1.2)">
        <path d="M12 10C10 7 6 7 6 10C6 12 9 13 12 11.5C15 13 18 12 18 10C18 7 14 7 12 10Z" fill={displayColor} />
        <path d="M12 11.5V14" stroke={displayColor} strokeWidth="1" />
        <path d="M12 11.5L9 16" stroke={displayColor} strokeWidth="1.5" />
        <path d="M12 11.5L15 16" stroke={displayColor} strokeWidth="1.5" />
        <path d="M11 8Q10 5 8 4" stroke={displayColor} strokeWidth="0.8" />
        <path d="M13 8Q14 5 16 4" stroke={displayColor} strokeWidth="0.8" />
      </g>
    </svg>
  );

  if (layout === 'horizontal') {
    return (
      <div className="flex items-center gap-3">
        <div className={className}>{Icon}</div>
        <div className="flex flex-col -mt-1">
          <span className={`text-xl md:text-2xl font-light tracking-[0.4em] uppercase leading-none ${textColor}`}>RIKA</span>
          <span className="text-[7px] md:text-[8px] tracking-[0.3em] uppercase text-[#E91E63] font-bold mt-1">Gayar Studios</span>
        </div>
      </div>
    );
  }

  return (
    <div className={`flex flex-col items-center justify-center text-center`}>
      <div className={className}>{Icon}</div>
      <div className="mt-2 flex flex-col items-center">
        <span className={`text-2xl font-light tracking-[0.5em] uppercase leading-none ${textColor}`}>RIKA</span>
        <span className="text-[9px] tracking-[0.4em] uppercase text-[#E91E63] font-bold mt-2">Gayar Studios</span>
      </div>
    </div>
  );
};

export default Logo;
