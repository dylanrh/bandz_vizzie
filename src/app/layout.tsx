import type { Metadata } from 'next';
import { Inter } from 'next/font/google'; 
import './globals.css';
import { Toaster } from "@/components/ui/toaster";
import { Geist } from 'next/font/google';
import { BottomNavigationBar } from '@/components/layout/BottomNavigationBar';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist({ 
  variable: '--font-geist-mono',
  subsets: ['latin'],
  weight: ['400', '500', '700'] 
});


export const metadata: Metadata = {
  title: 'Vizzie 360',
  description: 'Immersive 360° Video Experience',
  // For PWA and mobile experience
  manifest: '/manifest.json', // Assuming you'll add a manifest.json
  themeColor: '#0F172A', // Matches new dark background
  appleWebAppCapable: 'yes',
  appleWebAppStatusBarStyle: 'black-translucent',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="bg-background">
      <body className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased text-foreground`}>
        <div className="flex min-h-screen flex-col">
          <main className="flex-grow">
            {children}
          </main>
          <BottomNavigationBar />
        </div>
        <Toaster />
      </body>
    </html>
  );
}
