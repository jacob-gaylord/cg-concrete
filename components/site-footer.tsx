import Link from "next/link"
import { Facebook, Instagram, Twitter } from "lucide-react"

export function SiteFooter() {
  return (
    <footer className="w-full border-t bg-gray-100">
      <div className="container flex flex-col gap-6 px-4 py-10 md:flex-row md:items-start md:justify-between md:px-6">
        <div className="flex flex-col gap-2">
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-lg font-bold">Concrete Company</span>
          </Link>
          <p className="max-w-xs text-sm text-gray-500">
            Quality concrete solutions for residential and commercial projects. Serving the community since 2005.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-10 sm:grid-cols-3">
          <div className="space-y-3">
            <h3 className="text-sm font-medium">Company</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="text-gray-500 transition-colors hover:text-gray-900">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="text-gray-500 transition-colors hover:text-gray-900">
                  Gallery
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-500 transition-colors hover:text-gray-900">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-3">
            <h3 className="text-sm font-medium">Services</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/#services" className="text-gray-500 transition-colors hover:text-gray-900">
                  Stamped Concrete
                </Link>
              </li>
              <li>
                <Link href="/#services" className="text-gray-500 transition-colors hover:text-gray-900">
                  Driveways
                </Link>
              </li>
              <li>
                <Link href="/#services" className="text-gray-500 transition-colors hover:text-gray-900">
                  Foundations
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-3">
            <h3 className="text-sm font-medium">Connect</h3>
            <div className="flex space-x-3">
              <Link href="#" className="text-gray-500 hover:text-gray-900">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="text-gray-500 hover:text-gray-900">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="text-gray-500 hover:text-gray-900">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t bg-white py-6">
        <div className="container flex flex-col items-center justify-between gap-4 px-4 md:flex-row md:px-6">
          <p className="text-center text-sm text-gray-500 md:text-left">
            © {new Date().getFullYear()} Concrete Company. All rights reserved.
          </p>
          <div className="flex gap-4 text-sm text-gray-500">
            <Link href="#" className="hover:underline">
              Privacy Policy
            </Link>
            <Link href="#" className="hover:underline">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
