export const PageSection = ({ name }) => (
  <div className="flex items-center">
    <div className="h-1 md:h-1.5 bg-black dark:bg-gray-200 w-32 mr-2 xs:w-40 md:w-44 lg:h-1.5 lg:w-3/12">
      &nbsp;
    </div>
    <div className="font-sans font-semibold leading-5 md:text-xl md:font-semibold lg:text-2xl lg:font-bold text-gray-900 dark:text-gray-200">
      {name}
    </div>
  </div>
)
