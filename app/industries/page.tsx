'use client'

import { motion, Variants } from 'framer-motion'
import { CheckCircle2, Store, ShoppingBag, Pill, Package, Truck } from 'lucide-react'

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

export default function IndustriesPage() {
  return (
    <div className="min-h-screen pt-24 pb-20 bg-[#FFF9F5] selection:bg-[#f29f05]/20">
        {/* Why Choose Us & Industries */}
        <section id="industries" className="py-12 relative overflow-hidden">
          <div className="container mx-auto px-6 md:px-12 grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
            >
              <motion.h2 variants={fadeUpVariant} className="text-3xl md:text-5xl font-bold text-[#363636] mb-6">
                Why Choose <br/><span className="text-[#f29f05]">Naymil</span>?
              </motion.h2>
              <motion.p variants={fadeUpVariant} className="text-[#787878] text-lg mb-8">
                Businesses choose Naymil Delivery Services Co. because we are committed to ensuring that your deliveries are safe, fast, and remarkably efficient.
              </motion.p>

              <motion.div variants={staggerContainer} className="grid sm:grid-cols-2 gap-4">
                {[
                  "Professional and experienced riders & drivers",
                  "Vehicles provided (Bike, Cycle, Van)",
                  "Reliable and on-time delivery service",
                  "Affordable service plans for businesses",
                  "Flexible staffing solutions",
                  "Cost-effective service packages",
                  "Professional customer service"
                ].map((item, index) => (
                  <motion.div key={index} variants={fadeUpVariant} className="flex items-start gap-3 bg-white p-4 rounded-xl shadow-sm border border-[#f29f05]/10">
                    <CheckCircle2 className="text-green-500 shrink-0 mt-0.5" size={20} />
                    <span className="text-sm font-medium text-[#363636]">{item}</span>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="bg-white p-8 md:p-12 rounded-3xl shadow-xl shadow-orange-100 border border-[#f29f05]/10"
            >
              <motion.h3 variants={fadeUpVariant} className="text-2xl font-bold mb-8 text-[#363636] border-b pb-4">Industries</motion.h3>
              <div className="grid grid-cols-2 gap-6">
                {[
                  { icon: <Store size={28} />, name: "Restaurants & Cafes" },
                  { icon: <ShoppingBag size={28} />, name: "Grocery Stores" },
                  { icon: <Pill size={28} />, name: "Pharmacies" },
                  { icon: <Package size={28} />, name: "E-commerce" },
                  { icon: <Truck size={28} />, name: "Courier & Logistics" },
                  { icon: <Store size={28} />, name: "Retail Shops" },
                ].map((industry, i) => (
                  <motion.div 
                    key={i} 
                    variants={fadeUpVariant}
                    className="flex flex-col items-center justify-center text-center gap-3 p-6 rounded-2xl bg-gray-50 hover:bg-[#f29f05]/5 hover:text-[#f29f05] transition-colors group cursor-default"
                  >
                    <div className="text-gray-400 group-hover:text-[#f29f05] transition-colors">
                      {industry.icon}
                    </div>
                    <span className="font-semibold text-sm text-gray-700 group-hover:text-orange-700">{industry.name}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>
    </div>
  )
}
