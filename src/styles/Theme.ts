import { createTheme } from '@mui/material'

export const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#65ABBA',
    },
    secondary: {
      main: '#d070be',
    },
    background: {
      default: '#1D1D1D',
      paper: '#d9d9d9',
    },
    warning: {
      main: '#E0981E',
    },
    info: {
      main: '#328D80',
    },
  },
  typography: {
    fontFamily: "'Montserrat', sans-serif;",
  },
  components: {
    MuiTypography: {
      defaultProps: {
        fontFamily: "'Montserrat', sans-serif;",
      },
    },
  },
})

export const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#65abba',
    },
    secondary: {
      main: '#d070be',
    },
    error: {
      main: '#f44336',
    },
    warning: {
      main: '#E0981E',
    },
    info: {
      main: '#328d80',
    },
    background: {
      default: '#1a1818',
      paper: '#2f2c2c',
    },
  },
  typography: {
    fontFamily: 'Smooch Sans',
  },
})
