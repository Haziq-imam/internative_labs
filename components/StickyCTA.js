'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function StickyCTA() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 2000);
    return () => clearTimeout(timer);
  }, []);

  if (!visible) return null;

  return (
    <div className="sticky-cta">
      <p className="sticky-cta-text">
        <strong>Ready to grow?</strong> Let's build something great together.
      </p>
      <Link href="/free-consultation" className="btn btn-primary btn-sm">
        Free Consultation →
      </Link>
      <button
        onClick={() => setVisible(false)}
        style={{ color: 'rgba(255,255,255,0.4)', fontSize: '1.1rem', marginLeft: '4px' }}
        aria-label="Close"
      >
        ✕
      </button>
    </div>
  );
}
