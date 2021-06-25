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
      <div className="flex flex-col w-full mx-auto px-4 lg:flex-row lg:max-w-7xl  sm:px-6">
        <aside className="lg:h-screen lg:sticky lg:top-0 lg:w-1/4">
          <SideBar/>
        </aside>
        <div className="lg:w-3/4 ">
          <main>{children}</main>
        </div>
      </div>
      <Footer/>
    </div>
  )
}