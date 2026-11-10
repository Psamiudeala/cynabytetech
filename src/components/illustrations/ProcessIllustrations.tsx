import React from 'react';

interface ProcessProps {
  step: '01' | '02' | '03' | '04';
  className?: string;
}

export const ProcessIllustration: React.FC<ProcessProps> = ({ step, className = 'w-full h-auto' }) => {
  if (step === '01') {
    // Discovery
    return (
      <svg viewBox="0 0 200 140" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
        <rect x="10" y="10" width="180" height="120" rx="12" fill="#FAFAFA" stroke="#E4E4E7" strokeWidth="1.5" />
        <circle cx="85" cy="65" r="34" stroke="#000000" strokeWidth="2" strokeDasharray="4 4" />
        <circle cx="85" cy="65" r="24" fill="#000000" />
        <circle cx="85" cy="65" r="14" fill="#ADF802" />
        {/* Radar scan line */}
        <line x1="85" y1="65" x2="115" y2="45" stroke="#ADF802" strokeWidth="2.5" strokeLinecap="round" />
        {/* Discovered nodes */}
        <circle cx="45" cy="40" r="5" fill="#18181B" />
        <circle cx="130" cy="90" r="6" fill="#ADF802" />
        <circle cx="145" cy="40" r="4" fill="#18181B" />
        <rect x="25" y="102" width="65" height="14" rx="4" fill="#FFFFFF" stroke="#E4E4E7" strokeWidth="1" />
        <text x="32" y="112" fill="#000000" fontSize="7" fontWeight="700">Scope Mapped</text>
      </svg>
    );
  }

  if (step === '02') {
    // Design
    return (
      <svg viewBox="0 0 200 140" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
        <rect x="10" y="10" width="180" height="120" rx="12" fill="#FAFAFA" stroke="#E4E4E7" strokeWidth="1.5" />
        <rect x="25" y="25" width="90" height="70" rx="8" fill="#FFFFFF" stroke="#18181B" strokeWidth="1.5" />
        <rect x="35" y="35" width="40" height="6" rx="3" fill="#000000" />
        <circle cx="80" cy="38" r="2.5" fill="#ADF802" />
        <rect x="35" y="48" width="70" height="4" rx="2" fill="#E4E4E7" />
        <rect x="35" y="56" width="55" height="4" rx="2" fill="#E4E4E7" />
        <rect x="35" y="68" width="30" height="12" rx="4" fill="#ADF802" />
        
        {/* Design system tokens badge */}
        <rect x="125" y="35" width="50" height="60" rx="6" fill="#09090B" />
        <rect x="133" y="45" width="10" height="10" rx="2" fill="#ADF802" />
        <rect x="147" y="45" width="10" height="10" rx="2" fill="#FFFFFF" />
        <rect x="133" y="60" width="10" height="10" rx="2" fill="#3B82F6" />
        <rect x="147" y="60" width="10" height="10" rx="2" fill="#10B981" />
        <text x="130" y="82" fill="#FAFAFA" fontSize="6.5" fontWeight="600">TOKENS</text>

        {/* Alignment ruler */}
        <line x1="25" y1="105" x2="175" y2="105" stroke="#ADF802" strokeWidth="1.5" strokeDasharray="3 3" />
        <text x="75" y="120" fill="#71717A" fontSize="7" fontWeight="600">Pixel-Precision UI</text>
      </svg>
    );
  }

  if (step === '03') {
    // Development
    return (
      <svg viewBox="0 0 200 140" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
        <rect x="10" y="10" width="180" height="120" rx="12" fill="#09090B" stroke="#27272A" strokeWidth="1.5" />
        {/* Terminal Header */}
        <circle cx="25" cy="24" r="3" fill="#EF4444" />
        <circle cx="35" cy="24" r="3" fill="#F59E0B" />
        <circle cx="45" cy="24" r="3" fill="#10B981" />
        <text x="60" y="27" fill="#71717A" fontSize="7" fontFamily="monospace">build.sh</text>
        
        {/* Code commands */}
        <text x="25" y="48" fill="#ADF802" fontSize="8" fontFamily="monospace">$ npm run build:prod</text>
        <text x="25" y="64" fill="#FFFFFF" fontSize="7.5" fontFamily="monospace">&gt; bundling typescript modules...</text>
        <text x="25" y="78" fill="#38BDF8" fontSize="7.5" fontFamily="monospace">&gt; zero bloat, tree-shaking 100%</text>
        
        {/* Success badge */}
        <rect x="25" y="92" width="150" height="24" rx="6" fill="#18181B" stroke="#ADF802" strokeWidth="1" />
        <circle cx="40" cy="104" r="4" fill="#ADF802" />
        <text x="52" y="107" fill="#FAFAFA" fontSize="8" fontWeight="700">COMPILED: 0 ERRORS (0.4s)</text>
      </svg>
    );
  }

  // Launch (04)
  return (
    <svg viewBox="0 0 200 140" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <rect x="10" y="10" width="180" height="120" rx="12" fill="#FAFAFA" stroke="#E4E4E7" strokeWidth="1.5" />
      {/* Rocket Launch Path */}
      <path
        d="M30 110 C 60 110, 100 80, 150 30"
        stroke="#ADF802"
        strokeWidth="3"
        strokeDasharray="4 4"
      />
      {/* Target Release Node */}
      <circle cx="150" cy="30" r="14" fill="#000000" />
      <circle cx="150" cy="30" r="8" fill="#ADF802" />
      
      {/* Stats Cards */}
      <rect x="25" y="30" width="85" height="32" rx="6" fill="#FFFFFF" stroke="#E4E4E7" strokeWidth="1" />
      <text x="35" y="44" fill="#71717A" fontSize="6.5" fontWeight="600">SEO &amp; SPEED</text>
      <text x="35" y="55" fill="#000000" fontSize="9" fontWeight="800">100/100 Vitals</text>

      <rect x="25" y="72" width="115" height="34" rx="6" fill="#000000" />
      <circle cx="38" cy="89" r="4" fill="#ADF802" />
      <text x="48" y="86" fill="#ADF802" fontSize="6.5" fontWeight="700">PRODUCTION DEPLOYED</text>
      <text x="48" y="97" fill="#FFFFFF" fontSize="8" fontWeight="600">Global CDN Live &bull; SSL Secured</text>
    </svg>
  );
};
