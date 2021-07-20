export default function Footer() {
    return (
        <footer className="footer relative mt-auto">
            <div className="flex flex-col items-center">
                <div className="sm:w-2/3 text-center py-4">
                    <p className="text-sm text-gray-600 font-bold mb-2 inline-flex items-center">
                        <span className="pr-2">I </span>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 fill-current text-pink-400" viewBox="0 0 20 20" fill="currentColor ">
                          <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                        </svg> 
                        <span className="pl-2">AI</span>
                    </p>
                </div>
            </div>
        </footer>
    )
}