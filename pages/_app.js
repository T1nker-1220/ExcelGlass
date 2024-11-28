import { ThemeProvider } from '../context/ThemeContext';
import dynamic from 'next/dynamic';
import '../styles/globals.css';

// Dynamic import of Layout
const Layout = dynamic(() => import('../components/layout/Layout'), {
  ssr: true,
});

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
}

export default MyApp;
