import { Paper, Stack, Typography } from '@mui/material'

import PlaybackControls from './toneControls/PlaybackControls'

//TODO: interface for data useable by tone.JS
type Props = { data?: object }

//ToneCard accepts data as props (shape utilized by chart), reshapes it to suit the requirements of tone.JS, and utilizes relationships defined by MappingCard to determine what tone.JS outputs in the browser.
function ToneCard({ data }: Props) {
  const toneData = data
  return (
    <Paper sx={{ width: '100%', height: '100%' }}>
      <Stack spacing={2} alignItems={'center'}>
        <Typography variant="h5">Output:</Typography>
        <Typography variant="body1">Placeholder</Typography>
        {toneData && <PlaybackControls iconSize="large" color="secondary" />}
      </Stack>
    </Paper>
  )
}

export default ToneCard
