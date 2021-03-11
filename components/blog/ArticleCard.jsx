import Link from 'next/link'

const ArticleCard = ({ title, paragraph }) => (
  <div className="block pt-5 mx-8 lg:mb-2">
    <div className="flex">
      <img
        src="/img/profile.jpg"
        alt="topic"
        className="h-16 w-16 rounded xs:h-20 xs:w-20 md:w-24 md:h-24 lg:h-40 lg:w-40"
      />
      <Link href="/blog/article">
        <a>
          <div className="flex flex-col lg:justify-center h-full">
            <h2 className="ml-3 lg:ml-8 leading-5 text-base font-semibold tracking-tight text-gray-700 xs:text-lg xs:leading-6 md:text-xl lg:text-2xl">
              {title}
            </h2>
            <p className="text-xs lg:ml-5 pl-3 mt-1 text-gray-600 md:text-sm lg:text-lg">
              {paragraph}
            </p>
          </div>
        </a>
      </Link>
    </div>
  </div>
)

export default ArticleCard
