import { Paper } from '@mui/material'

import MdLayout from '../layout/MdLayout'

//TODO: layout breakpoints with absolute values
function Display() {
  return (
    <Paper
      sx={{ width: '90vw', height: '80vh', bgcolor: 'beige', margin: '2rem' }}
    >
      <MdLayout />
    </Paper>
  )
}

export default Display
