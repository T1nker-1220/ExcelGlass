import { useState } from 'react';
import Head from 'next/head';
import { motion, AnimatePresence } from 'framer-motion';
import PortfolioCard from '../components/portfolio/PortfolioCard';
import PortfolioFilter from '../components/portfolio/PortfolioFilter';
import { portfolioItems, categories } from '../data/portfolio-items';
import { companyInfo } from '../data/company-info';

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredItems = portfolioItems.filter(
    item => activeCategory === 'All' || item.category === activeCategory
  );

  return (
    <>
      <Head>
        <title>Portfolio - {companyInfo.name}</title>
        <meta name="description" content="View our impressive portfolio of glass etching works, including corporate awards, home decor, and commercial projects." />
      </Head>

      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <div className="relative bg-primary text-white py-24">
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-primary to-primary/80" />
          </div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Our Portfolio
              </h1>
              <p className="text-xl text-gray-100 max-w-2xl mx-auto">
                Discover our finest glass etching works spanning over {new Date().getFullYear() - 1994} years of excellence in craftsmanship
              </p>
            </motion.div>
          </div>
        </div>

        {/* Portfolio Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          {/* Filter */}
          <PortfolioFilter
            categories={categories}
            activeCategory={activeCategory}
            setActiveCategory={setActiveCategory}
          />

          {/* Portfolio Grid */}
          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            <AnimatePresence mode="wait">
              {filteredItems.map((item) => (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <PortfolioCard {...item} />
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>

        {/* Call to Action */}
        <div className="bg-gray-900 text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-4">
              Ready to Start Your Project?
            </h2>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Let us help you create something extraordinary. Our team of expert craftsmen is ready to bring your vision to life.
            </p>
            <motion.a
              href="/contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block bg-primary text-white px-8 py-3 rounded-full font-medium hover:bg-primary/90 transition-colors"
            >
              Get in Touch
            </motion.a>
          </div>
        </div>
      </div>
    </>
  );
}
