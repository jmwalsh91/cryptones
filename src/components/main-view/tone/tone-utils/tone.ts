import * as Tone from 'tone'

// default synth for initial config
const pluckedSynth: Tone.Synth<Tone.SynthOptions> =
  new Tone.Synth().toDestination()
