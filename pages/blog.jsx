import Blogpost from '@/components/Blogpost'
import Layout from 'layouts/Layout'
import { getAllFilesFrontMatter } from '@/utils/mdx'
import { NextSeo } from 'next-seo'

const Blog = ({ posts }) => {
  return (
    <>
      <NextSeo
        title="Noorullah Ahmadzai - Blog"
        openGraph={{
          url: 'https://noorullah.dev/blog',
          type: 'blog',
          images: [
            {
              url: `${process.env.NEXT_PUBLIC_ASSETS_URL}/img/SEO/Blog.png`,
              width: 800,
              height: 600,
              alt: 'Noorullah Ahmadzai',
            },

            { url: `${process.env.NEXT_PUBLIC_ASSETS_URL}/img/SEO/Blog.png` },
          ],
        }}
      />
      <Layout>
        <div className="container min-w-xs mx-auto px-6 sm:px-10 md:max-w-3xl lg:flex lg:justify-center xl:max-w-4xl">
          <main className="mx-auto">
            <div className="mt-4 md:m-0 mb-4">
              <h1 className=" xl:mt-8 font-bold leading-normal mb-5 text-2xl xs:text-3xl xs:leading-10 md:text-5xl md:mb-6 lg:leading-snug text-gray-900 dark:text-gray-200">
                All Blog Posts
              </h1>
              <p className="text-gray-700 dark:text-gray-200 text-sm -mt-5 xs:text-base xs:-mt-3 md:text-xl md:-mt-2  sm:text-lg xl:max-w-2xl">
                I love blogging about web development and the latest and great technologies that
                excites me.
              </p>
            </div>

            <div className="border-b-2 border-gray-100 -mt-5 md:-mt-4 lg:mb-8">&nbsp;</div>

            {posts.length === 0 ? (
              <h1 className="text-center py-32 text-sm xs:text-base md:text-lg lg:text-xl dark:text-gray-200">
                No Posts Found! 😥
              </h1>
            ) : (
              ''
            )}
            {posts.map((post) => {
              return <Blogpost key={post.slug} post={post} />
            })}

            {/*<div className="flex justify-center">
        <button
        type="button"
        className="flex items-center text-sm px-6 border-2 select-none border-gray-400 hover:border-gray-900 dark:text-gray-200 dark:hover:bg-gray-200 dark:hover:text-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white cursor-pointer rounded-md py-2 transition duration-500 ease-out focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black focus:ring-opacity-50 focus:ring-offset-white transform active:scale-95 disabled:bg-gray-200 disabled:hover:text-gray-700 disabled:hover:border-gray-400 disabled:cursor-not-allowed"
        >
        Load More
        </button>
      </div>*/}
          </main>
        </div>
      </Layout>
    </>
  )
}

export const getStaticProps = async () => {
  const posts = await getAllFilesFrontMatter('blog')

  return { props: { posts } }
}

export default Blog
