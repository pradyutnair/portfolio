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
  priority?: boolean;
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
  priority,
}: ProjectCardProps) {
  const router = useRouter();

  const imageSrc = image && image.trim() ? image : "/placeholder.svg";

  return (
    <div
      className="group relative flex h-full cursor-pointer flex-col overflow-hidden rounded-xl border border-white/10 transition-colors hover:border-white/40 isolate"
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
      <div className="relative h-48 md:h-64 overflow-hidden bg-white/5">
        <Image
          src={imageSrc}
          alt={title || 'Project image'}
          className="object-cover transition-transform duration-300 group-hover:scale-105 will-change-transform"
          fill
          priority={priority}
          loading={priority ? undefined : "lazy"}
          sizes="(max-width: 768px) 85vw, (max-width: 1024px) 50vw, 33vw"
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
            <div className="inline-flex items-center justify-center gap-1.5 rounded-md border border-white/15 px-3 py-1.5 text-xs font-medium text-white/60 cursor-default">
              Internal Tool
            </div>
          ) : (
            <>
              {liveUrl && (
                <a
                  href={liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-1.5 rounded-md bg-white px-3 py-1.5 text-xs font-medium text-black transition-colors hover:bg-white/85 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black"
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
                  className="inline-flex items-center justify-center gap-1.5 rounded-md border border-white/20 px-3 py-1.5 text-xs font-medium text-white transition-colors hover:border-white/50 hover:bg-white/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black"
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
    <div>
      <h2 className="eyebrow mb-6">Projects</h2>

      <div className="relative px-10 md:px-14">
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
            {projects.map((project, i) => (
              <CarouselItem
                key={project.id}
                className="pl-4 basis-full sm:basis-1/2 lg:basis-1/3"
              >
                <ProjectCard {...project} priority={i === 0} />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </div>
  );
}
