import { ThemeProvider } from '@mui/material'
import CssBaseline from '@mui/material/CssBaseline'

import NavBar from './components/Nav/NavBar'
import Foundation from './components/layout/Foundation'
import Display from './components/surfaces/Display'
import { theme } from './styles/Theme'

export function App() {
  return (
    <CssBaseline>
      <ThemeProvider theme={theme}>
        <NavBar />
        <Foundation>
          <Display />
        </Foundation>
      </ThemeProvider>
    </CssBaseline>
  )
}
