import { NextSeo } from 'next-seo'

import PageSection from '@/components/PageSection'
import Sharing from '@/components/Sharing'
import Footer from '@/components/Footer'

const Blog = () => (
  <div>
    <NextSeo
      title="Article Title"
      description="Article Description goes here"
      openGraph={{
        url: 'https://www.url.ie/a',
        title: 'Open Graph Title',
        description: 'Open Graph Description',
        images: [
          {
            url: 'https://source.unsplash.com/800x600',
            width: 800,
            height: 600,
            alt: 'First Image Tags',
          },
          {
            url: 'https://source.unsplash.com/900x800',
            width: 900,
            height: 800,
            alt: 'Second Image Tag',
          },
          { url: 'https://source.unsplash.com/800x600' },
          { url: 'https://source.unsplash.com/900x800' },
        ],
        site_name: 'Noorullah Ahmadzai',
      }}
      twitter={{
        handle: '@noorullah_ah',
        cardType: 'summary_large_image',
        // site: '@site',
      }}
    />
    <PageSection name="Blog" />
    <div className="container min-w-xs mx-auto px-6 sm:px-10 md:max-w-2xl xl:max-w-3xl">
      <main className="xs:px-4 mx-auto md:pt-5">
        <article className="mt-8 mb-4">
          <h1 className="font-bold leading-tight text-2xl tracking-wide capitalize md:text-4xl lg:leading-tight">
            Local Authentication Using Passport in Node.js
          </h1>
        </article>

        <div className="flex items-center font-sans">
          <img
            className="rounded-full h-16 w-16 xs:h-16 xs:w-16 mr-3 mt-2 md:h-20 md:w-20 lg:h-24 lg:w-24"
            src="/img/profile.jpg"
            alt="Noorullah Ahmadzai"
          />
          <div>
            <h2 className="text-md font-semibold text-gray-600 tacking-wide xs:text-lg md:text-xl lg:text-2xl">
              Noorullah Ahmadzai
            </h2>
            <p className="flex flex-wrap text-xs mt-0.5 text-gray-500 xs:text-sm md:text-base lg:text-lg">
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
                  className="bg-gray-100 px-2 text-2xl flex-1 text-gray-600 rounded-sm text-tiny select-none md:text-sm md:px-4 md:py-2"
                >
                  {name}
                </div>
              )
            )}
          </div>
        </div>
        <article className="prose prose-sm sm:prose-md md:prose-lg">
          <div>
            <p>
              For the better part of the last year, I have been investing heavily in front-end
              development and design. When I started my new role, I identified a need for a
              component library and created it. Since then, I have learned a lot about style guides,
              design systems, component libraries, and their best practices. This post will be a
              deep-dive on everything I have learned in the past year.
            </p>
          </div>
          <h2>Why Should You Care?</h2>
          <div>
            <p>
              Every website starts simple. There is maybe one page with a few distinct pieces. It
              has modest intentions.
            </p>
          </div>
          <div className="pt-5">
            <img className="w-full" src="/img/article.png" alt="article" />
          </div>

          <p>Then, slowly, it begins to scale.</p>

          <p>
            More pages are added and new features are built. There might even be multiple teams
            devoted to specific sections of the site. You could be developing for mobile, too.
          </p>

          <p>
            You start to notice the buttons in one part of the site are slightly different than
            everywhere else. One team decides to build a feature that another team has (unknowingly)
            already completed. Communication breakdowns happen. Consistency is lost.
          </p>

          <p>
            Is this a preventable problem? Absolutely. Yet, why does it happen over and over again?
            Unless you think about your design and development process upfront, you will run into
            issues later as you scale.
          </p>
        </article>
      </main>
    </div>

    <Sharing />
    <div className="container min-w-xs mx-auto px-4 sm:px-10 md:max-w-3xl xl:max-w-4xl">
      <div className="flex flex-col items-center font-sans mt-10 text-center xs:mt-16 xl:py-12">
        <img
          className="rounded-full h-24 w-24 xs:h-28 xs:w-28 md:h-32 md:w-32 md:mb-1 xl:h-40 xl:w-40"
          src="/img/profile.jpg"
          alt="Noorullah Ahmadzai"
        />
        <div>
          <h2 className="text-lg font-semibold text-gray-800 mt-3 xs:text-lg md:text-2xl xs:mt-4 xl:text-2xl xl:mt-4">
            About the Author
          </h2>
          <p className="text-sm mt-1 text-gray-500 tracking-tight leading-5 xs:max-w-xs md:max-w-lg md:text-base xl:max-w-xl xl:text-lg">
            I am Noorullah Ahmadzi. A full stack web developer who specializes in React, NodeJs,
            MongoDB and JamStack. I&apos;m passinate about web development and technology.
          </p>
        </div>
      </div>
    </div>

    <Footer />
  </div>
)

export default Blog
