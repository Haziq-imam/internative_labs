'use client';
import { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';

const Lightfall = dynamic(() => import('./Lightfall'), { ssr: false });

export default function FuturisticOverlay() {
  const [opacity, setOpacity] = useState(0.45);

  useEffect(() => {
    // 1. Scroll listener for Lightfall intensity reduction
    const handleScroll = () => {
      const threshold = window.innerHeight || 800;
      const currentScroll = window.scrollY;
      // Fade opacity from 0.45 at the top to 0.12 when scrolled past the hero
      const newOpacity = Math.max(0.12, 0.45 - (currentScroll / threshold) * 0.33);
      setOpacity(newOpacity);

      // Subtle parallax on hero section items (only on desktop and only within true hero sections)
      const heroVisual = document.querySelector('.hero .hero-visual, .page-hero .hero-visual');
      const heroText = document.querySelector('.hero .hero-split > div:first-child, .page-hero .hero-split > div:first-child');
      
      if (window.innerWidth > 1024) {
        if (heroVisual) {
          heroVisual.style.transform = `translateY(${currentScroll * 0.12}px)`;
        }
        if (heroText) {
          heroText.style.transform = `translateY(${currentScroll * -0.05}px)`;
        }
      } else {
        if (heroVisual) {
          heroVisual.style.transform = '';
        }
        if (heroText) {
          heroText.style.transform = '';
        }
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });

    // 2. Mousemove listeners for Card BorderGlow and Magnetic Buttons
    const handleMouseMove = (e) => {
      // Card mouse coordinates tracking
      const cards = document.querySelectorAll(
        '.card, .service-card, .testimonial-card, .process-step, .hero-image-frame, .trust-inner'
      );
      cards.forEach(card => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        card.style.setProperty('--mouse-x', `${x}px`);
        card.style.setProperty('--mouse-y', `${y}px`);
      });

      // Magnetic Buttons effect
      const magnetics = document.querySelectorAll('.btn, .industry-chip, .nav-links > .nav-link, .nav-dropdown button');
      magnetics.forEach(el => {
        const rect = el.getBoundingClientRect();
        const elX = rect.left + rect.width / 2;
        const elY = rect.top + rect.height / 2;

        const distanceX = e.clientX - elX;
        const distanceY = e.clientY - elY;
        const distance = Math.hypot(distanceX, distanceY);

        const radius = 60;
        if (distance < radius) {
          // Magnetic pull
          const pullStrength = 0.28;
          const x = distanceX * pullStrength;
          const y = distanceY * pullStrength;
          el.style.transform = `translate(${x}px, ${y}px) scale(1.03)`;
          el.style.transition = 'transform 0.1s ease-out';
        } else {
          // Reset style with smooth transition
          el.style.transform = '';
          el.style.transition = 'transform 0.5s cubic-bezier(0.25, 1, 0.5, 1)';
        }
      });
    };
    window.addEventListener('mousemove', handleMouseMove);

    // 3. Scroll Intersection Observer for Fade-Up animations
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.08 }
    );

    const animateElements = document.querySelectorAll(
      '.section-header h2, .section-header p, .card, .service-card, .testimonial-card, .process-step, .hero-split > div, .trust-item'
    );
    animateElements.forEach(el => {
      el.classList.add('fade-up-init');
      observer.observe(el);
    });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
      animateElements.forEach(el => observer.unobserve(el));
    };
  }, []);

  return (
    <>
      {/* 1. Moving Mesh Gradient Background */}
      <div className="moving-mesh-bg" />

      {/* 2. Global Lightfall Canvas Overlay */}
      <div className="global-lightfall-overlay" style={{ opacity }}>
        <Lightfall
          colors={['#72c192', '#5ac0ec', '#88c248', '#3ab0d4']}
          backgroundColor="#111215"
          speed={0.4}
          streakCount={6}
          streakWidth={0.8}
          streakLength={1.1}
          glow={0.8}
          density={0.45}
          twinkle={0.5}
          zoom={3.2}
          backgroundGlow={0.2}
          opacity={1.0}
          mouseInteraction={true}
          mouseStrength={0.4}
          mouseRadius={0.7}
          mouseDampening={0.12}
          mixBlendMode="screen"
        />
      </div>

      {/* 3. Floating background element shapes */}
      <div className="floating-shapes">
        <div className="shape shape-green-glow" />
        <div className="shape shape-blue-glow" />
        <div className="shape shape-orb-3" />
      </div>
    </>
  );
}
