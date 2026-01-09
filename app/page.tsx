import { getAllProjects } from "@/lib/mdx"
import { ProjectsGrid } from "@/components/projects-grid"
import { TechStack } from "@/components/tech-stack"
import { ProfileSection } from "@/components/profile-section"
import { ContactButton } from "@/components/contact-button"
import { SocialLinks } from "@/components/social-links"
import GitHubCommitHistory from "@/components/github-calendar"

export default async function Portfolio() {
  const projects = await getAllProjects();

  return (
    <div className="min-h-screen bg-black text-white p-6">
      <div className="max-w-4xl mx-auto space-y-8">
        <ProfileSection />
        <div style={{ contentVisibility: 'auto' }}>
          <ProjectsGrid projects={projects} />
          <TechStack />
          <div className="py-4" style={{ containIntrinsicSize: '0 500px' }}>
            <GitHubCommitHistory usernames={['pradyutnair']} />
          </div>
          <ContactButton />
        </div>
        {/* <SocialLinks /> */}
      </div>
    </div>
  )
}
