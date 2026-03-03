export default function Loading() {
  return (
    <div className="space-y-6">
      <div className="h-8 w-48 bg-muted animate-pulse rounded" />
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {[1, 2, 3].map((i) => (
          <div
            key={i}
            className="h-20 bg-muted animate-pulse rounded-lg border border-border"
          />
        ))}
      </div>
      <div className="h-64 bg-muted animate-pulse rounded-lg border border-border" />
    </div>
  );
}
