import React from 'react';
import Head from 'next/head';
import { motion } from 'framer-motion';
import { PhoneIcon, EnvelopeIcon, MapPinIcon, ClockIcon } from '@heroicons/react/24/outline';
import { companyInfo } from '../data/company-info';

const Contact = () => {
  const handleEmailClick = (email) => {
    window.location.href = `mailto:${email}?subject=Inquiry for Excel Glass`;
  };

  return (
    <>
      <Head>
        <title>Contact Us - Excel Glass</title>
        <meta name="description" content="Get in touch with Excel Glass for all your glass and aluminum needs." />
      </Head>

      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="flex-grow"
      >
        <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-4xl font-extrabold text-gray-900 dark:text-white sm:text-5xl sm:tracking-tight lg:text-6xl"
            >
              Get in Touch
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mt-5 max-w-xl mx-auto text-xl text-gray-500 dark:text-gray-300"
            >
              We're here to help with all your glass and aluminum needs
            </motion.p>
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-16"
          >
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
              {/* Contact Information */}
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Contact Information</h2>
                <div className="space-y-6">
                  {/* Phone Numbers */}
                  <div className="flex items-start">
                    <PhoneIcon className="h-6 w-6 text-blue-500 mt-1" />
                    <div className="ml-4">
                      <p className="text-sm font-medium text-gray-900 dark:text-white">Phone</p>
                      <div className="space-y-2">
                        {companyInfo.contact.telephone.map((phone, index) => (
                          <a 
                            key={index}
                            href={`tel:${phone}`} 
                            className="block text-base text-gray-500 dark:text-gray-300 hover:text-blue-500"
                          >
                            {phone}
                          </a>
                        ))}
                        <p className="text-base text-gray-500 dark:text-gray-300">
                          Fax: {companyInfo.contact.fax}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Email Addresses */}
                  <div className="flex items-start">
                    <EnvelopeIcon className="h-6 w-6 text-blue-500 mt-1" />
                    <div className="ml-4">
                      <p className="text-sm font-medium text-gray-900 dark:text-white">Email</p>
                      <div className="space-y-2">
                        {companyInfo.contact.email.map((email, index) => (
                          <button
                            key={index}
                            onClick={() => handleEmailClick(email)}
                            className="block text-base text-gray-500 dark:text-gray-300 hover:text-blue-500"
                          >
                            {email}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Address */}
                  <div className="flex items-start">
                    <MapPinIcon className="h-6 w-6 text-blue-500 mt-1" />
                    <div className="ml-4">
                      <p className="text-sm font-medium text-gray-900 dark:text-white">Address</p>
                      <p className="text-base text-gray-500 dark:text-gray-300">
                        {companyInfo.contact.address}
                      </p>
                    </div>
                  </div>

                  {/* Business Hours */}
                  <div className="flex items-start">
                    <ClockIcon className="h-6 w-6 text-blue-500 mt-1" />
                    <div className="ml-4">
                      <p className="text-sm font-medium text-gray-900 dark:text-white">Business Hours</p>
                      <div className="text-base text-gray-500 dark:text-gray-300">
                        <p>Monday - Friday: {companyInfo.contact.businessHours.weekdays}</p>
                        <p>Saturday: {companyInfo.contact.businessHours.saturday}</p>
                        <p>Sunday: {companyInfo.contact.businessHours.sunday}</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Social Media */}
                <div className="mt-8 border-t border-gray-200 dark:border-gray-700 pt-8">
                  <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4">Follow Us</h3>
                  <div className="flex space-x-4">
                    <a
                      href={companyInfo.contact.socialMedia.facebook}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:text-blue-500"
                    >
                      Facebook
                    </a>
                    <a
                      href={companyInfo.contact.socialMedia.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:text-blue-500"
                    >
                      Instagram
                    </a>
                  </div>
                </div>
              </div>

              {/* Map Section */}
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Visit Us</h2>
                <div className="aspect-w-16 aspect-h-12">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15448.388202715432!2d121.00030542892534!3d14.536440981361782!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397c92e14188b3b%3A0xc387f75dc7ab33be!2sExcel%20Glass%20Inc.!5e0!3m2!1sen!2sph!4v1732853985489!5m2!1sen!2sph"
                    className="w-full h-[500px] rounded-lg"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.main>
    </>
  );
};

export default Contact;
