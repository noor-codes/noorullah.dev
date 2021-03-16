import { DefaultSeo } from 'next-seo'

import '@/styles/globals.css'
import Head from 'next/head'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <DefaultSeo
        openGraph={{
          type: 'website',
          locale: 'en_US',
          url: 'https://noorullah.dev/',
          site_name: 'Noorullah Ahmadzai',
        }}
        twitter={{
          handle: '@noorullah_ah',
          cardType: 'summary_large_image',
          // site: '@site',
        }}
      />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
