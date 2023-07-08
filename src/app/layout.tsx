import "./globals.css"
import { Roboto } from "next/font/google"

export const metadata = {
  title: "Shopping List Web App",
  description: "Plan ahead results in time save and better prices",
}

const fontFamily = Roboto({
  subsets: ["latin"],
  weight: "500",
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en' className={`${fontFamily.className} dark`}>
      <body className='flex h-screen flex-col bg-white-babyPowder text-black-night dark:bg-black-night dark:text-white-babyPowder'>
        {children}
      </body>
    </html>
  )
}
