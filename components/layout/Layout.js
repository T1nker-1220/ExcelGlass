import Header from './Header'
import Footer from './Footer'
import { motion } from 'framer-motion'

export default function Layout({ children }) {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <motion.main
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"
      >
        {children}
      </motion.main>
      <Footer />
    </div>
  )
}
