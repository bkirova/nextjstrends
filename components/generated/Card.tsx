export default function Card(props: any) {

    return (
        <div className={`bg-white rounded-lg flex flex-col shadow-lg ${props.isPulsing ? 'animate-pulse opacity-40' : ''}`}>
            {(function() {
                if (props.item) {
                    return <div>
                        <div className="w-full flex justify-between p-3">
                            <div className="flex">
                                <div className="rounded-full h-8 w-8 bg-gray-500 flex items-center justify-center overflow-hidden">
                                    <img src="/images/robot.jpg" alt="profilepic"/>
                                </div>
                                <span className="pt-1 ml-2 font-bold text-sm">{props.item.userName}</span>
                            </div>
                            <span className="px-2 hover:bg-gray-300 cursor-pointer rounded"><i className="fas fa-ellipsis-h pt-2 text-lg"></i></span>
                        </div>

                        <img className='object-cover h-72 w-full' src={props.item.image}/>
                        <div className="px-3 pb-2">
                            <div className="pt-2">
                                <i className="far fa-heart cursor-pointer"></i>
                                <span className="text-sm text-gray-400 font-medium">{props.item.likes} likes</span>
                            </div>
                            <div className="pt-1">
                                <div className="mb-2 text-sm">
                                <span className="font-medium mr-2">{props.item.userName}</span> 
                                    {props.item.emojis && props.item.emojis.map(emoji => (
                                        <span>{emoji} </span>
                                    ))}

                                    {props.item.story}

                                    {props.item.tags && props.item.tags.map(keyword => (
                                        <span> #{keyword}</span>
                                    ))}
                                </div>
                            </div>
                            <div className="text-sm mb-2 text-gray-400 cursor-pointer font-medium">View all 14 comments</div>
                            <div className="mb-2">
                                <div className="mb-2 text-sm">
                                <span className="font-medium mr-2">{props.item.commentUserName}</span> {props.item.comment}
                                </div>
                            </div>
                        </div>
                    </div>
                } else {
                    return <div>
                        <div className="flex items-center m-3">
                            <div data-placeholder className="h-8 w-8 mr-2 rounded-full bg-gray-200"></div>
                            <div data-placeholder className="h-5 w-40 bg-gray-200"></div>
                        </div>

                        <div data-placeholder className='h-72 w-full bg-gray-200'></div>
                       
                        <div className="m-3">
                            <div data-placeholder className="h-4 w-20 bg-gray-200"></div>
                            <div data-placeholder className="h-14 w-full mt-2 bg-gray-200"></div>
                            <div data-placeholder className="h-4 w-40 mt-2 bg-gray-200"></div>
                            <div data-placeholder className="h-4 w-20 mt-2 bg-gray-200"></div>
                        </div>
                    </div>
                }
            })()}

        </div>
            
    )
}