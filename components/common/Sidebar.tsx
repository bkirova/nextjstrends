export default function Sidebar(props) {
    return (
      <div className="flex lg:pt-40 pr-10">
        <ul className="flex flex-col w-full">
          <p className="font-medium text-gray-700 mb-2 font-bold" >Hi there!</p>
          <p className="font-medium text-gray-500 font-semibold">All of the content of this website is generated or processed by ML Algorithms!</p>
          <p className="font-medium text-gray-500 mb-4 font-semibold">Learn more <a href="/about" className="font-extrabold text-gray-800">here</a>.</p>
        </ul>
      </div>
    )
}