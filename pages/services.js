import { motion } from 'framer-motion';
import { useState } from 'react';
import Head from 'next/head';
import { servicesData } from '../data/services-info';
import Link from 'next/link';

const ServiceCard = ({ service }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-all"
    >
      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{service.name}</h3>
      <p className="text-gray-600 dark:text-gray-300">{service.description}</p>
      <span className="inline-block mt-3 px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-400 rounded-full text-sm">
        {service.category}
      </span>
    </motion.div>
  );
};

const CompanyServices = ({ company, data }) => {
  return (
    <div className="mb-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-3">{data.title}</h2>
        <p className="text-lg text-gray-600 dark:text-gray-300">{data.description}</p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {data.services.map((service) => (
          <ServiceCard key={service.id} service={service} />
        ))}
      </div>
    </div>
  );
};

export default function Services() {
  const [activeTab, setActiveTab] = useState('all');
  
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300"
    >
      <Head>
        <title>Our Services - Excel Glass & Dorcen Glass</title>
        <meta name="description" content="Professional glass etching, fabrication, and installation services by Excel Glass and Dorcen Glass & Aluminum Supply." />
      </Head>

      <div className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Our Services
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Discover our comprehensive range of glass and aluminum solutions for both residential and commercial needs.
          </p>
        </motion.div>

        <div className="flex justify-center mb-12">
          <div className="inline-flex rounded-md shadow-sm">
            {['all', 'excel', 'dorcen'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-3 text-sm font-medium ${
                  activeTab === tab
                    ? 'bg-blue-600 text-white'
                    : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700'
                } ${
                  tab === 'all' ? 'rounded-l-lg' : tab === 'dorcen' ? 'rounded-r-lg' : ''
                } border`}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </div>
        </div>

        {(activeTab === 'all' || activeTab === 'excel') && (
          <CompanyServices company="excel" data={servicesData.excelGlass} />
        )}
        
        {(activeTab === 'all' || activeTab === 'dorcen') && (
          <CompanyServices company="dorcen" data={servicesData.dorcenGlass} />
        )}

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-center mt-16 p-8 bg-gray-50 dark:bg-gray-800 rounded-lg"
        >
          <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">
            Need a Custom Solution?
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            Contact us for specialized glass and aluminum solutions tailored to your specific requirements.
          </p>
          <Link
            href="/contact"
            className="inline-block px-8 py-3 bg-white dark:bg-gray-800 text-blue-600 dark:text-blue-400 
              font-semibold rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 
              transition-colors duration-300"
          >
            Get in Touch
          </Link>
        </motion.div>
      </div>
    </motion.main>
  );
}
