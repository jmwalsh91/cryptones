import { ThemeProvider } from '@mui/material'
import { theme } from '../src/styles/Theme'

/* import { GlobalStyle, theme } from '../src/styles' */

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
}

export const decorators = [
  (Story) => (
    <ThemeProvider theme={theme}>
      <Story />
    </ThemeProvider>
  ),
]
