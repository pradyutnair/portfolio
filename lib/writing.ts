import { readFile, readdir } from 'fs/promises'
import path from 'path'
import matter from 'gray-matter'
import { serialize } from 'next-mdx-remote/serialize'

const writingDirectory = path.join(process.cwd(), 'content/writing')

export interface WritingFrontmatter {
  title: string
  description: string
  date: string
  tags?: string[]
}

export interface WritingData extends WritingFrontmatter {
  slug: string
  content: string
  readingTime: number
}

function getReadingTime(content: string): number {
  const words = content.trim().split(/\s+/).filter(Boolean).length
  return Math.max(1, Math.ceil(words / 200))
}

export async function getWritingData(slug: string): Promise<WritingData | null> {
  try {
    const fullPath = path.join(writingDirectory, slug, 'index.mdx')
    const fileContents = await readFile(fullPath, 'utf8')
    const { data, content } = matter(fileContents)

    return {
      slug,
      content,
      readingTime: getReadingTime(content),
      ...(data as WritingFrontmatter),
    }
  } catch (error) {
    return null
  }
}

export async function getAllWriting(): Promise<WritingData[]> {
  let directories: string[] = []
  try {
    directories = await readdir(writingDirectory)
  } catch {
    return []
  }

  const posts = await Promise.all(directories.map((dir) => getWritingData(dir)))

  return posts
    .filter((post): post is WritingData => post !== null)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
}

export async function getSerializedWritingContent(slug: string) {
  const post = await getWritingData(slug)
  if (!post) return null

  const mdxSource = await serialize(post.content, {
    mdxOptions: {
      remarkPlugins: [],
      rehypePlugins: [],
    },
  })

  return {
    frontmatter: post,
    mdxSource,
  }
}
