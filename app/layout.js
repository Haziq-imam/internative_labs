import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import StickyCTA from '@/components/StickyCTA';
import Preloader from '@/components/Preloader';

export const metadata = {
  metadataBase: new URL('https://www.internativelabs.com'),
  title: {
    default: 'Digital Agency | Web Dev, Mobile Apps & SEO — InterNative Labs',
    template: '%s | InterNative Labs',
  },
  description:
    'InterNative Labs is a full-service digital agency offering web development, mobile app development, SEO, and digital marketing to help businesses grow online.',
  keywords: [
    'web development company',
    'mobile app development',
    'SEO services',
    'digital marketing agency',
    'custom website development',
    'InterNative Labs',
  ],
  icons: {
    icon: '/logo-header.png',
    shortcut: '/logo-header.png',
    apple: '/logo-header.png',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://www.internativelabs.com',
    siteName: 'InterNative Labs',
    title: 'Digital Agency | Web Dev, Mobile Apps & SEO — InterNative Labs',
    description:
      'InterNative Labs is a full-service digital agency offering web development, mobile app development, SEO, and digital marketing to help businesses grow online.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Digital Agency | Web Dev, Mobile Apps & SEO — InterNative Labs',
    description:
      'Full-service digital agency: web dev, mobile apps, SEO & marketing. 500+ projects delivered.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large' },
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/logo-header.png" />
        <link rel="shortcut icon" href="/logo-header.png" />
        <link rel="apple-touch-icon" href="/logo-header.png" />
        <link
          rel="preconnect"
          href="https://fonts.googleapis.com"
        />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800;900&family=Outfit:wght@300;400;500;600;700;800;900&family=Inter:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <Preloader />
        <Navbar />
        <main>{children}</main>
        <Footer />
        <StickyCTA />
      </body>
    </html>
  );
}

