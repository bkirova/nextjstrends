import Head from 'next/head'
import Footer from '../footer'
import Header from '../header'
import SideBar from '../sidebar'

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
      <div class="flex w-full max-w-7xl mx-auto px-4 sm:px-6">
        <aside class="h-screen sticky top-0">
          <SideBar/>
        </aside>
        <div class="">
          <main>{children}</main>
        </div>
      </div>
      <Footer/>
    </div>
  )
}