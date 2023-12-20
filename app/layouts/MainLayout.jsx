import {Inter} from 'next/font/google'
import '../globals.css'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const inter = Inter({subsets: ['latin']})

export const metadata = {
  title: 'Travel',
  description: 'Aplikasi Travel',
}

export default function MainLayout({children}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
