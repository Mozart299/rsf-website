'use client'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import TypingEffect from '@/lib/utils/typing-effect'
import { motion } from 'framer-motion'
import { useState } from 'react'
import { PieChart, Pie, Cell, ResponsiveContainer, Legend } from 'recharts'

export default function Donate() {
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    await new Promise(resolve => setTimeout(resolve, 2000))
    setIsSubmitting(false)
  }

  const data = [
    { name: 'Programs', value: 85 },
    { name: 'Admin', value: 10 },
    { name: 'Fundraising', value: 5 },
  ]

  const COLORS = ['#FFD700', '#FFC100', '#FFB000']

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <motion.div 
        className="text-center mb-12"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="radiant-heading  text-5xl mb-4">
          <TypingEffect text="Make a Difference" />
        </h1>
        <p className="foundation-text brand-text-gradient text-sm mb-6">
          EMPOWER CHANGE THROUGH GIVING
        </p>
        <p className="max-w-2xl mx-auto text-lg">
          Your generosity helps us continue our important work. Every donation makes an impact.
        </p>
      </motion.div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <motion.div 
          className="rounded-lg border border-border/50 p-8 bg-secondary/50 backdrop-blur-sm shadow-lg"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <h2 className="text-2xl font-semibold mb-6 brand-text-gradient">Impact Distribution</h2>
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
          className="rounded-lg border border-border/50 p-8 bg-secondary/50 backdrop-blur-sm shadow-lg"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <h2 className="text-2xl font-semibold mb-6 brand-text-gradient">Ways to Give</h2>
          <ul className="space-y-4">
            {['One-time donation', 'Monthly recurring donation', 'Corporate matching gifts', 'Planned giving'].map((item, index) => (
              <li key={index} className="flex items-center">
                <span className="h-1.5 w-1.5 bg-primary rounded-full mr-3"></span>
                <span className="text-lg">{item}</span>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
      
      <motion.form 
        className="max-w-md mx-auto bg-secondary/50 backdrop-blur-sm rounded-lg border border-border/50 p-8 shadow-lg"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.8 }}
        onSubmit={handleSubmit}
      >
        <div className="space-y-6">
          <div>
            <Label htmlFor="name" className="foundation-text text-xs">Name</Label>
            <Input type="text" id="name" placeholder="Your Name" required className="mt-2" />
          </div>
          <div>
            <Label htmlFor="email" className="foundation-text text-xs">Email</Label>
            <Input type="email" id="email" placeholder="Your Email" required className="mt-2" />
          </div>
          <div>
            <Label htmlFor="amount" className="foundation-text text-xs">Amount ($)</Label>
            <Input type="number" id="amount" placeholder="Amount" required min="1" className="mt-2" />
          </div>
          <div>
            <Label htmlFor="frequency" className="foundation-text text-xs">Frequency</Label>
            <select 
              id="frequency" 
              className="w-full mt-2 border rounded-md p-2 bg-background text-foreground"
            >
              <option value="one-time">One-time</option>
              <option value="monthly">Monthly</option>
              <option value="annually">Annually</option>
            </select>
          </div>
          <Button 
            type="submit" 
            className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Processing...' : 'Donate Now'}
          </Button>
        </div>
      </motion.form>
      
      <motion.div 
        className="mt-12 text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 1 }}
      >
        <p className="text-sm text-muted-foreground">
          Our charity is registered as a 501(c)(3) non-profit organization. 
          All donations are tax-deductible to the extent allowed by law.
        </p>
      </motion.div>
    </div>
  )
}