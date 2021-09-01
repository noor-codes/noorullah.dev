import Link from 'next/link'
import { motion } from 'framer-motion'

const Blogpost = ({ post }) => {
  const { title, summary, readingTime, slug } = post

  return (
    <motion.div whileHover={{ x: -8, cursor: 'pointer' }} className="block pt-4">
      <Link href={`/blog/${slug}`}>
        <div className="flex flex-col lg:justify-center h-full">
          <a>
            <h1 className="mb-2 leading-6  font-bold text-base text-gray-900 dark:text-gray-200  xs:leading-6 max-w-xl xs:text-lg sm:text-xl md:text-2xl md:leading-10 xl:font-bold">
              {title}
            </h1>
          </a>
          <p className="text-sm lg:max-w-xl text-gray-600 dark:text-gray-300 sm:text-base sm:leading-5 md:text-base md:-mt-1 md:tracking-tight lg:text-base line-clamp-2 sm:line-clamp-3">
            {summary}
          </p>
        </div>
      </Link>

      <span className="block text-xs text-gray-500 dark:text-gray-400 mt-1">
        {readingTime.text}
      </span>
    </motion.div>
  )
}

export default Blogpost
