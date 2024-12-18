import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export default function Home() {
  return (
    <div className="text-center">
      <h1 className="text-4xl font-bold mb-6">Welcome to Our Charity Organization</h1>
      <p className="text-xl mb-8">We're dedicated to making a positive impact in our community and beyond.</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <div className="bg-blue-100 p-6 rounded-lg">
          <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
          <p>To create lasting change by addressing critical needs in education, healthcare, environmental conservation, and disaster relief.</p>
        </div>
        <div className="bg-green-100 p-6 rounded-lg">
          <h2 className="text-2xl font-semibold mb-4">Our Impact</h2>
          <p>Last year, we helped over 100,000 people across 20 countries, providing education, healthcare, and disaster relief.</p>
        </div>
      </div>
      <div className="space-y-4">
        <Link href="/donate" className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition duration-300">
          Donate Now
        </Link>
        <Link href="/about" className="block text-blue-600 hover:underline">
          Learn More About Us <ArrowRight className="inline w-4 h-4" />
        </Link>
      </div>
    </div>
  )
}

