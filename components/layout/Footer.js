import Link from 'next/link';
import Image from 'next/image';
import { companyInfo } from '../../data/company-info';
import { MapPinIcon, PhoneIcon, EnvelopeIcon } from '@heroicons/react/24/outline';
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
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">Footer</h2>
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
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

        <div className="mt-6 border-t border-gray-700 pt-4">
          <p className="text-xs text-gray-400 text-center">
            &copy; {currentYear} {companyInfo.name}. All rights reserved.
            <span className="block sm:inline sm:ml-1">
              Celebrating {companyInfo.yearsOfExperience} years of excellence.
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
