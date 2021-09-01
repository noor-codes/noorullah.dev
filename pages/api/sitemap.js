import { SitemapStream, streamToPromise } from 'sitemap'
import { Readable } from 'stream'

const Sitemap = async (req, res) => {
  const links = [
    { url: '/', changefreq: 'daily', priority: 0.3 },
    { url: '/blog', changefreq: 'daily', priority: 0.3 },
    { url: '/blog/github-authentication', changefreq: 'daily', priority: 0.3 },
    { url: '/blog/portfolio-for-software-engineers', changefreq: 'daily', priority: 0.3 },
  ]

  // Create a stream to write to
  const stream = new SitemapStream({ hostname: `https://${req.headers.host}` })

  res.writeHead(200, {
    'Content-Type': 'application/xml',
  })

  const xmlString = await streamToPromise(Readable.from(links).pipe(stream)).then((data) =>
    data.toString()
  )

  res.end(xmlString)
}

export default Sitemap
