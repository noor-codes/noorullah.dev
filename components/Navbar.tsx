import { useEffect, useState } from 'react'

import BlogIcon from 'public/icons/menu/blog-icon.svg'
import CodeIcon from 'public/icons/menu/code-icon.svg'
import Link from 'next/link'
import Router from 'next/router'
import TwitterIcon from 'public/icons/social/twitter-icon.svg'
import { bio } from 'config/bio'
import { motion } from 'framer-motion'

const { twitter } = bio.profiles
const { name } = bio

export const Navbar = () => {
  //. Menu State
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <nav className="sticky top-0 bg-gray-900 text-white w-full z-50 print:hidden">
        <div className="min-w-xs mx-auto sm:px-10 md:max-w-4xl xl:max-w-6xl">
          <div className="flex py-4 px-4 sm:py-6">
            <div className="flex justify-between w-full items-center">
              <div className="flex items-center">
                <Link href="/" className="flex items-center hover:opacity-60" passHref>
                  <CodeIcon className="h-6 w-6 mr-2 sm:h-7 sm:w-7 lg:h-8 lg:w-8" />
                  <div
                    className="font-bold sm:text-lg lg:text-xl"
                    onClick={() => setIsOpen(false)}
                    onKeyDown={() => setIsOpen(false)}
                  >
                    {name}
                  </div>
                </Link>
                <Link
                  href="/blog"
                  className="hidden sm:block ml-4 sm:text-lg xl:ml-6 lg:text-xl hover:opacity-60"
                  passHref
                >
                  Blog
                </Link>
              </div>
              <button
                type="button"
                aria-label="menu"
                className="sm:hidden focus:outline-none focus:ring-2 focus:ring-gray-700 focus:ring-opacity-50 focus:rounded-full"
              >
                <svg
                  onClick={() => setIsOpen(!isOpen)}
                  className="hover:cursor-pointer hover:bg-gray-700 hover:rounded-full h-9 w-9 p-2"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  {isOpen ? (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  ) : (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="{2}"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  )}
                </svg>
              </button>
              <div className="sm:flex sm:items-center space-x-4 hidden">
                <motion.a
                  whileHover={{
                    scale: 1.1,
                    rotate: -3,
                    transition: { duration: 0.3 },
                  }}
                  href={`${twitter.url}`}
                  rel="noreferrer"
                  target="_blank"
                  aria-label={`${twitter.name}`}
                >
                  <TwitterIcon className="inline h-6 w-6 sm:w-7 sm:h-7 lg:h-8 lg:w-8 lg:ml-2 fill-current" />
                </motion.a>
              </div>
            </div>
          </div>

          {/* //.Mobile Menu*/}
          {isOpen && (
            <motion.div
              initial={{ x: -30 }}
              animate={{ x: 0 }}
              transition={{ type: 'spring', stiffness: 100 }}
              className="sm:hidden flex flex-col bg-gray-900 text-white px-2 pb-2 space-y-2"
            >
              <a
                className="hover:cursor-pointer"
                onKeyDown={() => {
                  setIsOpen(!isOpen)
                  Router.push('/blog')
                }}
                onClick={() => {
                  setIsOpen(!isOpen)
                  Router.push('/blog')
                }}
              >
                <div className="flex items-center pr-1 text-sm hover:bg-gray-800 px-2 py-2 rounded">
                  <BlogIcon className="mr-2 h-6 w-6" />
                  Blog
                </div>
              </a>

              <a
                href={`${twitter.url}`}
                rel="noreferrer"
                target="_blank"
                aria-label={`${twitter.name}`}
                onClick={() => setIsOpen(!isOpen)}
              >
                <div className="flex items-center pr-1 text-sm hover:bg-gray-800 px-2 py-2 rounded">
                  <TwitterIcon className="mr-2 h-6 w-6 fill-current" />
                  Twitter
                </div>
              </a>
            </motion.div>
          )}
        </div>
      </nav>
    </>
  )
}
