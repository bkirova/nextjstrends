export default function Sidebar(props) {

    return (
		<div className="flex lg:pt-40 pr-10 bg-white">
			<ul className="flex flex-col w-full">
      <div className="absolute top-5 left-2 w-10 h-10 bg-pink-300 rounded-full mix-blend-multiply filter blur-md opacity-90"></div>
      <div className="absolute top-20 left-20 w-24 h-24 bg-yellow-300 rounded-full mix-blend-multiply filter blur-lg opacity-40"></div>
                <p className="font-medium text-gray-700 mb-2 font-bold" >Hi there!</p>
                <p className="font-medium text-gray-500 font-semibold">All of the content of this website is generated or processed by ML Algorithms!</p>
                <p className="font-medium text-gray-500 mb-4 font-semibold">Learn more <a href="/about" className="font-extrabold text-gray-800">here</a>.</p>
			</ul>
		</div>)
}