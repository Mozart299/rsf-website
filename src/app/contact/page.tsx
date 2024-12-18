'use client'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { useState } from 'react'

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000))
    setIsSubmitting(false)
  }

  return (
    <div>
      <motion.h1 
        className="text-3xl font-bold mb-6"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Contact Us
      </motion.h1>
      <motion.p 
        className="mb-6"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        Have questions or want to get involved? We'd love to hear from you! Choose the best way to reach us below:
      </motion.p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <h2 className="text-2xl font-semibold mb-4">General Inquiries</h2>
          <p>Email: info@charityorg.org</p>
          <p>Phone: (555) 123-4567</p>
          <p>Address: 123 Charity Lane, Helpville, CH 12345</p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <h2 className="text-2xl font-semibold mb-4">Donation Support</h2>
          <p>Email: donations@charityorg.org</p>
          <p>Phone: (555) 987-6543</p>
        </motion.div>
      </div>
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.8 }}
      >
        <h2 className="text-2xl font-semibold mb-4">Send Us a Message</h2>
        <form className="max-w-md mx-auto" onSubmit={handleSubmit}>
          <div className="mb-4">
            <Label htmlFor="name">Name</Label>
            <Input type="text" id="name" placeholder="Your Name" required />
          </div>
          <div className="mb-4">
            <Label htmlFor="email">Email</Label>
            <Input type="email" id="email" placeholder="Your Email" required />
          </div>
          <div className="mb-4">
            <Label htmlFor="subject">Subject</Label>
            <Input type="text" id="subject" placeholder="Message Subject" required />
          </div>
          <div className="mb-4">
            <Label htmlFor="message">Message</Label>
            <Textarea id="message" placeholder="Your Message" required rows={5} />
          </div>
          <Button type="submit" className="w-full" disabled={isSubmitting}>
            {isSubmitting ? (
              <motion.div
                className="h-5 w-5 border-t-2 border-b-2 border-white rounded-full"
                animate={{ rotate: 360 }}
                transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
              />
            ) : (
              'Send Message'
            )}
          </Button>
        </form>
      </motion.div>
      
      <motion.div 
        className="mt-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 1 }}
      >
        <h2 className="text-2xl font-semibold mb-4">Follow Us</h2>
        <div className="flex space-x-4">
          <Link href="#" className="text-blue-600 dark:text-blue-400 hover:underline">Facebook</Link>
          <Link href="#" className="text-blue-600 dark:text-blue-400 hover:underline">Twitter</Link>
          <Link href="#" className="text-blue-600 dark:text-blue-400 hover:underline">Instagram</Link>
          <Link href="#" className="text-blue-600 dark:text-blue-400 hover:underline">LinkedIn</Link>
        </div>
      </motion.div>
    </div>
  )
}

