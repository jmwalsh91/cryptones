/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { Button } from '@mui/material'
import { ReactNode } from 'react'

import * as neu from '../../styles/neu'

type Props = {
  children: string | ReactNode
  handler: VoidFunction
}
function CircleButtonBase({ children, handler }: Props) {
  return (
    <Button
      css={css`
        ${neu.circleAction};
        ${neu.actionHover};
      `}
      onClick={handler}
    >
      {children}
    </Button>
  )
}

export default CircleButtonBase
