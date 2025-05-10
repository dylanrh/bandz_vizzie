import type { Metadata } from 'next';
import { Inter } from 'next/font/google'; // Using Inter as a fallback, Geist is primary
import './globals.css';
import { Toaster } from "@/components/ui/toaster";
import { Geist } from 'next/font/google';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist({ // Assuming Geist also provides a mono variant or use Geist_Mono
  variable: '--font-geist-mono',
  subsets: ['latin'],
  weight: ['400', '500', '700'] // example weights
});


export const metadata: Metadata = {
  title: 'Vizzie 360',
  description: 'Immersive 360° Video Experience',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased`}>
        {children}
        <Toaster />
      </body>
    </html>
  );
}
