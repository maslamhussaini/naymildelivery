'use client'

import { motion, Variants } from 'framer-motion'

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

export default function AboutPage() {
  return (
    <div className="min-h-screen pt-24 pb-20 bg-white selection:bg-[#f29f05]/20">
        {/* About Section */}
        <section id="about" className="py-12 bg-white relative">
          <div className="container mx-auto px-6 md:px-12">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="relative h-[500px] rounded-3xl overflow-hidden bg-gray-900 hidden lg:block"
              >
                {/* Image Placeholder with overlay */}
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-60 mix-blend-luminosity"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40 to-transparent"></div>
                
                <div className="absolute bottom-0 left-0 w-full p-10">
                  <div className="inline-block bg-[#f29f05] text-white px-6 py-2 rounded-full font-bold text-sm uppercase tracking-wide mb-4">
                    Who We Are
                  </div>
                  <h3 className="text-3xl font-bold text-white mb-2">Delivering Excellence</h3>
                  <p className="text-gray-300">Fast, reliable, and cost-effective solutions for all sizes.</p>
                </div>
              </motion.div>

              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={staggerContainer}
              >
                <motion.h2 variants={fadeUpVariant} className="text-[#f29f05] font-bold uppercase tracking-wider text-sm mb-2">About Us</motion.h2>
                <motion.h3 variants={fadeUpVariant} className="text-3xl md:text-5xl font-bold text-[#363636] mb-6">Your Trusted Delivery Partner</motion.h3>
                
                <motion.p variants={fadeUpVariant} className="text-[#787878] text-lg mb-4 leading-relaxed">
                  Naymil Delivery Services Co. is a professional delivery and logistics support company dedicated to helping businesses manage their delivery operations efficiently.
                </motion.p>
                <motion.p variants={fadeUpVariant} className="text-[#787878] text-lg mb-4 leading-relaxed">
                  We specialize in providing trained riders and drivers along with their vehicles, ensuring that businesses can focus on their customers while we handle transportation and delivery.
                </motion.p>
                <motion.p variants={fadeUpVariant} className="text-[#787878] text-lg mb-8 leading-relaxed">
                  Our mission is to provide fast, reliable, and cost-effective delivery solutions to businesses of all sizes.
                </motion.p>

                <div className="space-y-8">
                  <motion.div variants={fadeUpVariant} className="flex gap-4">
                    <div className="w-16 h-16 rounded-2xl bg-[#f29f05]/10 flex items-center justify-center shrink-0">
                      <span className="text-[#f29f05] font-bold text-xl">🎯</span>
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-[#363636] mb-2">Our Mission</h4>
                      <p className="text-[#787878]">To deliver reliable logistics support by providing professional riders and drivers that help businesses grow and succeed.</p>
                    </div>
                  </motion.div>
                  
                  <motion.div variants={fadeUpVariant} className="flex gap-4">
                    <div className="w-16 h-16 rounded-2xl bg-[#f29f05]/10 flex items-center justify-center shrink-0">
                      <span className="text-[#f29f05] font-bold text-xl">👁️</span>
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-[#363636] mb-2">Our Vision</h4>
                      <p className="text-[#787878]">To become a trusted delivery partner for businesses by offering high-quality delivery services and dependable staff.</p>
                    </div>
                  </motion.div>
                </div>

              </motion.div>
            </div>
          </div>
        </section>
    </div>
  )
}
