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
      default: '#d9d9d9',
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
      main: '#f9494b',
    },
    warning: {
      main: '#E0981E',
    },
    info: {
      main: '#328d80',
    },
    background: {
      default: '#2f2c2c',
      paper: '#2f2c2c',
    },
    text: {
      primary: '#f5f2f2',
    },
    divider: 'rgba(201,192,192,0.75)',
  },
  typography: {
    fontFamily: 'Smooch Sans',
  },
})
