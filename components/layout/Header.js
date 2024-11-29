import { useState, useEffect, useCallback, memo, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { motion, AnimatePresence } from 'framer-motion';
import { Bars3Icon, XMarkIcon, PhoneIcon, SunIcon, MoonIcon } from '@heroicons/react/24/outline';
import { companyInfo } from '../../data/company-info';
import { useTheme } from '../../context/ThemeContext';

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Services', href: '/services' },
  { name: 'Portfolio', href: '/portfolio' },
];

// Memoized navigation link component
const NavLink = memo(({ href, isActive, children, className, onClick }) => (
  <Link
    href={href}
    className={className}
    onClick={(e) => {
      if (onClick) {
        onClick(e);
      }
      // Clear any stuck hover states
      const activeElements = document.querySelectorAll(':hover');
      activeElements.forEach(el => el.blur());
    }}
  >
    {children}
  </Link>
));
NavLink.displayName = 'NavLink';

// Memoized theme toggle button
const ThemeToggle = memo(({ darkMode, onToggle }) => (
  <button
    onClick={onToggle}
    className="relative p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 
      focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-gray-900
      transform transition-all duration-200 ease-out hover:scale-105 active:scale-95"
    aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
  >
    <motion.div
      initial={false}
      animate={{ rotate: darkMode ? 360 : 0 }}
      transition={{ type: "spring", stiffness: 200, damping: 10 }}
      className="relative w-5 h-5"
    >
      {darkMode ? (
        <SunIcon className="w-5 h-5 text-yellow-400" />
      ) : (
        <MoonIcon className="w-5 h-5 text-blue-600" />
      )}
    </motion.div>
  </button>
));
ThemeToggle.displayName = 'ThemeToggle';

// Memoized contact button
const ContactButton = memo(({ className }) => (
  <Link
    href="/contact"
    className={`${className} transform transition-all duration-200 ease-out hover:scale-105 active:scale-95 hover:shadow-lg`}
  >
    <PhoneIcon className="w-4 h-4" />
    <span>Contact Us</span>
  </Link>
));
ContactButton.displayName = 'ContactButton';

export default function Header() {
  const router = useRouter();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [visible, setVisible] = useState(true);
  const lastScrollY = useRef(0);
  const { darkMode, setDarkMode } = useTheme();

  const isActive = useCallback((path) => {
    // Exact match for home page
    if (path === '/' && router.pathname === '/') return true;
    // Partial match for other pages
    if (path !== '/' && router.pathname.startsWith(path)) return true;
    return false;
  }, [router.pathname]);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrolled(currentScrollY > 20);
      setVisible(currentScrollY <= lastScrollY.current || currentScrollY <= 0);
      lastScrollY.current = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = useCallback(() => {
    setMobileMenuOpen(prev => !prev);
  }, []);

  // Handle route change to close mobile menu
  useEffect(() => {
    const handleRouteChange = () => {
      setMobileMenuOpen(false);
    };

    router.events.on('routeChangeComplete', handleRouteChange);
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);

  const headerVariants = {
    top: { y: 0 },
    hidden: { y: "-100%" }
  };

  const mobileMenuVariants = {
    initial: { opacity: 0, height: 0 },
    animate: { opacity: 1, height: "auto" },
    exit: { opacity: 0, height: 0 }
  };

  return (
    <motion.header
      className={`fixed w-full top-0 z-50 transition-colors duration-300 ${
        scrolled 
          ? 'bg-white/90 dark:bg-gray-900/90 backdrop-blur-md shadow-lg dark:shadow-blue-500/5 border-b border-gray-200 dark:border-gray-800' 
          : 'bg-white dark:bg-gray-900'
      }`}
      initial="top"
      animate={visible ? "top" : "hidden"}
      variants={headerVariants}
      transition={{ duration: 0.2 }}
    >
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" aria-label="Main navigation">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center space-x-2">
              <div className="relative w-[150px] h-10">
                <Image
                  src="/logo.png"
                  alt={companyInfo.name}
                  fill
                  sizes="150px"
                  className="object-contain dark:brightness-110 transition-all duration-200 hover:brightness-110"
                  priority
                />
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-1">
            {navigation.map((item) => (
              <NavLink
                key={item.name}
                href={item.href}
                isActive={isActive(item.href)}
                className={`relative px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200
                  ${isActive(item.href)
                    ? 'text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20'
                    : 'text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-50 dark:hover:bg-gray-800'
                  }
                  focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-gray-900
                  active:scale-95`}
              >
                <span className="relative z-10">{item.name}</span>
              </NavLink>
            ))}
          </div>

          {/* Theme Toggle and Mobile Menu Button */}
          <div className="flex items-center space-x-4">
            {/* Contact Button */}
            <ContactButton
              className="hidden md:flex items-center space-x-2 px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg
                hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-gray-900
                transition-all duration-200 active:scale-95"
            />

            {/* Theme Toggle */}
            <ThemeToggle darkMode={darkMode} onToggle={() => setDarkMode(!darkMode)} />

            {/* Mobile menu button */}
            <button
              type="button"
              className="md:hidden inline-flex items-center justify-center p-2 rounded-lg text-gray-700 dark:text-gray-200
                hover:bg-gray-100 dark:hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2
                dark:focus:ring-offset-gray-900 transition-all duration-200 active:scale-95"
              onClick={toggleMobileMenu}
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-menu"
            >
              <span className="sr-only">
                {mobileMenuOpen ? 'Close main menu' : 'Open main menu'}
              </span>
              <motion.div
                animate={{ rotate: mobileMenuOpen ? 90 : 0 }}
                transition={{ type: "spring", stiffness: 260, damping: 20 }}
              >
                {mobileMenuOpen ? (
                  <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                ) : (
                  <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                )}
              </motion.div>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence mode="wait">
        {mobileMenuOpen && (
          <motion.div
            id="mobile-menu"
            variants={mobileMenuVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: 0.2 }}
            className="md:hidden"
          >
            <div className="space-y-1 px-4 pb-3 pt-2">
              {navigation.map((item) => (
                <NavLink
                  key={item.name}
                  href={item.href}
                  isActive={isActive(item.href)}
                  onClick={toggleMobileMenu}
                  className={`block px-3 py-2 text-base font-medium rounded-lg transition-all duration-200
                    ${isActive(item.href)
                      ? 'text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20'
                      : 'text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-800'
                    }
                    focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-gray-900
                    active:scale-95`}
                >
                  {item.name}
                </NavLink>
              ))}
              <ContactButton
                className="flex items-center space-x-2 px-3 py-2 text-base font-medium text-white bg-blue-600 rounded-lg
                  hover:bg-blue-500 transition-all duration-200 active:scale-95
                  focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-gray-900"
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
