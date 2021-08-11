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
        <a className="dark:text-blue-500 dark:hover:text-blue-800" {...props} />
      </Link>
    )
  }

  return (
    <a
      target="_blank"
      rel="noopener noreferrer"
      className="dark:text-blue-500 dark:hover:text-blue-800"
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

//. Name the Components for better debugging
MDXComponents.Image.displayName = 'Image'
MDXComponents.a.displayName = 'a'
MDXComponents.h1.displayName = 'h1'
MDXComponents.h2.displayName = 'h2'
MDXComponents.h3.displayName = 'h3'
MDXComponents.h4.displayName = 'h4'
MDXComponents.h5.displayName = 'h5'
MDXComponents.h6.displayName = 'h6'

export default MDXComponents
