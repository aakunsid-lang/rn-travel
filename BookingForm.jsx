import { useState } from 'react'

export default function BookingForm() {
  const [formData, setFormData] = useState({
    nama: '',
    whatsapp: '',
    tanggal: '',
    paket: '',
    jumlah: '1'
  })

  const paketOptions = [
    'Dalam kota',
    'Luar kota'
  ]

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    
    // Validasi
    if (!formData.nama || !formData.whatsapp || !formData.tanggal || !formData.paket) {
      alert('Mohon lengkapi semua field!')
      return
    }

    // Generate pesan WhatsApp
    const pesan = `Halo RN TRAVEL, saya ingin booking:

*Nama:* ${formData.nama}
*No WhatsApp:* ${formData.whatsapp}
*Tanggal Keberangkatan:* ${formData.tanggal}
*Pelayanan:* ${formData.paket}
*Jumlah Orang:* ${formData.jumlah} orang

Mohon informasi lebih lanjut. Terima kasih!`

    // Encode pesan
    const encodedPesan = encodeURIComponent(pesan)
    
    // Nomor WhatsApp RN TRAVEL (ganti dengan nomor asli)
    const nomorWA = '6285180760668' // Ganti dengan nomor WA Anda
    
    // Redirect ke WhatsApp
    window.open(`https://wa.me/${nomorWA}?text=${encodedPesan}`, '_blank')
    
    // Reset form
    setFormData({
      nama: '',
      whatsapp: '',
      tanggal: '',
      paket: '',
      jumlah: '1'
    })
  }

  return (
    <div className="bg-white rounded-2xl shadow-2xl p-6 md:p-8">
      <h3 className="text-2xl font-bold text-primary mb-6">Form Booking</h3>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-gray-700 font-semibold mb-2">Nama Lengkap *</label>
          <input
            type="text"
            name="nama"
            value={formData.nama}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-white text-gray-900"
            placeholder="Masukkan nama lengkap"
            required
          />
        </div>

        <div>
          <label className="block text-gray-700 font-semibold mb-2">No WhatsApp *</label>
          <input
            type="tel"
            name="whatsapp"
            value={formData.whatsapp}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-white text-gray-900"
            placeholder="08xxxxxxxxxx"
            required
          />
        </div>

        <div>
          <label className="block text-gray-700 font-semibold mb-2">Tanggal Keberangkatan *</label>
          <input
            type="date"
            name="tanggal"
            value={formData.tanggal}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-white text-gray-900"
            style={{ colorScheme: 'light' }}
            required
          />
        </div>

        <div>
          <label className="block text-gray-700 font-semibold mb-2">Pilih Pelayanan *</label>
          <select
            name="paket"
            value={formData.paket}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-white text-gray-900"
            required
          >
            {paketOptions.map((paket, index) => (
              <option key={index} value={paket} className="text-gray-900">{paket}</option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-gray-700 font-semibold mb-2">Jumlah Orang *</label>
          <select
            name="jumlah"
            value={formData.jumlah}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-white text-gray-900"
            required
          >
            {[1, 2, 3, 4, 5, 6, 7].map((num) => (
              <option key={num} value={num} className="text-gray-900">{num} Orang</option>
            ))}
          </select>
        </div>

        <button
          type="submit"
          className="w-full bg-secondary text-white py-4 rounded-lg font-bold text-lg hover:bg-orange-600 transition transform hover:scale-105"
        >
          Kirim ke WhatsApp
        </button>
      </form>
    </div>
  )
}
