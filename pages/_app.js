import { ThemeProvider } from '../context/ThemeContext';
import { LazyMotion, domAnimation } from 'framer-motion';
import dynamic from 'next/dynamic';
import '../styles/globals.css';

// Dynamic import of Layout with SSR disabled for animations
const Layout = dynamic(() => import('../components/layout/Layout'), {
  ssr: false,
});

function MyApp({ Component, pageProps }) {
  return (
    <LazyMotion features={domAnimation}>
      <ThemeProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </LazyMotion>
  );
}

export default MyApp;
