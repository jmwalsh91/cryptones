import { ThemeProvider } from '@mui/material'
import CssBaseline from '@mui/material/CssBaseline'
import { SWRConfig } from 'swr'

import Display from './components/Display/Display'
import NavBar from './components/Nav/NavBar'
import Foundation from './components/layout/Foundation'
import { cryptonesApi } from './services/Axios'
import { theme } from './styles/Theme'
import './index.css'

//TODO: For some reason, removing this seems to trigger re-fetches until alphavantage rejects incoming requests. Evaluate and implement "isPaused" in SWRConfig
const isClient = typeof window !== 'undefined'

export function App() {
  return (
    <CssBaseline>
      <ThemeProvider theme={theme}>
        <NavBar />
        <SWRConfig
          value={{
            fetcher: (endpoint) => {
              return isClient
                ? cryptonesApi(endpoint).then((res) => res.data)
                : new Promise(() => 0)
            },
            suspense: true,
            revalidateOnMount: false,
            revalidateIfStale: false,
            revalidateOnReconnect: false,
            focusThrottleInterval: 20000,
            onErrorRetry: (error, key, config, revalidate, { retryCount }) => {
              // Never retry on 404.
              if (error.status === 404) return

              // Only retry up to _ times.
              if (retryCount >= 1) return
              // Retry after 5 seconds.
              setTimeout(() => revalidate({ retryCount }), 5000)
            },
          }}
        >
          <Foundation>
            <Display />
          </Foundation>
        </SWRConfig>
      </ThemeProvider>
    </CssBaseline>
  )
}
