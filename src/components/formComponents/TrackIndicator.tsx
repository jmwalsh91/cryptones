/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { useMode } from '~/utils/hooks/useMode'

import * as base from '../../styles/base'

import { useToneContext } from '~/services/ToneContextWrapper'

/* 
type Props = {} */

function TrackIndicator() {
  const { dub, overdub } = useToneContext()
  const themedNeu = useMode()
  const dubbed = dub && dub.length > 2 ? base.onLight : base.offLight
  const overdubbed =
    overdub && overdub.length > 2 ? base.onLight : base.offLight
  return (
    <div>
      <div
        css={css`
          ${dubbed}
        `}
      />
      <div
        css={css`
          ${overdubbed}
        `}
      />
    </div>
  )
}

export default TrackIndicator
