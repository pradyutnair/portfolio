"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { memo } from "react"

export const ProfileSection = memo(function ProfileSection() {
  return (
    <div className="flex flex-col items-center text-center space-y-6">
      <Image
        src="/prad-icon.jpg"
        alt="Pradyut Nair"
        width={120}
        height={120}
        className="rounded-full"
        priority
      />
      <div>
        <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">Pradyut Nair</h1>
        <p className="mt-2 text-sm text-white/50">AI Engineer · UvA · Prosus</p>
      </div>

      <p className="max-w-2xl text-lg leading-relaxed text-white/70">
        I'm a Master's AI student at the University of Amsterdam, alongside interning at{" "}
        <a
          className="text-white underline underline-offset-4 transition-opacity hover:opacity-70"
          href="https://www.prosus.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Prosus
        </a>{" "}
        as an AI Engineer. I'm currently building multi-agentic systems and creative LLM-powered
        solutions. My research interests lie in Information Retrieval, Natural Language Processing,
        and Vision-Language Models.
      </p>

      <Link href="/cv">
        <Button
          variant="outline"
          className="rounded-full border-white/20 bg-transparent text-white transition-colors hover:bg-white hover:text-black"
        >
          View My CV
        </Button>
      </Link>
    </div>
  )
})
