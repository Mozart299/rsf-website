import Link from 'next/link'
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card'

export default function Programs() {
  const programs = [
    {
      title: "Education for All",
      description: "Providing access to quality education for underprivileged children.",
      details: "Our Education for All program aims to break the cycle of poverty through education. We provide school supplies, uniforms, and support for teachers in underserved communities."
    },
    {
      title: "Healthcare Outreach",
      description: "Bringing essential healthcare services to remote areas.",
      details: "Through mobile clinics and telemedicine, we ensure that even the most isolated communities have access to basic healthcare services, vaccinations, and health education."
    },
    {
      title: "Environmental Conservation",
      description: "Protecting our planet for future generations.",
      details: "Our conservation efforts include reforestation projects, community-based recycling programs, and education initiatives to promote sustainable living practices."
    },
    {
      title: "Disaster Relief",
      description: "Rapid response and long-term support for communities affected by disasters.",
      details: "When disaster strikes, we mobilize quickly to provide emergency supplies, temporary shelter, and long-term rebuilding assistance to help communities recover and become more resilient."
    }
  ]

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Our Programs</h1>
      <p className="mb-8">At Charity Org, we run various programs to address critical needs in our communities and around the world. Here are some of our key initiatives:</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {programs.map((program, index) => (
          <Card key={index}>
            <CardHeader>
              <CardTitle>{program.title}</CardTitle>
              <CardDescription>{program.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <p>{program.details}</p>
            </CardContent>
          </Card>
        ))}
      </div>
      <div className="mt-8 text-center">
        <Link href="/volunteer" className="text-blue-600 hover:underline">
          Want to get involved? Check out our volunteer opportunities!
        </Link>
      </div>
    </div>
  )
}