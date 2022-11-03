import CarbidNow from 'public/icons/landing/projects/carbidnow-icon.svg'
import Inventory from 'public/icons/landing/projects/inventory-icon.svg'
import Portfolio from 'public/icons/landing/projects/portfolio-icon.svg'

export const RecentProjects = () => {
  return (
    <>
      <div className="flex flex-wrap -mx-3 justify-center xs:justify-start text-center mt-8 mb-10">
        <div>
          <div className="flex justify-center items-center m-3 bg-gray-100 h-24 w-24 sm:h-28 sm:w-28 text-2xl text-gray-600 rounded-md">
            <Inventory className="h-16 w-16 fill-current" />
          </div>
          <div className="text-sm text-gray-500 mt-2 ">Inventory</div>
        </div>

        <div>
          <div className="flex justify-center items-center m-3 bg-gray-100 h-24 w-24 sm:h-28 sm:w-28 text-2xl text-gray-600 rounded-md">
            <Portfolio className="h-14 w-14 sm:h-16 sm:w-16 fill-current" />
          </div>
          <div className="text-sm text-gray-500 mt-2">My Portfolio</div>
        </div>

        <div>
          <div className="flex justify-center items-center m-3 bg-gray-100 h-24 w-24 sm:h-28 sm:w-28 text-2xl text-gray-600 rounded-md">
            <CarbidNow className="h-16 w-16 sm:h-20 sm:w-20 fill-current" />
          </div>
          <div className="text-sm text-gray-500 mt-2">CarBidNow</div>
        </div>
      </div>
    </>
  )
}
