import React from 'react';

interface GraphicProps {
  className?: string;
  type?: string;
}

export function NatureGraphic({ type = 'forest', className = 'w-full h-full' }: GraphicProps) {
  switch (type) {
    case 'reforestation':
    case 'forest':
      return (
        <svg
          viewBox="0 0 600 360"
          className={className}
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <defs>
            <linearGradient id="skyGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#1E3A8A" stopOpacity="0.15" />
              <stop offset="60%" stopColor="#D97706" stopOpacity="0.25" />
              <stop offset="100%" stopColor="#F59E0B" stopOpacity="0.1" />
            </linearGradient>
            <linearGradient id="mountainFar" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#334155" />
              <stop offset="100%" stopColor="#1E293B" />
            </linearGradient>
            <linearGradient id="mountainMid" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#064E3B" />
              <stop offset="100%" stopColor="#022C22" />
            </linearGradient>
            <linearGradient id="ridgeFore" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#14532D" />
              <stop offset="100%" stopColor="#052E16" />
            </linearGradient>
          </defs>
          <rect width="600" height="360" fill="#F4EFE6" />
          <rect width="600" height="220" fill="url(#skyGrad)" />
          
          {/* Subtle sun */}
          <circle cx="440" cy="90" r="42" fill="#FEF3C7" opacity="0.85" />
          <circle cx="440" cy="90" r="54" stroke="#FDE68A" strokeWidth="1.5" strokeDasharray="4 4" opacity="0.5" />

          {/* Far distant mountain range */}
          <path d="M0 190 L90 145 L180 180 L290 120 L400 175 L520 130 L600 160 L600 360 L0 360 Z" fill="url(#mountainFar)" opacity="0.35" />
          
          {/* Mid mountain forest ridge */}
          <path d="M0 220 L110 175 L220 205 L340 155 L460 210 L560 170 L600 190 L600 360 L0 360 Z" fill="url(#mountainMid)" opacity="0.75" />

          {/* Near foothill slope with tree silhouettes */}
          <path d="M0 260 Q180 240 320 270 T600 240 L600 360 L0 360 Z" fill="url(#ridgeFore)" />

          {/* Foreground native trees & saplings */}
          <g fill="#052E16" opacity="0.9">
            {/* Tree 1 */}
            <path d="M60 280 L75 220 L90 280 Z" />
            <path d="M65 255 L75 205 L85 255 Z" />
            <rect x="73" y="275" width="4" height="25" fill="#292524" />
            {/* Tree 2 */}
            <path d="M120 295 L140 235 L160 295 Z" />
            <path d="M125 265 L140 215 L155 265 Z" />
            <rect x="138" y="290" width="5" height="25" fill="#292524" />
            {/* Tree 3 */}
            <circle cx="210" cy="270" r="18" fill="#166534" />
            <circle cx="225" cy="265" r="14" fill="#15803D" />
            <rect x="215" y="280" width="5" height="30" fill="#292524" />
            {/* Young saplings */}
            <path d="M380 315 Q390 295 395 285 Q405 295 410 315 Z" fill="#22C55E" />
            <rect x="394" y="305" width="2" height="20" fill="#78350F" />
            <path d="M430 320 Q438 302 444 290 Q452 302 458 320 Z" fill="#22C55E" />
            <rect x="443" y="310" width="2" height="18" fill="#78350F" />
          </g>

          {/* Subtle contour topography lines */}
          <path d="M40 320 Q280 300 560 330" stroke="#86EFAC" strokeWidth="1" strokeDasharray="3 4" opacity="0.4" />
          <path d="M60 335 Q300 315 540 345" stroke="#86EFAC" strokeWidth="1" strokeDasharray="3 4" opacity="0.3" />
        </svg>
      );

    case 'waterways':
    case 'water':
      return (
        <svg
          viewBox="0 0 600 360"
          className={className}
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <defs>
            <linearGradient id="riverSky" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#0F172A" stopOpacity="0.2" />
              <stop offset="100%" stopColor="#0284C7" stopOpacity="0.1" />
            </linearGradient>
            <linearGradient id="riverStream" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#0284C7" />
              <stop offset="50%" stopColor="#0EA5E9" />
              <stop offset="100%" stopColor="#38BDF8" />
            </linearGradient>
          </defs>
          <rect width="600" height="360" fill="#F4EFE6" />
          <rect width="600" height="200" fill="url(#riverSky)" />

          {/* Valley backdrop */}
          <path d="M0 160 L140 110 L260 145 L420 95 L600 150 L600 360 L0 360 Z" fill="#334155" opacity="0.2" />
          <path d="M0 190 L180 140 L380 170 L600 135 L600 360 L0 360 Z" fill="#047857" opacity="0.3" />

          {/* Winding clean freshwater river */}
          <path
            d="M360 140 C340 180, 220 200, 260 250 C300 300, 140 330, 80 360 L600 360 L600 240 C520 200, 420 180, 360 140 Z"
            fill="url(#riverStream)"
            opacity="0.85"
          />

          {/* River ripples & currents */}
          <path d="M290 220 Q320 215 350 225" stroke="#BAE6FD" strokeWidth="2" strokeLinecap="round" opacity="0.7" />
          <path d="M240 260 Q280 250 320 265" stroke="#BAE6FD" strokeWidth="2.5" strokeLinecap="round" opacity="0.8" />
          <path d="M200 300 Q260 285 320 305" stroke="#E0F2FE" strokeWidth="3" strokeLinecap="round" opacity="0.9" />

          {/* Natural riverbank rocks & pebbles */}
          <ellipse cx="140" cy="330" rx="24" ry="12" fill="#78716C" />
          <ellipse cx="175" cy="340" rx="16" ry="9" fill="#57534E" />
          <ellipse cx="115" cy="345" rx="12" ry="7" fill="#A8A29E" />

          {/* Riparian native reeds and wetlands grass */}
          <g stroke="#15803D" strokeWidth="2.5" strokeLinecap="round">
            <path d="M40 360 Q45 310 52 280" />
            <path d="M48 360 Q56 315 62 290" />
            <path d="M58 360 Q62 300 75 275" />
            <path d="M68 360 Q72 320 84 295" />
            <path d="M80 360 Q85 325 96 305" />
          </g>
          {/* Bio barrier marker floating line */}
          <path d="M300 205 L370 195" stroke="#F59E0B" strokeWidth="2" strokeDasharray="4 3" />
          <circle cx="300" cy="205" r="4" fill="#F59E0B" />
          <circle cx="335" cy="200" r="4" fill="#F59E0B" />
          <circle cx="370" cy="195" r="4" fill="#F59E0B" />
        </svg>
      );

    case 'biodiversity':
      return (
        <svg
          viewBox="0 0 600 360"
          className={className}
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <rect width="600" height="360" fill="#052E16" />
          <circle cx="300" cy="180" r="160" fill="#064E3B" opacity="0.4" />
          
          {/* Dense canopy botanical foliage */}
          <g opacity="0.85">
            {/* Large Monstera/Fern leaves */}
            <path d="M80 360 C120 280, 220 250, 320 280 C260 320, 180 350, 80 360 Z" fill="#166534" />
            <path d="M520 360 C460 260, 340 240, 240 270 C310 320, 420 350, 520 360 Z" fill="#14532D" />
            <path d="M160 360 C200 210, 340 180, 420 230 C340 280, 260 320, 160 360 Z" fill="#15803D" opacity="0.7" />
          </g>

          {/* Dappled sunlight beams */}
          <polygon points="120,0 200,0 320,360 200,360" fill="#FEF08A" opacity="0.08" />
          <polygon points="260,0 340,0 480,360 380,360" fill="#FEF08A" opacity="0.1" />

          {/* Wild native flower & pollinator */}
          <circle cx="380" cy="150" r="14" fill="#F59E0B" />
          <circle cx="366" cy="142" r="10" fill="#FEF3C7" opacity="0.9" />
          <circle cx="394" cy="142" r="10" fill="#FEF3C7" opacity="0.9" />
          <circle cx="372" cy="162" r="10" fill="#FEF3C7" opacity="0.9" />
          <circle cx="390" cy="162" r="10" fill="#FEF3C7" opacity="0.9" />
          <circle cx="380" cy="150" r="6" fill="#B45309" />

          {/* Native Honeybee / pollinator */}
          <ellipse cx="440" cy="120" rx="8" ry="5" fill="#FBBF24" />
          <path d="M436 116 L436 124 M440 115 L440 125 M444 116 L444 124" stroke="#1C1917" strokeWidth="1.5" />
          <ellipse cx="438" cy="112" rx="6" ry="3" fill="#E0F2FE" opacity="0.8" transform="rotate(-20 438 112)" />

          {/* Forest floor fern details */}
          <path d="M280 360 Q300 290 325 240 Q335 290 340 360" fill="#22C55E" opacity="0.6" />
        </svg>
      );

    case 'wildlife':
      return (
        <svg
          viewBox="0 0 600 360"
          className={className}
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <rect width="600" height="360" fill="#1C1917" />
          
          {/* Sunset glow in corridor */}
          <ellipse cx="300" cy="240" rx="260" ry="140" fill="#78350F" opacity="0.3" />
          <circle cx="480" cy="120" r="38" fill="#F59E0B" opacity="0.7" />

          {/* Ridge horizon */}
          <path d="M0 240 L160 210 L320 230 L480 190 L600 220 L600 360 L0 360 Z" fill="#292524" />

          {/* Elephant family silhouette walking peacefully */}
          <g fill="#0C0A09">
            {/* Adult Elephant */}
            <path d="M190 280 C185 240, 210 210, 255 210 C290 210, 310 230, 320 260 C325 275, 335 285, 345 295 C335 300, 320 290, 315 280 L310 320 L295 320 L295 285 L270 285 L265 320 L250 320 L255 275 C240 280, 220 290, 205 320 L190 320 Z" />
            <ellipse cx="230" cy="240" rx="14" ry="20" fill="#0C0A09" />
            {/* Calf */}
            <path d="M130 300 C125 275, 140 260, 165 260 C185 260, 195 270, 200 285 C205 295, 210 300, 215 305 C210 308, 202 302, 198 296 L195 320 L185 320 L185 300 L170 300 L168 320 L158 320 L160 295 C150 298, 140 305, 135 320 L125 320 Z" />
          </g>

          {/* Camera trap sensor indicator */}
          <g>
            <rect x="520" y="240" width="22" height="32" rx="3" fill="#44403C" stroke="#78716C" strokeWidth="1" />
            <circle cx="531" cy="252" r="5" fill="#1C1917" />
            <circle cx="531" cy="252" r="2" fill="#38BDF8" />
            <line x1="531" y1="240" x2="531" y2="232" stroke="#78716C" strokeWidth="1.5" />
            {/* Sensor field beam line */}
            <path d="M520 252 L440 260 M520 252 L430 285" stroke="#38BDF8" strokeWidth="1" strokeDasharray="3 3" opacity="0.4" />
          </g>

          {/* Tall grasslands buffer */}
          <g stroke="#451A03" strokeWidth="2" strokeLinecap="round" opacity="0.6">
            <path d="M10 360 L25 310" />
            <path d="M25 360 L40 315" />
            <path d="M45 360 L55 305" />
            <path d="M400 360 L415 320" />
            <path d="M430 360 L440 315" />
            <path d="M580 360 L570 325" />
          </g>
        </svg>
      );

    case 'seeds':
      return (
        <svg
          viewBox="0 0 600 360"
          className={className}
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <rect width="600" height="360" fill="#292524" />
          <radialGradient id="seedGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#78350F" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#292524" stopOpacity="0" />
          </radialGradient>
          <rect width="600" height="360" fill="url(#seedGlow)" />

          {/* Terracotta seedball cluster */}
          <g>
            {/* Main seedball */}
            <circle cx="300" cy="210" r="54" fill="#78350F" />
            <circle cx="285" cy="195" r="48" fill="#92400E" opacity="0.4" />
            <circle cx="295" cy="215" r="52" stroke="#451A03" strokeWidth="2" strokeDasharray="6 4" opacity="0.5" />
            
            {/* Vibrant sprout emerging */}
            <path d="M300 170 Q300 120 285 95 Q310 110 300 170 Z" fill="#22C55E" />
            <path d="M300 145 Q315 115 340 105 Q325 135 300 145 Z" fill="#16A34A" />
            <line x1="300" y1="180" x2="300" y2="135" stroke="#15803D" strokeWidth="2.5" strokeLinecap="round" />

            {/* Clay seedball 2 */}
            <circle cx="220" cy="245" r="36" fill="#854D0E" />
            {/* Clay seedball 3 */}
            <circle cx="380" cy="240" r="40" fill="#78350F" />
            <path d="M380 205 Q385 175 375 160 Q395 175 380 205 Z" fill="#4ADE80" />

            {/* Earth & compost soil grains */}
            <circle cx="260" cy="275" r="4" fill="#D97706" />
            <circle cx="340" cy="270" r="5" fill="#B45309" />
            <circle cx="190" cy="285" r="3" fill="#D97706" />
            <circle cx="410" cy="280" r="4" fill="#F59E0B" />
          </g>

          {/* Roots branching into earth */}
          <path d="M300 260 Q290 295 270 325 M300 260 Q315 295 330 320 M300 270 L300 335" stroke="#FEF08A" strokeWidth="1.5" strokeDasharray="3 3" opacity="0.5" />
        </svg>
      );

    case 'education':
    default:
      return (
        <svg
          viewBox="0 0 600 360"
          className={className}
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <rect width="600" height="360" fill="#042F2E" />
          
          {/* Soft radiant aura */}
          <circle cx="300" cy="180" r="140" fill="#0D9488" opacity="0.2" />

          {/* Visual screen & nature sprout metaphor */}
          <rect x="180" y="80" width="240" height="150" rx="12" fill="#134E4A" stroke="#2DD4BF" strokeWidth="2" />
          
          {/* Video player play icon */}
          <circle cx="300" cy="155" r="26" fill="#CCFBF1" />
          <polygon points="295,145 312,155 295,165" fill="#0F766E" />

          {/* Animated leaves popping out of screen */}
          <path d="M400 85 Q430 60 455 75 Q435 100 400 85 Z" fill="#34D399" />
          <path d="M200 85 Q170 60 145 75 Q165 100 200 85 Z" fill="#34D399" />

          {/* Children and nature connection symbols */}
          <circle cx="240" cy="275" r="16" fill="#FDE68A" />
          <path d="M225 315 C225 295, 255 295, 255 315 Z" fill="#0284C7" />

          <circle cx="360" cy="275" r="16" fill="#FDE68A" />
          <path d="M345 315 C345 295, 375 295, 375 315 Z" fill="#10B981" />

          {/* Center shared tree sapling held together */}
          <rect x="298" y="275" width="4" height="40" fill="#78350F" />
          <circle cx="300" cy="265" r="16" fill="#10B981" />
          <circle cx="290" cy="260" r="12" fill="#34D399" />
          <circle cx="310" cy="260" r="12" fill="#059669" />
        </svg>
      );
  }
}
