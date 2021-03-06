import Modal from './Modal'
import io from 'socket.io-client'
import ImageUploading from "react-images-uploading";
import { useState } from 'react'
import imageAnalysisData from '../../data/image_analysis.json'
import React from "react";
require('@tensorflow/tfjs-backend-cpu');
require('@tensorflow/tfjs-backend-webgl');
import {load} from '@tensorflow-models/coco-ssd';

export default function Container() {
    const [images, setImages] = React.useState([]);
    const [predictions, setPredictions] = React.useState([]);
    const [isDragDropVisible, setIsDragDropVisible] = React.useState(true);
    const [isOpen, setIsOpen] = useState(false)
    const [imageData, setImageData] = useState({
      "keywords": [],
      "vibes": [],
      "headlines": [],
      "emojis": [],
      "stories": []
    })
    let [randomPost, setRandomPost] = useState(generateRandomPost())

    let alanize = () => {
        const socket = io('https://aistories.herokuapp.com')
    
        socket.emit("analize", "world");

        socket.on('analize_update', (data) => {
            console.log('analize_update', data)
            setImageData(data);
        })

        socket.on('analize_ready', (data) => {
            console.log('analized ready', data)
            socket.disconnect()
        })
    }


    const onChange = async (imageList) => {
      setImages(imageList);
      setIsDragDropVisible(false);
      drawImage(imageList[0].data_url);
      alanize();

    //   const img = document.getElementById('img') as HTMLImageElement;
    //   const model = await load();
    //   setTimeout(async () => {
    //     // Classify the image.
    //     const predictions = await model.detect(img);
    //     setPredictions(predictions);
    //     console.error(predictions)
    //     predictions.map(p => drawObject(p))
    //   }, 2000)
      
    };
  
    function closeModal() {
      setIsOpen(false)
    }
  
    function openModal() {
      setIsOpen(true)
    }
  
    function generateRandomPost() {  
      let userName = imageAnalysisData.userNames[Math.floor(Math.random()*imageAnalysisData.userNames.length)];
      let commentUserName = imageAnalysisData.userNames[Math.floor(Math.random()*imageAnalysisData.userNames.length)];
      let comment = imageAnalysisData.comments[Math.floor(Math.random()*imageAnalysisData.comments.length)];
      let story = imageData.stories[Math.floor(Math.random()*imageData.stories.length)];
  
      let emojisRandom = [];
      imageData.emojis.forEach(e => {
        let randomNumber = Math.floor(Math.random() * (4 - 1)) + 1;
        let randomboolean = Math.random() < 0.3;
  
        if(randomboolean) {
          Array(randomNumber).fill("").map((x,i)=>emojisRandom.push(e))
        } else {
          emojisRandom.push(e)
        }
  
      })
  
      return {
        image: images[0] ? images[0].data_url : '',
        likes: Math.floor(Math.random() * (1000 - 1)) + 1,
        userName,
        story,
        keywords: imageData.keywords,
        emojis: emojisRandom,
        commentUserName,
        comment
      };
    }
  
    function drawImage(data_url: string) {
      const canvas = document.getElementById("canvas") as HTMLCanvasElement;
      const ctx = canvas.getContext("2d");
      
      var image = new Image();
      
      image.src = data_url
      image.onload = function() {
        canvas.width = image.width;
        canvas.height = image.height;
        canvas.style.width = "100%";
        canvas.style.height = "100%";
        drawImageScaled(image, ctx)
      };
      
    }
  
    function drawImageScaled(img, ctx) {
      var canvas = ctx.canvas ;
      var hRatio = canvas.width  / img.width    ;
      var vRatio =  canvas.height / img.height  ;
      var ratio  = Math.min ( hRatio, vRatio );
      var centerShift_x = ( canvas.width - img.width*ratio ) / 2;
      var centerShift_y = ( canvas.height - img.height*ratio ) / 2;  
      ctx.clearRect(0,0,canvas.width, canvas.height);
      ctx.drawImage(img, 0,0, img.width, img.height,
                         centerShift_x,centerShift_y,img.width*ratio, img.height*ratio);  
   }
  
    function drawObject(prediction) {
      const colors = ['fddd1f', 'ef2933', '156af9', '87f140'];
      let randomColor = colors[Math.floor(Math.random()*colors.length)];
  
      const x = prediction.bbox[0];
      const y = prediction.bbox[1];
      const width = prediction.bbox[2];
      const height = prediction.bbox[3];
      
      const canvas = document.getElementById("canvas") as HTMLCanvasElement;
      const ctx = canvas.getContext("2d");
  
      ctx.strokeStyle = `#${randomColor}`;
      ctx.lineWidth = 5;
      ctx.fillStyle = `#${randomColor}`;
      ctx.strokeRect(x, y, width, height);
      ctx.fillText(`${prediction.class}: ${parseInt(prediction.score)}%`, x+5, y+10);
  
    }
  
    const getRandomStory = () => {
      setRandomPost(generateRandomPost())
    }
  
    function showModal() {
      getRandomStory();
      openModal()
    }

    return (
        <div className="mt-10 mb-10 flex items-center justify-center">
           <Modal isOpen={isOpen} closeModal={closeModal} randomPost={randomPost} getRandomStory={getRandomStory}/>
            <div className="relative w-full max-w-lg">
                <div className="text-1xl font-bold text-gray-500 tracking-wide space-y-6 mb-4 mt-2 lg:mt-20">Upload an image and get headlines and stories generated by AI.</div>
                <div className="absolute top-60 left-4 w-36 h-36 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-90 animate-pulse"></div>
                <div className="absolute top-80 left-4 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70"></div>

                <div className="absolute top-0 right-4 w-36 h-36 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse "></div>
                <div className="absolute top-20 right-20 w-20 h-20 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-90 animate-pulse "></div>

                <div className="absolute top-100 right-500 w-36 h-36 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"></div>
                <div className="w-full relative space-y-4">
                <ImageUploading
                    value={images}
                    onChange={onChange}
                    dataURLKey="data_url"
                >
                    {({
                    imageList,
                    onImageUpload,
                    isDragging,
                    dragProps
                    }) => (
                    <div className="upload__image-wrapper ">
                        <div style={isDragging ? { color: "red" } : null}
                        onClick={onImageUpload} {...dragProps} className={`${isDragDropVisible ? 'flex' : 'hidden'} p-20 h-80 w-full lg:max-w-xl bg-white hover:bg-opacity-60 bg-opacity-30 text-center flex flex-col items-center justify-center items-center  rounded-lg border-4 border-dashed group text-center`}>
                            <p className="pointer-none text-gray-500 "><span className="text-sm">Drag and drop</span> files here <br /> or <a href="" id="" className="text-pink-400 hover:underline">select a file</a> from your computer</p>
                        </div>

                        {imageList.map((image, index) => (
                        <div key={index} className="image-item py-5">
                            <div style={isDragging ? { color: "red" } : null}
                            onClick={onImageUpload} {...dragProps} className={`flex w-full items-center content-center justify-center mb-2`}>
                                <div className="bg-green-300 w-full h-1/2">
                                <img id="img" className=" hidden object-cover max-h-96 w-full" src={image.data_url}/>   
                                <canvas id="canvas"></canvas> 
                                </div>
                            </div>

                            <div className="flex items-center content-center justify-center">
                            <button onClick={showModal} className="inline-flex items-center bg-gray-500 hover:bg-gray-400 text-white font-bold py-2 px-4 border-b-4 border-gray-700 hover:border-gray-500 rounded mr-2">
                                <span className="">Get Random Post</span>
                            </button>
                            
                            <button className="inline-flex items-center bg-gray-500 hover:bg-gray-400 text-white font-bold py-2 px-4 border-b-4 border-gray-700 hover:border-gray-500 rounded">
                                <span className="">Set Custom Vibes</span>
                            </button>
                            </div>

                            <div className="container min-w-full pt-10">
                            <div className="mb-10">
                                <h2 className="sm:text-lg sm:leading-snug font-bold tracking-wide uppercase text-gray-800 mb-2">keywords</h2>

                                {imageData.keywords && imageData.keywords.map((keyword, index) => (
                                <span key={index} className="inline-block rounded-full text-white bg-black text-xs font-bold mr-1 mb-2 px-2 py-1 opacity-100">
                                    {keyword}
                                </span>
                                ))}
                            </div>

                            <div className="mb-10">
                                <h2 className="sm:text-lg sm:leading-snug font-bold tracking-wide uppercase text-gray-800 mb-2 mt-5">Vibes</h2> 
                                {imageData.vibes && imageData.vibes.map((vibe, index) => (
                                <div key={index} className={`inline-block text-white bg-${vibe.sentiment}-400 text-xs font-bold mr-1 mb-2 px-2 py-1 opacity-100`}>
                                    {vibe.value}
                                </div>
                                ))}
                                {predictions.map((prediction, index) => (
                                    <div key={index} className='inline-block text-xs font-bold mr-1 mb-2 px-2 py-1 opacity-100'>
                                    {prediction.class},
                                    </div>
                                ))}
                            </div>

                            <div className="mb-10">
                                <h2 className="sm:text-lg sm:leading-snug font-bold tracking-wide uppercase text-gray-800 mb-2 mt-5">headlines</h2>
                                {imageData.headlines && imageData.headlines.map((headline, index) => (
                                <p key={index} className="text-xl lg:text-2xl leading-none font-extrabold text-gray-600 mb-2">{headline}</p>
                                ))}
                            </div>

                            <div className="mb-10">
                                <h2 className="sm:text-lg sm:leading-snug font-bold tracking-wide uppercase text-gray-800 mb-2 mt-5">emojis</h2>
                                <p className="text-xl lg:text-2xl leading-none font-extrabold text-gray-800 tracking-tight mb-8">
                                {imageData.emojis && imageData.emojis.map((emoji, index) => (
                                    <span key={index}>{emoji}</span>
                                ))}
                                </p>
                            </div>

                            <div className="mb-10">
                                <h2 className="sm:text-lg sm:leading-snug font-bold tracking-wide uppercase text-gray-800 mb-2">stories</h2>
                                {imageData.stories && imageData.stories.map((story, index) => (
                                    <div key={index} className="text-xl text-gray-500 tracking-wide space-y-6 mb-6">{story}</div>
                                    // <div className="text-xl text-gray-500 tracking-wide space-y-6 mb-6">Worried about remembering all of <span className="font-extrabold text-pink-400">these</span> className names? The Tailwind CSS IntelliSense extension for <span className="font-extrabold text-pink-400">VS Code</span> has you covered.</div>
                                ))}
                            </div>
                        </div>
                        </div>
                        ))}
                    </div>
                    )}
                </ImageUploading>
                </div>
                </div>
        </div>
    ) 
}