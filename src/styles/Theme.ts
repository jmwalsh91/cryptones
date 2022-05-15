import { createTheme, ThemeOptions } from '@mui/material'

export const theme = createTheme({
  palette: {
    primary: {
      main: '#121212',
      contrastText: '#FFF1EF',
    },
    secondary: {
      main: '#92bfd2',
    },
    background: {
      paper: '#f7f3ed',
      default: '#fdf0dd',
    },
    text: {
      primary: '#310f0c',
    },
    divider: '#55251d',
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
