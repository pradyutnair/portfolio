import { readFile, readdir } from 'fs/promises'
import path from 'path'
import matter from 'gray-matter'
import { serialize } from 'next-mdx-remote/serialize'

const projectsDirectory = path.join(process.cwd(), 'content/projects')

export interface ProjectFrontmatter {
  title: string
  description: string
  date: string
  image: string
  technologies: string[]
  liveUrl?: string
  githubUrl?: string
}

export interface ProjectData extends ProjectFrontmatter {
  id: string
  content: string
}

export async function getProjectData(id: string): Promise<ProjectData | null> {
  try {
    const fullPath = path.join(projectsDirectory, id, 'index.mdx')
    const fileContents = await readFile(fullPath, 'utf8')
    const { data, content } = matter(fileContents)
    
    return {
      id,
      content,
      ...(data as ProjectFrontmatter),
    }
  } catch (error) {
    return null
  }
}

export async function getAllProjects(): Promise<ProjectData[]> {
  const projectDirectories = await readdir(projectsDirectory)
  
  const projects = await Promise.all(
    projectDirectories.map(async (dir) => {
      const data = await getProjectData(dir)
      return data
    })
  )
  
  return projects
    .filter((project): project is ProjectData => project !== null)
    .sort((a, b) => (new Date(b.date)).getTime() - (new Date(a.date)).getTime())
}

export async function getSerializedProjectContent(id: string) {
  const project = await getProjectData(id)
  if (!project) return null
  
  const mdxSource = await serialize(project.content, {
    mdxOptions: {
      remarkPlugins: [],
      rehypePlugins: [],
    },
  })
  
  return {
    frontmatter: project,
    mdxSource,
  }
}
