import { ContactForm } from 'components/ContactForm'
import Download from 'public/icons/landing/download-icon.svg'
import Image from 'next/legacy/image'
import { LandingSections } from 'components/LandingSections'
import { NextSeo } from 'next-seo'
import { RecentProjects } from 'components/RecentProjects'
import { TechStack } from 'components/TechStack'
import { bio } from 'config/bio'

const { fullname, profile_picture, landing_bio } = bio
const { website, twitter } = bio.profiles

const Landing = () => {
  return (
    <>
      <NextSeo
        openGraph={{
          url: `${website.url}/`,
          images: [
            {
              url: `${process.env.NEXT_PUBLIC_ASSETS_URL}/img/SEO/Landing.png`,
              width: 800,
              height: 600,
              alt: `${fullname}`,
            },

            { url: `${process.env.NEXT_PUBLIC_ASSETS_URL}/img/SEO/Landing.png` },
          ],
        }}
      />
      <div className="container min-w-xs mx-auto px-6 sm:px-10 md:max-w-2xl xl:max-w-3xl">
        <main className="flex flex-col justify-center pt-10 sm:mt-10 md:mt-16 ">
          <div className="flex items-center mb-4">
            <div className="h-12 w-12 xs:w-14 xs:h-14">
              <Image
                height={100}
                width={100}
                src={`${profile_picture}`}
                alt={`${fullname}`}
                layout="responsive"
                className="rounded-full"
              />
            </div>
            <div className="ml-2 text-base xs:text-lg xl:text-xl xl:ml-4 font-medium text-gray-900">
              {twitter.handler}
            </div>
          </div>

          <div>
            <h1 className="text-xl font-extrabold mb-4 xs:text-2xl sm:text-3xl sm:mt-2 xl:text-4xl text-gray-900">
              Hi, I am {fullname}
            </h1>

            <h2 className="text-gray-600 text-sm xs:text-base sm:text-lg xl:mt-4">{landing_bio}</h2>
          </div>

          <div className="flex justify-center mt-6 mb-2 xs:mt-8 sm:w-60">
            <a
              href={bio.cv_url}
              rel="noreferrer"
              target="_blank"
              className="flex items-center justify-center w-full py-2 select-none bg-gray-900 text-white rounded hover:bg-gray-700 cursor-pointer transition duration-500 ease-out focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black focus:ring-opacity-50 focus:ring-offset-white transform active:scale-95"
            >
              Download Resume
              <Download className="h-5 w-5 fill-current ml-2" />
            </a>
          </div>
        </main>
      </div>

      <div>
        <LandingSections name="Specialty" />
        <div className="container min-w-xs mx-auto px-6 sm:px-10 md:max-w-2xl xl:max-w-3xl">
          <div className="mb-2">
            <h2 className="text-gray-900 text-lg mt-4 font-extrabold xs:text-xl sm:text-2xl xl:text-3xl">
              Frameworks & Languages
            </h2>
            <h3 className="text-gray-600 text-sm mt-2 xs:text-base sm:text-lg">
              For the last couple of years, I&apos;ve been learning about modern web development and
              building fast, reliable and quality websites. Here are the list of technologies I love
              to work with.
            </h3>
            <TechStack />
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
            I explored different fields in Computer Science and finally settled with Software
            Engineering. I studied modern Web Development in details. I have ever since learnt a lot
            and built various projects. I have 3 years of professional web development experience.
          </h3>
        </div>
      </div>

      <LandingSections name="Recent Projects" />
      <div className="container min-w-xs mx-auto px-6 sm:px-10 md:max-w-2xl xl:max-w-3xl">
        <div>
          <h3 className="text-gray-600 text-sm mt-2 xs:text-base sm:text-lg">
            These are some of my latest projects I have worked on. A very small Inventory Management
            System, My personal portfolio and contributed to international project
            &quot;CarBidNow&quot; at Risa Hall Web Inc.
          </h3>
        </div>
        <RecentProjects />
      </div>

      <div className="bg-gray-900 text-white py-3 pl-6 font-semibold xs:text-lg sm:text-xl sm:py-4 lg:text-2xl lg:py-6 xl:py-8">
        <div className="flex items-center justify-between container min-w-xs mx-auto sm:px-4 md:max-w-2xl xl:max-w-3xl">
          Need a full stack web developer?
          <a
            href="#contact"
            className="sm:flex hidden items-center text-sm px-6 xl:py-3 xl:px-8 xl:text-base mr-8 border-2 select-none border-gray-400 hover:border-gray-900 text-white  hover:bg-gray-100 hover:text-gray-900 cursor-pointer rounded-md py-2 transition duration-500 ease-out focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white focus:ring-opacity-50 focus:ring-offset-gray-900 transform active:scale-95"
          >
            Shoot me a message
          </a>
        </div>
      </div>

      <div className="container min-w-xs mx-auto px-6 xs:px-10 sm:max-w-lg md:max-w-xl">
        <ContactForm />
      </div>
    </>
  )
}

export default Landing
