import { NextSeo } from 'next-seo'
import Image from 'next/image'
import { format, parseISO } from 'date-fns'

import PageSection from '@/components/PageSection'
import Sharing from '@/components/Sharing'
import Layout from 'layouts/Layout'

const Blog = (props) => {
  const { publishedAt, slug, summary, readingTime, title, tags, banner } = props.frontMatter

  return (
    <div>
      <NextSeo
        title={`${title} - Noorullah Ahmadzai`}
        description={summary}
        openGraph={{
          url: `https://noorullah.dev/blog/${slug}`,
          title: title,
          description: summary,
          type: 'blog',
          images: [
            {
              url: `/static${banner}`,
              width: 800,
              height: 600,
              alt: title,
            },

            { url: `/static${banner}` },
          ],
        }}
      />
      <Layout>
        <div className="mt-12 md:mt-20" />
        <PageSection name="Blog" />
        <div className="container min-w-xs mx-auto px-6 sm:px-10 md:max-w-2xl xl:max-w-3xl">
          <main className="xs:px-4 mx-auto md:pt-5">
            <article className="mt-8 mb-4">
              <h1 className="font-bold leading-tight text-2xl tracking-wide capitalize md:text-4xl lg:leading-tight text-gray-900 dark:text-gray-200">
                {title}
              </h1>
            </article>

            <div className="flex items-center">
              <div className="h-12 w-12 mr-3 mt-2 xs:h-16 xs:w-16">
                <Image
                  className="rounded-full"
                  src="/img/profile.jpg"
                  alt="Noorullah Ahmadzai"
                  width={100}
                  height={100}
                  layout="responsive"
                />
              </div>

              <div>
                <h2 className="text-md font-semibold text-gray-600 dark:text-gray-300 tacking-wide xs:text-lg md:text-xl">
                  Noorullah Ahmadzai
                </h2>
                <p className="flex flex-wrap text-xs mt-0.5 text-gray-500 dark:text-gray-400 xs:text-sm">
                  <span>{format(parseISO(publishedAt), 'MMMM, do yyyy')}</span> &nbsp;-&nbsp;
                  <span>{readingTime.text} &nbsp; </span>
                </p>
              </div>
            </div>

            <div className="mt-5 lg:mb-8">
              <div className="flex flex-wrap text-center -mx-1">
                {tags.map((name) => (
                  <div
                    key={name}
                    className="bg-gray-100 m-1 dark:bg-gray-800 px-2 text-2xl flex-1 text-gray-600 dark:text-gray-200 rounded-sm text-tiny select-none md:text-sm md:px-4 md:py-2"
                  >
                    {name}
                  </div>
                ))}
              </div>
            </div>
            <article className="prose prose-sm sm:prose-md md:prose-lg text-gray-900 dark:text-gray-400 mt-10">
              {props.children}
            </article>
          </main>
        </div>

        <Sharing slug={slug} title={title} />
        <div className="container min-w-xs mx-auto px-4 sm:px-10 md:max-w-3xl xl:max-w-4xl">
          <div className="flex flex-col items-center mt-10 text-center xs:mt-16 xl:py-12">
            <div className="h-24 w-24 xs:h-28 xs:w-28 md:h-32 md:w-32 md:mb-1 xl:h-40 xl:w-40">
              <Image
                className="rounded-full"
                src="/img/profile.jpg"
                alt="Noorullah Ahmadzai"
                width={200}
                height={200}
                layout="responsive"
              />
            </div>
            <div>
              <h2 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mt-3 xs:text-lg md:text-2xl xs:mt-4 xl:text-2xl xl:mt-4">
                About the Author
              </h2>
              <p className="text-sm mt-1 text-gray-500 dark:text-gray-300 tracking-tight leading-5 xs:max-w-xs md:max-w-lg md:text-base xl:max-w-xl xl:text-lg">
                I am Noorullah Ahmadzai. A full stack web developer who specializes in React,
                NodeJs, MongoDB and JamStack. I&apos;m passinate about web development and
                technology.
              </p>
            </div>
          </div>
        </div>
      </Layout>
    </div>
  )
}
export default Blog
