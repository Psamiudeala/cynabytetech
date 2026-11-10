import React from 'react';

interface IllustrationProps {
  className?: string;
}

// 1. Web Design & Development Illustration
export const WebDevIllustration: React.FC<IllustrationProps> = ({ className = 'w-full h-auto' }) => (
  <svg viewBox="0 0 320 220" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <defs>
      <linearGradient id="webCardBg" x1="0" y1="0" x2="320" y2="220" gradientUnits="userSpaceOnUse">
        <stop stopColor="#FAFAFA" />
        <stop offset="1" stopColor="#F4F4F5" />
      </linearGradient>
      <linearGradient id="codeGrad" x1="0" y1="0" x2="1" y2="1">
        <stop stopColor="#ADF802" />
        <stop offset="1" stopColor="#84CC16" />
      </linearGradient>
    </defs>
    
    {/* Base Monitor Frame */}
    <rect x="20" y="20" width="280" height="170" rx="14" fill="url(#webCardBg)" stroke="#18181B" strokeWidth="1.5" />
    <rect x="20" y="20" width="280" height="28" rx="14" fill="#09090B" />
    <circle cx="38" cy="34" r="3.5" fill="#EF4444" />
    <circle cx="50" cy="34" r="3.5" fill="#F59E0B" />
    <circle cx="62" cy="34" r="3.5" fill="#10B981" />
    <rect x="85" y="27" width="120" height="14" rx="4" fill="#27272A" />
    <circle cx="95" cy="34" r="2.5" fill="#ADF802" />
    <text x="105" y="38" fill="#A1A1AA" fontSize="8" fontFamily="monospace">cynabyte.dev/fast</text>

    {/* Content Grid */}
    {/* Left Code Column */}
    <rect x="35" y="60" width="115" height="115" rx="8" fill="#09090B" />
    <text x="45" y="78" fill="#ADF802" fontSize="9" fontFamily="monospace">&lt;main&gt;</text>
    <text x="52" y="93" fill="#60A5FA" fontSize="8" fontFamily="monospace">&lt;Hero fast /&gt;</text>
    <text x="52" y="108" fill="#F472B6" fontSize="8" fontFamily="monospace">&lt;Grid col=3&gt;</text>
    <text x="60" y="123" fill="#ADF802" fontSize="8" fontFamily="monospace">&lt;Vitals 100/&gt;</text>
    <text x="52" y="138" fill="#F472B6" fontSize="8" fontFamily="monospace">&lt;/Grid&gt;</text>
    <text x="45" y="153" fill="#ADF802" fontSize="9" fontFamily="monospace">&lt;/main&gt;</text>

    {/* Right Visual Render Column */}
    <rect x="160" y="60" width="125" height="42" rx="6" fill="#FFFFFF" stroke="#E4E4E7" strokeWidth="1" />
    <rect x="170" y="69" width="55" height="8" rx="3" fill="#000000" />
    <circle cx="230" cy="73" r="3" fill="#ADF802" />
    <rect x="170" y="82" width="90" height="4" rx="2" fill="#D4D4D8" />
    <rect x="170" y="89" width="70" height="4" rx="2" fill="#E4E4E7" />

    {/* Micro Metric Blocks */}
    <rect x="160" y="110" width="58" height="65" rx="6" fill="#000000" />
    <text x="168" y="128" fill="#ADF802" fontSize="16" fontWeight="800">1.1s</text>
    <text x="168" y="142" fill="#A1A1AA" fontSize="7.5" fontWeight="600">PAGE LOAD</text>
    <rect x="168" y="152" width="42" height="4" rx="2" fill="#27272A" />
    <rect x="168" y="152" width="38" height="4" rx="2" fill="url(#codeGrad)" />

    <rect x="226" y="110" width="59" height="65" rx="6" fill="#FFFFFF" stroke="#E4E4E7" strokeWidth="1" />
    <text x="234" y="128" fill="#000000" fontSize="16" fontWeight="800">100%</text>
    <text x="234" y="142" fill="#71717A" fontSize="7.5" fontWeight="600">RESPONSIVE</text>
    <circle cx="266" cy="155" r="7" fill="#ADF802" />
    <path d="M263 155L265 157L269 153" stroke="#000000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />

    {/* Stand */}
    <path d="M140 190L135 206H185L180 190" fill="#E4E4E7" stroke="#18181B" strokeWidth="1" />
    <rect x="120" y="206" width="80" height="4" rx="2" fill="#18181B" />
  </svg>
);

