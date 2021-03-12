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
    <main className="xs:px-4 mx-auto md:px-20 md:pt-5 xl:px-60">
      <div className="mt-8 mb-4 px-8">
        <h1 className="font-bold leading-normal text-2xl tracking-tight xs:font-bold xs:text-3xl xs:leading-10 md:text-4xl lg:mb-6 lg:pr-36 lg:leading-snug lg:text-5xl">
          I write about Web Development and Modern Technologies
        </h1>
      </div>
      <p className="px-8 text-sm xs:text-base xs:tracking-tight md:text-lg lg:pr-36 lg:text-xl">
        It is a long established fact that a reader will be distracted by the readable content of a
        page when looking at its layout. The point of using Lorem Ipsum is.
      </p>

      <div className="mx-8 mt-4">
        <label htmlFor="search" className="relative mt-2 text-gray-800 lg:text-xl tracking-tight">
          Search Blog Posts
          <img
            src="/icons/search-icon.svg"
            alt="Search Icon"
            className="absolute h-5 lg:h-6 top-9 lg:top-12 lg:text-xl right-3 cursor-pointer bg:gray-300"
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
        paragraph="lorem ipsum dolor sit amet, consecteturlorem ipsum dolor sit amet, consectetur adip"
      />
      <ArticleCard
        title="New Features in Jest"
        paragraph="lorem ipsum dolor sit amet, consecteturlorem ipsum dolor sit amet, consectetur adip"
      />
      <ArticleCard
        title="5 CSS Tricks you didn't know existed"
        paragraph="lorem ipsum dolor sit amet, consecteturlorem ipsum dolor sit amet, consectetur adip"
      />

      <div className="flex justify-center">
        <button
          type="button"
          className="text-sm mt-14 text-gray-700 hover:bg-gray-200 cursor-pointer rounded-md px-4 py-2 transition duration-500 ease-out select-none focus:outline-none focus:ring-2 focus:ring-gray-400 transform active:scale-90"
        >
          Load More
        </button>
      </div>
    </main>

    <Footer />
  </div>
)

export default Blog
