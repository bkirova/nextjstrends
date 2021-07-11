import Head from '../common/Head'
import Header from '../common/Header'
import Footer from '../common/Footer'
import Dot from '../common/Dot'
import {generateRandomOptions} from '../../utils/shared'

export const siteTitle = 'AI Stories'

export default function Standard({ children }) {
  return (
    <div>
      <Head/>
      
      <Dot options={generateRandomOptions()}></Dot>
      <Dot options={generateRandomOptions()}></Dot>
      <Dot options={generateRandomOptions()}></Dot>
      <Dot options={generateRandomOptions()}></Dot>
      <Dot options={generateRandomOptions()}></Dot>

      <Header/>
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <main>{children}</main>
      </div>
      <Footer/>
    </div>
  )
}