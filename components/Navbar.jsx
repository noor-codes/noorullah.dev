import { useState } from 'react'
import Link from 'next/link'
import { useTheme } from 'next-themes'

import CodeIcon from '@/public/icons/menu/code-icon.svg'
import BurgerIcon from '@/public/icons/menu/burger-icon.svg'
import CloseMenuIcon from '@/public/icons/menu/closemenu-icon.svg'
import MoonIcon from '@/public/icons/menu/moon-icon.svg'
import SunIcon from '@/public/icons/menu/sun-icon.svg'
import BlogIcon from '@/public/icons/menu/blog-icon.svg'
import TwitterIcon from '@/public/icons/social/twitter-icon.svg'

const Navbar = () => {
  const { setTheme } = useTheme()

  //? Dark Mode Toggle
  const [isDark, setIsDark] = useState(false)

  const [isOpen, setIsOpen] = useState(false)
  const menuVisibility = isOpen ? '' : 'sr-only' // sr-only instead of hidden class for accessibility

  return (
    <>
      <nav className="bg-gray-900 text-white absolute w-full z-50 dark:text-gray-900 dark:bg-gray-200">
        <div className="min-w-xs mx-auto sm:px-10 md:max-w-4xl xl:max-w-6xl">
          <div className="flex py-4 px-4 sm:py-6">
            <div className="flex justify-between w-full items-center">
              <div className="flex items-center">
                <Link href="/">
                  <a className="flex items-center hover:opacity-60">
                    <CodeIcon className="h-6 w-6 mr-2 sm:h-7 sm:w-7 lg:h-8 lg:w-8" />
                    <div className="font-bold sm:text-lg lg:text-xl">Noorullah</div>
                  </a>
                </Link>
                <Link href="/blogs">
                  <a className="hidden sm:block ml-4 sm:text-lg xl:ml-6 lg:text-xl hover:opacity-60">
                    Blog
                  </a>
                </Link>
              </div>

              <button
                type="button"
                aria-label="menu"
                className="sm:hidden focus:outline-none focus:ring-2 focus:ring-gray-700 focus:ring-opacity-50 focus:rounded-full"
              >
                {!isOpen ? (
                  <BurgerIcon
                    onClick={() => setIsOpen(!isOpen)}
                    className="hover:cursor-pointer hover:bg-gray-700 dark:hover:bg-white hover:rounded-full h-9 w-9 p-2"
                  />
                ) : (
                  <CloseMenuIcon
                    onClick={() => setIsOpen(!isOpen)}
                    className="hover:cursor-pointer hover:bg-gray-700 dark:hover:bg-white hover:rounded-full h-9 w-9 p-2"
                  />
                )}
              </button>

              <div className="space-x-4 hidden sm:block">
                <button type="button" aria-label="dark mode" className="focus:outline-none">
                  {isDark ? (
                    <MoonIcon
                      onClick={() => {
                        setIsDark(!isDark)
                        setTheme('dark')
                      }}
                      className="inline h-6 w-6 sm:w-7 sm:h-7 lg:h-8 lg:w-8 fill-current hover:opacity-50"
                    />
                  ) : (
                    <SunIcon
                      onClick={() => {
                        setIsDark(!isDark)
                        setTheme('light')
                      }}
                      className="inline h-7 w-7 sm:w-7 sm:h-7 lg:h-8 lg:w-8 fill-current hover:opacity-50"
                    />
                  )}
                </button>

                <a
                  href="https://twitter.com/Noorullah_Ah"
                  rel="noreferrer"
                  target="_blank"
                  aria-label="twitter"
                >
                  <TwitterIcon className="inline h-6 w-6 sm:w-7 sm:h-7 lg:h-8 lg:w-8 lg:ml-2 fill-current hover:opacity-50" />
                </a>
              </div>
            </div>
          </div>

          <div
            className={`${menuVisibility} sm:hidden flex flex-col bg-gray-900 dark:bg-gray-200 text-white dark:text-gray-900 px-2 pb-2 space-y-2`}
          >
            <Link href="/blogs" onClick={() => setIsOpen(!isOpen)}>
              <a>
                <div className="flex items-center pr-1 text-sm hover:bg-gray-800 dark:hover:bg-white dark:hover:text-gray-900 px-2 py-2 rounded">
                  <BlogIcon className="mr-2 h-6 w-6 dark:text-gray-900" />
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
              <div className="flex items-center pr-1 text-sm hover:bg-gray-800 dark:hover:bg-white dark:hover:text-gray-900 px-2 py-2 rounded">
                <TwitterIcon className="mr-2 h-6 w-6 fill-current dark:text-gray-900" />
                Twitter
              </div>
            </a>

            <button type="button" aria-label="dark mode" className="focus:outline-none">
              {isDark ? (
                <a
                  href="#"
                  className="flex items-center pr-1 text-sm hover:bg-gray-800 dark:hover:bg-white dark:hover:text-gray-900 px-2 py-2 rounded"
                  onClick={() => {
                    setIsDark(!isDark)
                    setIsOpen(!isOpen)
                    setTheme('dark')
                  }}
                >
                  <MoonIcon className="inline h-6 w-6 sm:w-7 sm:h-7 lg:h-8 lg:w-8 fill-current hover:opacity-50 mr-2" />
                  Dark Mode
                </a>
              ) : (
                <a
                  href="#"
                  onClick={() => {
                    setIsDark(!isDark)
                    setIsOpen(!isOpen)
                    setTheme('light')
                  }}
                  className="flex items-center pr-1 text-sm hover:bg-gray-800 dark:hover:bg-white dark:hover:text-gray-900 px-2 py-2 rounded"
                >
                  <SunIcon className="inline h-7 w-7 sm:w-7 sm:h-7 lg:h-8 lg:w-8 fill-current hover:opacity-50 mr-1" />
                  Light Mode
                </a>
              )}
            </button>
          </div>
        </div>
      </nav>
      {/** Space under the navbar */}
      <div className="block mb-12">&nbsp;</div>
    </>
  )
}

export default Navbar
