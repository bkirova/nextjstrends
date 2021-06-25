import React from "react";

export default function Menu({ fixed }) {
  const [menuOpen, setMenuOpen] = React.useState(false);
  return (
    <>
      <div className="flex flex-wrap py-2">
        <div className="w-full px-2">
          <nav className="relative flex flex-wrap items-center justify-between px-2 py-3 rounded">
            <div className="container mx-auto flex flex-wrap items-center justify-between">
              <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
                <a
                  className="text-3xl font-extrabold text-gray-700"
                  href="/"
                >
                  <span className="text-yellow-300">AI</span> Stories
                </a>
                <button
                  className="cursor-pointer text-xl leading-none px-3 py-1 border border-solid rounded block lg:hidden focus:outline-none"
                  type="button"
                  onClick={() => setMenuOpen(!menuOpen)}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                </button>
              </div>
              <div
                className={
                  "lg:flex flex-grow items-center" +
                  (menuOpen ? " flex" : " hidden")
                }
              >
                <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
                  <li className="nav-item">
                    <a
                      className="px-3 py-2 text-base font-medium text-gray-500 hover:text-gray-900 items-center inline-flex"
                      href="/top"
                    >
                      Today's Top
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="px-3 py-2 text-base font-medium text-gray-500 hover:text-gray-900 items-center inline-flex"
                      href="/generated"
                    >
                      AI Generated
                    </a>
                  </li>
                  {/* <li className="nav-item">
                    <a
                      className="px-3 py-2 text-base font-medium text-gray-500 hover:text-gray-900 items-center inline-flex"
                      href="/trends"
                    >
                      Trends
                    </a>
                  </li> */}
                  <li className="nav-item">
                    <a
                      className="px-3 py-2 text-base font-medium text-gray-500 hover:text-gray-900 items-center inline-flex"
                      href="/about"
                    >
                      About
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="px-3 py-2 text-base font-medium text-gray-500 hover:text-gray-900 items-center inline-flex"
                      href="/ai"
                    >
                      <span className="pr-1">I </span>
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                      </svg> 
                      <span className="pl-1">AI</span>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="px-3 py-2 text-base font-medium text-gray-500 hover:text-gray-900 items-center inline-flex"
                      href="https://devghoststories.com/"
                    >
                      Blog
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
                        <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
                      </svg>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
}