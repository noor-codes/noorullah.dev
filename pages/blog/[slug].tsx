import { getFileBySlug, getFiles } from 'utils/mdx'

import { BlogLayout } from 'layouts/Bloglayout'
import { MDXComponents } from 'components/mdx/MDXComponents'
import hydrate from 'next-mdx-remote/hydrate'

export default function Blog({ mdxSource, frontMatter }) {
  const content = hydrate(mdxSource, {
    components: MDXComponents as any,
  })

  return <BlogLayout frontMatter={frontMatter}>{content}</BlogLayout>
}

export async function getStaticPaths() {
  const posts = await getFiles('blog')

  return {
    paths: posts.map((post) => ({
      params: {
        slug: post.replace(/\.mdx/, ''),
      },
    })),
    fallback: false,
  }
}

export async function getStaticProps({ params }) {
  const post = await getFileBySlug('blog', params.slug)

  return { props: post }
}
