import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { companyInfo } from '../../data/company-info';
import { MapPinIcon, PhoneIcon, EnvelopeIcon, ChevronDownIcon, ClockIcon } from '@heroicons/react/24/outline';
import SocialLinks from '../SocialLinks';

const navigation = {
  main: [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Portfolio', href: '/portfolio' },
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
    <footer className="bg-gray-900 text-gray-300" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">Footer</h2>
      
      {/* Mobile Footer */}
      <div className="lg:hidden px-4 py-8 space-y-8">
        {/* Logo and Contact Buttons */}
        <div className="flex items-center justify-between border-b border-gray-800 pb-6">
          <div className="relative w-48 h-16">
            <Image
              src="/logo.png"
              alt="Excel Glass Logo"
              fill
              sizes="192px"
              className="object-contain"
            />
          </div>
          <div className="flex gap-3">
            <a 
              href={`tel:${companyInfo.contact.telephone[0]}`}
              className="p-2.5 rounded-lg bg-blue-600 hover:bg-blue-700 transition-colors duration-200"
              aria-label="Call us"
            >
              <PhoneIcon className="h-5 w-5" />
            </a>
            <a 
              href={`mailto:${companyInfo.contact.email[0]}`}
              className="p-2.5 rounded-lg bg-blue-600 hover:bg-blue-700 transition-colors duration-200"
              aria-label="Email us"
            >
              <EnvelopeIcon className="h-5 w-5" />
            </a>
          </div>
        </div>

        {/* Collapsible Sections */}
        <div className="space-y-4">
          {/* Quick Links Section */}
          <div className="border-b border-gray-800">
            <button
              className="w-full py-4 flex justify-between items-center text-left"
              onClick={() => toggleSection('links')}
            >
              <span className="text-white font-semibold">Quick Links</span>
              <ChevronDownIcon
                className={`w-5 h-5 transform transition-transform duration-200 ${
                  expandedSection === 'links' ? 'rotate-180' : ''
                }`}
              />
            </button>
            {expandedSection === 'links' && (
              <div className="pb-4 grid grid-cols-2 gap-4">
                {navigation.main.map((item) => (
                  <Link 
                    key={item.name} 
                    href={item.href}
                    className="text-sm hover:text-white transition-colors duration-200"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* Services Section */}
          <div className="border-b border-gray-800">
            <button
              className="w-full py-4 flex justify-between items-center text-left"
              onClick={() => toggleSection('services')}
            >
              <span className="text-white font-semibold">Our Services</span>
              <ChevronDownIcon
                className={`w-5 h-5 transform transition-transform duration-200 ${
                  expandedSection === 'services' ? 'rotate-180' : ''
                }`}
              />
            </button>
            {expandedSection === 'services' && (
              <div className="pb-4 grid grid-cols-2 gap-4">
                {navigation.services.map((item) => (
                  <Link 
                    key={item.name} 
                    href={item.href}
                    className="text-sm hover:text-white transition-colors duration-200"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* Contact Info Section */}
          <div className="border-b border-gray-800">
            <button
              className="w-full py-4 flex justify-between items-center text-left"
              onClick={() => toggleSection('contact')}
            >
              <span className="text-white font-semibold">Contact Information</span>
              <ChevronDownIcon
                className={`w-5 h-5 transform transition-transform duration-200 ${
                  expandedSection === 'contact' ? 'rotate-180' : ''
                }`}
              />
            </button>
            {expandedSection === 'contact' && (
              <div className="pb-4 space-y-4">
                <div className="flex items-start gap-3">
                  <MapPinIcon className="h-5 w-5 text-blue-400 flex-shrink-0 mt-0.5" />
                  <span className="text-sm">{companyInfo.contact.address}</span>
                </div>
                <div className="flex items-start gap-3">
                  <PhoneIcon className="h-5 w-5 text-blue-400 flex-shrink-0 mt-0.5" />
                  <div className="space-y-1 text-sm">
                    {companyInfo.contact.telephone.map((phone, index) => (
                      <div key={index}>{phone}</div>
                    ))}
                    <div>Fax: {companyInfo.contact.fax}</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <EnvelopeIcon className="h-5 w-5 text-blue-400 flex-shrink-0 mt-0.5" />
                  <div className="space-y-1 text-sm">
                    {companyInfo.contact.email.map((email, index) => (
                      <div key={index}>{email}</div>
                    ))}
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <ClockIcon className="h-5 w-5 text-blue-400 flex-shrink-0 mt-0.5" />
                  <div className="space-y-1 text-sm">
                    <div>Mon - Fri: {companyInfo.contact.businessHours.weekdays}</div>
                    <div>Saturday: {companyInfo.contact.businessHours.saturday}</div>
                    <div>Sunday: {companyInfo.contact.businessHours.sunday}</div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Social Links */}
        <div className="pt-4">
          <div className="flex justify-center">
            <SocialLinks darkMode={true} />
          </div>
        </div>
      </div>

      {/* Desktop Footer */}
      <div className="hidden lg:block border-t border-gray-800">
        <div className="mx-auto max-w-7xl px-8 py-12">
          <div className="grid grid-cols-12 gap-8">
            {/* Company Info */}
            <div className="col-span-4 space-y-8">
              <div className="relative w-56 h-20">
                <Image
                  src="/logo.png"
                  alt="Excel Glass Logo"
                  fill
                  sizes="224px"
                  className="object-contain"
                />
              </div>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <p className="text-sm">
                    {companyInfo.description}
                  </p>
                  <div>
                    <SocialLinks darkMode={true} />
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div className="col-span-2">
              <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
                Quick Links
              </h3>
              <ul className="space-y-3">
                {navigation.main.map((item) => (
                  <li key={item.name}>
                    <Link 
                      href={item.href}
                      className="text-sm hover:text-white transition-colors duration-200"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div className="col-span-2">
              <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
                Services
              </h3>
              <ul className="space-y-3">
                {navigation.services.map((item) => (
                  <li key={item.name}>
                    <Link 
                      href={item.href}
                      className="text-sm hover:text-white transition-colors duration-200"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div className="col-span-4">
              <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
                Contact Information
              </h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <MapPinIcon className="h-5 w-5 text-blue-400 flex-shrink-0 mt-0.5" />
                  <span className="text-sm">{companyInfo.contact.address}</span>
                </div>
                <div className="flex items-start gap-3">
                  <PhoneIcon className="h-5 w-5 text-blue-400 flex-shrink-0 mt-0.5" />
                  <div className="space-y-1 text-sm">
                    {companyInfo.contact.telephone.map((phone, index) => (
                      <div key={index}>{phone}</div>
                    ))}
                    <div>Fax: {companyInfo.contact.fax}</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <EnvelopeIcon className="h-5 w-5 text-blue-400 flex-shrink-0 mt-0.5" />
                  <div className="space-y-1 text-sm">
                    {companyInfo.contact.email.map((email, index) => (
                      <div key={index}>{email}</div>
                    ))}
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <ClockIcon className="h-5 w-5 text-blue-400 flex-shrink-0 mt-0.5" />
                  <div className="space-y-1 text-sm">
                    <div>Mon - Fri: {companyInfo.contact.businessHours.weekdays}</div>
                    <div>Saturday: {companyInfo.contact.businessHours.saturday}</div>
                    <div>Sunday: {companyInfo.contact.businessHours.sunday}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="bg-gray-950 py-4">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-center text-sm">
            &copy; {currentYear} {companyInfo.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
