import { useState } from 'react';
import Head from 'next/head';
import { motion, AnimatePresence } from 'framer-motion';
import PortfolioCard from '../components/portfolio/PortfolioCard';
import PortfolioFilter from '../components/portfolio/PortfolioFilter';
import { portfolioItems, categories } from '../data/portfolio-items';
import { companyInfo } from '../data/company-info';
import Link from 'next/link';

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredItems = portfolioItems.filter(
    item => activeCategory === 'All' || item.category === activeCategory
  );

  return (
    <>
      <Head>
        <title>Our Portfolio - Excel Glass & Dorcen Glass</title>
        <meta name="description" content="View our portfolio of premium glass installations, custom designs, and completed projects." />
      </Head>

      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300"
      >
        {/* Hero Section */}
        <div className="relative bg-gradient-to-r from-blue-600 to-blue-800 dark:from-blue-800 dark:to-blue-900 text-white py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Portfolio</h1>
              <p className="text-xl text-gray-100 max-w-2xl mx-auto">
                Explore our collection of premium glass installations and custom projects
              </p>
            </div>
          </div>
        </div>

        {/* Portfolio Section */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
        </section>

        {/* Call to Action */}
        <div className="bg-gray-900 text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-4">
              Ready to Start Your Project?
            </h2>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Let us help you create something extraordinary. Our team of expert craftsmen is ready to bring your vision to life.
            </p>
            <Link
              href="/contact"
              className="inline-block px-8 py-3 bg-white dark:bg-gray-800 text-blue-600 dark:text-blue-400 
                font-semibold rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 
                transition-colors duration-300"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </motion.main>
    </>
  );
}
