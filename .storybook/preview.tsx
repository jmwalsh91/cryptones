import {themes} from '@storybook/theming'
import { ThemeProvider } from '@mui/material'
import { darkTheme, theme } from '../src/styles/Theme'

/* import { GlobalStyle, theme } from '../src/styles' */


export const parameters = {
  darkMode: {
    // Override the default dark theme
    dark: { ...darkTheme, appBg: 'black' },
    // Override the default light theme
    light: { ...theme, appBg: 'white' }
  }
};

export const decorators = [
  (Story) => (
    <ThemeProvider theme={darkTheme}>
      <Story />
    </ThemeProvider>
  ),
]

