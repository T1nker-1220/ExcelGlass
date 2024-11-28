import { useState } from 'react';
import Head from 'next/head';
import { motion } from 'framer-motion';
import dynamic from 'next/dynamic';
import emailjs from '@emailjs/browser';
import toast, { Toaster } from 'react-hot-toast';
import { PhoneIcon, EnvelopeIcon, MapPinIcon, ClockIcon } from '@heroicons/react/24/outline';
import { companyInfo } from '../data/company-info';

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
    
    // Check if EmailJS is configured
    if (!process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || 
        !process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || 
        !process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID) {
      toast.error('Contact form is temporarily unavailable. Please contact us directly through phone or email.');
      return;
    }

    if (!validateForm()) return;

    setIsSubmitting(true);
    try {
      const response = await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        {
          from_name: formData.name,
          from_email: formData.email,
          phone: formData.phone,
          subject: formData.subject,
          message: formData.message,
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
      );

      if (response.status === 200) {
        toast.success('Message sent successfully!');
        setFormData({
          name: '',
          email: '',
          phone: '',
          subject: '',
          message: '',
        });
      }
    } catch (error) {
      console.error('Error sending email:', error);
      toast.error('Failed to send message. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputClasses = "w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200 bg-white/50 backdrop-blur-sm";
  const labelClasses = "block text-sm font-medium text-gray-700 mb-1";

  return (
    <>
      <Head>
        <title>Contact Us - {companyInfo.name}</title>
        <meta 
          name="description" 
          content="Get in touch with Excel Glass Inc. for premium glass etching services. Contact us for inquiries, quotes, or custom projects."
        />
      </Head>

      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="flex-grow"
      >
        <Toaster position="top-center" reverseOrder={false} />
        
        {/* Hero Section */}
        <div className="relative bg-primary text-white py-24">
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-primary to-primary/80" />
          </div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Get in Touch
              </h1>
              <p className="text-xl text-gray-100 max-w-2xl mx-auto">
                We're here to help with your glass etching needs. Reach out to us for inquiries or custom projects.
              </p>
            </motion.div>
          </div>
        </div>

        <section className="container mx-auto px-4 py-16">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Contact Information */}
              <div className="space-y-8">
                <div className="bg-white rounded-xl shadow-lg p-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h2>
                  
                  <div className="space-y-6">
                    <div className="flex items-start space-x-4">
                      <MapPinIcon className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="font-medium text-gray-900">Address</h3>
                        <p className="text-gray-600 mt-1">{companyInfo.contact.address}</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <PhoneIcon className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="font-medium text-gray-900">Phone</h3>
                        <div className="space-y-1 mt-1">
                          {companyInfo.contact.telephone.map((phone, index) => (
                            <p key={index} className="text-gray-600">{phone}</p>
                          ))}
                          <p className="text-gray-600">Fax: {companyInfo.contact.fax}</p>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <EnvelopeIcon className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="font-medium text-gray-900">Email</h3>
                        <div className="space-y-1 mt-1">
                          {companyInfo.contact.email.map((email, index) => (
                            <p key={index} className="text-gray-600">{email}</p>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <ClockIcon className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="font-medium text-gray-900">Business Hours</h3>
                        <div className="space-y-1 mt-1">
                          <p className="text-gray-600">Monday - Friday: 8:00 AM - 5:00 PM</p>
                          <p className="text-gray-600">Saturday: 8:00 AM - 12:00 PM</p>
                          <p className="text-gray-600">Sunday: Closed</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Map */}
                <div className="bg-white rounded-xl shadow-lg p-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">Location</h2>
                  <div className="h-[400px] rounded-lg overflow-hidden">
                    <Map />
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div className="bg-white rounded-xl shadow-lg p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Send us a Message</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  {(!process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || 
                    !process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || 
                    !process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID) && (
                    <div className="p-4 bg-yellow-50 border border-yellow-200 rounded-md">
                      <p className="text-yellow-700">
                        Contact form is temporarily unavailable. Please contact us directly through phone or email.
                      </p>
                    </div>
                  )}
                  <div>
                    <label htmlFor="name" className={labelClasses}>Name *</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className={inputClasses}
                      placeholder="Your name"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className={labelClasses}>Email *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={inputClasses}
                      placeholder="your.email@example.com"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className={labelClasses}>Phone *</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className={inputClasses}
                      placeholder="Your phone number"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="subject" className={labelClasses}>Subject</label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className={inputClasses}
                      placeholder="What is this about?"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className={labelClasses}>Message *</label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows="5"
                      className={inputClasses}
                      placeholder="Your message here..."
                      required
                    />
                  </div>

                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className={`w-full py-3 px-6 text-white font-medium rounded-lg 
                      ${isSubmitting ? 'bg-primary/70' : 'bg-primary hover:bg-primary/90'} 
                      transition-all duration-200 flex items-center justify-center space-x-2`}
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-5 w-5 border-t-2 border-b-2 border-white"></div>
                        <span>Sending...</span>
                      </>
                    ) : (
                      <span>Send Message</span>
                    )}
                  </motion.button>
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* Social Links */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <h2 className="text-2xl font-playfair font-bold text-gray-900">
              Connect With Us
            </h2>
            <p className="mt-2 text-gray-600">
              Follow us on social media for updates and inspiration
            </p>
            <div className="mt-6">
              <SocialLinks />
            </div>
          </div>
        </section>
      </motion.main>
    </>
  );
};

export default Contact;
