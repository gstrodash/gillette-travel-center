export default function Amenities() {
  return (
    <section id="amenities" className="section" style={{ position: 'relative', overflow: 'hidden', padding: '6rem 0' }}>
      
      <img src="/pronghorn_icon.png" alt="" style={{ position: 'absolute', top: '5%', left: '-5%', width: '450px', opacity: 0.1, filter: 'invert(1)', mixBlendMode: 'multiply', pointerEvents: 'none', transform: 'rotate(-5deg)' }} />
      <img src="/cowboy_bull_icon.png" alt="" style={{ position: 'absolute', bottom: '5%', right: '-2%', width: '550px', opacity: 0.1, filter: 'invert(1)', mixBlendMode: 'multiply', pointerEvents: 'none', transform: 'rotate(5deg)' }} />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div style={{ marginBottom: '6rem', textAlign: 'center' }} className="reveal">
          <span className="hero-tag" style={{ margin: '0 auto 1rem auto' }}>The Experience</span>
          <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)', maxWidth: '800px', lineHeight: 1, margin: '0 auto' }}>
            BUILT FOR THE ROAD.
          </h2>
        </div>
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8rem' }}>
          
          {/* Row 1: Photo Left, Text Right */}
          <div className="reveal" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '4rem', alignItems: 'center' }}>
            <div style={{ height: '500px', borderRadius: 'var(--radius-lg)', overflow: 'hidden', boxShadow: '0 25px 50px rgba(0,0,0,0.15)' }}>
              <img src="/gas_pumps.png" alt="Gas Pumps at Sunset" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
              <div>
                <div style={{ fontSize: '2.5rem', color: 'var(--color-accent)', fontWeight: 400, fontFamily: 'var(--font-display)', lineHeight: 1, marginBottom: '0.5rem' }}>01</div>
                <h3 style={{ fontSize: '2.2rem', marginBottom: '1rem', color: 'var(--color-foreground)', fontFamily: 'var(--font-heading)', fontWeight: 700, textTransform: 'uppercase', lineHeight: 1.1 }}>Built for the Long Haul</h3>
                <p style={{ color: '#000', fontSize: '1.5rem', lineHeight: 1.6, fontFamily: 'var(--font-editorial)', fontWeight: 500 }}>
                  A fully equipped oasis right off I-90. With 24 cutting-edge fuel stations and 150 dedicated big-rig parking spots, you'll never wait to get back on the road.
                </p>
              </div>
              <div>
                <div style={{ fontSize: '2.5rem', color: 'var(--color-accent)', fontWeight: 400, fontFamily: 'var(--font-display)', lineHeight: 1, marginBottom: '0.5rem' }}>02</div>
                <h3 style={{ fontSize: '2.2rem', marginBottom: '1rem', color: 'var(--color-foreground)', fontFamily: 'var(--font-heading)', fontWeight: 700, textTransform: 'uppercase', lineHeight: 1.1 }}>Family & Outdoor</h3>
                <p style={{ color: '#000', fontSize: '1.5rem', lineHeight: 1.6, fontFamily: 'var(--font-editorial)', fontWeight: 500 }}>
                  We know the road takes a toll. Stretch your legs at our sprawling dog park, let the kids burn off energy in dedicated zones, or utilize our 24/7 RV clean-out and propane.
                </p>
              </div>
            </div>
          </div>

          {/* Row 2: Text Left, Photo Right */}
          <div className="reveal" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '4rem', alignItems: 'center' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
              <div>
                <div style={{ fontSize: '2.5rem', color: 'var(--color-accent)', fontWeight: 400, fontFamily: 'var(--font-display)', lineHeight: 1, marginBottom: '0.5rem' }}>03</div>
                <h3 style={{ fontSize: '2.2rem', marginBottom: '1rem', color: 'var(--color-foreground)', fontFamily: 'var(--font-heading)', fontWeight: 700, textTransform: 'uppercase', lineHeight: 1.1 }}>Rest & Recharge</h3>
                <p style={{ color: '#000', fontSize: '1.5rem', lineHeight: 1.6, fontFamily: 'var(--font-editorial)', fontWeight: 500 }}>
                  Retreat from the asphalt. Wash off the miles with our pristine hot showers, catch up on chores with high-speed laundry, and relax in our exclusive private truckers lounge.
                </p>
              </div>
              <div>
                <div style={{ fontSize: '2.5rem', color: 'var(--color-accent)', fontWeight: 400, fontFamily: 'var(--font-display)', lineHeight: 1, marginBottom: '0.5rem' }}>04</div>
                <h3 style={{ fontSize: '2.2rem', marginBottom: '1rem', color: 'var(--color-foreground)', fontFamily: 'var(--font-heading)', fontWeight: 700, textTransform: 'uppercase', lineHeight: 1.1 }}>Premium Food & Drinks</h3>
                <p style={{ color: '#000', fontSize: '1.5rem', lineHeight: 1.6, fontFamily: 'var(--font-editorial)', fontWeight: 500 }}>
                  Forget standard snacks. Grab Hot Stuff Pizza, Krispy Krunchy Chicken, or Blue Bunny Ice Cream, and browse our fully stocked, premium liquor store.
                </p>
              </div>
            </div>
            <div style={{ height: '500px', borderRadius: 'var(--radius-lg)', overflow: 'hidden', boxShadow: '0 25px 50px rgba(0,0,0,0.15)' }}>
              <img src="/food_court.jpg" alt="Food Court" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
            </div>
          </div>

        </div>

        {/* Seamless Brand Typography Banner */}
        <div className="reveal" style={{ marginTop: '8rem', textAlign: 'center' }}>
          <h4 style={{ fontSize: '1.5rem', color: 'var(--color-muted)', fontFamily: 'var(--font-heading)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '2px', marginBottom: '2rem' }}>Proudly Featuring</h4>
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center', gap: '4rem' }}>
            <img src="/hotstuff.png" alt="Hot Stuff Pizza" style={{ height: '90px', width: 'auto', objectFit: 'contain' }} />
            <img src="/krispykrunchy.png" alt="Krispy Krunchy Chicken" style={{ height: '90px', width: 'auto', objectFit: 'contain' }} />
            <img src="/bluebunny.png" alt="Blue Bunny Ice Cream" style={{ height: '70px', width: 'auto', objectFit: 'contain' }} />
            <span style={{ color: 'var(--color-muted)', fontWeight: 800, fontSize: '1.5rem', textTransform: 'uppercase', fontFamily: 'var(--font-primary)' }}>+ MORE</span>
          </div>
        </div>
      </div>
    </section>
  );
}
