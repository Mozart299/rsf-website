'use client'

import Link from 'next/link'
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { ArrowRight, Calendar, User } from 'lucide-react'
import TypingEffect from '@/lib/utils/typing-effect'

export default function Blog() {
  const blogPosts = [
    {
      title: "The Impact of Education in Developing Countries",
      date: "June 15, 2023",
      excerpt: "Exploring how our Education for All program is changing lives and communities.",
      author: "Jane Doe, Education Program Director",
      image: "/api/placeholder/800/600"
    },
    {
      title: "Healthcare Challenges in Remote Areas",
      date: "July 2, 2023",
      excerpt: "Insights from our recent healthcare outreach mission in rural communities.",
      author: "Dr. John Smith, Healthcare Outreach Coordinator",
      image: "/api/placeholder/800/600"
    },
    {
      title: "5 Simple Ways to Reduce Your Carbon Footprint",
      date: "July 20, 2023",
      excerpt: "Practical tips for sustainable living from our Environmental Conservation team.",
      author: "Emily Green, Environmental Specialist",
      image: "/api/placeholder/800/600"
    },
    {
      title: "Rebuilding Lives: A Year After the Earthquake",
      date: "August 5, 2023",
      excerpt: "A look at the progress and challenges in our ongoing disaster recovery efforts.",
      author: "Michael Brown, Disaster Relief Manager",
      image: "/api/placeholder/800/600"
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
        <h1 className="radiant-heading brand-text-gradient text-5xl mb-4">
          <TypingEffect text="Latest Stories" />
        </h1>
        <p className="foundation-text text-muted-foreground text-sm mb-6">
          INSIGHTS FROM THE FIELD
        </p>
        <p className="max-w-2xl mx-auto text-lg">
          Stay updated with our latest news, stories from the field, and insights into our work
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {blogPosts.map((post, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 * (index + 1) }}
          >
            <Card className="bg-secondary/50 backdrop-blur-sm  border-primary/50 transition-all duration-300 overflow-hidden">
              <div className="relative h-56 w-full">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover"
                  loading="lazy"
                />
              </div>
              <CardHeader>
                <div className="flex items-center gap-4 text-sm text-muted-foreground mb-2">
                  <span className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    {post.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <User className="h-4 w-4" />
                    {post.author.split(',')[0]}
                  </span>
                </div>
                <CardTitle className="text-xl font-semibold text-primary transition-colors">
                  <Link href="#">{post.title}</Link>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{post.excerpt}</p>
              </CardContent>
              <CardFooter>
                <p className="text-sm text-muted-foreground italic">
                  By {post.author}
                </p>
              </CardFooter>
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
          href="#" 
          className="inline-flex items-center gap-2 bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-3 rounded-md text-lg font-medium transition-colors"
        >
          View All Posts
          <ArrowRight className="h-5 w-5" />
        </Link>
      </motion.div>
    </div>
  )
}