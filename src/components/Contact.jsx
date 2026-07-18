import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Github, Send, ArrowUpRight, Instagram } from 'lucide-react';


export default function Contact({ lang, t }) {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.message) {
      setSubmitted(true);
      setTimeout(() => {
        setFormData({ name: '', email: '', message: '' });
        setSubmitted(false);
      }, 3000);
    }
  };

  return (
    <section id="contact" style={{
      padding: '80px 0',
      backgroundColor: 'var(--bg)',
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

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '48px',
          alignItems: 'start'
        }}>
          
          {/* Contact Details Column */}
          <motion.div
            key={`info-${lang}`}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 style={{
              fontSize: '2rem',
              fontWeight: '800',
              marginBottom: '20px',
              color: 'var(--text-white)',
              lineHeight: '1.2'
            }}>
              {t.heading.split('ide proyek')[0]}
              <span style={{ color: 'var(--accent)' }}>
                {lang === 'ID' ? 'ide proyek' : 'project idea'}
              </span>
              {t.heading.split('ide proyek')[1] || t.heading.split('project idea')[1] || ''}
            </h3>
            <p style={{
              fontSize: '0.95rem',
              color: 'var(--text)',
              lineHeight: '1.6',
              marginBottom: '32px',
              maxWidth: '400px'
            }}>
              {t.desc}
            </p>

            {/* Quick Contact Links */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <a 
                href="mailto:syawaludinalhabsy2@gmail.com" 
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '16px',
                  color: 'var(--text-white)',
                  textDecoration: 'none',
                  padding: '16px',
                  border: '1px solid var(--border)',
                  backgroundColor: 'var(--card-bg)',
                  transition: 'border-color 0.2s'
                }}
                onMouseEnter={(e) => e.currentTarget.style.borderColor = 'var(--accent)'}
                onMouseLeave={(e) => e.currentTarget.style.borderColor = 'var(--border)'}
              >
                <Mail size={20} style={{ color: 'var(--accent)' }} />
                <div style={{ textAlign: 'left' }}>
                  <div style={{ fontSize: '0.75rem', textTransform: 'uppercase', color: 'var(--text)' }}>{t.email_lbl}</div>
                  <div style={{ fontSize: '0.9rem', fontWeight: '600' }}>syawaludinalhabsy2@gmail.com</div>
                </div>
                <ArrowUpRight size={16} style={{ marginLeft: 'auto', opacity: 0.5 }} />
              </a>

              <a 
                href="https://github.com/syawal121008" 
                target="_blank" 
                rel="noopener noreferrer"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '16px',
                  color: 'var(--text-white)',
                  textDecoration: 'none',
                  padding: '16px',
                  border: '1px solid var(--border)',
                  backgroundColor: 'var(--card-bg)',
                  transition: 'border-color 0.2s'
                }}
                onMouseEnter={(e) => e.currentTarget.style.borderColor = 'var(--accent)'}
                onMouseLeave={(e) => e.currentTarget.style.borderColor = 'var(--border)'}
              >
                <Github size={20} style={{ color: 'var(--accent)' }} />
                <div style={{ textAlign: 'left' }}>
                  <div style={{ fontSize: '0.75rem', textTransform: 'uppercase', color: 'var(--text)' }}>{t.github_lbl}</div>
                  <div style={{ fontSize: '0.9rem', fontWeight: '600' }}>github.com/syawal121008</div>
                </div>
                <ArrowUpRight size={16} style={{ marginLeft: 'auto', opacity: 0.5 }} />
              </a>

              <a 
                href="https://instagram.com/s.y.a.w.a.l_2008" 
                target="_blank" 
                rel="noopener noreferrer"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '16px',
                  color: 'var(--text-white)',
                  textDecoration: 'none',
                  padding: '16px',
                  border: '1px solid var(--border)',
                  backgroundColor: 'var(--card-bg)',
                  transition: 'border-color 0.2s'
                }}
                onMouseEnter={(e) => e.currentTarget.style.borderColor = 'var(--accent)'}
                onMouseLeave={(e) => e.currentTarget.style.borderColor = 'var(--border)'}
              >
                <Instagram size={20} style={{ color: 'var(--accent)' }} />
                <div style={{ textAlign: 'left' }}>
                  <div style={{ fontSize: '0.75rem', textTransform: 'uppercase', color: 'var(--text)' }}>Instagram</div>
                  <div style={{ fontSize: '0.9rem', fontWeight: '600' }}>@s.y.a.w.a.l_2008</div>
                </div>
                <ArrowUpRight size={16} style={{ marginLeft: 'auto', opacity: 0.5 }} />
              </a>
            </div>
          </motion.div>

          {/* Form Column */}
          <motion.div
            key={`form-${lang}`}
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <form onSubmit={handleSubmit} style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '20px',
              padding: '32px',
              border: '1px solid var(--border)',
              backgroundColor: 'var(--card-bg)'
            }}>
              <div>
                <label style={{
                  display: 'block',
                  fontSize: '0.75rem',
                  textTransform: 'uppercase',
                  color: 'var(--text-white)',
                  fontWeight: '700',
                  marginBottom: '8px',
                  letterSpacing: '0.05em'
                }}>
                  {t.form_name}
                </label>
                <input 
                  type="text" 
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  style={{
                    width: '100%',
                    padding: '12px',
                    backgroundColor: 'var(--input-bg)',
                    border: '1px solid var(--border-light)',
                    color: 'var(--text-white)',
                    fontFamily: 'var(--font-sans)',
                    fontSize: '0.9rem',
                    transition: 'background-color 0.3s ease, border-color 0.3s ease, color 0.3s ease'
                  }}
                />
              </div>

              <div>
                <label style={{
                  display: 'block',
                  fontSize: '0.75rem',
                  textTransform: 'uppercase',
                  color: 'var(--text-white)',
                  fontWeight: '700',
                  marginBottom: '8px',
                  letterSpacing: '0.05em'
                }}>
                  {t.form_email}
                </label>
                <input 
                  type="email" 
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  style={{
                    width: '100%',
                    padding: '12px',
                    backgroundColor: 'var(--input-bg)',
                    border: '1px solid var(--border-light)',
                    color: 'var(--text-white)',
                    fontFamily: 'var(--font-sans)',
                    fontSize: '0.9rem',
                    transition: 'background-color 0.3s ease, border-color 0.3s ease, color 0.3s ease'
                  }}
                />
              </div>

              <div>
                <label style={{
                  display: 'block',
                  fontSize: '0.75rem',
                  textTransform: 'uppercase',
                  color: 'var(--text-white)',
                  fontWeight: '700',
                  marginBottom: '8px',
                  letterSpacing: '0.05em'
                }}>
                  {t.form_msg}
                </label>
                <textarea 
                  rows={4}
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  style={{
                    width: '100%',
                    padding: '12px',
                    backgroundColor: 'var(--input-bg)',
                    border: '1px solid var(--border-light)',
                    color: 'var(--text-white)',
                    fontFamily: 'var(--font-sans)',
                    fontSize: '0.9rem',
                    resize: 'none',
                    transition: 'background-color 0.3s ease, border-color 0.3s ease, color 0.3s ease'
                  }}
                />
              </div>

              <button 
                type="submit" 
                className="btn-primary"
                style={{
                  justifyContent: 'center',
                  padding: '14px',
                  width: '100%'
                }}
              >
                {submitted ? (
                  <>{t.sent}</>
                ) : (
                  <>
                    {t.btn_send}
                    <Send size={16} />
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
