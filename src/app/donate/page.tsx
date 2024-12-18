'use client'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { motion } from 'framer-motion'
import { useState } from 'react'
import { PieChart, Pie, Cell, ResponsiveContainer, Legend } from 'recharts'

export default function Donate() {
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000))
    setIsSubmitting(false)
  }

  const data = [
    { name: 'Programs', value: 85 },
    { name: 'Admin', value: 10 },
    { name: 'Fundraising', value: 5 },
  ]

  const COLORS = ['#0088FE', '#00C49F', '#FFBB28']

  return (
    <div>
      <motion.h1 
        className="text-3xl font-bold mb-6"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Make a Donation
      </motion.h1>
      <motion.p 
        className="mb-6"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        Your generosity helps us continue our important work. Every donation, no matter the size, makes a difference in the lives of those we serve.
      </motion.p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        <motion.div 
          className="bg-blue-100 dark:bg-blue-900 p-6 rounded-lg"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <h2 className="text-2xl font-semibold mb-4">Where Your Money Goes</h2>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                labelLine={false}
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
              >
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </motion.div>
        <motion.div 
          className="bg-green-100 dark:bg-green-900 p-6 rounded-lg"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <h2 className="text-2xl font-semibold mb-4">Ways to Donate</h2>
          <ul className="list-disc list-inside">
            <li>One-time donation</li>
            <li>Monthly recurring donation</li>
            <li>Corporate matching gifts</li>
            <li>Planned giving</li>
          </ul>
        </motion.div>
      </div>
      
      <motion.form 
        className="max-w-md mx-auto"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.8 }}
        onSubmit={handleSubmit}
      >
        <div className="mb-4">
          <Label htmlFor="name">Name</Label>
          <Input type="text" id="name" placeholder="Your Name" required />
        </div>
        <div className="mb-4">
          <Label htmlFor="email">Email</Label>
          <Input type="email" id="email" placeholder="Your Email" required />
        </div>
        <div className="mb-4">
          <Label htmlFor="amount">Donation Amount ($)</Label>
          <Input type="number" id="amount" placeholder="Amount" required min="1" />
        </div>
        <div className="mb-4">
          <Label htmlFor="frequency">Donation Frequency</Label>
          <select id="frequency" className="w-full border rounded-md p-2 dark:bg-gray-800">
            <option value="one-time">One-time</option>
            <option value="monthly">Monthly</option>
            <option value="annually">Annually</option>
          </select>
        </div>
        <Button type="submit" className="w-full" disabled={isSubmitting}>
          {isSubmitting ? 'Processing...' : 'Donate Now'}
        </Button>
      </motion.form>
      
      <motion.div 
        className="mt-8 text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 1 }}
      >
        <p className="text-sm text-gray-600 dark:text-gray-400">
          Our charity is registered as a 501(c)(3) non-profit organization. 
          All donations are tax-deductible to the extent allowed by law.
        </p>
      </motion.div>
    </div>
  )
}

