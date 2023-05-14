import './globals.css'
import { Roboto } from 'next/font/google'

import { Header } from '@/app/components/header'
import { BgImages } from '@/app/components/BgImages'

export const metadata = {
  title: 'Shopping List Web App',
  description: 'Plan ahead results in time save and better prices',
}

const fontFamily = Roboto({
  subsets: ['latin'],
  weight: '500',
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={fontFamily.className}>
      <body>
        <BgImages />
        <div className="app">
          <Header />
          {children}
        </div>
      </body>
    </html>
  )
}
