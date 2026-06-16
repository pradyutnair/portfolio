import Link from "next/link"
import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { getWritingData } from "@/lib/writing"
import { MDXContent } from "@/components/mdx-content"
import { TableOfContents } from "@/components/mdx/toc"

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const post = await getWritingData(slug)
  if (!post) return { title: "Writing — Pradyut Nair" }
  return {
    title: `${post.title} — Pradyut Nair`,
    description: post.description,
  }
}

export default async function WritingPostPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const post = await getWritingData(slug)

  if (!post) {
    notFound()
  }

  return (
    <main className="min-h-screen bg-black text-white">
      <div className="container mx-auto p-4 sm:p-6">
        <div className="flex flex-col gap-8 lg:flex-row">
          <article className="w-full max-w-3xl flex-1">
            <Link href="/writing" className="mb-8 block text-sm text-white/50 hover:text-white">
              &larr; Back to Writing
            </Link>

            <header className="mb-10 border-b border-white/10 pb-8">
              <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">{post.title}</h1>
              <div className="mt-4 flex flex-wrap items-center gap-2 text-sm text-white/40">
                <time dateTime={post.date} suppressHydrationWarning>
                  {new Date(post.date).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </time>
                <span aria-hidden>·</span>
                <span>{post.readingTime} min read</span>
              </div>
              {post.tags && post.tags.length > 0 && (
                <div className="mt-4 flex flex-wrap gap-2">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-white/15 px-3 py-1 text-xs text-white/60"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </header>

            <MDXContent source={post.content} />
          </article>

          <div className="hidden h-fit lg:block">
            <TableOfContents />
          </div>
        </div>
      </div>
    </main>
  )
}
