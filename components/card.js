export default function Card() {

    return <div class="w-screen h-screen flex justify-center items-center">
    <div class="container mx-auto max-w-xs rounded-lg overflow-hidden shadow-lg my-2 bg-white">
        <div class="relative mb-6">
            <img class="w-full" src="https://unsplash.com/photos/PElJMFWV3kk/download?force=true&w=640"
                alt="Profile picture" />
            <div class="text-center absolute w-full">
                <div class="mb-10">
                <p class="text-white tracking-wide uppercase text-lg font-bold">Witch</p>
                <p class="text-gray-400 text-sm">@witch_forever</p>
                </div>
                <button class="p-4 rounded-full transition ease-in duration-200 focus:outline-none">
                
                </button>
            </div>
        </div>
        <div class="py-10 px-6 text-center tracking-wide grid grid-cols-3 gap-6">
            <div class="posts">
                <p class="text-lg">324</p>
                <p class="text-gray-400 text-sm">Posts</p>
            </div>
            <div class="followers">
                <p class="text-lg">7542</p>
                <p class="text-gray-400 text-sm">Followers</p>
            </div>
            <div class="following">
                <p class="text-lg">295</p>
                <p class="text-gray-400 text-sm">Following</p>
            </div>
        </div>
    </div>
    </div>
}