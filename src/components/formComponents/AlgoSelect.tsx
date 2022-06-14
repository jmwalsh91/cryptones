/** @jsxImportSource @emotion/react */
import { Typography } from '@mui/material'
import FormControl from '@mui/material/FormControl'
import FormControlLabel from '@mui/material/FormControlLabel'
import FormLabel from '@mui/material/FormLabel'
import Radio from '@mui/material/Radio'
import RadioGroup from '@mui/material/RadioGroup'
import * as React from 'react'
import { Dispatch } from 'react'

/* import * as neu from '../../styles/neu'
 */ type Props = {
  handler: Dispatch<React.SetStateAction<string>>
}
export default function AlgoSelect({ handler }: Props) {
  const [value, setValue] = React.useState('difference')
  /* const currentTheme = useTheme() */
  /*   const themedNeu = currentTheme.palette.mode === 'light' ? neu.light : neu.dark */
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue((event.target as HTMLInputElement).value)
    handler(value)
  }

  return (
    <FormControl
      sx={{
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        flexDirection: {
          xs: 'row',
          md: 'column',
        },
      }}
    >
      <FormLabel id="SelectAlgorithm">
        <Typography variant="h5" sx={{ pr: { xs: '1.3rem', md: '0' } }}>
          Algorithm
        </Typography>
      </FormLabel>
      <RadioGroup
        aria-labelledby="SelectAlgorithm"
        name="Select Algorithm"
        value={value}
        onChange={handleChange}
      >
        <FormControlLabel
          key="difference"
          value="difference"
          control={<Radio />}
          label="difference"
        />
        <FormControlLabel
          key="deviation"
          value="deviation"
          control={<Radio />}
          label="deviation"
        />
      </RadioGroup>
    </FormControl>
  )
}
