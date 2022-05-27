import React, { createContext } from 'react'

type Props = {
  children: any
}
const defaultToneData = {
  source: 'difference',
  sensitivity: 100,
  target: 'Note value',
}
const ToneData = createContext(defaultToneData)
function ToneContextWrapper({ children }: Props) {
  return children
}

export default ToneContextWrapper
