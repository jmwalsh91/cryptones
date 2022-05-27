import React, {
  createContext,
  PropsWithChildren,
  ReactNode,
  useContext,
} from 'React'

interface toneContext {
  source: string
  sensitivity?: number
  target: string
  synth?: any
}

const defaultToneContext: toneContext = {
  source: 'difference',
  sensitivity: 100,
  target: 'Note value',
  synth: null,
}

const toneContext = createContext(defaultToneContext)

function ToneContext({ children }: any) {
  return (
    <toneContext.Provider value={defaultToneContext}>
      {children}
    </toneContext.Provider>
  )
}

export default ToneContext
