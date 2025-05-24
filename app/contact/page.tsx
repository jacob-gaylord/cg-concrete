"use client"

import type React from "react"

import { useState } from "react"
import { MapPin, Phone, Mail, Clock, Upload } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { toast } from "@/components/ui/use-toast"

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [fileName, setFileName] = useState("")

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      toast({
        title: "Message Sent",
        description: "We've received your message and will contact you soon.",
      })
      // Reset form
      e.currentTarget.reset()
      setFileName("")
    }, 1500)
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setFileName(e.target.files[0].name)
    }
  }

  return (
    <main className="flex min-h-screen flex-col">
      {/* Contact Header */}
      <section className="w-full bg-gray-100 py-12 md:py-16">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Contact Us</h1>
              <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Get in touch with our team to discuss your concrete project needs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form and Info */}
      <section className="w-full py-12 md:py-16">
        <div className="container grid items-center gap-6 px-4 md:px-6 lg:grid-cols-2 lg:gap-10">
          {/* Contact Information */}
          <div className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle>Our Information</CardTitle>
                <CardDescription>Reach out to us through any of these channels.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start space-x-4">
                  <MapPin className="mt-0.5 h-5 w-5 text-gray-500" />
                  <div>
                    <h3 className="font-medium">Address</h3>
                    <p className="text-sm text-gray-500">123 Concrete Way, Construction City, CC 12345</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Phone className="mt-0.5 h-5 w-5 text-gray-500" />
                  <div>
                    <h3 className="font-medium">Phone</h3>
                    <p className="text-sm text-gray-500">(555) 123-4567</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Mail className="mt-0.5 h-5 w-5 text-gray-500" />
                  <div>
                    <h3 className="font-medium">Email</h3>
                    <p className="text-sm text-gray-500">info@concretecompany.com</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Clock className="mt-0.5 h-5 w-5 text-gray-500" />
                  <div>
                    <h3 className="font-medium">Business Hours</h3>
                    <p className="text-sm text-gray-500">Monday - Friday: 7am - 5pm</p>
                    <p className="text-sm text-gray-500">Saturday: 8am - 2pm</p>
                    <p className="text-sm text-gray-500">Sunday: Closed</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <Card>
            <CardHeader>
              <CardTitle>Send Us a Message</CardTitle>
              <CardDescription>Fill out the form below and we'll get back to you as soon as possible.</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name</Label>
                    <Input id="name" placeholder="John Doe" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input id="phone" type="tel" placeholder="(555) 123-4567" required />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="john.doe@example.com" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    placeholder="Tell us about your project..."
                    className="min-h-[120px]"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="file">Upload Project Reference (optional)</Label>
                  <div className="flex items-center gap-2">
                    <Label
                      htmlFor="file"
                      className="flex h-10 w-full cursor-pointer items-center justify-center rounded-md border border-input bg-background px-3 py-2 text-sm text-muted-foreground ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    >
                      <Upload className="mr-2 h-4 w-4" />
                      {fileName ? fileName : "Choose file..."}
                    </Label>
                    <Input id="file" type="file" className="hidden" onChange={handleFileChange} />
                  </div>
                  <p className="text-xs text-gray-500">Accepted file types: JPG, PNG, PDF (Max 5MB)</p>
                </div>
                <Button type="submit" className="w-full" disabled={isSubmitting}>
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>
    </main>
  )
}
