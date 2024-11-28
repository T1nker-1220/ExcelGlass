import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Bars3Icon, XMarkIcon, PhoneIcon } from '@heroicons/react/24/outline';
import { companyInfo } from '../../data/company-info';

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Services', href: '/services' },
  { name: 'Portfolio', href: '/portfolio' },
  { name: 'Contact', href: '/contact' },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      setScrolled(currentScrollPos > 0);
      setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [prevScrollPos]);

  return (
    <motion.header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/95 backdrop-blur-md shadow-md' : 'bg-white'
      }`}
      initial="top"
      animate={visible ? "top" : "hidden"}
      variants={{
        top: { y: 0 },
        hidden: { y: "-100%" }
      }}
      transition={{ duration: 0.3 }}
    >
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" aria-label="Main navigation">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/">
              <span className="flex items-center cursor-pointer">
                <div className="relative w-32 h-12 sm:w-36 sm:h-14">
                  <Image
                    src="/logo.webp"
                    alt="Excel Glass Inc Logo"
                    fill
                    className="object-contain"
                    priority
                    sizes="(max-width: 640px) 128px, 144px"
                  />
                </div>
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-8">
            {navigation.map((item) => (
              <Link key={item.name} href={item.href}>
                <span className="text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors cursor-pointer">
                  {item.name}
                </span>
              </Link>
            ))}
            <Link href="/contact">
              <span className="inline-flex items-center justify-center rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700 transition-colors cursor-pointer">
                Get Quote
              </span>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="flex md:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <span className="sr-only">Toggle menu</span>
              {mobileMenuOpen ? (
                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
              ) : (
                <Bars3Icon className="h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            className="md:hidden"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
          >
            <div className="border-t border-gray-200 bg-white px-4 py-3 shadow-lg">
              <div className="space-y-1">
                {navigation.map((item) => (
                  <Link key={item.name} href={item.href}>
                    <span
                      className="block rounded-lg px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-blue-600 cursor-pointer"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.name}
                    </span>
                  </Link>
                ))}
                <Link href="/contact">
                  <span
                    className="block rounded-lg px-3 py-2 text-base font-medium text-white bg-blue-600 hover:bg-blue-700 cursor-pointer text-center mt-2"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Get Quote
                  </span>
                </Link>
              </div>
              {/* Mobile Contact Info */}
              <div className="mt-4 pt-4 border-t border-gray-200">
                <div className="space-y-2 text-sm text-gray-600">
                  <div className="flex items-center space-x-2">
                    <PhoneIcon className="h-4 w-4" />
                    <span>{companyInfo.contact.telephone[0]}</span>
                  </div>
                  <a 
                    href={`mailto:${companyInfo.contact.email[1]}`}
                    className="block hover:text-blue-600"
                  >
                    {companyInfo.contact.email[1]}
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
