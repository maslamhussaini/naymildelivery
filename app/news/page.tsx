'use client'

import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Truck, Calendar, User, ArrowRight } from 'lucide-react'
import Link from 'next/link'

export default function NewsPage() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const news = [
    {
      id: 1,
      title: 'We Have Received An Award For The Quality Of Our Work',
      excerpt: 'Donec adipiscing tristique risus nec feugiat in fermentum. Sapien eget mi proin sed libero. Et magnis dis parturient montes nascetur.',
      date: '01.Jan. 2024',
      author: 'Naymil Team',
      category: 'awards',
      image: 'bg-gradient-to-br from-primary/20 to-primary/5'
    },
    {
      id: 2,
      title: 'With Naymil You Can Order Delivery For The Whole Day',
      excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      date: '15.Dec. 2024',
      author: 'Naymil Team',
      category: 'services',
      image: 'bg-gradient-to-br from-secondary/20 to-secondary/5'
    },
    {
      id: 3,
      title: '127+ Professional Couriers On Our Team!',
      excerpt: 'Urna condimentum mattis pellentesque id nibh tortor id aliquet. Tellus at urna condimentum mattis pellentesque id nibh tortor.',
      date: '10.Dec. 2024',
      author: 'Naymil Team',
      category: 'team',
      image: 'bg-gradient-to-br from-primary/10 to-secondary/10'
    },
    {
      id: 4,
      title: 'Why You Should Optimize Your Menu For Delivery',
      excerpt: 'Enim lobortis scelerisque fermentum dui. Sit amet cursus sit amet dictum sit amet justo donec enim diam vulputate.',
      date: '05.Dec. 2024',
      author: 'Naymil Team',
      category: 'tips',
      image: 'bg-gradient-to-br from-secondary/20 to-primary/5'
    }
  ]

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
              <Link href="/news" className="text-foreground hover:text-primary transition">News</Link>
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
            Latest News & Events
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
            Stay updated with the latest news from Naymil Delivery Services
          </p>
        </div>
      </section>

      {/* News Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {news.map((article, idx) => (
              <Card
                key={article.id}
                className="overflow-hidden hover:shadow-lg transition-all duration-300 hover:border-primary group cursor-pointer"
                style={{
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
                  transitionDelay: `${200 + idx * 100}ms`,
                  transition: 'all 700ms ease-out'
                }}
              >
                <div className={`h-48 ${article.image} group-hover:opacity-90 transition-opacity duration-300`}></div>
                <div className="p-8">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-sm font-semibold rounded-full capitalize">
                      {article.category}
                    </span>
                    <span className="text-sm text-muted-foreground flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {article.date}
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">{article.title}</h3>
                  <p className="text-muted-foreground mb-6">{article.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground flex items-center gap-1">
                      <User className="w-4 h-4" />
                      {article.author}
                    </span>
                    <Button variant="ghost" size="sm" className="text-primary hover:text-primary hover:bg-primary/10">
                      Read More <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-primary text-white">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Subscribe to Our Newsletter</h2>
          <p className="text-white/90 mb-8">Get the menu of your favorite restaurants and delivery updates every day</p>
          <div className="flex gap-4">
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="flex-1 px-6 py-3 rounded-lg text-foreground"
            />
            <Button className="bg-white text-primary hover:bg-white/90">Subscribe</Button>
          </div>
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
