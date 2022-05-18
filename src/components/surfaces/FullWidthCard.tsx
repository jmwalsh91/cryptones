import { Paper } from '@mui/material'
import { Suspense } from 'react'

import ChartComponent from '../visuals/ChartComponent'

//TODO: Clean up component props, adding SWR may have made them irrelevant.

//TODO: Chart component
function FullWidthCard() {
  return (
    <Paper sx={{ width: '100%', height: '100%', backgroundColor: 'black' }}>
      <Suspense fallback="fallback">
        <ChartComponent />
      </Suspense>
    </Paper>
  )
}

export default FullWidthCard
