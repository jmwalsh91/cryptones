import * as Tone from 'tone'

import { useToneContext } from '~/services/ToneContextWrapper'

function sleep(time: number) {
  return new Promise((resolve) => setTimeout(resolve, time))
}
export function useDispose(seq: Tone.Sequence, seq2: Tone.Sequence) {
  const { dub, overdub } = useToneContext()
  seq?.dispose()
  seq2?.dispose()
  sleep(3000)
  console.log(seq)
  console.log(overdub)
}
