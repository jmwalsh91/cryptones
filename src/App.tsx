import CssBaseline from '@mui/material/CssBaseline'
import { SWRConfig } from 'swr'

import Display from './components/Display/Display'
import NavBar from './components/Nav/NavBar'
import Modal from './components/layout/Modal'
import { cryptonesApi } from './services/Axios'
import './index.css'
import { ModeProvider } from './styles/ModeProvider'

//TODO: IMPORTANT! We could definitely implement useMediaQuery in the ModeProvider for accessibility queries. I also like the useMediaQuery for device queries, and with it being below the SWRConfig provider, I don't think it would be too disruptive for browser-window-squeezers.
const isClient = typeof window !== 'undefined'

export function App() {
  return (
    <SWRConfig
      value={{
        fetcher: (endpoint) => {
          console.log('global hit')
          return isClient
            ? cryptonesApi(endpoint)
                .then((res) => res.data)
                .catch((err) => {
                  console.log(err)
                })
            : new Promise(() => 0)
        },
        suspense: true,
        revalidateOnMount: false,
        revalidateIfStale: false,
        revalidateOnReconnect: false,
        revalidateOnFocus: false,
        focusThrottleInterval: 20000,
      }}
    >
      <ModeProvider>
        <CssBaseline>
          <NavBar />
          <Modal isOpen={false} />
          <Display />
        </CssBaseline>
      </ModeProvider>
    </SWRConfig>
  )
}

/**
 * Testing deployment with railway
 */
