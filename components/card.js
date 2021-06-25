export default function Card({item}) {

    return (
        <div className="relative bg-white py-4 px-6 rounded-xl w-64 my-2 shadow-2xl">
           
        <div className="mt-2">
            <p className="text-xl font-semibold my-2">{item.title}</p>
            <div className="flex space-x-2 text-gray-400 text-sm">
                 <p>{item.category}</p> 
            </div>
            <div className="border-t-2"></div>

            <div className="my-2">
                <div className="text-base text-gray-400 font-semibold">
                    <p>Today</p>
                </div>
            </div>
        </div>
    </div>
    )}