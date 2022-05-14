import { EmotionJSX } from '@emotion/react/types/jsx-namespace'
import { StyledOptions } from '@emotion/styled'
import { Paper } from '@mui/material'
import React, { ReactNode } from 'react'

interface Props {
  children?: ReactNode
  attributes?: StyledOptions<Props>
}

function MappingsCard(props: Props) {
  return <Paper sx={{ width: '66vw', height: '33vh' }} {...props}></Paper>
}

export default MappingsCard
