const title = 'Noorullah Ahmadzai – Software Engineer and Writer'
const description = 'Software Engineer, Web Developer and JavaScript Enthusiast'

const SEO = {
  title,
  description,
  canonical: 'https://noorullah.dev',
  openGraph: {
    title,
    description,
    type: 'website',
    locale: 'en_IE',
    url: 'https://noorullah.dev',
    images: [
      {
        url: 'https://noorullah.dev/static/img/banner.png',
        alt: title,
        width: 1280,
        height: 720,
      },
    ],
  },
  twitter: {
    handle: '@noorullah_ah',
    cardType: 'summary_large_image',
    site: '@noorullah_ah',
  },
}

export default SEO
