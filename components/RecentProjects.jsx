import Inventory from '@/public/icons/landing/projects/inventory-icon.svg'
import Portfolio from '@/public/icons/landing/projects/portfolio-icon.svg'
import Carbidnow from '@/public/icons/landing/projects/carbidnow-icon.svg'

const RecentProjects = () => {
  return (
    <>
      <div className="flex flex-wrap gap-5 justify-center xs:justify-start text-center mt-8 mb-10">
        <div>
          <div className="flex justify-center items-center bg-gray-100 h-36 w-36 text-2xl text-gray-600 rounded-md dark:bg-gray-800 dark: dark:text-gray-400 ">
            <Inventory className="h-20 w-h-20 fill-current" />
          </div>
          <div className="text-sm text-gray-500 mt-2 ">Inventory</div>
        </div>

        <div>
          <div className="flex justify-center items-center bg-gray-100 h-36 w-36 text-2xl text-gray-600 rounded-md dark:bg-gray-800 dark: dark:text-gray-400 ">
            <Portfolio className="h-20 w-h-20 fill-current" />
          </div>
          <div className="text-sm text-gray-500 mt-2">My Portfolio</div>
        </div>

        <div>
          <div className="flex justify-center items-center bg-gray-100 h-36 w-36 text-2xl text-gray-600 rounded-md dark:bg-gray-800 dark: dark:text-gray-400 ">
            <Carbidnow className="h-24 w-h-24 fill-current" />
          </div>
          <div className="text-sm text-gray-500 mt-2">CarBidNow</div>
        </div>
      </div>
    </>
  )
}

export default RecentProjects
