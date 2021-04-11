import Image from 'next/image'
import DownloadIcon from '@/public/icons/landing/download-icon.svg'
import LandingSections from './LandingSections'

const Landing = () => {
  return (
    <>
      <div className="container min-w-xs mx-auto px-6 sm:px-10 md:max-w-2xl xl:max-w-3xl">
        <main className="flex flex-col justify-center pt-10">
          <div className="flex items-center mb-4">
            <Image
              height="50"
              width="50"
              src="/img/profile.jpg"
              alt="Noorullah Ahmadzai"
              className="rounded-full"
            />
            <div className="ml-2 text-base">@noorullah_ah</div>
          </div>

          <div>
            <h1 className="text-xl font-extrabold mb-4">
              Lorem Ipsum is simply dummy text of the printing!
            </h1>

            <h2 className="text-gray-600 text-sm">
              It is a long established fact that a reader will be distracted by the readable content
              of a page when looking at its layout. The point of using Lorem Ipsum is. It is a long
              established fact that a reader will be distracted by the readable content of a page
              when
            </h2>
          </div>

          <div className="flex justify-center mt-6 mb-2">
            <button
              type="button"
              className="flex items-center justify-center w-full py-2 bg-gray-900 text-white  rounded hover:bg-gray-700 cursor-pointer transition duration-500 ease-out focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black focus:ring-opacity-50 focus:ring-offset-white transform active:scale-90"
            >
              Download Resume
              <DownloadIcon className="h-5 w-5 fill-current ml-2" />
            </button>
          </div>
        </main>
      </div>
      <LandingSections name="Speciality" />
      <div className="container min-w-xs mx-auto px-6 sm:px-10 md:max-w-2xl xl:max-w-3xl">
        <div className="mb-2">
          <h2 className="text-gray-900 text-lg mt-4 font-extrabold">Framework & Languages</h2>
          <h3 className="text-gray-600 text-sm mt-2">
            It is a long established fact that a reader will be distracted by the readable content
            of a page when looking at its layout. The point of using Lorem Ipsum is.
          </h3>

          <div className="flex flex-wrap gap-3 text-center mt-8">
            <div className="flex-1">
              <div className="bg-gray-100 px-10 text-2xl py-10  text-gray-600 rounded-sm ">
                &nbsp;
              </div>
              <div className="text-sm text-gray-500 mt-2">HTML</div>
            </div>

            <div className="flex-1">
              <div className="bg-gray-100 px-10 text-2xl py-10  text-gray-600 rounded-sm ">
                &nbsp;
              </div>
              <div className="text-sm text-gray-500 mt-2">CSS</div>
            </div>

            <div className="flex-1">
              <div className="bg-gray-100 px-10 text-2xl py-10  text-gray-600 rounded-sm ">
                &nbsp;
              </div>
              <div className="text-sm text-gray-500 mt-2">JavaScript</div>
            </div>

            <div className="flex-1">
              <div className="bg-gray-100 px-10 text-2xl py-10  text-gray-600 rounded-sm ">
                &nbsp;
              </div>
              <div className="text-sm text-gray-500 mt-2">React</div>
            </div>

            <div className="flex-1">
              <div className="bg-gray-100 px-10 text-2xl py-10  text-gray-600 rounded-sm ">
                &nbsp;
              </div>
              <div className="text-sm text-gray-500 mt-2">NodeJS</div>
            </div>

            <div className="flex-1">
              <div className="bg-gray-100 px-10 text-2xl py-10  text-gray-600 rounded-sm ">
                &nbsp;
              </div>
              <div className="text-sm text-gray-500 mt-2">MongoDB</div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Landing
