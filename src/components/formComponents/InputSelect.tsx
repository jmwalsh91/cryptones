/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { ReactJSXElement } from '@emotion/react/types/jsx-namespace'
import FormControl from '@mui/material/FormControl'
import FormHelperText from '@mui/material/FormHelperText'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import Select, { SelectChangeEvent } from '@mui/material/Select'
import * as React from 'react'
import { Dispatch } from 'react'

import * as base from '../../styles/base'
import { raised } from '../../styles/neu'

//Valid props for InputSelect
export interface selectorProps {
  label: string
  values: Array<string>
  helperText: string
  handler: Dispatch<React.SetStateAction<string>>
}
//InputSelect is used for both SOURCE and TARGET : Determines what source is routed to what target
//EXAMPLE: 'difference' routed to 'notevalue' translates the difference between sequential values (across time) to note values that can be 'played' by tone.JS
export default function InputSelect({
  label,
  values,
  helperText,
  handler,
}: selectorProps): ReactJSXElement {
  const [val, setVal] = React.useState(values[0])

  const handleChange = (event: SelectChangeEvent) => {
    setVal(event.target.value)
    return handler(event.target.value)
  }
  const dropdownValues = values.map((option) => {
    return (
      <MenuItem key={option} value={option}>
        {option}
      </MenuItem>
    )
  })

  return (
    <FormControl
      sx={{ m: 1, p: 1, minWidth: 100 }}
      css={css`
        ${raised};
        ${base.inputBox}
      `}
    >
      <InputLabel
        id={label}
        css={css`
          ${base.label}
        `}
      >
        {label}
      </InputLabel>
      <Select
        labelId={`${label}Select`}
        id="demo-simple-select-helper"
        value={val}
        label={label}
        onChange={handleChange}
        size="small"
        css={css`
          ${base.select}
        `}
      >
        {dropdownValues}
      </Select>
      <FormHelperText>{helperText}</FormHelperText>
    </FormControl>
  )
}
