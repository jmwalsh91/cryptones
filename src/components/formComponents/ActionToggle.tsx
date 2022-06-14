/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { useState } from 'react'

import play from '../../public/play2.svg'
import stop from '../../public/stop2.svg'
import * as base from '../../styles/base'
import { useMode } from '../../utils/hooks/useMode'

function ActionToggle() {
  const [isPlaying, setIsPlaying] = useState<boolean>(false)
  const themedNeu = useMode()
  const handleClick = () => {
    setIsPlaying(!isPlaying)
  }

  return (
    <div
      css={css`
        ${themedNeu.circleAction};
        ${base.centerChildren};
      `}
      onClick={handleClick}
    >
      {isPlaying ? (
        <div
          css={css`
            width: 4rem;
            height: 4rem;
            background-image: url('${play}');
            background-size: contain;
            background-origin: content-box;
          `}
        />
      ) : (
        <div
          css={css`
            width: 4rem;
            height: 4rem;
            background-image: url('${stop}');
            background-size: contain;
            background-origin: content-box;
          `}
        />
      )}
    </div>
  )
}

export default ActionToggle
