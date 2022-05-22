import { Paper } from '@mui/material'

import MdLayout from '../layout/MdLayout'

//TODO: layout breakpoints with absolute values
function Display() {
  return (
    <Paper sx={{ height: '80vh', bgcolor: 'beige', marginTop: '2rem' }}>
      <MdLayout />
    </Paper>
  )
}

export default Display
