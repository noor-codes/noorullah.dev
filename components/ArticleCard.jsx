import Link from 'next/link'

const ArticleCard = ({ title, paragraph }) => (
  <div className="block pt-4 mb-2">
    <div className="flex">
      <Link href="/blog/article">
        <a>
          <div className="flex flex-col lg:justify-center h-full">
            <h1 className="hover:text-blue-500 mb-2 leading-6 text-xl text-gray-700 font-bold tracking-normalxs:text-lg xs:leading-6 md:text-xl xl:text-3xl xl:font-bold">
              {title}
            </h1>
            <p className="text-sm mt-1 text-gray-600 md:text-sm lg:text-base line-clamp-2">
              {paragraph}
            </p>
          </div>
        </a>
      </Link>
    </div>
    <div className="border-b-2 border-gray-100 -mt-4">&nbsp;</div>
  </div>
)

export default ArticleCard
