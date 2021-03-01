import Head from 'next/head'

const Home = () => (
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

    <div className="flex items-center pt-14">
      <div className="h-1 bg-black w-32 mr-2">&nbsp;</div>
      <div className="font-sans font-medium leading-5">Blog</div>
    </div>
    <main className="container px-2">
      <div className="mt-8 mb-6 px-8">
        <h1 className="font-bold leading-tight text-2xl">
          Local Authentication Using Passport in Node.js
        </h1>
      </div>

      <div className="flex items-center ml-8">
        <img className="rounded-full h-14 w-14 mr-3" src="/img/profile.png" alt="profile" />
        <div>
          <h2 className="font-sans text-base font-semibold text-gray-600">Noorullah Ahmadzai</h2>
          <p className="font-sans text-xs mt-0.5 text-gray-400">
            May 3rd, 20 - 174 views / 16 mins read
          </p>
        </div>
      </div>

      {/* Set a min with if the tag is too small */}
      <div className="mt-5">
        <div className="flex flex-wrap gap-2 ml-8 mr-10 text-center">
          <div className="bg-gray-200 flex-1 text-gray-600 text-tiny  px-3 py-1.5 rounded-sm">
            HTML
          </div>
          <div className="bg-gray-200 flex-1 text-gray-600 text-tiny  px-3 py-1.5 rounded-sm">
            CSS
          </div>
          <div className="bg-gray-200 flex-1 text-gray-600 text-tiny  px-3 py-1.5 rounded-sm">
            JavaScript
          </div>
          <div className="bg-gray-200 flex-1 text-gray-600 text-tiny  px-3 py-1.5 rounded-sm">
            React
          </div>
          <div className="bg-gray-200 flex-1 text-gray-600 text-tiny  px-3 py-1.5 rounded-sm">
            Redux
          </div>
          <div className="bg-gray-200 flex-1 text-gray-600 text-tiny  px-3 py-1.5 rounded-sm">
            NodeJs
          </div>
          <div className="bg-gray-200 flex-1 text-gray-600 text-tiny  px-3 py-1.5 rounded-sm">
            MongoDB
          </div>
          <div className="bg-gray-200 flex-1 text-gray-600 text-tiny  px-3 py-1.5 rounded-sm">
            Fireabse
          </div>
        </div>
      </div>

      <div className="flex justify-center px-8">
        <p className="text-sm mt-6 text-gray-700 leading-5 ">
          For the better part of the last year, I have been investing heavily in front-end
          development and design. When I started my new role, I identified a need for a component
          library and created it. Since then, I have learned a lot about style guides, design
          systems, component libraries, and their best practices. This post will be a deep-dive on
          everything I have learned in the past year.
        </p>
      </div>
    </main>
  </div>
)

export default Home
