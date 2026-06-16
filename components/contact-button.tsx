"use client"

import { Button } from "@/components/ui/button"
import { Linkedin, Mail } from "lucide-react"

export function ContactButton() {
  return (
    <section>
      <h2 className="eyebrow mb-6">Get in Touch</h2>
      <div className="flex flex-col gap-3 sm:flex-row">
        <Button
          variant="outline"
          onClick={() => (window.location.href = 'mailto:pradyutnair.work@gmail.com')}
          className="flex flex-1 items-center justify-center gap-2 rounded-full border-white/20 bg-transparent text-white transition-colors hover:bg-white hover:text-black"
        >
          <Mail className="h-4 w-4" />
          pradyutnair.work@gmail.com
        </Button>
        <Button
          variant="outline"
          onClick={() => (window.location.href = 'https://linkedin.com/in/pradyut-nair')}
          className="flex flex-1 items-center justify-center gap-2 rounded-full border-white/20 bg-transparent text-white transition-colors hover:bg-white hover:text-black"
        >
          <Linkedin className="h-4 w-4" />
          Pradyut Nair
        </Button>
      </div>
    </section>
  )
}
