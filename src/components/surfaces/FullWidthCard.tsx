import { Paper, Typography } from '@mui/material'

type Props = {
  children?: any
}

function FullWidthCard({ children }: Props) {
  return (
    <Paper sx={{ width: '100%', height: '100%', backgroundColor: 'black' }}>
      <Typography variant="h1">cryptones</Typography>
      {children}
    </Paper>
  )
}

export default FullWidthCard
