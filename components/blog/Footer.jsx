import TwitterWhite from '@/public/icons/social/white/twitter-icon.svg'
import GitHubWhite from '@/public/icons/social/white/github-icon.svg'
import InstagramWhite from '@/public/icons/social/white/instagram-icon.svg'
import LinkedinWhite from '@/public/icons/social/white/linkedin-icon.svg'

const Footer = () => (
  <div className="flex flex-col justify-center bg-gray-900 gap-y-2 w-full h-44 mt-20 md:h-48 xl:h-60">
    <p className="text-white text-3xl mx-10 text-center">Get in Touch</p>
    <div className="flex justify-center flex-row-reverse space-x-2 md:space-x-3 md:space-x-reverse space-x-reverse">
      <a href="https://github.com/Noorullah-Ahmadzai" rel="noreferrer" target="_blank">
        <GitHubWhite />
      </a>

      <a href="#" rel="noreferrer" target="_blank">
        <TwitterWhite />
      </a>

      <a href="#" rel="noreferrer" target="_blank">
        <InstagramWhite />
      </a>

      <a href="#" rel="noreferrer" target="_blank">
        <LinkedinWhite />
      </a>
    </div>
  </div>
)

export default Footer
