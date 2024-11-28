import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { servicesData } from '../data/services-info';
import Head from 'next/head';

// Animation variants
const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <>
      <Head>
        <title>Excel Glass - Glass ETCHING at its Best!</title>
        <meta name="description" content="Professional glass etching and aluminum services since 1994" />
      </Head>
      
      <div className="overflow-hidden">
        {/* Hero Section */}
        <section className="relative h-screen flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <Image
              src="/Picture of Host Training Establishment.jpg"
              alt="Excel Glass Store Front"
              layout="fill"
              objectFit="cover"
              quality={100}
              priority
            />
            <div className="absolute inset-0 bg-black bg-opacity-50" />
          </div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="relative z-10 text-center text-white px-4"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              Excellence in Glass Craftsmanship
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              Transforming spaces with premium glass solutions since 1994
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/portfolio">
                <span className="btn-primary cursor-pointer">View Our Work</span>
              </Link>
              <Link href="/contact">
                <span className="btn-secondary cursor-pointer">Get a Quote</span>
              </Link>
            </div>
          </motion.div>

          <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
              className="text-white"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 3a1 1 0 01.707.293l3 3a1 1 0 01-1.414 1.414L10 5.414 7.707 7.707a1 1 0 01-1.414-1.414l3-3A1 1 0 0110 3zm-3.707 9.293a1 1 0 011.414 0L10 14.586l2.293-2.293a1 1 0 011.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </motion.div>
          </div>
        </section>

        {/* Featured Services Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.div
              variants={stagger}
              initial="initial"
              animate={isVisible ? "animate" : "initial"}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {[...servicesData.excelGlass.services, ...servicesData.dorcenGlass.services]
                .slice(0, 6)
                .map((service, index) => (
                  <motion.div
                    key={service.id}
                    variants={fadeInUp}
                    className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow"
                  >
                    <div className="h-12 w-12 bg-blue-100 rounded-lg mb-4 flex items-center justify-center">
                      <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{service.name}</h3>
                    <p className="text-gray-600 mb-4">{service.description}</p>
                    <Link href="/services">
                      <span className="text-blue-600 hover:text-blue-800 font-medium cursor-pointer">Learn More →</span>
                    </Link>
                  </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold mb-4">Why Choose Us</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                With decades of experience and commitment to excellence, we deliver the highest quality glass solutions.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  title: "29+ Years Experience",
                  description: "Serving since 1994 with expertise and dedication"
                },
                {
                  title: "Quality Craftsmanship",
                  description: "Premium materials and attention to detail"
                },
                {
                  title: "Custom Solutions",
                  description: "Tailored to your specific requirements"
                },
                {
                  title: "Professional Team",
                  description: "Skilled specialists at your service"
                }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center p-6"
                >
                  <h3 className="text-2xl font-semibold mb-3">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-blue-600 text-white">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Space?</h2>
              <p className="text-xl mb-8 max-w-2xl mx-auto">
                Let's bring your vision to life with our premium glass solutions.
              </p>
              <Link href="/contact">
                <span className="inline-block bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors cursor-pointer">
                  Get Started Today
                </span>
              </Link>
            </motion.div>
          </div>
        </section>

        {/* Latest Projects Preview */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold mb-4">Latest Projects</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Explore our recent work and get inspired for your next project.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                "/products1.jpg",
                "/products2.jpg",
                "/products3.jpg"
              ].map((imgPath, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  className="relative overflow-hidden rounded-lg shadow-lg aspect-w-16 aspect-h-9"
                >
                  <Image
                    src={imgPath}
                    alt={`Featured Glass Project ${index + 1}`}
                    layout="fill"
                    objectFit="cover"
                    className="transition-transform duration-300 hover:scale-110"
                  />
                </motion.div>
              ))}
            </div>

            <div className="text-center mt-12">
              <Link href="/portfolio">
                <span className="inline-block bg-gray-900 text-white px-8 py-4 rounded-lg font-semibold hover:bg-gray-800 transition-colors cursor-pointer">
                  View All Projects
                </span>
              </Link>
            </div>
          </div>
        </section>

        {/* Add custom styles */}
        <style jsx>{`
          .btn-primary {
            @apply inline-block bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors;
          }
          .btn-secondary {
            @apply inline-block bg-transparent text-white px-8 py-4 rounded-lg font-semibold border-2 border-white hover:bg-white hover:text-blue-600 transition-colors;
          }
        `}</style>
      </div>
    </>
  );
}
