import Twitter from '@/public/icons/social/white/twitter-icon.svg'
import GitHub from '@/public/icons/social/white/github-icon.svg'
import Instagram from '@/public/icons/social/white/instagram-icon.svg'
import LinkedIn from '@/public/icons/social/white/linkedin-icon.svg'

const Footer = () => (
  <div className="flex flex-col justify-center bg-gray-900 gap-y-2 w-full h-44 mt-20 md:h-48 xl:h-60">
    <p className="text-white text-3xl mx-10 text-center">Get in Touch</p>
    <div className="flex justify-center flex-row-reverse space-x-2 md:space-x-3 md:space-x-reverse space-x-reverse">
      <a href="https://github.com/Noorullah-Ahmadzai" rel="noreferrer" target="_blank">
        <img src={GitHub} alt="GitHub" />
      </a>

      <a href="#" rel="noreferrer" target="_blank">
        <img src={Twitter} alt="Twitter" />
      </a>

      <a href="#" rel="noreferrer" target="_blank">
        <img src={Instagram} alt="Instagram" />
      </a>

      <a href="#" rel="noreferrer" target="_blank">
        <img src={LinkedIn} alt="LinkedIn" />
      </a>
    </div>
  </div>
)

export default Footer