// 2. Mobile App Development Illustration
export const MobileAppIllustration: React.FC<IllustrationProps> = ({ className = 'w-full h-auto' }) => (
  <svg viewBox="0 0 320 220" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <defs>
      <linearGradient id="phoneGlow" x1="0" y1="0" x2="320" y2="220" gradientUnits="userSpaceOnUse">
        <stop stopColor="#FFFFFF" />
        <stop offset="1" stopColor="#F4F4F5" />
      </linearGradient>
    </defs>

    {/* Primary Phone (iPhone) */}
    <g transform="translate(60, 15)">
      <rect x="0" y="0" width="105" height="190" rx="18" fill="#FFFFFF" stroke="#18181B" strokeWidth="2.5" />
      {/* Dynamic Island */}
      <rect x="36" y="8" width="33" height="6" rx="3" fill="#000000" />
      {/* Content */}
      <rect x="10" y="24" width="55" height="7" rx="3" fill="#000000" />
      <circle cx="70" cy="27" r="2.5" fill="#ADF802" />

      {/* Hero Widget */}
      <rect x="10" y="38" width="85" height="46" rx="8" fill="#09090B" />
      <text x="18" y="54" fill="#FFFFFF" fontSize="8" fontWeight="700">iOS &amp; Android</text>
      <text x="18" y="65" fill="#ADF802" fontSize="11" fontWeight="800">High Speed</text>
      <rect x="18" y="72" width="60" height="4" rx="2" fill="#27272A" />
      <rect x="18" y="72" width="52" height="4" rx="2" fill="#ADF802" />

      {/* List items */}
      <rect x="10" y="92" width="85" height="26" rx="6" fill="#F4F4F5" />
      <circle cx="22" cy="105" r="5" fill="#ADF802" />
      <rect x="33" y="101" width="40" height="4" rx="2" fill="#18181B" />
      <rect x="33" y="108" width="28" height="3" rx="1.5" fill="#71717A" />

      <rect x="10" y="124" width="85" height="26" rx="6" fill="#F4F4F5" />
      <circle cx="22" cy="137" r="5" fill="#18181B" />
      <rect x="33" y="133" width="45" height="4" rx="2" fill="#18181B" />
      <rect x="33" y="140" width="30" height="3" rx="1.5" fill="#71717A" />

      {/* Tab bar */}
      <line x1="0" y1="165" x2="105" y2="165" stroke="#E4E4E7" strokeWidth="1" />
      <circle cx="26" cy="175" r="3.5" fill="#ADF802" />
      <circle cx="52" cy="175" r="3.5" fill="#D4D4D8" />
      <circle cx="78" cy="175" r="3.5" fill="#D4D4D8" />
    </g>

    {/* Secondary Phone (Android / Cross-Platform Sync) */}
    <g transform="translate(165, 30)">
      <rect x="0" y="0" width="95" height="175" rx="16" fill="#FAFAFA" stroke="#18181B" strokeWidth="2" />
      {/* Camera punch hole */}
      <circle cx="48" cy="10" r="3" fill="#000000" />
      
      {/* Sync Badge */}
      <rect x="10" y="22" width="75" height="38" rx="6" fill="#ADF802" />
      <text x="18" y="38" fill="#000000" fontSize="7.5" fontWeight="700">ANDROID SYNC</text>
      <text x="18" y="49" fill="#000000" fontSize="9" fontWeight="800">Unified Stack</text>

      {/* Data Cards */}
      <rect x="10" y="68" width="75" height="30" rx="5" fill="#09090B" />
      <rect x="18" y="77" width="35" height="4" rx="2" fill="#FFFFFF" />
      <rect x="18" y="85" width="55" height="3" rx="1.5" fill="#A1A1AA" />
      <circle cx="72" cy="83" r="4" fill="#ADF802" />

      <rect x="10" y="106" width="75" height="30" rx="5" fill="#FFFFFF" stroke="#E4E4E7" strokeWidth="1" />
      <rect x="18" y="115" width="40" height="4" rx="2" fill="#18181B" />
      <rect x="18" y="123" width="50" height="3" rx="1.5" fill="#71717A" />

      {/* Cross link indicator line */}
      <path d="M-15 80 C -5 80, -5 95, 5 95" stroke="#ADF802" strokeWidth="2.5" strokeDasharray="3 3" />
    </g>
  </svg>
);

