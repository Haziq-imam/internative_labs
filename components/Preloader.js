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
        padding: '20px',
      }}
    >
      {/* Spinner container — responsive sizing */}
      <div
        style={{
          position: 'relative',
          width: 'clamp(80px, 20vw, 120px)',
          height: 'clamp(80px, 20vw, 120px)',
          marginBottom: 'clamp(16px, 3vw, 24px)',
        }}
      >
        {/* Outer spinning gradient ring */}
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
        {/* Inner pulsing logo circle */}
        <div
          style={{
            position: 'absolute',
            top: '12.5%',
            left: '12.5%',
            width: '75%',
            height: '75%',
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
              width: '50%',
              height: '50%',
              objectFit: 'contain',
              animation: 'loader-pulse 2s ease-in-out infinite',
            }}
          />
        </div>
      </div>

      {/* Animated text — responsive font size */}
      <div
        className="preloader-text-container"
        style={{
          display: 'flex',
          gap: 'clamp(2px, 0.5vw, 4px)',
          marginBottom: 'clamp(16px, 3vw, 24px)',
        }}
      >
        {['I', 'n', 't', 'e', 'r', 'N', 'a', 't', 'i', 'v', 'e'].map(
          (letter, i) => (
            <span
              key={i}
              style={{
                fontFamily: "var(--font-display)",
                fontWeight: 700,
                fontSize: 'clamp(0.95rem, 2.5vw, 1.25rem)',
                background: 'linear-gradient(to right, #88c248, #5ac0ec)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                animation: `loader-bounce 1.4s ease-in-out infinite`,
                animationDelay: `${i * 0.08}s`,
              }}
            >
              {letter}
            </span>
          )
        )}
      </div>

      {/* Progress bar */}
      <div
        style={{
          width: 'clamp(120px, 30vw, 200px)',
          height: '3px',
          background: 'rgba(255,255,255,0.06)',
          borderRadius: '3px',
          overflow: 'hidden',
        }}
      >
        <div
          style={{
            width: '100%',
            height: '100%',
            background: 'linear-gradient(to right, #88c248, #72c192, #5ac0ec)',
            borderRadius: '3px',
            animation: 'loader-progress 1.2s ease-in-out forwards',
          }}
        />
      </div>


    </div>
  );
}
