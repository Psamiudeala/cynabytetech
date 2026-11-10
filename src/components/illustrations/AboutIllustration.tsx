import React from 'react';

export const AboutIllustration: React.FC<{ className?: string }> = ({ className = 'w-full h-auto' }) => {
  return (
    <div className={`relative ${className}`}>
      <div 
        className="absolute -top-6 -right-6 w-60 h-60 rounded-full opacity-35 blur-3xl pointer-events-none"
        style={{ background: 'radial-gradient(circle, #ADF802 0%, rgba(173,248,2,0) 70%)' }}
      />
      <svg viewBox="0 0 480 360" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto drop-shadow-md">
        <defs>
          <linearGradient id="aboutBg" x1="0" y1="0" x2="480" y2="360" gradientUnits="userSpaceOnUse">
            <stop stopColor="#FAFAFA" />
            <stop offset="1" stopColor="#F4F4F5" />
          </linearGradient>
        </defs>

        {/* Outer Frame */}
        <rect x="20" y="20" width="440" height="320" rx="16" fill="url(#aboutBg)" stroke="#18181B" strokeWidth="1.5" />

        {/* Top Header */}
        <rect x="20" y="20" width="440" height="40" rx="16" fill="#09090B" />
        <circle cx="45" cy="40" r="4" fill="#EF4444" />
        <circle cx="58" cy="40" r="4" fill="#F59E0B" />
        <circle cx="71" cy="40" r="4" fill="#10B981" />
        <text x="95" y="44" fill="#A1A1AA" fontSize="10" fontFamily="monospace">cynabyte.architecture/philosophy</text>

        {/* Center: Bridge Diagram (Complex Software -> Scalable Market Readiness) */}
        {/* Left Pillar: Complex Software Engine */}
        <g transform="translate(45, 85)">
          <rect x="0" y="0" width="160" height="130" rx="10" fill="#FFFFFF" stroke="#E4E4E7" strokeWidth="1.5" />
          <rect x="12" y="16" width="30" height="6" rx="3" fill="#000000" />
          <text x="12" y="42" fill="#000000" fontSize="11" fontWeight="800">Software Logic</text>
          <text x="12" y="58" fill="#71717A" fontSize="8">Full-Stack Core &bull; APIs</text>
          
          <rect x="12" y="72" width="136" height="42" rx="6" fill="#09090B" />
          <text x="22" y="90" fill="#ADF802" fontSize="8" fontFamily="monospace">type Scale = true;</text>
          <text x="22" y="104" fill="#60A5FA" fontSize="8" fontFamily="monospace">const latency = 0;</text>
        </g>

        {/* Center Connecting Bridge Vector */}
        <path
          d="M205 150 C 235 120, 245 120, 275 150"
          stroke="#ADF802"
          strokeWidth="3.5"
          fill="none"
          strokeLinecap="round"
        />
        <circle cx="240" cy="128" r="14" fill="#000000" stroke="#ADF802" strokeWidth="2" />
        <text x="240" y="132" fill="#ADF802" fontSize="9" fontWeight="800" textAnchor="middle">CYNA</text>

        {/* Right Pillar: Scalable Market Readiness */}
        <g transform="translate(275, 85)">
          <rect x="0" y="0" width="160" height="130" rx="10" fill="#FFFFFF" stroke="#ADF802" strokeWidth="2" />
          <rect x="12" y="16" width="30" height="6" rx="3" fill="#ADF802" />
          <text x="12" y="42" fill="#000000" fontSize="11" fontWeight="800">Market Readiness</text>
          <text x="12" y="58" fill="#71717A" fontSize="8">Conversion &bull; SEO &bull; Growth</text>
          
          <rect x="12" y="72" width="136" height="42" rx="6" fill="#F4F4F5" />
          <text x="22" y="92" fill="#000000" fontSize="9" fontWeight="700">Lighthouse: 100%</text>
          <text x="22" y="104" fill="#15803D" fontSize="8" fontWeight="600">&uarr; Measurable Revenue</text>
        </g>

        {/* Bottom Banner: Founder Commitment */}
        <g transform="translate(45, 235)">
          <rect x="0" y="0" width="390" height="80" rx="10" fill="#09090B" />
          <circle cx="35" cy="40" r="18" fill="#18181B" stroke="#ADF802" strokeWidth="2" />
          <text x="35" y="44" fill="#ADF802" fontSize="12" fontWeight="800" textAnchor="middle">SU</text>

          <text x="68" y="34" fill="#FFFFFF" fontSize="11" fontWeight="800">Samuel Udeala</text>
          <text x="68" y="48" fill="#A1A1AA" fontSize="8.5">Founder &amp; Principal Systems Architect</text>
          <text x="68" y="62" fill="#ADF802" fontSize="8" fontWeight="600">&ldquo;We build products that perform as impeccably as they look.&rdquo;</text>

          {/* Verification pill */}
          <rect x="290" y="28" width="85" height="24" rx="6" fill="#18181B" stroke="#27272A" strokeWidth="1" />
          <circle cx="302" cy="40" r="3" fill="#ADF802" />
          <text x="310" y="43" fill="#FAFAFA" fontSize="8" fontWeight="700">VERIFIED ARCH</text>
        </g>
      </svg>
    </div>
  );
};
