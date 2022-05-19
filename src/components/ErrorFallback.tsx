type Props = {
  error: any
  resetErrorBoundary?: any
}

//TODO: Customize ErrorFallback, classify possible errors (Took too long, API reject, not found, other) and conditionally render a retry option vs "play around with historical data"
export default function ErrorFallback({ error, resetErrorBoundary }: Props) {
  return (
    <div role="alert">
      <p>Something went wrong:</p>
      <pre>{error.message}</pre>
      <button onClick={resetErrorBoundary}>Try again</button>
    </div>
  )
}
