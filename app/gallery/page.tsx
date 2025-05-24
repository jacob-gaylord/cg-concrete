import Image from "next/image"
import Link from "next/link"

import { Button } from "@/components/ui/button"

export default function GalleryPage() {
  // Sample gallery items - in a real app, these would come from a database or CMS
  const galleryItems = [
    {
      id: 1,
      title: "Modern Stamped Patio",
      description: "Decorative stamped concrete patio with a modern pattern",
      image: "/placeholder.svg?height=600&width=800",
    },
    {
      id: 2,
      title: "Exposed Aggregate Driveway",
      description: "Durable exposed aggregate driveway with decorative border",
      image: "/placeholder.svg?height=600&width=800",
    },
    {
      id: 3,
      title: "Polished Concrete Floor",
      description: "High-gloss polished concrete floor for commercial space",
      image: "/placeholder.svg?height=600&width=800",
    },
    {
      id: 4,
      title: "Concrete Foundation",
      description: "Solid foundation for a new residential construction",
      image: "/placeholder.svg?height=600&width=800",
    },
    {
      id: 5,
      title: "Decorative Walkway",
      description: "Custom designed walkway with inlaid patterns",
      image: "/placeholder.svg?height=600&width=800",
    },
    {
      id: 6,
      title: "Commercial Parking Lot",
      description: "Large-scale commercial concrete parking area",
      image: "/placeholder.svg?height=600&width=800",
    },
    {
      id: 7,
      title: "Concrete Retaining Wall",
      description: "Engineered concrete retaining wall for slope management",
      image: "/placeholder.svg?height=600&width=800",
    },
    {
      id: 8,
      title: "Stained Concrete Patio",
      description: "Acid-stained concrete patio with custom color blend",
      image: "/placeholder.svg?height=600&width=800",
    },
    {
      id: 9,
      title: "Concrete Steps",
      description: "Custom formed concrete steps with integrated lighting",
      image: "/placeholder.svg?height=600&width=800",
    },
  ]

  return (
    <main className="flex min-h-screen flex-col">
      {/* Gallery Header */}
      <section className="w-full bg-gray-100 py-12 md:py-16">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Our Project Gallery</h1>
              <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Browse through our completed projects to see the quality of our work.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="w-full py-12 md:py-16">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {galleryItems.map((item) => (
              <div key={item.id} className="group relative overflow-hidden rounded-lg">
                <Image
                  src={item.image || "/placeholder.svg"}
                  alt={item.title}
                  width={800}
                  height={600}
                  className="aspect-[4/3] h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/70 to-transparent p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <h3 className="text-xl font-bold text-white">{item.title}</h3>
                  <p className="text-sm text-white/90">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-12 flex justify-center">
            <Button asChild size="lg">
              <Link href="/contact">Request a Similar Project</Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}
