import React from 'react';

export const HeroIllustration: React.FC<{ className?: string }> = ({ className = 'w-full h-auto' }) => {
  return (
    <div className={`relative ${className}`}>
      {/* Background Soft Glow */}
      <div 
        className="absolute -top-10 -right-10 w-72 h-72 rounded-full opacity-40 blur-3xl pointer-events-none"
        style={{ background: 'radial-gradient(circle, #ADF802 0%, rgba(173,248,2,0) 70%)' }}
      />
      <div 
        className="absolute -bottom-10 -left-10 w-72 h-72 rounded-full opacity-20 blur-3xl pointer-events-none"
        style={{ background: 'radial-gradient(circle, #3b82f6 0%, rgba(59,130,246,0) 70%)' }}
      />

      <svg
        viewBox="0 0 680 480"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-auto drop-shadow-xl relative z-10"
      >
        <defs>
          <linearGradient id="heroCardBg" x1="0" y1="0" x2="680" y2="480" gradientUnits="userSpaceOnUse">
            <stop stopColor="#FFFFFF" />
            <stop offset="1" stopColor="#F9FAFB" />
          </linearGradient>
          <linearGradient id="limeGrad" x1="0" y1="0" x2="1" y2="1">
            <stop stopColor="#ADF802" />
            <stop offset="1" stopColor="#95D400" />
          </linearGradient>
          <linearGradient id="strokeGrad" x1="0" y1="0" x2="680" y2="0" gradientUnits="userSpaceOnUse">
            <stop stopColor="#000000" stopOpacity="0.1" />
            <stop offset="0.5" stopColor="#ADF802" stopOpacity="0.8" />
            <stop offset="1" stopColor="#000000" stopOpacity="0.1" />
          </linearGradient>
          <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="8" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        {/* Ambient Grid Backdrop */}
        <g stroke="#000000" strokeOpacity="0.04" strokeWidth="1">
          <line x1="40" y1="0" x2="40" y2="480" strokeDasharray="4 4" />
          <line x1="140" y1="0" x2="140" y2="480" strokeDasharray="4 4" />
          <line x1="240" y1="0" x2="240" y2="480" strokeDasharray="4 4" />
          <line x1="340" y1="0" x2="340" y2="480" strokeDasharray="4 4" />
          <line x1="440" y1="0" x2="440" y2="480" strokeDasharray="4 4" />
          <line x1="540" y1="0" x2="540" y2="480" strokeDasharray="4 4" />
          <line x1="640" y1="0" x2="640" y2="480" strokeDasharray="4 4" />

          <line x1="0" y1="60" x2="680" y2="60" strokeDasharray="4 4" />
          <line x1="0" y1="160" x2="680" y2="160" strokeDasharray="4 4" />
          <line x1="0" y1="260" x2="680" y2="260" strokeDasharray="4 4" />
          <line x1="0" y1="360" x2="680" y2="360" strokeDasharray="4 4" />
          <line x1="0" y1="440" x2="680" y2="440" strokeDasharray="4 4" />
        </g>

        {/* Main Application Window Canvas */}
        <rect
          x="60"
          y="40"
          width="540"
          height="380"
          rx="18"
          fill="url(#heroCardBg)"
          stroke="#000000"
          strokeOpacity="0.08"
          strokeWidth="1.5"
        />

        {/* Window Chrome Header */}
        <rect x="60" y="40" width="540" height="42" rx="18" fill="#F4F4F5" />
        <line x1="60" y1="82" x2="600" y2="82" stroke="#E4E4E7" strokeWidth="1" />
        
        {/* Window controls */}
        <circle cx="85" cy="61" r="5" fill="#EF4444" />
        <circle cx="102" cy="61" r="5" fill="#F59E0B" />
        <circle cx="119" cy="61" r="5" fill="#10B981" />

        {/* Browser URL Bar */}
        <rect x="150" y="50" width="310" height="22" rx="6" fill="#FFFFFF" stroke="#E4E4E7" strokeWidth="1" />
        <circle cx="164" cy="61" r="3.5" fill="#ADF802" />
        <text x="178" y="65" fill="#71717A" fontSize="10.5" fontFamily="monospace" fontWeight="500">
          https://cynabyte.com/production/scale
        </text>

        {/* Status Badge */}
        <rect x="480" y="50" width="105" height="22" rx="6" fill="#000000" />
        <circle cx="493" cy="61" r="3" fill="#ADF802" />
        <text x="502" y="65" fill="#FFFFFF" fontSize="9.5" fontWeight="600">Lighthouse 99</text>

        {/* Left Side: Dynamic Code Terminal Card */}
        <g transform="translate(85, 105)">
          <rect x="0" y="0" width="230" height="285" rx="12" fill="#09090B" />
          <rect x="0" y="0" width="230" height="28" rx="12" fill="#18181B" />
          <circle cx="16" cy="14" r="3.5" fill="#71717A" />
          <circle cx="28" cy="14" r="3.5" fill="#71717A" />
          <text x="50" y="18" fill="#A1A1AA" fontSize="9" fontFamily="monospace">AppEngine.tsx</text>
          
          {/* Syntax Lines */}
          <text x="16" y="52" fill="#ADF802" fontSize="10" fontFamily="monospace">const</text>
          <text x="54" y="52" fill="#FFFFFF" fontSize="10" fontFamily="monospace">cynabyte = &#123;</text>
          
          <text x="24" y="74" fill="#93C5FD" fontSize="9.5" fontFamily="monospace">architecture:</text>
          <text x="110" y="74" fill="#FDE047" fontSize="9.5" fontFamily="monospace">'Scalable',</text>

          <text x="24" y="96" fill="#93C5FD" fontSize="9.5" fontFamily="monospace">vitals:</text>
          <text x="75" y="96" fill="#ADF802" fontSize="9.5" fontFamily="monospace">'100/100',</text>

          <text x="24" y="118" fill="#93C5FD" fontSize="9.5" fontFamily="monospace">seoIndex:</text>
          <text x="90" y="118" fill="#38BDF8" fontSize="9.5" fontFamily="monospace">'RichSnippets',</text>

          <text x="24" y="140" fill="#93C5FD" fontSize="9.5" fontFamily="monospace">latency:</text>
          <text x="80" y="140" fill="#ADF802" fontSize="9.5" fontFamily="monospace">'&lt; 0.8s'</text>

          <text x="16" y="162" fill="#FFFFFF" fontSize="10" fontFamily="monospace">&#125;;</text>

          {/* Terminal Action Pill */}
          <rect x="16" y="185" width="198" height="34" rx="8" fill="#18181B" stroke="#27272A" strokeWidth="1" />
          <circle cx="32" cy="202" r="5" fill="#ADF802" filter="url(#glow)" />
          <text x="46" y="206" fill="#FAFAFA" fontSize="9.5" fontWeight="600">Pipeline: Optimized</text>
          
          {/* Progress bar */}
          <rect x="16" y="235" width="198" height="6" rx="3" fill="#27272A" />
          <rect x="16" y="235" width="168" height="6" rx="3" fill="url(#limeGrad)" />
          <text x="16" y="258" fill="#71717A" fontSize="8.5" fontFamily="monospace">Production Build Ready (94ms)</text>
        </g>

        {/* Right Side: UI Viewport & Architecture Modules */}
        <g transform="translate(335, 105)">
          {/* Top Metric Card */}
          <rect x="0" y="0" width="240" height="90" rx="12" fill="#FFFFFF" stroke="#E4E4E7" strokeWidth="1.5" />
          <circle cx="28" cy="30" r="14" fill="#F4F4F5" />
          <path d="M22 30L26 34L34 26" stroke="#ADF802" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
          <text x="52" y="28" fill="#71717A" fontSize="9" fontWeight="600" style={{ textTransform: 'uppercase' }}>Conversion Velocity</text>
          <text x="52" y="48" fill="#000000" fontSize="18" fontWeight="800">+284%</text>
          
          {/* Trend graph line */}
          <path
            d="M52 70 Q 90 68, 120 54 T 180 44 T 220 30"
            fill="none"
            stroke="#ADF802"
            strokeWidth="3"
            strokeLinecap="round"
          />
          <circle cx="220" cy="30" r="4" fill="#000000" stroke="#ADF802" strokeWidth="2" />

          {/* Middle Responsive Preview Card */}
          <g transform="translate(0, 105)">
            <rect x="0" y="0" width="240" height="180" rx="12" fill="#FFFFFF" stroke="#E4E4E7" strokeWidth="1.5" />
            
            {/* Header in preview */}
            <rect x="15" y="16" width="60" height="8" rx="4" fill="#000000" />
            <circle cx="82" cy="20" r="3" fill="#ADF802" />
            
            {/* Nav items preview */}
            <rect x="140" y="17" width="22" height="6" rx="3" fill="#E4E4E7" />
            <rect x="170" y="17" width="22" height="6" rx="3" fill="#E4E4E7" />
            <rect x="200" y="14" width="25" height="12" rx="4" fill="#ADF802" />

            {/* Hero content mockup */}
            <rect x="15" y="42" width="130" height="12" rx="4" fill="#18181B" />
            <rect x="15" y="60" width="190" height="6" rx="3" fill="#A1A1AA" />
            <rect x="15" y="70" width="160" height="6" rx="3" fill="#D4D4D8" />

            {/* Action buttons mockup */}
            <rect x="15" y="86" width="65" height="18" rx="6" fill="#000000" />
            <rect x="86" y="86" width="55" height="18" rx="6" fill="#F4F4F5" stroke="#E4E4E7" strokeWidth="1" />

            {/* Split cards mockup */}
            <rect x="15" y="116" width="98" height="48" rx="8" fill="#F4F4F5" stroke="#E4E4E7" strokeWidth="1" />
            <circle cx="30" cy="132" r="6" fill="#ADF802" />
            <rect x="42" y="129" width="50" height="6" rx="3" fill="#18181B" />
            <rect x="30" y="146" width="68" height="5" rx="2.5" fill="#A1A1AA" />

            <rect x="122" y="116" width="102" height="48" rx="8" fill="#000000" />
            <circle cx="137" cy="132" r="6" fill="#ADF802" />
            <rect x="149" y="129" width="52" height="6" rx="3" fill="#FFFFFF" />
            <rect x="137" y="146" width="66" height="5" rx="2.5" fill="#71717A" />
          </g>
        </g>

        {/* Floating Mobile Device Frame */}
        <g transform="translate(25, 230)" className="transition-transform duration-300 hover:-translate-y-1">
          <rect
            x="0"
            y="0"
            width="120"
            height="190"
            rx="18"
            fill="#FFFFFF"
            stroke="#000000"
            strokeWidth="3"
            filter="url(#glow)"
          />
          {/* Notch & speaker */}
          <rect x="45" y="8" width="30" height="4" rx="2" fill="#000000" />
          
          {/* Screen Content */}
          <rect x="10" y="24" width="100" height="14" rx="4" fill="#000000" />
          <circle cx="95" cy="31" r="3" fill="#ADF802" />

          <rect x="10" y="46" width="80" height="8" rx="3" fill="#18181B" />
          <rect x="10" y="58" width="95" height="5" rx="2.5" fill="#A1A1AA" />

          {/* Quick Action Button */}
          <rect x="10" y="72" width="100" height="20" rx="6" fill="#ADF802" />
          <text x="60" y="85" textAnchor="middle" fill="#000000" fontSize="7.5" fontWeight="700">
            LAUNCH NOW
          </text>

          {/* Mobile UI Cards */}
          <rect x="10" y="100" width="100" height="34" rx="6" fill="#F4F4F5" />
          <circle cx="22" cy="117" r="5" fill="#000000" />
          <rect x="33" y="112" width="60" height="4" rx="2" fill="#000000" />
          <rect x="33" y="120" width="40" height="3.5" rx="1.75" fill="#71717A" />

          <rect x="10" y="140" width="100" height="34" rx="6" fill="#09090B" />
          <circle cx="22" cy="157" r="5" fill="#ADF802" />
          <rect x="33" y="152" width="60" height="4" rx="2" fill="#FFFFFF" />
          <rect x="33" y="160" width="45" height="3.5" rx="1.75" fill="#A1A1AA" />
        </g>

        {/* Floating Electric Lime Accent Badge */}
        <g transform="translate(520, 290)">
          <rect
            x="0"
            y="0"
            width="140"
            height="52"
            rx="12"
            fill="#000000"
            stroke="#ADF802"
            strokeWidth="1.5"
            filter="url(#glow)"
          />
          <circle cx="24" cy="26" r="6" fill="#ADF802" />
          <text x="38" y="22" fill="#ADF802" fontSize="8" fontWeight="700" letterSpacing="0.05em">
            SCALE ARCHITECTURE
          </text>
          <text x="38" y="38" fill="#FFFFFF" fontSize="11" fontWeight="700">
            Zero Latency
          </text>
        </g>
      </svg>
    </div>
  );
};
