/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { Button } from '@mui/material'
import { ReactNode } from 'react'

import { useMode } from '~/utils/hooks/useMode'

type Props = {
  children: string | ReactNode
  handler: VoidFunction
}
function CircleButtonBase({ children, handler }: Props) {
  const themedNeu = useMode()
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
