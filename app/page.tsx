'use client'

import { motion, Variants } from 'framer-motion'
import { Bike, MapPin, CheckCircle2, ArrowRight, Package } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

const fadeUpVariant: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
}

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
}

export default function Home() {
  return (
    <div className="min-h-screen bg-[#FFF9F5] text-[#363636] font-sans selection:bg-[#f29f05]/20">
      <main>
        {/* Hero Section */}
        <section id="home" className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
          {/* Background decorations */}
          <div className="absolute top-0 right-0 -translate-y-12 translate-x-1/3 w-[600px] h-[600px] bg-[#f29f05]/10 rounded-full blur-3xl opacity-50 -z-10"></div>
          <div className="absolute bottom-0 left-0 translate-y-1/3 -translate-x-1/3 w-[400px] h-[400px] bg-[#f29f05]/20 rounded-full blur-3xl opacity-40 -z-10"></div>

          <div className="container mx-auto px-6 md:px-12 grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
              className="max-w-2xl"
            >
              <motion.div variants={fadeUpVariant} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#f29f05]/10 text-[#f29f05] font-medium text-sm mb-6 border border-[#f29f05]/30">
                <span className="w-2 h-2 rounded-full bg-[#f29f05] animate-pulse"></span>
                Your Package, Our Priority
              </motion.div>
              
              <motion.h1 variants={fadeUpVariant} className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-6 text-[#363636]">
                Reliable Delivery <br />
                <span className="text-[#f29f05]">Riders & Drivers</span> <br />
                for Your Business
              </motion.h1>
              
              <motion.p variants={fadeUpVariant} className="text-lg text-[#787878] mb-8 leading-relaxed">
                Welcome to <strong>Naymil Delivery Services Co.</strong>, your trusted partner for professional delivery and logistics support. We provide bike riders with bikes, cycle riders with bicycles, and van drivers with vans to help businesses deliver goods quickly and efficiently.
              </motion.p>
              
              <motion.div variants={fadeUpVariant} className="flex flex-wrap gap-4">
                <Link href="/contact" className="px-8 py-4 btn-quickeat rounded-full text-lg transition-all shadow-xl shadow-[#f29f05]/20 hover:-translate-y-1 flex items-center gap-2">
                  Partner With Us <ArrowRight size={20} />
                </Link>
                <Link href="/services" className="px-8 py-4 bg-white text-[#363636] rounded-full font-semibold hover:bg-gray-50 transition-all shadow-md shadow-gray-200 border border-gray-100 flex items-center gap-2">
                  Our Services
                </Link>
              </motion.div>

              <motion.div variants={fadeUpVariant} className="mt-12 flex items-center gap-4 text-sm font-medium text-gray-500">
                <div className="flex -space-x-3">
                  {[1,2,3,4].map((i) => (
                    <div key={i} className={`w-10 h-10 rounded-full border-2 border-white bg-gray-200 flex items-center justify-center overflow-hidden z-[${4-i}]`}>
                      <Image src={`https://i.pravatar.cc/100?img=${i+10}`} alt="User" width={40} height={40} />
                    </div>
                  ))}
                </div>
                <div>
                  <div className="text-[#f29f05] font-bold text-lg">500+</div>
                  <div>Deliveries Daily</div>
                </div>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9, rotate: -2 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
              className="relative hidden lg:block h-[600px]"
            >
              {/* Abstract Delivery Illustration Placeholder, could be replaced with real image */}
              <div className="absolute inset-0 bg-gradient-to-tr from-orange-400 to-[#f29f05] rounded-3xl shadow-2xl rotate-3 transform-gpu overflow-hidden">
                <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full p-12">
                   <div className="bg-white/10 backdrop-blur-md border border-white/20 p-8 rounded-2xl shadow-xl flex flex-col gap-6 text-white transform -rotate-3 transition-transform hover:rotate-0 duration-500">
                      <div className="flex items-center gap-4 border-b border-white/20 pb-4">
                        <div className="p-3 bg-white/20 rounded-full"><Bike size={32} /></div>
                        <div>
                          <div className="font-bold text-xl">Fast Delivery</div>
                          <div className="text-white/80 text-sm">On-time, every time</div>
                        </div>
                      </div>
                      <div className="flex items-center gap-4 py-2">
                        <div className="p-3 bg-white/20 rounded-full"><MapPin size={32} /></div>
                        <div>
                          <div className="font-bold text-xl">Live Tracking</div>
                          <div className="text-white/80 text-sm">Monitor your shipments</div>
                        </div>
                      </div>
                   </div>
                </div>
              </div>

              {/* Floating badges */}
              <motion.div 
                animate={{ y: [0, -10, 0] }}
                transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                className="absolute -left-8 top-1/4 bg-white p-4 rounded-xl shadow-xl flex items-center gap-3"
              >
                <div className="w-12 h-12 bg-green-100 text-green-500 flex items-center justify-center rounded-full">
                  <CheckCircle2 size={24} />
                </div>
                <div>
                  <div className="font-bold text-[#363636]">100% Secure</div>
                  <div className="text-xs text-gray-500">Safe Handling</div>
                </div>
              </motion.div>

              <motion.div 
                animate={{ y: [0, 15, 0] }}
                transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1 }}
                className="absolute -right-8 bottom-1/4 bg-white p-4 rounded-xl shadow-xl flex items-center gap-3"
              >
                <div className="w-12 h-12 bg-[#f29f05]/10 text-[#f29f05] flex items-center justify-center rounded-full">
                  <Package size={24} />
                </div>
                <div>
                  <div className="font-bold text-[#363636]">Bulk Orders</div>
                  <div className="text-xs text-gray-500">Handled with care</div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>
      </main>
    </div>
  )
}
