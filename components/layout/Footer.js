import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { companyInfo } from '../../data/company-info';
import { MapPinIcon, PhoneIcon, EnvelopeIcon, ChevronDownIcon } from '@heroicons/react/24/outline';
import SocialLinks from '../SocialLinks';

const navigation = {
  main: [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Portfolio', href: '/portfolio' },
    { name: 'Contact', href: '/contact' },
  ],
  services: [
    { name: 'Glass Etching', href: '/services#etching' },
    { name: 'Corporate Awards', href: '/services#awards' },
    { name: 'Custom Designs', href: '/services#custom' },
    { name: 'Installation', href: '/services#installation' },
  ],
};

const Footer = () => {
  const [expandedSection, setExpandedSection] = useState(null);
  const currentYear = new Date().getFullYear();

  const toggleSection = (section) => {
    setExpandedSection(expandedSection === section ? null : section);
  };

  return (
    <footer className="bg-gray-900 dark:bg-black text-white" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">Footer</h2>
      
      {/* Mobile Footer */}
      <div className="lg:hidden">
        {/* Essential Info */}
        <div className="p-4 border-b border-gray-800">
          <div className="flex items-center justify-between">
            <div className="relative w-28 h-10">
              <Image
                src="/logo.webp"
                alt="Excel Glass Logo"
                fill
                className="object-contain brightness-0 invert"
                sizes="112px"
              />
            </div>
            <div className="flex gap-4">
              <a href={`tel:${companyInfo.contact.telephone[0]}`} className="p-2 rounded-full bg-blue-600 hover:bg-blue-700">
                <PhoneIcon className="h-5 w-5" />
              </a>
              <a href={`mailto:${companyInfo.contact.email[0]}`} className="p-2 rounded-full bg-blue-600 hover:bg-blue-700">
                <EnvelopeIcon className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Collapsible Sections */}
        {/* Quick Links */}
        <div className="border-b border-gray-800">
          <button
            className="w-full p-4 flex justify-between items-center text-left"
            onClick={() => toggleSection('links')}
          >
            <span className="font-semibold">Quick Links</span>
            <ChevronDownIcon
              className={`w-5 h-5 transform transition-transform ${expandedSection === 'links' ? 'rotate-180' : ''}`}
            />
          </button>
          {expandedSection === 'links' && (
            <div className="p-4 pt-0 grid grid-cols-2 gap-4">
              {navigation.main.map((item) => (
                <Link key={item.name} href={item.href}>
                  <span className="text-sm text-gray-300 hover:text-white">
                    {item.name}
                  </span>
                </Link>
              ))}
            </div>
          )}
        </div>

        {/* Contact Info */}
        <div className="border-b border-gray-800">
          <button
            className="w-full p-4 flex justify-between items-center text-left"
            onClick={() => toggleSection('contact')}
          >
            <span className="font-semibold">Contact Info</span>
            <ChevronDownIcon
              className={`w-5 h-5 transform transition-transform ${expandedSection === 'contact' ? 'rotate-180' : ''}`}
            />
          </button>
          {expandedSection === 'contact' && (
            <div className="p-4 pt-0 space-y-3 text-sm text-gray-300">
              <div className="flex items-start gap-2">
                <MapPinIcon className="h-5 w-5 text-gray-400 flex-shrink-0 mt-0.5" />
                <span>{companyInfo.contact.address}</span>
              </div>
              <div>
                <h3 className="font-semibold text-white mb-1">Business Hours</h3>
                <div className="space-y-1">
                  <p>Weekdays: {companyInfo.contact.businessHours.weekdays}</p>
                  <p>Saturday: {companyInfo.contact.businessHours.saturday}</p>
                  <p>Sunday: {companyInfo.contact.businessHours.sunday}</p>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Social Links */}
        <div className="p-4 flex justify-center">
          <SocialLinks darkMode={true} />
        </div>
      </div>

      {/* Desktop Footer */}
      <div className="hidden lg:block">
        <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
          <div className="lg:grid lg:grid-cols-3 lg:gap-8">
            {/* Company Info */}
            <div className="space-y-4">
              <div className="relative w-36 h-12">
                <Image
                  src="/logo.webp"
                  alt="Excel Glass Logo"
                  fill
                  className="object-contain brightness-0 invert"
                  sizes="144px"
                />
              </div>
              <div className="space-y-2 text-sm text-gray-300">
                <div className="flex items-center gap-2">
                  <MapPinIcon className="h-4 w-4 text-gray-400 flex-shrink-0" />
                  <span>{companyInfo.contact.address}</span>
                </div>
                <div className="flex items-center gap-2">
                  <PhoneIcon className="h-4 w-4 text-gray-400 flex-shrink-0" />
                  <span>Tel: {companyInfo.contact.telephone.join(' / ')}</span>
                </div>
                <div className="flex items-center gap-2">
                  <EnvelopeIcon className="h-4 w-4 text-gray-400 flex-shrink-0" />
                  <div>
                    <div>{companyInfo.contact.email[1]}</div>
                    <div>{companyInfo.contact.email[0]}</div>
                  </div>
                </div>
              </div>
              {/* Business Hours */}
              <div className="text-sm text-gray-300">
                <h3 className="font-semibold text-white mb-2">Business Hours</h3>
                <div className="space-y-1">
                  <p>Weekdays: {companyInfo.contact.businessHours.weekdays}</p>
                  <p>Saturday: {companyInfo.contact.businessHours.saturday}</p>
                  <p>Sunday: {companyInfo.contact.businessHours.sunday}</p>
                </div>
              </div>
              <div className="pt-2">
                <SocialLinks darkMode={true} />
              </div>
            </div>

            {/* Navigation */}
            <div className="mt-8 grid grid-cols-2 gap-8 lg:mt-0 lg:col-span-2">
              <div>
                <h3 className="text-sm font-semibold text-white">Company</h3>
                <ul className="mt-2 space-y-2">
                  {navigation.main.map((item) => (
                    <li key={item.name}>
                      <Link href={item.href}>
                        <span className="text-sm text-gray-300 hover:text-white cursor-pointer">
                          {item.name}
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-white">Services</h3>
                <ul className="mt-2 space-y-2">
                  {navigation.services.map((item) => (
                    <li key={item.name}>
                      <Link href={item.href}>
                        <span className="text-sm text-gray-300 hover:text-white cursor-pointer">
                          {item.name}
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-gray-800 py-4 text-center text-sm text-gray-400">
        <p>&copy; {currentYear} {companyInfo.name}. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
