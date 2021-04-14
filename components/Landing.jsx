import Image from 'next/image'
import DownloadIcon from '@/public/icons/landing/download-icon.svg'
import PaperPlaneIcon from '@/public/icons/landing/paperplane-icon.svg'

import HTMLIcon from '@/public/icons/landing/tech/html-icon.svg'
import CSSIcon from '@/public/icons/landing/tech/css-icon.svg'
import SASSIcon from '@/public/icons/landing/tech/sass-icon.svg'
import TAILWINDCSSIcon from '@/public/icons/landing/tech/tailwindcss-icon.svg'
import JAVASCRIPTIcon from '@/public/icons/landing/tech/javascript-icon.svg'
import TYPESCRIPTIcon from '@/public/icons/landing/tech/typescript-icon.svg'
import REACTIcon from '@/public/icons/landing/tech/react-icon.svg'
import REDUXIcon from '@/public/icons/landing/tech/redux-icon.svg'
import NEXTJSIcon from '@/public/icons/landing/tech/nextjs-icon.svg'
import EXPRESSIcon from '@/public/icons/landing/tech/express-icon.svg'
import MONGODBIcon from '@/public/icons/landing/tech/mongodb-icon.svg'
import RESTAPIIcon from '@/public/icons/landing/tech/api-icon.svg'
import GRAGHQLIcon from '@/public/icons/landing/tech/graphql-icon.svg'
import GITHUBLIcon from '@/public/icons/landing/tech/github-icon.svg'
import HOSTINGIcon from '@/public/icons/landing/tech/hosting-icon.svg'
import NPMIcon from '@/public/icons/landing/tech/npm-icon.svg'
import KEYSTONEJSIcon from '@/public/icons/landing/tech/keystonejs-icon.svg'

import INVENTORYIcon from '@/public/icons/landing/projects/inventory-icon.svg'
import PORTFOLIOIcon from '@/public/icons/landing/projects/portfolio-icon.svg'
import CARBIDNOWIcon from '@/public/icons/landing/projects/carbidnow-icon.svg'

import LandingSections from '@/components/LandingSections'

