export default function CardPlaceholder(props) {
    return (
		<div className={`bg-white rounded-lg flex flex-col shadow-lg opacity-40 ${props.isPulsing ? 'animate-pulse' : ''}`}>
            <div className="flex p-5">
                <div data-placeholder className="mr-2 h-10 w-10 rounded-full overflow-hidden relative bg-gray-200"></div>
                <div className="flex flex-col justify-between items-center">
                    <div data-placeholder className="mb-2 h-5 w-40 overflow-hidden relative bg-gray-200"></div>
                </div>
            </div>

            <div data-placeholder className='h-72 w-full overflow-hidden relative bg-gray-200'></div>
            <div data-placeholder className="m-6 h-5 w-40 overflow-hidden relative bg-gray-200"></div>
        </div>
    )
}