"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu } from "lucide-react"
import Image from "next/image"

import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

export function SiteHeader() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white">
      <div className="max-w-7xl mx-auto flex h-16 items-center px-4 md:px-6 relative">
        {/* Left: Logo */}
        <div className="flex items-center h-full">
          <Link href="/" className="flex items-center space-x-2">
            <Image src="/images/logo.png" alt="Cottage Grove Concrete Logo" height={64} width={64} className="h-16 w-16 object-contain" priority />
            <span className="text-heading-sm font-bold tracking-tight text-gray-900">Cottage Grove Concrete</span>
          </Link>
        </div>
        {/* Center: Nav */}
        <nav className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 hidden md:flex gap-8">
          <Link href="/" className="text-body-lg font-medium transition-colors hover:text-gray-900/70">
            Home
          </Link>
          <Link href="/gallery" className="text-body-lg font-medium transition-colors hover:text-gray-900/70">
            Gallery
          </Link>
          <Link href="/contact" className="text-body-lg font-medium transition-colors hover:text-gray-900/70">
            Contact
          </Link>
        </nav>
        {/* Right: Button and Mobile Nav */}
        <div className="flex items-center gap-4 ml-auto">
          <Button asChild className="hidden md:flex">
            <Link href="/contact">Get a Quote</Link>
          </Button>
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="md:hidden">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[240px] sm:w-[300px]">
              <nav className="flex flex-col gap-4">
                <Link
                  href="/"
                  className="text-body-lg font-medium transition-colors hover:text-gray-900/70"
                  onClick={() => setIsOpen(false)}
                >
                  Home
                </Link>
                <Link
                  href="/gallery"
                  className="text-body-lg font-medium transition-colors hover:text-gray-900/70"
                  onClick={() => setIsOpen(false)}
                >
                  Gallery
                </Link>
                <Link
                  href="/contact"
                  className="text-body-lg font-medium transition-colors hover:text-gray-900/70"
                  onClick={() => setIsOpen(false)}
                >
                  Contact
                </Link>
                <Button asChild className="mt-4">
                  <Link href="/contact" onClick={() => setIsOpen(false)}>
                    Get a Quote
                  </Link>
                </Button>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
