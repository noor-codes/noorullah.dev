import Paperplane from '@/public/icons/landing/paperplane-icon.svg'

const ContactForm = () => {
  return (
    <fieldset id="contact">
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
                  autoComplete="off"
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
                  autoComplete="off"
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
                  autoComplete="off"
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
              <Paperplane className="ml-1 h-5 w-4 fill-current -mt-1" />
            </button>
          </div>
        </div>
      </form>
    </fieldset>
  )
}

export default ContactForm
