import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { BottomBar, Navbar } from '../components/navbar'
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
          <Fragment>
            <Navbar />
            <div className='block md:hidden'>
              <BottomBar />
            </div>
          </Fragment>
      }
      <Component {...pageProps} />
    </Fragment>
  )
}

export default MyApp
