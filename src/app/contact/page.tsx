"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import { motion } from "framer-motion"
import { useState } from "react"
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin, Loader2 } from "lucide-react"

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000))
    setIsSubmitting(false)
  }

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 },
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <motion.h1 className="text-4xl font-bold mb-8 text-center" {...fadeInUp}>
        Contact Us
      </motion.h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <motion.div {...fadeInUp} transition={{ delay: 0.2 }}>
          <Card>
            <CardHeader>
              <CardTitle>General Inquiries</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <div className="flex items-center">
                <Mail className="mr-2 h-4 w-4" />
                <span>info@charityorg.org</span>
              </div>
              <div className="flex items-center">
                <Phone className="mr-2 h-4 w-4" />
                <span>(555) 123-4567</span>
              </div>
              <div className="flex items-center">
                <MapPin className="mr-2 h-4 w-4" />
                <span>123 Charity Lane, Helpville, CH 12345</span>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div {...fadeInUp} transition={{ delay: 0.4 }}>
          <Card>
            <CardHeader>
              <CardTitle>Donation Support</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <div className="flex items-center">
                <Mail className="mr-2 h-4 w-4" />
                <span>donations@charityorg.org</span>
              </div>
              <div className="flex items-center">
                <Phone className="mr-2 h-4 w-4" />
                <span>(555) 987-6543</span>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>

      <motion.div {...fadeInUp} transition={{ delay: 0.6 }}>
        <Card>
          <CardHeader>
            <CardTitle>Send Us a Message</CardTitle>
          </CardHeader>
          <CardContent>
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div>
                <Label htmlFor="name">Name</Label>
                <Input type="text" id="name" placeholder="Your Name" required />
              </div>
              <div>
                <Label htmlFor="email">Email</Label>
                <Input type="email" id="email" placeholder="Your Email" required />
              </div>
              <div>
                <Label htmlFor="subject">Subject</Label>
                <Input type="text" id="subject" placeholder="Message Subject" required />
              </div>
              <div>
                <Label htmlFor="message">Message</Label>
                <Textarea id="message" placeholder="Your Message" required rows={5} />
              </div>
              <Button type="submit" className="w-full" disabled={isSubmitting}>
                {isSubmitting ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : "Send Message"}
              </Button>
            </form>
          </CardContent>
        </Card>
      </motion.div>

      <motion.div className="mt-12 text-center" {...fadeInUp} transition={{ delay: 0.8 }}>
        <h2 className="text-2xl font-semibold mb-4">Follow Us</h2>
        <div className="flex justify-center space-x-4">
          <Link href="#" className="text-gray-600 hover:text-blue-600 transition-colors">
            <Facebook className="h-6 w-6" />
            <span className="sr-only">Facebook</span>
          </Link>
          <Link href="#" className="text-gray-600 hover:text-blue-400 transition-colors">
            <Twitter className="h-6 w-6" />
            <span className="sr-only">Twitter</span>
          </Link>
          <Link href="#" className="text-gray-600 hover:text-pink-600 transition-colors">
            <Instagram className="h-6 w-6" />
            <span className="sr-only">Instagram</span>
          </Link>
          <Link href="#" className="text-gray-600 hover:text-blue-800 transition-colors">
            <Linkedin className="h-6 w-6" />
            <span className="sr-only">LinkedIn</span>
          </Link>
        </div>
      </motion.div>
    </div>
  )
}

