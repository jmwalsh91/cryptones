import CssBaseline from '@mui/material/CssBaseline'

import NavBar from './components/Nav/NavBar'
import Foundation from './components/layout/Foundation'
import Display from './components/surfaces/Display'

export function App() {
  return (
    <CssBaseline>
      <NavBar />
      <Foundation>
        <Display />
      </Foundation>
    </CssBaseline>
  )
}
