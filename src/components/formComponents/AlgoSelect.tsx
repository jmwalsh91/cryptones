/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { Typography, useTheme } from '@mui/material'
import FormControl from '@mui/material/FormControl'
import FormControlLabel from '@mui/material/FormControlLabel'
import FormLabel from '@mui/material/FormLabel'
import Radio from '@mui/material/Radio'
import RadioGroup from '@mui/material/RadioGroup'
import * as React from 'react'
import { Dispatch } from 'react'

import * as base from '../../styles/base'
import * as neu from '../../styles/neu'
type Props = {
  handler: Dispatch<React.SetStateAction<string>>
}
export default function AlgoSelect({ handler }: Props) {
  const [value, setValue] = React.useState('difference')
  const currentTheme = useTheme()
  const themedNeu = currentTheme.palette.mode === 'light' ? neu.light : neu.dark
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue((event.target as HTMLInputElement).value)
    handler(value)
  }

  return (
    <FormControl sx={{ alignItems: 'center' }}>
      <FormLabel id="SelectAlgorithm">
        <Typography variant="h5">Algorithm</Typography>
      </FormLabel>
      <RadioGroup
        aria-labelledby="demo-controlled-radio-buttons-group"
        name="controlled-radio-buttons-group"
        value={value}
        onChange={handleChange}
      >
        <FormControlLabel
          value="difference"
          control={<Radio />}
          label="difference"
        />
        <FormControlLabel
          value="deviation"
          control={<Radio />}
          label="deviation"
        />
      </RadioGroup>
    </FormControl>
  )
}
