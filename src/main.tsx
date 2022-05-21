import { CssBaseline } from '@mui/material'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { Global, css } from '@emotion/react'

import { App } from './App'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Global
      styles={css`
        .app {
          overflow: hidden;
          background-color: 'black';
        }
      `}
    />
    <div className="app">
      <App />
    </div>
  </React.StrictMode>
)
