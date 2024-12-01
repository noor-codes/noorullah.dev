import { z } from 'zod'
import Image from 'next/image'
import axios from 'axios'
import { fire_confetti } from 'utils/confetti'
import { useForm } from 'react-hook-form'
import { useSnackbar } from 'react-simple-snackbar'
import { zodResolver } from '@hookform/resolvers/zod'

const schema = z.object({
  name: z
    .string()
    .min(2, 'Name must be at least 2 characters')
    .max(32, 'Name must be less than 32 characters'),
  email: z.string().max(80, 'Email must be less than 80 characters').email('Invalid email address'),
  message: z
    .string()
    .min(8, 'Message must be at least 8 characters')
    .max(300, 'Message must be less than 300 characters'),
})

type FormData = z.infer<typeof schema>

export const ContactForm = () => {
  const [openSnackbar] = useSnackbar()

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({
    mode: 'onBlur',
    resolver: zodResolver(schema),
  })

  const submit = async (data: FormData) => {
    try {
      const res = await axios.post(`${process.env.NEXT_PUBLIC_DOMAIN_URL}/api/email`, {
        name: data.name,
        email: data.email,
        msg: data.message,
      })

      openSnackbar(res.data.msg)
      reset()
      fire_confetti()
    } catch (err) {
      if (err?.response?.data?.msg?.includes('100 emails')) {
        return openSnackbar(err.response.data.msg)
      }

      if (err.message.includes('Network')) return openSnackbar('No internet connection!')

      return openSnackbar('Something went wrong! Please try again later! 🤯')
    }
  }
  return (
    <fieldset id="contact" onSubmit={handleSubmit(submit)} disabled={isSubmitting}>
      <form className="mt-20 lg:mt-32">
        <h2 className="text-2xl text-center font-bold xs:text-3xl lg:mb-2 text-gray-900">
          Message
        </h2>
        <div className="pt-4 pb-8 mb-4 my-2">
          <div className="-mx-3 md:justify-between mb-6">
            <div className="px-3 mb-6 md:mb-0">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 md:mb-4"
                htmlFor="name"
              >
                Name
                <input
                  className="block w-full font-normal mt-2 rounded mb-2 text-gray-900 border-gray-300 shadow-sm focus:border-gray-400 focus:ring-gray-400 disabled:cursor-not-allowed"
                  id="name"
                  type="text"
                  placeholder="Please type your name"
                  autoComplete="off"
                  {...register('name')}
                />
                {errors.name && (
                  <span className="text-red mb-20 italic text-red-400">
                    {errors.name?.message as any}
                  </span>
                )}
              </label>
            </div>
          </div>
          <div className="-mx-3 md:justify-between mb-6">
            <div className="px-3 mb-6 md:mb-0">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 md:mb-4"
                htmlFor="Email"
              >
                Email
                <input
                  className="block w-full font-normal mt-2 rounded mb-2 text-gray-900 border-gray-300 shadow-sm focus:border-gray-400 focus:ring-gray-400 disabled:cursor-not-allowed"
                  id="Email"
                  type="text"
                  placeholder="Please type your email address"
                  autoComplete="off"
                  {...register('email')}
                />
                {errors.email && (
                  <span className="text-red mb-20 italic text-red-400">
                    {errors.email?.message as any}
                  </span>
                )}
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
                  className="block w-full font-normal mt-2 rounded mb-2 text-gray-900 border-gray-300 shadow-sm focus:border-gray-400 focus:ring-gray-400 disabled:cursor-not-allowed"
                  id="message"
                  rows={9}
                  placeholder="Please type your message!"
                  autoComplete="off"
                  {...register('message')}
                />
                {errors.message && (
                  <span className="text-red mb-20 italic text-red-400">
                    {errors.message?.message as any}
                  </span>
                )}
              </label>
            </div>
          </div>
          <div className="flex justify-center mt-4">
            <button
              name="submit button"
              type="submit"
              className="group flex items-center justify-center text-sm px-6 border-2 select-none border-gray-400 hover:border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white cursor-pointer rounded-md py-2 transition duration-500 ease-out focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black focus:ring-opacity-50 focus:ring-offset-white transform active:scale-95 disabled:bg-gray-200 disabled:hover:text-gray-700 disabled:hover:border-gray-400 disabled:cursor-not-allowed"
            >
              <span className="flex items-center min-w-[70px] justify-center">
                {isSubmitting ? (
                  <>
                    <span className="opacity-0">Submit</span>
                    <Image
                      src="/icons/landing/spinner-icon.svg"
                      alt="Loading spinner"
                      width={16}
                      height={20}
                      className="ml-1 animate-spin absolute"
                    />
                  </>
                ) : (
                  <>
                    Submit
                    <Image
                      src="/icons/landing/paperplane-icon.svg"
                      alt="Paper plane"
                      width={16}
                      height={20}
                      className="ml-1 -mt-1 group-hover:brightness-0 group-hover:invert"
                    />
                  </>
                )}
              </span>
            </button>
          </div>
        </div>
      </form>
    </fieldset>
  )
}
