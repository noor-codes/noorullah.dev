import { useState } from 'react'
import Link from 'next/link'

import CodeIcon from '@/public/icons/menu/code-icon.svg'
import BurgerIcon from '@/public/icons/menu/burger-icon.svg'
import MoonIcon from '@/public/icons/menu/moon-icon.svg'
import BlogIcon from '@/public/icons/menu/blog-icon.svg'
import TwitterIcon from '@/public/icons/social/white/twitter-icon.svg'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const handleMenu = () => {
    setIsOpen(!isOpen)
  }

  const menuVisibility = isOpen ? 'visible' : 'hidden'

  return (
    <nav className="bg-gray-900 text-white">
      <div className="min-w-xs mx-auto sm:px-10 md:max-w-4xl xl:max-w-6xl">
        <div className="flex py-4 px-4 sm:py-6">
          <div className="flex justify-between w-full items-center">
            <div className="flex items-center">
              <CodeIcon className="h-6 w-6 mr-2 sm:h-7 sm:w-7 lg:h-8 lg:w-8" />
              <div className="sm:text-lg lg:text-xl">Noorullah</div>
              <Link href="/blog">
                <a className="hidden sm:block ml-4 sm:text-lg xl:ml-6 lg:text-xl hover:text-gray-400">
                  Blog
                </a>
              </Link>
            </div>

            <button
              type="button"
              className="sm:hidden focus:outline-none focus:ring-2.5 focus:ring-gray-700 focus:ring-opacity-50 focus:rounded-full"
            >
              <BurgerIcon
                onClick={handleMenu}
                className="h-full hover:cursor-pointer hover:bg-gray-700 hover:rounded-full p-2.5 mr-6"
              />
            </button>

            <div className="space-x-4 hidden sm:block">
              <button type="button" className="focus:outline-none">
                <MoonIcon className="inline h-6 w-6 sm:w-7 sm:h-7 lg:h-8 lg:w-8" />
              </button>

              <a
                href="https://twitter.com/Noorullah_Ah"
                rel="noreferrer"
                target="_blank"
                aria-label="twitter"
              >
                <TwitterIcon className="inline h-6 w-6 sm:w-7 sm:h-7 lg:h-8 lg:w-8 lg:ml-2" />
              </a>
            </div>
          </div>
        </div>

        <div
          className={`${menuVisibility} sm:hidden flex flex-col bg-gray-900 text-white px-2 pb-2 space-y-2`}
        >
          <Link href="/blog" onClick={() => setIsOpen(!isOpen)}>
            <a>
              <div className="flex items-center pr-1 text-sm hover:bg-gray-800 px-2 py-2 rounded">
                <BlogIcon className="mr-2 h-6 w-6" />
                Blog
              </div>
            </a>
          </Link>

          <a
            href="https://twitter.com/Noorullah_Ah"
            rel="noreferrer"
            target="_blank"
            aria-label="twitter"
            onClick={() => setIsOpen(!isOpen)}
          >
            <div className="flex items-center pr-1 text-sm hover:bg-gray-800 px-2 py-2 rounded">
              <TwitterIcon className="mr-2 h-6 w-6" />
              Twitter
            </div>
          </a>

          <a href="#" onClick={() => setIsOpen(!isOpen)}>
            <div className="flex items-center pr-1 text-sm hover:bg-gray-800 px-2 py-2 rounded">
              <MoonIcon className="mr-2 h-6 w-6" />
              Dark Mode
            </div>
          </a>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
