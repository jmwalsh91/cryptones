import { ThemeProvider } from '@mui/material'
import CssBaseline from '@mui/material/CssBaseline'
import { SWRConfig } from 'swr'

import NavBar from './components/Nav/NavBar'
import Foundation from './components/layout/Foundation'
import Display from './components/surfaces/Display'
import { cryptonesApi } from './services/Axios'
import { theme } from './styles/Theme'

export function App() {
  return (
    <CssBaseline>
      <ThemeProvider theme={theme}>
        <SWRConfig
          value={{
            fetcher: (endpoint, config?) => {
              return cryptonesApi.get(endpoint, config).then((res) => {
                console.log(res)
                return res
              })
            },
            suspense: true,
          }}
        >
          <NavBar />
          <Foundation>
            <Display />
          </Foundation>
        </SWRConfig>
      </ThemeProvider>
    </CssBaseline>
  )
}
