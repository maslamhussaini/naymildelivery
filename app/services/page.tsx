'use client'

import { motion, Variants } from 'framer-motion'
import { Bike, Truck, CheckCircle2 } from 'lucide-react'

const fadeUpVariant: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
}

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 }
  }
}

export default function ServicesPage() {
  return (
    <div className="min-h-screen pt-24 pb-20 bg-white selection:bg-[#f29f05]/20">
        {/* Services Section */}
        <section id="services" className="py-12 bg-white">
          <div className="container mx-auto px-6 md:px-12">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-[#f29f05] font-bold uppercase tracking-wider text-sm mb-2">What We Do</h2>
              <h3 className="text-3xl md:text-5xl font-bold text-[#363636] mb-6">Our Services</h3>
              <p className="text-[#787878] text-lg">
                Our trained riders and drivers ensure safe, timely, and reliable deliveries so your business can focus on growth while we handle the logistics.
              </p>
            </div>

            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
              className="grid md:grid-cols-3 gap-8"
            >
              {[
                {
                  icon: <Bike size={40} strokeWidth={1.5} />,
                  title: "Bike Riders with Motorbike",
                  desc: "Fast and efficient delivery riders equipped with motorbikes. Perfect for food delivery, courier services, and urgent packages across the city.",
                  bestFor: ["Food delivery", "Small parcels", "Urgent deliveries", "Restaurant orders", "Mart Orders"]
                },
                {
                  icon: <span className="text-[40px] leading-none mb-2 block">🚴</span>,
                  title: "Cycle Riders with Bicycle",
                  desc: "Cycle riders provide an eco-friendly delivery option ideal for short-distance deliveries in busy, congested areas.",
                  bestFor: ["Small packages", "Local deliveries", "Sustainable delivery solutions"]
                },
                {
                  icon: <Truck size={40} strokeWidth={1.5} />,
                  title: "Van Drivers with Vans",
                  desc: "We provide professional drivers with vans for transporting large items, bulk deliveries, and comprehensive logistics operations.",
                  bestFor: ["E-commerce deliveries", "Bulk goods transport", "Logistics support", "Warehouse distribution"]
                }
              ].map((service, index) => (
                <motion.div 
                  key={index}
                  variants={fadeUpVariant}
                  className="bg-[#FFF9F5] p-8 rounded-3xl hover:shadow-2xl hover:shadow-[#f29f05]/10 transition-all duration-300 border border-[#f29f05]/10/50 group hover:-translate-y-2 relative overflow-hidden"
                >
                  <div className="absolute top-0 right-0 p-8 opacity-5 text-[#f29f05] font-black text-9xl transform translate-x-12 -translate-y-12 group-hover:scale-110 transition-transform duration-500">
                    {index + 1}
                  </div>
                  <div className="w-20 h-20 bg-white shadow-sm rounded-2xl flex items-center justify-center text-[#f29f05] mb-6 group-hover:bg-[#f29f05] group-hover:text-white transition-colors duration-300">
                    {service.icon}
                  </div>
                  <h4 className="text-2xl font-bold mb-4 text-[#363636]">{service.title}</h4>
                  <p className="text-[#787878] mb-6 leading-relaxed relative z-10">{service.desc}</p>
                  
                  <div className="relative z-10">
                    <h5 className="font-semibold text-[#363636] mb-3 text-sm uppercase tracking-wide">Best For:</h5>
                    <ul className="space-y-2">
                      {service.bestFor.map((item, i) => (
                        <li key={i} className="flex items-start gap-2 text-[#787878]">
                          <CheckCircle2 size={18} className="text-[#f29f05] shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>
    </div>
  )
}