// 3. UI/UX Design Illustration
export const UiUxIllustration: React.FC<IllustrationProps> = ({ className = 'w-full h-auto' }) => (
  <svg viewBox="0 0 320 220" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    {/* Design Canvas Board */}
    <rect x="25" y="20" width="270" height="180" rx="12" fill="#FFFFFF" stroke="#18181B" strokeWidth="1.5" />
    
    {/* Canvas Tool Bar */}
    <rect x="40" y="32" width="240" height="24" rx="6" fill="#F4F4F5" />
    <circle cx="55" cy="44" r="5" fill="#000000" />
    <circle cx="72" cy="44" r="5" fill="#ADF802" />
    <circle cx="89" cy="44" r="5" fill="#D4D4D8" />
    <rect x="120" y="38" width="45" height="12" rx="3" fill="#FFFFFF" stroke="#E4E4E7" strokeWidth="1" />
    <text x="128" y="47" fill="#18181B" fontSize="7" fontWeight="600">Canvas 100%</text>

    {/* Bezier Vector Curve with Handle Nodes */}
    <path
      d="M50 140 C 90 70, 160 170, 210 100"
      stroke="#ADF802"
      strokeWidth="3"
      fill="none"
    />
    <line x1="50" y1="140" x2="80" y2="90" stroke="#71717A" strokeWidth="1" strokeDasharray="2 2" />
    <line x1="210" y1="100" x2="180" y2="150" stroke="#71717A" strokeWidth="1" strokeDasharray="2 2" />
    <rect x="46" y="136" width="8" height="8" rx="2" fill="#000000" stroke="#ADF802" strokeWidth="1.5" />
    <rect x="206" y="96" width="8" height="8" rx="2" fill="#000000" stroke="#ADF802" strokeWidth="1.5" />
    <circle cx="80" cy="90" r="3" fill="#ADF802" />
    <circle cx="180" cy="150" r="3" fill="#ADF802" />

    {/* Floating Component Tokens */}
    <g transform="translate(190, 120)">
      <rect x="0" y="0" width="90" height="65" rx="8" fill="#09090B" stroke="#27272A" strokeWidth="1" />
      <text x="12" y="18" fill="#ADF802" fontSize="7.5" fontWeight="700">DESIGN SYSTEM</text>
      <rect x="12" y="26" width="12" height="12" rx="3" fill="#ADF802" />
      <rect x="28" y="26" width="12" height="12" rx="3" fill="#000000" stroke="#FFFFFF" strokeWidth="1" />
      <rect x="44" y="26" width="12" height="12" rx="3" fill="#FFFFFF" />
      <text x="12" y="52" fill="#FAFAFA" fontSize="8" fontWeight="600">Spacing: 8pt grid</text>
    </g>

    {/* Pen Tool Cursor */}
    <g transform="translate(125, 105)">
      <path d="M0 0L12 8L7 11L14 18L11 21L4 14L1 19L0 0Z" fill="#000000" stroke="#FFFFFF" strokeWidth="1" />
    </g>
  </svg>
);

// 4. SEO Optimization Illustration
export const SeoIllustration: React.FC<IllustrationProps> = ({ className = 'w-full h-auto' }) => (
  <svg viewBox="0 0 320 220" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    {/* Base Panel */}
    <rect x="25" y="20" width="270" height="180" rx="12" fill="#FAFAFA" stroke="#18181B" strokeWidth="1.5" />

    {/* Search Input Simulation */}
    <rect x="42" y="34" width="236" height="32" rx="8" fill="#FFFFFF" stroke="#E4E4E7" strokeWidth="1.5" />
    <circle cx="60" cy="50" r="6" stroke="#71717A" strokeWidth="1.5" />
    <line x1="64" y1="54" x2="69" y2="59" stroke="#71717A" strokeWidth="1.5" strokeLinecap="round" />
    <text x="76" y="53" fill="#18181B" fontSize="9.5" fontWeight="600">fastest web agency near me</text>
    <rect x="220" y="40" width="50" height="20" rx="5" fill="#ADF802" />
    <text x="233" y="53" fill="#000000" fontSize="8" fontWeight="700">SEARCH</text>

    {/* Search Result #1 Cynabyte Tech */}
    <g transform="translate(42, 80)">
      <rect x="0" y="0" width="236" height="52" rx="8" fill="#FFFFFF" stroke="#ADF802" strokeWidth="2" />
      <circle cx="16" cy="18" r="4" fill="#ADF802" />
      <text x="26" y="16" fill="#71717A" fontSize="7.5" fontFamily="monospace">https://cynabyte.com</text>
      <text x="12" y="32" fill="#000000" fontSize="10.5" fontWeight="800">Cynabyte Tech – Transforming Ideas</text>
      <text x="12" y="43" fill="#52525B" fontSize="7.5">Fast, scalable &amp; SEO-optimized web and mobile solutions...</text>
      
      {/* Rank #1 Badge */}
      <rect x="185" y="8" width="42" height="18" rx="4" fill="#000000" />
      <text x="195" y="20" fill="#ADF802" fontSize="8" fontWeight="800">#1 RANK</text>
    </g>

    {/* Growth Graph & Structured Data Tags */}
    <g transform="translate(42, 142)">
      {/* Graph Area */}
      <rect x="0" y="0" width="130" height="46" rx="6" fill="#09090B" />
      <text x="10" y="14" fill="#A1A1AA" fontSize="7" fontWeight="600">ORGANIC TRAFFIC</text>
      <text x="10" y="28" fill="#ADF802" fontSize="13" fontWeight="800">+418%</text>
      <path
        d="M65 36 Q 85 34, 100 24 T 120 12"
        fill="none"
        stroke="#ADF802"
        strokeWidth="2.5"
        strokeLinecap="round"
      />

      {/* SEO Metric Tag Pills */}
      <g transform="translate(140, 2)">
        <rect x="0" y="0" width="96" height="19" rx="4" fill="#F4F4F5" stroke="#E4E4E7" strokeWidth="1" />
        <circle cx="8" cy="9.5" r="2.5" fill="#10B981" />
        <text x="15" y="12" fill="#18181B" fontSize="7" fontFamily="monospace">Search: High</text>

        <rect x="0" y="24" width="96" height="19" rx="4" fill="#F4F4F5" stroke="#E4E4E7" strokeWidth="1" />
        <circle cx="8" cy="33.5" r="2.5" fill="#10B981" />
        <text x="15" y="36" fill="#18181B" fontSize="7" fontFamily="monospace">Status: Indexed</text>
      </g>
    </g>
  </svg>
);

