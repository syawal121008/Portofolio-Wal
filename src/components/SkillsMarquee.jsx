import React from 'react';
import { 
  Terminal, Database, Layout, Globe, Cpu, Shield, 
  GitBranch, Zap, Layers, Server, Code2, Monitor 
} from 'lucide-react';
import Reveal from './Reveal';

export default function SkillsMarquee({ lang, t }) {
  
  const skillsRow1 = [
    { name: 'React.js', icon: Layout },
    { name: 'JavaScript', icon: Code2 },
    { name: 'Node.js', icon: Server },
    { name: 'PHP', icon: Terminal },
    { name: 'Python', icon: Cpu },
    { name: 'MySQL', icon: Database },
    { name: 'Git & GitHub', icon: GitBranch },
    { name: 'Tailwind CSS', icon: Layers }
  ];

  const skillsRow2 = [
    { name: 'Laravel', icon: Server },
    { name: t.items.face, icon: Shield },
    { name: 'REST API', icon: Globe },
    { name: t.items.responsive, icon: Monitor },
    { name: t.items.ecommerce, icon: Zap },
    { name: t.items.security, icon: Shield },
    { name: 'Bootstrap', icon: Layers },
    { name: 'Computer Vision', icon: Cpu }
  ];

  const edgeFade = {
    position: 'absolute',
    top: 0,
    bottom: 0,
    width: '120px',
    zIndex: 2,
    pointerEvents: 'none'
  };

  return (
    <section id="marquee" style={{
      padding: '80px 0',
      backgroundColor: 'var(--bg)',
      borderBottom: '1px solid var(--border)',
      overflow: 'hidden',
      transition: 'background-color 0.4s ease'
    }}>
      <div className="container" style={{ marginBottom: '40px' }}>
        <Reveal>
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
          <p style={{ fontSize: '0.95rem', color: 'var(--text)', maxWidth: '560px', lineHeight: 1.6 }}>
            {t.desc}
          </p>
        </Reveal>
      </div>

      <div className="marquee-track" style={{ position: 'relative' }}>
        {/* Left/right fade masks */}
        <div style={{ ...edgeFade, left: 0, background: 'linear-gradient(to right, var(--bg), transparent)' }} />
        <div style={{ ...edgeFade, right: 0, background: 'linear-gradient(to left, var(--bg), transparent)' }} />

        {/* Row 1: Left scrolling */}
        <div style={{
          display: 'flex',
          overflow: 'hidden',
          userSelect: 'none',
          marginBottom: '20px',
          position: 'relative'
        }}>
          <div className="animate-marquee-left" style={{ display: 'flex', gap: '16px', paddingRight: '16px' }}>
            {[...skillsRow1, ...skillsRow1].map((skill, index) => {
              const IconComponent = skill.icon;
              return (
                <div 
                  key={`row1-${index}`} 
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '8px',
                    background: 'var(--grad-accent)',
                    color: 'var(--text-black)',
                    padding: '12px 22px',
                    fontWeight: '700',
                    fontSize: '0.95rem',
                    textTransform: 'uppercase',
                    borderRadius: '999px',
                    letterSpacing: '0.05em',
                    whiteSpace: 'nowrap',
                    boxShadow: '0 6px 18px -10px var(--accent-glow)'
                  }}
                >
                  <IconComponent size={16} strokeWidth={2.5} />
                  {skill.name}
                </div>
              );
            })}
          </div>
        </div>

        {/* Row 2: Right scrolling */}
        <div style={{
          display: 'flex',
          overflow: 'hidden',
          userSelect: 'none',
          position: 'relative'
        }}>
          <div className="animate-marquee-right" style={{ display: 'flex', gap: '16px', paddingRight: '16px' }}>
            {[...skillsRow2, ...skillsRow2].map((skill, index) => {
              const IconComponent = skill.icon;
              return (
                <div 
                  key={`row2-${index}`} 
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '8px',
                    backgroundColor: 'var(--card-bg)',
                    color: 'var(--text-white)',
                    padding: '12px 22px',
                    fontWeight: '600',
                    fontSize: '0.95rem',
                    textTransform: 'uppercase',
                    border: '1px solid var(--border-light)',
                    borderRadius: '999px',
                    letterSpacing: '0.05em',
                    whiteSpace: 'nowrap'
                  }}
                >
                  <IconComponent size={16} style={{ color: 'var(--accent)' }} />
                  {skill.name}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
