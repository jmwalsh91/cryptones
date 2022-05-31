import React, {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react'

import {
  chartDataDispatcher,
  toneDataContext,
  toneDataDispatcher,
} from '../types/interfaces'

type Props = {
  children: any
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

  //TODO: improve
  const [notes, setNotes] = useState<any>()

  /*   const toneDataContext: toneDataContext = useMemo(
    () => ({
      source: source,
      sensitivity: sensitivity,
      target: target,
      dispatchedEndpoint: dispatchedEndpoint,
    }),
    [source, sensitivity, target, dispatchedEndpoint]
  )
 */
  // TODO: useEffect is just for dev
  useEffect(() => {
    console.log('notes')
    console.log(notes)
  }, [notes])

  const toneDataContext = {
    source: source,
    sensitivity: sensitivity,
    target: target,
    dispatchedEndpoint: dispatchedEndpoint,
    notes: notes,
  }
  const dispatchToneData = {
    setSource: setSource,
    setSensitivity: setSensitivity,
    setTarget: setTarget,
    setNotes: setNotes,
  }

  const dispatchChartData = {
    setDispatchedEndpoint: setDispatchedEndpoint,
  }
  /*   const dispatchToneData = useMemo(
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
  ) */

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
