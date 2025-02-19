"use client"

import { Button } from "@/components/ui/button"
import { Mail } from "lucide-react"

export function ContactButton() {
  return (
    <section className="text-center">
      <h2 className="text-2xl font-mono mb-4">Get in Touch</h2>
      <Button
        variant="outline"
        onClick={() => window.location.href = 'mailto:pradyutnair.work@gmail.com'}
        className="rounded-full bg-gradient-to-r from-purple-600 to-purple-900 text-white hover:from-purple-700 hover:to-purple-950 text-white border-0 flex gap-2 items-center mx-auto"
      >
        <Mail className="w-4 h-4" />
        pradyutnair.work@gmail.com
      </Button>
    </section>
  )
}
