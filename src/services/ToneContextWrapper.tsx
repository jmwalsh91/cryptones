import React, { createContext } from 'react'

type Props = {
  children: any
}
const defaultToneData = {
  source: 'difference',
  sensitivity: 100,
  target: 'Note value',
}
export const ToneData = createContext(defaultToneData)
function ToneContextWrapper({ children }: Props) {
  return (
    <ToneData.Provider value={defaultToneData}>{children}</ToneData.Provider>
  )
}

export default ToneContextWrapper
