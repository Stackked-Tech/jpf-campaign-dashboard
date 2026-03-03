"use client";

import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  const isSfError =
    error.message.includes("ECONNREFUSED") ||
    error.message.includes("INVALID_SESSION_ID") ||
    error.message.includes("sf org display");

  return (
    <div className="flex flex-col items-center justify-center py-16 space-y-4">
      <div className="rounded-xl border border-destructive/20 bg-red-50 p-8 max-w-lg text-center space-y-4">
        <h2 className="text-lg font-semibold text-destructive">
          {isSfError ? "Salesforce Connection Error" : "Something went wrong"}
        </h2>
        <p className="text-sm text-muted-foreground">
          {isSfError
            ? "Could not connect to Salesforce. Make sure you're logged in with the SF CLI: sf org login web --alias prod"
            : error.message}
        </p>
        <button
          onClick={reset}
          className="btn-pill bg-sidebar text-white hover:bg-sidebar/90 transition-colors"
        >
          Try Again
        </button>
      </div>
    </div>
  );
}
