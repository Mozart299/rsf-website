"use client"

import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { motion } from "framer-motion"

export default function Home() {
  return (
    <div className="text-center min-h-screen bg-background">
      <motion.div
        className="max-w-6xl mx-auto px-4 py-16"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="radiant-heading text-4xl md:text-5xl lg:text-6xl mb-2">
            Radiant Smile
          </h1>
          <p className="foundation-text text-lg md:text-xl text-primary mb-6">
            FOUNDATION
          </p>
        </motion.div>

        <motion.p
          className="text-lg md:text-xl lg:text-2xl mb-12 max-w-3xl mx-auto text-muted-foreground"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Bringing light to communities through compassion and action
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16 max-w-4xl mx-auto">
          <motion.div
            className="circle-accent p-8 bg-background"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h2 className="text-xl md:text-2xl font-semibold mb-4">Our Mission</h2>
            <p className="text-base md:text-lg text-muted-foreground">
              To create lasting change by addressing critical needs in education, healthcare, environmental conservation,
              and disaster relief.
            </p>
          </motion.div>
          <motion.div
            className="circle-accent p-8 bg-background"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <h2 className="text-xl md:text-2xl font-semibold mb-4">Our Impact</h2>
            <p className="text-base md:text-lg text-muted-foreground">
              Last year, we helped over 100,000 people across 20 countries, providing education, healthcare, and disaster
              relief.
            </p>
          </motion.div>
        </div>

        <div className="space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            <Link
              href="/donate"
              className="inline-block bg-primary text-background px-8 py-4 rounded-full hover:bg-primary/90 transition duration-300 text-lg font-semibold"
            >
              Donate Now
            </Link>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1 }}
          >
            <Link 
              href="/about" 
              className="inline-flex items-center text-primary hover:text-primary/80 text-lg transition duration-300"
            >
              Learn More About Us 
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </motion.div>
    </div>
  )
}