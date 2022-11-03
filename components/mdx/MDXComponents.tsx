import Image from 'next/image'
import Link from 'next/link'

const CustomLink = (props) => {
  const href = props.href
  const isInternalLink = href && (href.startsWith('/') || href.startsWith('#'))

  if (isInternalLink) {
    return (
      <Link href={href}>
        <a className="text-red-500" {...props} />
      </Link>
    )
  }

  return <a target="_blank" rel="noopener noreferrer" className="text-red-500" {...props} />
}

export const MDXComponents = {
  Image,
  a: CustomLink,
  h1: (props) => <h1 className="text-gray-900" {...props} />,
  h2: (props) => <h2 className="text-gray-900" {...props} />,
  h3: (props) => <h3 className="text-gray-900" {...props} />,
  h4: (props) => <h4 className="text-gray-900" {...props} />,
  h5: (props) => <h5 className="text-gray-900" {...props} />,
  h6: (props) => <h6 className="text-gray-900" {...props} />,
}
