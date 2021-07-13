import Head from '../common/Head'
import Footer from '../common/Footer'
import Header from '../common/Header'
import SideBar from '../common/Sidebar'
import Dot from '../common/Dot'
import {generateRandomDot} from '../../utils/shared'

export const siteTitle = 'AI Stories'

export default function Sidebar({ children }) {
  return (
    <div>
      <Head/>
        
      <Dot options={generateRandomDot()}></Dot>
      <Dot options={generateRandomDot()}></Dot>
      <Dot options={generateRandomDot()}></Dot>
      <Dot options={generateRandomDot()}></Dot>
      <Dot options={generateRandomDot()}></Dot>

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
  )
}