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
  dispatchedEndpoint: string
}
export interface toneDataDispatcher {
  setSource: React.Dispatch<React.SetStateAction<string>>
  setSensitivity: React.Dispatch<React.SetStateAction<number>>
  setTarget: React.Dispatch<React.SetStateAction<string>>
}
export interface chartDataDispatcher {
  setDispatchedEndpoint: React.Dispatch<React.SetStateAction<string>>
}

const ToneDataContext = createContext<toneDataContext | null>(null)
const ToneDataDispatch = createContext<toneDataDispatcher | null>(null)
const ChartDataDispatch = createContext<chartDataDispatcher | null>(null)

function ToneDataProvider({ children }: Props) {
  const [source, setSource] = useState<string>('default')
  const [sensitivity, setSensitivity] = useState<number>(100)
  const [target, setTarget] = useState<string>('default')
  const [dispatchedEndpoint, setDispatchedEndpoint] =
    useState<string>('/api/ohlcv/')

  const toneDataContext: toneDataContext = useMemo(
    () => ({
      source: source,
      sensitivity: sensitivity,
      target: target,
      dispatchedEndpoint: dispatchedEndpoint,
    }),
    [source, sensitivity, target, dispatchedEndpoint]
  )

  const dispatchToneData = useMemo(
    () => ({
      setSource: setSource,
      setSensitivity: setSensitivity,
      setTarget: setTarget,
    }),
    [setSource, setSensitivity, setTarget]
  )

  const dispatchChartData = useMemo(
    () => ({
      setDispatchedEndpoint: setDispatchedEndpoint,
    }),
    [setDispatchedEndpoint]
  )

  return (
    <ToneDataDispatch.Provider value={dispatchToneData}>
      <ChartDataDispatch.Provider value={dispatchChartData}>
        <ToneDataContext.Provider value={toneDataContext}>
          {children}
        </ToneDataContext.Provider>
      </ChartDataDispatch.Provider>
    </ToneDataDispatch.Provider>
  )
}

export default ToneDataProvider

export const useDispatch = () => useContext(ToneDataDispatch)
export const useToneContext = () => useContext(ToneDataContext)
export const useChartDataDispatch = () => useContext(ChartDataDispatch)
