'use client'

import Link from 'next/link'
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card'
import { motion } from 'framer-motion'
import Image from 'next/image'

export default function Blog() {
  const blogPosts = [
    {
      title: "The Impact of Education in Developing Countries",
      date: "June 15, 2023",
      excerpt: "Exploring how our Education for All program is changing lives and communities.",
      author: "Jane Doe, Education Program Director",
      image: "/placeholder.svg?height=200&width=300"
    },
    {
      title: "Healthcare Challenges in Remote Areas",
      date: "July 2, 2023",
      excerpt: "Insights from our recent healthcare outreach mission in rural communities.",
      author: "Dr. John Smith, Healthcare Outreach Coordinator",
      image: "/placeholder.svg?height=200&width=300"
    },
    {
      title: "5 Simple Ways to Reduce Your Carbon Footprint",
      date: "July 20, 2023",
      excerpt: "Practical tips for sustainable living from our Environmental Conservation team.",
      author: "Emily Green, Environmental Specialist",
      image: "/placeholder.svg?height=200&width=300"
    },
    {
      title: "Rebuilding Lives: A Year After the Earthquake",
      date: "August 5, 2023",
      excerpt: "A look at the progress and challenges in our ongoing disaster recovery efforts.",
      author: "Michael Brown, Disaster Relief Manager",
      image: "/placeholder.svg?height=200&width=300"
    }
  ]

  return (
    <div>
      <motion.h1 
        className="text-3xl font-bold mb-6"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Our Blog
      </motion.h1>
      <motion.p 
        className="mb-8"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        Stay updated with our latest news, stories from the field, and insights into our work:
      </motion.p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {blogPosts.map((post, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 * (index + 1) }}
          >
            <Card>
              <CardHeader>
                <Image
                  src={post.image}
                  alt={post.title}
                  width={300}
                  height={200}
                  className="w-full h-48 object-cover rounded-md mb-4"
                  loading="lazy"
                />
                <CardTitle>{post.title}</CardTitle>
                <CardDescription>{post.date}</CardDescription>
              </CardHeader>
              <CardContent>
                <p>{post.excerpt}</p>
              </CardContent>
              <CardFooter>
                <p className="text-sm text-muted-foreground">By {post.author}</p>
              </CardFooter>
            </Card>
          </motion.div>
        ))}
      </div>
      <motion.div 
        className="mt-8 text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 1 }}
      >
        <Link href="#" className="text-blue-600 dark:text-blue-400 hover:underline">
          View all blog posts
        </Link>
      </motion.div>
    </div>
  )
}

