import Link from 'next/link'

const Blogpost = ({ title, summary, read, slug }) => (
  <div className="block pt-4 mb-5 lg:mb-8">
    <div className="flex flex-col lg:justify-center h-full">
      <Link href={`/blog/${slug}`}>
        <a>
          <h1 className="mb-2 leading-6 hover:text-blue-600 font-bold text-xl text-gray-900 dark:text-gray-200 dark:hover:text-blue-600 xs:leading-6 max-w-xl xs:text-xl sm:text-2xl md:text-3xl  md:mb-3 md:leading-10 xl:text-3xl xl:font-bold">
            {title}
          </h1>
        </a>
      </Link>
      <p className="text-sm lg:max-w-xl text-gray-600 dark:text-gray-300 sm:text-base sm:leading-5 md:text-base md:-mt-1 md:tracking-tight lg:text-base line-clamp-2 sm:line-clamp-3">
        {summary}
      </p>
    </div>

    <span className="block text-xs text-gray-400 mt-2 xs:text-sm lg:text-base">{read}</span>
  </div>
)

export default Blogpost
