import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import Header from './components/Header'
import Footer from './components/Footer'
import './globals.css'

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: '--font-poppins'
});

export const metadata: Metadata = {
  title: 'Naymil Delivery Services - Professional Delivery Solutions',
  description: 'Fast, reliable, and professional delivery solutions. We provide bike riders, cycle riders, and van drivers with vehicles for your business needs.',
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} font-sans antialiased`}>
        <Header />
        {children}
        <Footer />
        <a 
          href="https://wa.me/971543127890" 
          target="_blank" 
          rel="noopener noreferrer"
          className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-xl shadow-[#25D366]/40 hover:scale-110 hover:-translate-y-1 transition-all flex items-center justify-center cursor-pointer"
        >
          <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
            <path d="M11.996 0C5.371 0 0 5.372 0 11.996c0 2.115.548 4.17 1.593 5.987L.049 24l6.155-1.614a11.95 11.95 0 005.792 1.496h.005c6.623 0 11.994-5.37 11.994-11.996 0-3.21-1.25-6.228-3.52-8.498A11.936 11.936 0 0011.996 0zm0 21.859c-1.815 0-3.593-.487-5.15-1.411l-.369-.219-3.83 1.004 1.026-3.733-.24-.383a9.982 9.982 0 01-1.547-5.378c0-5.508 4.484-9.992 9.998-9.998 2.67 0 5.178 1.04 7.066 2.929 1.888 1.888 2.928 4.397 2.928 7.068 0 5.51-4.486 9.998-10.002 9.998H11.996z" />
            <path d="M17.476 14.394c-.302-.151-1.785-.881-2.062-.982-.277-.101-.478-.151-.68.151-.201.302-.781.982-.958 1.183-.176.202-.353.227-.655.076-1.705-.853-2.91-1.503-4.004-3.414-.151-.277-.016-.427.135-.578.136-.136.302-.352.453-.529.151-.176.201-.302.302-.503.1-.202.05-.378-.025-.529-.076-.151-.68-1.637-.932-2.241-.247-.59-.497-.509-.68-.518-.176-.01-.378-.01-.579-.01-.201 0-.529.076-.806.378-.731.805-2.8 2.502-2.8 5.679 0 3.177 2.87 6.255 3.273 6.784.403.529 4.621 7.056 11.192 9.897 1.56.674 2.778 1.077 3.731 1.378 1.564.496 2.99.426 4.12.258 1.261-.186 3.881-1.587 4.426-3.124.545-1.537.545-2.857.382-3.124-.163-.268-.568-.42-1.07-.671z" />
          </svg>
        </a>
        <Analytics />
      </body>
    </html>
  )
}