// 5. Branding and Design Illustration
export const BrandingIllustration: React.FC<IllustrationProps> = ({ className = 'w-full h-auto' }) => (
  <svg viewBox="0 0 320 220" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    {/* Base Panel */}
    <rect x="25" y="20" width="270" height="180" rx="12" fill="#FAFAFA" stroke="#18181B" strokeWidth="1.5" />

    {/* Golden Ratio Geometric Circles Grid */}
    <g opacity="0.3" stroke="#71717A" strokeWidth="1" strokeDasharray="3 3">
      <circle cx="110" cy="105" r="48" />
      <circle cx="110" cy="105" r="30" />
      <circle cx="110" cy="105" r="18" />
      <line x1="45" y1="105" x2="175" y2="105" />
      <line x1="110" y1="40" x2="110" y2="170" />
    </g>

    {/* Brand Mark: cynabyte. */}
    <g transform="translate(62, 85)">
      <text x="0" y="26" fill="#000000" fontSize="26" fontWeight="800" letterSpacing="-0.04em">
        cynabyte
      </text>
      <circle cx="120" cy="22" r="4.5" fill="#ADF802" />
    </g>

    {/* Color Palette Swatches */}
    <g transform="translate(195, 45)">
      <rect x="0" y="0" width="85" height="130" rx="8" fill="#FFFFFF" stroke="#E4E4E7" strokeWidth="1" />
      <text x="10" y="16" fill="#71717A" fontSize="7" fontWeight="700">IDENTITY PALETTE</text>

      {/* Swatch 1: Electric Lime */}
      <rect x="10" y="24" width="20" height="20" rx="4" fill="#ADF802" />
      <text x="36" y="34" fill="#000000" fontSize="7.5" fontWeight="700">#ADF802</text>
      <text x="36" y="42" fill="#71717A" fontSize="6.5">Electric Lime</text>

      {/* Swatch 2: Deep Black */}
      <rect x="10" y="52" width="20" height="20" rx="4" fill="#000000" />
      <text x="36" y="62" fill="#000000" fontSize="7.5" fontWeight="700">#000000</text>
      <text x="36" y="70" fill="#71717A" fontSize="6.5">Deep Black</text>

      {/* Swatch 3: Pure White */}
      <rect x="10" y="80" width="20" height="20" rx="4" fill="#FFFFFF" stroke="#E4E4E7" strokeWidth="1" />
      <text x="36" y="90" fill="#000000" fontSize="7.5" fontWeight="700">#FFFFFF</text>
      <text x="36" y="98" fill="#71717A" fontSize="6.5">Pure White</text>

      {/* Typography Spec */}
      <rect x="10" y="108" width="65" height="14" rx="3" fill="#F4F4F5" />
      <text x="16" y="118" fill="#18181B" fontSize="6.5" fontWeight="700">Font: DM Sans</text>
    </g>

    {/* Brand Guidelines Badge */}
    <g transform="translate(45, 148)">
      <rect x="0" y="0" width="130" height="32" rx="6" fill="#09090B" />
      <circle cx="16" cy="16" r="5" fill="#ADF802" />
      <text x="28" y="15" fill="#FFFFFF" fontSize="8" fontWeight="700">Brand Identity System</text>
      <text x="28" y="24" fill="#A1A1AA" fontSize="6.5">Vector Assets &bull; Typography &bull; Tone</text>
    </g>
  </svg>
);
