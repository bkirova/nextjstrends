import Head from 'next/head'
import Footer from '../footer'
import Header from '../header'

export const siteTitle = 'Next.js Sample Website'

export default function Layout({ children }) {
  return (
    <div>
      
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="og:title" content={siteTitle} />
      </Head>
      
      <Header/>
      <div className="flex w-full mx-auto px-4 lg:max-w-7xl">
          <main>{children}</main>
      </div>
      <Footer/>
    </div>
  )
}