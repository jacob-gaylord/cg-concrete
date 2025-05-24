import type React from "react"
import "@/app/globals.css"
import { Inter } from "next/font/google"

import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Toaster } from "@/components/ui/toaster"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Cottage Grove Concrete - Premium Concrete Solutions",
  description: "Quality concrete services for residential and commercial projects.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="relative flex min-h-screen flex-col">
          <SiteHeader />
          {children}
          <SiteFooter />
          <Toaster />
        </div>
      </body>
    </html>
  )
}
