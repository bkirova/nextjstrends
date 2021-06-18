export default function Sidebar(props) {

    return (
		<div class="flex pt-40 pr-10 bg-white">
			<ul class="flex flex-col w-full">
                <p class="font-medium text-gray-700 mb-2 font-bold" >Hi there!</p>
                <p class="font-medium text-gray-500 mb-6 font-semibold">All of the content of this website is generated or at least processed by ML Algorithm. The data might be incorrect and wierd.</p>
                <p class="font-medium text-gray-500 mb-6 font-semibold">Please learn more <a href="/about" class="font-extrabold text-gray-800">here</a>.</p>

				<li class="my-px">
					<a href="#"
					   class="flex flex-row items-center h-20 text-gray-500">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
						<span class="ml-3 font-medium text-sm text-gray-400 uppercase">Today's Top</span>
					</a>
				</li>

                <li class="my-px">
					<a href="#"
					   class="flex flex-row items-center h-20 text-gray-500">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                <path d="M11 3a1 1 0 10-2 0v1a1 1 0 102 0V3zM15.657 5.757a1 1 0 00-1.414-1.414l-.707.707a1 1 0 001.414 1.414l.707-.707zM18 10a1 1 0 01-1 1h-1a1 1 0 110-2h1a1 1 0 011 1zM5.05 6.464A1 1 0 106.464 5.05l-.707-.707a1 1 0 00-1.414 1.414l.707.707zM5 10a1 1 0 01-1 1H3a1 1 0 110-2h1a1 1 0 011 1zM8 16v-1h4v1a2 2 0 11-4 0zM12 14c.015-.34.208-.646.477-.859a4 4 0 10-4.954 0c.27.213.462.519.476.859h4.002z" />
                            </svg>
						<span class="ml-3 font-medium text-sm text-gray-400 uppercase">AI Generated</span>
					</a>
				</li>

                <li class="my-px">
					<a href="#"
					   class="flex flex-row items-center h-20 text-gray-500">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                <path fill-rule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clip-rule="evenodd" />
                            </svg>
						<span class="ml-3 font-medium text-sm text-gray-400 uppercase">Instagram</span>
					</a>
				</li>
                
			</ul>
		</div>)
}