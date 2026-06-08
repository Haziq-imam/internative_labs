/**
 * BrowserFrame — wraps an <img> in a realistic browser chrome shell.
 * Keeps hero visuals looking like a real browser window (professional).
 *
 * Usage:
 *   <BrowserFrame url="internativelabs.com" src="/images/agency-dashboard.png" alt="Dashboard" />
 */
export default function BrowserFrame({ src, alt, url = 'internativelabs.com', className = '' }) {
  return (
    <div className={`hero-image-frame ${className}`}>
      {/* Browser top bar */}
      <div className="hero-browser-bar">
        <span className="hero-browser-dot hero-browser-dot-red" />
        <span className="hero-browser-dot hero-browser-dot-yellow" />
        <span className="hero-browser-dot hero-browser-dot-green" />
        <div className="hero-browser-url">
          🔒 https://{url}
        </div>
      </div>
      {/* Screenshot */}
      <img src={src} alt={alt} className="hero-image" />
    </div>
  );
}
