"use client"

import { useState } from "react"
import { Twitter, Linkedin, Youtube, Mail, Copy, Check } from "lucide-react"
import { Button } from "@/components/ui/button"

export function ContactSection() {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText('pradyutnair.work@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="flex gap-4 justify-center">
      <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
        <Button variant="ghost" size="icon">
          <Twitter className="h-5 w-5" />
        </Button>
      </a>
      <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
        <Button variant="ghost" size="icon">
          <Linkedin className="h-5 w-5" />
        </Button>
      </a>
      <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
        <Button variant="ghost" size="icon">
          <Youtube className="h-5 w-5" />
        </Button>
      </a>
      <Button variant="ghost" size="icon" onClick={copyEmail}>
        {copied ? <Check className="h-5 w-5" /> : <Mail className="h-5 w-5" />}
      </Button>
    </div>
  )
}
