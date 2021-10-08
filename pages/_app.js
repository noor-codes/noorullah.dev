import { SEO } from '@/config/seo'
import { App_Head } from '@/config/Head'
import { DefaultSeo } from 'next-seo'
import { nprogress } from '@/config/nprogress'
import { MDXProvider } from '@mdx-js/react'
import { ThemeProvider } from 'next-themes'
import { googe_analytics } from '@/config/googe_analytics'
import SnackbarProvider from 'react-simple-snackbar'
import MDXComponents from '@/components/mdx/MDXComponents'

import '@/styles/globals.css'

function MyApp({ Component, pageProps }) {
  nprogress()
  googe_analytics()

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
