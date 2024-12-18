import Link from 'next/link'
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card'

export default function Blog() {
  const blogPosts = [
    {
      title: "The Impact of Education in Developing Countries",
      date: "June 15, 2023",
      excerpt: "Exploring how our Education for All program is changing lives and communities.",
      author: "Jane Doe, Education Program Director"
    },
    {
      title: "Healthcare Challenges in Remote Areas",
      date: "July 2, 2023",
      excerpt: "Insights from our recent healthcare outreach mission in rural communities.",
      author: "Dr. John Smith, Healthcare Outreach Coordinator"
    },
    {
      title: "5 Simple Ways to Reduce Your Carbon Footprint",
      date: "July 20, 2023",
      excerpt: "Practical tips for sustainable living from our Environmental Conservation team.",
      author: "Emily Green, Environmental Specialist"
    },
    {
      title: "Rebuilding Lives: A Year After the Earthquake",
      date: "August 5, 2023",
      excerpt: "A look at the progress and challenges in our ongoing disaster recovery efforts.",
      author: "Michael Brown, Disaster Relief Manager"
    }
  ]

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Our Blog</h1>
      <p className="mb-8">Stay updated with our latest news, stories from the field, and insights into our work:</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {blogPosts.map((post, index) => (
          <Card key={index}>
            <CardHeader>
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
        ))}
      </div>
      <div className="mt-8 text-center">
        <Link href="#" className="text-blue-600 hover:underline">
          View all blog posts
        </Link>
      </div>
    </div>
  )
}

