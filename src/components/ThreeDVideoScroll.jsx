import React, { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Code, Shield, Cpu } from 'lucide-react';

export default function ThreeDVideoScroll({ lang, heroT }) {
  const containerRef = useRef(null);
  const videoRef = useRef(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleLoadedMetadata = () => {
      video.currentTime = 0;
    };
    
    video.addEventListener('loadedmetadata', handleLoadedMetadata);

    let animationFrameId;

    const handleScroll = () => {
      if (!containerRef.current || !video || isNaN(video.duration)) return;

      const rect = containerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      const scrolled = -rect.top;
      const totalScrollable = rect.height - windowHeight;

      if (totalScrollable <= 0) return;

      let progress = scrolled / totalScrollable;
      progress = Math.max(0, Math.min(1, progress));

      setScrollProgress(progress);

      const updateVideoTime = () => {
        if (video) {
          const targetTime = progress * video.duration;
          if (Math.abs(video.currentTime - targetTime) > 0.04) {
            video.currentTime = targetTime;
          }
        }
      };

      cancelAnimationFrame(animationFrameId);
      animationFrameId = requestAnimationFrame(updateVideoTime);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => {
      video.removeEventListener('loadedmetadata', handleLoadedMetadata);
      window.removeEventListener('scroll', handleScroll);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  // Text overlays for phases 2, 3, 4
  const overlays = {
    ID: [
      { text: "Menciptakan Solusi Tanpa Batas", peak: 0.45 },
      { text: "Teknologi Menghubungkan Ide", peak: 0.70 },
      { text: "Menyongsong Masa Depan Digital", peak: 0.92 }
    ],
    EN: [
      { text: "Crafting Solutions Without Boundaries", peak: 0.45 },
      { text: "Technology Connecting Ideas", peak: 0.70 },
      { text: "Welcoming the Digital Future", peak: 0.92 }
    ]
  };

  const activeOverlays = overlays[lang] || overlays.ID;

  // Calculate Hero opacity and transform (slides out between scroll progress 0.0 and 0.20)
  const heroOpacity = Math.max(0, 1 - scrollProgress * 5);
  const heroTranslateY = -scrollProgress * 150; // slide up slightly

  return (
    <div 
      ref={containerRef} 
      style={{
        position: 'relative',
        height: '300vh', // long scroll track for smooth pacing
        backgroundColor: '#000000',
        borderBottom: '1px solid var(--border)'
      }}
    >
      {/* Sticky view frame */}
      <div style={{
        position: 'sticky',
        top: 0,
        height: '100vh',
        width: '100vw',
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#000000'
      }}>
        {/* Full HD 3D Video Background */}
        <video
          ref={videoRef}
          src="/assets/scenery-3d.mp4"
          type="video/mp4"
          muted
          playsInline
          preload="auto"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            pointerEvents: 'none',
            display: 'block'
          }}
        />

        {/* Dynamic Dark Mask for stark text readability */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.55)', // Stark dimglass
          pointerEvents: 'none',
          zIndex: 1
        }} />

        {/* Phase 1: Hero Section Overlay (only visible at the top) */}
        {heroOpacity > 0.01 && (
          <div 
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              paddingTop: '80px',
              opacity: heroOpacity,
              transform: `translateY(${heroTranslateY}px)`,
              zIndex: 5,
              transition: 'opacity 0.05s linear, transform 0.05s linear',
              pointerEvents: heroOpacity < 0.2 ? 'none' : 'auto'
            }}
          >
            <div className="container">
              <motion.div
                key={lang}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                {/* Status Badge */}
                <div style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  border: '1px solid var(--accent)',
                  padding: '6px 12px',
                  fontSize: '0.85rem',
                  fontWeight: '600',
                  color: 'var(--accent)',
                  marginBottom: '24px',
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em',
                  backgroundColor: 'rgba(0,0,0,0.6)'
                }}>
                  <span style={{
                    width: '6px',
                    height: '6px',
                    backgroundColor: 'var(--accent)',
                    borderRadius: '50%',
                    display: 'inline-block'
                  }} />
                  {heroT.badge}
                </div>

                {/* Main Heading */}
                <h1 style={{
                  fontSize: 'clamp(2.5rem, 5.5vw, 4.8rem)',
                  lineHeight: 1.05,
                  fontWeight: 800,
                  marginBottom: '20px',
                  color: 'var(--text-white)',
                  textShadow: '0 4px 12px rgba(0,0,0,0.7)'
                }}>
                  {heroT.greeting} <br />
                  <span style={{ color: 'var(--accent)' }}>Syawaludin Alhabsy</span>
                </h1>

                {/* Subtitle */}
                <p style={{
                  fontSize: 'clamp(1.05rem, 1.8vw, 1.35rem)',
                  color: 'var(--text-white)',
                  maxWidth: '700px',
                  lineHeight: 1.4,
                  marginBottom: '28px',
                  fontWeight: '400',
                  textShadow: '0 2px 6px rgba(0,0,0,0.8)'
                }}>
                  {heroT.description}
                </p>

                {/* Key Traits Grid */}
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                  gap: '20px',
                  marginBottom: '40px',
                  maxWidth: '800px'
                }}>
                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                    <Code style={{ color: 'var(--accent)', flexShrink: 0, marginTop: '4px' }} size={20} />
                    <div>
                      <h3 style={{ fontSize: '0.95rem', marginBottom: '4px', fontWeight: '700', color: 'var(--text-white)' }}>{heroT.trait1_title}</h3>
                      <p style={{ fontSize: '0.85rem', color: '#dddddd', textShadow: '0 1px 3px rgba(0,0,0,0.8)' }}>{heroT.trait1_desc}</p>
                    </div>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                    <Shield style={{ color: 'var(--accent)', flexShrink: 0, marginTop: '4px' }} size={20} />
                    <div>
                      <h3 style={{ fontSize: '0.95rem', marginBottom: '4px', fontWeight: '700', color: 'var(--text-white)' }}>{heroT.trait2_title}</h3>
                      <p style={{ fontSize: '0.85rem', color: '#dddddd', textShadow: '0 1px 3px rgba(0,0,0,0.8)' }}>{heroT.trait2_desc}</p>
                    </div>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                    <Cpu style={{ color: 'var(--accent)', flexShrink: 0, marginTop: '4px' }} size={20} />
                    <div>
                      <h3 style={{ fontSize: '0.95rem', marginBottom: '4px', fontWeight: '700', color: 'var(--text-white)' }}>{heroT.trait3_title}</h3>
                      <p style={{ fontSize: '0.85rem', color: '#dddddd', textShadow: '0 1px 3px rgba(0,0,0,0.8)' }}>{heroT.trait3_desc}</p>
                    </div>
                  </div>
                </div>

                {/* Call-to-actions */}
                <div style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: '16px'
                }}>
                  <button
                    onClick={() => scrollToSection('projects')}
                    className="btn-primary"
                    style={{ textShadow: 'none' }}
                  >
                    {heroT.btn_projects}
                    <ArrowRight size={18} />
                  </button>
                  <button
                    onClick={() => scrollToSection('contact')}
                    className="btn-secondary"
                    style={{ backgroundColor: 'rgba(0,0,0,0.5)', borderColor: 'var(--border)', color: 'var(--text-white)' }}
                  >
                    {heroT.btn_contact}
                  </button>
                </div>
              </motion.div>
            </div>

            {/* Downward Scroll Indicator */}
            <div 
              style={{
                position: 'absolute',
                bottom: '24px',
                left: '50%',
                transform: 'translateX(-50%)',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '8px',
                opacity: 0.8,
                fontSize: '0.75rem',
                textTransform: 'uppercase',
                letterSpacing: '0.1em',
                cursor: 'pointer',
                color: 'var(--text-white)'
              }} 
              onClick={() => scrollToSection('marquee')}
            >
              <span>{heroT.scroll_down}</span>
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                style={{
                  width: '2px',
                  height: '24px',
                  backgroundColor: 'var(--accent)'
                }}
              />
            </div>
          </div>
        )}

        {/* Phase 2, 3, 4: Cinematic Scrolling Text Overlays */}
        {activeOverlays.map((item, index) => {
          // Calculate opacity based on peak scroll progress
          const distance = Math.abs(scrollProgress - item.peak);
          const opacity = Math.max(0, 1 - distance * 6); // fast fade in/out

          return (
            <div
              key={index}
              style={{
                position: 'absolute',
                width: '100%',
                textAlign: 'center',
                padding: '0 24px',
                opacity: opacity,
                visibility: opacity > 0.01 ? 'visible' : 'hidden',
                pointerEvents: 'none',
                transition: 'opacity 0.08s linear, visibility 0.08s linear',
                zIndex: 10
              }}
            >
              <h2 style={{
                fontSize: 'clamp(1.5rem, 4.5vw, 3.5rem)',
                fontWeight: '900',
                color: 'var(--text-white)',
                textTransform: 'uppercase',
                letterSpacing: '-0.02em',
                lineHeight: '1.2',
                textShadow: '0 4px 16px rgba(0,0,0,0.9)'
              }}>
                {item.text.split(' ').map((word, wIdx) => {
                  const isLastWord = wIdx === item.text.split(' ').length - 1;
                  return (
                    <span 
                      key={wIdx} 
                      style={{ color: isLastWord ? 'var(--accent)' : 'inherit' }}
                    >
                      {word}{' '}
                    </span>
                  );
                })}
              </h2>
            </div>
          );
        })}
      </div>
    </div>
  );
}
