import { PaletteMode, Theme, ThemeProvider } from '@mui/material'
import React, { createContext, ReactNode, useMemo, useState } from 'react'

import * as themeObject from '../styles/Theme'

type Props = {
  children: ReactNode
}

export const ModeContext = createContext<{ toggleColorMode: () => void }>({
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  toggleColorMode: () => {},
})

export function ModeProvider({ children }: Props) {
  const [mode, setMode] = useState<PaletteMode>('light')

  const colorMode = useMemo(
    () => ({
      // The dark mode switch would invoke this method
      toggleColorMode: () => {
        setMode((prevMode: PaletteMode) =>
          prevMode === 'light' ? 'dark' : 'light'
        )
      },
    }),
    []
  )

  const theme: Theme =
    mode === 'light' ? themeObject.theme : themeObject.darkTheme

  return (
    <ModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ModeContext.Provider>
  )
}