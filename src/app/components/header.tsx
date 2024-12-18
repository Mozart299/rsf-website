import Link from 'next/link'
import { Heart } from 'lucide-react'

const Header = () => {
  return (
    <nav className="bg-blue-600 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="flex items-center space-x-2 text-xl font-bold">
          <Heart className="w-6 h-6" />
          <span>Charity Org</span>
        </Link>
        <ul className="flex space-x-4">
          <li><Link href="/" className="hover:underline">Home</Link></li>
          <li><Link href="/about" className="hover:underline">About</Link></li>
          <li><Link href="/programs" className="hover:underline">Programs</Link></li>
          <li><Link href="/events" className="hover:underline">Events</Link></li>
          <li><Link href="/volunteer" className="hover:underline">Volunteer</Link></li>
          <li><Link href="/donate" className="hover:underline">Donate</Link></li>
          <li><Link href="/blog" className="hover:underline">Blog</Link></li>
          <li><Link href="/contact" className="hover:underline">Contact</Link></li>
        </ul>
      </div>
    </nav>
  )
}

export default Header

