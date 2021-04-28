import { details } from '@/components/icons/TechStackIcons'

const TechStack = () => {
  return (
    <div className="flex flex-wrap -mx-3 justify-center xs:justify-start text-center mt-8">
      {details.map((tech) => {
        return (
          <div key={tech.name}>
            <div className="flex justify-center m-3 items-center bg-gray-100 h-24 w-24 sm:h-28 sm:w-28  text-2xl text-gray-600 dark:bg-gray-800 dark: dark:text-gray-400 rounded-md">
              <tech.icon className="h-14 w-14 sm:h-16 sm:w-16 fill-current" />
            </div>
            <div className="text-sm text-gray-500 mt-2">{tech.name}</div>
          </div>
        )
      })}
    </div>
  )
}

export default TechStack
