'use client'

import Link from 'next/link'
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import TypingEffect from '@/lib/utils/typing-effect'

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
      <motion.div 
        className="text-center mb-12"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="radiant-heading  text-5xl mb-4">
          <TypingEffect text="Our Programs" />
        </h1>
        <p className="foundation-text brand-text-gradient  text-sm mb-6">
          CREATING LASTING IMPACT
        </p>
        <p className="max-w-2xl mx-auto text-lg">
          At Charity Org, we run various programs to address critical needs in our communities 
          and around the world. Here are some of our key initiatives:
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {programs.map((program, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 * (index + 1) }}
          >
            <Card className="bg-secondary/50 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-all duration-300 h-full">
              <CardHeader>
                <CardTitle className="text-2xl font-semibold brand-text-gradient">
                  {program.title}
                </CardTitle>
                <CardDescription className="text-base">
                  {program.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  {program.details}
                </p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      <motion.div 
        className="mt-16 text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 1 }}
      >
        <Link 
          href="/volunteer" 
          className="inline-flex items-center gap-2 bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-3 rounded-md text-lg font-medium transition-colors"
        >
          Get Involved
          <ArrowRight className="h-5 w-5" />
        </Link>
      </motion.div>
    </div>
  )
}