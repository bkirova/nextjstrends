import Layout from '../components/layouts/Sidebar'
import Card from '../components/generated/Card'
import { useState } from 'react'
import {generateRandomAIPost} from '../utils/shared'

export default function Generated() {

    let images = ['/images/1.jpg', '/images/2.jpg', '/images/3.jpg'];

    let [generationData, setGenerationData] = useState(null)
    let [isReady, setIsReady] = useState(false)
    let [isGenerating, setIsGenerating] = useState(false)

    let index = 0;

    let generate = () => {
        index = 0;
        setIsReady(false)
        setIsGenerating(true);
        setGenerationData(null)
        
        let handler = () => {
            if(images[index]) {
                setGenerationData({...generateRandomAIPost(), image:images[index] })
                index = index+1;
                setTimeout(() => handler(), 3000)
            } else {
                index = -1;
                setGenerationData({...generateRandomAIPost(), image:'/images/4.jpg' })
                setIsReady(true)
                setIsGenerating(false)
            }
        }
        setTimeout(() => handler(), 3000)
    }

    let preview = () => {}

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

                    <div className="p-5 bg-white rounded-lg flex items-center justify-between space-x-8 shadow-2xl">
                        <div className="flex-1 flex justify-between items-center">
                        <input className="w-full text-base mr-3 py-2 border-b border-gray-300 focus:outline-none focus:border-purple-500" type="" placeholder="type object, theme mood"/>
                        
                        <button type="button" onClick={() => generate()} className="p-2 bg-purple-300 hover:bg-purple-400 focus:ring-purple-400 focus:ring-offset-purple-200 text-white transition ease-in duration-200 text-center text-base font-semibold focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
                            Generate
                        </button>
                        </div>
                    </div>

                    <Card isPulsing={isGenerating} item={generationData}/>

                    <button type="button" onClick={() => preview()} className={` ${isReady ? '' : 'hidden'} p-2 float-right bg-blue-300 hover:bg-blue-400 focus:ring-blue-400 focus:ring-offset-blue-200 text-white transition ease-in duration-200 text-center text-base font-semibold focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg`}>
                        Preview Generations
                    </button>
                </div>
            </div>
            </div>
        </Layout>
    ) 
}