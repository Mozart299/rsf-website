import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

export default function Donate() {
    return (
      <div>
        <h1 className="text-3xl font-bold mb-6">Make a Donation</h1>
        <p className="mb-6">Your generosity helps us continue our important work. Every donation, no matter the size, makes a difference in the lives of those we serve.</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <div className="bg-blue-100 p-6 rounded-lg">
            <h2 className="text-2xl font-semibold mb-4">Where Your Money Goes</h2>
            <ul className="list-disc list-inside">
              <li>85% directly to our programs</li>
              <li>10% to administrative costs</li>
              <li>5% to fundraising efforts</li>
            </ul>
          </div>
          <div className="bg-green-100 p-6 rounded-lg">
            <h2 className="text-2xl font-semibold mb-4">Ways to Donate</h2>
            <ul className="list-disc list-inside">
              <li>One-time donation</li>
              <li>Monthly recurring donation</li>
              <li>Corporate matching gifts</li>
              <li>Planned giving</li>
            </ul>
          </div>
        </div>
        
        <form className="max-w-md mx-auto">
          <div className="mb-4">
            <Label htmlFor="name">Name</Label>
            <Input type="text" id="name" placeholder="Your Name" required />
          </div>
          <div className="mb-4">
            <Label htmlFor="email">Email</Label>
            <Input type="email" id="email" placeholder="Your Email" required />
          </div>
          <div className="mb-4">
            <Label htmlFor="amount">Donation Amount ($)</Label>
            <Input type="number" id="amount" placeholder="Amount" required min="1" />
          </div>
          <div className="mb-4">
            <Label htmlFor="frequency">Donation Frequency</Label>
            <select id="frequency" className="w-full border rounded-md p-2">
              <option value="one-time">One-time</option>
              <option value="monthly">Monthly</option>
              <option value="annually">Annually</option>
            </select>
          </div>
          <Button type="submit" className="w-full">Donate Now</Button>
        </form>
        
        <div className="mt-8 text-center">
          <p className="text-sm text-gray-600">
            Our charity is registered as a 501(c)(3) non-profit organization. 
            All donations are tax-deductible to the extent allowed by law.
          </p>
        </div>
      </div>
    )
  }
  
  