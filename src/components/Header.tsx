import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

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
        <Link to="/" className="logo" style={{ display: 'flex', alignItems: 'center' }}>
          <img 
            src="https://gillettetravelctr.com/wp-content/uploads/2026/05/GTC-GilletteTravelCenter-FINAL-e1778707195173-1024x981.png" 
            alt="Gillette Travel Center" 
            style={{ height: '55px', width: 'auto' }}
          />
        </Link>
        <nav className="nav-links" style={{ fontFamily: 'var(--font-heading)', display: 'flex', alignItems: 'center', gap: '2.5rem' }}>
          
          <Link 
            to="/behind-the-build"
            style={{ color: 'var(--color-accent)', textDecoration: 'none', fontWeight: 700, fontSize: '1rem', textTransform: 'uppercase', transition: 'color 0.2s' }}
            onMouseOver={e => e.currentTarget.style.color = 'var(--color-on-primary)'}
            onMouseOut={e => e.currentTarget.style.color = 'var(--color-accent)'}
          >
            Behind The Build
          </Link>
          
          <a 
            href="https://www.sinclairoil.com/customers/dinopay-app" 
            target="_blank" 
            rel="noopener noreferrer" 
            style={{ color: 'var(--color-accent)', textDecoration: 'none', fontWeight: 700, fontSize: '1rem', textTransform: 'uppercase', transition: 'color 0.2s', display: 'flex', alignItems: 'center', gap: '0.4rem' }}
            onMouseOver={e => e.currentTarget.style.color = 'var(--color-on-primary)'}
            onMouseOut={e => e.currentTarget.style.color = 'var(--color-accent)'}
          >
            <span style={{ fontSize: '1.2rem', lineHeight: 1, filter: 'grayscale(100%) brightness(200%)' }}>🦕</span>
            Save 15¢/gal
          </a>

          <a 
            href="https://maps.app.goo.gl/BtBqQRkwYgpyvJFKA" 
            target="_blank" 
            rel="noopener noreferrer" 
            style={{ color: 'var(--color-accent)', textDecoration: 'none', fontWeight: 700, fontSize: '1rem', textTransform: 'uppercase', transition: 'color 0.2s' }}
            onMouseOver={e => e.currentTarget.style.color = 'var(--color-on-primary)'}
            onMouseOut={e => e.currentTarget.style.color = 'var(--color-accent)'}
          >
            Get Directions
          </a>

          <a 
            href="https://www.facebook.com/people/Gillette-Travel-Center/61581945784764/" 
            target="_blank" 
            rel="noopener noreferrer" 
            style={{ color: 'var(--color-accent)', display: 'flex', alignItems: 'center', transition: 'opacity 0.2s', marginLeft: '0.5rem' }} 
            onMouseOver={e => e.currentTarget.style.opacity = '0.8'} 
            onMouseOut={e => e.currentTarget.style.opacity = '1'}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/>
            </svg>
          </a>

        </nav>
      </div>
    </header>
  );
}
