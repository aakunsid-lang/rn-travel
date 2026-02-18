import BookingForm from './BookingForm'
import { smoothScrollTo } from '../utils/smoothScroll'

export default function Hero() {
  const scrollToSection = (id) => {
    smoothScrollTo(id, 100, 800)
  }

  return (
    <section id="beranda" className="relative text-white py-20 md:py-32 min-h-screen flex items-center">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/hero-bg.jpg')" }}
      >
        {/* Overlay gelap untuk readability */}
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              Travel Terpercaya & Nyaman
            </h1>
            <p className="text-xl md:text-2xl text-gray-200">
              Wujudkan liburan impian Anda bersama RN TRAVEL. Paket wisata terlengkap dengan harga terbaik!
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={() => scrollToSection('layanan')}
                className="bg-white text-gray-800 px-8 py-4 rounded-full text-lg font-bold hover:bg-gray-100 transition transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                Lihat Pelayanan
              </button>
            </div>
          </div>

          {/* Right Content - Booking Form */}
          <div id="booking" className="hidden md:block">
            <BookingForm />
          </div>
        </div>

        {/* Mobile Booking Form */}
        <div className="md:hidden mt-12">
          <BookingForm />
        </div>
      </div>

      {/* Decorative Wave */}
      <div className="absolute bottom-0 left-0 right-0 z-10">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="#f9fafb"/>
        </svg>
      </div>
    </section>
  )
}
