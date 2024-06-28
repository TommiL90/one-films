export default function Loading() {
  return (
    <div className="flex h-full w-full items-center justify-center">
      <div className="loader">
        <div data-glitch="Loading..." className="glitch">
          Loading...
        </div>
      </div>
    </div>
  )
}
