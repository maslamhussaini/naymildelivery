'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Our Services', path: '/services' },
    { name: 'About Us', path: '/about' },
    { name: 'Industries', path: '/industries' },
  ]

  return (
    <>
      <header
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
          isScrolled || pathname !== '/' ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'
        }`}
      >
        <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
          <Link href="/" className="flex items-center gap-2">
            <div className="relative h-12 w-48 md:h-16 md:w-56 flex items-center">
              <Image 
                src="/logo.jpg" 
                alt="Naymil Delivery Services Co. Logo" 
                fill
                className="object-contain object-left"
                priority
              />
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8 font-medium">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.path}
                className={`transition-colors relative after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-transparent hover:after:bg-[#f29f05] after:transition-all pb-2 ${
                  pathname === link.path ? 'text-[#f29f05] after:bg-[#f29f05]' : 'hover:text-[#f29f05]'
                }`}
              >
                {link.name}
              </Link>
            ))}

            <Link href="/contact" className="px-6 py-2.5 btn-quickeat rounded-full transition-all shadow-lg shadow-[#f29f05]/30 hover:-translate-y-0.5">
              Contact Us
            </Link>
          </nav>

          {/* Mobile Menu Toggle */}
          <button className="md:hidden text-[#363636]" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </header>

      {/* Mobile Nav */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-white pt-24 px-6 md:hidden flex flex-col gap-6 font-medium text-lg"
          >
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.path}
                onClick={() => setMobileMenuOpen(false)}
                className={`border-b pb-4 ${
                  pathname === link.path ? 'text-[#f29f05]' : ''
                }`}
              >
                {link.name}
              </Link>
            ))}

            <Link href="/contact" onClick={() => setMobileMenuOpen(false)} className="btn-quickeat py-3 rounded-full w-full text-center">
              Contact Us
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
