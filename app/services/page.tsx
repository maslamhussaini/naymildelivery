'use client'

import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Truck, Bike, Navigation, Zap, Shield, Clock, CheckCircle2 } from 'lucide-react'
import Link from 'next/link'

export default function ServicesPage() {
  const [isVisible, setIsVisible] = useState(false)
  const [selectedService, setSelectedService] = useState(0)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const services = [
    {
      id: 1,
      icon: Bike,
      title: 'Bike Riders with Motorbike',
      description: 'Fast and efficient delivery riders equipped with motorbikes for quick urban deliveries.',
      features: [
        'Quick delivery times',
        'Suitable for small packages',
        'Traffic navigable',
        'Cost-effective',
        'Professional appearance',
        'GPS tracking'
      ],
      bestFor: 'Food delivery, small parcels, urgent deliveries',
      benefits: [
        'Fastest option for city deliveries',
        'Can navigate through traffic easily',
        'Professional riders in uniform',
        'Real-time tracking available',
        '24/7 availability'
      ]
    },
    {
      id: 2,
      icon: Navigation,
      title: 'Cycle Riders with Bicycle',
      description: 'Eco-friendly delivery option ideal for short-distance deliveries in local areas.',
      features: [
        'Environmentally friendly',
        'Cost-effective solution',
        'Great for local delivery',
        'Health conscious option',
        'Zero emissions',
        'Easy navigation'
      ],
      bestFor: 'Small packages, local deliveries, sustainable solutions',
      benefits: [
        'Most affordable delivery option',
        'Environmentally conscious choice',
        'Perfect for short distances',
        'No fuel costs',
        'Great for last-mile delivery'
      ]
    },
    {
      id: 3,
      icon: Truck,
      title: 'Van Drivers with Vans',
      description: 'Professional drivers with vans for transporting large items and bulk goods.',
      features: [
        'Large cargo capacity',
        'Professional drivers',
        'Suitable for bulk goods',
        'Safe transportation',
        'Long-distance capable',
        'Insured delivery'
      ],
      bestFor: 'E-commerce deliveries, bulk goods transport, logistics support',
      benefits: [
        'Largest carrying capacity',
        'Professional and experienced drivers',
        'Insured for high-value items',
        'Perfect for business logistics',
        'Can handle heavy items'
      ]
    }
  ]

  const currentService = services[selectedService]
  const CurrentIcon = currentService.icon

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-border shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <Link href="/" className="flex items-center gap-2">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                <Truck className="w-6 h-6 text-white" />
              </div>
              <h1 className="text-2xl font-bold text-primary">Naymil</h1>
            </Link>
            <div className="hidden md:flex gap-8 items-center">
              <Link href="/" className="text-foreground hover:text-primary transition">Home</Link>
              <Link href="/services" className="text-foreground hover:text-primary transition">Services</Link>
              <Link href="/#contact" className="text-foreground hover:text-primary transition">Contact</Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/10 to-secondary/50 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 
            className="text-5xl sm:text-6xl font-bold text-foreground mb-6"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
              transition: 'all 700ms ease-out'
            }}
          >
            Our Delivery Services
          </h1>
          <p 
            className="text-xl text-muted-foreground max-w-2xl mx-auto"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
              transitionDelay: '100ms',
              transition: 'all 700ms ease-out'
            }}
          >
            Professional delivery solutions tailored to your business needs
          </p>
        </div>
      </section>

      {/* Services Selection */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {services.map((service, idx) => {
              const Icon = service.icon
              return (
                <button
                  key={service.id}
                  onClick={() => setSelectedService(idx)}
                  className={`p-8 rounded-xl border-2 transition-all duration-300 text-left group cursor-pointer ${
                    selectedService === idx
                      ? 'border-primary bg-primary/5'
                      : 'border-border hover:border-primary bg-white'
                  }`}
                  style={{
                    opacity: isVisible ? 1 : 0,
                    transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
                    transitionDelay: `${200 + idx * 100}ms`,
                    transition: 'all 700ms ease-out'
                  }}
                >
                  <div className={`p-4 rounded-lg mb-4 inline-block ${
                    selectedService === idx
                      ? 'bg-primary text-white'
                      : 'bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white'
                  } transition-all duration-300`}>
                    <Icon className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-2">{service.title}</h3>
                  <p className="text-muted-foreground text-sm">{service.description}</p>
                </button>
              )
            })}
          </div>

          {/* Service Details */}
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateX(0)' : 'translateX(-20px)',
                transition: 'all 500ms ease-out'
              }}
            >
              <div className="h-96 bg-gradient-to-br from-primary/20 to-primary/5 rounded-xl flex items-center justify-center mb-8">
                <CurrentIcon className="w-40 h-40 text-primary/30" />
              </div>
              <Button className="w-full bg-primary hover:bg-primary/90 text-white py-6">
                Get This Service Now
              </Button>
            </div>

            <div
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateX(0)' : 'translateX(20px)',
                transition: 'all 500ms ease-out'
              }}
            >
              <h2 className="text-3xl font-bold text-foreground mb-4">{currentService.title}</h2>
              <p className="text-muted-foreground mb-8 text-lg">{currentService.description}</p>

              <div className="mb-8">
                <h3 className="text-xl font-bold text-foreground mb-4">Key Features</h3>
                <div className="grid grid-cols-2 gap-4">
                  {currentService.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mb-8">
                <h3 className="text-xl font-bold text-foreground mb-4">Best For</h3>
                <p className="text-muted-foreground">{currentService.bestFor}</p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-foreground mb-4">Why Choose This Service</h3>
                <ul className="space-y-3">
                  {currentService.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <span className="w-2 h-2 bg-primary rounded-full flex-shrink-0 mt-2"></span>
                      <span className="text-muted-foreground">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/30">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-foreground text-center mb-16">Why Businesses Choose Naymil</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: Shield, title: 'Professional Staff', desc: 'Trained and experienced riders and drivers' },
              { icon: Clock, title: 'On-Time Delivery', desc: 'Reliable service with 98% on-time rate' },
              { icon: Zap, title: 'Quick Response', desc: '24/7 availability and rapid response time' }
            ].map((item, idx) => {
              const Icon = item.icon
              return (
                <Card 
                  key={idx}
                  className="p-8 text-center border-border hover:border-primary hover:shadow-lg transition-all duration-300"
                  style={{
                    opacity: isVisible ? 1 : 0,
                    transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
                    transitionDelay: `${600 + idx * 100}ms`,
                    transition: 'all 700ms ease-out'
                  }}
                >
                  <div className="inline-flex p-4 bg-primary/10 rounded-lg mb-4">
                    <Icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-2">{item.title}</h3>
                  <p className="text-muted-foreground">{item.desc}</p>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-primary text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Delivery Operations?</h2>
          <p className="text-white/90 mb-8 text-lg">Contact us today to learn how Naymil can support your business growth</p>
          <Button className="bg-white text-primary hover:bg-white/90 px-8 py-6">
            Contact Us Now
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-white/70">&copy; 2024 Naymil Delivery Services Co. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
