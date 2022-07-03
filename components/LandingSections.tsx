export const LandingSections = ({ name }) => (
  <div className="lg:container lg:min-w-xs lg:mx-auto lg:px-10 lg:max-w-2xl xl:max-w-3xl">
    <div className="flex items-center pt-14 md:pt-24">
      <div className="h-1 md:h-1.5 bg-black w-16 mr-2 xs:w-40 md:w-44 lg:w-14 lg:h-1.5">
        &nbsp;
      </div>
      <div className="font-sans font-semibold leading-5 md:text-xl md:font-semibold xl:text-2xl lg:font-bold text-gray-900">
        {name}
      </div>
    </div>
  </div>
)
