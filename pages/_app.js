import { DefaultSeo } from 'next-seo'
import { ThemeProvider } from 'next-themes'
import { MDXProvider } from '@mdx-js/react'

import '@/styles/globals.css'
import Head from 'next/head'
import MDXComponents from '@/components/mdx/MDXComponents'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta charSet="utf-8" />

        {/* PWA Configurations */}
        <link rel="manifest" href="/manifest.json" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <link href="/pwa/icons/icon-192x192.png" rel="icon" type="image/png" sizes="192x192" />
        <link href="/pwa/icons/icon-256x256.png" rel="icon" type="image/png" sizes="256x256" />
        <link href="/pwa/icons/icon-384x384.png" rel="icon" type="image/png" sizes="384x384" />
        <link href="/pwa/icons/icon-512x512.png" rel="icon" type="image/png" sizes="512x512" />
        <link rel="apple-touch-icon" href="/pwa/apple-touch-icon-iphone-60x60.png" />
        <link rel="apple-touch-icon" sizes="60x60" href="/pwa/apple-touch-icon-ipad-76x76.png" />
        <link
          rel="apple-touch-icon"
          sizes="114x114"
          href="/pwa/apple-touch-icon-iphone-retina-120x120.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="144x144"
          href="/pwa/apple-touch-icon-ipad-retina-152x152.png"
        />
        <link rel="apple-touch-icon" href="/apple-icon.png" />
        <meta name="theme-color" content="#000000" />
      </Head>

      <ThemeProvider defaultTheme="system" attribute="class">
        <MDXProvider components={MDXComponents}>
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
              site: '@noorullah_ah',
            }}
          />
          <Component {...pageProps} />
        </MDXProvider>
      </ThemeProvider>
    </>
  )
}

export default MyApp
