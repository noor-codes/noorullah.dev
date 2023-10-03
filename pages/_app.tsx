import 'styles/globals.css'

import { SEO } from 'utils/seo'
import { App_Head } from 'utils/Head'
import { Analytics } from '@vercel/analytics/react'
import { nprogress } from 'utils/nprogress'
import { DefaultSeo } from 'next-seo'
import { MDXProvider } from '@mdx-js/react'
import { MDXComponents } from 'components/mdx/MDXComponents'

import splitbee from '@splitbee/web'
import SnackbarProvider from 'react-simple-snackbar'

// This initiliazes Splitbee.js
splitbee.init()

function MyApp({ Component, pageProps }) {
  nprogress()

  return (
    <>
      <App_Head />
      <SnackbarProvider>
        <MDXProvider components={MDXComponents}>
          <DefaultSeo {...SEO} />
          <Component {...pageProps} />
          <Analytics />
        </MDXProvider>
      </SnackbarProvider>
    </>
  )
}

export default MyApp
