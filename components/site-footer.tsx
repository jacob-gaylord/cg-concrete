import Link from "next/link"
import { Facebook, Instagram, Twitter, Mail } from "lucide-react"
import Image from "next/image"

export function SiteFooter() {
  return (
    <footer className="w-full border-t bg-gray-100">
      <div className="max-w-7xl mx-auto flex flex-col gap-8 px-4 py-10 md:flex-row md:items-start md:justify-between md:px-6">
        {/* Left side: Logo, Name, and Description */}
        <div className="flex flex-col gap-4 max-w-md">
          <Link href="/" className="flex items-center space-x-3">
            <Image src="/images/biglogo.png" alt="Cottage Grove Concrete Logo" width={80} height={80} className="h-20 w-20 object-contain" />
            <span className="text-heading-sm font-bold">Cottage Grove Concrete, LLC</span>
          </Link>
          <p className="text-body-md text-gray-500 ml-1">
            Quality concrete solutions for residential and commercial projects. Serving the community since 2005.
          </p>
        </div>

        {/* Right side: Services and Connect */}
        <div className="flex flex-col sm:flex-row gap-8 sm:gap-12">
          {/* Services - Split into two columns */}
          <div className="space-y-3">
            <h3 className="text-body-md font-medium">Services</h3>
            <div className="grid grid-cols-2 gap-x-6 gap-y-2 text-body-md">
              <Link href="/gallery#Patios" className="text-gray-500 transition-colors hover:text-gray-900">
                Patios
              </Link>
              <Link href="/gallery#Fire%20Pits" className="text-gray-500 transition-colors hover:text-gray-900">
                Fire Pits
              </Link>
              <Link href="/gallery#Steps%20%26%20Walkways" className="text-gray-500 transition-colors hover:text-gray-900">
                Steps & Walkways
              </Link>
              <Link href="/gallery#Driveways" className="text-gray-500 transition-colors hover:text-gray-900">
                Driveways
              </Link>
              <Link href="/gallery#Pool%20Decks" className="text-gray-500 transition-colors hover:text-gray-900">
                Pool Decks
              </Link>
              <Link href="/gallery#Floors%20%26%20Foundations" className="text-gray-500 transition-colors hover:text-gray-900">
                Floors & Foundations
              </Link>
            </div>
          </div>

          {/* Connect */}
          <div className="space-y-3">
            <h3 className="text-body-md font-medium">Connect</h3>
            <div className="flex space-x-3">
              <Link href="#" className="text-gray-500 hover:text-gray-900">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="mailto:info@cottagegroveconcrete.com" className="text-gray-500 hover:text-gray-900">
                <Mail className="h-5 w-5" />
                <span className="sr-only">Email</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
