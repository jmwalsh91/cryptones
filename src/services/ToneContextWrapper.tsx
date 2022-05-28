import React, { createContext, useEffect, useMemo, useState } from 'react'

type Props = {
  children: any
}
type dispatchToneDataString = React.Dispatch<
  React.SetStateAction<string | undefined>
>
type dispatchToneDataNumber = React.Dispatch<
  React.SetStateAction<number | undefined>
>

export const ToneDataContext = createContext({})
function ToneDataProvider({ children }: Props) {
  const [source, setSource] = useState<string>()
  const [sensitivity, setSensitivity] = useState<number>()
  const [target, setTarget] = useState<string>()

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
