/* eslint-disable global-require */
import fs from 'fs'
import matter from 'gray-matter'
import mdxPrism from 'mdx-prism'
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
    mdxOptions: {
      remarkPlugins: [
        require('remark-autolink-headings'),
        require('remark-slug'),
        require('remark-code-titles'),
      ],
      rehypePlugins: [mdxPrism],
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
  //. create new directory if doesn't exist
  const dir = './md'

  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir)
    fs.mkdirSync(`${dir}/${type}`)
    console.log(`Folders Created! \n ${dir} \n ${dir}/${type}`)

    //. If folder were just created, there is no files in it. Return Empty Array
    return []
  }

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
