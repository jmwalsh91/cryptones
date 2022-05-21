import Container from '@mui/material/Container'
import { ReactElement, ReactNode } from 'react'
type Props = {
  children: ReactNode
}

function Foundation({ children }: Props): ReactElement {
  return (
    <Container
      sx={{
        width: '100vw',
        height: '100vh',
        msOverflowY: 'hidden',
        justifyContent: 'center',
        margin: 0,
        bgcolor: 'black',
      }}
    >
      {children}
    </Container>
  )
}

export default Foundation
