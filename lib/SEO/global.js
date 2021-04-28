const title = 'Noorullah Ahmadzai'
const description = 'Software Engineer, Web Developer, Writer and JavaScript Enthusiast'

const SEO = {
  title,
  description,
  openGraph: {
    title,
    description,
    type: 'website',
    locale: 'en_IE',
    url: 'https://noorullah.dev',
    images: [
      {
        url: 'https://noorullah.dev/img/SEO/Landing.png',
        alt: title,
        width: 752,
        height: 415,
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
