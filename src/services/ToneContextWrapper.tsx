import React, {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react'

type Props = {
  children: any
}
export type dispatchToneDataString = React.Dispatch<
  React.SetStateAction<string | undefined>
>
export type dispatchToneDataNumber = React.Dispatch<
  React.SetStateAction<number | undefined>
>
export interface toneDataContext {
  source: string
  sensitivity: number
  target: string
}
export interface toneDataDispatcher {
  setSource: React.Dispatch<React.SetStateAction<string>>
  setSensitivity: React.Dispatch<React.SetStateAction<number>>
  setTarget: React.Dispatch<React.SetStateAction<string>>
}
const ToneDataContext = createContext<toneDataContext | null>(null)
const ToneDataDispatch = createContext<toneDataDispatcher | null>(null)

function ToneDataProvider({ children }: Props) {
  const [source, setSource] = useState<string>('default')
  const [sensitivity, setSensitivity] = useState<number>(100)
  const [target, setTarget] = useState<string>('default')

  const toneDataContext = useMemo(
    () => ({
      source: source,
      sensitivity: sensitivity,
      target: target,
    }),
    [source, sensitivity, target]
  )

  const dispatchToneData = useMemo(
    () => ({
      setSource: setSource,
      setSensitivity: setSensitivity,
      setTarget: setTarget,
    }),
    [setSource, setSensitivity, setTarget]
  )

  return (
    <ToneDataDispatch.Provider value={dispatchToneData}>
      <ToneDataContext.Provider value={toneDataContext}>
        {children}
      </ToneDataContext.Provider>
    </ToneDataDispatch.Provider>
  )
}

export default ToneDataProvider

export const useDispatch = () => useContext(ToneDataDispatch)
export const useToneContext = () => useContext(ToneDataContext)
