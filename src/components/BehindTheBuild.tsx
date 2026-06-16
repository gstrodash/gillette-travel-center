import React from 'react';

export default function BehindTheBuild() {
  const credits = [
    {
      category: "Development",
      entities: [
        "Eastern Gillette Development, LLC",
        "Doug & Lindi Peterson",
        "Ken & Krista Barker",
        "Stan & Detae Israelsen",
        "Ned Israelsen",
        "Kevin & Kelly Sickels",
        "Tim & Jill Kleven",
        "Nathan Tracy"
      ]
    },
    {
      category: "Legal Counsel",
      entities: [
        "Frank Stevens & Joe Hallock (Stevens, Edward & Hallock, P.C - Gillette, WY)",
        "Ken Barker (Barker Law Firm, LLC - Belle Fourche, SD & WY)"
      ]
    },
    {
      category: "Financial",
      entities: [
        "Pinnacle Bank - Justin Tystad"
      ]
    },
    {
      category: "CPA's",
      entities: [
        "Ketel Thorstenson, LLC - Michelle Minnerath & Kevin Sickels"
      ]
    },
    {
      category: "Community & Investor Relations",
      entities: [
        "Krista Merryman Barker / Barker Investments, Inc."
      ]
    },
    {
      category: "Architectural",
      entities: [
        "Architect Studio of Albuquerque, NM - Stacy Holmes"
      ]
    },
    {
      category: "Engineering",
      entities: [
        "Dowl Engineering / Site Plans",
        "Jaime Tarver Consulting (Consultant to owners)"
      ]
    },
    {
      category: "Building Contractor",
      entities: [
        "Glenn Construction, LLC (Moorcroft, WY) - Ben Glenn & Jeff Holberg"
      ]
    },
    {
      category: "Geo Technology",
      entities: [
        "Advanced Geotechnical Solutions (Casper, WY) - Shantel Ramlo"
      ]
    },
    {
      category: "Surveying",
      entities: [
        "Land Surveying, Inc. (Gillette, WY)"
      ]
    },
    {
      category: "Structural",
      entities: [
        "Structural Dynamics (Gillette, WY) - Brian Shippy"
      ]
    },
    {
      category: "Electrical / Mechanical Design",
      entities: [
        "Prairie Engineering P.C. (Minot, ND)"
      ]
    },
    {
      category: "Electrical",
      entities: [
        "TJ Electric (Gillette, WY) - Tony Holden & Chris Oloughlin"
      ]
    },
    {
      category: "Site Work",
      entities: [
        "DRM, Inc. (Gillette, WY) - Don Mckillop"
      ]
    },
    {
      category: "Concrete",
      entities: [
        "PRC, Inc. (Gillette, WY) - Matt Walker & Lance Walker"
      ]
    },
    {
      category: "Building Components",
      entities: [
        "Northwest Supply Co., Inc. (Lemmon, SD) - Doug Peterson"
      ]
    },
    {
      category: "Fuel Solutions & Systems",
      entities: [
        "Grimms Pump & Industrial Supply (Rapid City, SD) - Steve Morgan & Doug Flesner",
        "True Fuels - Jance Elston & Jason Boe"
      ]
    },
    {
      category: "Plumbing",
      entities: [
        "Clearwater X-Spurts Plumbing (Moorcroft, WY) - Clay Massie"
      ]
    },
    {
      category: "HVAC",
      entities: [
        "Comfort Systems, Inc. (Gillette, WY) - Carey Wendling"
      ]
    },
    {
      category: "Fire Suppression",
      entities: [
        "Pye Barker Fire Safety (Rapid City, SD)"
      ]
    },
    {
      category: "Casework",
      entities: [
        "TMI Systems Corporation (Dickinson, ND) - Christa Pulsinelli"
      ]
    },
    {
      category: "Doors / Windows",
      entities: [
        "Architectural Specialties, LLC (Gillette, WY & Rapid City, SD) - Robert Huerta"
      ]
    },
    {
      category: "Insulation",
      entities: [
        "Precision Spray Foam, LLC (Gillette, WY)"
      ]
    },
    {
      category: "Kitchen Equipment",
      entities: [
        "Sysco (Billings, MT) - David Blauer, Consultant"
      ]
    },
    {
      category: "Coolers / Freezers",
      entities: [
        "Equipment Service Professionals (Rapid City, SD) - Jay Swaby"
      ]
    },
    {
      category: "Flooring / Tile Install",
      entities: [
        "CLT Flooring (Newcastle, WY) - Randy Hershey"
      ]
    },
    {
      category: "Acoustical Ceiling System",
      entities: [
        "Horst Acoustical Co. Inc. (Rapid City, SD) - Scott Horgens"
      ]
    },
    {
      category: "Sound System",
      entities: [
        "AV Tech (Gillette, WY) - Mike Kelly"
      ]
    },
    {
      category: "Landscaping",
      entities: [
        "G & G Landscaping Inc. (Gillette, WY) - Dustin Scallon"
      ]
    },
    {
      category: "Signage",
      entities: [
        "TKK General Contractors Ltd. (Westminster, CO)",
        "Nix Signs Co. LLC (Casper, WY) - Darryl Kanzler & Casey Nix"
      ]
    },
    {
      category: "Flag Poles",
      entities: [
        "Wilson Welding, Inc. & Gillette Steel Center (Gillette, WY) - Joel Wilson & Joye Leegaard"
      ]
    },
    {
      category: "Cross",
      entities: [
        "Greg's Welding (Gillette, WY) - Greg Dougherty & Eric Hachez"
      ]
    },
    {
      category: "Air Compression System",
      entities: [
        "CLT, Inc. (Gillette, WY) - Guy Rittenhouse"
      ]
    },
    {
      category: "Supplies",
      entities: [
        "Meade Lumber (Gillette, WY)",
        "Sundance Custom Steel (Sundance, WY)"
      ]
    },
    {
      category: "Marketing / Realtor Team",
      entities: [
        "Signature Real Estate Group - Steve Laakso & Camarae Kelley"
      ]
    },
    {
      category: "Art & Design",
      entities: [
        "Heather Rodriguez",
        "Sign Boss / Rick Eiland"
      ]
    }
  ];

  return (
    <div style={{ backgroundColor: 'var(--color-background)', minHeight: '100vh', paddingTop: '100px', paddingBottom: '8rem', position: 'relative', overflow: 'hidden' }}>
      {/* Background Watermarks */}
      <img src="/pronghorn_icon.png" alt="" style={{ position: 'absolute', top: '15%', left: '-5%', width: '600px', opacity: 0.04, filter: 'invert(1)', mixBlendMode: 'multiply', pointerEvents: 'none', transform: 'rotate(-5deg)' }} />
      <img src="/cowboy_bull_icon.png" alt="" style={{ position: 'absolute', bottom: '5%', right: '-5%', width: '800px', opacity: 0.04, filter: 'invert(1)', mixBlendMode: 'multiply', pointerEvents: 'none', transform: 'rotate(5deg)' }} />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        
        {/* Hero Header */}
        <div className="reveal" style={{ textAlign: 'center', marginBottom: '6rem', marginTop: '4rem' }}>
          <span className="hero-tag" style={{ color: 'var(--color-accent)', borderColor: 'var(--color-accent)', fontFamily: 'var(--font-editorial)', margin: '0 auto 2.5rem auto', fontSize: '1.4rem', fontWeight: 600, display: 'inline-block', letterSpacing: '1px' }}>Credits</span>
          <h1 style={{ fontSize: 'clamp(2.5rem, 6vw, 4.5rem)', color: 'var(--color-foreground)', fontFamily: 'var(--font-heading)', lineHeight: 1.1, marginBottom: '1.5rem', fontWeight: 400 }}>
            Behind The Build
          </h1>
          <p style={{ color: 'var(--color-muted)', fontSize: '1.5rem', fontFamily: 'var(--font-editorial)', maxWidth: '700px', margin: '0 auto', lineHeight: 1.6, fontWeight: 500 }}>
            Honoring the investors, teams, and visionaries whose dedication and capital brought the Gillette Travel Center to life.
          </p>
        </div>

        {/* Editorial Masonry Layout */}
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', 
          gap: '4rem 3rem',
          alignItems: 'start'
        }}>
          {credits.map((block, i) => (
            <div key={i} className="reveal" style={{ animationDelay: `${(i % 10) * 0.05}s` }}>
              <h3 style={{ 
                color: 'var(--color-primary)', 
                fontFamily: 'var(--font-heading)', 
                fontSize: '1.3rem', 
                fontWeight: 400, 
                textTransform: 'uppercase', 
                letterSpacing: '1px', 
                marginBottom: '1.25rem',
                borderTop: '3px solid var(--color-accent)',
                paddingTop: '1.25rem'
              }}>
                {block.category}
              </h3>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                {block.entities.map((entity, j) => (
                  <li key={j} style={{ 
                    color: 'var(--color-foreground)', 
                    fontFamily: 'var(--font-editorial)', 
                    fontSize: '1.2rem', 
                    lineHeight: 1.4,
                    fontWeight: 600
                  }}>
                    {entity}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
