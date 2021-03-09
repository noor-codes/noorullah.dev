import Head from 'next/head'
import SectionTitle from '@/articles/SectionTitle'
import BlogTitle from '@/blog/BlogTitle'
import UserInfo from '@/articles/UserInfo'
import TagsCollection from '@/articles/TagsCollection'
import Sharing from '@/articles/Sharing'
import AboutAuthor from '@/articles/AboutAuthor'
import Footer from '@/articles/Footer'

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

    <SectionTitle name="Blog" />
    <main className="xs:px-4 mx-auto md:px-24 md:pt-5 xl:px-60">
      <BlogTitle title="Local Authentication Using Passport in Node.js" />
      <UserInfo name="Noorullah Ahmadzai" views="512" readtime="16" date="May 3rd, 2020" />
      <TagsCollection />
      <div className="px-8">
        <p className="text-sm mt-6 text-gray-700 leading-6 xs:text-base xs:tracking-tight lg:leading-7 lg:tracking-wide">
          For the better part of the last year, I have been investing heavily in front-end
          development and design. When I started my new role, I identified a need for a component
          library and created it. Since then, I have learned a lot about style guides, design
          systems, component libraries, and their best practices. This post will be a deep-dive on
          everything I have learned in the past year.
        </p>
      </div>
      <h2 className="ml-8 mt-6 font-semibold mb-1 xs:text-lg lg:leading-7 lg:text-xl">
        Why Should You Care?
      </h2>
      <div className="px-8">
        <p className="text-sm text-gray-700 leading-6 xs:text-base xs:tracking-tight lg:leading-7 lg:tracking-wide">
          Every website starts simple. There is maybe one page with a few distinct pieces. It has
          modest intentions.
        </p>
      </div>
      <div className="ml-8 mr-8 pt-5">
        <img className="w-full" src="/img/article.png" alt="article" />
      </div>

      <p className="px-8 text-sm mt-2 text-gray-700 leading-6 xs:text-base xs:tracking-tight lg:leading-7 lg:tracking-wide">
        Then, slowly, it begins to scale.
      </p>

      <p className="px-8 text-sm mt-2 text-gray-700 leading-6 xs:text-base xs:tracking-tight lg:leading-7 lg:tracking-wide">
        More pages are added and new features are built. There might even be multiple teams devoted
        to specific sections of the site. You could be developing for mobile, too.
      </p>

      <p className="px-8 text-sm mt-2 text-gray-700 leading-6 xs:text-base xs:tracking-tight lg:leading-7 lg:tracking-wide">
        You start to notice the buttons in one part of the site are slightly different than
        everywhere else. One team decides to build a feature that another team has (unknowingly)
        already completed. Communication breakdowns happen. Consistency is lost.
      </p>

      <p className="px-8 text-sm mt-2 text-gray-700 leading-6 xs:text-base xs:tracking-tight lg:leading-7 lg:tracking-wide">
        Is this a preventable problem? Absolutely. Yet, why does it happen over and over again?
        Unless you think about your design and development process upfront, you will run into issues
        later as you scale.
      </p>
    </main>

    <Sharing />

    <AboutAuthor
      name="Noorullah Ahmadzai"
      description=" My name is Noorullah Ahmadzi. A full stack web developer who specializes in React, NodeJs,
        MongoDB and JamStack. I'm passinate about web development and technology."
    />

    <Footer />
  </div>
)

export default Blog
