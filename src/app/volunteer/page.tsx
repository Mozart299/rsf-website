'use client'

import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Checkbox } from '@/components/ui/checkbox'
import { motion } from 'framer-motion'
import { useState } from 'react'
import TypingEffect from '@/lib/utils/typing-effect'

export default function Volunteer() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    interests: '',
    availability: '',
    experience: '',
    emergency_contact: '',
    emergency_phone: '',
    background_check: false,
    age_confirm: false
  })

  interface FormData {
    firstName: string
    lastName: string
    email: string
    phone: string
    address: string
    interests: string
    availability: string
    experience: string
    emergency_contact: string
    emergency_phone: string
    background_check: boolean
    age_confirm: boolean
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault()
    console.log('Form submitted:', formData)
  }

  interface FormInputChangeEvent {
    target: {
      name: string
      value: string
    }
  }

  const handleChange = (e: FormInputChangeEvent): void => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <h1 className="radiant-heading text-4xl md:text-5xl lg:text-6xl mb-2">
          <TypingEffect text="Volunteer With Us" />
        </h1>
        <p className="foundation-text text-primary mb-6">
          MAKE A DIFFERENCE
        </p>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Join our team of dedicated volunteers and help create positive change in your community. 
          Your time and skills can make a real difference in people's lives.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <Card className="p-6 circle-accent">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <Label htmlFor="firstName">First Name</Label>
                <Input
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                  className="mt-1.5"
                />
              </div>
              
              <div>
                <Label htmlFor="lastName">Last Name</Label>
                <Input
                  id="lastName"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                  className="mt-1.5"
                />
              </div>

              <div>
                <Label htmlFor="email">Email Address</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="mt-1.5"
                />
              </div>

              <div>
                <Label htmlFor="phone">Phone Number</Label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="mt-1.5"
                />
              </div>
            </div>

            <div>
              <Label htmlFor="address">Address</Label>
              <Input
                id="address"
                name="address"
                value={formData.address}
                onChange={handleChange}
                required
                className="mt-1.5"
              />
            </div>

            <div>
              <Label htmlFor="interests">Areas of Interest</Label>
              <Select name="interests" onValueChange={(value) => handleChange({ target: { name: 'interests', value }})}>
                <SelectTrigger className="mt-1.5">
                  <SelectValue placeholder="Select area of interest" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="education">Education Programs</SelectItem>
                  <SelectItem value="healthcare">Healthcare Initiatives</SelectItem>
                  <SelectItem value="environment">Environmental Projects</SelectItem>
                  <SelectItem value="disaster">Disaster Relief</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label htmlFor="availability">Availability</Label>
              <Textarea
                id="availability"
                name="availability"
                placeholder="Please describe your availability (days/hours per week)"
                value={formData.availability}
                onChange={handleChange}
                className="mt-1.5"
                required
              />
            </div>

            <div>
              <Label htmlFor="experience">Relevant Experience</Label>
              <Textarea
                id="experience"
                name="experience"
                placeholder="Tell us about any relevant experience or skills"
                value={formData.experience}
                onChange={handleChange}
                className="mt-1.5"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <Label htmlFor="emergency_contact">Emergency Contact Name</Label>
                <Input
                  id="emergency_contact"
                  name="emergency_contact"
                  value={formData.emergency_contact}
                  onChange={handleChange}
                  required
                  className="mt-1.5"
                />
              </div>

              <div>
                <Label htmlFor="emergency_phone">Emergency Contact Phone</Label>
                <Input
                  id="emergency_phone"
                  name="emergency_phone"
                  type="tel"
                  value={formData.emergency_phone}
                  onChange={handleChange}
                  required
                  className="mt-1.5"
                />
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="background_check"
                  name="background_check"
                  checked={formData.background_check}
                  onCheckedChange={(checked) => 
                    setFormData(prev => ({ ...prev, background_check: checked as boolean }))
                  }
                  required
                />
                <Label htmlFor="background_check" className="text-sm">
                  I agree to undergo a background check if required
                </Label>
              </div>

              <div className="flex items-center space-x-2">
                <Checkbox
                  id="age_confirm"
                  name="age_confirm"
                  checked={formData.age_confirm}
                  onCheckedChange={(checked) => 
                    setFormData(prev => ({ ...prev, age_confirm: checked as boolean }))
                  }
                  required
                />
                <Label htmlFor="age_confirm" className="text-sm">
                  I confirm that I am 18 years or older
                </Label>
              </div>
            </div>

            <Button 
              type="submit"
              className="w-full bg-primary text-background hover:bg-primary/90 rounded-full"
            >
              Submit Volunteer Application
            </Button>
          </form>
        </Card>
      </motion.div>

      <motion.div 
        className="mt-12"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <h2 className="text-2xl font-semibold mb-4">Why Volunteer With Us?</h2>
        <ul className="space-y-3">
          {[
            "Make a tangible impact in your community and beyond",
            "Develop new skills and gain valuable experience",
            "Meet like-minded individuals and expand your network",
            "Flexible opportunities to fit your schedule",
            "Receive training and support from our dedicated staff"
          ].map((item, index) => (
            <li key={index} className="flex items-center">
              <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
              {item}
            </li>
          ))}
        </ul>
      </motion.div>
    </div>
  )
}