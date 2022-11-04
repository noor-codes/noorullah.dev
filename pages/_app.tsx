import 'styles/globals.css'

import { Analytics } from '@vercel/analytics/react'
import { App_Head } from 'config/Head'
import { DefaultSeo } from 'next-seo'
import { MDXComponents } from 'components/mdx/MDXComponents'
import { MDXProvider } from '@mdx-js/react'
import { SEO } from 'config/seo'
import SnackbarProvider from 'react-simple-snackbar'
import { nprogress } from 'config/nprogress'
import splitbee from '@splitbee/web'

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
