import Layout from '../components/layouts/Standard'
import dynamic from "next/dynamic";
const Container = dynamic(() => import("../components/generated/Container"), {
  ssr: false,
});
export default function Generated() {
    return (
        <Layout>
            <div className="w-full mt-20 mx-auto text-left md:w-11/12 xl:w-9/12">
                <p className="px-0 mb-8 text-lg font-medium text-gray-600 lg:px-16">
                    The model is still a baby, don't be mad if the generated pictures are odd or even a bit ugly.
                </p>
            </div>
            <Container/>
        </Layout>
    ) 
}