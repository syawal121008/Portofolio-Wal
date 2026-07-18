import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, Building, Cpu } from 'lucide-react';

export default function Experience({ lang, t }) {
  return (
    <section id="experience" style={{
      padding: '80px 0',
      backgroundColor: 'var(--bg)',
      borderBottom: '1px solid var(--border)',
      position: 'relative',
      transition: 'background-color 0.3s ease'
    }}>
      <div className="container">
        
        {/* Section Header */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '12px',
          marginBottom: '40px'
        }}>
          <div style={{ width: '12px', height: '12px', backgroundColor: 'var(--accent)' }} />
          <h2 style={{ fontSize: '1.25rem', textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--text-white)' }}>
            {t.title}
          </h2>
        </div>

        {/* Timeline Layout */}
        <div style={{
          position: 'relative',
          maxWidth: '800px',
          margin: '0 auto',
          padding: '20px 0'
        }}>
          {/* Vertical Timeline Center Line */}
          <div style={{
            position: 'absolute',
            left: '20px',
            top: 0,
            bottom: 0,
            width: '2px',
            backgroundColor: 'var(--border)'
          }} />

          {/* Timeline Item */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            style={{
              position: 'relative',
              paddingLeft: '60px',
              marginBottom: '40px'
            }}
          >
            {/* Timeline Orange Dot */}
            <div style={{
              position: 'absolute',
              left: '11px',
              top: '6px',
              width: '20px',
              height: '20px',
              backgroundColor: '#000000',
              backgroundColor: 'var(--bg)',
              border: '4px solid var(--accent)',
              borderRadius: '0px', // stark squares instead of circles fits minimalist theme
              zIndex: 2,
              transition: 'background-color 0.3s ease'
            }} />

            {/* Experience Card */}
            <div className="glass-card" style={{
              padding: '32px',
              backgroundColor: 'var(--card-bg)',
              border: '1px solid var(--border)',
              transition: 'border-color 0.3s ease'
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
                    marginBottom: '4px'
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
                  fontSize: '0.8rem',
                  fontWeight: '700',
                  color: 'var(--accent)',
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
                marginBottom: '20px',
                transition: 'background-color 0.3s ease'
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
              <div>
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
                        backgroundColor: 'var(--card-bg)',
                        color: 'var(--text-white)',
                        padding: '4px 10px',
                        border: '1px solid var(--border)',
                        fontWeight: '600',
                        transition: 'background-color 0.3s ease'
                      }}
                    >
                      {techItem}
                    </span>
                  ))}
                </div>
              </div>

            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
