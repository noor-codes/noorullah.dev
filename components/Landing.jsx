import Image from 'next/image'
import LandingSections from '@/components/LandingSections'
import Download from '@/public/icons/landing/download-icon.svg'
import ContactForm from './ContactForm'
import TechStack from './TechStack'
import RecentProjects from './RecentProjects'

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
              <Download className="h-5 w-5 fill-current ml-2" />
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
        </div>
      </div>
      <LandingSections name="Work Experience" />
      <div className="container min-w-xs mx-auto px-6 sm:px-10 md:max-w-2xl xl:max-w-3xl">
        <TechStack />
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
        <RecentProjects />
      </div>

      <div className="bg-gray-900 dark:bg-white dark:text-gray-900 text-white py-3 pl-6 font-semibold xs:text-lg sm:text-xl sm:py-4 lg:text-2xl lg:py-6 xl:py-8">
        <div className="flex items-center justify-between container min-w-xs mx-auto sm:px-4 md:max-w-2xl xl:max-w-3xl">
          Need a full stack developer?
          <a
            href="#contact"
            type="button"
            className="sm:flex hidden items-center text-sm px-6 xl:py-3 xl:px-8 xl:text-base mr-8 border-2 select-none border-gray-400 hover:border-gray-900 text-white dark:text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-900 hover:text-gray-900 dark:hover:text-gray-200 cursor-pointer rounded-md py-2 transition duration-500 ease-out focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white focus:ring-opacity-50 focus:ring-offset-gray-900 transform active:scale-95"
          >
            Shoot me a message
          </a>
        </div>
      </div>

      <div className="container min-w-xs mx-auto px-6 xs:px-10 sm:max-w-lg md:max-w-2xl">
        <ContactForm />
      </div>
    </>
  )
}

export default Landing
