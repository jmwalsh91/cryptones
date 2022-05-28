import React, { createContext, useEffect, useMemo, useState } from 'react'

type Props = {
  children: any
}
export const ToneDataContext = createContext({})
function ToneDataProvider({ children }: Props) {
  const [source, setSource] = useState()
  const [sensitivity, setSensitivity] = useState()
  const [target, setTarget] = useState()

  const toneData = {
    source: source,
    sensitivity: sensitivity,
    target: target,
  }

  const dispatchToneData = {
    setSource: setSource,
    setSensitivity: setSensitivity,
    setTarget: setTarget,
  }
  const value = useMemo(
    () => ({
      toneData,
      dispatchToneData,
    }),
    [dispatchToneData]
  )

  return (
    <ToneDataContext.Provider value={value}>
      {children}
    </ToneDataContext.Provider>
  )
}

export default ToneDataProvider
