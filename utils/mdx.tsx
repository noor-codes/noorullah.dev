import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import mdxPrism from 'mdx-prism'
import readingTime from 'reading-time'
import { serialize } from 'next-mdx-remote/serialize'
import rehypeSlug from 'rehype-slug'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import remarkCodeTitles from 'remark-code-titles'
import remarkGfm from 'remark-gfm'

const root = process.cwd()

export async function getFiles(type) {
  return fs.readdirSync(path.join(root, 'md', type))
}

export async function getFileBySlug(type, slug) {
  const source = slug
    ? fs.readFileSync(path.join(root, 'md', type, `${slug}.mdx`), 'utf8')
    : fs.readFileSync(path.join(root, 'md', `${type}.mdx`), 'utf8')

  const { data, content } = matter(source)
  const mdxSource = await serialize(content, {
    mdxOptions: {
      remarkPlugins: [remarkGfm, remarkCodeTitles],
      rehypePlugins: [
        mdxPrism,
        rehypeSlug,
        [
          rehypeAutolinkHeadings,
          {
            behavior: 'wrap',
            properties: {
              className: ['anchor'],
            },
          },
        ],
      ],
    },
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
        slug: postSlug.replace(/\.mdx/, ''),
        readingTime: readingTime(content),
      },
      ...allPosts,
    ]
  }, [])
}
