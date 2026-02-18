import { useScrollAnimation } from '../hooks/useScrollAnimation'

export default function Gallery() {
  const images = [
    '/1.jpeg',
    '/2.jpeg'
  ]

  return (
    <section id="galeri" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">Galeri Perjalanan</h2>
          <p className="text-xl text-gray-600">Momen indah dari perjalanan bersama RN TRAVEL</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {images.map((image, index) => {
            const [ref, isVisible] = useScrollAnimation()
            return (
              <div 
                key={index} 
                ref={ref}
                className={`relative overflow-hidden rounded-xl shadow-lg group transition-all duration-700 transform ${
                  isVisible 
                    ? 'translate-y-0 opacity-100 scale-100' 
                    : 'translate-y-20 opacity-0 scale-95'
                }`}
                style={{ transitionDelay: `${index * 80}ms` }}
              >
              <img 
                src={image} 
                alt={`Gallery ${index + 1}`}
                className="w-full h-64 object-cover transform group-hover:scale-110 transition duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition"></div>
            </div>
          )})}
        </div>
      </div>
    </section>
  )
}
