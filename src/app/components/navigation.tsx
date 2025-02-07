"use client"

import Link from "next/link"
import { Menu, X, Sun, Moon } from "lucide-react"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { useTheme } from "next-themes"
import Image from "next/image"

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false)
  const { theme, setTheme } = useTheme()

  const toggleMenu = () => setIsOpen(!isOpen)

  const menuItems = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/programs", label: "Programs" },
    { href: "/events", label: "Events" },
    { href: "/volunteer", label: "Volunteer" },
    { href: "/donate", label: "Donate" },
    { href: "/team", label: "Team" },
    { href: "/blog", label: "Blog" },
    { href: "/contact", label: "Contact" },
  ]

  return (
    <nav className="bg-background border-b">
      <div className="container mx-auto max-w-7xl flex justify-between items-center p-2">
        <Link href="/" className="flex items-center space-x-2">
          <Image
            src="/assets/images/RSF-logo.png"
            alt="Radiant Smile Foundation"
            width={160}
            height={160}
            className="object-contain"
            priority
          />
        </Link>
        <div className="hidden lg:flex space-x-4">
          {menuItems.map((item) => (
            <Link key={item.href} href={item.href} className="text-foreground hover:text-primary transition-colors">
              {item.label}
            </Link>
          ))}
        </div>
        <div className="flex items-center space-x-4">
          {/* <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="p-2 rounded-full hover:bg-accent transition-colors"
          >
            {theme === "dark" ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </button> */}
          <button className="lg:hidden" onClick={toggleMenu}>
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden absolute top-[88px] left-0 right-0 bg-background border-b shadow-lg"
          >
            {menuItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block py-2 px-4 text-foreground hover:bg-accent transition-colors"
                onClick={toggleMenu}
              >
                {item.label}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}

export default Navigation

