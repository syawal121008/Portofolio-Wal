import React, { useEffect, useState } from 'react';
import SkillsMarquee from './components/SkillsMarquee';
import ThreeDVideoScroll from './components/ThreeDVideoScroll';
import Experience from './components/Experience';
import ProjectsSection from './components/ProjectsSection';
import Contact from './components/Contact';
import { translations } from './utils/translations';
import { Github, Mail, ArrowUp, Instagram, Sun, Moon, Menu, X } from 'lucide-react';
import { SpeedInsights } from '@vercel/speed-insights/react';
import { Analytics } from '@vercel/analytics/react';

function App() {
  const [lang, setLang] = useState('ID');
  const [theme, setTheme] = useState('dark');
  const [scrollProgress, setScrollProgress] = useState(0);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const t = translations[lang];

  // Effect to toggle light-theme class on body
  useEffect(() => {
    if (theme === 'light') {
      document.body.classList.add('light-theme');
    } else {
      document.body.classList.remove('light-theme');
    }
  }, [theme]);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        setScrollProgress((window.scrollY / totalHeight) * 100);
      }
      
      if (window.scrollY > 400) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div style={{ 
      position: 'relative', 
      minHeight: '100vh', 
      backgroundColor: 'var(--bg)',
      transition: 'background-color 0.3s ease'
    }}>
      
      {/* Scroll Progress Bar */}
      <div style={{
        position: 'fixed',
        top: 0,
        left: 0,
        height: '4px',
        width: `${scrollProgress}%`,
        backgroundColor: 'var(--accent)',
        zIndex: 1000,
        transition: 'width 0.1s ease-out'
      }} />

      {/* Header / Navbar */}
      <header style={{
        position: 'sticky',
        top: 0,
        backgroundColor: 'var(--header-bg)',
        backdropFilter: 'blur(8px)',
        borderBottom: '1px solid var(--border)',
        zIndex: 90,
        padding: '20px 0',
        transition: 'background-color 0.3s ease, border-color 0.3s ease'
      }}>
        <div className="container" style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}>
          {/* Logo */}
          <div 
            onClick={scrollToTop}
            style={{
              fontSize: '1.25rem',
              fontWeight: '800',
              color: 'var(--text-white)',
              cursor: 'pointer',
              letterSpacing: '-0.03em',
              transition: 'color 0.3s ease'
            }}
          >
            ALHABSY<span style={{ color: 'var(--accent)' }}>.</span>
          </div>

          {/* Right Header Panel (Nav + Theme Switcher + Lang switcher) */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '24px' }}>
            {/* Navigation links */}
            <nav className="desktop-nav" style={{ display: 'flex', gap: '24px' }}>
              <span 
                onClick={() => scrollToSection('projects')}
                style={{
                  fontSize: '0.85rem',
                  fontWeight: '600',
                  color: 'var(--text-white)',
                  cursor: 'pointer',
                  transition: 'color 0.2s',
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em'
                }}
                onMouseEnter={(e) => e.target.style.color = 'var(--accent)'}
                onMouseLeave={(e) => e.target.style.color = 'var(--text-white)'}
              >
                {t.nav.projects}
              </span>
              <span 
                onClick={() => scrollToSection('marquee')}
                style={{
                  fontSize: '0.85rem',
                  fontWeight: '600',
                  color: 'var(--text-white)',
                  cursor: 'pointer',
                  transition: 'color 0.2s',
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em'
                }}
                onMouseEnter={(e) => e.target.style.color = 'var(--accent)'}
                onMouseLeave={(e) => e.target.style.color = 'var(--text-white)'}
              >
                {t.nav.skills}
              </span>
              <span 
                onClick={() => scrollToSection('experience')}
                style={{
                  fontSize: '0.85rem',
                  fontWeight: '600',
                  color: 'var(--text-white)',
                  cursor: 'pointer',
                  transition: 'color 0.2s',
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em'
                }}
                onMouseEnter={(e) => e.target.style.color = 'var(--accent)'}
                onMouseLeave={(e) => e.target.style.color = 'var(--text-white)'}
              >
                {t.nav.experience}
              </span>
              <span 
                onClick={() => scrollToSection('contact')}
                style={{
                  fontSize: '0.85rem',
                  fontWeight: '600',
                  color: 'var(--text-white)',
                  cursor: 'pointer',
                  transition: 'color 0.2s',
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em'
                }}
                onMouseEnter={(e) => e.target.style.color = 'var(--accent)'}
                onMouseLeave={(e) => e.target.style.color = 'var(--text-white)'}
              >
                {t.nav.contact}
              </span>
            </nav>

            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              {/* Theme Switcher (Matahari / Bulan) */}
              <button 
                onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                style={{
                  background: 'transparent',
                  border: '1px solid var(--border)',
                  color: 'var(--text-white)',
                  cursor: 'pointer',
                  padding: '6px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  backgroundColor: 'var(--card-bg)',
                  transition: 'all 0.3s ease'
                }}
                onMouseEnter={(e) => e.currentTarget.style.borderColor = 'var(--accent)'}
                onMouseLeave={(e) => e.currentTarget.style.borderColor = 'var(--border)'}
                title={theme === 'dark' ? (lang === 'ID' ? 'Mode Terang' : 'Light Mode') : (lang === 'ID' ? 'Mode Gelap' : 'Dark Mode')}
              >
                {theme === 'dark' ? <Sun size={15} /> : <Moon size={15} />}
              </button>

              {/* Language Switcher */}
              <div style={{ 
                display: 'flex', 
                alignItems: 'center', 
                gap: '6px',
                border: '1px solid var(--border)',
                padding: '4px 8px',
                backgroundColor: 'var(--card-bg)',
                transition: 'all 0.3s ease'
              }}>
                <button 
                  onClick={() => setLang('ID')}
                  style={{
                    background: 'transparent',
                    border: 'none',
                    color: lang === 'ID' ? 'var(--accent)' : '#777777',
                    fontWeight: '700',
                    cursor: 'pointer',
                    fontSize: '0.75rem',
                    padding: '2px 4px',
                    transition: 'color 0.2s'
                  }}
                >
                  ID
                </button>
                <span style={{ color: 'var(--border)', fontSize: '0.75rem' }}>|</span>
                <button 
                  onClick={() => setLang('EN')}
                  style={{
                    background: 'transparent',
                    border: 'none',
                    color: lang === 'EN' ? 'var(--accent)' : '#777777',
                    fontWeight: '700',
                    cursor: 'pointer',
                    fontSize: '0.75rem',
                    padding: '2px 4px',
                    transition: 'color 0.2s'
                  }}
                >
                  EN
                </button>
              </div>
            </div>

            {/* Mobile Menu Toggle Button */}
            <button 
              onClick={() => setMenuOpen(!menuOpen)}
              className="mobile-nav-toggle"
              style={{
                background: 'transparent',
                border: '1px solid var(--border)',
                color: 'var(--text-white)',
                cursor: 'pointer',
                padding: '6px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: 'var(--card-bg)',
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => e.currentTarget.style.borderColor = 'var(--accent)'}
              onMouseLeave={(e) => e.currentTarget.style.borderColor = 'var(--border)'}
              title="Menu"
            >
              {menuOpen ? <X size={15} /> : <Menu size={15} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      {menuOpen && (
        <div style={{
          position: 'fixed',
          top: '73px', // matches header height
          left: 0,
          right: 0,
          backgroundColor: 'var(--header-bg)',
          backdropFilter: 'blur(12px)',
          borderBottom: '1px solid var(--border)',
          zIndex: 89,
          padding: '24px',
          display: 'flex',
          flexDirection: 'column',
          gap: '20px',
          boxShadow: '0 10px 20px rgba(0,0,0,0.5)'
        }}>
          <span 
            onClick={() => { scrollToSection('projects'); setMenuOpen(false); }}
            style={{ fontSize: '1rem', fontWeight: '700', color: 'var(--text-white)', textTransform: 'uppercase', letterSpacing: '0.05em', cursor: 'pointer' }}
          >
            {t.nav.projects}
          </span>
          <span 
            onClick={() => { scrollToSection('marquee'); setMenuOpen(false); }}
            style={{ fontSize: '1rem', fontWeight: '700', color: 'var(--text-white)', textTransform: 'uppercase', letterSpacing: '0.05em', cursor: 'pointer' }}
          >
            {t.nav.skills}
          </span>
          <span 
            onClick={() => { scrollToSection('experience'); setMenuOpen(false); }}
            style={{ fontSize: '1rem', fontWeight: '700', color: 'var(--text-white)', textTransform: 'uppercase', letterSpacing: '0.05em', cursor: 'pointer' }}
          >
            {t.nav.experience}
          </span>
          <span 
            onClick={() => { scrollToSection('contact'); setMenuOpen(false); }}
            style={{ fontSize: '1rem', fontWeight: '700', color: 'var(--text-white)', textTransform: 'uppercase', letterSpacing: '0.05em', cursor: 'pointer' }}
          >
            {t.nav.contact}
          </span>
        </div>
      )}

      {/* Main Content */}
      <main>
        <ThreeDVideoScroll lang={lang} heroT={t.hero} />
        <SkillsMarquee lang={lang} t={t.skills} />
        <Experience lang={lang} t={t.experience} />
        <ProjectsSection lang={lang} t={t.projects} />
        <Contact lang={lang} t={t.contact} />
      </main>

      {/* Footer */}
      <footer style={{
        padding: '40px 0',
        backgroundColor: 'var(--bg)',
        borderTop: '1px solid var(--border)',
        textAlign: 'center',
        transition: 'background-color 0.3s ease, border-color 0.3s ease'
      }}>
        <div className="container" style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '16px'
        }}>
          <div style={{ display: 'flex', gap: '16px' }}>
            <a 
              href="https://github.com/syawal121008" 
              target="_blank" 
              rel="noreferrer" 
              style={{ color: 'var(--text)', transition: 'color 0.2s' }}
              onMouseEnter={(e) => e.currentTarget.style.color = 'var(--accent)'}
              onMouseLeave={(e) => e.currentTarget.style.color = 'var(--text)'}
            >
              <Github size={20} />
            </a>
            <a 
              href="https://instagram.com/s.y.a.w.a.l_2008" 
              target="_blank" 
              rel="noreferrer" 
              style={{ color: 'var(--text)', transition: 'color 0.2s' }}
              onMouseEnter={(e) => e.currentTarget.style.color = 'var(--accent)'}
              onMouseLeave={(e) => e.currentTarget.style.color = 'var(--text)'}
            >
              <Instagram size={20} />
            </a>
            <a 
              href="mailto:syawaludinalhabsy2@gmail.com" 
              style={{ color: 'var(--text)', transition: 'color 0.2s' }}
              onMouseEnter={(e) => e.currentTarget.style.color = 'var(--accent)'}
              onMouseLeave={(e) => e.currentTarget.style.color = 'var(--text)'}
            >
              <Mail size={20} />
            </a>
          </div>

          <p style={{ fontSize: '0.8rem', color: '#777777' }}>
            &copy; {new Date().getFullYear()} Syawaludin Alhabsy. {lang === 'ID' ? 'Dibuat dengan React & Vite.' : 'Built with React & Vite.'}
          </p>
        </div>
      </footer>

      {/* Scroll to Top */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          style={{
            position: 'fixed',
            bottom: '30px',
            right: '30px',
            width: '44px',
            height: '44px',
            backgroundColor: 'var(--accent)',
            color: 'var(--text-black)',
            border: 'none',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 99,
            transition: 'all 0.2s'
          }}
          onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'var(--text-white)'}
          onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'var(--accent)'}
        >
          <ArrowUp size={20} strokeWidth={2.5} />
        </button>
      )}

      {/* Vercel Performance & Visitor Analytics */}
      <SpeedInsights />
      <Analytics />
    </div>
  );
}

export default App;
