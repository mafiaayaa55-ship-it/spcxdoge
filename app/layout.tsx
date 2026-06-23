import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "SPCXDOGE | The X Doge",
  description: "DOGE energy. X power. To the moon.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
