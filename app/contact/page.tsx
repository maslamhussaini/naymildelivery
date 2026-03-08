'use client'

import { motion } from 'framer-motion'
import { Phone, Mail, MapPin } from 'lucide-react'
import Image from 'next/image'

export default function ContactPage() {
  return (
    <div className="min-h-screen pt-24 pb-20 bg-[#FFF9F5] selection:bg-[#f29f05]/20">
        {/* Contact Section */}
        <section id="contact" className="py-12 bg-[#FFF9F5]">
          <div className="container mx-auto px-6 md:px-12">
            <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="relative h-[400px] w-full hidden lg:block"
              >
                 <Image src="/photo-6.jpg" alt="Get In Touch - Delivery Rider" fill className="object-cover rounded-3xl shadow-2xl" priority />
              </motion.div>
              <div className="text-left max-w-2xl">
                <h2 className="text-3xl md:text-5xl font-bold text-[#363636] mb-6">Get In Touch</h2>
                <p className="text-[#787878] text-lg mb-8">
                  If you are looking for professional delivery riders or drivers for your business, Naymil Delivery Services Co. is here to help.
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-[#f29f05]/10 flex items-center justify-center rounded-full text-[#f29f05]">
                    <Phone size={28} />
                  </div>
                  <div>
                    <h4 className="font-bold text-xl text-[#363636]">24/7 Support</h4>
                    <p className="text-[#787878]">We are always here to help you</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="lg:col-span-1 space-y-6"
              >
                <div className="bg-white p-8 rounded-3xl shadow-sm border border-[#f29f05]/10 hover:border-[#f29f05]/30 transition-colors">
                  <div className="w-14 h-14 bg-[#f29f05]/10 text-[#f29f05] rounded-full flex items-center justify-center mb-6">
                    <Phone size={24} />
                  </div>
                  <h4 className="text-sm uppercase tracking-wider text-gray-500 font-semibold mb-2">Call Us</h4>
                  <a href="tel:+971543127890" className="text-2xl font-bold text-[#363636] hover:text-[#f29f05] transition-colors">+971 54 312 7890</a>
                </div>

                <div className="bg-white p-8 rounded-3xl shadow-sm border border-[#f29f05]/10 hover:border-[#f29f05]/30 transition-colors">
                  <div className="w-14 h-14 bg-[#f29f05]/10 text-[#f29f05] rounded-full flex items-center justify-center mb-6">
                    <Mail size={24} />
                  </div>
                  <h4 className="text-sm uppercase tracking-wider text-gray-500 font-semibold mb-2">Email Us</h4>
                  <a href="mailto:connect@naymil.com" className="text-xl font-bold text-[#363636] hover:text-[#f29f05] transition-colors">connect@naymil.com</a>
                </div>

                <div className="bg-[#f29f05] p-8 rounded-3xl text-white shadow-xl shadow-[#f29f05]/20">
                  <h4 className="font-bold text-xl mb-4">Business Hours</h4>
                  <div className="flex justify-between items-center py-2 border-b border-white/20">
                    <span>Monday – Saturday</span>
                    <span className="font-bold">9:00 AM – 6:00 PM</span>
                  </div>
                  <div className="flex justify-between items-center py-2">
                    <span>Sunday</span>
                    <span className="font-bold text-orange-200">Closed</span>
                  </div>
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="lg:col-span-2 bg-white rounded-3xl shadow-xl shadow-orange-100/50 p-8 md:p-12"
              >
                <h3 className="text-2xl font-bold mb-8 text-[#363636]">Send Us a Message</h3>
                <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Your Name</label>
                      <input type="text" className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-[#f29f05] focus:bg-white transition-all" placeholder="John Doe" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                      <input type="tel" className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-[#f29f05] focus:bg-white transition-all" placeholder="+971 5x xxx xxxx" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                    <input type="email" className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-[#f29f05] focus:bg-white transition-all" placeholder="you@company.com" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                    <textarea rows={5} className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-[#f29f05] focus:bg-white transition-all resize-none" placeholder="Tell us about your delivery needs..."></textarea>
                  </div>
                  <button className="w-full btn-quickeat text-lg py-4 rounded-xl transition-colors shadow-lg shadow-[#f29f05]/30 flex justify-center items-center gap-2">
                    Submit Request
                  </button>
                </form>
              </motion.div>
            </div>
            
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mt-12 bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex items-center justify-center gap-4 text-center"
            >
              <div className="w-12 h-12 bg-[#f29f05]/10 text-[#f29f05] rounded-full flex shrink-0 items-center justify-center">
                <MapPin size={24} />
              </div>
              <div>
                <h4 className="text-sm font-bold text-[#363636]">Head Office Location</h4>
                <p className="text-[#787878]">Office No - 16F-B-126, Empire Heights A, Business Bay, Dubai</p>
              </div>
            </motion.div>

          </div>
        </section>
    </div>
  )
}
