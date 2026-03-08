'use client'

import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { useState, useEffect } from 'react'

export default function Template({ children }: { children: React.ReactNode }) {
  const [isPageLoading, setIsPageLoading] = useState(true)

  useEffect(() => {
    // Hide loader after a brief animation, giving time for the page to effectively render
    const timer = setTimeout(() => {
      setIsPageLoading(false)
    }, 400)

    return () => clearTimeout(timer)
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

      {children}
    </>
  )
}
