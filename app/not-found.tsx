import Link from 'next/link';

export default function NotFound() {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '100vh',
      textAlign: 'center',
      padding: '20px',
      fontFamily: 'inherit'
    }}>
      <h1 style={{ fontSize: '6rem', margin: 0, fontWeight: 800 }}>404</h1>
      <h2 style={{ fontSize: '2rem', marginBottom: '20px' }}>Page non trouvée</h2>
      <p style={{ marginBottom: '30px', color: '#666' }}>
        La page que vous recherchez n&apos;existe pas.
      </p>
      <Link 
        href="/"
        style={{
          padding: '12px 30px',
          backgroundColor: '#000',
          color: '#fff',
          textDecoration: 'none',
          borderRadius: '5px',
          transition: 'background 0.3s'
        }}
      >
        Retour à l&apos;accueil
      </Link>
    </div>
  );
}