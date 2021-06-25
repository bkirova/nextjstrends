
import Layout from '../components/layouts/ai'

import React from "react";
import ImageUploading from "react-images-uploading";
import Modal from "../components/modal";
import { useState } from 'react'
import imageAnalysisData from '../data/image_analysis.json'

export default function AI() {
  
  const [images, setImages] = React.useState([]);
  const [isDragDropVisible, setIsDragDropVisible] = React.useState(true);

  const onChange = (imageList) => {
    setImages(imageList);
    setImageData(getRandomAnalysis());
    setIsDragDropVisible(false);
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

    return {
      image: images[0] ? images[0].data_url : '',
      likes: Math.floor(Math.random() * (1000 - 1)) + 1,
      userName,
      story,
      keywords: imageData.keywords,
      emojis: imageData.emojis,
      commentUserName,
      comment
    };
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

      <div className="text-2xl font-bold text-gray-500 tracking-wide space-y-6 mb-6 mt-8 lg:mt-20">Upload image and get tags and stories generated specificly for it.</div>

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
              onClick={onImageUpload} {...dragProps} className={`${isDragDropVisible ? 'flex' : 'hidden'} w-full h-64 items-center content-center justify-center bg-white-500 hover:bg-gray-100 font-bold rounded border-4`}>
                Click or Drop here
            </div>

            {imageList.map((image, index) => (
              <div key={index} className="image-item py-5">
                <div style={isDragging ? { color: "red" } : null}
                  onClick={onImageUpload} {...dragProps} className={`flex w-full items-center content-center justify-center bg-white-500 hover:bg-gray-100 mb-2`}>
                    {/* <img src={image.data_url} alt=""/> */}
                    <div class="bg-green-300 w-full h-1/2">
                      <img class="object-cover h-full w-full" src={image.data_url}/>    
                    </div>

                </div>

                <div className="flex items-center content-center justify-center">
                  <button onClick={showModal} className="inline-flex items-center bg-gray-500 hover:bg-gray-400 text-white font-bold py-2 px-4 border-b-4 border-gray-700 hover:border-gray-500 rounded mr-2">
                    <span className="">Get Random Post</span>
                  </button>
                  
                  <button onClick={showModal} className="inline-flex items-center bg-gray-500 hover:bg-gray-400 text-white font-bold py-2 px-4 border-b-4 border-gray-700 hover:border-gray-500 rounded">
                    <span className="">Set Custom Vibes</span>
                  </button>
                </div>

                <div className="container min-w-full pt-10">
                  <div className="mb-10">
                    <h2 className="sm:text-lg sm:leading-snug font-semibold tracking-wide uppercase text-gray-800 mb-2">keywords</h2>

                    {imageData.keywords && imageData.keywords.map(keyword => (
                      <span className="inline-block rounded-full text-white bg-black text-xs font-bold mr-1 md:mr-2 mb-2 px-2 md:px-4 py-1 opacity-90 hover:opacity-100">
                        {keyword}
                      </span>
                    ))}
                  </div>

                  <div className="mb-10">
                    <h2 className="sm:text-lg sm:leading-snug font-semibold tracking-wide uppercase text-gray-800 mb-2 mt-5">Vibes</h2> 
                    {imageData.vibes && imageData.vibes.map(vibe => (
                      <div className={`inline-block text-white bg-${vibe.sentiment}-400 hover:bg-${vibe.sentiment}-500 duration-300 text-xs font-bold mr-1 md:mr-2 mb-2 px-2 md:px-4 py-1 opacity-90 hover:opacity-100`}>
                        {vibe.value}
                      </div>
                    ))}
                  </div>

                  <div className="mb-10">
                    <h2 className="sm:text-lg sm:leading-snug font-semibold tracking-wide uppercase text-gray-800 mb-2 mt-5">headlines</h2>
                    {imageData.headlines && imageData.headlines.map(headline => (
                      <p className="text-xl lg:text-2xl leading-none font-extrabold text-gray-700 tracking-tight mb-2">{headline}</p>
                    ))}
                  </div>

                  <div className="mb-10">
                    <h2 className="sm:text-lg sm:leading-snug font-semibold tracking-wide uppercase text-gray-800 mb-2 mt-5">emojis</h2>
                    <p className="text-xl lg:text-2xl leading-none font-extrabold text-gray-800 tracking-tight mb-8">
                      {imageData.emojis && imageData.emojis.map(emoji => (
                        <span>{emoji}</span>
                      ))}
                    </p>
                  </div>

                  <div className="mb-10">
                    <h2 className="sm:text-lg sm:leading-snug font-semibold tracking-wide uppercase text-gray-800 mb-2">stories</h2>
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