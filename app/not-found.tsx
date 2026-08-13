import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-black px-6 text-white">
      <div className="text-center">
        <p className="text-sm uppercase tracking-[0.3em] text-violet-400">
          404
        </p>

        <h1 className="mt-4 text-4xl font-bold">
          Page not found
        </h1>

        <p className="mt-4 text-zinc-500">
          The page you&apos;re looking for doesn&apos;t exist.
        </p>

        <Link
          href="/"
          className="mt-8 inline-flex rounded-full bg-white px-6 py-3 text-sm font-semibold text-black transition hover:bg-zinc-200"
        >
          Back Home
        </Link>
      </div>
    </main>
  );
}