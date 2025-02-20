"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Twitter, Linkedin, Youtube, Github } from "lucide-react"

export function SocialLinks() {
  return (
    <div className="text-center space-y-4">
      <div className="flex justify-center gap-4">
        {/* <Button variant="ghost" size="icon" asChild>
          <Link href="https://twitter.com/pradn_air" target="_blank" rel="noopener noreferrer">
            <Twitter className="w-5 h-5" />
          </Link>
        </Button> */}
        <Button variant="ghost" size="icon" asChild>
          <Link href="https://linkedin.com/pradyut-nair" target="_blank" rel="noopener noreferrer">
            <Linkedin className="w-5 h-5" />
          </Link>
        </Button>
        <Button variant="ghost" size="icon" asChild>
          <Link href="https://github.com/pradyutnair" target="_blank" rel="noopener noreferrer">
            <Github className="w-5 h-5" />
          </Link> 
        </Button>
      </div>
      <div className="text-gray-400 text-sm">
        <div className="flex justify-center gap-4 mt-2">
          {/* <Link href="#" className="hover:text-white">
            Licensing
          </Link>
          <Link href="#" className="hover:text-white">
            Privacy
          </Link> */}
        </div>
      </div>
    </div>
  )
}
