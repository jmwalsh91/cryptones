/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { useMediaQuery } from '@mui/material'

import { useMode } from '~/utils/hooks/useMode'

import * as base from '../../../styles/base'

import * as interfaces from '~/types/interfaces'

type Props = {
  tokenLogo: interfaces.tokenObject['logo'] | undefined
}
function TokenLogo({ tokenLogo }: Props) {
  const narrowScreen = useMediaQuery('(min-width: 450px)')
  const themedNeu = useMode()

  //This is not designed to change sizes from users "squishing" the window, but rather for situations where
  const scaledCircle = narrowScreen
    ? ``
    : `
    transform: scale(0.8);
    `

  return (
    <div
      css={css`
        ${themedNeu.circleAction};
        ${base.centerChildren};
        margin-top: 1rem;
        ${scaledCircle}
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
