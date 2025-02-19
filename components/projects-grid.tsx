import Link from "next/link"
import Image from "next/image"
import { ProjectData } from "@/lib/mdx"

export function ProjectsGrid({ projects }: { projects: ProjectData[] }) {
  return (
    <section>
      <h2 className="text-2xl font-mono mb-6 text-center">My Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {projects.map((project) => (
          <Link href={`/project/${project.id}`} key={project.id} className="block">
            <div className="relative aspect-square bg-gray-900 rounded-lg overflow-hidden transition-transform hover:scale-105">
              <Image 
                src={project.image} 
                alt={project.title} 
                fill 
                className="object-cover" 
              />
            </div>
            <h3 className="mt-2 text-xl font-semibold">{project.title}</h3>
            <p className="text-gray-400">{project.description.substring(0, 100)}...</p>
          </Link>
        ))}
      </div>
    </section>
  )
}
