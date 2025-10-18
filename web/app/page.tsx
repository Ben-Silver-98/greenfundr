export default function HomePage() {
  return (
    <main style={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '3rem 1rem',
      fontFamily: 'ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, Apple Color Emoji, Segoe UI Emoji',
      color: '#0f172a'
    }}>
      <h1 style={{ fontSize: '3rem', margin: 0, lineHeight: 1.1, textAlign: 'center' }}>
        Greenfundr
      </h1>
      <p style={{ marginTop: '1rem', fontSize: '1.25rem', color: '#334155', textAlign: 'center', maxWidth: 720 }}>
        Fund the planet. Back climate-positive projects and green innovations that move us toward a cleaner, more resilient future.
      </p>
      <div style={{ marginTop: '2rem', display: 'flex', gap: '1rem' }}>
        <a href="#projects" style={{
          backgroundColor: '#16a34a',
          color: 'white',
          padding: '0.75rem 1.25rem',
          borderRadius: 8,
          textDecoration: 'none',
          fontWeight: 600
        }}>Explore projects</a>
        <a href="#about" style={{
          border: '1px solid #94a3b8',
          color: '#0f172a',
          padding: '0.75rem 1.25rem',
          borderRadius: 8,
          textDecoration: 'none',
          fontWeight: 600
        }}>Learn more</a>
      </div>
      <section id="about" style={{ marginTop: '3rem', maxWidth: 800 }}>
        <h2 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>What is Greenfundr?</h2>
        <p style={{ color: '#475569' }}>
          A simple way to discover and support initiatives with measurable environmental impact — from reforestation to renewable energy to circular economy startups.
        </p>
      </section>
    </main>
  );
}
