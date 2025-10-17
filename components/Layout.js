import Link from 'next/link';

const legalLinks = [
  { href: '/terms-of-service', label: 'Terms of Service' },
  { href: '/privacy-policy', label: 'Privacy Policy' },
  { href: '/refund-policy', label: 'Refund Policy' },
  { href: '/data-processing-agreement', label: 'DPA Stub' }
];

const Layout = ({ children }) => {
  return (
    <div className="layout">
      <header className="site-header">
        <div className="container">
          <Link href="/" className="site-title">
            GreenFundr
          </Link>
          <p className="tagline">Funding a greener future together</p>
        </div>
      </header>
      <main className="main-content container">{children}</main>
      <footer className="site-footer">
        <div className="container footer-content">
          <nav className="footer-nav">
            {legalLinks.map((link) => (
              <Link key={link.href} href={link.href} className="footer-link">
                {link.label}
              </Link>
            ))}
          </nav>
          <p className="footer-note">
            © {new Date().getFullYear()} GreenFundr Ltd. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
