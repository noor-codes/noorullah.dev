import Facebook from '@/public/icons/social/black/facebook-icon.svg'
import Linkedin from '@/public/icons/social/black/linkedin-icon.svg'
import Twitter from '@/public/icons/social/black/twitter-icon.svg'

const Sharing = () => (
  <div className="flex items-center justify-between mt-16 xl:pt-10">
    <div className="flex items-center">
      <div className="h-1.5 bg-black w-24 mr-2 md:h-2 md:w-32  xl:w-60">&nbsp;</div>
      <div className="font-sans font-semibold tracking-wider text-sm leading-5 uppercase md:font-bold xl:text-lg">
        Sharing is Caring
      </div>
    </div>

    <div className="flex flex-col pr-10 space-y-2 xs:flex-row xs:space-y-0 xs:space-x-3 md:pr-28 xl:pr-52">
      <a href="#" rel="noreferrer" target="_blank">
        <Twitter />
      </a>

      <a href="#" rel="noreferrer" target="_blank">
        <Linkedin />
      </a>

      <a href="#" rel="noreferrer" target="_blank">
        <Facebook />
      </a>
    </div>
  </div>
)

export default Sharing
