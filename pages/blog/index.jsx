import Head from 'next/head'

import SectionTitle from '@/articles/SectionTitle'
import BlogTitle from '@/blog/BlogTitle'
import Sharing from '@/articles/Sharing'
import Footer from '@/components/Footer'
import Description from '@/components/blog/Description'

const Blog = () => (
  <div>
    <Head>
      <title>Noorullah Ahmadzai</title>
      <>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700&display=swap"
          rel="stylesheet"
        />
      </>
    </Head>

    <SectionTitle name="Blog" />
    <main className="xs:px-4 mx-auto md:px-24 md:pt-5 xl:px-60">
      <BlogTitle title="I write about Web Development and Modern Technologies" />
      <Description />
    </main>

    <Sharing />
    <Footer />
  </div>
)

export default Blog
