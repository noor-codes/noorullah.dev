import Head from 'next/head'

const Home = () => (
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
        <h1 className="font-bold leading-tight text-2xl">
          Local Authentication Using Passport in Node.js
        </h1>
      </div>
      <div className="flex items-center font-sans ml-8">
        <img className="rounded-full h-14 w-14 mr-3" src="/img/profile.png" alt="profile" />
        <div>
          <h2 className="text-base font-semibold text-gray-600">Noorullah Ahmadzai</h2>
          <p className="text-xs mt-0.5 text-gray-400">May 3rd, 20 - 174 views / 16 mins read</p>
        </div>
      </div>
      {/* Set a min with if the tag is too small */}
      <div className="font-sans mt-5">
        <div className="flex flex-wrap gap-2 ml-8 mr-10 text-center">
          <div className="bg-gray-100 flex-1 text-gray-600 text-tiny  px-3 py-1.5 rounded-sm">
            HTML
          </div>
          <div className="bg-gray-100 flex-1 text-gray-600 text-tiny  px-3 py-1.5 rounded-sm">
            CSS
          </div>
          <div className="bg-gray-100 flex-1 text-gray-600 text-tiny  px-3 py-1.5 rounded-sm">
            JavaScript
          </div>
          <div className="bg-gray-100 flex-1 text-gray-600 text-tiny  px-3 py-1.5 rounded-sm">
            React
          </div>
          <div className="bg-gray-100 flex-1 text-gray-600 text-tiny  px-3 py-1.5 rounded-sm">
            Redux
          </div>
          <div className="bg-gray-100 flex-1 text-gray-600 text-tiny  px-3 py-1.5 rounded-sm">
            NodeJs
          </div>
          <div className="bg-gray-100 flex-1 text-gray-600 text-tiny  px-3 py-1.5 rounded-sm">
            MongoDB
          </div>
          <div className="bg-gray-100 flex-1 text-gray-600 text-tiny  px-3 py-1.5 rounded-sm">
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
      <h2 className="ml-8 mt-4 font-semibold mb-2">Why Should You Care?</h2>
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
  </div>
)

export default Home
