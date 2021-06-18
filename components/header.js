import { Popover } from '@headlessui/react'
import {
  MenuIcon,
} from '@heroicons/react/outline'


export default function Example() {
  return (
    <Popover className="relative bg-white sticky top-0 z-50">
      {({ open }) => (
        <>
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="flex justify-between items-center py-6 md:justify-start md:space-x-10">
              <div className="flex justify-start lg:w-0 lg:flex-1">
                <a href="/" class="text-3xl font-extrabold text-gray-700">
                  Trends
                </a>
              </div>
              <div className="-mr-2 -my-2 md:hidden">
                <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                  <span className="sr-only">Open menu</span>
                  <MenuIcon className="h-6 w-6" aria-hidden="true" />
                </Popover.Button>
              </div>
              <Popover.Group as="nav" className="hidden md:flex space-x-10">
                <a href="/about" className="text-base font-medium text-gray-500 hover:text-gray-900 items-center inline-flex">
                  About
                </a>

                <a href="/ai" className="text-base font-medium text-gray-500 hover:text-gray-900 items-center inline-flex">
                  <span class="pr-2">I </span>
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clip-rule="evenodd" />
                  </svg> 
                  <span class="pl-2">AI</span>
                </a>
                <a href="https://devghoststories.com/" className="text-base font-medium text-gray-500 hover:text-gray-900 items-center inline-flex">
                  Blog
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
                  <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
                </svg>
                </a>
              </Popover.Group>
            </div>
          </div>
        </>
      )}
    </Popover>
  )
}