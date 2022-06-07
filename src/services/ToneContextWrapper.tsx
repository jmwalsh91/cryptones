import React, { createContext, useContext, useState } from 'react'

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
  /*   const [source, setSource] = useState<string>('default') */
  /*   const [sensitivity, setSensitivity] = useState<number>(100) */
  const [dispatchedEndpoint, setDispatchedEndpoint] = useState<string>(
    '/api/ohlcv/btc/5min'
  )

  //TODO: improve
  const [notes, setNotes] = useState<(string | number | null)[]>([])

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

  const toneDataContext = {
    /*     source: source,
    sensitivity: sensitivity, */
    dispatchedEndpoint: dispatchedEndpoint,
    notes: notes,
  }
  const dispatchToneData = {
    /*     setSource: setSource,
    setSensitivity: setSensitivity, */
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
