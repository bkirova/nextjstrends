import Head from 'next/head'
import Header from '../common/Header'
import Footer from '../common/Footer'
export const siteTitle = 'Next.js Sample Website'

export default function Layout({ children }) {
  return (
    <div>
      
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Learn how to build a personal website using Next.js"
        />
        <meta
          property="og:image"
          content={`https://og-image.vercel.app/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      
      <Header/>
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <main>{children}</main>
      </div>
      <Footer/>
    </div>
  )
}