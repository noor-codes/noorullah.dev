const LandingSections = ({ name }) => (
  <div className="flex items-center pt-14 md:pt-24">
    <div className="h-1 md:h-1.5 bg-black w-20 mr-2 xs:w-40 md:w-44 lg:h-1.5 lg:w-3/12">&nbsp;</div>
    <div className="font-sans font-semibold leading-5 md:text-xl md:font-semibold lg:text-2xl lg:font-bold">
      {name}
    </div>
  </div>
)

export default LandingSections
