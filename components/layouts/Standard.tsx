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

      <div className="z-0 fixed top-1/3 left-1/2 w-36 h-36 bg-pink-400 rounded-full mix-blend-multiply filter blur-xl opacity-90 animate-pulse"></div>
      <div className="z-0 fixed top-1/3 right-80 w-72 h-72 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"></div>
      <div className="z-0 fixed top-3/4 left-40 w-72 h-72 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"></div>
      <div className="z-0 fixed top-1/3 right-40 w-36 h-36 bg-pink-400 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse "></div>
      <div className="z-0 fixed top-1/2 right-90 w-20 h-20 bg-yellow-400 rounded-full mix-blend-multiply filter blur-xl opacity-90 animate-pulse "></div>
      <div className="z-0 fixed top-1/4 left-80 w-36 h-36 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"></div>
      <div className="z-0 fixed top-1/2 left-80 w-72 h-72 bg-green-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"></div>
      <div className="z-0 fixed top-1/2 left-1/2 w-60 h-60 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"></div>
      <div className="z-0 fixed top-1/3 right-1/3 w-60 h-60 bg-yellow-400 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"></div>
      
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
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-full">
          <Header/>
          <div className="contenair bg-cover min-h-screen w-full flex justify-center items-center">
            <div className="bg-white rounded-2xl bg-opacity-60 backdrop-filter backdrop-blur-lg">
              <main>{children}</main>
            </div>
          </div>
        </div>
        <Footer/>
      </div>
    </div>
  )
}