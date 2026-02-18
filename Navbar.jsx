import { useState } from 'react'
import { smoothScrollTo } from '../utils/smoothScroll'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const scrollToSection = (id) => {
    smoothScrollTo(id, 100, 800)
    setIsOpen(false)
  }

  return (
    <nav className="bg-gradient-to-r from-white via-gray-50 to-gray-100 text-gray-800 shadow-lg backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-24">
          <div className="flex items-center">
            <img 
              src="/logo.png" 
              alt="RN TRAVEL Logo" 
              className="h-20 w-auto"
            />
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <button onClick={() => scrollToSection('beranda')} className="hover:text-secondary transition font-medium">
              Beranda
            </button>
            <button onClick={() => scrollToSection('layanan')} className="hover:text-secondary transition font-medium">
              Layanan
            </button>
            <button onClick={() => scrollToSection('galeri')} className="hover:text-secondary transition font-medium">
              Galeri
            </button>
            <button onClick={() => scrollToSection('kontak')} className="hover:text-secondary transition font-medium">
              Kontak
            </button>
            <button 
              onClick={() => scrollToSection('booking')}
              className="bg-secondary text-white px-6 py-2 rounded-full hover:bg-orange-600 transition font-semibold"
            >
              Pesan Sekarang
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden focus:outline-none"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-4">
            <button onClick={() => scrollToSection('beranda')} className="block py-2 hover:text-secondary transition font-medium">
              Beranda
            </button>
            <button onClick={() => scrollToSection('layanan')} className="block py-2 hover:text-secondary transition font-medium">
              Layanan
            </button>
            <button onClick={() => scrollToSection('galeri')} className="block py-2 hover:text-secondary transition font-medium">
              Galeri
            </button>
            <button onClick={() => scrollToSection('kontak')} className="block py-2 hover:text-secondary transition font-medium">
              Kontak
            </button>
            <button 
              onClick={() => scrollToSection('booking')}
              className="bg-secondary text-white px-6 py-2 rounded-full hover:bg-orange-600 transition font-semibold mt-2"
            >
              Pesan Sekarang
            </button>
          </div>
        )}
      </div>
    </nav>
  )
}
