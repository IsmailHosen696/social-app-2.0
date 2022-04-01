import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { Navbar } from '../components/navbar'
import { Fragment } from 'react'
import { useRouter } from 'next/router'

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  return (
    <Fragment>
      {
        router.pathname.includes("auth") ?
          null
          :
          <Navbar />
      }
      <Component {...pageProps} />
    </Fragment>
  )
}

export default MyApp
