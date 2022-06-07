import FormControl from '@mui/material/FormControl'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import Select from '@mui/material/Select'
import * as React from 'react'

type Props = {
  root: any
  setRoot: any
  rootArr: string[]
  handler?: any
}
export default function KeySelect({ root, setRoot, rootArr }: Props) {
  const handleChange = (event: { target: { value: string } }) => {
    setRoot(event.target.value)
  }
  const rootOptions = rootArr.map((rootItem) => {
    return (
      <MenuItem key={rootItem} value={rootItem}>
        {rootItem}
      </MenuItem>
    )
  })
  return (
    <FormControl sx={{ m: 1 }} variant="standard">
      <InputLabel id="root">Root</InputLabel>
      <Select
        labelId="select root note"
        id="root-select"
        value={root}
        onChange={handleChange}
      >
        {rootOptions}
      </Select>
    </FormControl>
  )
}
