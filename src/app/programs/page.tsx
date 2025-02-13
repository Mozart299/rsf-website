'use client'

import Link from 'next/link'
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import TypingEffect from '@/lib/utils/typing-effect'

export default function Programs() {
  const programs = [
    {
      title: "Educational Support",
      description: "Empowering through comprehensive educational resources and opportunities.",
      details: "We provide school supplies, scholarships, tutoring programs, literacy initiatives, and digital learning centers to ensure quality education reaches every student in need."
    },
    {
      title: "Health & Wellness",
      description: "Promoting community health through comprehensive care programs.",
      details: "Our services include regular health check-ups, vaccination drives, nutritional support, and health awareness campaigns to build healthier communities."
    },
    {
      title: "Mental Health Support",
      description: "Supporting emotional well-being through professional care.",
      details: "We offer professional counseling services, stress management workshops, and facilitate support groups for individuals dealing with mental health challenges."
    },
    {
      title: "Skill Development",
      description: "Building capabilities for sustainable livelihoods.",
      details: "From vocational training to life skills workshops and business management education, we empower individuals with tools for self-sufficiency."
    },
    {
      title: "Community Empowerment",
      description: "Strengthening communities through sustainable initiatives.",
      details: "Our projects include clean water initiatives, microfinance programs, sustainable agriculture, and community clean-up drives."
    },
    {
      title: "Emergency Aid",
      description: "Rapid response support for communities in crisis.",
      details: "We provide crisis response, essential supplies distribution, and temporary shelter support for communities affected by disasters."
    },
    {
      title: "Cultural Exchange",
      description: "Fostering global understanding and solidarity.",
      details: "Through volunteer exchanges and cultural events, we promote mutual understanding and celebrate diversity across communities."
    },
    {
      title: "Advocacy & Support",
      description: "Championing positive change through awareness and action.",
      details: "We run awareness campaigns, engage in policy advocacy, and provide parenting workshops to support sustainable community development."
    },
    {
      title: "Volunteer Programs",
      description: "Creating opportunities for meaningful community service.",
      details: "We offer local volunteering opportunities and organize outreach trips for hands-on community support."
    },
    {
      title: "Fundraising Initiatives",
      description: "Supporting our mission through community engagement.",
      details: "From charity runs to auctions and community events, we create opportunities for everyone to contribute to our cause."
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
        <h1 className="radiant-heading text-5xl mb-4">
          <TypingEffect text="Our Programs" />
        </h1>
        <p className="foundation-text brand-text-gradient text-sm mb-6">
          CREATING LASTING IMPACT
        </p>
        <p className="max-w-2xl mx-auto text-lg">
          We offer a comprehensive range of programs designed to address critical needs 
          and create sustainable positive change in communities worldwide. Explore our key initiatives:
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {programs.map((program, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 * (index + 1) }}
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