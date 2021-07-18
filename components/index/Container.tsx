import Card from '../generated/Card'
import { useState, useRef, useEffect } from 'react'
import {motion} from 'framer-motion'

export default function Container(props) {

    let [text, setText] = useState('')
    let [generationData, setGenerationData] = useState(null)
    const buttonRef= useRef(null);
    
    let generate = () => {
        const interval = setInterval(() => {
            console.error(`generate data`);
            let randomItem = props.items[Math.floor(Math.random()*props.items.length)];
            setGenerationData(randomItem)
          }, 1000);
        
          return () => {
            console.error(`clearing interval`);
            clearInterval(interval);
          };
    }

    useEffect(() => {
        setTimeout(() => {
            let text = 'Funny happi dogs'
            let acc = '';
            for (let i = 0; i < text.length; i++) {
                acc += text[i]
                setText(acc)
            }
            buttonRef.current.click();
        }, 1000)

        const interval = setInterval(() => {
            console.error(`generate data`);
            let randomItem = props.items[Math.floor(Math.random()*props.items.length)];
            setGenerationData(randomItem)
          }, 3000);
        
          return () => {
            console.error(`clearing interval`);
            clearInterval(interval);
          };

        
    }, []);

    return (
        <div className="mt-10 mb-10 flex items-center justify-center">
            <div className="relative w-full max-w-lg">

                <div className="absolute top-60 left-4 w-36 h-36 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-90 animate-pulse"></div>
                <div className="absolute top-0 left-4 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70"></div>
                <div className="absolute top-0 right-4 w-36 h-36 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse "></div>
                <div className="absolute top-20 right-20 w-20 h-20 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-90 animate-pulse "></div>
                <div className="absolute top-100 right-500 w-36 h-36 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"></div>

                <motion.div  
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                    duration: 0.3
                }}
                className="w-full relative space-y-4">

                    <div className="p-5 bg-white rounded-lg flex items-center justify-between space-x-8 shadow-2xl">
                        <div className="flex-1 flex justify-between items-center">
                        <input className="w-full text-base mr-3 py-2 border-b border-gray-300 focus:outline-none focus:border-purple-500" onChange={() => {}} type="" placeholder="type object, theme mood" value={text}/>
                        
                        <button type="button" ref={buttonRef} onClick={() => {}} className="p-2 bg-purple-300 hover:bg-purple-400 focus:ring-purple-400 focus:ring-offset-purple-200 text-white transition ease-in duration-200 text-center text-base font-semibold focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
                            Generate
                        </button>
                        </div>
                    </div>

                    <Card item={generationData}/>

                </motion.div>
            </div>
        </div>
    ) 
}