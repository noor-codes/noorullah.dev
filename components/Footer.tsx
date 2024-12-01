import Image from 'next/image'
import { bio } from 'utils/bio'

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
          <Image
            src="/icons/social/twitter-icon.svg"
            alt="Twitter icon"
            className="hover:opacity-50"
            width={36}
            height={36}
            priority={false}
          />
        </a>

        <a
          href={`${github.url}`}
          rel="noreferrer"
          target="_blank"
          className="block h-7 w-7 xs:h-8 md:w-8 lg:h-9 lg:w-9 text-gray-900"
          aria-label={`${github.name}`}
        >
          <Image
            src="/icons/social/github-icon.svg"
            alt="GitHub icon"
            className="hover:opacity-50"
            width={36}
            height={36}
            priority={false}
          />
        </a>
      </div>
      <p className="text-gray-900 text-base mx-10 text-center mt-1 md:text-lg lg:text-xl lg:mt-2">
        Join me on
      </p>
    </footer>
  )
}
