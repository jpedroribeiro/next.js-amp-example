import Head from 'next/head'
import { useAmp } from 'next/amp'
import Layout from '../components/Layout'
import Byline from '../components/Byline'

export const config = {
  amp: "hibrid",
}

export default function IndexPage() {
  const isAmp = useAmp()

  return (
    <Layout>
      <Head>
        <title>The Cat</title>
      </Head>
      
    <p>Text</p>
    </Layout>
  )
}
