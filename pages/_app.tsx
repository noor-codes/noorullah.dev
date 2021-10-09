import { SEO } from 'config/seo'
import { App_Head } from 'config/Head'
import { DefaultSeo } from 'next-seo'
import { nprogress } from 'config/nprogress'
import { MDXProvider } from '@mdx-js/react'
import { ThemeProvider } from 'next-themes'
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
      <ThemeProvider defaultTheme="system" attribute="class">
        <SnackbarProvider>
          <MDXProvider components={MDXComponents}>
            <DefaultSeo {...SEO} />
            <Component {...pageProps} />
          </MDXProvider>
        </SnackbarProvider>
      </ThemeProvider>
    </>
  )
}

export default MyApp
