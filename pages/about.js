import Head from 'next/head';
import { motion } from 'framer-motion';
import { companyInfo } from '../data/company-info';

export default function About() {
  return (
    <>
      <Head>
        <title>About Us - Excel Glass & Dorcen Glass</title>
        <meta 
          name="description" 
          content="Learn about our history, values, and commitment to excellence in glass solutions." 
        />
      </Head>

      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300"
      >
        {/* Hero Section */}
        <div className="relative bg-gradient-to-r from-blue-600 to-blue-800 dark:from-blue-800 dark:to-blue-900 text-white py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Story</h1>
              <p className="text-xl text-gray-100 max-w-2xl mx-auto">
                A Legacy of Excellence in Glass Craftsmanship Since 1994
              </p>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="prose prose-lg mx-auto dark:prose-invert">
            {/* Excel Glass History */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-12"
            >
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">The Excel Glass Journey</h2>
              <div className="space-y-6 text-gray-600 dark:text-gray-300">
                <p>
                  Excel Glass, Inc. began its remarkable journey in August 1994, initially established under the name EXCELLINK ENTERPRISES. From its inception, the company has been dedicated to producing premium quality glass etched products, serving both individual and corporate markets.
                </p>
                
                <p>
                  Our first major breakthrough came with our presence in SM Supupermalls, where our unique glass etching work gained widespread recognition and acceptance in the market. This early success set the foundation for our future growth and expansion.
                </p>

                <p>
                  In August 1997, the company underwent a significant transformation under the management of Polly Alianan-Limpe's Family. This reorganization marked a new chapter in our history, bringing fresh perspectives and innovative approaches to our craft.
                </p>

                <p>
                  A pivotal moment came in January 2011 when the company welcomed new incorporators: Doreen M. Marquez, Jerry T. Limpe, Orceno M. Morada, Francisco C. Pascual, and Minda S. Trumata. Their combined expertise and vision have helped shape Excel Glass into the respected institution it is today.
                </p>

                <p>
                  Throughout our journey, we've maintained a dedicated team of 15 employees, all specialists in their craft. Operating from our 240sqm factory and office space at Unit 4E Jolliland Townhomes 670 EDSA, Malibay City, we've consistently delivered excellence in glass etching services.
                </p>
              </div>
            </motion.section>

            {/* Dorcen Glass Section */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-12"
            >
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Dorcen Glass & Aluminum Supply</h2>
              <div className="space-y-6 text-gray-600 dark:text-gray-300">
                <p>
                  Complementing Excel Glass's expertise in glass etching, Dorcen Glass & Aluminum Supply emerged as a comprehensive solution provider for glass and aluminum needs. Located at G/F Unit 4-E, 670 Jolliland Townhomes EDSA, Malibay, Pasay City, Dorcen has established itself as a trusted name in the industry.
                </p>

                <p>
                  As a contractor and manufacturer, Dorcen specializes in a wide range of services including:
                </p>
                
                <ul className="list-disc pl-6 space-y-2">
                  <li>Glass Showcases and Display Solutions</li>
                  <li>Shower Enclosure Systems</li>
                  <li>Glass Frosting and Specialized Treatments</li>
                  <li>Screen Doors and Windows</li>
                  <li>Patch Fitting Door Installations</li>
                  <li>Sliding Door Systems</li>
                  <li>Comprehensive Glass and Aluminum Services</li>
                </ul>
              </div>
            </motion.section>

            {/* Values and Commitment */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Our Values & Commitment</h2>
              <div className="space-y-6 text-gray-600 dark:text-gray-300">
                <p>
                  At Excel Glass and Dorcen, we take immense pride not only in our services but also in our ability to offer VERY REASONABLE prices without compromising on quality. We understand the importance of working within our clients' budgets while delivering exceptional results.
                </p>

                <p>
                  Our commitment to excellence was particularly evident in 2000 when we faced and overcame a significant challenge. After being affected by a fire, we demonstrated remarkable resilience by quickly resuming operations, ensuring we continued to meet our commitments to our clients.
                </p>

                <p>
                  Today, we serve a diverse clientele including corporate organizations, government agencies, and individual customers. No project is too small or too big for us – we value every opportunity to demonstrate our craftsmanship and dedication to quality.
                </p>

                <p>
                  With over 28 years of experience in the industry, we continue to innovate and expand our services while maintaining the same commitment to quality and customer satisfaction that has defined us since our inception.
                </p>
              </div>
            </motion.section>
          </div>
        </div>
      </motion.main>
    </>
  );
}
