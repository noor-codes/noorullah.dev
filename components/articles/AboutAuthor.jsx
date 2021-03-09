const AboutAuthor = ({ name, description }) => (
  <div className="flex flex-col items-center font-sans ml-8 mr-8 mt-10 text-center xs:mt-16 xl:py-12">
    <img
      className="rounded-full h-24 w-24 xs:h-32 xs:w-32 mr-3 md:mb-1 xl:h-40 xl:w-40"
      src="/img/profile.jpg"
      alt="Noorullah Ahmadzai"
    />
    <div>
      <h2 className="text-lg font-semibold text-gray-800 mt-3 xs:text-xl xs:mt-4 xl:text-2xl xl:mt-4">
        {name}
      </h2>
      <p className="text-sm mt-1 text-gray-500 tracking-tight leading-5 xs:text-base sm:px-14 md:px-14 lg:px-52 xl:px-80 xl:text-lg">
        {description}
      </p>
    </div>
  </div>
)

export default AboutAuthor
