import Container from '@mui/material/Container'
import { ReactElement, ReactNode } from 'react'
type Props = {
  children: ReactNode
}

function Foundation({ children }: Props): ReactElement {
  return (
    <Container sx={{ maxWidth: '100vw', justifyContent: 'center' }}>
      {children}
    </Container>
  )
}

export default Foundation
