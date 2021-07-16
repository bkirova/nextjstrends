import Head from '../common/Head'
import Footer from '../common/Footer'
import Header from '../common/Header'
import SideBar from '../common/Sidebar'
import dynamic from "next/dynamic";
const Dot = dynamic(() => import("../common/Dot"), {
  ssr: false,
});

export const siteTitle = 'AI Stories'

export default function Sidebar({ children }) {
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

      <div className="relative z-1">
      <Header/>
      <div className="flex flex-col w-full mx-auto px-4 lg:flex-row lg:max-w-7xl">
        <aside className="lg:h-screen lg:sticky lg:top-0 lg:w-1/4">
          <SideBar/>
        </aside>
        <div className="lg:w-3/4 ">
          <main>{children}</main>
        </div>
      </div>
      <Footer/>
      </div>
    </div>
  )
}