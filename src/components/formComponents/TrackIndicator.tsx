import { useToneContext } from '~/services/ToneContextWrapper'
/* 
type Props = {} */

function TrackIndicator() {
  const { dub, overdub } = useToneContext()

  return (
    <div>
      <div>{dub && dub?.length > 2 ? 'full' : 'empty'}</div>
      <div> {overdub && overdub?.length > 2 ? 'full' : 'empty'}</div>
    </div>
  )
}

export default TrackIndicator
