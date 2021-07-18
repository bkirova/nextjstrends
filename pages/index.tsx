import Layout from '../components/layouts/Standard'
import Card from '../components/generated/Card'
import {motion} from 'framer-motion'
import dynamic from "next/dynamic";
const Container = dynamic(() => import("../components/index/Container"), {
  ssr: false,
});

function Home({ items }) {

  return (
    <Layout>
      <section className="pt-20">
        <div className="px-3 mx-auto max-w-7xl">
            <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
                duration: 0.5,
            }}
            className="w-full mx-auto text-left md:w-11/12 xl:w-9/12 md:text-center">
                <h1 className="mb-8 text-4xl font-extrabold text-gray-900 md:text-6xl md:tracking-tight">
                    <span>Start</span> <span className="block w-full py-2 text-transparent bg-clip-text leading-12 bg-gradient-to-r from-green-400 to-purple-500 lg:inline">building your content</span> <span>with AI 🤖</span>
                </h1>
                <p className="px-0 mb-8 text-lg text-gray-600 md:text-xl lg:px-24">
                    Start gaining the traction you've always wanted with our next-level templates and designs. Crafted to help you tell your story.
                </p>
                <div className="mb-4 space-x-0 md:space-x-2 md:mb-8">
                    <a href="/generated" className="inline-flex items-center justify-center w-full px-6 py-3 mb-2 shadow-lg text-lg text-white bg-purple-400 hover:bg-purple-300 rounded-2xl sm:w-auto sm:mb-0">
                        Get Started
                        <svg className="w-4 h-4 ml-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                    </a>
                    <a href="/about" className="inline-flex items-center justify-center w-full px-6 py-3 mb-2 text-lg bg-gray-200 hover:bg-gray-100 rounded-2xl sm:w-auto sm:mb-0">
                        Learn More
                        <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path></svg>
                    </a>
                </div>
            </motion.div>

            <Container items={items} />

        </div>
    </section>
    </Layout>
  )
}

Home.getInitialProps = async () => {
    const res = await fetch('https://aistories.herokuapp.com/api/ai/latest')
    const data = await res.json()
  return { items: data.items }
}

export default Home