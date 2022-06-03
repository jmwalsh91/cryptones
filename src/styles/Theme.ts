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
    fontSize: 18,
    fontWeightMedium: 400,
    fontWeightLight: 400,
    fontWeightRegular: 600,
    h2: {
      fontSize: '4.7rem',
    },
    h5: {
      fontSize: '3.3rem',
      fontWeight: 500,
      lineHeight: 1.03,
    },
    button: {
      fontSize: '1.3rem',
      fontWeight: 800,
    },
  },
})
