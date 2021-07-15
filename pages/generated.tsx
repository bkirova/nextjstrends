import Layout from '../components/layouts/Sidebar'
import dynamic from "next/dynamic";
const Container = dynamic(() => import("../components/generated/Container"), {
  ssr: false,
});
export default function Generated(props) {
    return (
        <Layout>
            <Container socket={props.socket}/>
        </Layout>
    ) 
}