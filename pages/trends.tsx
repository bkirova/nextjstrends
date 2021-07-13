
import Layout from '../components/layouts/Sidebar'
import TrendItem from '../components/trends/TrendItem'

export default function Trends() {
    return (
        <Layout>
            <div className="pt-20">
                <TrendItem></TrendItem>
                <TrendItem></TrendItem>
                <TrendItem></TrendItem>
            </div>
        </Layout>
    ) 
}