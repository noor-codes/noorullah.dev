import Blogpost from '@/components/Blogpost'
import Layout from 'layouts/Layout'
import { getAllFilesFrontMatter } from '@/utils/mdx'
import { NextSeo } from 'next-seo'
import { motion } from 'framer-motion'
import { fadeInVariant } from 'variants/fadeInVariant'

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
              width: 1920,
              height: 1060,
              alt: 'Noorullah Ahmadzai',
            },

            { url: `${process.env.NEXT_PUBLIC_ASSETS_URL}/img/SEO/Blog.png` },
          ],
        }}
      />
      <Layout>
        <div className="container min-w-xs mx-auto mt-14 xs:mt-20 px-6 sm:px-10 md:max-w-3xl lg:flex  xl:max-w-4xl">
          <main className="mx-auto">
            <motion.div
              variants={fadeInVariant}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.1 }}
              className="mt-4 md:m-0 mb-4"
            >
              <h1 className="xl:mt-8 font-bold leading-normal mb-5 text-2xl xs:text-3xl xs:leading-10 md:text-5xl md:mb-6 lg:leading-snug text-gray-900 dark:text-gray-200">
                My Blog Posts
              </h1>
              <p className="text-gray-700 dark:text-gray-200 text-sm -mt-5 xs:text-base xs:-mt-3 md:text-xl md:-mt-2  sm:text-lg xl:max-w-2xl">
                Web Development, The latest and greatest technologies. If you ask me a question
                twice. I will blog about it.
              </p>
              <div className="border-b-2 border-gray-100 -mt-5 md:-mt-4 lg:mb-2">&nbsp;</div>
            </motion.div>

            <motion.div
              variants={fadeInVariant}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.2 }}
            >
              {posts.length === 0 ? (
                <h1 className="text-center text-gray-500 py-16 text-sm xs:text-base md:text-lg lg:text-xl dark:text-gray-200">
                  No Posts published yet! 😄 <br /> Keep an eye out. I will post my very first one
                  soon...
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
            </motion.div>
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
