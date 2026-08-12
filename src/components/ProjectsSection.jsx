import React, { useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Github, ExternalLink, X, Code, ShieldCheck } from 'lucide-react';
import Reveal from './Reveal';

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

  const navBtn = {
    width: '46px',
    height: '46px',
    backgroundColor: 'var(--card-bg)',
    border: '1px solid var(--border-light)',
    color: 'var(--text-white)',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '999px',
    transition: 'all 0.25s'
  };

  return (
    <section id="projects" style={{
      padding: '90px 0',
      backgroundColor: 'var(--bg)',
      borderBottom: '1px solid var(--border)',
      position: 'relative',
      transition: 'background-color 0.4s ease'
    }}>
      <div className="container" style={{ position: 'relative' }}>
        
        {/* Section Header with Navigation Arrows */}
        <Reveal>
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-end',
            marginBottom: '48px',
            gap: '20px',
            flexWrap: 'wrap'
          }}>
            <div>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                marginBottom: '10px'
              }}>
                <div className="section-kicker" />
                <h2 style={{ fontSize: '1.35rem', textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--text-white)' }}>
                  {t.title}
                </h2>
              </div>
              <p style={{ fontSize: '0.95rem', color: 'var(--text)', maxWidth: '520px', lineHeight: 1.6 }}>
                {t.desc}
              </p>
            </div>

            {/* Navigation Controls */}
            <div style={{ display: 'flex', gap: '8px' }}>
              <button 
                onClick={() => scroll('left')} 
                style={navBtn}
                onMouseEnter={(e) => { e.currentTarget.style.borderColor = 'var(--accent)'; e.currentTarget.style.color = 'var(--accent)'; }}
                onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'var(--border-light)'; e.currentTarget.style.color = 'var(--text-white)'; }}
                title={lang === 'ID' ? 'Geser Kiri' : 'Scroll Left'}
              >
                <ChevronLeft size={20} />
              </button>
              <button 
                onClick={() => scroll('right')} 
                style={navBtn}
                onMouseEnter={(e) => { e.currentTarget.style.borderColor = 'var(--accent)'; e.currentTarget.style.color = 'var(--accent)'; }}
                onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'var(--border-light)'; e.currentTarget.style.color = 'var(--text-white)'; }}
                title={lang === 'ID' ? 'Geser Kanan' : 'Scroll Right'}
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </div>
        </Reveal>

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
          {t.list.map((proj, idx) => (
            <motion.div 
              key={proj.id}
              className="horizontal-scroll-item glass-card"
              onClick={() => setSelectedProjId(proj.id)}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.55, delay: Math.min(idx * 0.08, 0.4), ease: [0.16, 1, 0.3, 1] }}
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
                  background: 'var(--grad-accent)',
                  borderRadius: '999px',
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
                  {proj.tech.slice(0, 3).map((techTag, tIdx) => (
                    <span 
                      key={tIdx} 
                      style={{
                        fontSize: '0.7rem',
                        backgroundColor: 'var(--bg)',
                        color: 'var(--text-white)',
                        padding: '4px 10px',
                        border: '1px solid var(--border)',
                        borderRadius: '999px',
                        fontWeight: '600',
                        transition: 'background-color 0.4s ease'
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
            </motion.div>
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
              backdropFilter: 'blur(6px)',
              transition: 'background-color 0.4s ease'
            }}
            onClick={() => setSelectedProjId(null)}
          >
            <motion.div 
              initial={{ scale: 0.95, y: 20, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.95, y: 20, opacity: 0 }}
              transition={{ type: 'spring', damping: 25, stiffness: 350 }}
              style={{
                width: '100%',
                maxWidth: '600px',
                backgroundColor: 'var(--bg-elevated)',
                border: '1px solid var(--accent)',
                borderRadius: 'var(--radius)',
                boxShadow: 'var(--shadow-glow)',
                padding: '40px',
                position: 'relative',
                maxHeight: '90vh',
                overflowY: 'auto',
                transition: 'background-color 0.4s ease'
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
                  background: 'var(--card-bg)',
                  border: '1px solid var(--border)',
                  borderRadius: '999px',
                  color: 'var(--text-white)',
                  cursor: 'pointer',
                  padding: '6px',
                  display: 'flex',
                  transition: 'all 0.2s'
                }}
                onMouseEnter={(e) => e.currentTarget.style.borderColor = 'var(--accent)'}
                onMouseLeave={(e) => e.currentTarget.style.borderColor = 'var(--border)'}
              >
                <X size={20} />
              </button>

              <div style={{ marginBottom: '32px', paddingRight: '40px' }}>
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
                      <span key={idx} style={{ fontSize: '0.75rem', backgroundColor: 'var(--card-bg)', color: 'var(--text-white)', padding: '3px 10px', border: '1px solid var(--border)', borderRadius: '999px', transition: 'background-color 0.4s ease' }}>{techTag}</span>
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
              <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
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
