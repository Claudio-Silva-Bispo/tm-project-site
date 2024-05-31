
/* Importações gerais */
import type { AppProps } from 'next/app';
import Head from 'next/head';
import '../globals.css';

/* Importação de componentes */
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import WhatsAppWidget from '../components/WhatsAppWidget';


export const metadata = {
  title: 'Oliver Business Cleaning Service'
};

function MyApp({ Component, pageProps }: AppProps) {


  return (
    <>
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" />
      </Head>
      <Navbar />
        <Component {...pageProps} />
      <WhatsAppWidget />
      <Footer />
    </>
  );
}

export default MyApp;
