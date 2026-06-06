'use client';
import { useId } from 'react';

export default function MockupDashboard({ title = 'Analytics Overview', className = '', imageUrl = '' }) {
  const reactId = useId();
  const clipId = `dashboardContentClip-${imageUrl ? imageUrl.replace(/[^a-zA-Z0-9]/g, '') : reactId.replace(/:/g, '')}`;

  return (
    <div className={`mockup-wrapper ${className}`}>
      <svg
        viewBox="0 0 560 380"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ width: '100%', height: 'auto', display: 'block' }}
        aria-hidden="true"
      >
        {/* Card Shell */}
        <rect width="560" height="380" rx="20" fill="#1c1e24" />
        <rect width="560" height="380" rx="20" stroke="rgba(114,193,146,0.18)" strokeWidth="1.5" />
        {/* Inner top gradient strip */}
        <rect width="560" height="4" rx="20" fill="url(#dashTopGrad)" />

        {/* Header */}
        <rect width="560" height="52" rx="20" fill="#14151a" />
        <rect y="32" width="560" height="20" fill="#14151a" />
        <rect x="20" y="16" width="8" height="8" rx="2" fill="#72c192" />
        <rect x="34" y="18" width="130" height="6" rx="3" fill="rgba(255,255,255,0.4)" />
        <rect x="34" y="28" width="90" height="4" rx="2" fill="rgba(255,255,255,0.1)" />

        {/* Header right controls */}
        <rect x="440" y="16" width="50" height="20" rx="6" fill="rgba(114,193,146,0.12)" stroke="rgba(114,193,146,0.25)" strokeWidth="1" />
        <text x="465" y="30" fontSize="9" fill="#72c192" textAnchor="middle" fontFamily="sans-serif" fontWeight="600">7 Days</text>
        <rect x="498" y="16" width="48" height="20" rx="6" fill="rgba(255,255,255,0.05)" />
        <rect x="504" y="22" width="36" height="5" rx="2.5" fill="rgba(255,255,255,0.15)" />
        <rect x="504" y="31" width="26" height="3" rx="1.5" fill="rgba(255,255,255,0.08)" />

        {imageUrl ? (
          <>
            <defs>
              <clipPath id={clipId}>
                <rect x="0" y="52" width="560" height="328" rx="20" />
              </clipPath>
            </defs>
            <image
              x="0"
              y="52"
              width="560"
              height="328"
              href={imageUrl}
              preserveAspectRatio="xMidYMid slice"
              clipPath={`url(#${clipId})`}
            />
          </>
        ) : (
          <>
            {/* KPI Row */}
            {[
              { x: 20, val: '+187%', label: 'Organic Traffic', color: '#72c192', trend: '↑' },
              { x: 157, val: '#1', label: 'Keyword Rank', color: '#5ac0ec', trend: '↑' },
              { x: 294, val: '340%', label: 'Lead Growth', color: '#88c248', trend: '↑' },
              { x: 431, val: '4.9★', label: 'Avg Rating', color: '#72c192', trend: '—' },
            ].map(({ x, val, label, color, trend }) => (
              <g key={label}>
                <rect x={x} y="64" width="119" height="72" rx="12"
                  fill="rgba(255,255,255,0.025)" stroke="rgba(255,255,255,0.06)" strokeWidth="1" />
                <text x={x + 14} y="94" fontSize="20" fontWeight="800" fill={color}
                  fontFamily="sans-serif">{val}</text>
                <rect x={x + 14} y="104" width="70" height="5" rx="2.5" fill="rgba(255,255,255,0.12)" />
                <rect x={x + 14} y="114" width="50" height="4" rx="2" fill="rgba(255,255,255,0.06)" />
                <text x={x + 100} y="76" fontSize="11" fill={color} fontFamily="sans-serif">{trend}</text>
              </g>
            ))}

            {/* Main Chart Area */}
            <rect x="20" y="150" width="340" height="168" rx="12"
              fill="rgba(255,255,255,0.018)" stroke="rgba(255,255,255,0.06)" strokeWidth="1" />
            <text x="36" y="172" fontSize="10" fill="rgba(255,255,255,0.4)" fontFamily="sans-serif" fontWeight="600">ORGANIC TRAFFIC TREND</text>

            {/* Chart Grid */}
            {[195, 218, 241, 264, 287].map(y => (
              <line key={y} x1="36" y1={y} x2="348" y2={y}
                stroke="rgba(255,255,255,0.04)" strokeWidth="1" />
            ))}
            {/* Y Labels */}
            {['5k', '4k', '3k', '2k', '1k'].map((l, i) => (
              <text key={l} x="30" y={200 + i * 23} fontSize="7" fill="rgba(255,255,255,0.2)"
                fontFamily="sans-serif" textAnchor="end">{l}</text>
            ))}

            {/* Area Fill */}
            <path
              d="M44,293 L80,260 L116,238 L152,218 L188,198 L224,192 L260,180 L296,168 L332,158 L332,293 Z"
              fill="url(#areaFill)" />
            {/* Main Line */}
            <polyline
              points="44,293 80,260 116,238 152,218 188,198 224,192 260,180 296,168 332,158"
              fill="none" stroke="#72c192" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
            {/* Secondary Line */}
            <polyline
              points="44,300 80,282 116,270 152,258 188,248 224,244 260,240 296,232 332,228"
              fill="none" stroke="#5ac0ec" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" strokeDasharray="5 3" />

            {/* Chart Point + Tooltip */}
            <circle cx="296" cy="168" r="5" fill="#72c192" />
            <circle cx="296" cy="168" r="9" fill="rgba(114,193,146,0.2)" />
            <rect x="256" y="148" width="76" height="28" rx="6" fill="#13141a" stroke="rgba(114,193,146,0.3)" strokeWidth="1" />
            <text x="294" y="160" fontSize="8" fill="rgba(255,255,255,0.6)" textAnchor="middle" fontFamily="sans-serif">Nov</text>
            <text x="294" y="172" fontSize="10" fill="#72c192" textAnchor="middle" fontFamily="sans-serif" fontWeight="700">+187%</text>

            {/* X Labels */}
            {['Jan', 'Mar', 'May', 'Jul', 'Sep', 'Nov'].map((m, i) => (
              <text key={m} x={44 + i * 57.6} y="308" fontSize="8" fill="rgba(255,255,255,0.2)"
                fontFamily="sans-serif" textAnchor="middle">{m}</text>
            ))}

            {/* Legend */}
            <circle cx="44" cy="330" r="4" fill="#72c192" />
            <text x="54" y="334" fontSize="9" fill="rgba(255,255,255,0.4)" fontFamily="sans-serif">Organic Traffic</text>
            <circle cx="150" cy="330" r="4" fill="#5ac0ec" />
            <text x="160" y="334" fontSize="9" fill="rgba(255,255,255,0.4)" fontFamily="sans-serif">Direct</text>

            {/* Right Panel — Keyword Rankings */}
            <rect x="376" y="150" width="164" height="168" rx="12"
              fill="rgba(255,255,255,0.018)" stroke="rgba(255,255,255,0.06)" strokeWidth="1" />
            <text x="392" y="172" fontSize="10" fill="rgba(255,255,255,0.4)" fontFamily="sans-serif" fontWeight="600">TOP KEYWORDS</text>

            {[
              { kw: 'web development GA', rank: '#1', color: '#72c192' },
              { kw: 'mobile app agency', rank: '#2', color: '#88c248' },
              { kw: 'SEO services GA', rank: '#1', color: '#72c192' },
              { kw: 'digital agency', rank: '#3', color: '#5ac0ec' },
              { kw: 'custom web apps', rank: '#2', color: '#88c248' },
            ].map(({ kw, rank, color }, i) => (
              <g key={kw}>
                <rect x="390" y={184 + i * 25} width="142" height="20" rx="5"
                  fill="rgba(255,255,255,0.03)" />
                <rect x="392" y={186 + i * 25} width="88" height="5" rx="2.5" fill="rgba(255,255,255,0.15)" />
                <rect x="392" y={195 + i * 25} width="60" height="4" rx="2" fill="rgba(255,255,255,0.07)" />
                <rect x="490" y={186 + i * 25} width="36" height="14" rx="5" fill={`${color}20`} />
                <text x="508" y={197 + i * 25} fontSize="9" fill={color}
                  textAnchor="middle" fontFamily="sans-serif" fontWeight="700">{rank}</text>
              </g>
            ))}

            {/* Bottom Row — Activity Feed */}
            {[
              { x: 20, icon: '↑', color: '#72c192', label: 'Traffic spike +42%', time: '2h ago' },
              { x: 196, icon: '★', color: '#FFBD2E', label: 'New 5★ review', time: '5h ago' },
              { x: 372, icon: '◈', color: '#5ac0ec', label: 'Rank #1 achieved', time: '1d ago' },
            ].map(({ x, icon, color, label, time }) => (
              <g key={label}>
                <rect x={x} y="340" width="160" height="28" rx="8"
                  fill="rgba(255,255,255,0.025)" stroke="rgba(255,255,255,0.05)" strokeWidth="1" />
                <rect x={x + 8} y="348" width="18" height="12" rx="4" fill={`${color}20`} />
                <text x={x + 17} y="358" fontSize="9" fill={color} textAnchor="middle" fontFamily="sans-serif">{icon}</text>
                <rect x={x + 34} y="350" width="80" height="5" rx="2.5" fill="rgba(255,255,255,0.15)" />
                <rect x={x + 34} y="359" width="45" height="4" rx="2" fill="rgba(255,255,255,0.07)" />
              </g>
            ))}
          </>
        )}

        <defs>
          <linearGradient id="dashTopGrad" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#88c248" />
            <stop offset="50%" stopColor="#72c192" />
            <stop offset="100%" stopColor="#5ac0ec" />
          </linearGradient>
          <linearGradient id="areaFill" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#72c192" stopOpacity="0.18" />
            <stop offset="100%" stopColor="#72c192" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}
