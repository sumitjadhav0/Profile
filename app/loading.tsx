export default function Loading() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-black">
      <div className="text-center">
        <div className="mx-auto h-8 w-8 animate-spin rounded-full border-2 border-white/10 border-t-violet-400" />

        <p className="mt-4 text-xs uppercase tracking-[0.25em] text-zinc-600">
          Loading
        </p>
      </div>
    </main>
  );
}