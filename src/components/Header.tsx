import { useEffect, useState } from 'react';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''}`}>
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1rem 0', transition: 'padding 0.3s' }}>
        <a href="/" className="logo" style={{ display: 'flex', alignItems: 'center' }}>
          <img 
            src="https://gillettetravelctr.com/wp-content/uploads/2026/05/GTC-GilletteTravelCenter-FINAL-e1778707195173-1024x981.png" 
            alt="Gillette Travel Center" 
            style={{ height: '55px', width: 'auto' }}
          />
        </a>
        <nav className="nav-links" style={{ fontFamily: 'var(--font-heading)', display: 'flex', alignItems: 'center', gap: '2rem' }}>
          <a href="#amenities" style={{ color: 'var(--color-on-primary)', textDecoration: 'none', fontWeight: 700, fontSize: '1rem', textTransform: 'uppercase' }}>Offerings</a>
          <a href="https://www.facebook.com/people/Gillette-Travel-Center/61581945784764/" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--color-accent)', display: 'flex', alignItems: 'center', transition: 'opacity 0.2s' }} onMouseOver={e => e.currentTarget.style.opacity = '0.8'} onMouseOut={e => e.currentTarget.style.opacity = '1'}>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/>
            </svg>
          </a>
          {/* Explicitly using a span inside the anchor to guarantee black text rendering without CSS class conflicts */}
          <a href="https://maps.app.goo.gl/BtBqQRkwYgpyvJFKA" target="_blank" rel="noopener noreferrer" className="nav-cta" style={{ padding: '0.6rem 1.2rem', background: 'var(--color-accent)', borderRadius: 'var(--radius-md)', textDecoration: 'none' }}>
            <span style={{ color: '#000', fontFamily: 'var(--font-heading)', fontSize: '0.9rem', fontWeight: 900, textTransform: 'uppercase', letterSpacing: '1px' }}>Get Directions</span>
          </a>
        </nav>
      </div>
    </header>
  );
}
