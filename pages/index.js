import Head from 'next/head'

export default function Home() {
  return (
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

      <main className="container">
        <div className="flex items-center mt-14">
          <div className="h-1 bg-black w-32 mr-2">&nbsp;</div>
          <div className="font-sans font-medium leading-5">Blog</div>
        </div>

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
      </main>
    </div>
  )
}
