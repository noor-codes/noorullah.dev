const Sharing = () => (
  <div className="flex items-center justify-between mt-16 xl:pt-10">
    <div className="flex items-center">
      <div className="h-1.5 bg-black w-24 mr-2 md:h-2 md:w-32 xl:w-60">&nbsp;</div>
      <div className="font-sans font-semibold tracking-wider text-sm leading-5 uppercase md:font-bold xl:text-lg">
        Sharing is Caring
      </div>
    </div>

    <div className="flex flex-col pr-10 space-y-2 xs:flex-row xs:space-y-0 xs:space-x-3 md:pr-28 xl:pr-52">
      <a href="#" rel="noreferrer" target="_blank">
        <img
          src="/icons/social/black/twitter-icon.svg"
          alt="Twitter"
          className="h-8 md:h-9 xl:h-10"
        />
      </a>

      <a href="#" rel="noreferrer" target="_blank">
        <img
          src="/icons/social/black/linkedin-icon.svg"
          alt="Linkedin"
          className="h-8 md:h-9 xl:h-10"
        />
      </a>

      <a href="#" rel="noreferrer" target="_blank">
        <img
          src="/icons/social/black/facebook-icon.svg"
          alt="Facebook"
          className="h-8 md:h-9 xl:h-10"
        />
      </a>
    </div>
  </div>
)

export default Sharing
