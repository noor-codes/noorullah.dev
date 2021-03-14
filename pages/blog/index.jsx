import Head from 'next/head'

import PageName from '@/components/PageName'
import Footer from '@/components/Footer'
import ArticleCard from '@/components/ArticleCard'

const Blog = () => (
  <div>
    <Head>
      <title>Noorullah Ahmadzai</title>
      <>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700&display=swap"
          rel="stylesheet"
        />
      </>
    </Head>

    <PageName name="Blog" />
    <div className="container min-w-xs mx-auto px-6">
      <main className="mx-auto md:pt-5">
        <div className="mt-8 mb-4">
          <h1 className="font-bold leading-normal mb-5 text-3xl xs:font-bold xs:text-3xl xs:leading-10 md:text-4xl lg:mb-6 lg:pr-36 lg:leading-snug lg:text-5xl">
            All Blog Posts
          </h1>
          <p className="text-gray-600 text-sm  xl:text-lg -mt-5">
            I love blogging about web development and the latest and great technologies that excites
            me.
          </p>
        </div>

        <div className="mt-4">
          <label
            htmlFor="search"
            className="relative mt-2 text-gray-500 lg:text-xl tracking-normal"
          >
            Search Blog Posts
            <img
              src="/icons/search-icon.svg"
              alt="Search Icon"
              className="absolute h-5 lg:h-6 top-8 lg:top-12 lg:text-xl right-3 cursor-pointer bg:gray-300"
            />
            <input
              id="search"
              type="text"
              className="py-1 lg:py-2 mt-1 w-full border-2 flex-1 border-gray-300 rounded mb-4 focus:border-gray-400 text-gray-700 focus:ring-gray-400 lg:mt-2"
            />
          </label>
        </div>

        <ArticleCard
          title="Local Authentication Using passport in Node.JS"
          paragraph="lorem ipsum dolor sit amet, consecteturlorem ipsum dolor sit amet consectetur adip lorem ipsum dolor sit amet consecteturlorem ipsum dolor sit amet, consectetur adip"
        />
        <ArticleCard
          title="New Features in Jest"
          paragraph="lorem ipsum dolor sit amet, consecteturlorem ipsum dolor sit amet consectetur adip"
        />
        <ArticleCard
          title="5 CSS Tricks you didn't know existed"
          paragraph="lorem ipsum dolor sit amet, consecteturlorem ipsum dolor sit amet consectetur adip"
        />

        <div className="flex justify-center">
          <button
            type="button"
            className="text-sm mt-14 text-gray-700 hover:bg-gray-200 cursor-pointer rounded-md px-4 py-2 transition duration-500 ease-out select-none focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-red-100 transform active:scale-90"
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
