/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { useMediaQuery } from '@mui/material'

import * as base from '../../../styles/base'
import * as interfaces from '../../../types/interfaces'
import { useMode } from '../../../utils/hooks/useMode'

type Props = {
  tokenLogo: interfaces.tokenObject['logo'] | undefined
}
function TokenLogo({ tokenLogo }: Props) {
  const themedNeu = useMode()

  return (
    <div
      css={css`
        ${themedNeu.circleAction};
        ${base.centerChildren};
        margin-top: 1rem;
      `}
    >
      <div
        css={css`
          ${base.centeredSvg};
          background-image: url('${tokenLogo}');
        `}
      />
    </div>
  )
}

export default TokenLogo
