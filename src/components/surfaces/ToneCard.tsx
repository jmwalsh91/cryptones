import { Paper, Stack, Typography } from '@mui/material'
import React from 'react'

//TODO: interface for data useable by tone.JS
type Props = { data?: object }

//ToneCard accepts data as props (shape utilized by chart), reshapes it to suit the requirements of tone.JS, and utilizes relationships defined by MappingCard to determine what tone.JS outputs in the browser.
function ToneCard({ data }: Props) {
  return (
    <Paper sx={{ width: '66vw', height: '33vh' }} {...data}>
      <Stack>
        <Typography variant="h5">Output:</Typography>
      </Stack>
    </Paper>
  )
}

export default ToneCard
