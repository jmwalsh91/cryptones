/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { Paper } from '@mui/material'

import * as base from '../../styles/base'
import { useMode } from '../../utils/hooks/useMode'

function MappingsFallback() {
  const themedNeu = useMode()
  return (
    <>
      <Paper
        css={css`
          ${themedNeu.depressed};
          ${base.mapCard};
        `}
        sx={{
          width: '100%',
          height: '100%',
          justifyContent: 'center',
          px: '1rem',
        }}
      >
        <p>loading</p>
      </Paper>
    </>
  )
}

export default MappingsFallback
