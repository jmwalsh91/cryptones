import React, { createContext, useMemo, useState } from 'react'

type Props = {
  children: any
}
const defaultToneData = {
  source: 'difference',
  sensitivity: 100,
  target: 'Note value',
}
export const ToneDataContext = createContext()
function ToneDataProvider({ children }: Props) {
  const [toneData, setToneData] = useState()
  const value = useMemo(
    () => ({
      toneData,
      setToneData,
    }),
    [setToneData]
  )
  return (
    <ToneDataContext.Provider value={value}>
      {children}
    </ToneDataContext.Provider>
  )
}

export default ToneDataProvider
