import type { Metadata } from "next"
import { Roboto } from "next/font/google"
import "./globals.css"

const roboto = Roboto({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"]
})

export const metadata: Metadata = {
  title: "Shopping list",
  description: "An app just to study and compare frameworks"
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html className="dark" lang="en">
      <body className={`${roboto.className} bg-background text-text`}>
        {children}
      </body>
    </html>
  )
}
