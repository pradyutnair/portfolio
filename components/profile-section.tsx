"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { memo } from "react"

export const ProfileSection = memo(function ProfileSection() {
  return (
    <div className="text-center space-y-6">
      <Image
        src="/prad-icon.jpg"
        alt="Profile"
        width={120}
        height={120}
        className="rounded-full mx-auto"
        priority
      />
      <div>
        <h1 className="text-4xl font-mono">Pradyut Nair</h1>
        {/* <p className="text-gray-400 text-xl mt-2">AI Engineer</p> */}
      </div>
      <p className="text-gray-300 text-lg leading-relaxed max-w-2xl mx-auto">
        I'm an Master's AI student at the University of Amsterdam, alongside interning at{" "}
        <a className="underline" href="https://www.prosus.com" rel="noopener noreferrer">
          Prosus
        </a>{" "}
        as an AI Engineer. I am currently involved in developing multi-agentic systems and creative LLM-powered solutions. My research interests lie in Information Retrieval, Natural Language Processing, and Vision-Language Models.
      </p>
      <Link href="/cv">
        <Button
          variant="outline"
          className="mt-10 bg-gray-800 text-white rounded-full transition-opacity"
        >
          View My CV
        </Button>
      </Link>
    </div>
  )
})
