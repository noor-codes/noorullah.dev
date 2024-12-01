import Image from 'next/image'
import { bio } from 'utils/bio'

const { url } = bio.profiles.website
const { name, lastname } = bio

export const Sharing = ({ slug, title }) => (
  <div className="flex items-center justify-between mt-16 xl:pt-10">
    <div className="flex items-center">
      <div className="h-1.5 bg-gray-900 w-20 xs:w-24 mr-2 md:h-2 md:w-32 lg:w-52">&nbsp;</div>
      <div className="font-sans font-semibold tracking-wider text-sm leading-5 uppercase md:font-bold lg:text-xl text-gray-900">
        Sharing is Caring
      </div>
    </div>

    <div className="flex items-center flex-col pr-8 space-y-2 xs:flex-row xs:space-y-0 xs:space-x-3 md:pr-28 lg:pr-52 lg:space-x-4">
      <a
        href={`https://twitter.com/intent/tweet?text=${title}&url=${url}/blog/${slug}`}
        rel="noreferrer noopener"
        target="_blank"
        aria-label="twitter"
        className="block h-8 w-8 md:h-9 md:w-8 lg:h-10 lg:w-10 hover:opacity-60"
      >
        <Image
          src="/icons/social/twitter-icon.svg"
          alt="Share on Twitter"
          width={40}
          height={40}
          className="w-full h-full"
        />
      </a>

      <a
        href={`https://www.linkedin.com/shareArticle?mini=true&url=${url}/blog/${slug}`}
        rel="noreferrer noopener"
        target="_blank"
        aria-label="linkedin"
        className="block h-8 w-8 md:h-9 md:w-8 lg:h-10 lg:w-10 hover:opacity-60"
      >
        <Image
          src="/icons/social/linkedin-icon.svg"
          alt="Share on LinkedIn"
          width={40}
          height={40}
          className="w-full h-full"
        />
      </a>

      <a
        href={`https://www.facebook.com/sharer/sharer.php?u=${url}/blog/${slug}`}
        rel="noreferrer noopener"
        target="_blank"
        aria-label="facebook"
        className="block h-8 w-8 md:h-9 md:w-8 lg:h-10 lg:w-10 hover:opacity-60"
      >
        <Image
          src="/icons/social/facebook-icon.svg"
          alt="Share on Facebook"
          width={40}
          height={40}
          className="w-full h-full"
        />
      </a>

      <a
        href={`mailto:?&subject=%22${title}%22%20a%20blog%20by%20${name}%20${lastname}&body=${url}/blog/${slug}`}
        rel="noreferrer noopener"
        target="_blank"
        aria-label="email"
        className="block h-8 w-8 md:h-9 md:w-8 lg:h-10 lg:w-10 hover:opacity-60"
      >
        <Image
          src="/icons/social/email-icon.svg"
          alt="Share via Email"
          width={40}
          height={40}
          className="w-full h-full"
        />
      </a>
    </div>
  </div>
)
