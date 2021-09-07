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
        width: 1920,
        height: 1060,
      },
    ],
  },
  twitter: {
    handle: '@noor_codes',
    cardType: 'summary_large_image',
    site: '@noor_codes',
  },
}

export default SEO
