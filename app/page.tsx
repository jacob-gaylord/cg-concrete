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
          src="/placeholder.svg?height=1080&width=1920"
          alt="Concrete work showcase"
          fill
          priority
          className="object-cover brightness-[0.7]"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center px-4 text-center">
          <h1 className="mb-4 text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
            Premium Concrete Solutions
          </h1>
          <p className="mb-8 max-w-md text-lg text-white/90 md:max-w-lg md:text-xl">
            Quality craftsmanship and durable results for your residential and commercial concrete needs.
          </p>
          <div className="flex flex-col space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
            <Button asChild size="lg" className="bg-white text-gray-900 hover:bg-white/90">
              <Link href="/contact">Get a Quote</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white/10">
              <Link href="/gallery">View Our Work</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="w-full py-16 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Our Services</h2>
              <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                We provide a range of concrete services to meet your specific needs.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-3">
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle>Stamped Concrete</CardTitle>
                <CardDescription>
                  Beautiful patterns and textures that mimic stone, brick, or tile at a fraction of the cost.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  width={600}
                  height={400}
                  alt="Stamped concrete example"
                  className="aspect-video rounded-lg object-cover"
                />
              </CardContent>
              <CardFooter>
                <Link
                  href="/gallery"
                  className="inline-flex items-center text-sm font-medium text-gray-900 hover:underline"
                >
                  View Examples <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </CardFooter>
            </Card>
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle>Driveways</CardTitle>
                <CardDescription>
                  Durable, long-lasting driveways that enhance your property's curb appeal and value.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  width={600}
                  height={400}
                  alt="Concrete driveway example"
                  className="aspect-video rounded-lg object-cover"
                />
              </CardContent>
              <CardFooter>
                <Link
                  href="/gallery"
                  className="inline-flex items-center text-sm font-medium text-gray-900 hover:underline"
                >
                  View Examples <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </CardFooter>
            </Card>
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle>Foundations</CardTitle>
                <CardDescription>
                  Solid, reliable foundations for residential and commercial buildings of all sizes.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  width={600}
                  height={400}
                  alt="Concrete foundation example"
                  className="aspect-video rounded-lg object-cover"
                />
              </CardContent>
              <CardFooter>
                <Link
                  href="/gallery"
                  className="inline-flex items-center text-sm font-medium text-gray-900 hover:underline"
                >
                  View Examples <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full bg-gray-100 py-12 md:py-16">
        <div className="container flex flex-col items-center justify-center gap-4 px-4 text-center md:px-6">
          <div className="space-y-3">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Ready to start your project?</h2>
            <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
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
