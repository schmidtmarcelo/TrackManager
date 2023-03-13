import '@/styles/globals.css'
import '@/styles/datatable.css'
import './_app.css';
import type { AppProps } from 'next/app'
import Layout from '@/components/layout/Layout'

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} >
    <Layout>Home</Layout>
    </Component> 
}