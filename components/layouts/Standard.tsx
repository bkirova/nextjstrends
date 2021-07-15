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
    <div>
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

      <Header/>
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <main>{children}</main>
      </div>
      <Footer/>
    </div>
  )
}