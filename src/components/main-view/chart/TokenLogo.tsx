/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { useTheme } from '@mui/material'

import * as base from '../../../styles/base'
import * as neu from '../../../styles/neu'

import * as interfaces from '~/types/interfaces'

type Props = {
  tokenLogo: interfaces.tokenObject['logo'] | undefined
}
function TokenLogo({ tokenLogo }: Props) {
  const currentTheme = useTheme()
  const themedNeu = currentTheme.palette.mode === 'light' ? neu.light : neu.dark
  return (
    <div
      css={css`
        ${themedNeu.circleAction};
        ${base.centerChildren};
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
