import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Code, Shield, Cpu } from 'lucide-react';

export default function Hero({ lang, t }) {
  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section style={{
      minHeight: '90vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      padding: '80px 0 60px 0',
      position: 'relative',
      borderBottom: '1px solid var(--border)',
    }}>
      {/* Background Stark Decorative Grid */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundImage: 'linear-gradient(to right, var(--border) 1px, transparent 1px), linear-gradient(to bottom, var(--border) 1px, transparent 1px)',
        backgroundSize: '80px 80px',
        opacity: 0.15,
        pointerEvents: 'none',
        zIndex: 0
      }} />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <motion.div
          key={lang} // triggers re-animation on language switch
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Tag / Status badge */}
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            border: '1px solid var(--accent)',
            padding: '6px 12px',
            fontSize: '0.85rem',
            fontWeight: '600',
            color: 'var(--accent)',
            marginBottom: '32px',
            textTransform: 'uppercase',
            letterSpacing: '0.05em'
          }}>
            <span style={{
              width: '6px',
              height: '6px',
              backgroundColor: 'var(--accent)',
              borderRadius: '50%',
              display: 'inline-block'
            }} />
            {t.badge}
          </div>

          {/* Heading */}
          <h1 style={{
            fontSize: 'clamp(2.5rem, 6vw, 5rem)',
            lineHeight: 1.05,
            fontWeight: 800,
            marginBottom: '24px',
            color: 'var(--text-white)'
          }}>
            {t.greeting} <br />
            <span style={{ color: 'var(--accent)' }}>Syawaludin Alhabsy</span>
          </h1>

          {/* Subtitle */}
          <p style={{
            fontSize: 'clamp(1.1rem, 2vw, 1.5rem)',
            color: 'var(--text-white)',
            maxWidth: '700px',
            lineHeight: 1.4,
            marginBottom: '32px',
            fontWeight: '400'
          }}>
            {t.description}
          </p>

          {/* Key Traits Grid */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '20px',
            marginBottom: '48px',
            maxWidth: '800px'
          }}>
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
              <Code style={{ color: 'var(--accent)', flexShrink: 0, marginTop: '4px' }} size={20} />
              <div>
                <h3 style={{ fontSize: '1rem', marginBottom: '4px', fontWeight: '600' }}>{t.trait1_title}</h3>
                <p style={{ fontSize: '0.85rem', color: 'var(--text)' }}>{t.trait1_desc}</p>
              </div>
            </div>
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
              <Shield style={{ color: 'var(--accent)', flexShrink: 0, marginTop: '4px' }} size={20} />
              <div>
                <h3 style={{ fontSize: '1rem', marginBottom: '4px', fontWeight: '600' }}>{t.trait2_title}</h3>
                <p style={{ fontSize: '0.85rem', color: 'var(--text)' }}>{t.trait2_desc}</p>
              </div>
            </div>
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
              <Cpu style={{ color: 'var(--accent)', flexShrink: 0, marginTop: '4px' }} size={20} />
              <div>
                <h3 style={{ fontSize: '1rem', marginBottom: '4px', fontWeight: '600' }}>{t.trait3_title}</h3>
                <p style={{ fontSize: '0.85rem', color: 'var(--text)' }}>{t.trait3_desc}</p>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '16px'
          }}>
            <button
              onClick={() => scrollToSection('projects')}
              className="btn-primary"
            >
              {t.btn_projects}
              <ArrowRight size={18} />
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="btn-secondary"
            >
              {t.btn_contact}
            </button>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <div style={{
        position: 'absolute',
        bottom: '24px',
        left: '50%',
        transform: 'translateX(-50%)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '8px',
        opacity: 0.7,
        fontSize: '0.75rem',
        textTransform: 'uppercase',
        letterSpacing: '0.1em',
        cursor: 'pointer'
      }} onClick={() => scrollToSection('marquee')}>
        <span>{t.scroll_down}</span>
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
    </section>
  );
}
