import { SEO } from 'config/seo'
import { App_Head } from 'config/Head'
import { DefaultSeo } from 'next-seo'
import { nprogress } from 'config/nprogress'
import { MDXProvider } from '@mdx-js/react'
import { Googe_Analytics } from 'config/google_analytics'
import SnackbarProvider from 'react-simple-snackbar'
import { MDXComponents } from 'components/mdx/MDXComponents'

import 'styles/globals.css'

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
        </MDXProvider>
      </SnackbarProvider>
    </>
  )
}

export default MyApp
