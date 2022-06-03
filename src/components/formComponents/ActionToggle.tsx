/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { PlayArrow, Stop } from '@mui/icons-material'
import { createSvgIcon, IconButton } from '@mui/material'
import { useTheme } from '@mui/system'
import { useState } from 'react'

import play from '../../public/play2.svg'
import stop from '../../public/stop2.svg'
import * as base from '../../styles/base'
import * as neu from '../../styles/neu'

type Props = {}
/* const Play = createSvgIcon(
  <path
    d="M763.895 495.432C770.778 535.757 438.784 743.902 369.049 787.132C363.228 790.74 355.927 786.673 355.627 779.831C351.547 686.714 331.248 196.742 356.305 205.106C383.99 214.347 756.204 450.382 763.895 495.432Z M960.5 492.5C960.5 754.573 755.609 966.5 503.5 966.5C251.391 966.5 46.5 754.573 46.5 492.5C46.5 230.427 251.391 18.5 503.5 18.5C755.609 18.5 960.5 230.427 960.5 492.5Z"
    fill="black"
  />,
  'Play'
) */
/* const Play = createSvgIcon(`${play}`, 'Play') */
function ActionToggle({}: Props) {
  const [isPlaying, setIsPlaying] = useState<boolean>(false)
  const currentTheme = useTheme()
  const themedNeu = currentTheme.palette.mode === 'light' ? neu.light : neu.dark

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
