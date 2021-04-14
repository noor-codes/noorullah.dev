import { useTheme } from 'next-themes'

import Twitter from '@/public/icons/social/twitter-icon.svg'
import Instagram from '@/public/icons/social/instagram-icon.svg'
import InstagramDark from '@/public/icons/social/instagram-dark.svg'
import LinkedIn from '@/public/icons/social/linkedin-icon.svg'
import GitHub from '@/public/icons/social/github-icon.svg'

const Footer = () => {
  const { theme } = useTheme()

  return (
    <div className="flex flex-col justify-center bg-gray-900 dark:bg-white gap-y-2 w-full h-44 mt-20 md:h-60 xl:h-60">
      <p className="text-white text-3xl mx-10 text-center md:mb-1 xl:text-4xl xl:mb-2 dark:text-gray-900">
        Get in Touch
      </p>
      <div className="flex justify-center flex-row-reverse space-x-2 space-x-reverse md:space-x-3 md:space-x-reverse">
        <a
          href="https://github.com/Noorullah-Ahmadzai"
          rel="noreferrer"
          target="_blank"
          className="block h-8 w-8 md:h-9 md:w-9 text-white "
          aria-label="github"
        >
          <GitHub className="fill-current hover:opacity-50 dark:text-gray-900" />
        </a>

        <a
          href="https://twitter.com/Noorullah_Ah"
          rel="noreferrer"
          target="_blank"
          className="block h-8 w-8 md:h-9 md:w-9 text-white"
          aria-label="twitter"
        >
          <Twitter className="fill-current hover:opacity-50  dark:text-gray-900" />
        </a>

        <a
          href="https://www.instagram.com/noorullah.ahmadzai/"
          rel="noreferrer"
          target="_blank"
          className="block h-8 w-8 md:h-9 md:w-9 text-white"
          aria-label="instagram"
        >
          {theme === 'light' ? (
            <InstagramDark className="fill-current hover:opacity-50 dark:text-gray-900" />
          ) : (
            <Instagram className="fill-current hover:opacity-50 dark:text-gray-900" />
          )}
        </a>

        <a
          href="https://www.linkedin.com/in/noorullah-ahmadzai-4239a6160/"
          rel="noreferrer"
          target="_blank"
          className="block h-8 w-8 md:h-9 md:w-9"
          aria-label="linkedin"
        >
          <LinkedIn className="fill-current hover:opacity-50 text-white dark:text-gray-900" />
        </a>
      </div>
    </div>
  )
}
export default Footer
