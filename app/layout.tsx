import '../app/globals.css';
import type { ReactNode } from 'react';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';

export const metadata = {
  title: 'AS Furniture & CNC Design',
  description: 'Portfolio showcasing custom furniture and CNC machine designs.',
  icons: {
    icon: '/icon.svg'
  }
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
  <body className="min-h-screen flex flex-col bg-bg text-text">
        <Navbar />
        <main className="flex-1 pt-16 fade-in">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
