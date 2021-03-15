import Link from 'next/link'

const ArticleCard = ({ title, paragraph }) => (
  <div className="block pt-4 mb-2 lg:mb-4">
    <div className="flex">
      <Link href="/blog/article">
        <a>
          <div className="flex flex-col lg:justify-center h-full">
            <h1 className="mb-2 leading-6 hover:text-blue-500 font-bold text-xl text-gray-900 xs:leading-6 xs:text-xl sm:text-2xl md:text-3xl md:mb-3 md:leading-10 xl:text-3xl xl:font-bold">
              {title}
            </h1>
            <p className="text-sm lg:max-w-xl text-gray-600 sm:text-base sm:leading-5 md:text-base md:-mt-1 md:tracking-tight lg:text-base line-clamp-2 sm:line-clamp-3">
              {paragraph}
            </p>
          </div>
        </a>
      </Link>
    </div>
  </div>
)

export default ArticleCard
