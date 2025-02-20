import Link from "next/link"
import Image from "next/image"
import { getSerializedProjectContent } from "@/lib/mdx"
import { notFound } from "next/navigation"
import { ProjectActions } from "@/components/project-actions"
import { MDXContent } from "@/components/mdx-content"
import { TableOfContents } from "@/components/mdx/toc"


export default async function ProjectPage({ params }: { params: { id: string } }) {
  const projectData = await getSerializedProjectContent(params.id)

  if (!projectData) {
    notFound()
  }

  const { frontmatter: project, mdxSource } = projectData

  return (
    <div className="min-h-screen bg-black text-white p-4 sm:p-6">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="flex-1 w-full max-w-4xl">
            <Link href="/" className="text-gray-400 hover:underline block mb-8">
              &larr; Back to Portfolio
            </Link>

            <div className="aspect-video relative mb-6 sm:mb-8">
              <Image 
                src={project.image} 
                alt={project.title} 
                fill 
                className="object-cover rounded-lg" 
              />
            </div>

            <div className="space-y-8">
              <div>
                <h1 className="text-4xl font-bold mb-4">{project.title}</h1>
                <div className="flex flex-wrap items-center gap-2 text-sm text-gray-500 mb-4">
                  <time dateTime={project.date}>
                    {new Date(project.date).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })}
                  </time>
                </div>
                <p className="text-gray-400 mb-6">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-4 sm:mb-6">
                  {project.technologies.map((tech: string) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-gray-800 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <ProjectActions liveUrl={project.liveUrl} githubUrl={project.githubUrl} />
              </div>

              <MDXContent source={mdxSource} />
            </div>
          </div>
          
          <div className="hidden lg:block sticky top-6 h-fit">
            <TableOfContents />
          </div>
        </div>
      </div>
    </div>
  )
}

