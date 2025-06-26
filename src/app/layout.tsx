import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '@/styles/globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'VNSH Laser Strike System + Virtual Steel Target!',
  description: 'Laser Strike System + Virtual Steel Target!',
  icons: {
    icon: '/favicon.png',
    apple: '/favicon.png',
  },
  openGraph: {
    title: 'VNSH Laser Strike System + Virtual Steel Target!',
    description: 'Laser Strike System + Virtual Steel Target!',
    type: 'website',
    images: [
      {
        url: '/favicon.png',
        width: 512,
        height: 512,
        alt: 'VNSH Laser Strike System + Virtual Steel Target!',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'VNSH Laser Strike System + Virtual Steel Target!',
    description: 'Laser Strike System + Virtual Steel Target!',
    images: ['/favicon.png'],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
