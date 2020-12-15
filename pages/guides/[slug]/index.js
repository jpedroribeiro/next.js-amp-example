import Head from 'next/head'
import { useAmp } from 'next/amp'
import Byline from '../components/Byline'

export const config = {
  amp: 'hybrid',
}

export default function DogPage() {
  const isAmp = useAmp()

  return (
    <div>
      <Head>
        <title>AMP Test</title>
      </Head>
      <h1>AMP Test with slug</h1>
      <p className="caption">isAmp = {isAmp.toString()}</p>

    </div>
  )
}

export const getServerSideProps = async function ({
  params,
  req,
  res,
  query,
}) {
 
  return {
    props: {
      
    },
  };
};
