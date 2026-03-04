import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Header from './components/Header';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Google Keep Clone',
  description: 'A responsive frontend clone of Google Keep',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-white dark:bg-[#202124] text-gray-800 dark:text-gray-200 min-h-screen flex flex-col`}>
        <Header />
        <div className="flex-1 overflow-hidden">
          {children}
        </div>
      </body>
    </html>
  );
}
