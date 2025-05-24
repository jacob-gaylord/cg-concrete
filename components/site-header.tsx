"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

export function SiteHeader() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white">
      <div className="container flex h-16 items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center space-x-2">
          <span className="text-xl font-bold tracking-tight">Concrete Company</span>
        </Link>
        <nav className="hidden md:flex md:gap-6">
          <Link href="/" className="text-sm font-medium transition-colors hover:text-gray-900/70">
            Home
          </Link>
          <Link href="/gallery" className="text-sm font-medium transition-colors hover:text-gray-900/70">
            Gallery
          </Link>
          <Link href="/contact" className="text-sm font-medium transition-colors hover:text-gray-900/70">
            Contact
          </Link>
        </nav>
        <div className="flex items-center gap-4">
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
                  className="text-sm font-medium transition-colors hover:text-gray-900/70"
                  onClick={() => setIsOpen(false)}
                >
                  Home
                </Link>
                <Link
                  href="/gallery"
                  className="text-sm font-medium transition-colors hover:text-gray-900/70"
                  onClick={() => setIsOpen(false)}
                >
                  Gallery
                </Link>
                <Link
                  href="/contact"
                  className="text-sm font-medium transition-colors hover:text-gray-900/70"
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
