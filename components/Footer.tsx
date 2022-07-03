import Twitter from 'public/icons/social/twitter-icon.svg'
import GitHub from 'public/icons/social/github-icon.svg'
import { bio } from 'config/bio'

const { twitter, github } = bio.profiles

export const Footer = () => {
  return (
    <footer className="flex flex-col justify-center py-10 bg-gray-100 w-full mt-20 lg:h-44 print:hidden">
      <div className="flex justify-center flex-row-reverse space-x-2 space-x-reverse md:space-x-3 md:space-x-reverse">
        <a
          href={`${twitter.url}`}
          rel="noreferrer"
          target="_blank"
          className="block mt-0.5 h-7 w-7 xs:h-8 md:w-8 lg:h-9 lg:w-9 text-gray-900"
          aria-label={`${twitter.name}`}
        >
          <Twitter className="fill-current hover:opacity-50" />
        </a>

        <a
          href={`${github.url}`}
          rel="noreferrer"
          target="_blank"
          className="block h-7 w-7 xs:h-8 md:w-8 lg:h-9 lg:w-9 text-gray-900 "
          aria-label={`${github.name}`}
        >
          <GitHub className="fill-current hover:opacity-50" />
        </a>
      </div>
      <p className="text-gray-900 text-base mx-10 text-center mt-1 md:text-lg lg:text-xl lg:mt-2">
        Join me on
      </p>
    </footer>
  )
}
