import { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { companyInfo } from '../data/company-info';
import { servicesData } from '../data/services-info';

// Dynamic imports for performance
const Head = dynamic(() => import('next/head'), { ssr: true });

// Optimized animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);
  const [imagesLoaded, setImagesLoaded] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    // Preload critical images
    if (typeof window !== 'undefined') {
      const imageUrls = ['/logo.png', ...servicesData.excelGlass.services.slice(0, 3).map(s => s.image)];
      Promise.all(imageUrls.map(url => {
        return new Promise((resolve) => {
          const img = new window.Image();
          img.src = url;
          img.onload = resolve;
        });
      })).then(() => setImagesLoaded(true));
    }
  }, []);

  return (
    <>
      <Head>
        <title>{companyInfo.name} - Premium Glass Solutions</title>
        <meta name="description" content={companyInfo.description} />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
      </Head>

      <motion.div
        initial="hidden"
        animate={isVisible ? "visible" : "hidden"}
        className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300"
      >
        {/* Hero Section - Redesigned */}
        <div className="relative overflow-hidden bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 dark:from-gray-900 dark:via-blue-900 dark:to-gray-900">
          {/* Background Pattern */}
          <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
          
          {/* Animated Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/30 to-transparent animate-gradient"></div>

          {/* Glass Effect Circles */}
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-blue-400/20 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-blue-300/20 rounded-full blur-3xl"></div>

          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              {/* Text Content */}
              <div className="text-center lg:text-left">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="space-y-4"
                >
                  <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
                    Transform Your Space With 
                    <span className="block mt-1 bg-clip-text text-transparent bg-gradient-to-r from-blue-200 to-blue-400">
                      Premium Glass Solutions
                    </span>
                  </h1>
                  <p className="text-base sm:text-lg text-blue-100/90 max-w-2xl mx-auto lg:mx-0">
                    Elevate your environment with our expert glass etching and installation services. 
                    Crafting excellence since 1994.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
                    <Link
                      href="/portfolio"
                      className="inline-flex items-center justify-center px-6 py-2 text-base font-medium rounded-lg text-white bg-blue-600 hover:bg-blue-500 transition-all duration-200 shadow-lg hover:shadow-blue-500/25"
                    >
                      View Our Work
                    </Link>
                    <Link
                      href="/contact"
                      className="inline-flex items-center justify-center px-6 py-2 text-base font-medium rounded-lg text-blue-100 bg-blue-900/50 hover:bg-blue-800/50 transition-all duration-200 shadow-lg hover:shadow-blue-900/25"
                    >
                      Get a Quote
                    </Link>
                  </div>
                </motion.div>
              </div>

              {/* Product Images Grid */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="grid grid-cols-1 gap-4"
              >
                {/* First Row */}
                <div className="relative w-full h-[250px] rounded-xl overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-300">
                  <Image
                    src="/herosection.jpg"
                    alt="Professional Glass Installation and Design"
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover"
                    priority
                    quality={85}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent">
                    <div className="absolute bottom-4 left-4 text-white">
                      <h3 className="text-lg font-semibold">Professional Glass Solutions</h3>
                      <p className="text-sm text-gray-200">Custom glass installations and expert craftsmanship</p>
                    </div>
                  </div>
                </div>

                {/* Second Row */}
                <div className="relative w-full h-[250px] rounded-xl overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-300">
                  <Image
                    src="/frontcompany.jpg"
                    alt="Artistic Glass"
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover"
                    quality={85}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent">
                    <div className="absolute bottom-4 left-4 text-white">
                      <h3 className="text-lg font-semibold">Artistic Glass</h3>
                      <p className="text-sm text-gray-200">Custom Designs</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Stats Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="mt-8 grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-8 bg-white/5 backdrop-blur-sm rounded-xl p-6"
            >
              {[
                { number: "29+", label: "Years Experience" },
                { number: "1000+", label: "Projects Completed" },
                { number: "100%", label: "Client Satisfaction" },
                { number: "24/7", label: "Support" }
              ].map((stat, index) => (
                <div key={index} className="text-center p-4 rounded-lg hover:bg-white/10 transition-colors duration-300">
                  <div className="text-2xl sm:text-3xl font-bold text-white mb-1">{stat.number}</div>
                  <div className="text-sm sm:text-base text-blue-200/90">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Services Section - Mobile Optimized */}
        <section className="bg-white dark:bg-gray-900 py-12 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-8 sm:mb-12">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4">Our Services</h2>
              <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300">
                Comprehensive glass solutions for all your needs
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
              {[...servicesData.excelGlass.services, ...servicesData.dorcenGlass.services]
                .slice(0, 6)
                .map((service, index) => (
                  <motion.div
                    key={service.id}
                    variants={fadeInUp}
                    custom={index}
                    className="bg-gray-50 dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden"
                  >
                    <div className="relative h-40 sm:h-48 w-full">
                      <Image
                        src={service.image}
                        alt={service.name}
                        fill
                        sizes="(max-width: 768px) 100vw, 50vw"
                        priority={index < 3}
                        className="object-cover transition-transform duration-300 group-hover:scale-110"
                      />
                    </div>
                    <div className="p-4 sm:p-6">
                      <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white mb-2 sm:mb-3">{service.name}</h3>
                      <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 mb-4">{service.description}</p>
                      <Link
                        href="/services"
                        className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 text-sm sm:text-base"
                      >
                        Learn more
                      </Link>
                    </div>
                  </motion.div>
                ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="bg-gray-50 dark:bg-gray-900 py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Why Choose Us</h2>
              <p className="text-lg text-gray-600 dark:text-gray-300">
                Experience excellence in glass solutions
              </p>
            </div>
            <div className="mt-20 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
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
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6"
                >
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white mb-4">
                    <div className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">{item.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-800 dark:from-blue-800 dark:to-blue-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-6">Ready to Transform Your Space?</h2>
            <p className="text-xl text-gray-100 mb-8">
              Contact us today for a free consultation and quote
            </p>
            <Link
              href="/contact"
              className="inline-block px-8 py-3 bg-white dark:bg-gray-800 text-blue-600 dark:text-blue-400 
                font-semibold rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 
                transition-colors duration-300"
            >
              Get Started
            </Link>
          </div>
        </section>

        {/* Latest Projects Preview */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Latest Projects</h2>
              <p className="text-lg text-gray-600 dark:text-gray-300">
                Explore our recent work and get inspired for your next project
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                "/products1.jpg",
                "/products2.jpg",
                "/products3.jpg"
              ].map((imgPath, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  className="group relative overflow-hidden rounded-lg shadow-lg"
                >
                  <Image
                    src={imgPath}
                    alt={`Featured Glass Project ${index + 1}`}
                    layout="fill"
                    objectFit="cover"
                    className="transition-transform duration-300 group-hover:scale-110"
                  />
                </motion.div>
              ))}
            </div>
            <div className="text-center mt-12">
              <Link
                href="/portfolio"
                className="inline-block bg-gray-900 dark:bg-gray-800 text-white px-8 py-4 rounded-lg font-semibold 
                  hover:bg-gray-800 dark:hover:bg-gray-700 transition-colors duration-300"
              >
                View All Projects
              </Link>
            </div>
          </div>
        </section>
      </motion.div>

    </>
  );
}
