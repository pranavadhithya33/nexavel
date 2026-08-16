const fs = require('fs');
const path = require('path');

const dirs = [
  'C:\\Users\\user\\Downloads\\nexavel\\public\\images',
  'C:\\Users\\user\\.gemini\\antigravity\\scratch\\nexavel\\public\\images'
];

dirs.forEach(dir => {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
});

const images = {
  'spiderman-suit.jpg': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 800" width="100%" height="100%">
    <defs>
      <linearGradient id="redGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#FF1E27" />
        <stop offset="100%" stop-color="#99000D" />
      </linearGradient>
      <linearGradient id="blueGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#1B2B6B" />
        <stop offset="100%" stop-color="#0B1333" />
      </linearGradient>
      <radialGradient id="eyeGlow" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stop-color="#FFFFFF" />
        <stop offset="70%" stop-color="#E2E8F0" />
        <stop offset="100%" stop-color="#94A3B8" />
      </radialGradient>
      <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%">
        <feDropShadow dx="0" dy="10" stdDeviation="15" flood-color="#000" flood-opacity="0.8"/>
      </filter>
    </defs>
    <!-- Background Blue Suit Body -->
    <rect width="600" height="800" fill="url(#blueGrad)" />
    
    <!-- Red Suit Chest & Mask Sections -->
    <path d="M 100 0 L 500 0 L 480 350 L 300 500 L 120 350 Z" fill="url(#redGrad)" filter="url(#shadow)" />
    <path d="M 200 450 L 400 450 L 450 800 L 150 800 Z" fill="url(#redGrad)" />
    
    <!-- Web Lines Grid -->
    <g stroke="rgba(0,0,0,0.6)" stroke-width="2" fill="none">
      <path d="M 300 0 L 300 800" />
      <path d="M 300 180 L 100 100" /><path d="M 300 180 L 500 100" />
      <path d="M 300 180 L 120 300" /><path d="M 300 180 L 480 300" />
      <path d="M 300 180 L 150 500" /><path d="M 300 180 L 450 500" />
      <!-- Web Concentric Rings -->
      <ellipse cx="300" cy="180" rx="60" ry="45" />
      <ellipse cx="300" cy="180" rx="120" ry="90" />
      <ellipse cx="300" cy="180" rx="190" ry="140" />
      <ellipse cx="300" cy="180" rx="260" ry="200" />
    </g>
    
    <!-- Spider Mask Eye Lenses -->
    <g filter="url(#shadow)">
      <!-- Left Eye -->
      <path d="M 170 140 Q 230 130 270 170 Q 240 220 160 210 Q 140 170 170 140 Z" fill="#111" stroke="#222" stroke-width="8" />
      <path d="M 175 145 Q 225 137 262 170 Q 235 212 165 204 Q 148 172 175 145 Z" fill="url(#eyeGlow)" />
      
      <!-- Right Eye -->
      <path d="M 430 140 Q 370 130 330 170 Q 360 220 440 210 Q 460 170 430 140 Z" fill="#111" stroke="#222" stroke-width="8" />
      <path d="M 425 145 Q 375 137 338 170 Q 365 212 435 204 Q 452 172 425 145 Z" fill="url(#eyeGlow)" />
    </g>

    <!-- Chest Spider Emblem -->
    <g transform="translate(300, 360)" fill="#111">
      <ellipse cx="0" cy="0" rx="12" ry="22" />
      <circle cx="0" cy="-22" r="9" />
      <!-- Legs -->
      <path d="M -8 -10 Q -40 -40 -60 -20 Q -45 10 -10 5" fill="none" stroke="#111" stroke-width="5" stroke-linecap="round" />
      <path d="M 8 -10 Q 40 -40 60 -20 Q 45 10 10 5" fill="none" stroke="#111" stroke-width="5" stroke-linecap="round" />
      <path d="M -10 5 Q -50 20 -70 50 Q -40 60 -8 20" fill="none" stroke="#111" stroke-width="5" stroke-linecap="round" />
      <path d="M 10 5 Q 50 20 70 50 Q 40 60 8 20" fill="none" stroke="#111" stroke-width="5" stroke-linecap="round" />
    </g>
  </svg>`,

  'peter-parker.jpg': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 800" width="100%" height="100%">
    <defs>
      <linearGradient id="bgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#1E293B" />
        <stop offset="50%" stop-color="#0F172A" />
        <stop offset="100%" stop-color="#020617" />
      </linearGradient>
      <linearGradient id="skinGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#FDEDD9" />
        <stop offset="100%" stop-color="#E2B997" />
      </linearGradient>
      <linearGradient id="jacketGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#334155" />
        <stop offset="100%" stop-color="#0F172A" />
      </linearGradient>
    </defs>
    <!-- Background -->
    <rect width="600" height="800" fill="url(#bgGrad)" />
    <!-- City bokeh lights -->
    <circle cx="100" cy="150" r="40" fill="#E23636" opacity="0.15" />
    <circle cx="500" cy="200" r="60" fill="#2B3784" opacity="0.2" />
    <circle cx="450" cy="500" r="80" fill="#E23636" opacity="0.1" />

    <!-- Peter Parker Body / Clothes -->
    <path d="M 120 800 Q 200 500 300 500 Q 400 500 480 800 Z" fill="url(#jacketGrad)" />
    <path d="M 230 520 L 300 650 L 370 520 L 300 500 Z" fill="#94A3B8" />

    <!-- Neck & Face -->
    <rect x="260" y="380" width="80" height="130" fill="url(#skinGrad)" rx="10" />
    <!-- Face Contour -->
    <path d="M 200 240 Q 200 420 300 420 Q 400 420 400 240 Q 400 150 300 150 Q 200 150 200 240 Z" fill="url(#skinGrad)" />

    <!-- Classic Tobey Maguire Hair -->
    <path d="M 185 220 C 185 100 240 90 300 90 C 370 90 415 110 415 220 C 400 160 360 140 300 140 C 240 140 200 160 185 220 Z" fill="#3D2314" />
    <path d="M 220 140 Q 280 180 300 150 Q 340 180 380 140 Q 310 120 220 140 Z" fill="#29160B" />

    <!-- Eyes -->
    <ellipse cx="250" cy="250" rx="18" ry="12" fill="#FFF" />
    <circle cx="252" cy="250" r="8" fill="#3B82F6" />
    <circle cx="254" cy="248" r="3" fill="#FFF" />

    <ellipse cx="350" cy="250" rx="18" ry="12" fill="#FFF" />
    <circle cx="348" cy="250" r="8" fill="#3B82F6" />
    <circle cx="346" cy="248" r="3" fill="#FFF" />

    <!-- Eyebrows -->
    <path d="M 225 225 Q 255 220 280 230" fill="none" stroke="#29160B" stroke-width="4" stroke-linecap="round" />
    <path d="M 375 225 Q 345 220 320 230" fill="none" stroke="#29160B" stroke-width="4" stroke-linecap="round" />

    <!-- Nose & Smile -->
    <path d="M 300 250 L 295 300 L 310 305" fill="none" stroke="#C49A78" stroke-width="3" stroke-linecap="round" />
    <path d="M 260 345 Q 300 365 340 345" fill="none" stroke="#A86B52" stroke-width="4" stroke-linecap="round" />

    <!-- Camera Strap across chest -->
    <path d="M 140 600 L 440 780" stroke="#0F172A" stroke-width="24" stroke-linecap="round" />
    <path d="M 140 600 L 440 780" stroke="#E23636" stroke-width="4" stroke-dasharray="10 5" />
    
    <!-- Title Overlay -->
    <text x="300" y="740" font-family="sans-serif" font-size="22" font-weight="bold" fill="#FFF" text-anchor="middle" letter-spacing="3">PETER PARKER</text>
    <text x="300" y="765" font-family="sans-serif" font-size="14" fill="#94A3B8" text-anchor="middle" letter-spacing="1">THE HERO BEHIND NEXAVEL</text>
  </svg>`,

  'team.jpg': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 600" width="100%" height="100%">
    <rect width="800" height="600" fill="#0A0A0F" />
    <!-- Ambient Studio Lights -->
    <circle cx="200" cy="150" r="250" fill="#E23636" opacity="0.12" />
    <circle cx="600" cy="400" r="300" fill="#2B3784" opacity="0.15" />
    
    <!-- Workspace Desk & Monitors -->
    <rect x="50" y="380" width="700" height="15" fill="#1E293B" rx="4" />
    <rect x="120" y="220" width="220" height="140" fill="#0F172A" stroke="#334155" stroke-width="4" rx="8" />
    <path d="M 140 240 L 320 240 M 140 260 L 260 260 M 140 280 L 290 280 M 140 310 L 220 310" stroke="#38BDF8" stroke-width="4" stroke-linecap="round" />
    
    <rect x="460" y="200" width="240" height="160" fill="#0F172A" stroke="#334155" stroke-width="4" rx="8" />
    <path d="M 480 230 L 670 230 M 480 260 L 620 260 M 480 300 L 650 300" stroke="#F43F5E" stroke-width="4" stroke-linecap="round" />
    
    <!-- Team Silhouette / Stylized People -->
    <circle cx="280" cy="200" r="35" fill="#E2B997" />
    <path d="M 220 320 Q 280 260 340 320 Z" fill="#3B82F6" />
    
    <circle cx="520" cy="180" r="35" fill="#FDEDD9" />
    <path d="M 460 320 Q 520 240 580 320 Z" fill="#EC4899" />
    
    <text x="400" y="520" font-family="sans-serif" font-size="28" font-weight="900" fill="#FFF" text-anchor="middle" letter-spacing="2">NEXAVEL CREATIVE TEAM</text>
    <text x="400" y="550" font-family="sans-serif" font-size="16" fill="#64748B" text-anchor="middle">Innovating Modern Digital Experiences</text>
  </svg>`,

  'portfolio-1.jpg': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 600" width="100%" height="100%">
    <rect width="800" height="600" fill="#0F172A" />
    <rect x="40" y="40" width="720" height="520" rx="16" fill="#1E293B" stroke="#334155" stroke-width="2" />
    <!-- Header -->
    <rect x="40" y="40" width="720" height="60" fill="#0F172A" rx="16" />
    <circle cx="80" cy="70" r="6" fill="#EF4444" />
    <circle cx="100" cy="70" r="6" fill="#F59E0B" />
    <circle cx="120" cy="70" r="6" fill="#10B981" />
    <text x="400" y="76" font-family="sans-serif" font-size="16" font-weight="bold" fill="#F8FAFC" text-anchor="middle">URBAN THREADS — E-Commerce Redesign</text>

    <!-- Hero Card inside browser -->
    <rect x="80" y="130" width="380" height="240" fill="#334155" rx="12" />
    <text x="110" y="180" font-family="sans-serif" font-size="24" font-weight="bold" fill="#FFF">NEW SUMMER</text>
    <text x="110" y="215" font-family="sans-serif" font-size="24" font-weight="bold" fill="#E23636">COLLECTION</text>
    <rect x="110" y="245" width="120" height="40" fill="#E23636" rx="8" />
    <text x="170" y="270" font-family="sans-serif" font-size="14" font-weight="bold" fill="#FFF" text-anchor="middle">SHOP NOW</text>

    <!-- Product Grid Mockup -->
    <rect x="480" y="130" width="240" height="110" fill="#0F172A" rx="12" />
    <rect x="480" y="260" width="240" height="110" fill="#0F172A" rx="12" />

    <!-- Metric Banner -->
    <rect x="80" y="400" width="640" height="120" fill="linear-gradient(90deg, #E23636, #2B3784)" rx="16" />
    <text x="400" y="450" font-family="sans-serif" font-size="36" font-weight="900" fill="#FFF" text-anchor="middle">+340% ORGANIC TRAFFIC</text>
    <text x="400" y="485" font-family="sans-serif" font-size="16" fill="#E2E8F0" text-anchor="middle">Revenue Growth &amp; Conversion Optimization</text>
  </svg>`,

  'portfolio-2.jpg': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 600" width="100%" height="100%">
    <rect width="800" height="600" fill="#0B0F19" />
    <rect x="40" y="40" width="720" height="520" rx="16" fill="#111827" stroke="#1F2937" stroke-width="2" />
    
    <!-- Sidebar -->
    <rect x="40" y="40" width="180" height="520" fill="#1F2937" rx="16" />
    <text x="130" y="90" font-family="sans-serif" font-size="20" font-weight="bold" fill="#38BDF8" text-anchor="middle">CloudSync</text>
    <rect x="60" y="130" width="140" height="36" fill="#0284C7" rx="8" />
    <rect x="60" y="180" width="140" height="36" fill="#374151" rx="8" />
    <rect x="60" y="230" width="140" height="36" fill="#374151" rx="8" />

    <!-- Analytics Charts -->
    <rect x="250" y="80" width="480" height="260" fill="#1F2937" rx="12" />
    <path d="M 280 280 Q 350 200 420 240 T 560 140 T 700 120 L 700 300 L 280 300 Z" fill="rgba(56, 189, 248, 0.2)" />
    <path d="M 280 280 Q 350 200 420 240 T 560 140 T 700 120" fill="none" stroke="#38BDF8" stroke-width="4" />
    
    <!-- Metric Banner -->
    <rect x="250" y="370" width="480" height="150" fill="#0369A1" rx="16" />
    <text x="490" y="430" font-family="sans-serif" font-size="36" font-weight="900" fill="#FFF" text-anchor="middle">-42% CPA REDUCTION</text>
    <text x="490" y="470" font-family="sans-serif" font-size="16" fill="#BAE6FD" text-anchor="middle">SaaS Landing Page &amp; High-Converting Ad Campaign</text>
  </svg>`,

  'portfolio-3.jpg': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 600" width="100%" height="100%">
    <rect width="800" height="600" fill="#18181B" />
    <rect x="40" y="40" width="720" height="520" rx="16" fill="#27272A" stroke="#3F3F46" stroke-width="2" />
    
    <text x="400" y="120" font-family="serif" font-size="32" font-weight="bold" fill="#F59E0B" text-anchor="middle">SAVOR &amp; STONE</text>
    <text x="400" y="150" font-family="sans-serif" font-size="14" fill="#A1A1AA" text-anchor="middle" letter-spacing="4">ARTISANAL DINING EXPERIENCE</text>

    <rect x="120" y="190" width="560" height="200" fill="#3F3F46" rx="12" />
    <circle cx="400" cy="290" r="60" fill="#F59E0B" opacity="0.8" />
    <text x="400" y="298" font-family="serif" font-size="28" font-weight="bold" fill="#FFF" text-anchor="middle">CUISINE</text>

    <!-- Metric Banner -->
    <rect x="120" y="420" width="560" height="100" fill="#D97706" rx="16" />
    <text x="400" y="470" font-family="sans-serif" font-size="32" font-weight="900" fill="#FFF" text-anchor="middle">+200% FOOT TRAFFIC</text>
    <text x="400" y="500" font-family="sans-serif" font-size="14" fill="#FEF3C7" text-anchor="middle">Local SEO &amp; Hyper-Local Social Growth Strategy</text>
  </svg>`,

  'portfolio-4.jpg': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 600" width="100%" height="100%">
    <rect width="800" height="600" fill="#09090B" />
    <rect x="40" y="40" width="720" height="520" rx="16" fill="#18181B" stroke="#27272A" stroke-width="2" />

    <text x="400" y="120" font-family="sans-serif" font-size="36" font-weight="900" fill="#EF4444" text-anchor="middle" letter-spacing="2">IRONPULSE FITNESS</text>
    
    <!-- Pulse Line Graphic -->
    <path d="M 100 260 L 250 260 L 300 160 L 350 360 L 400 200 L 450 300 L 500 260 L 700 260" fill="none" stroke="#EF4444" stroke-width="6" stroke-linecap="round" />

    <rect x="120" y="400" width="560" height="110" fill="#DC2626" rx="16" />
    <text x="400" y="455" font-family="sans-serif" font-size="34" font-weight="900" fill="#FFF" text-anchor="middle">50K+ NEW FOLLOWERS</text>
    <text x="400" y="488" font-family="sans-serif" font-size="14" fill="#FEE2E2" text-anchor="middle">Brand Identity System &amp; High-Energy Video Marketing</text>
  </svg>`,

  'client-1.jpg': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" width="100%" height="100%">
    <circle cx="100" cy="100" r="100" fill="#1E293B" />
    <circle cx="100" cy="75" r="35" fill="#E2B997" />
    <path d="M 40 180 Q 100 120 160 180 Z" fill="#0284C7" />
    <text x="100" y="190" font-family="sans-serif" font-size="14" font-weight="bold" fill="#FFF" text-anchor="middle">MARCUS CHEN</text>
  </svg>`,

  'client-2.jpg': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" width="100%" height="100%">
    <circle cx="100" cy="100" r="100" fill="#18181B" />
    <circle cx="100" cy="75" r="35" fill="#FDEDD9" />
    <path d="M 40 180 Q 100 120 160 180 Z" fill="#D97706" />
    <text x="100" y="190" font-family="sans-serif" font-size="14" font-weight="bold" fill="#FFF" text-anchor="middle">SARAH WILLIAMS</text>
  </svg>`,

  'client-3.jpg': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" width="100%" height="100%">
    <circle cx="100" cy="100" r="100" fill="#0F172A" />
    <circle cx="100" cy="75" r="35" fill="#E2B997" />
    <path d="M 40 180 Q 100 120 160 180 Z" fill="#DC2626" />
    <text x="100" y="190" font-family="sans-serif" font-size="14" font-weight="bold" fill="#FFF" text-anchor="middle">DAVID PARK</text>
  </svg>`
};

dirs.forEach(dir => {
  Object.keys(images).forEach(filename => {
    fs.writeFileSync(path.join(dir, filename), images[filename]);
    console.log('Created: ' + path.join(dir, filename));
  });
});
