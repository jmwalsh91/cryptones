import { Paper } from '@mui/material'

import MdLayout from '../layout/MdLayout'

//TODO: layout breakpoints with absolute values
function Display() {
  return (
    <Paper sx={{ height: '85vh', marginTop: '2rem' }}>
      <MdLayout />
    </Paper>
  )
}

export default Display
