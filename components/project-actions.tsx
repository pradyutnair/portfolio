"use client"

import { Button } from "@/components/ui/button"

interface ProjectActionsProps {
  liveUrl?: string
  githubUrl?: string
}

export function ProjectActions({ liveUrl, githubUrl }: ProjectActionsProps) {
  return (
    <div className="flex gap-4 mb-8">
      {liveUrl && (
        <Button 
          variant="outline" 
          className="bg-gradient-to-r from-purple-600 to-red-900 text-white"
          onClick={() => window.open(liveUrl, '_blank')}
        >
          View Live Site
        </Button>
      )}
      {githubUrl && (
        <Button 
          variant="outline" 
          className="bg-black text-white"
          onClick={() => window.open(githubUrl, '_blank')}
        >
          View Source Code
        </Button>
      )}
    </div>
  )
}
