'use client'

import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card'
import { CalendarDays } from 'lucide-react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import EventRegistrationModal from '../components/event-register-modal'
import TypingEffect from '@/lib/utils/typing-effect'

export default function Events() {
  const events = [
    {
      title: "Back to School Outreach",
      date: "June 1, 2025",
      description: "We are actively collecting donations of school materials to support orphaned and vulnerable children of all ages",
      location: "In Need Home, Namuwongo",
      image: "/assets/images/back-to-school-event-banner.jpeg"
    }
  ]

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <motion.h1 
        className="radiant-heading text-4xl md:text-5xl mb-2 text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <TypingEffect text="Upcoming Events" />
      </motion.h1>
      <motion.p 
        className="foundation-text text-primary mb-8 text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        MAKE A DIFFERENCE
      </motion.p>
      <motion.p 
        className="mb-12 text-lg text-muted-foreground text-center max-w-2xl mx-auto"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        Get involved and create positive change! Join us at these upcoming events where you can participate, volunteer, or show your support:
      </motion.p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {events.map((event, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 * (index + 1) }}
          >
            <Card className="border-2 border-primary/20 hover:border-primary transition-colors duration-300">
              <CardHeader>
                <CardTitle className="text-xl font-semibold">{event.title}</CardTitle>
                <CardDescription>
                  <div className="flex items-center mt-2 text-primary">
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
                  className="w-full h-48 object-cover rounded-lg mb-4"
                  loading="lazy"
                />
                <p className="text-muted-foreground">{event.description}</p>
                <p className="mt-2 font-semibold">Location: {event.location}</p>
              </CardContent>
              <CardFooter>
                <EventRegistrationModal event={event} />
              </CardFooter>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
