import type React from "react"
import "./globals.css"
import type { Metadata } from "next"
import { Playfair_Display, Montserrat } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"

const playfair = Playfair_Display({ 
  subsets: ["latin"],
  weight: ['400', '500', '600', '700'],
  variable: '--font-playfair'
})

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ['300', '400', '500', '600'],
  variable: '--font-montserrat'
})

export const metadata: Metadata = {
  title: "BemmaTrendz - Fashion Store",
  description: "Find your perfect fit today",
  generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${playfair.variable} ${montserrat.variable} font-sans bg-white`}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
