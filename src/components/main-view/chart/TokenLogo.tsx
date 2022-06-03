/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'

import * as base from '../../../styles/base'
import * as neu from '../../../styles/neu'

import * as interfaces from '~/types/interfaces'

type Props = {
  tokenLogo: interfaces.tokenObject['logo'] | undefined
}
function TokenLogo({ tokenLogo }: Props) {
  return (
    <div
      css={css`
        ${neu.circleAction};
        ${base.centerChildren};
        margin-bottom: 1rem;
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
