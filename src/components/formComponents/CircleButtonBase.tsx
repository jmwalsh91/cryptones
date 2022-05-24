/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { Button, ButtonBase } from '@mui/material'

import * as neu from '../../styles/neu'

function CircleButtonBase() {
  return (
    <Button
      css={css`
        ${neu.circleAction};
        ${neu.actionHover};
      `}
    >
      Click
    </Button>
  )
}

export default CircleButtonBase
