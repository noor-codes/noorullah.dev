import { bio } from 'utils/bio'

const { fullname, description } = bio
const { twitter, website } = bio.profiles

export const SEO = {
  title: fullname,
  description,
  openGraph: {
    title: fullname,
    description,
    type: 'website',
    locale: 'en_IE',
    url: website.url,
    images: [
      {
        url: website.seo_banner,
        alt: fullname,
        width: 1920,
        height: 1060,
      },
    ],
  },
  twitter: {
    handle: twitter.handler,
    cardType: 'summary_large_image',
    site: twitter.handler,
  },
}
