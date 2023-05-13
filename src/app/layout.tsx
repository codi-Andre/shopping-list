import './globals.css'

import { Header } from '@/app/components/header'
import { BgImages } from '@/app/components/BgImages'

export const metadata = {
  title: 'Shopping List Web App',
  description: 'Plan ahead results in time save and better prices',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
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
