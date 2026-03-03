export default function Loading() {
  return (
    <div className="space-y-6">
      <div className="h-8 w-48 bg-muted animate-pulse rounded" />
      <div className="flex gap-3">
        <div className="h-10 flex-1 bg-muted animate-pulse rounded-md" />
        <div className="h-10 w-40 bg-muted animate-pulse rounded-md" />
      </div>
      <div className="h-64 bg-muted animate-pulse rounded-lg border border-border" />
    </div>
  );
}
