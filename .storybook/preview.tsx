import { ThemeProvider } from '@mui/material'
import { theme } from '../src/styles/Theme'

/* import { GlobalStyle, theme } from '../src/styles' */

export const parameters = {
  actions: {}
}

export const decorators = [
  (Story) => (
    <ThemeProvider theme={theme}>
      <Story />
    </ThemeProvider>
  ),
]

