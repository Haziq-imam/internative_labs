'use client';
import { useId } from 'react';

export default function MockupBrowser({ className = '', imageUrl = '' }) {
  const reactId = useId();
  const clipId = `browserContentClip-${imageUrl ? imageUrl.replace(/[^a-zA-Z0-9]/g, '') : reactId.replace(/:/g, '')}`;

  return (
    <div className={`mockup-wrapper ${className}`}>
      <svg
        viewBox="0 0 740 480"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ width: '100%', height: 'auto', display: 'block' }}
        aria-hidden="true"
      >
        {/* Browser Shell */}
        <rect width="740" height="480" rx="16" fill="#1c1e24" />
        <rect width="740" height="480" rx="16" stroke="rgba(114,193,146,0.18)" strokeWidth="1.5" />

        {/* Title Bar */}
        <rect width="740" height="44" rx="16" fill="#14151a" />
        <rect y="28" width="740" height="16" fill="#14151a" />

        {/* Traffic Lights */}
        <circle cx="22" cy="22" r="6" fill="#FF5F57" />
        <circle cx="42" cy="22" r="6" fill="#FFBD2E" />
        <circle cx="62" cy="22" r="6" fill="#28C840" />

        {/* Address Bar */}
        <rect x="90" y="10" width="480" height="24" rx="6" fill="rgba(255,255,255,0.05)" stroke="rgba(255,255,255,0.08)" strokeWidth="1" />
        <text x="106" y="26" fontSize="11" fill="rgba(255,255,255,0.3)" fontFamily="monospace">internativelabs.com/dashboard</text>
        <circle cx="100" cy="22" r="4" fill="rgba(114,193,146,0.4)" />

        {/* Nav Icons */}
        <rect x="590" y="12" width="20" height="20" rx="4" fill="rgba(255,255,255,0.05)" />
        <rect x="616" y="12" width="20" height="20" rx="4" fill="rgba(255,255,255,0.05)" />
        <rect x="642" y="12" width="20" height="20" rx="4" fill="rgba(255,255,255,0.05)" />
        <rect x="668" y="12" width="54" height="20" rx="4" fill="rgba(114,193,146,0.2)" />
        <text x="695" y="26" fontSize="9" fill="#72c192" fontFamily="sans-serif" textAnchor="middle" fontWeight="700">LIVE</text>

        {imageUrl ? (
          <>
            <defs>
              <clipPath id={clipId}>
                <rect x="0" y="44" width="740" height="436" rx="0" />
              </clipPath>
            </defs>
            <image
              x="0"
              y="44"
              width="740"
              height="436"
              href={imageUrl}
              preserveAspectRatio="xMidYMid slice"
              clipPath={`url(#${clipId})`}
            />
          </>
        ) : (
          <>
            {/* === SIDEBAR === */}
            <rect x="0" y="44" width="168" height="436" fill="#13141a" />
            <rect x="167" y="44" width="1" height="436" fill="rgba(255,255,255,0.06)" />

            {/* Sidebar Logo */}
            <rect x="14" y="58" width="28" height="28" rx="7" fill="url(#brandGrad)" />
            <text x="28" y="77" fontSize="14" fill="#fff" textAnchor="middle" fontWeight="900" fontFamily="sans-serif">iL</text>
            <rect x="50" y="63" width="70" height="8" rx="4" fill="rgba(255,255,255,0.15)" />
            <rect x="50" y="75" width="48" height="6" rx="3" fill="rgba(255,255,255,0.07)" />

            {/* Sidebar Nav Items */}
            {[
              { y: 108, active: true, label: 'Dashboard', icon: '▦' },
              { y: 136, active: false, label: 'Analytics', icon: '↗' },
              { y: 164, active: false, label: 'Projects', icon: '◈' },
              { y: 192, active: false, label: 'Clients', icon: '◉' },
              { y: 220, active: false, label: 'Reports', icon: '≡' },
              { y: 248, active: false, label: 'Settings', icon: '⚙' },
            ].map((item, i) => {
              const { y, active, label } = item;
              return (
                <g key={label}>
                  <rect x="10" y={y - 4} width="148" height="24" rx="6"
                    fill={active ? 'rgba(114,193,146,0.15)' : 'transparent'} />
                  <rect x="12" y={y - 2} width="3" height="20" rx="1.5"
                    fill={active ? '#72c192' : 'transparent'} />
                  <rect x="22" y={y + 2} width="12" height="12" rx="3"
                    fill={active ? 'rgba(114,193,146,0.3)' : 'rgba(255,255,255,0.07)'} />
                  <rect x="40" y={y + 4} width={active ? 60 : [58, 67, 72, 55, 63, 59][i] ?? 60} height="6" rx="3"
                    fill={active ? '#72c192' : 'rgba(255,255,255,0.15)'} />
                </g>
              );
            })}

            {/* Sidebar Footer */}
            <rect x="10" y="438" width="148" height="30" rx="8" fill="rgba(255,255,255,0.04)" stroke="rgba(255,255,255,0.06)" strokeWidth="1" />
            <circle cx="30" cy="453" r="8" fill="url(#brandGrad)" />
            <rect x="46" y="447" width="50" height="6" rx="3" fill="rgba(255,255,255,0.2)" />
            <rect x="46" y="457" width="36" height="5" rx="2.5" fill="rgba(255,255,255,0.08)" />

            {/* === MAIN CONTENT === */}
            {/* Top Stats Row */}
            {[
              { x: 184, color: '#72c192', val: '500+', label: 'Projects' },
              { x: 328, color: '#5ac0ec', val: '97%', label: 'Retention' },
              { x: 472, color: '#88c248', val: '$2.4M', label: 'Revenue' },
              { x: 616, color: '#72c192', val: '4.9★', label: 'Rating' },
            ].map(({ x, color, val, label }) => (
              <g key={label}>
                <rect x={x} y="56" width="128" height="68" rx="10"
                  fill="rgba(255,255,255,0.03)" stroke="rgba(255,255,255,0.07)" strokeWidth="1" />
                <text x={x + 14} y="84" fontSize="18" fontWeight="800" fill={color}
                  fontFamily="sans-serif">{val}</text>
                <rect x={x + 14} y="98" width="55" height="6" rx="3" fill="rgba(255,255,255,0.12)" />
                <rect x={x + 100} y="62" width="16" height="16" rx="4"
                  fill={`${color}20`} />
              </g>
            ))}

            {/* Line Chart */}
            <rect x="184" y="140" width="374" height="166" rx="10"
              fill="rgba(255,255,255,0.025)" stroke="rgba(255,255,255,0.07)" strokeWidth="1" />
            <text x="200" y="162" fontSize="11" fill="rgba(255,255,255,0.5)" fontFamily="sans-serif" fontWeight="600">Traffic Growth</text>
            <rect x="200" y="170" width="60" height="5" rx="2.5" fill="rgba(114,193,146,0.2)" />

            {/* Chart Grid Lines */}
            {[195, 220, 245, 270, 295].map(y => (
              <line key={y} x1="200" y1={y} x2="544" y2={y}
                stroke="rgba(255,255,255,0.04)" strokeWidth="1" />
            ))}

            {/* Chart Line - Traffic */}
            <polyline
              points="210,285 255,265 300,250 345,230 390,210 435,195 480,200 525,185"
              fill="none" stroke="#72c192" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
            <polyline
              points="210,285 255,265 300,250 345,230 390,210 435,195 480,200 525,185"
              fill="url(#chartFill)" strokeWidth="0" />

            {/* Chart Line 2 */}
            <polyline
              points="210,295 255,280 300,275 345,260 390,255 435,240 480,245 525,230"
              fill="none" stroke="#5ac0ec" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" strokeDasharray="4 2" />

            {/* Chart Dot */}
            <circle cx="525" cy="185" r="5" fill="#72c192" />
            <circle cx="525" cy="185" r="9" fill="#72c192" fillOpacity="0.2" />

            {/* Chart Labels */}
            {['Jan', 'Mar', 'May', 'Jul', 'Sep', 'Nov'].map((m, i) => (
              <text key={m} x={210 + i * 63} y="308" fontSize="9" fill="rgba(255,255,255,0.25)"
                fontFamily="sans-serif" textAnchor="middle">{m}</text>
            ))}

            {/* Donut / Ring Chart */}
            <rect x="574" y="140" width="150" height="166" rx="10"
              fill="rgba(255,255,255,0.025)" stroke="rgba(255,255,255,0.07)" strokeWidth="1" />
            <text x="589" y="162" fontSize="11" fill="rgba(255,255,255,0.5)" fontFamily="sans-serif" fontWeight="600">Services</text>
            <circle cx="649" cy="230" r="42" stroke="#1c1e24" strokeWidth="14" fill="none" />
            <circle cx="649" cy="230" r="42" stroke="#72c192" strokeWidth="14" fill="none"
              strokeDasharray="132 264" strokeLinecap="round" transform="rotate(-90 649 230)" />
            <circle cx="649" cy="230" r="42" stroke="#5ac0ec" strokeWidth="14" fill="none"
              strokeDasharray="79 264" strokeDashoffset="-132" strokeLinecap="round" transform="rotate(-90 649 230)" />
            <circle cx="649" cy="230" r="42" stroke="#88c248" strokeWidth="14" fill="none"
              strokeDasharray="52 264" strokeDashoffset="-211" strokeLinecap="round" transform="rotate(-90 649 230)" />
            <text x="649" y="228" fontSize="16" fontWeight="800" fill="#fff" textAnchor="middle" fontFamily="sans-serif">76%</text>
            <text x="649" y="242" fontSize="8" fill="rgba(255,255,255,0.35)" textAnchor="middle" fontFamily="sans-serif">Target</text>

            {/* Bottom Cards Row */}
            {[
              { x: 184, label: 'RetailEdge USA', sub: 'eCommerce · Complete', badge: '+180%', badgeColor: '#72c192' },
              { x: 340, label: 'MedConnect App', sub: 'Healthcare · In Progress', badge: '4.8★', badgeColor: '#5ac0ec' },
              { x: 496, label: 'Zenith SaaS', sub: 'SaaS · Complete', badge: '+45%', badgeColor: '#88c248' },
            ].map(({ x, label, sub, badge, badgeColor }) => (
              <g key={label}>
                <rect x={x} y="322" width="140" height="100" rx="10"
                  fill="rgba(255,255,255,0.03)" stroke="rgba(255,255,255,0.07)" strokeWidth="1" />
                <rect x={x + 12} y="338" width="20" height="20" rx="5"
                  fill={`${badgeColor}20`} stroke={`${badgeColor}40`} strokeWidth="1" />
                <rect x={x + 40} y="340" width="70" height="7" rx="3.5" fill="rgba(255,255,255,0.18)" />
                <rect x={x + 40} y="352" width="50" height="5" rx="2.5" fill="rgba(255,255,255,0.07)" />
                <rect x={x + 12} y="372" width="116" height="5" rx="2.5" fill="rgba(255,255,255,0.06)" />
                <rect x={x + 12} y="382" width="90" height="5" rx="2.5" fill="rgba(255,255,255,0.04)" />
                <rect x={x + 80} y="398" width="52" height="14" rx="7"
                  fill={`${badgeColor}20`} />
                <text x={x + 106} y="409" fontSize="9" fill={badgeColor}
                  fontFamily="sans-serif" fontWeight="700" textAnchor="middle">{badge}</text>
              </g>
            ))}
          </>
        )}

        {/* Gradient Defs */}
        <defs>
          <linearGradient id="brandGrad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#88c248" />
            <stop offset="50%" stopColor="#72c192" />
            <stop offset="100%" stopColor="#5ac0ec" />
          </linearGradient>
          <linearGradient id="chartFill" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#72c192" stopOpacity="0.15" />
            <stop offset="100%" stopColor="#72c192" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}
