
/* Importações gerais */
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { useRouter } from 'next/router';
import '../globals.css';
import { SpeedInsights } from "@vercel/speed-insights/next";

/* Importação de componentes */
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import WhatsAppWidget from '../components/WhatsAppWidget';


export const metadata = {
  title: 'TM Service Cleaning'
};

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const isDashboard = router.pathname.startsWith('/Dashboard');


  return (
    <>
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" />
      </Head>

      {!isDashboard && <Navbar />}
        <Component {...pageProps} />
      <WhatsAppWidget />
      {!isDashboard && <Footer />}
      <SpeedInsights />
    </>
  );
}

export default MyApp;
