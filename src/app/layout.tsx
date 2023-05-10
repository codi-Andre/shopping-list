import './globals.css'

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
      <body>{children}</body>
    </html>
  )
}
