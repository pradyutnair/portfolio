"use client"

import { Button } from "@/components/ui/button"
import { Linkedin, Mail } from "lucide-react"

export function ContactButton() {
  return (
    <section className="text-center">
      <h2 className="text-2xl font-mono mb-4 grid place-items-center text-white">
        Get in Touch
      </h2>
      <div className="flex flex-col sm:flex-row justify-center gap-4">
        <Button
          variant="outline"
          onClick={() => (window.location.href = 'mailto:pradyutnair.work@gmail.com')}
          className="flex-1 max-w-xs rounded-full bg-gray-800 text-white border border-white flex gap-2 items-center justify-center hover:bg-white"
        >
          <Mail className="w-4 h-4" />
          pradyutnair.work@gmail.com
        </Button>
        <Button
          variant="outline"
          onClick={() => (window.location.href = 'https://linkedin.com/in/pradyut-nair')}
          className="flex-1 max-w-xs rounded-full bg-gray-800 text-white border border-white flex gap-2 items-center justify-center hover:bg-white"
        >
          <Linkedin className="w-4 h-4" />
          Pradyut Nair
        </Button>
      </div>
    </section>
  )
}
