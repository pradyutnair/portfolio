import { getAllProjects } from "@/lib/mdx"
import { ProjectsGrid } from "@/components/projects-grid"
import { TechStack } from "@/components/tech-stack"
import { ProfileSection } from "@/components/profile-section"
import { ContactButton } from "@/components/contact-button"
import GitHubCommitHistory from "@/components/github-calendar"

export default async function Portfolio() {
  const projects = await getAllProjects();

  return (
    <main className="min-h-screen bg-black text-white">
      <div className="mx-auto max-w-4xl space-y-16 px-4 py-16 md:space-y-24 md:px-6 md:py-24">
        <ProfileSection />

        <section id="projects" style={{ contentVisibility: 'auto' }}>
          <ProjectsGrid projects={projects} />
        </section>

        <TechStack />

        <section style={{ containIntrinsicSize: '0 500px' }}>
          <h2 className="eyebrow mb-6">GitHub</h2>
          <GitHubCommitHistory usernames={['pradyutnair']} />
        </section>

        <ContactButton />
      </div>
    </main>
  )
}
