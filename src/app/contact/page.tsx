import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import Link from 'next/link';

export default function Contact() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Contact Us</h1>
      <p className="mb-6">Have questions or want to get involved? We'd love to hear from you! Choose the best way to reach us below:</p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        <div>
          <h2 className="text-2xl font-semibold mb-4">General Inquiries</h2>
          <p>Email: info@charityorg.org</p>
          <p>Phone: (555) 123-4567</p>
          <p>Address: 123 Charity Lane, Helpville, CH 12345</p>
        </div>
        <div>
          <h2 className="text-2xl font-semibold mb-4">Donation Support</h2>
          <p>Email: donations@charityorg.org</p>
          <p>Phone: (555) 987-6543</p>
        </div>
      </div>
      
      <h2 className="text-2xl font-semibold mb-4">Send Us a Message</h2>
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
          <Label htmlFor="subject">Subject</Label>
          <Input type="text" id="subject" placeholder="Message Subject" required />
        </div>
        <div className="mb-4">
          <Label htmlFor="message">Message</Label>
          <Textarea id="message" placeholder="Your Message" required rows={5} />
        </div>
        <Button type="submit" className="w-full">Send Message</Button>
      </form>
      
      <div className="mt-8">
        <h2 className="text-2xl font-semibold mb-4">Follow Us</h2>
        <div className="flex space-x-4">
          <Link href="#" className="text-blue-600 hover:underline">Facebook</Link>
          <Link href="#" className="text-blue-600 hover:underline">Twitter</Link>
          <Link href="#" className="text-blue-600 hover:underline">Instagram</Link>
          <Link href="#" className="text-blue-600 hover:underline">LinkedIn</Link>
        </div>
      </div>
    </div>
  )
}

