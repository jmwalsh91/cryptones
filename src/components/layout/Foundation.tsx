import Container from '@mui/material/Container'
import React, { ReactComponentElement, ReactElement, ReactNode } from 'react'

type Props = {
  children: ReactNode
}

function Foundation({ children }: Props): ReactElement {
  return <Container sx={{ width: '100vw' }}>{children}</Container>
}

export default Foundation
