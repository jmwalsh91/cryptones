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
