import 'styles/globals.css'

import { Analytics } from '@vercel/analytics/react'
import { App_Head } from 'config/Head'
import { DefaultSeo } from 'next-seo'
import { Googe_Analytics } from 'config/google_analytics'
import { MDXComponents } from 'components/mdx/MDXComponents'
import { MDXProvider } from '@mdx-js/react'
import { SEO } from 'config/seo'
import SnackbarProvider from 'react-simple-snackbar'
import { nprogress } from 'config/nprogress'

function MyApp({ Component, pageProps }) {
  nprogress()
  Googe_Analytics()

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
