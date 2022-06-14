/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'

import { useToneContext } from '../../services/ToneContextWrapper'
import * as base from '../../styles/base'

/* 
type Props = {} */

function TrackIndicator() {
  const { dub, overdub } = useToneContext()
  const dubbed = dub && dub.length > 2 ? base.onLight : base.offLight
  const overdubbed =
    overdub && overdub.length > 2 ? base.onLight : base.offLight
  return (
    <div
      css={css`
        display: flex;
        flex-direction: row;
        justify-content: space-evenly;
      `}
    >
      <span>
        Track 1
        <div
          css={css`
            ${dubbed}
          `}
        />
      </span>

      <span>
        Track 2
        <div
          css={css`
            ${overdubbed}
          `}
        />
      </span>
    </div>
  )
}

export default TrackIndicator
