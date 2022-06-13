import * as Tone from 'tone'

function sleep(time: number) {
  return new Promise((resolve) => setTimeout(resolve, time))
}
export function dispose(seq: Tone.Sequence | null, seq2: Tone.Sequence | null) {
  console.log('useDispose')
  console.log(seq)
  seq?.cancel(Tone.now())
  seq2?.cancel(Tone.now())
  sleep(3000)
  console.log(seq)
}
