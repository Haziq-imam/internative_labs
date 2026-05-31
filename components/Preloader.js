'use client';
import { useState, useEffect } from 'react';

export default function Preloader() {
  const [visible, setVisible] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    // Disable body scroll while loading
    document.body.style.overflow = 'hidden';

    const fadeTimer = setTimeout(() => {
      setFadeOut(true);
    }, 1200);

    const removeTimer = setTimeout(() => {
      setVisible(false);
      document.body.style.overflow = 'unset';
    }, 1600);

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(removeTimer);
      document.body.style.overflow = 'unset';
    };
  }, []);

  if (!visible) return null;

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        background: '#111215',
        zIndex: 99999,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        opacity: fadeOut ? 0 : 1,
        visibility: fadeOut ? 'hidden' : 'visible',
        transition: 'opacity 0.4s ease, visibility 0.4s ease',
      }}
    >
      <div style={{ position: 'relative', width: '120px', height: '120px', marginBottom: '24px' }}>
        {/* Creative outer spinning gradient circle */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            borderRadius: '50%',
            border: '3px solid transparent',
            borderTopColor: '#88c248',
            borderBottomColor: '#5ac0ec',
            animation: 'loader-spin 1.2s linear infinite',
          }}
        />
        {/* Inner static/pulsing logo placeholder */}
        <div
          style={{
            position: 'absolute',
            top: '15px',
            left: '15px',
            width: '90px',
            height: '90px',
            borderRadius: '50%',
            background: '#18191d',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 0 20px rgba(114, 193, 146, 0.2)',
          }}
        >
          <img
            src="/logo-header.png"
            alt="IL logo"
            style={{
              width: '45px',
              height: '45px',
              objectFit: 'contain',
              animation: 'loader-pulse 2s ease-in-out infinite',
            }}
          />
        </div>
      </div>

      {/* Bouncing/letter-animating text */}
      <div className="preloader-text-container" style={{ display: 'flex', gap: '4px' }}>
        {['I', 'n', 't', 'e', 'r', 'N', 'a', 't', 'i', 'v', 'e'].map((letter, i) => (
          <span
            key={i}
            style={{
              fontFamily: "var(--font-display)",
              fontWeight: 700,
              fontSize: '1.25rem',
              background: 'linear-gradient(to right, #88c248, #5ac0ec)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              animation: `loader-bounce 1.4s ease-in-out infinite`,
              animationDelay: `${i * 0.08}s`,
            }}
          >
            {letter}
          </span>
        ))}
      </div>

      <style jsx global>{`
        @keyframes loader-spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        @keyframes loader-pulse {
          0%, 100% { transform: scale(0.95); opacity: 0.8; }
          50% { transform: scale(1.05); opacity: 1; }
        }
        @keyframes loader-bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-8px); }
        }
      `}</style>
    </div>
  );
}
