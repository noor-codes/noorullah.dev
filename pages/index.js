import Head from 'next/head'

// Black Icons
import FacebookBlack from '../public/icons/social media/black/facebook-icon.svg'
import LinkedinBlack from '../public/icons/social media/black/linkedin-icon.svg'
import TwitterBlack from '../public/icons/social media/black/twitter-icon.svg'

//White Icons
import TwitterWhite from '../public/icons/social media/white/twitter-icon.svg'
import GitHubWhite from '../public/icons/social media/white/github-icon.svg'
import InstagramWhite from '../public/icons/social media/white/instagram-icon.svg'
import LinkedinWhite from '../public/icons/social media/white/linkedin-icon.svg'

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

    <div className="flex items-center pt-14 md:pt-24">
      <div className="h-1 md:h-1.5 bg-black w-32 mr-2 xs:w-40 md:w-44">&nbsp;</div>
      <div className="font-sans font-medium leading-5 md:text-xl md:font-semibold">Blog</div>
    </div>
    <main className="xs:px-4 mx-auto md:px-20 md:pt-5 ">
      <div className="mt-8 mb-4 px-8">
        <h1 className="font-semibold leading-tight text-2xl tracking-wide capitalize xs:font-bold md:text-3xl lg:mb-6">
          Local Authentication Using Passport in Node.js
        </h1>
      </div>
      <div className="flex items-center font-sans ml-8 mr-10">
        <img
          className="rounded-full h-14 w-14 mr-3 xs:h-16 xs:w-16 md:h-20 md:w-20"
          src="/img/profile.jpg"
          alt="Noorullah Ahmadzai"
        />
        <div>
          <h2 className="text-base font-semibold text-gray-600 tacking-wide xs:text-lg">
            Noorullah Ahmadzai
          </h2>
          <p className="flex flex-wrap text-xs mt-0.5 text-gray-500 xs:text-sm">
            <p>16 mins read&nbsp; - &nbsp; </p> <p> 576 views - &nbsp;</p>
            <p>May 3rd, 2020</p>
          </p>
        </div>
      </div>
      <div className="font-sans mt-5 lg:mb-8">
        <div className="flex flex-wrap gap-2 ml-8 mr-10 text-center">
          <div className="bg-gray-100 flex-1 text-gray-500 text-tiny  px-3 py-1.5 md:px-4 md:text-sm rounded-sm">
            HTML
          </div>
          <div className="bg-gray-100 flex-1 text-gray-500 text-tiny  px-3 py-1.5 md:px-4 md:text-sm rounded-sm">
            CSS
          </div>
          <div className="bg-gray-100 flex-1 text-gray-500 text-tiny  px-3 py-1.5 md:px-4 md:text-sm rounded-sm">
            JavaScript
          </div>
          <div className="bg-gray-100 flex-1 text-gray-500 text-tiny  px-3 py-1.5 md:px-4 md:text-sm rounded-sm">
            React
          </div>
          <div className="bg-gray-100 flex-1 text-gray-500 text-tiny  px-3 py-1.5 md:px-4 md:text-sm rounded-sm">
            Redux
          </div>
          <div className="bg-gray-100 flex-1 text-gray-500 text-tiny  px-3 py-1.5 md:px-4 md:text-sm rounded-sm">
            NodeJs
          </div>
          <div className="bg-gray-100 flex-1 text-gray-500 text-tiny  px-3 py-1.5 md:px-4 md:text-sm rounded-sm">
            MongoDB
          </div>
          <div className="bg-gray-100 flex-1 text-gray-500 text-tiny  px-3 py-1.5 md:px-4 md:text-sm rounded-sm">
            Fireabse
          </div>
        </div>
      </div>
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

    <div className="flex items-center justify-between mt-16">
      <div className="flex items-center">
        <div className="h-1.5 bg-black w-24 mr-2 md:h-2 md:w-32">&nbsp;</div>
        <div className="font-sans font-semibold tracking-wider text-sm leading-5 uppercase md:font-bold">
          Sharing is Caring
        </div>
      </div>

      <div className="flex flex-col pr-10 space-y-2 xs:flex-row xs:space-y-0 xs:space-x-3 md:pr-28">
        <a href="#" rel="noreferrer" target="_blank">
          <TwitterBlack />
        </a>

        <a href="#" rel="noreferrer" target="_blank">
          <LinkedinBlack />
        </a>

        <a href="#" rel="noreferrer" target="_blank">
          <FacebookBlack />
        </a>
      </div>
    </div>

    <div className="flex flex-col items-center font-sans ml-8 mr-8 mt-10 text-center xs:mt-16">
      <img
        className="rounded-full h-24 w-24 xs:h-32 xs:w-32 mr-3 md:mb-1"
        src="/img/profile.jpg"
        alt="profile"
      />
      <div>
        <h2 className="text-lg font-semibold text-gray-800 mt-3 xs:text-xl xs:mt-4">
          About the Author
        </h2>
        <p className="text-sm mt-1 text-gray-500 tracking-tight leading-5 xs:text-base sm:px-14 md:px-14 lg:px-52">
          My name is Noorullah Ahmadzi. A full stack web developer who specializes in React, NodeJs,
          MongoDB and JamStack. I&apos;m passinate about web development and technology.
        </p>
      </div>
    </div>

    <div className="flex flex-col justify-center bg-gray-900 gap-y-2 w-full h-44 mt-20 md:h-48">
      <p className="text-white text-3xl mx-10 text-center">Get in Touch</p>
      <div className="flex justify-center flex-row-reverse space-x-2 md:space-x-3 md:space-x-reverse space-x-reverse">
        <a href="https://github.com/Noorullah-Ahmadzai" rel="noreferrer" target="_blank">
          <GitHubWhite />
        </a>

        <a href="#" rel="noreferrer" target="_blank">
          <TwitterWhite />
        </a>

        <a href="#" rel="noreferrer" target="_blank">
          <InstagramWhite />
        </a>

        <a href="#" rel="noreferrer" target="_blank">
          <LinkedinWhite />
        </a>
      </div>
    </div>
  </div>
)

export default Blog
