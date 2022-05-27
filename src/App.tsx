import { ThemeProvider } from '@mui/material'
import CssBaseline from '@mui/material/CssBaseline'
import { SWRConfig } from 'swr'

import Display from './components/Display/Display'
import NavBar from './components/Nav/NavBar'
import Modal from './components/layout/Modal'
import { cryptonesApi } from './services/Axios'
import { theme } from './styles/Theme'
import './index.css'

//TODO: For some reason, removing this seems to trigger re-fetches until alphavantage rejects incoming requests. Evaluate and implement "isPaused" in SWRConfig
const isClient = typeof window !== 'undefined'

export function App() {
  return (
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
        revalidateOnFocus: false,
        focusThrottleInterval: 20000,
      }}
    >
      <ThemeProvider theme={theme}>
        <CssBaseline>
          <NavBar />

          <Modal isOpen={true} />
          <Display />
        </CssBaseline>
      </ThemeProvider>
    </SWRConfig>
  )
}
