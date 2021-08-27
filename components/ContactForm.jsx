import Paperplane from '@/public/icons/landing/paperplane-icon.svg'
import Spinner from '@/public/icons/landing/spinner-icon.svg'
import { useForm } from 'react-hook-form'
import axios from 'axios'
import { useSnackbar } from 'react-simple-snackbar'

const ContactForm = () => {
  const [openSnackbar] = useSnackbar()

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({ mode: 'onChange' })

  const submit = async (data) => {
    try {
      const res = await axios.post(`${process.env.NEXT_PUBLIC_DOMAIN_URL}/api/email`, {
        name: data.name,
        email: data.email,
        msg: data.message,
      })

      openSnackbar(res.data.msg)
      reset()
    } catch (err) {
      if (err?.response?.data?.msg?.includes('100 emails')) {
        return openSnackbar(err.response.data.msg)
      }
      openSnackbar(
        'There is a good chance your internet connection is down! 🤯 Please try again later!'
      )
    }
  }
  return (
    <fieldset id="contact" onSubmit={handleSubmit(submit)} disabled={isSubmitting}>
      <form className="mt-20 lg:mt-32">
        <h2 className="text-2xl text-center font-bold xs:text-3xl lg:mb-2 text-gray-900 dark:text-gray-200">
          Get in Touch
        </h2>
        <div className="pt-4 pb-8 mb-4 my-2">
          <div className="-mx-3 md:justify-between mb-6">
            <div className="px-3 mb-6 md:mb-0">
              <label
                className="block uppercase tracking-wide text-gray-700 dark:text-gray-200 text-xs font-bold mb-2 md:mb-4"
                htmlFor="name"
              >
                Name
                <input
                  className="block w-full mt-2 rounded mb-2 text-gray-900 dark:text-gray-200 dark:bg-gray-900 border-gray-300 shadow-sm focus:border-gray-400 focus:ring-gray-400 disabled:cursor-not-allowed"
                  id="name"
                  type="text"
                  placeholder="Please type your name"
                  autoComplete="off"
                  {...register('name', { required: true })}
                />
                {errors.name && (
                  <span className="text-red mb-20 italic text-red-400">
                    Please fill out this field.
                  </span>
                )}
              </label>
            </div>
          </div>
          <div className="-mx-3 md:justify-between mb-6">
            <div className="px-3 mb-6 md:mb-0">
              <label
                className="block uppercase tracking-wide text-gray-700 dark:text-gray-200 text-xs font-bold mb-2 md:mb-4"
                htmlFor="Email"
              >
                Email
                <input
                  className="block w-full mt-2 rounded mb-2 text-gray-900 dark:text-gray-200 dark:bg-gray-900 border-gray-300 shadow-sm focus:border-gray-400 focus:ring-gray-400 disabled:cursor-not-allowed"
                  id="Email"
                  type="text"
                  placeholder="Please type your email address"
                  autoComplete="off"
                  {...register('email', { required: true })}
                />
                {errors.name && (
                  <span className="text-red mb-20 italic text-red-400">
                    Please fill out this field.
                  </span>
                )}
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
                  className="block w-full mt-2 rounded mb-2 text-gray-900 border-gray-300 dark:text-gray-200 dark:bg-gray-900  shadow-sm focus:border-gray-400 focus:ring-gray-400 disabled:cursor-not-allowed"
                  id="message"
                  type="text"
                  rows="7"
                  placeholder="Please type your message!"
                  autoComplete="off"
                  {...register('message', { required: true })}
                />
              </label>
              {errors.message && (
                <span className="text-red mb-20 italic text-red-400">
                  Please fill out this field.
                </span>
              )}
            </div>
          </div>
          <div className="flex justify-center mt-4">
            <button
              name="submit button"
              type="submit"
              className="flex items-center text-sm px-6 border-2 select-none border-gray-400 hover:border-gray-900 dark:text-gray-200 dark:hover:bg-gray-200 dark:disabled:bg-gray-900 dark:disabled:text-gray-200 dark:hover:text-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white cursor-pointer rounded-md py-2 transition duration-500 ease-out focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black focus:ring-opacity-50 focus:ring-offset-white transform active:scale-95 disabled:bg-gray-200 disabled:hover:text-gray-700 disabled:hover:border-gray-400 disabled:cursor-not-allowed disabled:px-12"
            >
              {isSubmitting ? (
                <Spinner className="ml-1 h-5 w-4 animate-spin" />
              ) : (
                <>
                  Submit
                  <Paperplane className="ml-1 h-5 w-4 fill-current -mt-1" />
                </>
              )}
            </button>
          </div>
        </div>
      </form>
    </fieldset>
  )
}

export default ContactForm
