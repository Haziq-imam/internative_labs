import { useId } from 'react';

export default function MockupMacbook({ screenColor = '#1c1e24', accentColor = '#72c192', label = '', className = '', imageUrl = '' }) {
  const reactId = useId();
  const clipId = `macbookWebpageClip-${label ? label.replace(/[^a-zA-Z0-9]/g, '') : reactId.replace(/:/g, '')}`;

  return (
    <div className={`mockup-wrapper ${className}`}>
      <svg
        viewBox="0 0 560 360"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ width: '100%', height: 'auto', display: 'block' }}
        aria-hidden="true"
      >
        {/* MacBook Lid / Screen Shell */}
        <rect x="30" y="4" width="500" height="310" rx="12" fill="#1a1b20" />
        <rect x="30" y="4" width="500" height="310" rx="12" stroke="rgba(255,255,255,0.1)" strokeWidth="1.5" />

        {/* Screen Bezel */}
        <rect x="40" y="12" width="480" height="294" rx="8" fill="#0d0e12" />

        {/* Apple Logo */}
        <circle cx="280" cy="4" r="5" fill="rgba(255,255,255,0.1)" />

        {/* Screen Content */}
        <rect x="44" y="16" width="472" height="286" rx="6" fill={screenColor} />

        {/* Browser Bar inside screen */}
        <rect x="44" y="16" width="472" height="28" rx="0" fill="#13141a" />
        <rect x="44" y="30" width="472" height="14" rx="0" fill="#13141a" />
        <rect x="44" y="16" width="472" height="18" rx="6" fill="#13141a" />
        <circle cx="66" cy="30" r="5" fill="#FF5F57" />
        <circle cx="84" cy="30" r="5" fill="#FFBD2E" />
        <circle cx="102" cy="30" r="5" fill="#28C840" />
        <rect x="120" y="22" width="280" height="16" rx="5" fill="rgba(255,255,255,0.05)" />
        <text x="136" y="33" fontSize="9" fill="rgba(255,255,255,0.25)" fontFamily="monospace">internativelabs.com</text>

        {imageUrl ? (
          <>
            <defs>
              <clipPath id={clipId}>
                <rect x="44" y="44" width="472" height="258" rx="0" />
              </clipPath>
            </defs>
            <image
              x="44"
              y="44"
              width="472"
              height="258"
              href={imageUrl}
              preserveAspectRatio="xMidYMid slice"
              clipPath={`url(#${clipId})`}
            />
          </>
        ) : (
          <>
            {/* Website Hero Area */}
            <rect x="44" y="44" width="472" height="80" fill={`${accentColor}08`} />

            {/* Nav inside website */}
            <rect x="54" y="50" width="60" height="14" rx="4" fill={`${accentColor}30`} />
            <rect x="200" y="52" width="40" height="10" rx="3" fill="rgba(255,255,255,0.1)" />
            <rect x="250" y="52" width="40" height="10" rx="3" fill="rgba(255,255,255,0.1)" />
            <rect x="300" y="52" width="40" height="10" rx="3" fill="rgba(255,255,255,0.1)" />
            <rect x="440" y="48" width="68" height="18" rx="9" fill={accentColor} />
            <rect x="454" y="53" width="40" height="8" rx="4" fill="rgba(255,255,255,0.5)" />

            {/* Hero Text */}
            <rect x="60" y="76" width="180" height="12" rx="5" fill="rgba(255,255,255,0.25)" />
            <rect x="60" y="94" width="140" height="8" rx="4" fill="rgba(255,255,255,0.12)" />
            <rect x="60" y="108" width="80" height="18" rx="9" fill={accentColor} />
            <rect x="148" y="108" width="80" height="18" rx="9" fill="rgba(255,255,255,0.08)" />

            {/* Hero Visual Block */}
            <rect x="320" y="72" width="180" height="100" rx="10" fill={`${accentColor}12`} stroke={`${accentColor}25`} strokeWidth="1" />
            {/* Mini chart inside hero visual */}
            <polyline
              points="336,155 356,140 376,128 396,118 416,108 436,115 456,102 476,95"
              fill="none" stroke={accentColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            {[336, 356, 376, 396, 416, 436, 456, 476].map((x, i) => {
              const ys = [155, 140, 128, 118, 108, 115, 102, 95];
              return <circle key={i} cx={x} cy={ys[i]} r="3" fill={accentColor} />;
            })}

            {/* Content Cards Row */}
            <rect x="54" y="152" width="134" height="72" rx="8" fill="#1c1e24" stroke="rgba(255,255,255,0.06)" strokeWidth="1" />
            <rect x="54" y="152" width="134" height="6" rx="4" fill={`${accentColor}30`} />
            <rect x="66" y="166" width="80" height="8" rx="4" fill="rgba(255,255,255,0.18)" />
            <rect x="66" y="180" width="60" height="6" rx="3" fill="rgba(255,255,255,0.09)" />
            <text x="66" y="212" fontSize="18" fontWeight="800" fill={accentColor} fontFamily="sans-serif">500+</text>

            <rect x="198" y="152" width="134" height="72" rx="8" fill="#1c1e24" stroke="rgba(255,255,255,0.06)" strokeWidth="1" />
            <rect x="198" y="152" width="134" height="6" rx="4" fill="rgba(90,192,236,0.3)" />
            <rect x="210" y="166" width="80" height="8" rx="4" fill="rgba(255,255,255,0.18)" />
            <rect x="210" y="180" width="60" height="6" rx="3" fill="rgba(255,255,255,0.09)" />
            <text x="210" y="212" fontSize="18" fontWeight="800" fill="#5ac0ec" fontFamily="sans-serif">97%</text>

            <rect x="342" y="152" width="164" height="72" rx="8" fill="#1c1e24" stroke="rgba(255,255,255,0.06)" strokeWidth="1" />
            <rect x="342" y="152" width="164" height="6" rx="4" fill="rgba(136,194,72,0.3)" />
            <rect x="354" y="166" width="90" height="8" rx="4" fill="rgba(255,255,255,0.18)" />
            <rect x="354" y="180" width="70" height="6" rx="3" fill="rgba(255,255,255,0.09)" />
            <text x="354" y="212" fontSize="18" fontWeight="800" fill="#88c248" fontFamily="sans-serif">10x ROI</text>

            {/* Bottom Row */}
            <rect x="54" y="238" width="452" height="52" rx="8" fill="rgba(255,255,255,0.02)" />
            {[0, 1, 2, 3].map(i => (
              <g key={i}>
                <rect x={66 + i * 112} y="248" width="94" height="8" rx="4" fill="rgba(255,255,255,0.1)" />
                <rect x={66 + i * 112} y="262" width="70" height="6" rx="3" fill="rgba(255,255,255,0.06)" />
                <rect x={66 + i * 112} y="274" width="50" height="6" rx="3" fill="rgba(255,255,255,0.04)" />
              </g>
            ))}
          </>
        )}

        {/* Project Label Badge */}
        {label && (
          <g>
            <rect x="54" y="270" width={label.length * 7 + 16} height="22" rx="6"
              fill={`${accentColor}20`} stroke={`${accentColor}30`} strokeWidth="1" />
            <text x={54 + (label.length * 7 + 16) / 2} y="285" fontSize="10"
              fill={accentColor} textAnchor="middle" fontFamily="sans-serif" fontWeight="700">{label}</text>
          </g>
        )}

        {/* MacBook Base / Hinge */}
        <rect x="20" y="314" width="520" height="12" rx="4" fill="#15161b" />
        <rect x="20" y="314" width="520" height="12" rx="4" stroke="rgba(255,255,255,0.08)" strokeWidth="1" />

        {/* Keyboard Deck */}
        <rect x="0" y="326" width="560" height="30" rx="6" fill="#111215" />
        <rect x="0" y="326" width="560" height="30" rx="6" stroke="rgba(255,255,255,0.06)" strokeWidth="1" />
        {/* Trackpad */}
        <rect x="215" y="332" width="130" height="18" rx="4" fill="rgba(255,255,255,0.04)" stroke="rgba(255,255,255,0.08)" strokeWidth="1" />
        {/* Keyboard keys suggestion */}
        {Array.from({ length: 12 }, (_, i) => (
          <rect key={i} x={40 + i * 42} y="332" width="34" height="8" rx="2"
            fill="rgba(255,255,255,0.03)" />
        ))}

        {/* Bottom foot strip */}
        <rect x="10" y="355" width="540" height="4" rx="2" fill="rgba(255,255,255,0.04)" />
      </svg>
    </div>
  );
}
