import { IconCard } from './IconCard'

export const RecentProjects = () => {
  return (
    <>
      <div className="flex flex-wrap -mx-3 justify-center xs:justify-start text-center mt-8 mb-10">
        {projects.map((project) => (
          <IconCard key={project.name} name={project.name} icon={project.icon} />
        ))}
      </div>
    </>
  )
}

const projects = [
  {
    name: 'Inventory',
    icon: '/icons/landing/projects/inventory-icon.svg',
  },
  {
    name: 'My Portfolio',
    icon: '/icons/landing/projects/portfolio-icon.svg',
  },
  {
    name: 'CarBidNow',
    icon: '/icons/landing/projects/carbidnow-icon.svg',
  },
  {
    name: 'Games CMS',
    icon: '/icons/landing/projects/gamerina-cms.svg',
  },
] as const
