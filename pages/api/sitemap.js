import { SitemapStream, streamToPromise } from 'sitemap'
import { Readable } from 'stream'
import { getAllFilesFrontMatter } from '@/utils/mdx'

const PostLinks = [
  { url: `/` },
  { url: `/blog/` },
  { url: `/blog/portfolio-for-software-engineers` },
  { url: `/blog/github-authentication` },
]

const Sitemap = async (req, res) => {
  //. Fetch All Posts
  const posts = await getAllFilesFrontMatter('blog')

  //. Read the all the posts and generate their links in the XML sitemap.
  const links = posts.map((post) => {
    return { url: `/blog/${post.slug}`, changefreq: 'daily', priority: 0.3 }
  })

  //. Push your own links into the mix if they are not on the blog array.
  links.unshift({ url: `/blog/`, changefreq: 'daily', priority: 0.3 })
  links.unshift({ url: `/`, changefreq: 'daily', priority: 0.3 })

  //. Create a stream using incoming domain.
  const stream = new SitemapStream({ hostname: `https://${req.headers.host}` })

  //. Send 200 Status Code with XML Format Included.
  res.writeHead(200, {
    'Content-Type': 'application/xml',
  })

  //. Add the link into the stream.
  const xmlString = await streamToPromise(Readable.from(links).pipe(stream)).then((data) =>
    data.toString()
  )

  //. Send XML output file.
  res.end(xmlString)
}

export default Sitemap
