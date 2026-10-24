export default function Loading() {
  return (
    <div
      role="status"
      aria-label="Loading portfolio"
      className="min-h-[100dvh] bg-[#f6f5ef] px-5 py-8 text-[#242b26] sm:px-10"
    >
      <span className="sr-only">Loading portfolio</span>
      <div aria-hidden="true" className="mx-auto max-w-[1192px]">
        <div className="h-12 w-40 rounded bg-[#e5e5da]" />
        <div className="mt-16 grid gap-12 md:grid-cols-2 md:items-center">
          <div className="space-y-5">
            <div className="mb-10 h-3 w-48 rounded bg-[#e5e5da]" />
            {[90, 100, 75].map((width) => (
              <div
                key={width}
                style={{ width: `${width}%` }}
                className="h-14 rounded bg-[#e5e5da]"
              />
            ))}
            <div className="mt-8 h-20 rounded bg-[#e5e5da]" />
          </div>
          <div className="h-[480px] rounded-lg bg-[#d7d9cf]" />
        </div>
      </div>
    </div>
  );
}
