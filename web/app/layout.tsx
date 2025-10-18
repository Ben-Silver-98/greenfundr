import type { Metadata } from 'next';

export const metadata: Metadata = {
  metadataBase: new URL('https://greenfundr.com'),
  title: {
    default: 'Greenfundr',
    template: '%s | Greenfundr',
  },
  description:
    'Fund the planet. Back climate-positive projects and green innovations.',
  icons: {
    icon: '/favicon.ico',
  },
  openGraph: {
    title: 'Greenfundr',
    description:
      'Fund the planet. Back climate-positive projects and green innovations.',
    url: 'https://greenfundr.com',
    siteName: 'Greenfundr',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Greenfundr',
    description:
      'Fund the planet. Back climate-positive projects and green innovations.',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
