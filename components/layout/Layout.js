import { Suspense } from 'react'
import dynamic from 'next/dynamic'
import { motion, LazyMotion, domAnimation } from 'framer-motion'

// Dynamic imports for better code splitting
const Header = dynamic(() => import('./Header'), { ssr: true })
const Footer = dynamic(() => import('./Footer'), { ssr: true })

export default function Layout({ children }) {
  return (
    <LazyMotion features={domAnimation}>
      <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-200 overflow-x-hidden">
        <Header />
        <Suspense fallback={<div className="min-h-screen bg-white dark:bg-gray-900" />}>
          <motion.main
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="w-full min-h-screen pt-16"
          >
            {children}
          </motion.main>
        </Suspense>
        <Footer />
      </div>
    </LazyMotion>
  )
}
