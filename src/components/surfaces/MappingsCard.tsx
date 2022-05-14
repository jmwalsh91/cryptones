import { Paper } from '@mui/material'

import React, { ReactNode } from 'react'

interface Props {
  children: ReactNode
}

function MappingsCard(props: Props) {
  return <Paper {...props}></Paper>
}

export default MappingsCard
