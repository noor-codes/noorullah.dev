import PageName from '@/components/PageName'
import Footer from '@/components/Footer'
import ArticleCard from '@/components/ArticleCard'

const Blog = () => (
  <div>
    <PageName name="Blog" />
    <div className="container min-w-xs mx-auto px-6 sm:px-10 md:max-w-3xl">
      <main className="mx-auto md:pt-5">
        <div className="mt-8 mb-4">
          <h1 className="font-bold leading-normal mb-5 text-3xl xs:text-4xl xs:leading-10 md:text-6xl md:mb-6 lg:leading-snug">
            All Blog Posts
          </h1>
          <p className="text-gray-700 text-sm -mt-5 xs:text-base xs:-mt-3 md:text-xl md:-mt-2  sm:text-lg">
            I love blogging about web development and the latest and great technologies that excites
            me.
          </p>
        </div>

        <div className="border-b-2 border-gray-100 -mt-5 md:-mt-4 lg:mb-8">&nbsp;</div>

        <ArticleCard
          title="Local Authentication Using passport in Node.JS"
          paragraph="lorem ipsum dolor sit amet, consecteturlorem ipsum dolor sit amet sit amet adip lorem ipsum dolor sit amet sit ametlorem ipsum dolor sit amet, sit amet, adip"
        />
        <ArticleCard
          title="New Features in Jest"
          paragraph="lorem ipsum dolor sit amet, sit amet,lorem ipsum dolor sit amet sit amet adip"
        />
        <ArticleCard
          title="5 CSS Tricks you didn't know existed"
          paragraph="lorem ipsum dolor sit amet, sit amet,lorem ipsum dolor sit amet sit amet adip"
        />

        <div className="flex justify-center">
          <button
            type="button"
            className="text-sm mt-14 px-5 border-2 select-none border-gray-400 hover:border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white cursor-pointer rounded-md py-2 transition duration-500 ease-out focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black focus:ring-opacity-50 focus:ring-offset-white transform active:scale-90"
          >
            Load More
          </button>
        </div>
      </main>
    </div>

    <Footer />
  </div>
)

export default Blog
