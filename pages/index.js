import Landing from '@/components/Landing'
import Layout from '@/components/Layout'
import Head from 'next/head'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Noorullah Ahmadzai</title>
      </Head>

      <Layout>
        <Landing />
      </Layout>
    </div>
  )
}
