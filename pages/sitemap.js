import { getAllFilesFrontMatter } from '@/utils/mdx'

const customLinks = [{ url: '' }, { url: '/blog' }]

const Sitemap = () => {}

export const getServerSideProps = async ({ req, res }) => {
  const posts = await getAllFilesFrontMatter('blog')

  const sitemap = `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:news="http://www.google.com/schemas/sitemap-news/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1" xmlns:video="http://www.google.com/schemas/sitemap-video/1.1">

  ${customLinks
    .map((link) => {
      return `<url>
    <loc>https://${req.headers.host}${link.url}</loc>
    <changefreq>daily</changefreq>
    <priority>0.3</priority>
  </url>`
    })
    .join('')}


  ${posts
    .map((post) => {
      return `<url>
        <loc>https://${req.headers.host}/blog/${post.slug}</loc>
        <changefreq>daily</changefreq>
        <priority>0.3</priority>
      </url>`
    })
    .join('')}

  </urlset>`

  res.setHeader('Content-Type', 'text/xml')
  res.write(sitemap)
  res.end()

  return {
    props: {},
  }
}

export default Sitemap
