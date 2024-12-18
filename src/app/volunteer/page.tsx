import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

export default function Volunteer() {
  const opportunities = [
    {
      title: "Education Mentor",
      description: "Help students with their studies and provide guidance for their future.",
      commitment: "2-4 hours per week",
      location: "Various schools"
    },
    {
      title: "Healthcare Assistant",
      description: "Assist medical professionals during community health fairs and outreach programs.",
      commitment: "1-2 days per month",
      location: "Mobile clinics and community centers"
    },
    {
      title: "Environmental Steward",
      description: "Participate in conservation projects and educate communities about sustainable practices.",
      commitment: "Flexible, project-based",
      location: "Various outdoor locations"
    },
    {
      title: "Disaster Response Team Member",
      description: "Be part of our rapid response team for disaster relief efforts.",
      commitment: "On-call, with periodic training",
      location: "Varies based on need"
    }
  ]

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Volunteer Opportunities</h1>
      <p className="mb-8">Your time and skills can make a real difference. Check out our current volunteer opportunities and join our team of dedicated individuals working to create positive change:</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {opportunities.map((opportunity, index) => (
          <Card key={index}>
            <CardHeader>
              <CardTitle>{opportunity.title}</CardTitle>
              <CardDescription>{opportunity.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <p><strong>Time Commitment:</strong> {opportunity.commitment}</p>
              <p><strong>Location:</strong> {opportunity.location}</p>
            </CardContent>
            <CardFooter>
              <Button>Apply Now</Button>
            </CardFooter>
          </Card>
        ))}
      </div>
      <div className="mt-8">
        <h2 className="text-2xl font-bold mb-4">Why Volunteer With Us?</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>Make a tangible impact in your community and beyond</li>
          <li>Develop new skills and gain valuable experience</li>
          <li>Meet like-minded individuals and expand your network</li>
          <li>Flexible opportunities to fit your schedule</li>
          <li>Receive training and support from our dedicated staff</li>
        </ul>
      </div>
    </div>
  )
}