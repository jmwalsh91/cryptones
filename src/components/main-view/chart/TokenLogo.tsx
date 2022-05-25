/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'

import * as neu from '../../../styles/neu'

import * as interfaces from '~/types/interfaces'

type Props = {
  tokenLogo: interfaces.tokenObject['logo'] | undefined
}
function TokenLogo({ tokenLogo }: Props) {
  return (
    <div
      style={{
        backgroundImage: `url(${tokenLogo})`,
        backgroundRepeat: 'no-repeat',
        backgroundOrigin: 'content-box',
        paddingTop: '1.2rem',
        marginBottom: '1rem',
      }}
      css={css`
        ${neu.token};
      `}
    >
      {/*  <img src={logo} /> */}
    </div>
  )
}

export default TokenLogo
