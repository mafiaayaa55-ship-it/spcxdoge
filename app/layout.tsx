import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'SPCXDOGE | The X Doge',
  description: 'SPCXDOGE is a pure meme website: Doge Energy. X Power. To the Moon.',
  icons: { icon: '/assets/logo.png' },
  openGraph: {
    title: 'SPCXDOGE | The X Doge',
    description: 'Doge Energy. X Power. To the Moon.',
    images: ['/assets/header.png']
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
