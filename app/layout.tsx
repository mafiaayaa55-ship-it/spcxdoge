import type { Metadata } from 'next';
import { Bangers, Luckiest_Guy } from 'next/font/google';
import './globals.css';

const bangers = Bangers({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-bangers',
  display: 'swap'
});

const luckiest = Luckiest_Guy({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-luckiest',
  display: 'swap'
});

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
      <body className={`${bangers.variable} ${luckiest.variable}`}>{children}</body>
    </html>
  );
}
