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

  return (
    <main className="flex min-h-screen items-center justify-center bg-black px-6 text-white">
      <div className="max-w-md text-center">
        <p className="text-sm uppercase tracking-[0.3em] text-red-400">
          Something went wrong
        </p>

        <h1 className="mt-4 text-3xl font-bold">
          The portfolio could not load.
        </h1>

        <button
          type="button"
          onClick={() => reset()}
          className="mt-8 rounded-full bg-white px-6 py-3 text-sm font-semibold text-black"
        >
          Try Again
        </button>
      </div>
    </main>
  );
}