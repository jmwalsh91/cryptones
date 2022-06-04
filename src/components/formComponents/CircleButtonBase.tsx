/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { Button } from '@mui/material'
import { useTheme } from '@mui/system'
import { ReactNode } from 'react'

import * as neu from '../../styles/neu'

type Props = {
  children: string | ReactNode
  handler: VoidFunction
}
function CircleButtonBase({ children, handler }: Props) {
  const currentTheme = useTheme()
  const themedNeu = currentTheme.palette.mode === 'light' ? neu.light : neu.dark
  return (
    <Button
      css={css`
        ${themedNeu.circleAction};
        ${themedNeu.actionHover};
      `}
      onClick={handler}
    >
      {children}
    </Button>
  )
}

export default CircleButtonBase
