import { Paper } from '@mui/material'

import MdLayout from '../layout/MdLayout'
import FullWidthCard from './FullWidthCard'
import MappingsCard from './MappingsCard'
import ToneCard from './ToneCard'

const mock = {
  main: <FullWidthCard key="0" />,
  cardOne: <MappingsCard />,
  cardTwo: <ToneCard data={['mock', 12, 34, 53, 45]} />,
}
//TODO: layout breakpoints with absolute values, bring in correct cards and pass to MdLayout
function Display() {
  return (
    <Paper
      sx={{ width: '90vw', height: '80vh', bgcolor: 'beige', margin: '2rem' }}
    >
      <MdLayout
        main={mock.main}
        cardOne={mock.cardOne}
        cardTwo={mock.cardTwo}
      ></MdLayout>
    </Paper>
  )
}

export default Display
