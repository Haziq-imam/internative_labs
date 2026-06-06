export default function FloatingCard({ icon, value, label, color = '#72c192', delay = '0s', style = {} }) {
  return (
    <div
      className="floating-card animate-float"
      style={{ animationDelay: delay, ...style }}
      aria-hidden="true"
    >
      <div className="floating-card-icon" style={{ background: `${color}18`, border: `1px solid ${color}30` }}>
        <span style={{ fontSize: '1rem' }}>{icon}</span>
      </div>
      <div className="floating-card-body">
        <div className="floating-card-value" style={{ color }}>{value}</div>
        <div className="floating-card-label">{label}</div>
      </div>
    </div>
  );
}
