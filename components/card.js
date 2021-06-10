export default function Card() {

    return <div class="content mx-auto flex flex-col w-8/12">
    <div class="flex items-center justify-between w-full my-4 pl-4 sm:pr-4">
        <div class="mr-6">
          <h2 class="text-3xl md:text-4xl font-semibold tracking-tight leading-7 md:leading-10 mb-1 truncate">Today top trends</h2>
          <div class="font-base tracking-tight text-gray-600">Trends are extracted from social media and other info sources.</div>
        </div>
        <div class="flex items-center">
          <button class="bg-gray-900 px-5 py-2 text-sm shadow-sm font-semibold tracking-wider text-white rounded-full hover:bg-gray-800">Add Shop</button>
        </div>
      </div>
    <div class="grid mt-8 gap-8 grid-cols-1 md:grid-cols-3 xl:grid-cols-3">
        <div class="flex flex-col">
            <div class="bg-white shadow-md  rounded-3xl p-4">
                <div class="flex-none lg:flex">
                    <div class=" h-full w-full lg:h-48 lg:w-20   lg:mb-0 mb-3">
                        <img src="/images/twitter.png"
                            alt="Just a flower" class=" w-full  object-scale-down lg:object-cover  lg:h-20 rounded-2xl"/>
                    </div>
                    <div class="flex-auto ml-3 justify-evenly py-2">
                        <div class="flex flex-wrap ">
                            <div class="w-full flex-none text-xs text-blue-700 font-medium ">
                                Twitter
                            </div>
                            <h2 class="flex-auto text-lg font-medium">Dogecoin</h2>
                        </div>
                        <div class="flex py-4 text-sm text-gray-600 max-w-sm">
                            Dogecoin is a cryptocurrency created by software engineers Billy Markus and Jackson Palmer, who decided to create a payment system as a joke.                       
                        </div>
                        <div class="flex p-2 pb-2 border-t border-gray-200 "></div>
                        <div class="flex space-x-3 text-sm font-medium">
                            <button
                                class="mb-2 md:mb-0 bg-gray-900 px-5 py-2 shadow-sm tracking-wider text-white rounded-full hover:bg-gray-800"
                                type="button" aria-label="like">Insights</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="flex flex-col ">
            <div class="bg-white shadow-md  rounded-3xl p-4">
                <div class="flex-none lg:flex">
                    <div class=" h-full w-full lg:h-20 lg:w-20   lg:mb-0 mb-3">
                        <img src="/images/medium.png"
                            alt="Just a flower" class=" w-full  object-scale-down lg:object-cover  lg:h-20 rounded-2xl"/>
                    </div>
                    <div class="flex-auto ml-3 justify-evenly py-2">
                        <div class="flex flex-wrap ">
                            <div class="w-full flex-none text-xs text-blue-700 font-medium ">
                                Medium
                            </div>
                            <h2 class="flex-auto text-lg font-medium">Next.js components</h2>
                        </div>
                        <div class="flex py-4  text-sm text-gray-600 max-w-sm">
                            Next.js is an open-source React front-end development web framework created by Vercel that enables functionality such as server-side rendering.
                        </div>
                        <div class="flex p-2 pb-2 border-t border-gray-200 "></div>
                        <div class="flex space-x-3 text-sm font-medium">
                            <button
                                class="mb-2 md:mb-0 bg-gray-900 px-5 py-2 shadow-sm tracking-wider text-white rounded-full hover:bg-gray-800"
                                type="button" aria-label="like">Insights</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="flex flex-col ">
            <div class="bg-white shadow-md  rounded-3xl p-4">
                <div class="flex-none lg:flex">
                    <div class=" h-full w-full lg:h-20 lg:w-20   lg:mb-0 mb-3">
                        <img src="/images/medium.png"
                            alt="Just a flower" class=" w-full  object-scale-down lg:object-cover  lg:h-20 rounded-2xl"/>
                    </div>
                    <div class="flex-auto ml-3 justify-evenly py-2">
                        <div class="flex flex-wrap ">
                            <div class="w-full flex-none text-xs text-blue-700 font-medium ">
                                Medium
                            </div>
                            <h2 class="flex-auto text-lg font-medium">Next.js components</h2>
                        </div>
                        <div class="flex py-4  text-sm text-gray-600 max-w-sm">
                            Next.js is an open-source React front-end development web framework created by Vercel that enables functionality such as server-side rendering.
                        </div>
                        <div class="flex p-2 pb-2 border-t border-gray-200 "></div>
                        <div class="flex space-x-3 text-sm font-medium">
                            <button
                                class="mb-2 md:mb-0 bg-gray-900 px-5 py-2 shadow-sm tracking-wider text-white rounded-full hover:bg-gray-800"
                                type="button" aria-label="like">Insights</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
}