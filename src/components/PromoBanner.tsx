export default function PromoBanner() {
  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      height: '40px',
      backgroundColor: 'var(--color-accent)',
      color: '#000',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 1000,
      fontFamily: 'var(--font-primary)',
      fontSize: '0.9rem',
      padding: '0 1rem',
      textAlign: 'center'
    }}>
      <span style={{ marginRight: '0.5rem', fontSize: '1.1rem' }}>⛽️</span>
      <span style={{ fontWeight: 800 }}>SAVE 15¢/GAL EVERY FILL, EVERY DAY</span> 
      <span style={{ fontWeight: 500, marginLeft: '0.5rem' }}>When you pay with DinoPay linked directly to your debit card or bank account.</span>
    </div>
  );
}
