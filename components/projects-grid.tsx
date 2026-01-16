'use client'

import { Badge } from "@/components/ui/badge";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { ExternalLink, Github } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { ProjectData } from "@/lib/mdx";
import { memo } from "react";

interface ProjectCardProps {
  id: string;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
  isInternal?: boolean;
}

const ProjectCard = memo(function ProjectCard({
  id,
  title,
  description,
  image,
  technologies,
  liveUrl,
  githubUrl,
  isInternal,
}: ProjectCardProps) {
  const router = useRouter();

  const imageSrc = image && image.trim() ? image : "/placeholder.svg";

  return (
    <div
      className="group relative flex flex-col overflow-hidden rounded-xl border border-black hover:border-white transition-all cursor-pointer isolate h-full will-change-transform"
      role="link"
      tabIndex={0}
      aria-label={`${title} details`}
      onClick={() => router.push(`/project/${id}`)}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          router.push(`/project/${id}`);
        }
      }}
    >
      {/* Project Image */}
      <div className="relative h-48 md:h-64 overflow-hidden bg-accent">
        <Image
          src={imageSrc}
          alt={title || 'Project image'}
          className="object-cover transition-transform duration-300 group-hover:scale-105 will-change-transform"
          fill
          loading="lazy"
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
      </div>

      {/* Content */}
      <div className="flex-1 flex flex-col p-4 md:p-6">
        <h3 className="text-lg md:text-xl font-semibold mb-2">{title}</h3>
        <p className="text-sm md:text-base text-muted-foreground mb-3 md:mb-4 overflow-hidden" style={{
          display: '-webkit-box',
          WebkitLineClamp: 2,
          WebkitBoxOrient: 'vertical' as const,
        }}>{description}</p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-1.5 md:gap-2 mb-4 md:mb-6">
          {(technologies || []).slice(0, 3).map((tech) => (
            <Badge key={tech} variant="secondary" className="rounded-full text-xs">
              {tech}
            </Badge>
          ))}
          {Array.isArray(technologies) && technologies.length > 3 && (
            <Badge variant="secondary" className="rounded-full text-xs">
              +{technologies.length - 3} more
            </Badge>
          )}
        </div>

        {/* Actions */}
        <div className="flex gap-2 mt-auto flex-wrap" onClick={(e) => e.stopPropagation()}>
          {isInternal ? (
            <div className="inline-flex items-center justify-center gap-1.5 rounded-md bg-gray-800 border border-gray-700 px-3 py-1.5 text-xs font-medium text-gray-300 cursor-default">
              Internal Tool
            </div>
          ) : (
            <>
              {liveUrl && (
                <a
                  href={liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-1.5 rounded-md bg-white dark:bg-white px-3 py-1.5 text-xs font-medium text-black transition-colors hover:bg-gray-900 hover:text-white dark:hover:bg-black dark:hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
                >
                  <ExternalLink className="h-3 w-3" />
                  Live Demo
                </a>
              )}
              {githubUrl && (
                <a
                  href={githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex text-black items-center justify-center gap-1.5 rounded-md border border-input bg-background px-3 py-1.5 text-xs font-medium hover:bg-black hover:text-white hover:border-black focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
                >
                  <Github className="h-3 w-3" />
                  View Code
                </a>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
});

export function ProjectsGrid({ projects }: { projects: ProjectData[] }) {
  return (
    <section id="projects" className="relative py-12 md:py-20">
      <div className="px-4 md:px-6 mb-8 md:mb-12">
        <div className="text-center">
          <h2 className="text-xl md:text-2xl font-mono mb-4 text-center text-white">Projects</h2>
        </div>
      </div>

      <div className="relative w-full px-4 md:px-16">
          <Carousel
            opts={{
              align: "start",
              loop: true,
              skipSnaps: false,
              dragFree: false,
            }}
            className="w-full"
          >
          <CarouselContent className="-ml-4">
            {projects.map((project) => (
              <CarouselItem
                key={project.id}
                className="pl-4 basis-[85%] sm:basis-1/2 lg:basis-1/3 xl:basis-1/4"
              >
                <ProjectCard {...project} />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
          </Carousel>
      </div>
    </section>
  );
}
