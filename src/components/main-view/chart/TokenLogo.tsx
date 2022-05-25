/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'

import * as neu from '../../../styles/neu'

import * as interfaces from '~/types/interfaces'

function TokenLogo(token: interfaces.tokenObject) {
  return (
    <div
      style={{
        backgroundImage: `url(${token.logo})`,
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
