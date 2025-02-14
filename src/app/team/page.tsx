'use client'

import { motion } from 'framer-motion'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { LinkedinIcon, MailIcon, ArrowRight } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import TypingEffect from '@/lib/utils/typing-effect'

export default function Team() {
  // const leadership = [
  //   {
  //     name: "Sarah Johnson",
  //     role: "Executive Director",
  //     bio: "Sarah brings 15 years of nonprofit leadership experience and a passion for creating lasting social impact.",
  //     image: "/api/placeholder/400/400",
  //     linkedin: "#",
  //     email: "sarah@radiantsmile.org"
  //   },
  //   {
  //     name: "Michael Chen",
  //     role: "Director of Operations",
  //     bio: "Michael oversees our day-to-day operations and ensures our programs run efficiently and effectively.",
  //     image: "/api/placeholder/400/400",
  //     linkedin: "#",
  //     email: "michael@radiantsmile.org"
  //   },
  //   {
  //     name: "Dr. Lisa Patel",
  //     role: "Medical Programs Director",
  //     bio: "Dr. Patel leads our healthcare initiatives and brings extensive experience in community health programs.",
  //     image: "/api/placeholder/400/400",
  //     linkedin: "#",
  //     email: "lisa@radiantsmile.org"
  //   }
  // ]

  const teamMembers = [
    {
      name: "Muwanguzi Racheal Hope",
      role: "Executive Director",
      image: "/assets/images/team/hope.JPG"
    },
    {
      name: "Ashaba Joshua Jasper",
      role: "Volunteer Coordinator",
      image: "/assets/images/team/jasper.JPG"
    },
    {
      name: "Nuwasasira Martha Shalom",
      role: "Finance Director",
      image: "/assets/images/team/martha.JPG"
    },
    {
      name: "Tumwesigye Jeremiah",
      role: "General Secretary",
      image: "/assets/images/team/jerry.JPG"
    },
    {
      name: "Ssendegeya Kyeyune Peter",
      role: "Marketing & Communications Director",
      image: "/assets/images/team/peter.JPG"
    },
    {
      name: "Kobusingye Natasha Phiona",
      role: "Events Coordinator",
      image: "/assets/images/team/natasha.JPG"
    },
    {
      name: "Nagganda Gloria Mulwanya",
      role: "Operations Director",
      image: "/assets/images/team/gloria.JPG"
    },
    {
      name: "Mwebaza Doris Kasozi",
      role: "Teams Coordinator",
      image: "/assets/images/team/doris.JPG"
    },
    {
      name: "Namuyomba Nabilah Birungi",
      role: "Administrative Assistant",
      image: "/assets/images/team/nabilah.JPG"
    },
    {
      name: "Ahereza Austin",
      role: "Grant Writer",
      image: "/assets/images/team/austin.JPG"
    },   
    {
      name: "Debbie",
      role: "Volunteer Coordinator",
      image: "/assets/images/team/debbie.JPG"
    },
  ]

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      {/* Hero Section */}
      <motion.div 
        className="text-center mb-16"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="radiant-heading text-4xl md:text-5xl lg:text-6xl mb-2">
          <TypingEffect text="Our Team" />
        </h1>
        <p className="foundation-text text-primary mb-6">
          DEDICATED TO MAKING A DIFFERENCE
        </p>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
          Meet the passionate individuals behind Radiant Smile Foundation. Our diverse team brings together expertise, 
          dedication, and a shared commitment to creating positive change in communities worldwide.
        </p>
      </motion.div>

      {/* Leadership Section */}
      {/* <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="mb-16"
      >
        <h2 className="text-2xl font-semibold mb-8 text-center">Leadership Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {leadership.map((leader, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 * (index + 1) }}
            >
              <Card className="overflow-hidden circle-accent hover:border-primary transition-colors duration-300">
                <div className="aspect-square relative">
                  <Image
                    src={leader.image}
                    alt={leader.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-1">{leader.name}</h3>
                  <p className="text-primary font-medium mb-3">{leader.role}</p>
                  <p className="text-muted-foreground mb-4">{leader.bio}</p>
                  <div className="flex space-x-4">
                    <a href={leader.linkedin} className="text-primary hover:text-primary/80">
                      <LinkedinIcon className="w-5 h-5" />
                    </a>
                    <a href={`mailto:${leader.email}`} className="text-primary hover:text-primary/80">
                      <MailIcon className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.section> */}

      {/* Team Members Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="mb-16"
      >
        <h2 className="text-2xl font-semibold mb-8 text-center">Administrators</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 * (index + 1) }}
            >
              <Card className="overflow-hidden hover:border-primary transition-colors duration-300">
                <div className="aspect-square relative">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-4 text-center">
                  <h3 className="font-semibold mb-1">{member.name}</h3>
                  <p className="text-sm text-primary">{member.role}</p>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Join Our Team Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="text-center"
      >
        <div className="circle-accent p-8 md:p-12 max-w-3xl mx-auto">
          <h2 className="text-2xl font-semibold mb-4">Join Our Team</h2>
          <p className="text-muted-foreground mb-6">
            We're always looking for passionate individuals to join our mission. Whether as a staff member or volunteer,
            there are many ways to contribute to our cause.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            {/* <Link href="/careers">
              <Button className="bg-primary text-background hover:bg-primary/90 rounded-full">
                View Open Positions <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link> */}
            <Link href="/volunteer">
              <Button variant="outline" className="bg-primary text-background hover:bg-primary/90 rounded-full">
                Volunteer Opportunities <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>
      </motion.section>
    </div>
  )
}