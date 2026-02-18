import { useState } from 'react'
import { smoothScrollTo } from '../utils/smoothScroll'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

export default function Services() {
  const [selectedImage, setSelectedImage] = useState(null)

  const scrollToSection = (id) => {
    smoothScrollTo(id, 100, 800)
  }

  const services = [
    {
      title: 'Innova Reborn',
      price: 'Rp 950.000',
      image: '/innova.jpeg',
      description: 'Mobil keluarga yang nyaman dan luas, cocok untuk perjalanan jauh bersama keluarga.',
      features: ['Driver']
    },
    {
      title: 'Innova Zenix',
      price: 'Rp 1,300,000',
      image: '/innova-zenix.jpeg',
      description: 'Nikmati keindahan pantai dan pulau-pulau eksotis di Lombok.',
       features: ['Driver']
    }
  ]

  return (
    <section id="layanan" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">Pelayanan Kami</h2>
          <p className="text-xl text-gray-600">Pilih destinasi impian Anda dengan harga terbaik</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => {
            const [ref, isVisible] = useScrollAnimation()
            return (
              <div 
                key={index} 
                ref={ref}
                className={`bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-700 transform ${
                  isVisible 
                    ? 'translate-y-0 opacity-100' 
                    : 'translate-y-20 opacity-0'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
              <div 
                className="h-48 overflow-hidden cursor-pointer"
                onClick={() => setSelectedImage(service.image)}
              >
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-full object-cover hover:scale-110 transition duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-primary mb-2">{service.title}</h3>
                <p className="text-gray-600 text-sm mb-3">{service.description}</p>
                <p className="text-3xl font-bold text-secondary mb-4">{service.price}</p>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-600">
                      <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
                <button 
                  onClick={() => scrollToSection('booking')}
                  className="w-full bg-secondary text-white py-3 rounded-lg font-bold hover:bg-orange-600 transition"
                >
                  Pesan Sekarang
                </button>
              </div>
            </div>
          )
        })}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button 
            className="absolute top-4 right-4 text-white text-4xl hover:text-gray-300 transition"
            onClick={() => setSelectedImage(null)}
          >
            ×
          </button>
          <img 
            src={selectedImage} 
            alt="Full size"
            className="max-w-full max-h-full object-contain"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  )
}
