import Head from 'next/head'
import FacebookSVG from '../public/icons/facebook-icon.svg'
import LinkedinSVG from '../public/icons/linkedin-icon.svg'
import TwitterSVG from '../public/icons/twitter-icon.svg'

const Blog = () => (
  <div className="pb-44">
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

    <div className="flex items-center pt-14">
      <div className="h-1 bg-black w-32 mr-2">&nbsp;</div>
      <div className="font-sans font-medium leading-5">Blog</div>
    </div>
    <main className="container px-2">
      <div className="mt-8 mb-4 px-8">
        <h1 className="font-semibold leading-tight text-2xl tracking-wide capitalize">
          Local Authentication Using Passport in Node.js
        </h1>
      </div>
      <div className="flex items-center font-sans ml-8 mr-10">
        <img className="rounded-full h-14 w-14 mr-3" src="/img/profile.png" alt="profile" />
        <div>
          <h2 className="text-base font-semibold text-gray-600">Noorullah Ahmadzai</h2>
          <p className="flex flex-wrap text-xs mt-0.5 text-gray-500">
            <p>16 mins read&nbsp; - &nbsp; </p> <p> 576 views </p>
            <p>May 3rd, 2020</p>
          </p>
        </div>
      </div>
      {/* Set a min with if the tag is too small */}
      <div className="font-sans mt-5">
        <div className="flex flex-wrap gap-2 ml-8 mr-10 text-center">
          <div className="bg-gray-100 flex-1 text-gray-500 text-tiny  px-3 py-1.5 rounded-sm">
            HTML
          </div>
          <div className="bg-gray-100 flex-1 text-gray-500 text-tiny  px-3 py-1.5 rounded-sm">
            CSS
          </div>
          <div className="bg-gray-100 flex-1 text-gray-500 text-tiny  px-3 py-1.5 rounded-sm">
            JavaScript
          </div>
          <div className="bg-gray-100 flex-1 text-gray-500 text-tiny  px-3 py-1.5 rounded-sm">
            React
          </div>
          <div className="bg-gray-100 flex-1 text-gray-500 text-tiny  px-3 py-1.5 rounded-sm">
            Redux
          </div>
          <div className="bg-gray-100 flex-1 text-gray-500 text-tiny  px-3 py-1.5 rounded-sm">
            NodeJs
          </div>
          <div className="bg-gray-100 flex-1 text-gray-500 text-tiny  px-3 py-1.5 rounded-sm">
            MongoDB
          </div>
          <div className="bg-gray-100 flex-1 text-gray-500 text-tiny  px-3 py-1.5 rounded-sm">
            Fireabse
          </div>
        </div>
      </div>
      <div className="px-8">
        <p className="text-sm mt-6 text-gray-700 leading-6 ">
          For the better part of the last year, I have been investing heavily in front-end
          development and design. When I started my new role, I identified a need for a component
          library and created it. Since then, I have learned a lot about style guides, design
          systems, component libraries, and their best practices. This post will be a deep-dive on
          everything I have learned in the past year.
        </p>
      </div>
      <h2 className="ml-8 mt-6 font-semibold mb-1">Why Should You Care?</h2>
      <div className="px-8">
        <p className="text-sm text-gray-700 leading-6">
          Every website starts simple. There is maybe one page with a few distinct pieces. It has
          modest intentions.
        </p>
      </div>
      <div className="ml-8 mr-8 pt-5">
        <img className="w-full" src="/img/article.png" alt="article" />
      </div>

      <p className="px-8 text-sm mt-2 text-gray-700 leading-6 ">
        Then, slowly, it begins to scale.
      </p>

      <p className="px-8 text-sm mt-2 text-gray-700 leading-6 ">
        More pages are added and new features are built. There might even be multiple teams devoted
        to specific sections of the site. You could be developing for mobile, too.
      </p>

      <p className="px-8 text-sm mt-2 text-gray-700 leading-6 ">
        You start to notice the buttons in one part of the site are slightly different than
        everywhere else. One team decides to build a feature that another team has (unknowingly)
        already completed. Communication breakdowns happen. Consistency is lost.
      </p>

      <p className="px-8 text-sm mt-2 text-gray-700 leading-6 ">
        Is this a preventable problem? Absolutely. Yet, why does it happen over and over again?
        Unless you think about your design and development process upfront, you will run into issues
        later as you scale.
      </p>
    </main>

    <div className="flex items-center justify-between mt-16">
      <div className="flex items-center">
        <div className="h-1.5 bg-black w-24 mr-2">&nbsp;</div>
        <div className="font-sans font-semibold tracking-wider text-sm leading-5 uppercase">
          Sharing is Caring
        </div>
      </div>

      <div className="align pr-10 space-y-3">
        <FacebookSVG />
        <LinkedinSVG />
        <TwitterSVG />
      </div>
    </div>

    <div className="flex flex-col items-center font-sans ml-8 mr-8 mt-10 text-center">
      <img className="rounded-full h-24 w-24 mr-3" src="/img/profile.png" alt="profile" />
      <div>
        <h2 className="text-lg font-semibold text-gray-800 mt-3">About the Author</h2>
        <p className="text-xs mt-1 text-gray-500  tracking-tight">
          My name is Noorullah Ahmadzi. A full stack web developer who specializes in React, NodeJs,
          MongoDB and JamStack. I&apos;m passinate about web development and technology.
        </p>
      </div>
    </div>
  </div>
)

//? 1: Smaller Margin on the sides in mobile view

export default Blog
