import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Layout from './components/layout'
import "bootstrap/dist/css/bootstrap.min.css";
import Header from './components/Header';
import { CartProvider } from './Context/CartContext';



export default function App({ Component, pageProps }: AppProps) {
  return <CartProvider> <Layout>
  <Header/>
<Component {...pageProps} />
</Layout></CartProvider>



}