const Landing = () => {
  return (
    <>
      <div className="container min-w-xs mx-auto px-6 sm:px-10 md:max-w-2xl xl:max-w-3xl">
        <main className="flex flex-col justify-center pt-10 sm:mt-16 md:mt-24 lg:mt-28">
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
            <div className="ml-2 text-base xs:text-lg xl:text-xl xl:ml-4 font-medium text-gray-900 dark:text-gray-200">
              @noorullah_ah
            </div>
          </div>

          <div>
            <h1 className="text-xl font-extrabold mb-4 xs:text-2xl sm:text-3xl sm:mt-2 xl:text-4xl text-gray-900 dark:text-gray-200">
              Lorem Ipsum is simply dummy text of the printing!
            </h1>

            <h2 className="text-gray-600 text-sm xs:text-base sm:text-lg xl:mt-4 dark:text-gray-200">
              It is a long established fact that a reader will be distracted by the readable content
              of a page when looking at its layout. The point of using Lorem Ipsum is. It is a long
              established fact that a reader will be distracted by the readable content of a page
              when
            </h2>
          </div>

          <div className="flex justify-center mt-6 mb-2 xs:mt-8 sm:w-60">
            <button
              type="button"
              className="flex items-center justify-center w-full py-2 bg-gray-900 dark:bg-gray-200 dark:text-gray-800 text-white dark:hover:text-white  rounded hover:bg-gray-700 dark:hover:bg-gray-600 cursor-pointer transition duration-500 ease-out focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black focus:ring-opacity-50 focus:ring-offset-white transform active:scale-95"
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
          <h2 className="text-gray-900 dark:text-gray-200 text-lg mt-4 font-extrabold xs:text-xl sm:text-2xl xl:text-3xl">
            Frameworks & Languages
          </h2>
          <h3 className="text-gray-600 text-sm mt-2 xs:text-base sm:text-lg dark:text-gray-200">
            It is a long established fact that a reader will be distracted by the readable content
            of a page when looking at its layout. The point of using Lorem Ipsum is.
          </h3>

          <div className="flex flex-wrap gap-4 justify-center xs:justify-start text-center mt-8">
            <div>
              <div className="flex justify-center items-center bg-gray-100 h-28 w-28 text-2xl text-gray-600 dark:bg-black dark:bg-opacity-20 rounded-md">
                <HTMLIcon className="h-16 w-16 fill-current" />
              </div>
              <div className="text-sm text-gray-500 mt-2">HTML</div>
            </div>

            <div>
              <div className="flex justify-center items-center bg-gray-100 h-28 w-28 text-2xl text-gray-600 dark:bg-black dark:bg-opacity-20 rounded-md">
                <CSSIcon className="h-16 w-16 fill-current" />
              </div>
              <div className="text-sm text-gray-500 mt-2">CSS</div>
            </div>

            <div>
              <div className="flex justify-center items-center bg-gray-100 h-28 w-28 text-2xl text-gray-600 dark:bg-black dark:bg-opacity-20 rounded-md">
                <SASSIcon className="h-16 w-16 fill-current" />
              </div>
              <div className="text-sm text-gray-500 mt-2">Sass</div>
            </div>

            <div>
              <div className="flex justify-center items-center bg-gray-100 h-28 w-28 text-2xl text-gray-600 dark:bg-black dark:bg-opacity-20 rounded-md">
                <TAILWINDCSSIcon className="h-20 w-20 fill-current" />
              </div>
              <div className="text-sm text-gray-500 mt-2">TailwindCSS</div>
            </div>

            <div>
              <div className="flex justify-center items-center bg-gray-100 h-28 w-28 text-2xl text-gray-600 dark:bg-black dark:bg-opacity-20 rounded-md">
                <JAVASCRIPTIcon className="h-16 w-16 fill-current" />
              </div>
              <div className="text-sm text-gray-500 mt-2">JavaScript</div>
            </div>

            <div>
              <div className="flex justify-center items-center bg-gray-100 h-28 w-28 text-2xl text-gray-600 dark:bg-black dark:bg-opacity-20 rounded-md">
                <TYPESCRIPTIcon className="h-16 w-16 fill-current" />
              </div>
              <div className="text-sm text-gray-500 mt-2">TypeScript</div>
            </div>

            <div>
              <div className="flex justify-center items-center bg-gray-100 h-28 w-28 text-2xl text-gray-600 dark:bg-black dark:bg-opacity-20 rounded-md">
                <REACTIcon className="h-20 w-20 fill-current" />
              </div>
              <div className="text-sm text-gray-500 mt-2">React</div>
            </div>

            <div>
              <div className="flex justify-center items-center bg-gray-100 h-28 w-28 text-2xl text-gray-600 dark:bg-black dark:bg-opacity-20 rounded-md">
                <REDUXIcon className="h-20 w-20 fill-current" />
              </div>
              <div className="text-sm text-gray-500 mt-2">Redux</div>
            </div>

            <div>
              <div className="flex justify-center items-center bg-gray-100 h-28 w-28 text-2xl text-gray-600 dark:bg-black dark:bg-opacity-20 rounded-md">
                <NEXTJSIcon className="h-20 w-20 fill-current" />
              </div>
              <div className="text-sm text-gray-500 mt-2">NextJS</div>
            </div>

            <div>
              <div className="flex justify-center items-center bg-gray-100 h-28 w-28 text-2xl text-gray-600 dark:bg-black dark:bg-opacity-20 rounded-md">
                <EXPRESSIcon className="h-20 w-20 fill-current" />
              </div>
              <div className="text-sm text-gray-500 mt-2">ExpressJS</div>
            </div>

            <div>
              <div className="flex justify-center items-center bg-gray-100 h-28 w-28 text-2xl text-gray-600 dark:bg-black dark:bg-opacity-20 rounded-md">
                <MONGODBIcon className="h-20 w-20 fill-current" />
              </div>
              <div className="text-sm text-gray-500 mt-2">MongoDB</div>
            </div>

            <div>
              <div className="flex justify-center items-center bg-gray-100 h-28 w-28 text-2xl text-gray-600 dark:bg-black dark:bg-opacity-20 rounded-md">
                <RESTAPIIcon className="h-20 w-20 fill-current" />
              </div>
              <div className="text-sm text-gray-500 mt-2">REST API</div>
            </div>

            <div>
              <div className="flex justify-center items-center bg-gray-100 h-28 w-28 text-2xl text-gray-600 dark:bg-black dark:bg-opacity-20 rounded-md">
                <GRAGHQLIcon className="h-20 w-20 fill-current" />
              </div>
              <div className="text-sm text-gray-500 mt-2">GraphQL</div>
            </div>

            <div className="">
              <div className="flex justify-center items-center bg-gray-100 h-28 w-28 text-2xl text-gray-600 dark:bg-black dark:bg-opacity-20 rounded-md">
                <KEYSTONEJSIcon className="h-16 w-16 fill-current" />
              </div>
              <div className="text-sm text-gray-500 mt-2">KeystoneJS</div>
            </div>

            <div className="">
              <div className="flex justify-center items-center bg-gray-100 h-28 w-28 text-2xl text-gray-600 dark:bg-black dark:bg-opacity-20 rounded-md">
                <GITHUBLIcon className="h-20 w-20 fill-current" />
              </div>
              <div className="text-sm text-gray-500 mt-2">Git & GitHub</div>
            </div>

            <div className="">
              <div className="flex justify-center items-center bg-gray-100 h-28 w-28 text-2xl text-gray-600 dark:bg-black dark:bg-opacity-20 rounded-md">
                <NPMIcon className="h-20 w-20 fill-current" />
              </div>
              <div className="text-sm text-gray-500 mt-2">NPM</div>
            </div>

            <div className="">
              <div className="flex justify-center items-center bg-gray-100 h-28 w-28 text-2xl text-gray-600 dark:bg-black dark:bg-opacity-20 rounded-md">
                <HOSTINGIcon className="h-20 w-20 fill-current" />
              </div>
              <div className="text-sm text-gray-500 mt-2">Web Hosting</div>
            </div>
          </div>
        </div>
      </div>
      <LandingSections name="Work Experience" />
      <div className="container min-w-xs mx-auto px-6 sm:px-10 md:max-w-2xl xl:max-w-3xl">
        <div className="mb-2">
          <h2 className="text-gray-900 dark:text-gray-200 text-lg mt-4 font-extrabold xs:text-xl sm:text-2xl xl:text-3xl">
            Experience
          </h2>
          <h3 className="text-gray-600 dark:text-gray-200 text-sm mt-2 xs:text-base sm:text-lg">
            It is a long established fact that a reader will be distracted by the readable content
            of a page when looking at its layout. The point of using Lorem Ipsum is.
          </h3>
        </div>
      </div>

      <LandingSections name="Recent Projects" />
      <div className="container min-w-xs mx-auto px-6 sm:px-10 md:max-w-2xl xl:max-w-3xl">
        <div>
          <h3 className="text-gray-600 dark:text-gray-200 text-sm mt-2 xs:text-base sm:text-lg">
            It is a long established fact that a reader will be distracted by the readable content
            of a page when looking at its layout. The point of using Lorem Ipsum is.
          </h3>
        </div>
        <div className="flex flex-wrap gap-5 justify-center xs:justify-start text-center mt-8 mb-10">
          <div>
            <div className="flex justify-center items-center bg-gray-100 h-36 w-36 text-2xl text-gray-600 rounded-md  dark:bg-black dark:bg-opacity-20">
              <INVENTORYIcon className="h-20 w-h-20 fill-current" />
            </div>
            <div className="text-sm text-gray-500 mt-2 ">Inventory</div>
          </div>

          <div>
            <div className="flex justify-center items-center bg-gray-100 h-36 w-36 text-2xl text-gray-600 rounded-md  dark:bg-black dark:bg-opacity-20">
              <PORTFOLIOIcon className="h-20 w-h-20 fill-current" />
            </div>
            <div className="text-sm text-gray-500 mt-2">My Portfolio</div>
          </div>

          <div>
            <div className="flex justify-center items-center bg-gray-100 h-36 w-36 text-2xl text-gray-600 rounded-md  dark:bg-black dark:bg-opacity-20">
              <CARBIDNOWIcon className="h-24 w-h-24 fill-current" />
            </div>
            <div className="text-sm text-gray-500 mt-2">CarBidNow</div>
          </div>
        </div>
      </div>

      <div className="bg-gray-900 dark:bg-white dark:text-gray-900 text-white py-3 pl-6 font-semibold xs:text-lg sm:text-xl sm:py-4 lg:text-2xl lg:py-6 xl:py-8">
        <div className="flex items-center justify-between container min-w-xs mx-auto sm:px-4 md:max-w-2xl xl:max-w-3xl">
          Need a full stack developer?
          <button
            type="button"
            className="sm:flex hidden items-center text-sm px-6 xl:py-3 xl:px-8 xl:text-base mr-8 border-2 select-none border-gray-400 hover:border-gray-900 text-white dark:text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-900 hover:text-gray-900 dark:hover:text-gray-200 cursor-pointer rounded-md py-2 transition duration-500 ease-out focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white focus:ring-opacity-50 focus:ring-offset-gray-900 transform active:scale-95"
          >
            Shoot me a message
          </button>
        </div>
      </div>

      <div className="container min-w-xs mx-auto px-6 xs:px-10 sm:max-w-lg md:max-w-2xl">
        <fieldset>
          <form className="mt-20">
            <h2 className="text-2xl text-center font-bold xs:text-3xl lg:mb-2 text-gray-900 dark:text-gray-200">
              Get in Touch
            </h2>
            <div className="pt-4 pb-8 mb-4 flex flex-col my-2">
              <div className="-mx-3 md:flex md:justify-between mb-6">
                <div className="px-3 mb-6 md:mb-0">
                  <label
                    className="block uppercase tracking-wide text-gray-700 dark:text-gray-200 text-xs font-bold mb-2"
                    htmlFor="name"
                  >
                    Name
                    <input
                      className="block w-full mt-2 rounded mb-2 text-gray-900 dark:text-gray-200 dark:bg-gray-900 border-gray-300 shadow-sm focus:border-gray-400 focus:ring-gray-400"
                      id="name"
                      type="text"
                      placeholder="Jane Doe"
                    />
                  </label>
                  {/*<p className="text-red text-xs italic">Please fill out this field.</p>*/}
                </div>
                <div className="px-3">
                  <label
                    className="block uppercase tracking-wide text-gray-700 dark:text-gray-200 text-xs font-bold mb-2"
                    htmlFor="email"
                  >
                    Email
                    <input
                      className="block w-full mt-2 rounded mb-2 text-gray-900 border-gray-300 dark:text-gray-200 dark:bg-gray-900 shadow-sm focus:border-gray-400 focus:ring-gray-400"
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
                    className="block uppercase tracking-wide text-gray-700 dark:text-gray-200 text-xs font-bold mb-2"
                    htmlFor="message"
                  >
                    Message
                    <textarea
                      className="block w-full mt-2 rounded mb-2 text-gray-900 border-gray-300 dark:text-gray-200 dark:bg-gray-900  shadow-sm focus:border-gray-400 focus:ring-gray-400"
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
                  className="flex items-center text-sm px-6 border-2 select-none border-gray-400 hover:border-gray-900 dark:text-gray-200 dark:hover:bg-gray-200 dark:hover:text-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white cursor-pointer rounded-md py-2 transition duration-500 ease-out focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black focus:ring-opacity-50 focus:ring-offset-white transform active:scale-95 disabled:bg-gray-200 disabled:hover:text-gray-700 disabled:hover:border-gray-400 disabled:cursor-not-allowed"
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
