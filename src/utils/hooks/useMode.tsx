import { useTheme } from '@mui/material'

import * as neu from '../../styles/neu'

export function useMode() {
  const currentTheme = useTheme()
  return currentTheme.palette.mode === 'light' ? neu.light : neu.dark
}
