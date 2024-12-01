import { IconCard } from './IconCard'

export const TechStack = () => {
  return (
    <div className="flex flex-wrap -mx-3 justify-center xs:justify-start text-center mt-8">
      {details.map((tech) => (
        <IconCard key={tech.name} name={tech.name} icon={tech.icon} />
      ))}
    </div>
  )
}

export const details = [
  {
    name: 'HTML',
    icon: '/icons/landing/tech/html-icon.svg',
  },

  {
    name: 'CSS',
    icon: '/icons/landing/tech/css-icon.svg',
  },

  {
    name: 'Sass',
    icon: '/icons/landing/tech/sass-icon.svg',
  },

  {
    name: 'TailwindCSS',
    icon: '/icons/landing/tech/tailwindcss-icon.svg',
  },

  {
    name: 'JavaScript',
    icon: '/icons/landing/tech/javascript-icon.svg',
  },

  {
    name: 'TypeScript',
    icon: '/icons/landing/tech/typescript-icon.svg',
  },

  {
    name: 'React',
    icon: '/icons/landing/tech/react-icon.svg',
  },

  {
    name: 'Redux',
    icon: '/icons/landing/tech/redux-icon.svg',
  },

  {
    name: 'NextJS',
    icon: '/icons/landing/tech/nextjs-icon.svg',
  },

  {
    name: 'ExpressJS',
    icon: '/icons/landing/tech/express-icon.svg',
  },

  {
    name: 'MongoDb',
    icon: '/icons/landing/tech/mongodb-icon.svg',
  },

  {
    name: 'Rest API',
    icon: '/icons/landing/tech/api-icon.svg',
  },

  // {
  //   name: 'GraphQL',
  //   icon: graphql,
  // },

  {
    name: 'Apollo-Client',
    icon: '/icons/landing/tech/apollo-icon.svg',
  },

  {
    name: 'KeystoneJS',
    icon: '/icons/landing/tech/keystonejs-icon.svg',
  },

  {
    name: 'Git & GitHub',
    icon: '/icons/landing/tech/github-icon.svg',
  },
] as const
