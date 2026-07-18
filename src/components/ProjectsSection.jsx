import React, { useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Github, ExternalLink, X, Code, ShieldCheck } from 'lucide-react';

export default function ProjectsSection({ lang, t }) {
  const scrollRef = useRef(null);
  const [selectedProjId, setSelectedProjId] = useState(null);

  // Retrieve the selected project object from the translated list
  const selectedProj = selectedProjId ? t.list.find(proj => proj.id === selectedProjId) : null;

  const scroll = (direction) => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const offset = direction === 'left' ? -clientWidth * 0.75 : clientWidth * 0.75;
      scrollRef.current.scrollTo({
        left: scrollLeft + offset,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="projects" style={{
      padding: '80px 0',
      backgroundColor: 'var(--bg)',
      borderBottom: '1px solid var(--border)',
      position: 'relative',
      transition: 'background-color 0.3s ease'
    }}>
      <div className="container" style={{ position: 'relative' }}>
        
        {/* Section Header with Navigation Arrows */}
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-end',
          marginBottom: '40px'
        }}>
          <div>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              marginBottom: '8px'
            }}>
              <div style={{ width: '12px', height: '12px', backgroundColor: 'var(--accent)' }} />
              <h2 style={{ fontSize: '1.25rem', textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--text-white)' }}>
                {t.title}
              </h2>
            </div>
            <p style={{ fontSize: '0.9rem', color: 'var(--text)' }}>
              {t.desc}
            </p>
          </div>

          {/* Navigation Controls */}
          <div style={{ display: 'flex', gap: '8px' }}>
            <button 
              onClick={() => scroll('left')} 
              style={{
                width: '44px',
                height: '44px',
                backgroundColor: 'transparent',
                border: '1px solid var(--border-light)',
                color: 'var(--text-white)',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'all 0.2s'
              }}
              onMouseEnter={(e) => e.currentTarget.style.borderColor = 'var(--accent)'}
              onMouseLeave={(e) => e.currentTarget.style.borderColor = 'var(--border-light)'}
              title={lang === 'ID' ? 'Geser Kiri' : 'Scroll Left'}
            >
              <ChevronLeft size={20} />
            </button>
            <button 
              onClick={() => scroll('right')} 
              style={{
                width: '44px',
                height: '44px',
                backgroundColor: 'transparent',
                border: '1px solid var(--border-light)',
                color: 'var(--text-white)',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'all 0.2s'
              }}
              onMouseEnter={(e) => e.currentTarget.style.borderColor = 'var(--accent)'}
              onMouseLeave={(e) => e.currentTarget.style.borderColor = 'var(--border-light)'}
              title={lang === 'ID' ? 'Geser Kanan' : 'Scroll Right'}
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        {/* Horizontal scrollable track */}
        <div 
          ref={scrollRef}
          className="horizontal-scroll-container"
          style={{
            display: 'flex',
            gap: '24px',
            overflowX: 'auto',
            paddingBottom: '24px',
            scrollbarWidth: 'thin',
            scrollbarColor: 'var(--accent) var(--bg)',
          }}
        >
          {t.list.map((proj) => (
            <div 
              key={proj.id}
              className="horizontal-scroll-item glass-card"
              onClick={() => setSelectedProjId(proj.id)}
              style={{
                width: 'clamp(280px, 80vw, 380px)',
                padding: '32px',
                cursor: 'pointer',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                minHeight: '340px',
                position: 'relative'
              }}
            >
              <div>
                {/* Accent line */}
                <div style={{
                  height: '4px',
                  width: '40px',
                  backgroundColor: 'var(--accent)',
                  marginBottom: '24px'
                }} />

                <span style={{ 
                  fontSize: '0.75rem', 
                  color: 'var(--accent)', 
                  fontWeight: '700', 
                  textTransform: 'uppercase', 
                  letterSpacing: '0.05em' 
                }}>
                  {proj.category}
                </span>

                <h3 style={{ 
                  fontSize: '1.4rem', 
                  fontWeight: '700', 
                  marginTop: '8px', 
                  marginBottom: '16px',
                  color: 'var(--text-white)' 
                }}>
                  {proj.title}
                </h3>

                <p style={{ 
                  fontSize: '0.9rem', 
                  lineHeight: '1.5', 
                  color: 'var(--text)',
                  display: '-webkit-box',
                  WebkitLineClamp: 3,
                  WebkitBoxOrient: 'vertical',
                  overflow: 'hidden'
                }}>
                  {proj.desc}
                </p>
              </div>

              {/* Technologies list */}
              <div style={{ marginTop: '24px' }}>
                <div style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: '6px'
                }}>
                  {proj.tech.slice(0, 3).map((techTag, idx) => (
                    <span 
                      key={idx} 
                      style={{
                        fontSize: '0.7rem',
                        backgroundColor: 'var(--card-bg)',
                        color: 'var(--text-white)',
                        padding: '4px 8px',
                        border: '1px solid var(--border)',
                        fontWeight: '600',
                        transition: 'background-color 0.3s ease'
                      }}
                    >
                      {techTag}
                    </span>
                  ))}
                  {proj.tech.length > 3 && (
                    <span style={{ fontSize: '0.7rem', color: 'var(--text)', padding: '4px' }}>
                      +{proj.tech.length - 3}
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Project Detail Modal */}
      <AnimatePresence>
        {selectedProj && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: 'var(--overlay-bg)',
              zIndex: 999,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '20px',
              backdropFilter: 'blur(4px)',
              transition: 'background-color 0.3s ease'
            }}
            onClick={() => setSelectedProjId(null)}
          >
            <motion.div 
              initial={{ scale: 0.95, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 20 }}
              transition={{ type: 'spring', damping: 25, stiffness: 350 }}
              style={{
                width: '100%',
                maxWidth: '600px',
                backgroundColor: 'var(--bg)',
                border: '2px solid var(--accent)',
                padding: '40px',
                position: 'relative',
                transition: 'background-color 0.3s ease'
              }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button 
                onClick={() => setSelectedProjId(null)}
                style={{
                  position: 'absolute',
                  top: '20px',
                  right: '20px',
                  background: 'transparent',
                  border: 'none',
                  color: 'var(--text-white)',
                  cursor: 'pointer',
                  padding: '4px'
                }}
              >
                <X size={24} />
              </button>

              <div style={{ marginBottom: '32px' }}>
                <span style={{ 
                  fontSize: '0.8rem', 
                  color: 'var(--accent)', 
                  fontWeight: '700', 
                  textTransform: 'uppercase', 
                  letterSpacing: '0.1em' 
                }}>
                  {selectedProj.category}
                </span>
                <h2 style={{ 
                  fontSize: '2rem', 
                  color: 'var(--text-white)', 
                  fontWeight: '800',
                  marginTop: '8px' 
                }}>
                  {selectedProj.title}
                </h2>
              </div>

              <div style={{ marginBottom: '24px' }}>
                <h4 style={{ fontSize: '0.9rem', textTransform: 'uppercase', color: 'var(--text-white)', marginBottom: '8px', letterSpacing: '0.05em' }}>
                  {t.proj_desc}
                </h4>
                <p style={{ fontSize: '0.95rem', color: 'var(--text)', lineHeight: '1.6' }}>
                  {selectedProj.detailDesc}
                </p>
              </div>

              {/* Specs Grid */}
              <div style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: '20px',
                padding: '20px 0',
                borderTop: '1px solid var(--border)',
                borderBottom: '1px solid var(--border)',
                marginBottom: '32px'
              }}>
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
                    <Code size={16} style={{ color: 'var(--accent)' }} />
                    <span style={{ fontSize: '0.85rem', fontWeight: '700', color: 'var(--text-white)' }}>{t.tech_stack}</span>
                  </div>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '4px' }}>
                    {selectedProj.tech.map((techTag, idx) => (
                      <span key={idx} style={{ fontSize: '0.75rem', backgroundColor: 'var(--card-bg)', color: 'var(--text-white)', padding: '2px 8px', border: '1px solid var(--border)', transition: 'background-color 0.3s ease' }}>{techTag}</span>
                    ))}
                  </div>
                </div>
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
                    <ShieldCheck size={16} style={{ color: 'var(--accent)' }} />
                    <span style={{ fontSize: '0.85rem', fontWeight: '700', color: 'var(--text-white)' }}>{t.code_status}</span>
                  </div>
                  <span style={{ fontSize: '0.85rem', color: 'var(--text)' }}>
                    {t.status_val}
                  </span>
                </div>
              </div>

              {/* Action Buttons */}
              <div style={{ display: 'flex', gap: '12px' }}>
                <a 
                  href={selectedProj.github} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn-primary"
                  style={{ textDecoration: 'none' }}
                >
                  <Github size={18} />
                  {t.view_github}
                </a>
                {selectedProj.link !== '#' && (
                  <a 
                    href={selectedProj.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="btn-secondary"
                    style={{ textDecoration: 'none' }}
                  >
                    <ExternalLink size={18} />
                    {t.demo}
                  </a>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
