import { SitemapStream, streamToPromise } from 'sitemap'
import { Readable } from 'stream'
import { PostLinks } from '@/lib/SEO/links'

const Sitemap = async (req, res) => {
  //. Read the all the posts and generate their links in the XML sitemap.
  const links = PostLinks.map((post) => {
    return { url: post.url, changefreq: 'daily', priority: 0.3 }
  })

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
