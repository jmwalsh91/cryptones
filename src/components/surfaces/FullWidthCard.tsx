import { Paper, Typography } from '@mui/material'
import React, { ReactNode } from 'react'

type Props = {
  children?: any
}

function FullWidthCard({ children }: Props) {
  return <Paper sx={{ width: "100" , height: "100", backgroundColor: 'black' }}>
      <Typography variant="h1">Hello</Typography>{children}</Paper>
}

export default FullWidthCard
