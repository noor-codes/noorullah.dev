import Head from 'next/head'

import SectionTitle from '@/components/SectionTitle'
import BlogTitle from '@/blog/BlogTitle'
import Footer from '@/components/Footer'
import SearchBar from '@/blog/SearchBar'
import ArticleCard from '@/blog/ArticleCard'
import LoadMore from '@/blog/LoadMoreButton'

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
    <main className="xs:px-4 mx-auto md:px-20 md:pt-5 xl:px-60">
      <BlogTitle
        title="I write about Web Development and Modern Technologies"
        description="  It is a long established fact that a reader will be distracted by the readable content of a
      page when looking at its layout. The point of using Lorem Ipsum is."
      />
      <SearchBar />

      <ArticleCard
        title="Local Authentication Using passport in Node.JS"
        paragraph="lorem ipsum dolor sit amet, consecteturlorem ipsum dolor sit amet, consectetur adip"
      />
      <ArticleCard
        title="New Features in Jest"
        paragraph="lorem ipsum dolor sit amet, consecteturlorem ipsum dolor sit amet, consectetur adip"
      />
      <ArticleCard
        title="5 CSS Tricks you didn't know existed"
        paragraph="lorem ipsum dolor sit amet, consecteturlorem ipsum dolor sit amet, consectetur adip"
      />

      <LoadMore />
    </main>

    <Footer />
  </div>
)

export default Blog
