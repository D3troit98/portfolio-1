export default function Loading() {
  return (
    <div className="w-full h-1 fixed top-0 left-0 z-50">
      <div className="h-full bg-primary animate-loading-bar"></div>
      <div className="flex items-center justify-center h-screen">
        <div className="text-foreground/70 text-lg font-medium">
          Loading<span className="animate-caret-blink">_</span>
        </div>
      </div>
    </div>
  );
}
