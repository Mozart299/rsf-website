import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Header from './components/header'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Charity Organization',
  description: 'Making the world a better place',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <main className="container mx-auto px-4 py-8">
          {children}
        </main>
        <footer className="bg-gray-100 py-4 text-center">
          <p>&copy; 2023 Charity Organization. All rights reserved.</p>
        </footer>
      </body>
    </html>
  )
}