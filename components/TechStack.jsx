import * as icon from '@/components/icons/landingIcons'

const details = [
  {
    name: 'HTML',
    icon: icon.html,
  },

  {
    name: 'CSS',
    icon: icon.css,
  },

  {
    name: 'Sass',
    icon: icon.sass,
  },

  {
    name: 'TailwindCSS',
    icon: icon.tailwind,
  },

  {
    name: 'JavaScript',
    icon: icon.javascript,
  },

  {
    name: 'TypeScript',
    icon: icon.typescript,
  },

  {
    name: 'React',
    icon: icon.react,
  },

  {
    name: 'Redux',
    icon: icon.redux,
  },

  {
    name: 'NextJS',
    icon: icon.nextjs,
  },

  {
    name: 'Expressjs',
    icon: icon.expressjs,
  },

  {
    name: 'Mongodb',
    icon: icon.mongodb,
  },

  {
    name: 'Restapi',
    icon: icon.restapi,
  },

  {
    name: 'GraphQL',
    icon: icon.graphqL,
  },

  {
    name: 'KeystoneJS',
    icon: icon.keystonejs,
  },

  {
    name: 'Git & GitHub',
    icon: icon.github,
  },

  {
    name: 'NPM',
    icon: icon.npm,
  },

  {
    name: 'Web Hosting',
    icon: icon.hosting,
  },
]

const TechStack = () => {
  return (
    <div className="flex flex-wrap gap-4 justify-center xs:justify-start text-center mt-8">
      {details.map((tech) => {
        return (
          <div key={tech.name}>
            <div className="flex justify-center items-center bg-gray-100 h-28 w-28 text-2xl text-gray-600 dark:bg-gray-800 dark: dark:text-gray-400 rounded-md">
              <tech.icon className="h-20 w-20 fill-current" />
            </div>
            <div className="text-sm text-gray-500 mt-2">{tech.name}</div>
          </div>
        )
      })}
    </div>
  )
}

export default TechStack
