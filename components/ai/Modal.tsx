import { Dialog, Transition } from '@headlessui/react'
import { Fragment } from 'react'

export default function Modal({isOpen, closeModal, randomPost, getRandomStory}) {

  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 z-10 overflow-y-auto"
          onClose={closeModal}
        >
          <div className="min-h-screen px-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0 bg-gray-800 bg-opacity-80 transition-opacity" />
            </Transition.Child>

            {/* This element is to trick the browser into centering the modal contents. */}
            <span
              className="inline-block h-screen align-middle"
              aria-hidden="true"
            >
              &#8203;
            </span>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <div className="inline-block w-full max-w-md my-8 overflow-hidden align-middle transition-all transform bg-white shadow-2xl rounded-sm text-left">
                    <div className="w-full flex justify-between p-3">
                    <div className="flex">
                        <div className="rounded-full h-8 w-8 bg-gray-500 flex items-center justify-center overflow-hidden">
                            <img src="https://i.pinimg.com/originals/b2/a3/61/b2a36142f4a84c6b5dd221d952d1d424.jpg" alt="profilepic"/>
                        </div>
                        <span className="pt-1 ml-2 font-bold text-sm">{randomPost.userName}</span>
                    </div>
                    <span className="px-2 hover:bg-gray-300 cursor-pointer rounded"><i className="fas fa-ellipsis-h pt-2 text-lg"></i></span>
                    </div>
                    <div className="bg-green-300 w-full h-full">
                      <img className="object-cover max-h-96 min-h-full w-full" src={randomPost.image}/>    
                    </div>
                    {/* <img className="w-full bg-cover" src={randomPost.image}/> */}
                    <div className="px-3 pb-2">
                    <div className="pt-2">
                        <i className="far fa-heart cursor-pointer"></i>
                        <span className="text-sm text-gray-400 font-medium">{randomPost.likes} likes</span>
                    </div>
                    <div className="pt-1">
                        <div className="mb-2 text-sm">
                        <span className="font-medium mr-2">{randomPost.userName}</span> 
                            {randomPost.emojis && randomPost.emojis.map(emoji => (
                                <span>{emoji} </span>
                            ))}

                            {randomPost.story}

                            {randomPost.keywords && randomPost.keywords.map(keyword => (
                                <span> #{keyword}</span>
                            ))}
                        </div>
                    </div>
                    <div className="text-sm mb-2 text-gray-400 cursor-pointer font-medium">View all 14 comments</div>
                    <div className="mb-2">
                        <div className="mb-2 text-sm">
                        <span className="font-medium mr-2">{randomPost.commentUserName}</span> {randomPost.comment}
                        </div>
                    </div>
                    </div>

                <div className="m-4">
                  <button
                    type="button"
                    className="inline-flex justify-center px-4 py-2 text-sm font-medium text-gray-900 bg-gray-100 border border-transparent rounded-sm hover:bg-gray-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-gray-500"
                    onClick={getRandomStory}
                  >
                    Refresh
                  </button>
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </>
  )
}
