import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Navigation from './components/navigation'
import { ThemeProvider } from './components/themeprovider'

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
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Navigation />
          <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 max-w-7xl">
            {children}
          </main>
          <footer className="bg-gray-100 dark:bg-gray-800 py-4 text-center text-sm md:text-base">
            <p>&copy; {new Date().getFullYear()} Charity Organization. All rights reserved.</p>
          </footer>
        </ThemeProvider>
      </body>
    </html>
  )
}

