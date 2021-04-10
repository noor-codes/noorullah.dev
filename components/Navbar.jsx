import { useState } from 'react'
import Link from 'next/link'

import CodeIcon from '@/public/icons/menu/code-icon.svg'
import BurgerIcon from '@/public/icons/menu/burger-icon.svg'
import MoonIcon from '@/public/icons/menu/moon-icon.svg'
import BlogIcon from '@/public/icons/menu/blog-icon.svg'
import TwitterIcon from '@/public/icons/social/white/twitter-icon.svg'
import CloseMenuIcon from '@/public/icons/menu/close-menu.svg'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const handleMenu = () => {
    setIsOpen(!isOpen)
  }

  const menuVisibility = isOpen ? 'visible' : 'hidden'

  return (
    <nav>
      <div className="flex bg-gray-900 text-white py-4 px-4">
        <div className="flex justify-between w-full items-center">
          <div className="flex">
            <CodeIcon className="h-6 w-6 mr-2" />
            <div>Noorullah</div>
            <Link href="/blog">
              <a className="hidden sm:block ml-4">Blog</a>
            </Link>
          </div>

          <div className="sm:hidden">
            <BurgerIcon
              onClick={handleMenu}
              className="h-7 w-7 hover:cursor-pointer hover:bg-gray-700 hover:rounded-full"
            />
          </div>

          <div className="space-x-4 hidden sm:block">
            <MoonIcon className="inline h-6 w-6 " />
            <TwitterIcon className="inline h-6 w-6" />
          </div>
        </div>
      </div>

      <div
        className={`${menuVisibility} sm:hidden flex flex-col bg-gray-900 text-white px-2 pb-2 space-y-2`}
      >
        <a href="#" onClick={() => setIsOpen(!isOpen)}>
          <div className="flex text-sm hover:bg-gray-800 px-2 py-2 rounded">
            <BlogIcon className="mr-2 h-5 w-5" />
            Blog
          </div>
        </a>

        <a href="#" onClick={() => setIsOpen(!isOpen)}>
          <div className="flex text-sm hover:bg-gray-800 px-2 py-2 rounded">
            <TwitterIcon className="mr-2 h-5 w-5" />
            Twitter
          </div>
        </a>

        <a href="#" onClick={() => setIsOpen(!isOpen)}>
          <div className="flex text-sm hover:bg-gray-800 px-2 py-2 rounded">
            <MoonIcon className="mr-2 h-5 w-5" />
            Dark Mode
          </div>
        </a>
      </div>
    </nav>
  )
}

export default Navbar
