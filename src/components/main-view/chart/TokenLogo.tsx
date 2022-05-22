/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'

import * as neu from '../../../styles/neu'
type Props = { logo: string }

function TokenLogo({ logo }: Props) {
  return (
    <div
      style={{
        backgroundImage: `url(${logo})`,
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
