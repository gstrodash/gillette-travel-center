export default function Location() {
  return (
    <section id="location" style={{ backgroundColor: 'var(--color-foreground)', padding: '4rem 0' }}>
      <div className="container" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem', alignItems: 'center' }}>
        
        <div className="reveal">
          <div style={{ marginBottom: '1.5rem' }}>
            <span className="hero-tag" style={{ color: 'var(--color-accent)', borderColor: 'var(--color-accent)', margin: 0 }}>Location</span>
          </div>
          <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', color: '#fff', marginBottom: '1rem', fontFamily: 'var(--font-heading)', fontWeight: 400, lineHeight: 1.1 }}>
            Find Us in<br />Gillette
          </h2>
          <div style={{ fontSize: '1.5rem', color: '#fff', marginBottom: '1rem', fontFamily: 'var(--font-editorial)', fontWeight: 500 }}>
            202 N Garner Lake Rd<br />
            Gillette, Wyoming
          </div>
          <p style={{ marginBottom: '2rem', color: 'rgba(255,255,255,0.9)', fontSize: '1.5rem', fontFamily: 'var(--font-editorial)', maxWidth: '500px', lineHeight: 1.6, fontWeight: 500 }}>
            Conveniently located right off I-90. We are your premium connection on the road.
          </p>
          <a href="https://maps.app.goo.gl/BtBqQRkwYgpyvJFKA" target="_blank" rel="noopener noreferrer" className="btn" style={{ display: 'inline-block', background: 'var(--color-accent)', color: '#000', border: 'none', padding: '0.8rem 1.5rem', fontWeight: 900, textTransform: 'uppercase', letterSpacing: '1px', fontFamily: 'var(--font-heading)', fontSize: '1.2rem' }}>
            Get Directions
          </a>
        </div>
        
        <div className="reveal" style={{ animationDelay: '0.2s' }}>
          <img 
            src="https://gillettetravelctr.com/wp-content/uploads/2026/05/gtc_map.png" 
            alt="Gillette Travel Center Map" 
            style={{ width: '100%', height: 'auto', display: 'block', borderRadius: 'var(--radius-lg)', boxShadow: '0 20px 40px rgba(0,0,0,0.5)' }} 
          />
        </div>

      </div>

      {/* PointOneAI Credit replacing the old white footer */}
      <div style={{ textAlign: 'center', color: 'rgba(255,255,255,0.4)', marginTop: '6rem', fontSize: '0.9rem', fontFamily: 'var(--font-primary)', letterSpacing: '2px', textTransform: 'uppercase' }}>
        Designed by PointOneAI
      </div>
    </section>
  );
}
