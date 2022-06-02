/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'

import * as base from '../../styles/base'
import * as neu from '../../styles/neu'

type Props = {}

function ActionToggle({}: Props) {
  return (
    <div
      css={css`
        ${neu.raised}
      `}
    >
      ActionToggle
    </div>
  )
}

export default ActionToggle
