import CssBaseline from '@mui/material/CssBaseline'
import Foundation from './components/layout/Foundation'

import NavBar from './components/Nav/NavBar'
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
