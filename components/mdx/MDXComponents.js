/* eslint-disable jsx-a11y/heading-has-content */
/* eslint-disable jsx-a11y/anchor-has-content */
import Link from 'next/link'
import Image from 'next/image'

const CustomLink = (props) => {
  const href = props.href
  const isInternalLink = href && (href.startsWith('/') || href.startsWith('#'))

  if (isInternalLink) {
    return (
      <Link href={href}>
        <a className="dark:text-blue-700 dark:hover:text-bluee-800" {...props} />
      </Link>
    )
  }

  return (
    <a
      target="_blank"
      rel="noopener noreferrer"
      className="dark:text-blue-700 dark:hover:text-bluee-800"
      {...props}
    />
  )
}

const MDXComponents = {
  Image,
  a: CustomLink,
  h1: (props) => <h1 className="text-gray-900 dark:text-gray-200" {...props} />,
  h2: (props) => <h2 className="text-gray-900 dark:text-gray-200" {...props} />,
  h3: (props) => <h3 className="text-gray-900 dark:text-gray-200" {...props} />,
  h4: (props) => <h4 className="text-gray-900 dark:text-gray-200" {...props} />,
  h5: (props) => <h5 className="text-gray-900 dark:text-gray-200" {...props} />,
  h6: (props) => <h6 className="text-gray-900 dark:text-gray-200" {...props} />,
}

export default MDXComponents
