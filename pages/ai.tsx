
import Layout from '../components/layouts/Standard'
import dynamic from "next/dynamic";
const Container = dynamic(() => import("../components/ai/Container"), {
  ssr: false,
});

export default function AI() {
  return (
    <Layout>
      <Container/>
    </Layout>
  ) 
}