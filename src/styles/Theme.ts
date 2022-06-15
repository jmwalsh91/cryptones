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
    fontFamily: 'Smooch Sans',
    fontSize: 18,
    fontWeightMedium: 350,
    fontWeightLight: 300,
    fontWeightRegular: 300,
    h2: {
      fontSize: '3rem',
    },
    h5: {
      fontSize: '1.8rem',
      fontWeight: 500,
      lineHeight: 1.03,
    },
    button: {
      fontSize: '1.1rem',
      fontWeight: 500,
    },
  },
  components: {
    MuiTypography: {
      defaultProps: {
        fontFamily: 'Smooch Sans',
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
      default: '#161616',
      paper: '#161616',
    },
    text: {
      primary: '#f5f2f2',
    },
    divider: 'rgba(201,192,192,0.75)',
  },
  typography: {
    fontFamily: 'Smooch Sans',
    fontSize: 16,
    fontWeightMedium: 350,
    fontWeightLight: 300,
    fontWeightRegular: 300,
    h2: {
      fontSize: '3rem',
    },
    h5: {
      fontSize: '1.8rem',
      fontWeight: 500,
      lineHeight: 1.03,
    },
    button: {
      fontSize: '1.3rem',
      fontWeight: 500,
    },
  },
  components: {
    MuiTypography: {
      defaultProps: {
        fontFamily: 'Smooch Sans',
      },
    },
  },
})
