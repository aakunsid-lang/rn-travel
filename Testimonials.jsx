import { useScrollAnimation } from '../hooks/useScrollAnimation'

export default function Testimonials() {
  const testimonials = [
    {
      name: 'Budi Santoso',
      location: 'Jakarta',
      rating: 5,
      text: 'Pengalaman liburan ke Bali bersama RN TRAVEL sangat menyenangkan! Pelayanan ramah dan profesional.',
      avatar: 'https://ui-avatars.com/api/?name=Budi+Santoso&background=1e3a8a&color=fff'
    },
    {
      name: 'Siti Nurhaliza',
      location: 'Surabaya',
      rating: 5,
      text: 'Paket wisata Lombok sangat worth it! Hotel bagus, tour guide ramah, dan destinasi wisata lengkap.',
      avatar: 'https://ui-avatars.com/api/?name=Siti+Nurhaliza&background=f97316&color=fff'
    },
    {
      name: 'Ahmad Rizki',
      location: 'Bandung',
      rating: 5,
      text: 'Sunrise di Bromo luar biasa! Terima kasih RN TRAVEL sudah mengatur semuanya dengan sempurna.',
      avatar: 'https://ui-avatars.com/api/?name=Ahmad+Rizki&background=1e3a8a&color=fff'
    }
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">Testimoni Pelanggan</h2>
          <p className="text-xl text-gray-600">Apa kata mereka tentang RN TRAVEL</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => {
            const [ref, isVisible] = useScrollAnimation()
            return (
              <div 
                key={index} 
                ref={ref}
                className={`bg-white rounded-2xl shadow-lg p-8 hover:shadow-2xl transition-all duration-700 transform ${
                  isVisible 
                    ? 'translate-y-0 opacity-100' 
                    : 'translate-y-20 opacity-0'
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
              <div className="flex items-center mb-4">
                <img 
                  src={testimonial.avatar} 
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full mr-4"
                />
                <div>
                  <h4 className="font-bold text-primary">{testimonial.name}</h4>
                  <p className="text-gray-600 text-sm">{testimonial.location}</p>
                </div>
              </div>
              
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                  </svg>
                ))}
              </div>
              
              <p className="text-gray-600 italic">"{testimonial.text}"</p>
            </div>
          )})}
        </div>
      </div>
    </section>
  )
}
