const Footer = () => (
  <div className="flex flex-col justify-center bg-gray-900 gap-y-2 w-full h-44 mt-20 md:h-48 xl:h-60">
    <p className="text-white text-3xl mx-10 text-center xl:text-4xl xl:mb-2">Get in Touch</p>
    <div className="flex justify-center flex-row-reverse space-x-2 md:space-x-3 md:space-x-reverse space-x-reverse">
      <a href="https://github.com/Noorullah-Ahmadzai" rel="noreferrer" target="_blank">
        <img
          src="/icons/social/white/github-icon.svg"
          alt="GitHub"
          className="h-8 w-8 xl:h-9 xl:w-9"
        />
      </a>

      <a href="#" rel="noreferrer" target="_blank">
        <img
          src="/icons/social/white/twitter-icon.svg"
          alt="Twitter"
          className="h-8 w-8 xl:h-9 xl:w-9"
        />
      </a>

      <a href="#" rel="noreferrer" target="_blank">
        <img
          src="/icons/social/white/instagram-icon.svg"
          alt="Instagram"
          className="h-8 w-8 xl:h-9 xl:w-9"
        />
      </a>

      <a href="#" rel="noreferrer" target="_blank">
        <img
          src="/icons/social/white/linkedin-icon.svg"
          alt="LinkedIn"
          className="h-8 w-8 xl:h-9 xl:w-9"
        />
      </a>
    </div>
  </div>
)

export default Footer
