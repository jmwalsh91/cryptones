/** @jsxImportSource @emotion/react */
import { jsx, css } from '@emotion/react'

import * as neu from '../../../styles/neu'
type Props = { logo: string }

function TokenLogo({ logo }: Props) {
  return (
    <img
      css={css`
        ${neu.token}
      `}
      src={logo}
      width="100"
    />
  )
}

export default TokenLogo
