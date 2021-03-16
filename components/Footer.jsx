import Image from 'next/image'

const Footer = () => (
  <div className="flex flex-col justify-center bg-gray-900 gap-y-2 w-full h-44 mt-20 md:h-60 xl:h-60">
    <p className="text-white text-3xl mx-10 text-center md:mb-1 xl:text-4xl xl:mb-2">
      Get in Touch
    </p>
    <div className="flex justify-center flex-row-reverse space-x-2 space-x-reverse md:space-x-3 md:space-x-reverse">
      <a href="https://github.com/Noorullah-Ahmadzai" rel="noreferrer" target="_blank">
        <div className="h-9 w-9 md:h-9 md:w-9 focus:outline-none">
          <Image src="/icons/social/white/github-icon.svg" height="100" width="100" alt="GitHub" />
        </div>
      </a>

      <a href="https://twitter.com/Noorullah_Ah" rel="noreferrer" target="_blank">
        <div className="h-9 w-9 md:h-9 md:w-9 focus:outline-none">
          <Image
            src="/icons/social/white/twitter-icon.svg"
            height="100"
            width="100"
            alt="Twitter"
          />
        </div>
      </a>

      <a href="https://www.instagram.com/noorullah.ahmadzai/" rel="noreferrer" target="_blank">
        <div className="h-9 w-9 md:h-9 md:w-9 focus:outline-none">
          <Image
            src="/icons/social/white/instagram-icon.svg"
            height="100"
            width="100"
            alt="Instagram"
          />
        </div>
      </a>

      <a
        href="https://www.linkedin.com/in/noorullah-ahmadzai-4239a6160/"
        rel="noreferrer"
        target="_blank"
      >
        <div className="h-9 w-9 md:h-9 md:w-9 focus:outline-none">
          <Image
            src="/icons/social/white/linkedin-icon.svg"
            height="100"
            width="100"
            alt="LinkedIn"
          />
        </div>
      </a>
    </div>
  </div>
)

export default Footer
