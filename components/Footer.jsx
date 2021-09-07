import Twitter from '@/public/icons/social/twitter-icon.svg'
import GitHub from '@/public/icons/social/github-icon.svg'
import { bioData } from '@/lib/bioData'

const { twitter, github } = bioData.profiles

const Footer = () => {
  return (
    <footer className="flex flex-col justify-center py-10 bg-gray-100 dark:bg-black dark:bg-opacity-20 w-full mt-20 lg:h-44">
      <div className="flex justify-center flex-row-reverse space-x-2 space-x-reverse md:space-x-3 md:space-x-reverse">
        <a
          href={`${twitter.url}`}
          rel="noreferrer"
          target="_blank"
          className="block mt-0.5 h-7 w-7 xs:h-8 md:w-8 lg:h-9 lg:w-9 text-gray-900"
          aria-label={`${twitter.name}`}
        >
          <Twitter className="fill-current hover:opacity-50  dark:text-gray-200" />
        </a>

        <a
          href={`${github.url}`}
          rel="noreferrer"
          target="_blank"
          className="block h-7 w-7 xs:h-8 md:w-8 lg:h-9 lg:w-9 text-gray-900 "
          aria-label={`${github.name}`}
        >
          <GitHub className="fill-current hover:opacity-50 dark:text-gray-200" />
        </a>
      </div>
      <p className="text-gray-900 text-base mx-10 text-center mt-1 dark:text-gray-200 md:text-lg lg:text-xl lg:mt-2">
        Join me on
      </p>
    </footer>
  )
}
export default Footer
