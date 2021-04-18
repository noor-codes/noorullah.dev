import fs from 'fs'
import matter from 'gray-matter'
import path from 'path'
import readingTime from 'reading-time'
import renderToString from 'next-mdx-remote/render-to-string'

import MDXComponents from '@/components/mdx/MDXComponents'

const root = process.cwd()

export async function getFiles(type) {
  return fs.readdirSync(path.join(root, 'md', type))
}

export async function getFileBySlug(type, slug) {
  const source = slug
    ? fs.readFileSync(path.join(root, 'md', type, `${slug}.mdx`), 'utf8')
    : fs.readFileSync(path.join(root, 'md', `${type}.mdx`), 'utf8')

  const { data, content } = matter(source)
  const mdxSource = await renderToString(content, {
    components: MDXComponents,
  })

  return {
    mdxSource,
    frontMatter: {
      wordCount: content.split(/\s+/gu).length,
      readingTime: readingTime(content),
      slug: slug || null,
      ...data,
    },
  }
}

export async function getAllFilesFrontMatter(type) {
  const files = fs.readdirSync(path.join(root, 'md', type))

  return files.reduce((allPosts, postSlug) => {
    const source = fs.readFileSync(path.join(root, 'md', type, postSlug), 'utf8')
    const { data, content } = matter(source)

    return [
      {
        ...data,
        slug: postSlug.replace('.mdx', ''),
        wordCount: content.split(/\s+/gu).length,
        readingTime: readingTime(content),
      },
      ...allPosts,
    ]
  }, [])
}
