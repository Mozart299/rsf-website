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
import TypingEffect from "@/lib/utils/typing-effect"

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    await new Promise((resolve) => setTimeout(resolve, 2000))
    setIsSubmitting(false)
  }

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 },
  }

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <motion.div className="text-center mb-12" {...fadeInUp}>
        <h1 className="radiant-heading brand-text-gradient text-5xl mb-4">
          <TypingEffect text="Get in Touch" />
        </h1>
        <p className="foundation-text text-muted-foreground text-sm">
          WE'RE HERE TO HELP
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <motion.div {...fadeInUp} transition={{ delay: 0.2 }}>
          <Card className="bg-secondary/50 backdrop-blur-sm border-border/50">
            <CardHeader>
              <CardTitle className="brand-text-gradient">General Inquiries</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center">
                <Mail className="mr-3 h-5 w-5 text-primary" />
                <span>info@radiantsmilefoundation.org</span>
              </div>
              <div className="flex items-center">
                <Phone className="mr-3 h-5 w-5 text-primary" />
                <span>+(256) 782 436 190</span>
              </div>
              <div className="flex items-center">
                <MapPin className="mr-3 h-5 w-5 text-primary" />
                <span>Kampala, Uganda</span>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div {...fadeInUp} transition={{ delay: 0.4 }}>
          <Card className="bg-secondary/50 backdrop-blur-sm border-border/50">
            <CardHeader>
              <CardTitle className="brand-text-gradient">Donation Support</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center">
                <Mail className="mr-3 h-5 w-5 text-primary" />
                <span>donations@radiantsmilefoundation.org</span>
              </div>
              <div className="flex items-center">
                <Phone className="mr-3 h-5 w-5 text-primary" />
                <span>+(256) 782 436 190</span>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>

      <motion.div {...fadeInUp} transition={{ delay: 0.6 }}>
        <Card className="bg-secondary/50 backdrop-blur-sm border-border/50">
          <CardHeader>
            <CardTitle className="brand-text-gradient">Send Us a Message</CardTitle>
          </CardHeader>
          <CardContent>
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <Label htmlFor="name" className="foundation-text text-xs">Name</Label>
                <Input 
                  type="text" 
                  id="name" 
                  placeholder="Your Name" 
                  required 
                  className="mt-2"
                />
              </div>
              <div>
                <Label htmlFor="email" className="foundation-text text-xs">Email</Label>
                <Input 
                  type="email" 
                  id="email" 
                  placeholder="Your Email" 
                  required 
                  className="mt-2"
                />
              </div>
              <div>
                <Label htmlFor="subject" className="foundation-text text-xs">Subject</Label>
                <Input 
                  type="text" 
                  id="subject" 
                  placeholder="Message Subject" 
                  required 
                  className="mt-2"
                />
              </div>
              <div>
                <Label htmlFor="message" className="foundation-text text-xs">Message</Label>
                <Textarea 
                  id="message" 
                  placeholder="Your Message" 
                  required 
                  rows={5} 
                  className="mt-2"
                />
              </div>
              <Button 
                type="submit" 
                className="w-full bg-primary text-primary-foreground hover:bg-primary/90" 
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                ) : (
                  "Send Message"
                )}
              </Button>
            </form>
          </CardContent>
        </Card>
      </motion.div>

      <motion.div 
        className="mt-12 text-center" 
        {...fadeInUp} 
        transition={{ delay: 0.8 }}
      >
        <h2 className="text-2xl font-semibold mb-6 brand-text-gradient">Connect With Us</h2>
        <div className="flex justify-center space-x-6">
          <Link href="https://www.facebook.com/profile.php?id=100083832870969" className="text-muted-foreground hover:text-primary transition-colors">
            <Facebook className="h-6 w-6" />
            <span className="sr-only">Facebook</span>
          </Link>
          <Link href="https://x.com/RSF_UG" className="text-muted-foreground hover:text-primary transition-colors">
            <Twitter className="h-6 w-6" />
            <span className="sr-only">Twitter</span>
          </Link>
          <Link href="https://www.instagram.com/radiantsmilefoundation" className="text-muted-foreground hover:text-primary transition-colors">
            <Instagram className="h-6 w-6" />
            <span className="sr-only">Instagram</span>
          </Link>
          <Link href="https://www.linkedin.com/company/healing-hearts-international/" className="text-muted-foreground hover:text-primary transition-colors">
            <Linkedin className="h-6 w-6" />
            <span className="sr-only">LinkedIn</span>
          </Link>
        </div>
      </motion.div>
    </div>
  )
}