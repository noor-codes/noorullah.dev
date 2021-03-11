import Link from 'next/link'

const ArticleCard = ({ title, paragraph }) => (
  <div className="block pt-5 mx-8">
    <div className="flex">
      <img src="/img/profile.jpg" alt="topic" className="h-16 w-16 rounded xs:h-20 xs:w-20" />
      <Link href="/blog/article">
        <a>
          <div className="flex flex-col">
            <h2 className="ml-3 leading-5 text-base font-semibold tracking-tight text-gray-700 xs:text-lg xs:leading-6">
              {title}
            </h2>
            <p className="text-xs pl-3 mt-1 text-gray-600">{paragraph}</p>
          </div>
        </a>
      </Link>
    </div>
  </div>
)

export default ArticleCard
