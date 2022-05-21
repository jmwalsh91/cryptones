import { createTheme } from '@mui/material'

export const theme = createTheme({
  palette: {
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
    fontFamily: 'Bitter',
    h1: {
      fontWeight: 800,
      lineHeight: 0.8,
      fontSize: '5rem',
    },
    h2: {
      fontSize: '3.6rem',
    },
    fontSize: 20,
    h3: {
      fontSize: '2.9rem',
    },
    body1: {
      fontSize: '1.1rem',
    },
  },
})
