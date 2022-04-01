import type { NextPage } from 'next'
import { Main } from '../components/Home'
import Head from 'next/head'

const Home: NextPage = () => {

  return (
    <div>
      <Head>
        <title>Acc Club Media</title>
        <meta name="description" content="A social media webapp Build for Adamjee Cantonment College . By the It Club of the college" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <Main />
      </div>
    </div>
  )
}
export default Home
