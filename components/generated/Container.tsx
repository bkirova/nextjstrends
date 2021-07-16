import Card from './Card'
import io from 'socket.io-client'
import { useState } from 'react'

export default function Container() {
    let [generationData, setGenerationData] = useState(null)
    let [isReady, setIsReady] = useState(false)
    let [isGenerating, setIsGenerating] = useState(false)
    
    let generate = () => {
        const socket = io('https://aistories.herokuapp.com')
        setIsReady(false)
        setIsGenerating(true);
        setGenerationData(null)

        socket.emit("generate", "world");

        socket.on('generate_update', (data) => {
            console.log('generate_update', data)
            setGenerationData(data)
        })

        socket.on('generate_ready', (data) => {
            console.log('generated ready', data)
            setIsReady(true)
            setIsGenerating(false)
            socket.disconnect()
        })
    }

    let preview = () => {}

    return (
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
    ) 
}