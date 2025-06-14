// app/layout.js
import { CvFormProvider } from '@/contexts/CvFormContext';
import { Cairo } from 'next/font/google';
import { ReactNode } from 'react';

const cairo = Cairo({
  subsets: ['latin', 'arabic'], // important for Arabic support
  weight: ['300', '400', '600', '700'], // only what you need
  variable: '--font-cairo', // optional: CSS variable for using font anywhere
  display: 'swap', // best for performance & UX
});

interface RootLayoutProps {
    children: ReactNode;
  }

  export default function RootLayout({ children }: RootLayoutProps) {
    return (
      <html lang="ar" dir="rtl" className={cairo.variable}>
        <body style={{ fontFamily: 'var(--font-cairo)' }}>
          {children}
        </body>
      </html>
    );
  }
