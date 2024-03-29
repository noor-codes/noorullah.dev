import { Layout } from 'layouts/Layout'
import { PageSection } from 'components/PageSection'

const NotFound = () => {
  return (
    <Layout>
      <div className="mt-20" />
      <PageSection name="404" />
      <div>
        <div className="container min-w-xs mx-auto px-6 sm:px-32 sm:mt-10 md:max-w-2xl xl:max-w-3xl">
          <h1 className="block font-bold mt-6 text-3xl text-gray-900 md:text-4xl lg:mt-20 lg:text-5xl">
            Oops!
          </h1>
          <h2 className="text-lg font-bold mt-1 text-gray-900 md:text-xl md:mt-2 lg:mt-4 lg:text-2xl">
            This should not be happending...
          </h2>

          <p className="text-sm mt-2 text-gray-500 md:text-base md:mb-20 lg:text-lg">
            I think my code is broken. If you see this, let me know. Sorry for the inconvienience
          </p>
        </div>
      </div>
    </Layout>
  )
}

export default NotFound
