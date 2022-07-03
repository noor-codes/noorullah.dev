import Document, { Html, Head, Main, NextScript, DocumentContext } from 'next/document'

import { GA_TRACKING_ID } from 'config/gtag'

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html lang="en-US">
        <Head>
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            rel="prefetch stylesheet"
            href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap"
            type="font/woff2"
            as="font"
            crossOrigin="anonymous"
          />

          {/*//. Google Analytics */}
          <script async src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`} />
          <script
            // eslint-disable-next-line react/no-danger
            dangerouslySetInnerHTML={{
              __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_TRACKING_ID}', {
              page_path: window.location.pathname,
            });
          `,
            }}
          />
        </Head>
        <body className="bg-white">
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument