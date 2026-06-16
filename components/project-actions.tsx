"use client"

import { Button } from "@/components/ui/button"

interface ProjectActionsProps {
  liveUrl?: string
  githubUrl?: string
}

export function ProjectActions({ liveUrl, githubUrl }: ProjectActionsProps) {
  return (
    <div className="flex flex-wrap gap-3 mb-8">
      {liveUrl && (
        <Button
          className="bg-white text-black transition-colors hover:bg-white/85"
          onClick={() => window.open(liveUrl, '_blank')}
        >
          View Live Site
        </Button>
      )}
      {githubUrl && (
        <Button
          variant="outline"
          className="border-white/20 bg-transparent text-white transition-colors hover:border-white/50 hover:bg-white/5"
          onClick={() => window.open(githubUrl, '_blank')}
        >
          View Source Code
        </Button>
      )}
    </div>
  )
}
