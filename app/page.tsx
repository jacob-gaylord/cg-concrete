import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="relative h-[80vh] w-full">
        <Image
          src="/images/grey_stamped_wood_plank_patio_dark_stone_border_fence_view_02.jpeg"
          alt="Stamped wood plank patio with dark stone border near fence, showcasing premium outdoor living space"
          fill
          priority
          className="object-cover brightness-[0.7]"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center px-4 text-center">
          <h1 className="mb-4 text-display-lg font-bold tracking-tight text-white sm:text-display-xl md:text-display-2xl">
            Premium Concrete Solutions
          </h1>
          <p className="mb-8 max-w-md text-body-xl text-white/90 md:max-w-lg">
            Quality craftsmanship and durable results for your residential and commercial concrete needs.
          </p>
          <div className="flex flex-col space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
            <Button asChild size="lg" className="bg-white text-gray-900 hover:bg-white/90">
              <Link href="/contact">Get a Quote</Link>
            </Button>
            <Button asChild size="lg" className="bg-white text-gray-900 hover:bg-white/90">
              <Link href="/gallery">View Our Work</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="w-full py-16 md:py-24">
        <div className="container mx-auto max-w-7xl px-4 md:px-6">
          <div className="flex flex-col items-center justify-center text-center">
            <div className="space-y-2 mb-10">
              <h2 className="text-heading-lg font-bold tracking-tight sm:text-heading-xl">Our Services</h2>
              <p className="max-w-[700px] text-body-lg text-gray-500">
                We provide a range of concrete services to meet your specific needs.
              </p>
            </div>
          </div>
          <div className="mx-auto max-w-6xl grid gap-10 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 justify-items-center">
            <Link href="/gallery#Patios" className="group w-full">
              <Card className="overflow-hidden transition-transform group-hover:scale-105 h-full w-full max-w-sm">
                <div className="aspect-video relative">
                  <Image
                    src="/images/charcoal_stamped_wood_plank_patio_curved_border_seat_wall_area_01.jpeg"
                    alt="Stamped wood plank patio with curved border and seat wall area"
                    fill
                    className="object-cover"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-heading-md">Patios</CardTitle>
                  <CardDescription className="text-body-md">
                    Custom patios for beautiful, functional outdoor living.
                  </CardDescription>
                </CardHeader>
              </Card>
            </Link>
            <Link href="/gallery#Fire%20Pits" className="group w-full">
              <Card className="overflow-hidden transition-transform group-hover:scale-105 h-full w-full max-w-sm">
                <div className="aspect-video relative">
                  <Image
                    src="/images/charcoal_stamped_wood_plank_circular_patio_fire_pit_seat_wall_02.jpeg"
                    alt="Circular stamped wood plank patio with fire pit"
                    fill
                    className="object-cover"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-heading-md">Fire Pits</CardTitle>
                  <CardDescription className="text-body-md">
                    Custom fire pits for cozy, inviting outdoor spaces.
                  </CardDescription>
                </CardHeader>
              </Card>
            </Link>
            <Link href="/gallery#Steps%20%26%20Walkways" className="group w-full">
              <Card className="overflow-hidden transition-transform group-hover:scale-105 h-full w-full max-w-sm">
                <div className="aspect-video relative">
                  <Image
                    src="/images/charcoal_stamped_ashlar_slate_curved_steps_front_door_01.jpeg"
                    alt="Decorative concrete steps and walkways"
                    fill
                    className="object-cover"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-heading-md">Steps & Walkways</CardTitle>
                  <CardDescription className="text-body-md">
                    Durable and attractive steps and walkways for safe, stylish access.
                  </CardDescription>
                </CardHeader>
              </Card>
            </Link>
            <Link href="/gallery#Driveways" className="group w-full">
              <Card className="overflow-hidden transition-transform group-hover:scale-105 h-full w-full max-w-sm">
                <div className="aspect-video relative">
                  <Image
                    src="/images/grey_broom_finish_driveway_dark_border_large_house_01.jpeg"
                    alt="Professional broom finish driveway with dark border"
                    fill
                    className="object-cover"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-heading-md">Driveways</CardTitle>
                  <CardDescription className="text-body-md">
                    Durable, attractive driveways built to last and enhance curb appeal.
                  </CardDescription>
                </CardHeader>
              </Card>
            </Link>
            <Link href="/gallery#Pool%20Decks" className="group w-full">
              <Card className="overflow-hidden transition-transform group-hover:scale-105 h-full w-full max-w-sm">
                <div className="aspect-video relative">
                  <Image
                    src="/images/grey_broom_finish_pool_deck_pergola_01.jpeg"
                    alt="Pool deck with pergola and broom finish"
                    fill
                    className="object-cover"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-heading-md">Pool Decks</CardTitle>
                  <CardDescription className="text-body-md">
                    Safe, slip-resistant pool decks for relaxing and entertaining.
                  </CardDescription>
                </CardHeader>
              </Card>
            </Link>
            <Link href="/gallery#Floors%20%26%20Foundations" className="group w-full">
              <Card className="overflow-hidden transition-transform group-hover:scale-105 h-full w-full max-w-sm">
                <div className="aspect-video relative">
                  <Image
                    src="/images/grey_concrete_slab_floor_basement_or_garage_unfinished_view_02.jpeg"
                    alt="Concrete floor for basement or garage"
                    fill
                    className="object-cover"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-heading-md">Floors & Foundations</CardTitle>
                  <CardDescription className="text-body-md">
                    Solid, level floors and foundations for any structure.
                  </CardDescription>
                </CardHeader>
              </Card>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full bg-gray-100 py-12 md:py-16">
        <div className="container mx-auto max-w-7xl flex flex-col items-center justify-center gap-4 px-4 text-center md:px-6">
          <div className="space-y-3">
            <h2 className="text-heading-lg font-bold tracking-tight md:text-heading-xl">Ready to start your project?</h2>
            <p className="mx-auto max-w-[600px] text-body-lg text-gray-500">
              Contact us today for a free consultation and estimate. We're here to bring your vision to life.
            </p>
          </div>
          <div className="mx-auto w-full max-w-sm space-y-2">
            <Button asChild size="lg" className="w-full">
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}
