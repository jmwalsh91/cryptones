import * as Tone from 'tone'

export const newSynth = () => {
  //filter for fun
  const filter = new Tone.Filter()
  //default synth
  const pluckedSynth: Tone.Synth<Tone.SynthOptions> = new Tone.Synth()
    .connect(filter)
    .toDestination()
}
//apply mappings
// apply src to init array, get note value
// put switch on sensitivity
// apply sensitivity to src
// translate to note values
//submit
