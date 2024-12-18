import Link from 'next/link'

export default function About() {
    return (
      <div>
        <h1 className="text-3xl font-bold mb-6">About Our Charity</h1>
        <p className="mb-4">
          Our charity organization was founded in 2010 with a mission to create positive change in our community and around the world.
          We believe that by focusing on key areas of need, we can make a lasting impact on individuals and communities.
        </p>
        <h2 className="text-2xl font-semibold mb-4">Our Focus Areas</h2>
        <ul className="list-disc list-inside mb-6">
          <li>Education for underprivileged children</li>
          <li>Healthcare access in remote areas</li>
          <li>Environmental conservation efforts</li>
          <li>Disaster relief and recovery</li>
        </ul>
        <h2 className="text-2xl font-semibold mb-4">Our Approach</h2>
        <p className="mb-4">
          We believe in sustainable, community-driven solutions. Our approach involves:
        </p>
        <ul className="list-disc list-inside mb-6">
          <li>Partnering with local organizations and leaders</li>
          <li>Empowering communities to lead their own development</li>
          <li>Implementing evidence-based programs</li>
          <li>Continuously evaluating and improving our impact</li>
        </ul>
        <h2 className="text-2xl font-semibold mb-4">Our Team</h2>
        <p className="mb-4">
          Our dedicated team of staff and volunteers work tirelessly to implement our programs and create positive change.
          From our headquarters to our field offices, we're united by a shared commitment to our mission.
        </p>
        <div className="mt-8">
          <Link href="/volunteer" className="text-blue-600 hover:underline">
            Join our team as a volunteer
          </Link>
        </div>
      </div>
    )
  }
  
  