import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Building, Cpu } from 'lucide-react';
import Reveal from './Reveal';

export default function Experience({ lang, t }) {
  return (
    <section id="experience" style={{
      padding: '90px 0',
      backgroundColor: 'var(--bg)',
      borderBottom: '1px solid var(--border)',
      position: 'relative',
      transition: 'background-color 0.4s ease'
    }}>
      <div className="container">
        
        {/* Section Header */}
        <Reveal>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
            marginBottom: '48px'
          }}>
            <div className="section-kicker" />
            <h2 style={{ fontSize: '1.35rem', textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--text-white)' }}>
              {t.title}
            </h2>
          </div>
        </Reveal>

        {/* Timeline Layout */}
        <div style={{
          position: 'relative',
          maxWidth: '800px',
          margin: '0 auto',
          padding: '20px 0'
        }}>
          {/* Vertical Timeline Center Line (animated grow) */}
          <motion.div
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1, ease: 'easeOut' }}
            style={{
              position: 'absolute',
              left: '20px',
              top: 0,
              bottom: 0,
              width: '2px',
              transformOrigin: 'top',
              background: 'linear-gradient(to bottom, var(--accent), var(--border))'
            }}
          />

          {/* Timeline Item */}
          <Reveal direction="left" distance={50}
            style={{
              position: 'relative',
              paddingLeft: '60px',
              marginBottom: '40px'
            }}
          >
            {/* Timeline Orange Dot */}
            <div className="pulse-dot" style={{
              position: 'absolute',
              left: '11px',
              top: '6px',
              width: '20px',
              height: '20px',
              backgroundColor: 'var(--bg)',
              border: '4px solid var(--accent)',
              borderRadius: '6px',
              zIndex: 2,
              transition: 'background-color 0.4s ease'
            }} />

            {/* Experience Card */}
            <div className="glass-card" style={{
              padding: '32px',
              backgroundColor: 'var(--card-bg)'
            }}>
              
              {/* Header Info */}
              <div style={{
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'space-between',
                alignItems: 'flex-start',
                gap: '12px',
                marginBottom: '20px'
              }}>
                <div>
                  <h3 style={{ 
                    fontSize: '1.4rem', 
                    fontWeight: '800', 
                    color: 'var(--text-white)',
                    marginBottom: '6px'
                  }}>
                    {t.role}
                  </h3>
                  
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--text)' }}>
                    <Building size={16} style={{ color: 'var(--accent)' }} />
                    <span style={{ fontSize: '0.95rem', fontWeight: '600', color: 'var(--text-white)' }}>
                      {t.company}
                    </span>
                  </div>
                </div>

                {/* Duration Badge */}
                <div style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  border: '1px solid var(--accent)',
                  padding: '6px 12px',
                  borderRadius: '999px',
                  fontSize: '0.8rem',
                  fontWeight: '700',
                  color: 'var(--accent)',
                  backgroundColor: 'var(--accent-soft)',
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em'
                }}>
                  <Calendar size={14} />
                  {t.duration}
                </div>
              </div>

              {/* Project Title Block */}
              <div style={{
                backgroundColor: 'var(--bg)',
                padding: '16px',
                borderLeft: '3px solid var(--accent)',
                borderRadius: '0 var(--radius-sm) var(--radius-sm) 0',
                marginBottom: '20px',
                transition: 'background-color 0.4s ease'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
                  <Cpu size={15} style={{ color: 'var(--accent)' }} />
                  <span style={{ fontSize: '0.75rem', fontWeight: '700', textTransform: 'uppercase', color: 'var(--text-white)' }}>
                    {t.project_lbl}
                  </span>
                </div>
                <h4 style={{ fontSize: '1.05rem', fontWeight: '700', color: 'var(--text-white)' }}>
                  {t.project_name}
                </h4>
              </div>

              {/* Description */}
              <p style={{
                fontSize: '0.95rem',
                lineHeight: '1.6',
                color: 'var(--text)',
                marginBottom: '24px'
              }}>
                {t.project_desc}
              </p>

              {/* Technologies Used */}
              <div style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '8px'
              }}>
                {t.tech.map((techItem, index) => (
                  <span 
                    key={index} 
                    style={{
                      fontSize: '0.75rem',
                      backgroundColor: 'var(--bg)',
                      color: 'var(--text-white)',
                      padding: '5px 12px',
                      border: '1px solid var(--border)',
                      borderRadius: '999px',
                      fontWeight: '600',
                      transition: 'background-color 0.4s ease'
                    }}
                  >
                    {techItem}
                  </span>
                ))}
              </div>

            </div>
          </Reveal>
        </div>

      </div>
    </section>
  );
}
