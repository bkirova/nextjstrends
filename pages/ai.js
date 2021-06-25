
import Layout from '../components/layouts/home'

import React from "react";
import ImageUploading from "react-images-uploading";
import Modal from "../components/modal";
import { useState } from 'react'
import imageAnalysisData from '../data/image_analysis.json'
require('@tensorflow/tfjs-backend-cpu');
require('@tensorflow/tfjs-backend-webgl');
const cocoSsd = require('@tensorflow-models/coco-ssd');

export default function AI() {
  
  const [images, setImages] = React.useState([]);
  const [predictions, setPredictions] = React.useState([]);
  const [isDragDropVisible, setIsDragDropVisible] = React.useState(true);

  const onChange = async (imageList) => {
    setImages(imageList);
    setImageData(getRandomAnalysis());
    setIsDragDropVisible(false);

    const img = document.getElementById('img');
    const model = await cocoSsd.load();

    drawImage(imageList[0].data_url);

    setTimeout(async () => {
      // Classify the image.
      const predictions = await model.detect(img);
      setPredictions(predictions);
      console.error(predictions)
      predictions.map(p => drawObject(p.bbox))
    }, 2000)
    
  };

  let [isOpen, setIsOpen] = useState(false)
  let [imageData, setImageData] = useState({
    "keywords": [],
    "vibes": [],
    "headlines": [],
    "emojis": [],
    "stories": []
  })
  let [randomPost, setRandomPost] = useState(generateRandomPost())

  function closeModal() {
    setIsOpen(false)
  }

  function openModal() {
    setIsOpen(true)
  }

  function getRandomAnalysis() {
    return imageAnalysisData.images[Math.floor(Math.random()*imageAnalysisData.images.length)];
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
        Array(randomNumber).fill().map((x,i)=>emojisRandom.push(e))
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

  function drawImage(data_url) {
    const canvas = document.getElementById("canvas");
    const ctx = canvas.getContext("2d");
    
    var image = new Image();
    
    image.src = data_url
    image.onload = function() {
      canvas.width = image.width;
      canvas.height = image.height;
      canvas.style.width = "340px";
      canvas.style.height = "600px";
      //ctx.drawImage(image, 0, 0);
      drawImageScaled(image, ctx)

      //ctx.scale(-1, 1);
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

  function drawObject(bbox) {
    const colors = ['fddd1f', 'ef2933', '156af9', '87f140'];
    let randomColor = colors[Math.floor(Math.random()*colors.length)];

    const x = bbox[0];
    const y = bbox[1];
    const width = bbox[2];
    const height = bbox[3];
    
    const canvas = document.getElementById("canvas");
    const ctx = canvas.getContext("2d");

    ctx.strokeStyle = `#${randomColor}`;
    ctx.fillStyle = `#${randomColor}`;
    ctx.strokeRect(x, y, width, height);
    ctx.fillText('test', x+5, y+10);

  }

  const getRandomStory = () => {
    setRandomPost(generateRandomPost())
  }

  function showModal() {
    getRandomStory();
    openModal()
  }

  // not enough info on the photo? or you want to give the algorithm your personal vibe, enter vibes here, help the algorithm
  return (
    <Layout>
      <Modal isOpen={isOpen} closeModal={closeModal} randomPost={randomPost} getRandomStory={getRandomStory}/>

      <div className="text-1xl font-bold text-gray-500 tracking-wide space-y-6 mb-4 mt-2 lg:mt-20">Upload an image and get headlines and stories generated by AI.</div>

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
              onClick={onImageUpload} {...dragProps} className={`${isDragDropVisible ? 'flex' : 'hidden'} w-full h-64 items-center content-center justify-center bg-white-500 hover:bg-gray-100 text-2xl font-extrabold text-gray-700 rounded border-4 animate-pulse`}>
                Click or Drop here
            </div>

            {imageList.map((image, index) => (
              <div key={index} className="image-item py-5">
                <div style={isDragging ? { color: "red" } : null}
                  onClick={onImageUpload} {...dragProps} className={`flex w-full items-center content-center justify-center bg-white-500 hover:bg-gray-100 mb-2`}>
                    <div className="bg-green-300 w-full h-1/2">
                      <img id="img" className=" hidden object-cover max-h-96 w-full" src={image.data_url}/>   
                      <canvas id="canvas"></canvas> 
                      {/* {predictions.map((prediction) => (
                        <div>
                        <span>{prediction.class}, {prediction.score}</span>
                        
                        </div>
                      ))} */}
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

                    {imageData.keywords && imageData.keywords.map(keyword => (
                      <span className="inline-block rounded-full text-white bg-black text-xs font-bold mr-1 mb-2 px-2 py-1 opacity-100">
                        {keyword}
                      </span>
                    ))}
                  </div>

                  <div className="mb-10">
                    <h2 className="sm:text-lg sm:leading-snug font-bold tracking-wide uppercase text-gray-800 mb-2 mt-5">Vibes</h2> 
                    {imageData.vibes && imageData.vibes.map(vibe => (
                      <div className={`inline-block text-white bg-${vibe.sentiment}-400 text-xs font-bold mr-1 mb-2 px-2 py-1 opacity-100`}>
                        {vibe.value}
                      </div>
                    ))}
                  </div>

                  <div className="mb-10">
                    <h2 className="sm:text-lg sm:leading-snug font-bold tracking-wide uppercase text-gray-800 mb-2 mt-5">headlines</h2>
                    {imageData.headlines && imageData.headlines.map(headline => (
                      <p className="text-xl lg:text-2xl leading-none font-extrabold text-gray-600 mb-2">{headline}</p>
                    ))}
                  </div>

                  <div className="mb-10">
                    <h2 className="sm:text-lg sm:leading-snug font-bold tracking-wide uppercase text-gray-800 mb-2 mt-5">emojis</h2>
                    <p className="text-xl lg:text-2xl leading-none font-extrabold text-gray-800 tracking-tight mb-8">
                      {imageData.emojis && imageData.emojis.map(emoji => (
                        <span>{emoji}</span>
                      ))}
                    </p>
                  </div>

                  <div className="mb-10">
                    <h2 className="sm:text-lg sm:leading-snug font-bold tracking-wide uppercase text-gray-800 mb-2">stories</h2>
                    {imageData.stories && imageData.stories.map(story => (
                        <div className="text-xl text-gray-500 tracking-wide space-y-6 mb-6">{story}</div>
                        // <div className="text-xl text-gray-500 tracking-wide space-y-6 mb-6">Worried about remembering all of <span className="font-extrabold text-pink-400">these</span> className names? The Tailwind CSS IntelliSense extension for <span className="font-extrabold text-pink-400">VS Code</span> has you covered.</div>
                    ))}
                  </div>
              </div>
              </div>
            ))}
          </div>
        )}
      </ImageUploading>
    </Layout>
  ) 
}