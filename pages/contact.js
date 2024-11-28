import { useState } from 'react';
import Head from 'next/head';
import { motion } from 'framer-motion';
import dynamic from 'next/dynamic';
import toast, { Toaster } from 'react-hot-toast';
import { PhoneIcon, EnvelopeIcon, MapPinIcon, ClockIcon } from '@heroicons/react/24/outline';
import { companyInfo } from '../data/company-info';
import Link from 'next/link';

// Dynamically import the Map component
const Map = dynamic(() => import('../components/Map'), {
  ssr: false,
  loading: () => (
    <div className="h-[400px] w-full flex items-center justify-center bg-gray-100 rounded-lg">
      <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
    </div>
  ),
});

const SocialLinks = dynamic(() => import('../components/SocialLinks'), {
  loading: () => <div className="h-10 bg-gray-100 animate-pulse rounded-lg"></div>
})

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const validateForm = () => {
    if (!formData.name.trim()) {
      toast.error('Please enter your name');
      return false;
    }
    if (!formData.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      toast.error('Please enter a valid email address');
      return false;
    }
    if (!formData.phone.trim()) {
      toast.error('Please enter your phone number');
      return false;
    }
    if (!formData.message.trim()) {
      toast.error('Please enter your message');
      return false;
    }
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) return;

    setIsSubmitting(true);
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        toast.success('Message sent successfully!');
        setFormData({
          name: '',
          email: '',
          phone: '',
          subject: '',
          message: '',
        });
      } else {
        throw new Error(data.message || 'Failed to send message');
      }
    } catch (error) {
      console.error('Error sending email:', error);
      toast.error('Failed to send message. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputClasses = "w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-400 transition-all duration-200";

  return (
    <>
      <Head>
        <title>Contact Us - Excel Glass & Dorcen Glass</title>
        <meta 
          name="description" 
          content="Get in touch with us for all your glass and aluminum needs. Contact us for quotes and inquiries."
        />
      </Head>

      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="flex-grow"
      >
        <Toaster position="top-center" reverseOrder={false} />
        
        <div className="min-h-screen py-12 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Contact Section */}
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
                  Contact Us
                </h1>
                <p className="text-lg text-gray-600 dark:text-gray-300">
                  Get in touch with us for any inquiries or quotes
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Contact Information */}
                <div className="space-y-8">
                  <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Contact Information</h2>
                    <div className="space-y-4">
                      <div className="flex items-center space-x-4 text-gray-700 dark:text-gray-300">
                        <PhoneIcon className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                        <div>
                          <p className="font-medium">Phone</p>
                          {companyInfo.contact.telephone.map((phone, index) => (
                            <p key={index}>{phone}</p>
                          ))}
                          <p>Fax: {companyInfo.contact.fax}</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-4 text-gray-700 dark:text-gray-300">
                        <EnvelopeIcon className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                        <div>
                          <p className="font-medium">Email</p>
                          {companyInfo.contact.email.map((email, index) => (
                            <p key={index}>{email}</p>
                          ))}
                        </div>
                      </div>
                      <div className="flex items-center space-x-4 text-gray-700 dark:text-gray-300">
                        <MapPinIcon className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                        <div>
                          <p className="font-medium">Address</p>
                          <p>{companyInfo.contact.address}</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-4 text-gray-700 dark:text-gray-300">
                        <ClockIcon className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                        <div>
                          <p className="font-medium">Business Hours</p>
                          <p>Monday - Friday: 8:00 AM - 5:00 PM</p>
                          <p>Saturday: 8:00 AM - 12:00 PM</p>
                          <p>Sunday: Closed</p>
                        </div>
                      </div>
                    </div>
                    
                    {/* Social Links */}
                    <div className="mt-8">
                      <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4">Follow Us</h3>
                      <SocialLinks className="text-blue-600 dark:text-blue-400" />
                    </div>
                  </div>
                </div>

                {/* Contact Form */}
                <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Send us a Message</h2>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                        Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        id="name"
                        value={formData.name}
                        onChange={handleChange}
                        className={inputClasses}
                        placeholder="Your name"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                        Email *
                      </label>
                      <input
                        type="email"
                        name="email"
                        id="email"
                        value={formData.email}
                        onChange={handleChange}
                        className={inputClasses}
                        placeholder="your.email@example.com"
                      />
                    </div>

                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                        Phone *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        id="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className={inputClasses}
                        placeholder="Your phone number"
                      />
                    </div>

                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                        Subject
                      </label>
                      <input
                        type="text"
                        name="subject"
                        id="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        className={inputClasses}
                        placeholder="What is this about?"
                      />
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                        Message *
                      </label>
                      <textarea
                        name="message"
                        id="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows="5"
                        className={inputClasses}
                        placeholder="Your message here..."
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full px-6 py-3 bg-blue-600 dark:bg-blue-500 text-white rounded-lg
                        hover:bg-blue-700 dark:hover:bg-blue-600
                        focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400
                        disabled:opacity-50 disabled:cursor-not-allowed
                        transition-colors duration-200"
                    >
                      {isSubmitting ? 'Sending...' : 'Send Message'}
                    </button>
                  </form>
                </div>
              </div>

              {/* Map Section */}
              <div className="mt-12 bg-white dark:bg-gray-800 rounded-xl shadow-lg p-4">
                <Map />
              </div>
            </div>
          </div>
        </div>
      </motion.main>
    </>
  );
};

export default Contact;
