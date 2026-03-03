export default function Loading() {
  return (
    <div className="space-y-6">
      <div className="h-5 w-32 bg-muted animate-pulse rounded" />
      <div className="h-8 w-64 bg-muted animate-pulse rounded" />
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {[1, 2, 3, 4].map((i) => (
          <div
            key={i}
            className="h-20 bg-muted animate-pulse rounded-lg border border-border"
          />
        ))}
      </div>
      <div className="space-y-4">
        {[1, 2].map((i) => (
          <div
            key={i}
            className="h-48 bg-muted animate-pulse rounded-lg border border-border"
          />
        ))}
      </div>
    </div>
  );
}
