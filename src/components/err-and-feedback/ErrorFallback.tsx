import React from 'react'

type Props = {
  error?: any
  resetErrorBoundary?: any
}

//TODO: Customize ErrorFallback, classify possible errors (Took too long, API reject, not found, other) and conditionally render a retry option vs "play around with historical data"
/**
 * rendered when child of ErrorBoundary throws error.
 * resetErrorBoundary triggers function called with onReset in ErrorBoundary component that rendered the fallback.
 *   @todo customizing this component further at this juncture feels a little bit like bedazzling a life-jacket, but is likely worth adding to the chore stack.
 * @params error: error caught by ErrorBoundary
 * @returns
 */
export default function ErrorFallback({
  error,
  resetErrorBoundary,
}: Props): React.ReactElement<unknown, string | React.FunctionComponent> {
  return (
    <div role="alert">
      <p>Something went wrong:</p>
      {error ? <pre>{error.message}</pre> : null}
      <button onClick={resetErrorBoundary}>Try again</button>
      <p>
        {' '}
        if this issue persists, please consider sending an email to
        jordan@jmwalsh.dev or opening an issue at
      </p>{' '}
      <a href="https://github.com/jmwalsh91/cryptones/issues" />
    </div>
  )
}
