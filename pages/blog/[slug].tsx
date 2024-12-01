import { getFileBySlug, getFiles } from 'utils/mdx'

import { BlogLayout } from 'layouts/Bloglayout'
import { MDXComponents } from 'components/mdx/MDXComponents'
import { MDXRemote } from 'next-mdx-remote'

export default function Blog({ mdxSource, frontMatter }) {
  return (
    <BlogLayout frontMatter={frontMatter}>
      <MDXRemote {...mdxSource} components={MDXComponents} />
    </BlogLayout>
  )
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
