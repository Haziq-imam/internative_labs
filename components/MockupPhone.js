'use client';
import { useId } from 'react';

export default function MockupPhone({ className = '', imageUrl = '' }) {
  const reactId = useId();
  const clipId = `phoneScreenClip-${imageUrl ? imageUrl.replace(/[^a-zA-Z0-9]/g, '') : reactId.replace(/:/g, '')}`;

  return (
    <div className={`mockup-wrapper ${className}`} style={{ maxWidth: 260, margin: '0 auto' }}>
      <svg
        viewBox="0 0 260 520"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ width: '100%', height: 'auto', display: 'block' }}
        aria-hidden="true"
      >
        {/* Phone Shell */}
        <rect x="2" y="2" width="256" height="516" rx="40" fill="#13141a" />
        <rect x="2" y="2" width="256" height="516" rx="40" stroke="rgba(114,193,146,0.25)" strokeWidth="2" />
        {/* Outer frame highlight */}
        <rect x="6" y="6" width="248" height="508" rx="37" stroke="rgba(255,255,255,0.06)" strokeWidth="1" />

        {/* Side Buttons */}
        <rect x="-2" y="120" width="4" height="30" rx="2" fill="rgba(255,255,255,0.15)" />
        <rect x="-2" y="162" width="4" height="50" rx="2" fill="rgba(255,255,255,0.15)" />
        <rect x="-2" y="220" width="4" height="50" rx="2" fill="rgba(255,255,255,0.15)" />
        <rect x="258" y="148" width="4" height="70" rx="2" fill="rgba(255,255,255,0.15)" />

        {/* Notch / Dynamic Island */}
        <rect x="90" y="14" width="80" height="26" rx="13" fill="#0d0e11" />
        <circle cx="158" cy="27" r="5" fill="#1a1c22" />

        {/* Screen Background */}
        <rect x="12" y="48" width="236" height="424" rx="28" fill="#111215" />

        {imageUrl ? (
          <>
            <defs>
              <clipPath id={clipId}>
                <rect x="12" y="48" width="236" height="424" rx="28" />
              </clipPath>
            </defs>
            <image
              x="12"
              y="48"
              width="236"
              height="424"
              href={imageUrl}
              preserveAspectRatio="xMidYMid slice"
              clipPath={`url(#${clipId})`}
            />
          </>
        ) : (
          <>
            {/* === APP UI === */}
            {/* Header Bar */}
            <rect x="12" y="48" width="236" height="54" rx="0" fill="#18191d" />
            <rect x="12" y="88" width="236" height="14" rx="0" fill="#18191d" />
            <rect x="12" y="48" width="236" height="28" rx="28" fill="#18191d" />

            <text x="130" y="70" fontSize="13" fontWeight="700" fill="#fff"
              textAnchor="middle" fontFamily="sans-serif">Analytics</text>
            <rect x="20" y="58" width="24" height="24" rx="8" fill="rgba(255,255,255,0.06)" />
            <rect x="216" y="58" width="24" height="24" rx="8" fill="rgba(114,193,146,0.15)" />

            {/* Metric Cards Row */}
            <rect x="20" y="114" width="102" height="80" rx="14" fill="#1c1e24" stroke="rgba(114,193,146,0.15)" strokeWidth="1" />
            <text x="34" y="138" fontSize="22" fontWeight="800" fill="#72c192" fontFamily="sans-serif">+180%</text>
            <rect x="34" y="148" width="56" height="6" rx="3" fill="rgba(255,255,255,0.12)" />
            <rect x="34" y="158" width="40" height="5" rx="2.5" fill="rgba(255,255,255,0.06)" />
            <rect x="34" y="168" width="70" height="16" rx="8" fill="rgba(114,193,146,0.1)" />
            <text x="69" y="180" fontSize="8" fill="#72c192" fontFamily="sans-serif" textAnchor="middle">↑ Traffic</text>

            <rect x="134" y="114" width="102" height="80" rx="14" fill="#1c1e24" stroke="rgba(90,192,236,0.15)" strokeWidth="1" />
            <text x="148" y="138" fontSize="22" fontWeight="800" fill="#5ac0ec" fontFamily="sans-serif">4.8★</text>
            <rect x="148" y="148" width="56" height="6" rx="3" fill="rgba(255,255,255,0.12)" />
            <rect x="148" y="158" width="40" height="5" rx="2.5" fill="rgba(255,255,255,0.06)" />
            <rect x="148" y="168" width="70" height="16" rx="8" fill="rgba(90,192,236,0.1)" />
            <text x="183" y="180" fontSize="8" fill="#5ac0ec" fontFamily="sans-serif" textAnchor="middle">App Rating</text>

            {/* Mini Bar Chart */}
            <rect x="20" y="208" width="216" height="110" rx="14" fill="#1c1e24" stroke="rgba(255,255,255,0.06)" strokeWidth="1" />
            <text x="34" y="228" fontSize="10" fill="rgba(255,255,255,0.45)" fontFamily="sans-serif" fontWeight="600">Daily Active Users</text>

            {/* Bars */}
            {[
              { x: 34, h: 36, color: '#72c19240' },
              { x: 58, h: 48, color: '#72c19240' },
              { x: 82, h: 42, color: '#72c19240' },
              { x: 106, h: 60, color: '#72c192' },
              { x: 130, h: 54, color: '#5ac0ec' },
              { x: 154, h: 70, color: '#72c192' },
              { x: 178, h: 62, color: '#5ac0ec' },
              { x: 202, h: 76, color: '#88c248' },
            ].map(({ x, h, color }, i) => (
              <rect key={i} x={x} y={298 - h} width="18" height={h} rx="5" fill={color} />
            ))}

            {/* Recent Activity */}
            <rect x="20" y="332" width="216" height="28" rx="10" fill="#1c1e24" />
            <circle cx="38" cy="346" r="8" fill="rgba(114,193,146,0.2)" />
            <rect x="54" y="340" width="90" height="6" rx="3" fill="rgba(255,255,255,0.15)" />
            <rect x="54" y="350" width="65" height="5" rx="2.5" fill="rgba(255,255,255,0.07)" />
            <rect x="196" y="341" width="32" height="10" rx="5" fill="rgba(114,193,146,0.15)" />
            <text x="212" y="350" fontSize="7" fill="#72c192" textAnchor="middle" fontFamily="sans-serif">+12%</text>

            <rect x="20" y="368" width="216" height="28" rx="10" fill="#1c1e24" />
            <circle cx="38" cy="382" r="8" fill="rgba(90,192,236,0.2)" />
            <rect x="54" y="376" width="80" height="6" rx="3" fill="rgba(255,255,255,0.15)" />
            <rect x="54" y="386" width="55" height="5" rx="2.5" fill="rgba(255,255,255,0.07)" />
            <rect x="196" y="377" width="32" height="10" rx="5" fill="rgba(90,192,236,0.15)" />
            <text x="212" y="386" fontSize="7" fill="#5ac0ec" textAnchor="middle" fontFamily="sans-serif">New</text>

            <rect x="20" y="404" width="216" height="28" rx="10" fill="#1c1e24" />
            <circle cx="38" cy="418" r="8" fill="rgba(136,194,72,0.2)" />
            <rect x="54" y="412" width="100" height="6" rx="3" fill="rgba(255,255,255,0.15)" />
            <rect x="54" y="422" width="70" height="5" rx="2.5" fill="rgba(255,255,255,0.07)" />
            <rect x="196" y="413" width="32" height="10" rx="5" fill="rgba(136,194,72,0.15)" />
            <text x="212" y="422" fontSize="7" fill="#88c248" textAnchor="middle" fontFamily="sans-serif">Done</text>

            {/* Bottom Nav */}
            <rect x="12" y="440" width="236" height="54" rx="0" fill="#14151a" />
            <rect x="12" y="440" width="236" height="14" rx="0" fill="#14151a" />
            <rect x="12" y="468" width="236" height="26" rx="28" fill="#14151a" />
            <rect x="12" y="440" width="236" height="2" fill="rgba(255,255,255,0.05)" />

            {[44, 98, 152, 206].map((x, i) => (
              <g key={i}>
                <rect x={x} y="450" width="24" height="24" rx="7"
                  fill={i === 0 ? 'rgba(114,193,146,0.2)' : 'rgba(255,255,255,0.04)'} />
                <rect x={x + 4} y="476" width="16" height="4" rx="2"
                  fill={i === 0 ? '#72c192' : 'rgba(255,255,255,0.1)'} />
              </g>
            ))}

            {/* Home Indicator */}
            <rect x="95" y="498" width="70" height="4" rx="2" fill="rgba(255,255,255,0.2)" />
          </>
        )}
      </svg>
    </div>
  );
}
