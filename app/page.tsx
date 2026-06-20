"use client"; 
import { motion } from "framer-motion"; 

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      {/* Sticky Navigation Bar */}
      <nav className="bg-white shadow-md sticky top-0 z-50">
        <div className="max-w-6xl mx-auto flex justify-between items-center px-6 py-4">
         <div className="flex items-center gap-3">
  <span className="text-3xl">🌿</span>
  <h1 className="text-2xl font-bold text-green-800">
    GreenLine Landscaping
  </h1>
</div>
          <div className="space-x-6 hidden md:flex">
            <a href="#services" className="hover:text-green-700">Services</a>
            <a href="#about" className="hover:text-green-700">About</a>
            <a href="#gallery" className="hover:text-green-700">Gallery</a>
            <a href="#contact" className="hover:text-green-700">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section
        className="relative text-white py-32 px-6 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1506744038136-46273834b3fb')",
        }}
      >
        <div className="absolute inset-0 bg-black/70"></div>

        <div className="relative z-10 max-w-6xl mx-auto">
          {/* Enhanced Heading Animation */}
          <motion.h1
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5 }}
            className="text-5xl font-bold mb-6"
          >
            We Design &amp; Maintain Your Perfect Outdoor Space.
          </motion.h1>
          
          <p className="text-xl mb-8">
            Professional landscaping and lawn care services for residential properties. Reliable, eco-friendly, and fully insured.
          </p>
          
          {/* Enhanced Button Animation */}
          <motion.button
            whileHover={{
              scale: 1.1,
              rotate: 2,
            }}
            whileTap={{
              scale: 0.9,
            }}
            className="bg-white text-green-800 px-6 py-3 rounded-lg font-semibold"
          >
            Request a Free Estimate
          </motion.button>
        </div>
      </section> 

      {/* Services Section */}
      <section id="services" className="py-20 px-6 bg-gray-100">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">Our Services</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Lawn Maintenance Card */}
            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 cursor-pointer">
              <h3 className="text-xl font-bold mb-3">🌿 Lawn Maintenance</h3>
              <p>Weekly mowing, edging, fertilization and seasonal care.</p>
            </div>
            
            {/* Hardscaping Card */}
            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 cursor-pointer">
              <h3 className="text-xl font-bold mb-3">🧱 Hardscaping</h3>
              <p>Patios, retaining walls and outdoor living spaces.</p>
            </div>
            
            {/* Irrigation Systems Card */}
            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 cursor-pointer">
              <h3 className="text-xl font-bold mb-3">💧 Irrigation Systems</h3>
              <p>Smart watering systems and efficient irrigation design.</p>
            </div>
          </div>
        </div>
      </section> 

      {/* Why Choose Us Section */}
      <section id="about" className="py-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8">Why Choose GreenLine Landscaping?</h2>
          <div className="grid md:grid-cols-3 gap-8 mt-10">
            <div className="p-6 shadow-lg rounded-xl">
              <h3 className="text-xl font-bold mb-3">🌱 Eco-Friendly</h3>
              <p>Sustainable landscaping practices that protect your property and environment.</p>
            </div>
            <div className="p-6 shadow-lg rounded-xl">
              <h3 className="text-xl font-bold mb-3">⭐ 100% Satisfaction</h3>
              <p>We stand behind every project with quality workmanship.</p>
            </div>
            <div className="p-6 shadow-lg rounded-xl">
              <h3 className="text-xl font-bold mb-3">🛠 Licensed Experts</h3>
              <p>Experienced professionals with transparent pricing and reliable service.</p>
            </div>
          </div>
        </div>
      </section> 

      {/* Statistics Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <motion.h3
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="text-5xl font-bold text-green-700"
              >
                500+
              </motion.h3>
              <p className="mt-3">Projects Completed</p>
            </div>
            <div>
              <motion.h3
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="text-5xl font-bold text-green-700"
              >
                10+
              </motion.h3>
              <p className="mt-3">Years Experience</p>
            </div>
            <div>
              <motion.h3
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="text-5xl font-bold text-green-700"
              >
                98%
              </motion.h3>
              <p className="mt-3">Customer Satisfaction</p>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">Recent Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="overflow-hidden rounded-xl shadow-lg group">
              <img
                src="https://images.unsplash.com/photo-1598902108854-10e335adac99"
                alt="Backyard Transformation"
                className="w-full h-64 object-cover group-hover:scale-110 transition duration-500"
              />
              <div className="p-4">
                <h3 className="font-bold text-lg">Backyard Transformation</h3>
              </div>
            </div>

            <div className="overflow-hidden rounded-xl shadow-lg group">
              <img
                src="https://images.unsplash.com/photo-1585320806297-9794b3e4eeae"
                alt="Premium Lawn Design"
                className="w-full h-64 object-cover group-hover:scale-110 transition duration-500"
              />
              <div className="p-4">
                <h3 className="font-bold text-lg">Premium Lawn Design</h3>
              </div>
            </div>

            <div className="overflow-hidden rounded-xl shadow-lg group">
              <img
                src="https://images.unsplash.com/photo-1510798831971-661eb04b3739"
                alt="Outdoor Living Space"
                className="w-full h-64 object-cover group-hover:scale-110 transition duration-500"
              />
              <div className="p-4">
                <h3 className="font-bold text-lg">Outdoor Living Space</h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Before & After Transformations Section */}
      <section className="py-20 px-6 bg-gray-100">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">
            Before &amp; After Transformations
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-4 rounded-xl shadow-lg">
              <h3 className="font-bold text-xl mb-4 text-center">Before</h3>
              <img
                src="https://images.unsplash.com/photo-1500382017468-9049fed747ef"
                alt="Before"
                className="w-full h-72 object-cover rounded-lg"
              />
            </div>
            <div className="bg-white p-4 rounded-xl shadow-lg">
              <h3 className="font-bold text-xl mb-4 text-center">After</h3>
              <img
                src="https://images.unsplash.com/photo-1598902108854-10e335adac99"
                alt="After"
                className="w-full h-72 object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-6 bg-gray-100">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">What Our Customers Say</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <p>GreenLine completely transformed our backyard.</p>
              <h4 className="font-bold mt-4">- Sarah M.</h4>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <p>Their lawn maintenance service is amazing.</p>
              <h4 className="font-bold mt-4">- David R.</h4>
            </div>
          </div>
        </div>
      </section> 

      {/* Strong CTA Banner */}
      <section className="bg-green-800 text-white py-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready To Transform Your Outdoor Space?
          </h2>
          <p className="text-xl mb-8">
            Contact GreenLine Landscaping today for a free estimate.
          </p>
          <button className="bg-white text-green-800 px-8 py-4 rounded-lg font-bold hover:scale-105 transition">
            Get Started Today
          </button>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-10">Request a Free Estimate</h2>
          <form className="grid gap-4">
            <input type="text" placeholder="Name" className="border p-3 rounded-lg" />
            <input type="email" placeholder="Email" className="border p-3 rounded-lg" />
            <input type="tel" placeholder="Phone" className="border p-3 rounded-lg" />
            <input type="text" placeholder="Service Needed" className="border p-3 rounded-lg" />
            <textarea rows={5} placeholder="Message" className="border p-3 rounded-lg"></textarea>
            <button className="bg-green-800 text-white p-4 rounded-lg">Submit Request</button>
          </form>
        </div>
      </section> 

      {/* Interactive Google Map Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-10">
            Our Service Area
          </h2>
          <div className="rounded-xl overflow-hidden shadow-lg">
            <iframe
              src="https://maps.google.com/maps?q=New%20York&t=&z=10&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="400"
              loading="lazy"
              style={{ border: 0 }}
            ></iframe>
          </div>
        </div>
      </section>

      {/* Improved Footer */}
      <footer className="bg-green-900 text-white py-12">
        <div className="max-w-6xl mx-auto text-center">
          <h3 className="text-3xl font-bold">
            GreenLine Landscaping
          </h3>
          <p className="mt-4">
            Professional Landscaping &amp; Lawn Care Services
          </p>
          <p className="mt-2">
            Phone: (555) 123-4567
          </p>
          <p>
            Email: info@greenline.com
          </p>
          <p className="mt-6 text-sm">
            © 2026 GreenLine Landscaping. All Rights Reserved.
          </p>
        </div>
      </footer>

      {/* Floating Call Button */}
      <a
        href="tel:+15551234567"
        className="fixed bottom-6 right-6 bg-green-700 text-white p-4 rounded-full shadow-2xl text-2xl hover:scale-110 transition z-50 flex items-center justify-center w-14 h-14"
      >
        📞
      </a>
    </main>
  );
}