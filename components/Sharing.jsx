import Facebook from '@/public/icons/social/facebook-icon.svg'
import Twitter from '@/public/icons/social/twitter-icon.svg'
import LinkedIn from '@/public/icons/social/linkedin-icon.svg'

const Sharing = () => (
  <div className="flex items-center justify-between mt-16 xl:pt-10">
    <div className="flex items-center">
      <div className="h-1.5 bg-black w-20 xs:w-24 mr-2 md:h-2 md:w-32 lg:w-52">&nbsp;</div>
      <div className="font-sans font-semibold tracking-wider text-sm leading-5 uppercase md:font-bold lg:text-xl">
        Sharing is Caring
      </div>
    </div>

    <div className="flex flex-col pr-8 space-y-2 xs:flex-row xs:space-y-0 xs:space-x-3 md:pr-28 lg:pr-52 lg:space-x-4">
      <a
        href="#"
        rel="noreferrer"
        target="_blank"
        aria-label="twitter"
        className="block h-8 w-8 md:h-9 md:w-8 lg:h-10 lg:w-10 fill-current hover:opacity-60 text-black"
      >
        <Twitter />
      </a>

      <a
        href="#"
        rel="noreferrer"
        target="_blank"
        aria-label="linkedin"
        className="block h-8 w-8 md:h-9 md:w-8 lg:h-10 lg:w-10 fill-current hover:opacity-60 text-black"
      >
        <LinkedIn />
      </a>

      <a
        href="#"
        rel="noreferrer"
        target="_blank"
        aria-label="facebook"
        className="block h-8 w-8 md:h-9 md:w-8 lg:h-10 lg:w-10 fill-current hover:opacity-60 text-black"
      >
        <Facebook />
      </a>
    </div>
  </div>
)

export default Sharing
