
import Layout from '../components/layouts/home'

export default function Generated() {
    return (
        <Layout>
        
            <div className="mt-10 mb-10 flex items-center justify-center">
            <div className="relative w-full max-w-lg">
                <div className="absolute top-60 left-4 w-36 h-36 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-90 animate-pulse"></div>
                <div className="absolute top-0 left-4 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70"></div>

                <div className="absolute top-0 right-4 w-36 h-36 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse "></div>
                <div className="absolute top-20 right-20 w-20 h-20 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-90 animate-pulse "></div>

                <div className="absolute top-100 right-500 w-36 h-36 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"></div>
                <div className="w-full relative space-y-4">

                    <div className="p-5 bg-white rounded-lg flex items-center justify-between space-x-8 shadow-lg">
                        <div className="flex-1 flex justify-between items-center">
                        <input className="w-full text-base mr-3 py-2 border-b border-gray-300 focus:outline-none focus:border-purple-500" type="" placeholder="type object, theme mood"/>
                        
                        <button type="button" className="p-2 bg-purple-300 hover:bg-purple-400 focus:ring-purple-400 focus:ring-offset-purple-200 text-white transition ease-in duration-200 text-center text-base font-semibold focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
                            Generate
                        </button>
                        </div>
                    </div>
                    <div className="bg-white  rounded-lg flex flex-col shadow-lg opacity-40">
                        <div className="flex p-5">
                            <div data-placeholder className="mr-2 h-10 w-10 rounded-full overflow-hidden relative bg-gray-200">
                        
                            </div>
                            <div className="flex flex-col justify-between items-center">
                                <div data-placeholder className="mb-2 h-5 w-40 overflow-hidden relative bg-gray-200">
                                
                                </div>
                            </div>
                        </div>
                        <div data-placeholder className="h-52 w-full overflow-hidden relative bg-gray-200"></div>
                        
                        <div data-placeholder className="m-6 h-5 w-40 overflow-hidden relative bg-gray-200">
                                
                        </div>
                    </div>
              
                </div>
            </div>
            </div>
        </Layout>
    ) 
}