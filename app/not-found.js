import Link from 'next/link';

export const metadata = {
  title: '404 — Page Not Found | InterNative Labs',
  description: 'The page you are looking for could not be found.',
};

export default function NotFound() {
  return (
    <section
      style={{
        minHeight: '80vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        padding: '120px 24px 80px',
      }}
    >
      <div style={{ maxWidth: 560 }}>
        <div
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(5rem, 15vw, 9rem)',
            fontWeight: 900,
            background: 'linear-gradient(to right, #88c248, #72c192, #5ac0ec)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            lineHeight: 1,
            marginBottom: '1rem',
          }}
        >
          404
        </div>

        <h1
          style={{
            color: '#fff',
            fontSize: 'clamp(1.4rem, 3vw, 2rem)',
            fontFamily: 'var(--font-display)',
            marginBottom: '1rem',
          }}
        >
          Page Not Found
        </h1>

        <p
          style={{
            color: 'rgba(255,255,255,0.55)',
            fontSize: '1rem',
            lineHeight: 1.7,
            marginBottom: '2.5rem',
          }}
        >
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
          Let&apos;s get you back on track.
        </p>

        <div
          style={{
            display: 'flex',
            gap: '1rem',
            justifyContent: 'center',
            flexWrap: 'wrap',
          }}
        >
          <Link href="/" className="btn btn-primary btn-lg">
            Back to Home
          </Link>
          <Link href="/free-consultation" className="btn btn-secondary btn-lg">
            Get a Free Consultation
          </Link>
        </div>
      </div>
    </section>
  );
}
