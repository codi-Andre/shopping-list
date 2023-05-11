import { Header } from '@/components/header';
import './globals.css';
import Image from 'next/image';
import bg_book from '@/assets/backgrounds/book.png';

export const metadata = {
  title: 'Shopping List Web App',
  description: 'Plan ahead results in time save and better prices',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body>
        <div className='app'>
          <Header />
          {children}
        </div>
      </body>
    </html>
  );
}
