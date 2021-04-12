import Image from 'next/image'
import DownloadIcon from '@/public/icons/landing/download-icon.svg'
import PaperPlaneIcon from '@/public/icons/landing/paperplane-icon.svg'

import LandingSections from './LandingSections'

const Landing = () => {
  return (
    <>
      <div className="container min-w-xs mx-auto px-6 sm:px-10 md:max-w-2xl xl:max-w-3xl">
        <main className="flex flex-col justify-center pt-10 sm:mt-16 md:mt-24">
          <div className="flex items-center mb-4">
            <div className="h-14 w-14 xs:w-16 xs:h-16 xl:w-20 xl:h-20">
              <Image
                height={100}
                width={100}
                src="/img/profile.jpg"
                alt="Noorullah Ahmadzai"
                className="rounded-full"
              />
            </div>
            <div className="ml-2 text-base xs:text-lg xl:text-xl xl:ml-4">@noorullah_ah</div>
          </div>

          <div>
            <h1 className="text-xl font-extrabold mb-4 xs:text-2xl sm:text-3xl sm:mt-2 xl:text-4xl">
              Lorem Ipsum is simply dummy text of the printing!
            </h1>

            <h2 className="text-gray-600 text-sm xs:text-base sm:text-lg xl:mt-4">
              It is a long established fact that a reader will be distracted by the readable content
              of a page when looking at its layout. The point of using Lorem Ipsum is. It is a long
              established fact that a reader will be distracted by the readable content of a page
              when
            </h2>
          </div>

          <div className="flex justify-center mt-6 mb-2 xs:mt-8 sm:w-60">
            <button
              type="button"
              className="flex items-center justify-center w-full py-2 bg-gray-900 text-white  rounded hover:bg-gray-700 cursor-pointer transition duration-500 ease-out focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black focus:ring-opacity-50 focus:ring-offset-white transform active:scale-95"
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
          <h2 className="text-gray-900 text-lg mt-4 font-extrabold xs:text-xl sm:text-2xl xl:text-3xl">
            Framework & Languages
          </h2>
          <h3 className="text-gray-600 text-sm mt-2 xs:text-base sm:text-lg">
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
      <LandingSections name="Work Experience" />
      <div className="container min-w-xs mx-auto px-6 sm:px-10 md:max-w-2xl xl:max-w-3xl">
        <div className="mb-2">
          <h2 className="text-gray-900 text-lg mt-4 font-extrabold xs:text-xl sm:text-2xl xl:text-3xl">
            Experience
          </h2>
          <h3 className="text-gray-600 text-sm mt-2 xs:text-base sm:text-lg">
            It is a long established fact that a reader will be distracted by the readable content
            of a page when looking at its layout. The point of using Lorem Ipsum is.
          </h3>
        </div>
      </div>

      <LandingSections name="Recent Projects" />
      <div className="container min-w-xs mx-auto px-6 sm:px-10 md:max-w-2xl xl:max-w-3xl">
        <div>
          <h3 className="text-gray-600 text-sm mt-2 xs:text-base sm:text-lg">
            It is a long established fact that a reader will be distracted by the readable content
            of a page when looking at its layout. The point of using Lorem Ipsum is.
          </h3>
        </div>
        <div className="flex flex-wrap gap-8 text-center mt-8 pb-20">
          <div className="flex-1">
            <div className="bg-gray-100 px-20 py-20  text-gray-600 rounded-sm ">&nbsp;</div>
            <p className="mt-3 text-gray-600">Inventory Management</p>
          </div>

          <div className="flex-1">
            <div className="bg-gray-100 px-20 py-20 text-gray-600 rounded-sm ">&nbsp;</div>
            <p className="mt-3 text-gray-600">My Portfolio</p>
          </div>

          <div className="flex-1">
            <div className="bg-gray-100 px-20 py-20 text-gray-600 rounded-sm ">&nbsp;</div>
            <p className="mt-3 text-gray-600">CarBidNow</p>
          </div>
        </div>
      </div>

      <div className="bg-gray-900 text-white py-3 pl-6 font-semibold xs:text-lg sm:text-xl sm:py-4 lg:text-2xl lg:py-6 xl:py-8">
        <div className="flex items-center justify-between container min-w-xs mx-auto sm:px-4 md:max-w-2xl xl:max-w-3xl">
          Need a full stack developer?
          <button
            type="button"
            className="sm:flex hidden items-center text-sm px-6 xl:py-3 xl:px-8 mr-8 border-2 select-none border-gray-400 hover:border-gray-900 text-white hover:bg-gray-100 hover:text-gray-900 cursor-pointer rounded-md py-2 transition duration-500 ease-out focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white focus:ring-opacity-50 focus:ring-offset-gray-900 transform active:scale-95"
          >
            Shoot me a message
          </button>
        </div>
      </div>

      <div className="container min-w-xs mx-auto px-6 xs:px-10 sm:max-w-lg md:max-w-2xl">
        <fieldset>
          <form className="mt-20">
            <h2 className="text-2xl text-center font-bold xs:text-3xl lg:mb-2">Get in Touch</h2>
            <div className="pt-4 pb-8 mb-4 flex flex-col my-2">
              <div className="-mx-3 md:flex md:justify-between mb-6">
                <div className="px-3 mb-6 md:mb-0">
                  <label
                    className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                    htmlFor="name"
                  >
                    Name
                    <input
                      className="block w-full mt-2 rounded mb-2 text-gray-900 border-gray-300 shadow-sm focus:border-gray-400 focus:ring-gray-400"
                      id="name"
                      type="text"
                      placeholder="Jane Doe"
                    />
                  </label>
                  {/*<p className="text-red text-xs italic">Please fill out this field.</p>*/}
                </div>
                <div className="px-3">
                  <label
                    className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                    htmlFor="email"
                  >
                    Email
                    <input
                      className="block w-full mt-2 rounded mb-2 text-gray-900 border-gray-300 shadow-sm focus:border-gray-400 focus:ring-gray-400"
                      id="email"
                      type="email"
                      placeholder="email@example.com"
                    />
                  </label>
                </div>
              </div>
              <div className="-mx-3 mb-2">
                <div className="px-3">
                  <label
                    className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                    htmlFor="message"
                  >
                    Message
                    <textarea
                      className="block w-full mt-2 rounded mb-2 text-gray-900 border-gray-300 shadow-sm focus:border-gray-400 focus:ring-gray-400"
                      id="message"
                      type="text"
                      rows="7"
                      placeholder="Please type your message!"
                    />
                  </label>
                </div>
              </div>
              <div className="flex justify-center sm:mt-4">
                <button
                  onClick={(e) => {
                    e.preventDefault()
                  }}
                  name="submit"
                  type="submit"
                  className="flex items-center text-sm px-6 border-2 select-none border-gray-400 hover:border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white cursor-pointer rounded-md py-2 transition duration-500 ease-out focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black focus:ring-opacity-50 focus:ring-offset-white transform active:scale-95 disabled:bg-gray-200 disabled:hover:text-gray-700 disabled:hover:border-gray-400 disabled:cursor-not-allowed"
                >
                  Submit
                  <PaperPlaneIcon className="ml-1 h-5 w-4 fill-current -mt-1" />
                </button>
              </div>
            </div>
          </form>
        </fieldset>
      </div>
    </>
  )
}

export default Landing
