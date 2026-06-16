import Link from "next/link"
import type { Metadata } from "next"
import { getAllWriting } from "@/lib/writing"

export const metadata: Metadata = {
  title: "Writing — Pradyut Nair",
  description: "Essays, reflections, and learnings on AI agents, NLP, and vision-language models.",
}

export default async function WritingPage() {
  const posts = await getAllWriting()

  return (
    <main className="min-h-screen bg-black text-white">
      <div className="mx-auto max-w-3xl px-4 py-16 md:px-6 md:py-24">
        <header className="mb-12">
          <h1 className="eyebrow mb-4">Writing</h1>
          <p className="max-w-xl text-lg leading-relaxed text-white/70">
            Essays, reflections, and learnings on building with AI — agents, retrieval, NLP,
            and vision-language models.
          </p>
        </header>

        {posts.length === 0 ? (
          <p className="text-white/40">No posts yet. Check back soon.</p>
        ) : (
          <ul className="divide-y divide-white/10 border-t border-white/10">
            {posts.map((post) => (
              <li key={post.slug}>
                <Link
                  href={`/writing/${post.slug}`}
                  className="group block py-6 transition-colors"
                >
                  <div className="flex items-baseline justify-between gap-4">
                    <h2 className="text-xl font-medium text-white transition-opacity group-hover:opacity-70">
                      {post.title}
                    </h2>
                    <span className="shrink-0 text-sm text-white/40 tabular-nums">
                      {new Date(post.date).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "short",
                      })}
                    </span>
                  </div>
                  <p className="mt-2 text-white/60">{post.description}</p>
                  <p className="mt-3 text-xs uppercase tracking-[0.15em] text-white/30">
                    {post.readingTime} min read
                  </p>
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>
    </main>
  )
}
