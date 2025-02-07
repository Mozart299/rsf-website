'use client'

import Link from 'next/link'
import AnimatedSection from '../components/animatedsection'
import TypingEffect from '@/lib/utils/typing-effect'

export default function About() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <AnimatedSection>
        <h1 className="radiant-heading text-4xl md:text-5xl lg:text-6xl mb-2">
          <TypingEffect text="About Our Foundation" />
        </h1>
        <p className="foundation-text text-primary mb-8">CREATING POSITIVE CHANGE</p>
        <p className="mb-8 text-lg text-muted-foreground">
          Our foundation was founded in 2010 with a mission to create positive change in our community and around the world.
          We believe that by focusing on key areas of need, we can make a lasting impact on individuals and communities.
        </p>
      </AnimatedSection>

      <AnimatedSection delay={0.2}>
        <div className="circle-accent p-8 mb-8">
          <h2 className="text-2xl md:text-3xl font-semibold mb-4">Our Focus Areas</h2>
          <ul className="space-y-4 text-lg text-muted-foreground">
            <li className="flex items-center">
              <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
              Education for underprivileged children
            </li>
            <li className="flex items-center">
              <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
              Healthcare access in remote areas
            </li>
            <li className="flex items-center">
              <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
              Environmental conservation efforts
            </li>
            <li className="flex items-center">
              <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
              Disaster relief and recovery
            </li>
          </ul>
        </div>
      </AnimatedSection>

      <AnimatedSection delay={0.4}>
        <div className="circle-accent p-8 mb-8">
          <h2 className="text-2xl md:text-3xl font-semibold mb-4">Our Approach</h2>
          <p className="mb-4 text-lg text-muted-foreground">
            We believe in sustainable, community-driven solutions. Our approach involves:
          </p>
          <ul className="space-y-4 text-lg text-muted-foreground">
            <li className="flex items-center">
              <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
              Partnering with local organizations and leaders
            </li>
            <li className="flex items-center">
              <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
              Empowering communities to lead their own development
            </li>
            <li className="flex items-center">
              <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
              Implementing evidence-based programs
            </li>
            <li className="flex items-center">
              <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
              Continuously evaluating and improving our impact
            </li>
          </ul>
        </div>
      </AnimatedSection>

      <AnimatedSection delay={0.6}>
        <div className="circle-accent p-8 mb-8">
          <h2 className="text-2xl md:text-3xl font-semibold mb-4">Our Team</h2>
          <p className="mb-4 text-lg text-muted-foreground">
            Our dedicated team of staff and volunteers work tirelessly to implement our programs and create positive change.
            From our headquarters to our field offices, we're united by a shared commitment to our mission.
          </p>
        </div>
      </AnimatedSection>

      <AnimatedSection delay={0.8}>
        <div className="mt-8 text-center">
          <Link 
            href="/volunteer" 
            className="inline-block bg-primary text-background px-8 py-4 rounded-full hover:bg-primary/90 transition duration-300 text-lg font-semibold"
          >
            Join our team as a volunteer
          </Link>
        </div>
      </AnimatedSection>
    </div>
  )
}