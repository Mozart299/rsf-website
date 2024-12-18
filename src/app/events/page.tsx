'use client'

import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { CalendarDays } from 'lucide-react'
import { motion } from 'framer-motion'
import Image from 'next/image'

export default function Events() {
  const events = [
    {
      title: "Annual Charity Gala",
      date: "September 15, 2023",
      description: "Join us for an evening of celebration and fundraising for our Education for All program.",
      location: "Grand Hotel, Downtown",
      image: "/placeholder.svg?height=200&width=300"
    },
    {
      title: "Community Health Fair",
      date: "October 8, 2023",
      description: "Free health screenings and wellness workshops for the community.",
      location: "Central Park",
      image: "/placeholder.svg?height=200&width=300"
    },
    {
      title: "Earth Day Clean-Up",
      date: "April 22, 2024",
      description: "Help us clean up our local parks and waterways. Every piece of litter counts!",
      location: "Various locations",
      image: "/placeholder.svg?height=200&width=300"
    },
    {
      title: "Virtual 5K Run/Walk",
      date: "May 1-7, 2024",
      description: "Participate from anywhere in the world to support our Healthcare Outreach program.",
      location: "Virtual Event",
      image: "/placeholder.svg?height=200&width=300"
    }
  ]

  return (
    <div>
      <motion.h1 
        className="text-3xl font-bold mb-6"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Upcoming Events
      </motion.h1>
      <motion.p 
        className="mb-8"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        Get involved and make a difference! Here are some of our upcoming events where you can participate, volunteer, or show your support:
      </motion.p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {events.map((event, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 * (index + 1) }}
          >
            <Card>
              <CardHeader>
                <CardTitle>{event.title}</CardTitle>
                <CardDescription>
                  <div className="flex items-center mt-2">
                    <CalendarDays className="w-4 h-4 mr-2" />
                    {event.date}
                  </div>
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Image
                  src={event.image}
                  alt={event.title}
                  width={300}
                  height={200}
                  className="w-full h-48 object-cover rounded-md mb-4"
                  loading="lazy"
                />
                <p>{event.description}</p>
                <p className="mt-2 font-semibold">Location: {event.location}</p>
              </CardContent>
              <CardFooter>
                <Button>Register Now</Button>
              </CardFooter>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  )
}