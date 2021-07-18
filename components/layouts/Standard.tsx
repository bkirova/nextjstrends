import Head from '../common/Head'
import Header from '../common/Header'
import Footer from '../common/Footer'
import dynamic from "next/dynamic";
const Dot = dynamic(() => import("../common/Dot"), {
  ssr: false,
});

export const siteTitle = 'AI Stories'

export default function Standard({ children }) {
  return (
    <div className="h-full">
      <Head/>
      
      <Dot key={1}></Dot>
      <Dot key={2}></Dot>
      <Dot key={3}></Dot>
      <Dot key={4}></Dot>
      <Dot key={5}></Dot>
      <Dot key={6}></Dot>
      <Dot key={7}></Dot>
      <Dot key={8}></Dot>
      <Dot key={9}></Dot>
      <Dot key={10}></Dot>

      <div className="relative flex flex-col z-1 h-full min-h-screen">
        <Header/>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-full">
            <main>{children}</main>
        </div>
        <Footer/>
      </div>
    </div>
  )
}