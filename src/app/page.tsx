'use client'

import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'

export default function Home() {
  return (
    <div className="text-center">
      <motion.h1 
        className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Welcome to Our Charity Organization
      </motion.h1>
      <motion.p 
        className="text-lg md:text-xl lg:text-2xl mb-8 max-w-3xl mx-auto"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        We're dedicated to making a positive impact in our community and beyond.
      </motion.p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12 max-w-4xl mx-auto">
        <motion.div 
          className="bg-blue-100 dark:bg-blue-900 p-6 rounded-lg"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <h2 className="text-xl md:text-2xl font-semibold mb-4">Our Mission</h2>
          <p className="text-base md:text-lg">To create lasting change by addressing critical needs in education, healthcare, environmental conservation, and disaster relief.</p>
        </motion.div>
        <motion.div 
          className="bg-green-100 dark:bg-green-900 p-6 rounded-lg"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <h2 className="text-xl md:text-2xl font-semibold mb-4">Our Impact</h2>
          <p className="text-base md:text-lg">Last year, we helped over 100,000 people across 20 countries, providing education, healthcare, and disaster relief.</p>
        </motion.div>
      </div>
      <div className="space-y-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <Link href="/donate" className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition duration-300 text-lg">
            Donate Now
          </Link>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1 }}
        >
          <Link href="/about" className="inline-block text-blue-600 dark:text-blue-400 hover:underline text-lg">
            Learn More About Us <ArrowRight className="inline w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </div>
  )
}