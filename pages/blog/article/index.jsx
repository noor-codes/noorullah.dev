import Head from 'next/head'

import PageSection from '@/components/PageSection'
import Sharing from '@/components/Sharing'
import Footer from '@/components/Footer'

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

    <PageSection name="Blog" />
    <main className="xs:px-4 mx-auto md:pt-5">
      <article className="props prose-lg mt-8 mb-4">
        <h1 className="font-semibold leading-tight text-2xl tracking-wide capitalize xs:font-bold md:text-3xl">
          Local Authentication Using Passport in Node.js
        </h1>
      </article>

      <div className="flex items-center font-sans">
        <img
          className="rounded-full h-14 w-14 xs:h-16 xs:w-16 md:h-20 md:w-20"
          src="/img/profile.jpg"
          alt="Noorullah Ahmadzai"
        />
        <div>
          <h2 className="text-base font-semibold text-gray-600 tacking-wide xs:text-lg">
            Noorullah Ahmadzai
          </h2>
          <p className="flex flex-wrap text-xs mt-0.5 text-gray-500 xs:text-sm">
            <span>16 mins read&nbsp; - &nbsp; </span> <span> 512 views - &nbsp;</span>
            <span>May 3rd, 2020</span>
          </p>
        </div>
      </div>

      <div className="font-sans mt-5 lg:mb-8">
        <div className="flex flex-wrap gap-2 text-center">
          {['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'NodeJS', 'MongoDB', 'Firebase'].map(
            (name) => (
              <div
                key={name}
                className="bg-gray-100 flex-1 text-gray-600 text-tiny py-1.5 md:text-bigger rounded-sm"
              >
                {name}
              </div>
            )
          )}
        </div>
      </div>
      <article className="props prose-lg">
        <div>
          <p className="text-sm md:text-md lg:text-lg mt-6 text-gray-700 leading-5 xs:text-base md:text-md xs:tracking-tight lg:leading-7">
            For the better part of the last year, I have been investing heavily in front-end
            development and design. When I started my new role, I identified a need for a component
            library and created it. Since then, I have learned a lot about style guides, design
            systems, component libraries, and their best practices. This post will be a deep-dive on
            everything I have learned in the past year.
          </p>
        </div>
        <h2 className="mt-6 font-semibold mb-1 xs:text-lg lg:leading-7 lg:text-xl">
          Why Should You Care?
        </h2>
        <div>
          <p className="text-sm text-gray-700 leading-6 xs:text-base xs:tracking-tight lg:leading-7 lg:tracking-wide">
            Every website starts simple. There is maybe one page with a few distinct pieces. It has
            modest intentions.
          </p>
        </div>
        <div className="pt-5">
          <img className="w-full" src="/img/article.png" alt="article" />
        </div>

        <p className="text-sm mt-2 text-gray-700 leading-6 xs:text-base xs:tracking-tight lg:leading-7 lg:tracking-wide">
          Then, slowly, it begins to scale.
        </p>

        <p className="text-sm mt-2 text-gray-700 leading-6 xs:text-base xs:tracking-tight lg:leading-7 lg:tracking-wide">
          More pages are added and new features are built. There might even be multiple teams
          devoted to specific sections of the site. You could be developing for mobile, too.
        </p>

        <p className="text-sm mt-2 text-gray-700 leading-6 xs:text-base xs:tracking-tight lg:leading-7 lg:tracking-wide">
          You start to notice the buttons in one part of the site are slightly different than
          everywhere else. One team decides to build a feature that another team has (unknowingly)
          already completed. Communication breakdowns happen. Consistency is lost.
        </p>

        <p className="text-sm mt-2 text-gray-700 leading-6 xs:text-base xs:tracking-tight lg:leading-7 lg:tracking-wide">
          Is this a preventable problem? Absolutely. Yet, why does it happen over and over again?
          Unless you think about your design and development process upfront, you will run into
          issues later as you scale.
        </p>
      </article>
    </main>

    <Sharing />

    <div className="flex flex-col items-center font-sans mt-10 text-center xs:mt-16 xl:py-12">
      <img
        className="rounded-full h-24 w-24 xs:h-32 xs:w-32 md:mb-1 xl:h-40 xl:w-40"
        src="/img/profile.jpg"
        alt="Noorullah Ahmadzai"
      />
      <div>
        <h2 className="text-lg font-semibold text-gray-800 mt-3 xs:text-xl xs:mt-4 xl:text-2xl xl:mt-4">
          About the Author
        </h2>
        <p className="text-sm mt-1 text-gray-500 tracking-tight leading-5 xs:text-base xl:text-lg">
          I am Noorullah Ahmadzi. A full stack web developer who specializes in React, NodeJs,
          MongoDB and JamStack. I&apos;m passinate about web development and technology.
        </p>
      </div>
    </div>

    <Footer />
  </div>
)

export default Blog
