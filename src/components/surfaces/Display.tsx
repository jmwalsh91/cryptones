import { Paper } from '@mui/material'

import MdLayout from '../layout/MdLayout'
import FullWidthCard from './FullWidthCard'

const mock = {
  main: <FullWidthCard key="0" />,
  cardOne: <FullWidthCard key="1" />,
  cardTwo: <FullWidthCard key="2" />,
}

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
