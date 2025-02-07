'use client'

import Link from 'next/link'
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card'
import { motion } from 'framer-motion'

export default function Programs() {
  const programs = [
    {
      title: "Education for All",
      description: "Providing access to quality education for underprivileged children.",
      details: "Our Education for All program aims to break the cycle of poverty through education. We provide school supplies, uniforms, and support for teachers in underserved communities."
    },
    {
      title: "Healthcare Outreach",
      description: "Bringing essential healthcare services to remote areas.",
      details: "Through mobile clinics and telemedicine, we ensure that even the most isolated communities have access to basic healthcare services, vaccinations, and health education."
    },
    {
      title: "Environmental Conservation",
      description: "Protecting our planet for future generations.",
      details: "Our conservation efforts include reforestation projects, community-based recycling programs, and education initiatives to promote sustainable living practices."
    },
    {
      title: "Disaster Relief",
      description: "Rapid response and long-term support for communities affected by disasters.",
      details: "When disaster strikes, we mobilize quickly to provide emergency supplies, temporary shelter, and long-term rebuilding assistance to help communities recover and become more resilient."
    }
  ]

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <motion.h1 
        className="radiant-heading text-4xl md:text-5xl mb-4 text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Our Programs
      </motion.h1>
      <motion.p 
        className="foundation-text text-primary mb-8 text-center max-w-3xl mx-auto"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        At Charity Org, we run various programs to address critical needs in our communities and around the world. Here are some of our key initiatives:
      </motion.p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {programs.map((program, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 * (index + 1) }}
          >
            <Card className="border-2 border-primary/20 hover:border-primary transition-colors duration-300 shadow-lg">
              <CardHeader>
                <CardTitle className="text-xl font-semibold">{program.title}</CardTitle>
                <CardDescription className="text-muted-foreground">{program.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">{program.details}</p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
      <motion.div 
        className="mt-12 text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 1 }}
      >
        <Link href="/volunteer" className="btn-primary px-6 py-3 rounded-full text-lg">
          Get Involved
        </Link>
      </motion.div>
    </div>
  )
}
