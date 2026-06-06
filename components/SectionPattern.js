export default function SectionPattern({ opacity = 0.04, color = '#72c192' }) {
  return (
    <svg
      className="section-pattern"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <pattern id={`dot-${color.replace('#', '')}`} x="0" y="0" width="28" height="28" patternUnits="userSpaceOnUse">
          <circle cx="1.5" cy="1.5" r="1.5" fill={color} fillOpacity={opacity} />
        </pattern>
        <pattern id="grid-lines" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
          <path d="M 60 0 L 0 0 0 60" fill="none" stroke={color} strokeOpacity={opacity * 0.6} strokeWidth="0.5" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill={`url(#dot-${color.replace('#', '')})`} />
      <rect width="100%" height="100%" fill="url(#grid-lines)" />
    </svg>
  );
}
