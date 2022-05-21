import { ReactJSXElement } from '@emotion/react/types/jsx-namespace'
import FormControl from '@mui/material/FormControl'
import FormHelperText from '@mui/material/FormHelperText'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import Select, { SelectChangeEvent } from '@mui/material/Select'
import * as React from 'react'

//Valid props for InputSelect
export interface selectorProps {
  label: string
  values: Array<string>
  helperText: string
}
//InputSelect is used for both SOURCE and TARGET : Determines what source is routed to what target
//EXAMPLE: 'difference' routed to 'notevalue' translates the difference between sequential values (across time) to note values that can be 'played' by tone.JS
export default function InputSelect({
  label,
  values,
  helperText,
}: selectorProps): ReactJSXElement {
  const [val, setVal] = React.useState('')

  const handleChange = (event: SelectChangeEvent) => {
    setVal(event.target.value)
  }
  const dropdownValues = values.map((option) => {
    return (
      <MenuItem key={option} value={option}>
        {option}
      </MenuItem>
    )
  })
  return (
    <div>
      <FormControl sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="demo-simple-select-helper-label">{label}</InputLabel>
        <Select
          labelId="demo-simple-select-helper-label"
          id="demo-simple-select-helper"
          value={val}
          label={label}
          onChange={handleChange}
          size="small"
        >
          {dropdownValues}
        </Select>
        <FormHelperText>{helperText}</FormHelperText>
      </FormControl>
    </div>
  )
}
