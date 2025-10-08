'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY
      setIsScrolled(scrollTop > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className={`fixed w-full top-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white shadow-lg' 
        : 'bg-transparent backdrop-blur-sm'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0 flex items-center">
              <img 
                src="/images/logos/opyralogor.png" 
                alt="Opyra Infotech Logo" 
                className="h-20 w-auto transition-all duration-300 "
              />
            </Link>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className={`px-3 py-2 text-sm font-medium transition-colors duration-300 creative-text uppercase ${
              isScrolled 
                ? 'text-brown-700 hover:text-brown-900' 
                : 'text-white hover:text-brown-200 drop-shadow-lg'
            }`}>
              Home
            </Link>
            <Link href="/about" className={`px-3 py-2 text-sm font-medium transition-colors duration-300 creative-text uppercase ${
              isScrolled 
                ? 'text-brown-700 hover:text-brown-900' 
                : 'text-white hover:text-brown-200 drop-shadow-lg'
            }`}>
              About
            </Link>
            <Link href="/services" className={`px-3 py-2 text-sm font-medium transition-colors duration-300 creative-text uppercase ${
              isScrolled 
                ? 'text-brown-700 hover:text-brown-900' 
                : 'text-white hover:text-brown-200 drop-shadow-lg'
            }`}>
              Services
            </Link>
            <Link href="/contact" className={`px-3 py-2 text-sm font-medium transition-colors duration-300 creative-text uppercase ${
              isScrolled 
                ? 'text-brown-700 hover:text-brown-900' 
                : 'text-white hover:text-brown-200 drop-shadow-lg'
            }`}>
              Contact
            </Link>
            <button className={`px-6 py-2 font-bold text-sm uppercase transition-all duration-300 transform hover:scale-105 shadow-xl creative-text ${
              isScrolled 
                ? 'bg-brown-700 text-white hover:bg-brown-800' 
                : 'bg-brown-600/80 text-white hover:bg-brown-700 backdrop-blur-sm'
            }`}>
              Get A Quote
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`inline-flex items-center justify-center p-2 rounded-md transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-inset ${
                isScrolled 
                  ? 'text-brown-700 hover:text-brown-900 hover:bg-brown-100 focus:ring-brown-500' 
                  : 'text-white hover:text-brown-200 hover:bg-white/10 focus:ring-white'
              }`}
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {!isOpen ? (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`md:hidden ${isOpen ? 'block' : 'hidden'}`}>
        <div className={`px-2 pt-2 pb-3 space-y-1 sm:px-3 shadow-lg border-t ${
          isScrolled 
            ? 'bg-white border-brown-100' 
            : 'bg-black/80 backdrop-blur-md border-white/10'
        }`}>
          <Link href="/" className={`block px-3 py-2 rounded-md text-base font-medium transition-colors duration-300 creative-text ${
            isScrolled 
              ? 'text-brown-700 hover:text-brown-900 hover:bg-brown-100' 
              : 'text-white hover:text-brown-200 hover:bg-white/10'
          }`}>
            Home
          </Link>
          <Link href="/about" className={`block px-3 py-2 rounded-md text-base font-medium transition-colors duration-300 creative-text ${
            isScrolled 
              ? 'text-brown-700 hover:text-brown-900 hover:bg-brown-100' 
              : 'text-white hover:text-brown-200 hover:bg-white/10'
          }`}>
            About
          </Link>
          <Link href="/services" className={`block px-3 py-2 rounded-md text-base font-medium transition-colors duration-300 creative-text ${
            isScrolled 
              ? 'text-brown-700 hover:text-brown-900 hover:bg-brown-100' 
              : 'text-white hover:text-brown-200 hover:bg-white/10'
          }`}>
            Services
          </Link>
          <Link href="/contact" className={`block px-3 py-2 rounded-md text-base font-medium transition-colors duration-300 creative-text ${
            isScrolled 
              ? 'text-brown-700 hover:text-brown-900 hover:bg-brown-100' 
              : 'text-white hover:text-brown-200 hover:bg-white/10'
          }`}>
            Contact
          </Link>
        </div>
      </div>
    </nav>
  )
}