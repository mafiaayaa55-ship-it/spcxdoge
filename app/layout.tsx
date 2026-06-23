import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'SPCXDOGE | The X Doge',
  description: 'SPCXDOGE is a meme powered by DOGE energy and X power.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
