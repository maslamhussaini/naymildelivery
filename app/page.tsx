'use client'

import { motion, AnimatePresence, Variants } from 'framer-motion'
import { Bike, Truck, Phone, Mail, MapPin, CheckCircle2, Menu, X, ArrowRight, Store, Pill, ShoppingBag, Package, ChevronDown } from 'lucide-react'
import Image from 'next/image'
import { useState, useEffect } from 'react'

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
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [isPageLoading, setIsPageLoading] = useState(true)

  useEffect(() => {
    // Hide loader after a brief animation (simulating page load)
    const timer = setTimeout(() => {
      setIsPageLoading(false)
    }, 1500)

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
      clearTimeout(timer)
    }
  }, [])

  return (
    <>
      <AnimatePresence>
        {isPageLoading && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.8, ease: "easeInOut" } }}
            className="fixed inset-0 z-[9999] bg-[#FFF9F5] flex items-center justify-center flex-col gap-6"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ 
                scale: [0.8, 1.1, 1], 
                opacity: 1,
                y: [0, -10, 0]
              }}
              transition={{ 
                duration: 2, 
                repeat: Infinity, 
                repeatType: "reverse",
                ease: "easeInOut"
              }}
              className="relative w-40 h-40 drop-shadow-2xl"
            >
              <Image 
                src="/loader-logo.png" 
                alt="Naymil Delivery Services Loader" 
                fill
                className="object-contain"
                priority
              />
            </motion.div>
            <div className="w-48 h-1.5 bg-[#f29f05]/20 rounded-full overflow-hidden mt-4">
               <motion.div 
                 initial={{ width: "0%" }} 
                 animate={{ width: "100%" }} 
                 transition={{ duration: 1.5, ease: "easeInOut" }}
                 className="h-full bg-[#f29f05] rounded-full"
               />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="min-h-screen bg-[#FFF9F5] text-[#363636] font-sans selection:bg-[#f29f05]/20">
        {/* Navbar */}
      <header
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
          isScrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'
        }`}
      >
        <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
          <a href="#" className="flex items-center gap-2">
            <div className="relative h-12 w-48 md:h-16 md:w-56 flex items-center">
              <Image 
                src="/logo.jpg" 
                alt="Naymil Delivery Services Co. Logo" 
                fill
                className="object-contain object-left"
                priority
              />
            </div>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8 font-medium">
            <a href="#home" className="hover:text-[#f29f05] transition-colors relative after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-transparent hover:after:bg-[#f29f05] after:transition-all pb-2">Home</a>
            <a href="#services" className="hover:text-[#f29f05] transition-colors relative after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-transparent hover:after:bg-[#f29f05] after:transition-all pb-2">Our Services</a>
            <a href="#about" className="hover:text-[#f29f05] transition-colors relative after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-transparent hover:after:bg-[#f29f05] after:transition-all pb-2">About Us</a>
            <a href="#industries" className="hover:text-[#f29f05] transition-colors relative after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-transparent hover:after:bg-[#f29f05] after:transition-all pb-2">Industries</a>

            <a href="#contact" className="px-6 py-2.5 btn-quickeat rounded-full transition-all shadow-lg shadow-[#f29f05]/30 hover:-translate-y-0.5">
              Contact Us
            </a>
          </nav>

          {/* Mobile Menu Toggle */}
          <button className="md:hidden text-[#363636]" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </header>

      {/* Mobile Nav */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-white pt-24 px-6 md:hidden flex flex-col gap-6 font-medium text-lg"
          >
            <a href="#home" onClick={() => setMobileMenuOpen(false)} className="border-b pb-4">Home</a>
            <a href="#services" onClick={() => setMobileMenuOpen(false)} className="border-b pb-4">Our Services</a>
            <a href="#about" onClick={() => setMobileMenuOpen(false)} className="border-b pb-4">About Us</a>
            <a href="#industries" onClick={() => setMobileMenuOpen(false)} className="border-b pb-4">Industries</a>

            <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="btn-quickeat py-3 rounded-full w-full">Contact Us</a>
          </motion.div>
        )}
      </AnimatePresence>

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
                <a href="#contact" className="px-8 py-4 btn-quickeat rounded-full text-lg transition-all shadow-xl shadow-[#f29f05]/20 hover:-translate-y-1 flex items-center gap-2">
                  Partner With Us <ArrowRight size={20} />
                </a>
                <a href="#services" className="px-8 py-4 bg-white text-[#363636] rounded-full font-semibold hover:bg-gray-50 transition-all shadow-md shadow-gray-200 border border-gray-100 flex items-center gap-2">
                  Our Services
                </a>
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

        {/* Services Section */}
        <section id="services" className="py-20 bg-white">
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

        {/* Why Choose Us & Industries */}
        <section id="industries" className="py-20 bg-[#FFF9F5] relative overflow-hidden">
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
              <motion.h3 variants={fadeUpVariant} className="text-2xl font-bold mb-8 text-[#363636] border-b pb-4">Industries We Serve</motion.h3>
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

        {/* About Section */}
        <section id="about" className="py-24 bg-white relative">
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

        {/* Contact Section */}
        <section id="contact" className="py-24 bg-[#FFF9F5]">
          <div className="container mx-auto px-6 md:px-12">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-5xl font-bold text-[#363636] mb-6">Get In Touch</h2>
              <p className="text-[#787878] text-lg">
                If you are looking for professional delivery riders or drivers for your business, Naymil Delivery Services Co. is here to help.
              </p>
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
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 border-t border-gray-800">
        <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <div className="relative h-10 w-40 flex items-center">
              <Image 
                src="/logo.jpg" 
                alt="Naymil Delivery Services Co. Logo" 
                fill
                className="object-contain object-left"
              />
            </div>
          </div>
          <p className="text-gray-400 text-sm text-center md:text-left">
            &copy; {new Date().getFullYear()} Naymil Delivery Services Co. All rights reserved.
          </p>
          <div className="flex gap-4">
            <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-[#f29f05] transition-colors">
              <span className="sr-only">Facebook</span>
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" /></svg>
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-[#f29f05] transition-colors">
              <span className="sr-only">Instagram</span>
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" /></svg>
            </a>
          </div>
        </div>
      </footer>
    </div>
    </>
  )
}
