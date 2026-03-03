import { DevTopBar } from "@/components/dev/dev-top-bar";

export default function DevelopmentLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen flex flex-col bg-muted">
      <DevTopBar />
      <main className="flex-1 overflow-auto">
        <div className="max-w-[1440px] mx-auto px-6 py-8 lg:px-10 lg:py-10">
          {children}
        </div>
      </main>
    </div>
  );
}
