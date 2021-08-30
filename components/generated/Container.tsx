import Card from './Card'
import io from 'socket.io-client'
import { useState } from 'react'
import {motion, useAnimation} from 'framer-motion'
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, {Pagination, Navigation} from 'swiper/core';

SwiperCore.use([Pagination, Navigation]);

interface Item {
    image: string;
}

export default function Container() {
    let [generatedData, setGeneratedData] = useState([])
    let [generationData, setGenerationData] = useState(null)
    let [isReady, setIsReady] = useState(false)
    let [isGenerating, setIsGenerating] = useState(false)
    const controls = useAnimation();

    let generate = () => {
        const socket = io('https://aistories.herokuapp.com')
        setIsReady(false)
        setIsGenerating(true);
        setGenerationData(null);
        setGeneratedData([]);

        socket.emit("generate", "world");
        socket.on('generate_update', (data) => {
            console.log('generate_update', data)
            setGenerationData(data)
            generatedData.push(data)
            setGeneratedData(generatedData);
        })

        socket.on('generate_ready', (data) => {
            console.log('generated ready', data)
            setIsReady(true)
            setIsGenerating(false)
            // controls.start({
            //     scale: [1.1, 1],
            //     transition: { duration: 1 }
            //   });
            socket.disconnect()
        })
    }
    
    let handlePreview = () => {
        console.error('handle preview')
    }

    return (
        <div className="mt-10 mb-10 flex flex-col items-center justify-center">
            <div className="relative w-full max-w-lg">

                <div className="absolute top-60 left-4 w-36 h-36 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-90 animate-pulse"></div>
                <div className="absolute top-0 left-4 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70"></div>
                <div className="absolute top-0 right-4 w-36 h-36 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse "></div>
                <div className="absolute top-20 right-20 w-20 h-20 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-90 animate-pulse "></div>
                <div className="absolute top-100 right-500 w-36 h-36 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"></div>

                <motion.div  
                animate={controls}
                // initial={{ opacity: 0 }}
                // animate={{ opacity: 1 }}
                // transition={{
                //     duration: 0.5,
                //     delay: 0.1
                // }}
                className="w-full relative space-y-4">

                    <div className={`p-5 ${isGenerating ? 'opacity-30' : ''} bg-white rounded-lg flex items-center justify-between space-x-8 custom-shadow`}>
                        <div className="flex-1 flex justify-between items-center">
                        <input disabled={isGenerating} className="w-full text-base mr-3 py-2 border-b border-gray-300 focus:outline-none focus:border-purple-500" type="" placeholder="Funny cute dogs"/>
                        
                        <button type="button" onClick={() => generate()} disabled={isGenerating} className="p-2 bg-purple-400 text-white text-center text-base font-semibold rounded-lg">
                            Generate
                        </button>
                        </div>
                    </div>
                    
                    <div>
                        <Card isGenerating={isGenerating} isReady={isReady} item={generationData} handlePreview={handlePreview}/>
                    </div>

                    {
                        generatedData.length>0 ? (
                            <div>
                                <p className="mb-3 text-lg font-medium text-gray-600">
                                    Generations
                                </p>
                                <div className="bg-white flex overflow-x-auto custom-shadow rounded-lg"> 
                                    {generatedData.map((item:Item, index) => (
                                        <img key={index} src={item.image} alt="" className="w-60 h-60 py-3 pl-3"/>
                                    ))}
                                </div>
                            </div>
                        ) : (
                            <div>
                                <div data-placeholder className="h-8 w-60 mb-3 bg-gray-200"></div>
                                <div data-placeholder className='bg-white w-full h-60 custom-shadow rounded-lg'></div>
                            </div>
                        ) 
                    }
                    
                </motion.div>
            </div>
            {/* <div className="mt-10 max-w-2xl">
            <Swiper slidesPerView={3} spaceBetween={30} slidesPerGroup={3} navigation={true} className="mySwiper">
                {generatedData.map((item:Array<any>, index) => (
                        <SwiperSlide>
                            <Card key={index} hasMargin={true} item={item}/>
                            <img
                            className='custom-image'
                            key={item.image}
                            src={item.image}
                            />
                        </SwiperSlide>
                    ))}
            </Swiper>
            </div> */}
        </div>
    ) 
}