"use client"

import type React from "react"

import { useState, useEffect, Suspense } from "react"
import { useSearchParams } from "next/navigation"
import emailjs from '@emailjs/browser'
import { MapPin, Phone, Mail, Clock, Upload } from "lucide-react"
import Image from "next/image"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { toast } from "@/components/ui/use-toast"

function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [fileName, setFileName] = useState("")
  const [message, setMessage] = useState("")
  const searchParams = useSearchParams()

  useEffect(() => {
    // Pre-fill message if coming from gallery
    const project = searchParams.get('project')
    const title = searchParams.get('title')
    const description = searchParams.get('description')
    
    if (project && title && description) {
      const prefilledMessage = `Hi! I'm interested in a similar project to the "${title}" from your ${project} gallery.

Project Details:
- Category: ${project}
- Reference: ${title}
- Description: ${description}

I would like to discuss creating something similar for my property. Please contact me to discuss details, timeline, and pricing.

Additional details about my project:
`
      setMessage(prefilledMessage)
    }
  }, [searchParams])

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    const formData = new FormData(e.currentTarget)
    
    // EmailJS configuration - You'll need to replace these with your actual values
    const serviceID = 'YOUR_SERVICE_ID' // Replace with your EmailJS service ID
    const templateID = 'YOUR_TEMPLATE_ID' // Replace with your EmailJS template ID
    const publicKey = 'YOUR_PUBLIC_KEY' // Replace with your EmailJS public key

    const templateParams = {
      from_name: formData.get('name'),
      from_email: formData.get('email'),
      phone: formData.get('phone'),
      message: message,
      to_name: 'Cottage Grove Concrete',
    }

    try {
      // For now, we'll simulate the email sending since you need to set up EmailJS first
      if (serviceID === 'YOUR_SERVICE_ID') {
        // Simulation mode - remove this when you configure EmailJS
        setTimeout(() => {
          setIsSubmitting(false)
          toast({
            title: "Demo Mode",
            description: "Form submitted successfully! (Configure EmailJS to send real emails)",
          })
          // Reset form
          e.currentTarget.reset()
          setFileName("")
          setMessage("")
        }, 1500)
        return
      }

      // Real EmailJS sending (uncomment when configured)
      const result = await emailjs.send(serviceID, templateID, templateParams, publicKey)
      
      setIsSubmitting(false)
      toast({
        title: "Message Sent!",
        description: "We've received your message and will contact you soon.",
      })
      
      // Reset form
      e.currentTarget.reset()
      setFileName("")
      setMessage("")
      
    } catch (error) {
      console.error('EmailJS error:', error)
      setIsSubmitting(false)
      toast({
        title: "Error",
        description: "Failed to send message. Please try again or call us directly.",
        variant: "destructive",
      })
    }
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setFileName(e.target.files[0].name)
    }
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-heading-md">Send us a message</CardTitle>
        <CardDescription className="text-body-md">
          Fill out the form below and we'll get back to you as soon as possible.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <label htmlFor="name" className="text-body-md font-medium">
              Name
            </label>
            <Input id="name" name="name" placeholder="Your name" required />
          </div>
          <div className="space-y-2">
            <label htmlFor="email" className="text-body-md font-medium">
              Email
            </label>
            <Input id="email" name="email" type="email" placeholder="Your email" required />
          </div>
          <div className="space-y-2">
            <label htmlFor="phone" className="text-body-md font-medium">
              Phone
            </label>
            <Input id="phone" name="phone" type="tel" placeholder="Your phone number" required />
          </div>
          <div className="space-y-2">
            <label htmlFor="message" className="text-body-md font-medium">
              Message
            </label>
            <Textarea 
              id="message" 
              name="message"
              placeholder="Tell us about your project" 
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required 
              rows={8}
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="file" className="text-body-md font-medium">
              Upload Project Reference (optional)
            </label>
            <div className="flex items-center gap-2">
              <Label
                htmlFor="file"
                className="flex h-10 w-full cursor-pointer items-center justify-center rounded-md border border-input bg-background px-3 py-2 text-body-md text-muted-foreground ring-offset-background file:border-0 file:bg-transparent file:text-body-md file:font-medium hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
              >
                <Upload className="mr-2 h-4 w-4" />
                {fileName ? fileName : "Choose file..."}
              </Label>
              <Input id="file" type="file" className="hidden" onChange={handleFileChange} />
            </div>
            <p className="text-body-sm text-gray-500">Accepted file types: JPG, PNG, PDF (Max 5MB)</p>
          </div>
          <Button type="submit" className="w-full" disabled={isSubmitting}>
            {isSubmitting ? "Sending..." : "Send Message"}
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}

export default function ContactPage() {
  return (
    <main className="flex min-h-screen flex-col">
      {/* Page Title */}
      <section className="w-full pt-12 pb-4">
        <div className="max-w-7xl mx-auto px-4 md:px-6 text-center">
          <h1 className="mb-2 text-display-lg font-bold tracking-tight text-gray-900 sm:text-display-xl">Contact Us</h1>
          <p className="mb-0 max-w-xl mx-auto text-body-xl text-gray-600">Get in touch to discuss your concrete project needs.</p>
        </div>
      </section>

      {/* Contact Form and Info */}
      <section className="w-full py-16 md:py-24">
        <div className="container mx-auto max-w-7xl px-4 md:px-6">
          <div className="grid gap-8 md:grid-cols-2">
            {/* Contact Info (now on the left) */}
            <Card className="p-4 max-w-sm mx-auto self-start">
              <CardHeader className="pb-2">
                <CardTitle className="text-heading-sm">Our Information</CardTitle>
              </CardHeader>
              <CardContent className="px-2 space-y-2">
                <div className="flex items-center gap-2">
                  <MapPin className="h-5 w-5 text-gray-500" />
                  <div>
                    <div className="font-medium text-body-md">Address</div>
                    <div className="text-gray-500 text-body-sm">9806 Heath Ave S, Cottage Grove, MN 55016</div>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="h-5 w-5 text-gray-500" />
                  <div>
                    <div className="font-medium text-body-md">Phone</div>
                    <div className="text-gray-500 text-body-sm">(612) 407-2568</div>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="h-5 w-5 text-gray-500" />
                  <div>
                    <div className="font-medium text-body-md">Email</div>
                    <div className="text-gray-500 text-body-sm">info@cottagegroveconcrete.com</div>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-5 w-5 text-gray-500" />
                  <div>
                    <div className="font-medium text-body-md">Hours</div>
                    <div className="text-gray-500 text-body-sm">Mon-Fri: 7am-5pm, Sat: By appt, Sun: Closed</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Contact Form (now on the right) */}
            <Suspense fallback={<div>Loading contact form...</div>}>
              <ContactForm />
            </Suspense>
          </div>
        </div>
      </section>
    </main>
  )
}
