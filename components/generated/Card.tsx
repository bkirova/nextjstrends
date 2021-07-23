import { motion, AnimatePresence } from "framer-motion"
export default function Card(props: any) {

    return (
        <div className={`inline-block text-gray-600 bg-white ${props.hasMargin ? 'mx-3 mb-10' : ''} rounded-lg flex flex-col custom-shadow`}>
            <AnimatePresence exitBeforeEnter>
                {
                    props.item ? (
                    <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    key="expanded"
                    >
                        <div className="w-full flex justify-between p-3 h-14">
                            <div className="flex">
                                <div className="rounded-full h-8 w-8 bg-gray-500 flex items-center justify-center overflow-hidden">
                                    <img src="/images/robot.jpg" alt="profilepic"/>
                                </div>
                                <span className="pt-1 ml-2 font-bold text-sm">{props.item.userName}</span>
                            </div>
                            <span className="px-2 hover:bg-gray-300 cursor-pointer rounded"><i className="fas fa-ellipsis-h pt-2 text-lg"></i></span>
                        </div>

                        <AnimatePresence exitBeforeEnter>
                            <motion.img
                            className='custom-image'
                            key={props.item.image}
                            src={props.item.image}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 1}}
                            />
                        </AnimatePresence>
                        <div className="h-44">
                            <div className="p-3">
                                <div className="h-4">
                                    <i className="far fa-heart cursor-pointer"></i>
                                    <span className="text-sm text-gray-400 font-medium">{props.item.likes} likes</span>
                                </div>
                                <div className="h-14">
                                    <div className="mt-2 text-sm">
                                    <span className="font-medium mr-2">{props.item.userName}</span> 
                                        {props.item.emojis && props.item.emojis.map((emoji, index) => (
                                            <span key={index}>{emoji} </span>
                                        ))}

                                        {props.item.story}

                                        {props.item.tags && props.item.tags.map((keyword, index) => (
                                            <span key={keyword}> #{keyword}</span>
                                        ))}
                                    </div>
                                </div>
                                <div className="h-4 text-sm mt-2 text-gray-400 cursor-pointer font-medium">View all 14 comments</div>
                                <div className="h-4 mt-2">
                                    <div className="text-sm">
                                    <span className="font-medium mr-2">{props.item.commentUserName}</span> {props.item.comment}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                    ) : (
                    <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    key="collapsed"
                    >
                        <div className="flex items-center p-3 h-14">
                            <div data-placeholder className="h-8 w-8 mr-2 rounded-full bg-gray-200"></div>
                            <div data-placeholder className="h-5 w-40 bg-gray-200"></div>
                        </div>

                        <div data-placeholder className='custom-image bg-gray-200'></div>
                        
                        <div className="h-44">
                            <div className="p-3">
                                <div data-placeholder className="h-4 w-20 bg-gray-200"></div>
                                <div data-placeholder className="h-14 w-full mt-2 bg-gray-200"></div>
                                <div data-placeholder className="h-4 w-40 mt-2 bg-gray-200"></div>
                                <div data-placeholder className="h-4 w-20 mt-2 bg-gray-200"></div>
                            </div>
                        </div>
                </motion.div>
                    )
                }
            </AnimatePresence>
        </div>
    )
}