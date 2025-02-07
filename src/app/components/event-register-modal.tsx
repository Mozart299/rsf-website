"use client"

import React from 'react'
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Checkbox } from "@/components/ui/checkbox"
import { useState } from "react"

const EventRegistrationModal = ({ event }: { event: { title?: string } }) => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    dietary: "",
    volunteer: false,
  })

interface FormData {
    fullName: string
    email: string
    phone: string
    dietary: string
    volunteer: boolean
}

const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault()
    // Handle form submission logic here
    console.log("Form submitted:", formData)
}

const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = e.target
    setFormData((prev: FormData) => ({
        ...prev,
        [name]: value
    }))
}

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="w-full bg-primary text-background hover:bg-primary/90 rounded-full">
          Register Now
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle className="radiant-heading text-2xl mb-1">
            Event Registration
          </DialogTitle>
          <DialogDescription className="foundation-text text-primary text-sm">
            {event?.title?.toUpperCase()}
          </DialogDescription>
        </DialogHeader>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-4">
            <div>
              <Label htmlFor="fullName">Full Name</Label>
              <Input
                id="fullName"
                name="fullName"
                placeholder="Enter your full name"
                className="mt-1.5"
                value={formData.fullName}
                onChange={handleChange}
                required
              />
            </div>

            <div>
              <Label htmlFor="email">Email Address</Label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="Enter your email"
                className="mt-1.5"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div>
              <Label htmlFor="phone">Phone Number</Label>
              <Input
                id="phone"
                name="phone"
                type="tel"
                placeholder="Enter your phone number"
                className="mt-1.5"
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </div>

            <div>
              <Label htmlFor="dietary">Dietary Requirements (Optional)</Label>
              <Input
                id="dietary"
                name="dietary"
                placeholder="Any dietary requirements?"
                className="mt-1.5"
                value={formData.dietary}
                onChange={handleChange}
              />
            </div>

            <div className="flex items-center space-x-2">
              <Checkbox
                id="volunteer"
                name="volunteer"
                checked={formData.volunteer}
                onCheckedChange={(checked) => 
                  setFormData(prev => ({ ...prev, volunteer: typeof checked === 'boolean' ? checked : false }))
                }
              />
              <Label htmlFor="volunteer" className="text-sm">
                I would like to volunteer at this event
              </Label>
            </div>
          </div>

          <div className="flex flex-col gap-4 pt-4">
            <Button 
              type="submit"
              className="bg-primary text-background hover:bg-primary/90 rounded-full"
            >
              Complete Registration
            </Button>
            <p className="text-xs text-center text-muted-foreground">
              By registering, you agree to our terms and conditions and privacy policy.
            </p>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  )
}

export default EventRegistrationModal