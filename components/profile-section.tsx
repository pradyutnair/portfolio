"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export function ProfileSection() {
  return (
    <div className="text-center space-y-6">
      <Image src="/prad-icon.jpg" alt="Profile" width={120} height={120} className="rounded-full mx-auto" />
      <div>
        <h1 className="text-4xl font-mono">Pradyut Nair</h1>
        <p className="text-gray-400 text-xl mt-2">(Future) AI Engineer</p>
      </div>
      <p className="text-gray-300 text-lg leading-relaxed max-w-2xl mx-auto">
        I'm an Master's AI student at the University of Amsterdam, alongside interning at{" "}
        <a className="underline" href="https://www.tomtom.com" rel="noopener noreferrer">
          TomTom
        </a>{" "}
        as a Data Analyst. My research interests lie in Deep Learning, Natural Language Processing, and wizardry🧙. Currently exploring the boundaries of
        curiosity.
      </p>
      <Link href="/cv">
        <Button 
          variant="outline" 
          className="mt-10 bg-gray-800 text-white rounded-full hover:opacity-90 transition-opacity"
        >
          View My CV
        </Button>
      </Link>
    </div>
  )
}
