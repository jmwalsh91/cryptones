/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { ReactJSXElement } from '@emotion/react/types/jsx-namespace'
import { useTheme } from '@mui/material'
import FormControl from '@mui/material/FormControl'
import FormHelperText from '@mui/material/FormHelperText'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import Select, { SelectChangeEvent } from '@mui/material/Select'

import * as neu from '../../styles/neu'

import { tokenObject } from '~/types/interfaces'

//Valid props for InputSelect
export interface selectorProps {
  values: string[]
  helperText: string
  handleTokenSelect: (val: string) => tokenObject | undefined
  selectedToken: tokenObject
}
//InputSelect is used for both SOURCE and TARGET : Determines what source is routed to what target
//EXAMPLE: 'difference' routed to 'notevalue' translates the difference between sequential values (across time) to note values that can be 'played' by tone.JS
export default function TokenSelect({
  values,
  helperText,
  handleTokenSelect,
  selectedToken,
}: selectorProps): ReactJSXElement {
  const currentTheme = useTheme()
  const themedNeu = currentTheme.palette.mode === 'light' ? neu.light : neu.dark

  const handleChange = (event: SelectChangeEvent) => {
    return handleTokenSelect(event.target.value)
  }
  const dropdownValues = values.map((option) => {
    return (
      <MenuItem key={option} value={option}>
        {option}
      </MenuItem>
    )
  })
  return (
    <div
      css={css`
        ${themedNeu.raised}
      `}
    >
      <FormControl sx={{ m: 1, p: 1, minWidth: 100 }}>
        <InputLabel id="select token">Select Token</InputLabel>
        <Select
          labelId="select token"
          id="select token dropdown"
          label="hi"
          value={selectedToken.name}
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
