import React, { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function ThreeDVideoScroll({ lang }) {
  const containerRef = useRef(null);
  const videoRef = useRef(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Ensure the video metadata is loaded so we have a duration
    const handleLoadedMetadata = () => {
      video.currentTime = 0;
    };
    
    video.addEventListener('loadedmetadata', handleLoadedMetadata);

    let animationFrameId;

    const handleScroll = () => {
      if (!containerRef.current || !video || isNaN(video.duration)) return;

      const rect = containerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      // Calculate how far the section has scrolled relative to the viewport
      const scrolled = -rect.top;
      const totalScrollable = rect.height - windowHeight;

      if (totalScrollable <= 0) return;

      // Normalize progress between 0 and 1
      let progress = scrolled / totalScrollable;
      progress = Math.max(0, Math.min(1, progress));

      setScrollProgress(progress);

      // Smooth seek using requestAnimationFrame
      const updateVideoTime = () => {
        if (video) {
          const targetTime = progress * video.duration;
          // Only update if difference is noticeable to avoid layout jitter
          if (Math.abs(video.currentTime - targetTime) > 0.04) {
            video.currentTime = targetTime;
          }
        }
      };

      cancelAnimationFrame(animationFrameId);
      animationFrameId = requestAnimationFrame(updateVideoTime);
    };

    window.addEventListener('scroll', handleScroll);
    // Trigger once on mount to align initial position
    handleScroll();

    return () => {
      video.removeEventListener('loadedmetadata', handleLoadedMetadata);
      window.removeEventListener('scroll', handleScroll);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  // Bilingual text overlay overlays that fade in/out during scrolling
  const overlays = {
    ID: [
      { text: "Menciptakan Solusi Tanpa Batas", peak: 0.15 },
      { text: "Teknologi Menghubungkan Ide", peak: 0.50 },
      { text: "Menyongsong Masa Depan Digital", peak: 0.85 }
    ],
    EN: [
      { text: "Crafting Solutions Without Boundaries", peak: 0.15 },
      { text: "Technology Connecting Ideas", peak: 0.50 },
      { text: "Welcoming the Digital Future", peak: 0.85 }
    ]
  };

  const activeOverlays = overlays[lang] || overlays.ID;

  return (
    <div 
      ref={containerRef} 
      style={{
        position: 'relative',
        height: '220vh', // sets the scrolling distance
        backgroundColor: '#000000',
        borderBottom: '1px solid var(--border)'
      }}
    >
      {/* Sticky viewport container */}
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
        {/* Optimized 3D video */}
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

        {/* Dark overlay to match high contrast look and guarantee text readability */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.4)', // subtle dimming
          pointerEvents: 'none'
        }} />

        {/* Text Overlays */}
        {activeOverlays.map((item, index) => {
          // Calculate opacity: peak at 'item.peak', fade out on both sides
          const distance = Math.abs(scrollProgress - item.peak);
          const opacity = Math.max(0, 1 - distance * 5); // fades within 20% scroll distance

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
                transition: 'opacity 0.1s linear, visibility 0.1s linear',
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
                textShadow: '0 4px 12px rgba(0,0,0,0.8)'
              }}>
                {item.text.split(' ').map((word, wIdx) => {
                  // highlight last word in orange for contrast
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
