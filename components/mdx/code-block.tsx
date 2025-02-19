"use client"

import { Code } from '@geist-ui/core'

interface CodeBlockProps {
  children: string
  className?: string
  filename?: string
}

export function CodeBlock({ children, className, filename }: CodeBlockProps) {
  // Extract language from className (e.g., "language-javascript" -> "javascript")
  const language = className?.replace('language-', '') || 'javascript'

  return (
    // <div className="my-4">
    //   <Code 
    //     block 
    //     name={filename || undefined} 
    //     className="w-full bg-black"
    //   >
    //     {children.trim()}
    //   </Code>
    // </div>
    <div className="my-4">
      <Code block my={0}>{children}</Code>
    </div>
  )
}
