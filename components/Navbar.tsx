import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { bio } from 'utils/bio'
import { motion } from 'framer-motion'

const { twitter } = bio.profiles
const { name } = bio

interface MenuButtonProps {
  isOpen: boolean
  onClick: () => void
}

const MENU_STATES = {
  OPEN: {
    src: '/icons/menu/close-menu.svg',
    alt: 'Close Menu',
  },
  CLOSED: {
    src: '/icons/menu/hamburger-menu.svg',
    alt: 'Open Menu',
  },
} as const

const MenuButton = ({ isOpen, onClick }: MenuButtonProps) => {
  const menuState = isOpen ? MENU_STATES.OPEN : MENU_STATES.CLOSED

  return (
    <button
      type="button"
      aria-label="menu"
      onClick={onClick}
      className="sm:hidden focus:outline-none focus:ring-2 focus:ring-gray-700 focus:ring-opacity-50 focus:rounded-full"
    >
      <div className="hover:cursor-pointer hover:bg-gray-700 hover:rounded-full h-9 w-9 p-2">
        <Image src={menuState.src} alt={menuState.alt} width={20} height={20} className="invert" />
      </div>
    </button>
  )
}

const menuVariants = {
  open: {
    opacity: 1,
    height: 'auto',
    transition: {
      type: 'spring',
      stiffness: 400,
      damping: 40,
      mass: 0.8,
      staggerChildren: 0.07,
      delayChildren: 0.2,
    },
  },
  closed: {
    opacity: 0,
    height: 0,
    transition: {
      type: 'spring',
      stiffness: 400,
      damping: 40,
      mass: 0.8,
      staggerChildren: 0.05,
      staggerDirection: -1,
    },
  },
}

const menuItemVariants = {
  open: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      stiffness: 400,
      damping: 40,
    },
  },
  closed: {
    opacity: 0,
    y: 20,
    transition: {
      type: 'spring',
      stiffness: 400,
      damping: 40,
    },
  },
}

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const toggleMenu = () => setIsOpen(!isOpen)

  return (
    <>
      <nav className="sticky top-0 bg-gray-900 text-white w-full z-50 print:hidden">
        <div className="min-w-xs mx-auto sm:px-10 md:max-w-4xl xl:max-w-6xl">
          <div className="flex py-4 px-4 sm:py-6">
            <div className="flex justify-between w-full items-center">
              <div className="flex items-center">
                <Link href="/" className="flex items-center hover:opacity-60" passHref>
                  <Image
                    src="/icons/menu/code-icon.svg"
                    alt="Code Icon"
                    width={24}
                    height={24}
                    className="w-5 h-5 mr-2 sm:w-6 sm:h-6 lg:w-7 lg:h-7 invert"
                  />
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
              <MenuButton isOpen={isOpen} onClick={toggleMenu} />
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
                  <Image
                    src="/icons/social/twitter-icon.svg"
                    alt="Twitter"
                    width={32}
                    height={32}
                    className="inline sm:w-7 sm:h-7 lg:h-8 lg:w-8 lg:ml-2 invert"
                  />
                </motion.a>
              </div>
            </div>
          </div>

          {/* Mobile Menu */}
          <motion.div
            initial="closed"
            animate={isOpen ? 'open' : 'closed'}
            variants={menuVariants}
            className="sm:hidden overflow-hidden bg-gray-900 border-t border-gray-800"
          >
            <div className="flex flex-col text-white px-4 py-2 space-y-1">
              <motion.div variants={menuItemVariants}>
                <a
                  href={`${twitter.url}`}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:cursor-pointer block"
                  onClick={() => setIsOpen(false)}
                >
                  <div className="flex items-center text-sm hover:bg-gray-800 px-3 py-2.5 rounded-md transition-colors duration-200">
                    <Image
                      src="/icons/social/twitter-icon.svg"
                      alt="Twitter"
                      width={24}
                      height={24}
                      className="w-5 h-5 mr-3 invert"
                    />
                    Twitter
                  </div>
                </a>
              </motion.div>

              <motion.div variants={menuItemVariants}>
                <Link
                  href="/blog"
                  className="hover:cursor-pointer block"
                  onClick={() => setIsOpen(false)}
                >
                  <div className="flex items-center text-sm hover:bg-gray-800 px-3 py-2.5 rounded-md transition-colors duration-200">
                    <Image
                      src="/icons/menu/blog-icon.svg"
                      alt="Blog"
                      width={24}
                      height={24}
                      className="w-5 h-5 mr-3 invert"
                    />
                    Blog
                  </div>
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </nav>
    </>
  )
}
