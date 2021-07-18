import Layout from '../components/layouts/Standard'
import dynamic from "next/dynamic";
const Container = dynamic(() => import("../components/generated/Container"), {
  ssr: false,
});
export default function Generated() {
    return (
        <Layout>
            <div className="w-full mt-20 mx-auto text-left md:w-11/12 xl:w-9/12 md:text-center">
                <p className="px-0 mb-8 text-lg text-gray-600 lg:px-16">
                    Start gaining the traction you've always wanted with our next-level templates and designs.
                </p>
            </div>
            <Container/>
        </Layout>
    ) 
}